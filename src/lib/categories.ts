export const categories = [
  { slug: 'buero',   title: 'Büro' },
  { slug: 'gewerbe', title: 'Gewerbe' },
  { slug: 'hotel',   title: 'Hotel' },
  { slug: 'wohnen',  title: 'Wohnen' },
] as const;

export type CategorySlug = (typeof categories)[number]['slug'];

export const categorySlugs = categories.map((c) => c.slug) as [
  CategorySlug,
  ...CategorySlug[],
];
