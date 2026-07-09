import telegramLeadGenerator from './products/telegram-lead-generator.js';
import influencerDataAutomation from './products/influencer-data-automation.js';
import cryptoMorningDigest from './products/crypto-morning-digest.js';
import investmentTopupAutomation from './products/investment-topup-automation.js';
import aiWealthAssistant from './products/ai-wealth-assistant.js';
import marketplaceCustomAiAnalyst from './products/marketplace-custom-ai-analyst.js';
import aiBloggingAgent from './products/ai-blogging-agent.js';
import pinterestSeoTrafficAgent from './products/pinterest-seo-traffic-agent.js';
import aiAgentFor1cChatVoiceAnalytics from './products/ai-agent-for-1c-chat-voice-analytics.js';
import oneCSeoBlogAutomation from './products/1c-seo-blog-automation.js';
import telegramLeadMagnetFunnel from './products/telegram-lead-magnet-funnel.js';
import oneCProcurementAiAutomation from './products/1c-procurement-ai-automation.js';
import oneCDailyDeviationReports from './products/1c-daily-deviation-reports.js';
import oneCCompetitorPriceAnalysis from './products/1c-competitor-price-analysis.js';
import oneCMarketplaceProcurementAssistant from './products/1c-marketplace-procurement-assistant.js';
import oneCProductionQualityDefectsAssistant from './products/1c-production-quality-defects-assistant.js';
import oneCMaterialConsumptionNormsAnalysis from './products/1c-material-consumption-norms-analysis.js';

export const catalogProducts = [
  telegramLeadGenerator,
  influencerDataAutomation,
  cryptoMorningDigest,
  investmentTopupAutomation,
  aiWealthAssistant,
  marketplaceCustomAiAnalyst,
  aiBloggingAgent,
  pinterestSeoTrafficAgent,
  aiAgentFor1cChatVoiceAnalytics,
  oneCSeoBlogAutomation,
  oneCProcurementAiAutomation,
  oneCDailyDeviationReports,
  oneCCompetitorPriceAnalysis,
  oneCMarketplaceProcurementAssistant,
  oneCProductionQualityDefectsAssistant,
  oneCMaterialConsumptionNormsAnalysis,
  telegramLeadMagnetFunnel,
];

export function getProductById(id) {
  return catalogProducts.find((product) => product.id === id);
}
