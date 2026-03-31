export const interests = [
  "Tech",
  "Design",
  "Marketing",
  "Content",
  "Business",
  "AI",
  "Startups",
  "UI/UX",
  "Web Dev"
] as const;

export type Interest = (typeof interests)[number];
