export const opportunityFilters = [
  "All",
  "Remote",
  "Internship",
  "Fellowship",
  "Hackathon",
  "Part-time"
] as const;

export type OpportunityFilter = (typeof opportunityFilters)[number];

export const opportunities = [
  {
    title: "AI Research Sprint",
    type: "Fellowship",
    format: "Remote",
    tags: ["AI", "Research", "Student-led"],
    description:
      "Work with a small cohort to turn emerging AI ideas into real prototypes and publishable insight notes.",
    cta: "Apply now"
  },
  {
    title: "Growth Marketing Internship",
    type: "Internship",
    format: "Hybrid",
    tags: ["Marketing", "Content", "Brand"],
    description:
      "Build campaigns for youth-focused products and learn performance storytelling, community loops, and creator funnels.",
    cta: "View role"
  },
  {
    title: "Startup Weekend Builder Pass",
    type: "Hackathon",
    format: "On-site",
    tags: ["Startups", "Pitching", "Networking"],
    description:
      "Join an intensive weekend with founders, operators, and student builders to ship fast and meet collaborators.",
    cta: "Reserve seat"
  },
  {
    title: "UI Systems Residency",
    type: "Part-time",
    format: "Remote",
    tags: ["UI/UX", "Design", "Systems"],
    description:
      "Help shape reusable components and polished interaction patterns for a fast-moving product team.",
    cta: "See details"
  },
  {
    title: "Campus Tech Ambassador",
    type: "Fellowship",
    format: "Remote",
    tags: ["Tech", "Leadership", "Community"],
    description:
      "Lead workshops, activate local communities, and represent startup products inside your college ecosystem.",
    cta: "Join program"
  },
  {
    title: "Content Strategy Lab",
    type: "Internship",
    format: "Remote",
    tags: ["Content", "Storytelling", "Growth"],
    description:
      "Create sharp editorial and short-form content systems for a youth-first media brand with weekly feedback.",
    cta: "Open brief"
  }
] as const;
