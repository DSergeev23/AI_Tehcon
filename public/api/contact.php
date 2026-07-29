<?php
declare(strict_types=1);

const RECIPIENT = 'hello@ai-tehcon.ru';
const SENDER = 'hello@it-tehcon.ru';

header('Content-Type: application/json; charset=UTF-8');
header('Cache-Control: no-store');

function respond(int $status, array $body): never
{
    http_response_code($status);
    echo json_encode($body, JSON_UNESCAPED_UNICODE);
    exit;
}

function value(array $data, string $key, int $maxLength, bool $required = false): string
{
    $raw = $data[$key] ?? '';
    if (!is_string($raw)) {
        respond(422, ['success' => false, 'message' => 'Некорректные данные формы.']);
    }

    $result = trim($raw);
    if (($required && $result === '') || mb_strlen($result) > $maxLength) {
        respond(422, ['success' => false, 'message' => 'Проверьте заполнение формы.']);
    }

    return $result;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Allow: POST');
    respond(405, ['success' => false, 'message' => 'Метод не поддерживается.']);
}

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin !== '' && !in_array($origin, ['https://ai-tehcon.ru', 'https://www.ai-tehcon.ru'], true)) {
    respond(403, ['success' => false, 'message' => 'Недопустимый источник запроса.']);
}

$data = json_decode(file_get_contents('php://input'), true);
if (!is_array($data)) {
    respond(400, ['success' => false, 'message' => 'Не удалось прочитать данные формы.']);
}

// Honeypot: bots receive a successful response, but no email is sent.
if (value($data, 'website', 200) !== '') {
    respond(200, ['success' => true]);
}

$name = value($data, 'name', 100, true);
$email = value($data, 'email', 254, true);
$phone = value($data, 'phone', 50, true);
$company = value($data, 'company', 150) ?: 'Не указана';
$message = value($data, 'message', 5000, true);
$pageUrl = value($data, 'pageUrl', 2048) ?: 'Не указана';

if (!filter_var($email, FILTER_VALIDATE_EMAIL) || strpbrk($email, "\r\n") !== false) {
    respond(422, ['success' => false, 'message' => 'Укажите корректный email.']);
}

$subjectText = "Новая заявка AI TehCon: {$name} / {$company}";
$subject = '=?UTF-8?B?' . base64_encode($subjectText) . '?=';
$body = implode("\n", [
    'Новая заявка с сайта AI TehCon',
    '',
    "Имя: {$name}",
    "Email: {$email}",
    "Телефон: {$phone}",
    "Компания: {$company}",
    '',
    'Задача:',
    $message,
    '',
    "Страница: {$pageUrl}",
    'Дата: ' . date('c'),
]);

$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
    'From: AI TehCon <' . SENDER . '>',
    'Reply-To: ' . $email,
];

// Timeweb's PHP mailer uses this envelope sender for SPF-aligned delivery.
$sent = mail(RECIPIENT, $subject, $body, implode("\r\n", $headers), '-f' . SENDER);
if (!$sent) {
    error_log('AI TehCon contact form: Timeweb mail() failed.');
    respond(502, ['success' => false, 'message' => 'Не удалось отправить заявку.']);
}

respond(200, ['success' => true]);
