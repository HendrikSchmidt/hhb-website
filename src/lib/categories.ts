export type CategorySlug = 'wohngebaeude' | 'hotels' | 'buerogebaeude' | 'einkaufszentren';

export interface Category {
  slug: CategorySlug;
  title: string;
}

export const categories: Category[] = [
  { slug: 'wohngebaeude',    title: 'Wohngebäude' },
  { slug: 'hotels',          title: 'Hotels' },
  { slug: 'buerogebaeude',   title: 'Bürogebäude' },
  { slug: 'einkaufszentren', title: 'Einkaufszentren' },
];
