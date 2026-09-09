import { catalogProducts } from './index.js';
import { directionAssignments } from './directionAssignments.js';
import { directions } from '../directions.js';

const assignmentsById = new Map(directionAssignments.map((entry) => [entry.id, entry]));
const productsById = new Map(catalogProducts.map((product) => [product.id, product]));

export function getProductDirection(id) {
  return directions.find((direction) => direction.slug === assignmentsById.get(id)?.direction);
}

export function getDirectionGroups(slug) {
  const groups = new Map();
  for (const entry of directionAssignments.filter((item) => item.direction === slug)) {
    if (!groups.has(entry.group)) groups.set(entry.group, []);
    groups.get(entry.group).push(productsById.get(entry.id));
  }
  const result = [...groups].map(([label, products], index) => ({
    id: `services-group-${index + 1}`, label, products,
  }));
  const related = directionAssignments.filter((entry) => entry.secondary.includes(slug))
    .map((entry) => productsById.get(entry.id));
  if (related.length) result.push({ id: 'related-services', label: 'Решения на стыке направлений', products: related });
  return result;
}
