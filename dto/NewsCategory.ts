export type NewsCategory =
  | "general"
  | "business"
  | "entertainment"
  | "health"
  | "science"
  | "sports"
  | "technology";

export const NewsCategories: { value: NewsCategory; label: string }[] = [
  { value: "general", label: "General" },
  { value: "business", label: "Economía" },
  { value: "entertainment", label: "Entretenimiento" },
  { value: "health", label: "Salud" },
  { value: "science", label: "Ciencia" },
  { value: "sports", label: "Deportes" },
  { value: "technology", label: "Tecnología" },
];  