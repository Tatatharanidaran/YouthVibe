export const eventCategories = [
  "All",
  "Networking",
  "Workshop",
  "Hackathon",
  "Talk",
  "Community"
] as const;

export type EventCategory = (typeof eventCategories)[number];

export const featuredEvent = {
  title: "Future Builders Summit",
  date: "April 12",
  time: "5:30 PM IST",
  type: "Networking",
  venue: "Bengaluru + Live Stream",
  description:
    "A flagship YouthVibe gathering bringing founders, creators, designers, and ambitious students into one high-energy room for ideas, intros, and next moves.",
  highlights: ["Founder roundtables", "Live portfolio reviews", "Community matches"],
  cta: "Reserve your pass"
} as const;

export const upcomingEvents = [
  {
    title: "AI Build Jam",
    date: "April 6",
    time: "7:00 PM IST",
    type: "Hackathon",
    cta: "Join event"
  },
  {
    title: "Design Crit Night",
    date: "April 8",
    time: "6:00 PM IST",
    type: "Workshop",
    cta: "Book seat"
  },
  {
    title: "Youth Startup Stories",
    date: "April 10",
    time: "8:00 PM IST",
    type: "Talk",
    cta: "Attend live"
  },
  {
    title: "Community Mixer",
    date: "April 14",
    time: "6:30 PM IST",
    type: "Community",
    cta: "RSVP now"
  },
  {
    title: "Operator Networking Hour",
    date: "April 16",
    time: "5:00 PM IST",
    type: "Networking",
    cta: "Save spot"
  },
  {
    title: "Creator Strategy Workshop",
    date: "April 18",
    time: "4:30 PM IST",
    type: "Workshop",
    cta: "Register"
  }
] as const;
