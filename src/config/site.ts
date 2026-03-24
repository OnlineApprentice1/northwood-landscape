export const siteConfig = {
  name: "Northwood Landscape Co.",
  tagline: "Landscapes That Grow With You",
  description:
    "Third-generation landscaping in Barrie, Ontario. Design, hardscape, maintenance, and snow removal for homeowners who want outdoor spaces that age beautifully.",
  url: "https://northwoodlandscape.ca",
  phone: "(705) 555-0173",
  email: "info@northwoodlandscape.ca",
  address: "Barrie, Ontario",
  serviceArea:
    "Barrie, Innisfil, Oro-Medonte, Springwater, Minesing, and surrounding Simcoe County",
  owner: "Marcus Thibault",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d91799.27246106788!2d-79.7468!3d44.3894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882aa3371ad7206d%3A0x1d4f4b4e4b4f4b4e!2sBarrie%2C%20ON!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca",
  socials: {
    facebook: "https://facebook.com/northwoodlandscape",
    instagram: "https://instagram.com/northwoodlandscape",
  },
  services: [
    {
      name: "Landscape Design & Installation",
      slug: "landscape-design",
      description:
        "Complete outdoor transformations — from concept sketches to the final planted bed. Native species, graded drainage, and designs built for Simcoe County's climate.",
    },
    {
      name: "Hardscape & Stonework",
      slug: "hardscape",
      description:
        "Patios, retaining walls, walkways, and natural stone features. We source local Muskoka granite and Eramosa limestone for work that belongs here.",
    },
    {
      name: "Seasonal Maintenance",
      slug: "seasonal-maintenance",
      description:
        "Spring cleanups, weekly mowing, fall leaf removal, garden bed care, and shrub pruning. Programs tailored to your property, not a one-size-fits-all schedule.",
    },
    {
      name: "Water Features & Drainage",
      slug: "water-features",
      description:
        "Ponds, fountains, dry creek beds, and French drains. We solve water problems and turn them into design features.",
    },
    {
      name: "Snow Removal & Winter Care",
      slug: "snow-removal",
      description:
        "Residential and commercial snow clearing, salting, and winter property checks. Reliable service when Barrie gets buried.",
    },
  ],
} as const;
