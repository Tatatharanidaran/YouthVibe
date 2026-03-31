export const rewardsSummary = {
  xp: 1840,
  currentLevel: "Level 4",
  nextLevel: "Level 5",
  nextLevelXp: 2200,
  streak: "12 day streak",
  completion: 84
} as const;

export const badgeGroups = [
  {
    title: "Unlocked badges",
    description: "Signals you have already earned through visible contribution and follow-through.",
    items: [
      {
        name: "Builder Badge",
        status: "unlocked",
        detail: "Completed onboarding and built your first visible profile.",
        xp: "Unlocked"
      },
      {
        name: "Community Connector",
        status: "unlocked",
        detail: "Attended multiple events and stayed active across the network.",
        xp: "Unlocked"
      },
      {
        name: "Momentum Maker",
        status: "unlocked",
        detail: "Maintained strong weekly activity across opportunities and rewards.",
        xp: "Unlocked"
      }
    ]
  },
  {
    title: "Next unlocks",
    description: "The next recognitions that become available as your activity compounds.",
    items: [
      {
        name: "Launch Ready",
        status: "locked",
        detail: "Apply to 3 more curated opportunities to unlock this badge.",
        xp: "160 XP away"
      },
      {
        name: "Event Catalyst",
        status: "locked",
        detail: "Check in to 2 more events and host one community interaction.",
        xp: "240 XP away"
      },
      {
        name: "Verified Leader",
        status: "locked",
        detail: "Complete your profile and finish one leadership challenge.",
        xp: "320 XP away"
      }
    ]
  }
] as const;

export const progressTracks = [
  {
    title: "Profile completion",
    progress: 80,
    detail: "A stronger profile improves matching, visibility, and trust."
  },
  {
    title: "Opportunity momentum",
    progress: 72,
    detail: "Your application and participation pattern is trending upward."
  },
  {
    title: "Community engagement",
    progress: 61,
    detail: "You are steadily building presence through live sessions and events."
  }
] as const;
