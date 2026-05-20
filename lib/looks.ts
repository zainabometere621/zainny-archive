import { Look } from "./types";

export const looks: Look[] = [
  {
    id: 1,
    name: "Safiya Jilbab",
    category: "hijab",
    description:
      "A steel blue jilbab with smocked cuffs, worn with quiet elegance. For the woman whose modesty is her greatest statement.",
    image: "/hijab1.jpg",
    tags: ["hijab", "jilbab", "modest"],
  },
  {
    id: 2,
    name: "Stripe Gown",
    category: "gown",
    description:
      "A one shoulder blue and white striped maxi gown with a cinched waist and full skirt. Clean lines, quiet confidence.",
    image: "/gown1.jpg",
    tags: ["gown", "striped", "elegant"],
  },
  {
    id: 3,
    name: "Lavender Two-Piece",
    category: "two-piece",
    description:
      "A draped lavender kimono top cinched at the waist paired with a flowing pleated skirt. Soft, feminine and utterly captivating.",
    image: "/skirt1.jpg",
    tags: ["two-piece", "lavender", "feminine"],
  },
  {
    id: 4,
    name: "Bloom Ankara",
    category: "ankara",
    description:
      "A bold ankara maxi skirt bursting with red and yellow florals on white. African heritage worn with pure joy and confidence.",
    image: "/ankara1.jpg",
    tags: ["ankara", "vibrant", "heritage"],
  },
  {
    id: 5,
    name: "Aqua Bubu",
    category: "bubu",
    description:
      "A sweeping bubu in warm taupe and aqua blue with painted brush stroke details. She floats into every room and owns it.",
    image: "/bubu1.jpg",
    tags: ["bubu", "aqua", "painted"],
  },
  {
    id: 6,
    name: "Indigo Cargo",
    category: "cargo",
    description:
      "High waist deep blue denim cargo jeans with utility pockets. Street style done with intention — casual but completely unbothered.",
    image: "/jean2.jpg",
    tags: ["cargo", "indigo", "streetstyle"],
  },
  {
    id: 7,
    name: "Olive Skirt",
    category: "skirt",
    description:
      "An olive green cargo midi skirt with a front slit and utility pockets. The perfect balance between effortless and edgy.",
    image: "/jean1.jpg",
    tags: ["olive", "cargo", "edgy"],
  },
  {
    id: 8,
    name: "Noir Ankara",
    category: "ankara",
    description:
      "Black and white ankara wide leg trousers paired with a sleek black satin blouse and oversized shades. Modern African royalty.",
    image: "/ankara2.jpg",
    tags: ["ankara", "monochrome", "bold"],
  },
  {
    id: 9,
    name: "Silver Formal",
    category: "formal",
    description:
      "A grey plaid longline vest over a white turtleneck with matching wide leg trousers. Boardroom sophistication with a pearl finish.",
    image: "/formal1.jpg",
    tags: ["formal", "plaid", "sophisticated"],
  },
  {
    id: 10,
    name: "Cocoa Formal",
    category: "formal",
    description:
      "A floor length chocolate brown coat dress with dramatic button detailing and wide leg trousers beneath. Authority has never looked this elegant.",
    image: "/formal2.jpg",
    tags: ["formal", "brown", "structured"],
  },
  {
    id: 11,
    name: "Midi Skirt",
    category: "skirt",
    description:
      "An olive green cargo midi skirt with a front slit and deep utility pockets. Minimal effort, maximum edge.",
    image: "/cargo2.jpg",
    tags: ["cargo", "olive", "minimal"],
  },
  {
    id: 12,
    name: "Damask Bubu",
    category: "bubu",
    description:
      "A steel blue abaya with dramatic cream ruffled sleeves and a matching hijab. Modest dressing elevated to pure artistry.",
    image: "/bubu2.jpg",
    tags: ["bubu", "abaya", "ruffled"],
  },
  {
    id: 13,
    name: "Nour Jilbab",
    category: "hijab",
    description:
      "A camel draped abaya with a gathered waist and wide kimono sleeves. Timeless modesty in its most refined form.",
    image: "/hijab2.jpg",
    tags: ["hijab", "camel", "draped"],
  },
  {
    id: 14,
    name: "flowy skirt",
    category: "two-piece",
    description:
      "A sage green linen shirt and flowing maxi skirt set with bow sleeve details. Modest, fresh and completely effortless.",
    image: "/skirt2.jpg",
    tags: ["two-piece", "sage", "modest"],
  },
  {
    id: 15,
    name: "Velvet Gown",
    category: "gown",
    description:
      "A dramatic purple ball gown with sheer balloon sleeves and a brocade skirt. Made for moments that are remembered forever.",
    image: "/gown2.jpg",
    tags: ["gown", "purple", "dramatic"],
  },
  {
    id: 16,
    name: "monochrome  Cargo",
    category: "cargo",
    description:
      "Black wide leg cargo trousers in a bold monochrome print paired with a sleek satin wrap blouse. Effortlessly unbothered, undeniably powerful.",
    image: "/cargo1.jpg",
    tags: ["cargo", "monochrome", "streetstyle"],
  },
];
export async function getLooks(): Promise<Look[]> {
  return looks
}
