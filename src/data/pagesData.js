// Comprehensive Data for Anant Vastu Architect Website

export const siteConfig = {
  name: "Anant Vastu Architect",
  tagline: "Transform Your Space. Align Your Life.",
  subheading: "Expert Vastu Shastra and Astrology guidance for homes, businesses, offices, plots and personal growth.",
  phone: "+91 82696 46419",
  phoneRaw: "918269646419",
  location: "Khategaon, near Indore, Madhya Pradesh, India",
  email: "aanantvastu@gmail.com / Pradeepanwar94@gmail.com",
  brandValues: "Traditional Wisdom. Practical Guidance. Personalized Solutions."
};

export const heroSlidesData = [
  {
    id: 1,
    title: "Scientific Vastu & Architectural Planning - Er. Pradeep Panwar",
    tagline: "BY ER. PRADEEP PANWAR — ANANT VASTU ARCHITECT",
    headline: "Scientific Vastu & Architectural Planning",
    subheading: "Modern architecture guided by 16-Zone Shakti Chakra energy alignment and Astro-Vastu analysis.",
    badge: "16-ZONE SHAKTI CHAKRA",
    image: "/assets/hero_banner_final.png",
    ctaText: "Book Consultation",
    ctaLink: "#/book-consultation",
    secCtaText: "Explore Services",
    secCtaLink: "#/services",
    highlights: [
      { icon: "compass", title: "16-Zone Energy Alignment", desc: "Scientific Shakti Chakra Directional Grid" },
      { icon: "layout", title: "Modern Architectural Design", desc: "Functional, Aesthetic & Sustainable Spaces" },
      { icon: "globe", title: "Astro-Vastu Analysis", desc: "Direction + Planets + Design Integration" },
      { icon: "user-check", title: "Personalized by Er. Pradeep Panwar", desc: "Customized Non-Demolition Solutions" }
    ]
  },
  {
    id: 2,
    title: "Luxury Architectural Villa & Vastu Intelligence",
    tagline: "ANANT VASTU ARCHITECT",
    headline: "Transform Your Space. Align Your Life.",
    subheading: "Expert Vastu Shastra and Astrology guidance for homes, businesses, offices, plots and personal growth.",
    badge: "DESIGNED WITH VASTU INTELLIGENCE",
    image: "/assets/hero_banner_final_2.jpg",
    ctaText: "Book Consultation",
    ctaLink: "#/book-consultation",
    secCtaText: "Explore Services",
    secCtaLink: "#/services"
  },
  {
    id: 3,
    title: "3D Architectural Designs & Vastu Compliance",
    tagline: "DESIGNED WITH VASTU, CRAFTED FOR EXCELLENCE",
    headline: "3D ARCHITECTURAL DESIGNS",
    subheading: "We transform ideas into stunning 3D architectural visuals that inspire and bring your vision to life.",
    badge: "ARCHITECTURAL EXCELLENCE",
    image: "/assets/hero_banner_final_3.jpg",
    ctaText: "Explore Courses",
    ctaLink: "#/courses",
    secCtaText: "Book Consultation",
    secCtaLink: "#/book-consultation",
    stats: [
      { count: "500+", label: "Projects Completed" },
      { count: "10+", label: "Years Experience" },
      { count: "100%", label: "Client Satisfaction" },
      { count: "Pan India", label: "Consultation Service" }
    ]
  }
];

export const heroServicePills = [
  { name: "Home Vastu", link: "#/vastu/home", icon: "home" },
  { name: "Business Vastu", link: "#/vastu/business", icon: "briefcase" },
  { name: "Industrial Vastu", link: "#/vastu/factory", icon: "factory" },
  { name: "Plot Selection", link: "#/vastu/plot-selection", icon: "map-pin" },
  { name: "Astrology Consultation", link: "#/astrology", icon: "sparkles" },
  { name: "Numerology", link: "#/numerology", icon: "hash" },
  { name: "Marriage Compatibility", link: "#/services/marriage-compatibility", icon: "heart" }
];

export const homeServiceCards = [
  {
    title: "Home Vastu",
    desc: "Create a balanced and harmonious living environment with 16-zone directional analysis.",
    icon: "home",
    link: "#/vastu/home",
    badge: "Residential",
    image: "/assets/vastu_villa.jpg"
  },
  {
    title: "Office & Shop Vastu",
    desc: "Improve workspace energy, productivity, customer footfall and business environment.",
    icon: "briefcase",
    link: "#/vastu/office-shop",
    badge: "Commercial",
    image: "/assets/vastu_office.jpg"
  },
  {
    title: "Factory Vastu",
    desc: "Vastu guidance for industrial layouts, machinery placement and manufacturing spaces.",
    icon: "factory",
    link: "#/vastu/factory",
    badge: "Industrial",
    image: "/assets/vastu_factory.jpg"
  },
  {
    title: "Plot Selection",
    desc: "Choose auspicious land with precise slope, road positioning and soil considerations before construction.",
    icon: "map",
    link: "#/vastu/plot-selection",
    badge: "Land & Plots",
    image: "/assets/vastu_plot.jpg"
  },
  {
    title: "Business Vastu",
    desc: "Professional guidance for corporate headquarters, retail chains and commercial hubs.",
    icon: "building-2",
    link: "#/vastu/business",
    badge: "Enterprise",
    image: "/assets/project_3.png"
  },
  {
    title: "Astrology Consultation",
    desc: "Personalized Kundli-based guidance for career, finance, marriage and important life decisions.",
    icon: "sparkles",
    link: "#/astrology",
    badge: "Vedic Astrology",
    image: "/assets/vastu_astrology.jpg"
  }
];

export const allServicesData = {
  vastu: [
    { id: "home", title: "Home Vastu", desc: "Scientific Vastu layout for bungalows, villas & apartments.", link: "#/vastu/home", icon: "home" },
    { id: "office", title: "Office Vastu", desc: "Directional alignment for cabins, staff workstations & meeting rooms.", link: "#/vastu/office-shop", icon: "briefcase" },
    { id: "shop", title: "Shop & Retail Vastu", desc: "Optimizing entrance, cash counter & inventory display for footfall.", link: "#/vastu/office-shop", icon: "shopping-bag" },
    { id: "factory", title: "Factory Vastu", desc: "Heavy machinery, raw materials & power plant directional zoning.", link: "#/vastu/factory", icon: "factory" },
    { id: "industrial", title: "Industrial Vastu", desc: "Warehouse logistics, dispatch gates & boiler/furnace orientations.", link: "#/vastu/factory", icon: "cpu" },
    { id: "business", title: "Business Vastu", desc: "Corporate prosperity, partnership synergy & executive growth.", link: "#/vastu/business", icon: "trending-up" },
    { id: "plot-selection", title: "Plot Selection", desc: "Pre-purchase evaluation of soil, road hits (Veedhi Shula) & slopes.", link: "#/vastu/plot-selection", icon: "map-pin" },
    { id: "hospitals", title: "Hospital Vastu", desc: "Operating theatres, ICU, recovery rooms & patient health alignment.", link: "#/vastu/business/hospitals", icon: "activity" },
    { id: "hotels", title: "Hotel & Restaurant Vastu", desc: "Kitchen (Agni), dining hall, guest rooms & bar lounge energy.", link: "#/vastu/business/hotels", icon: "utensils" },
    { id: "it-offices", title: "IT Office Vastu", desc: "Server rooms, coder focus zones, innovation pods & leadership.", link: "#/vastu/business/it-offices", icon: "monitor" },
    { id: "schools", title: "School / College Vastu", desc: "Classroom learning zones, library, lab & sports ground placement.", link: "#/vastu/business/schools", icon: "book-open" },
    { id: "vastu-audit", title: "Vastu Audit", desc: "Comprehensive on-site and floor-plan audit with zero demolition remedies.", link: "#/vastu/ai-report-generator", icon: "clipboard-check" }
  ],
  astrology: [
    { id: "astrology-consult", title: "Astrology Consultation", desc: "Detailed Kundli reading for career, marriage, health & finance.", link: "#/astrology", icon: "sparkles" },
    { id: "numerology", title: "Numerology Consultation", desc: "Name vibration, business name correction & destiny number analysis.", link: "#/numerology", icon: "hash" },
    { id: "marriage-compatibility", title: "Marriage Compatibility & Kundli Matching", desc: "Ashtakoot Milan, Nadi Dosha, Bhakoot & Mangal Dosha check.", link: "#/services/marriage-compatibility", icon: "heart" },
    { id: "palmistry", title: "Palmistry Consultation", desc: "Hastarekha analysis of life, heart, head, fate & sun lines.", link: "#/services/palmistry", icon: "hand" },
    { id: "tarot-reading", title: "Tarot Reading", desc: "Intuitive 78-card spread guidance for immediate clarity.", link: "#/services/tarot-reading", icon: "layers" },
    { id: "online-puja", title: "Online Puja & Havan", desc: "Vedic rituals conducted by learned priests for dosha nivaran.", link: "#/services/online-puja", icon: "flame" },
    { id: "feng-shui", title: "Feng Shui Consultation", desc: "Chi flow balancing with Bagua map, crystals & wind chimes.", link: "#/services/feng-shui", icon: "wind" },
    { id: "reiki", title: "Reiki Healing", desc: "Chakra balancing and distance pranic energy transmission.", link: "#/services/reiki", icon: "sun" },
    { id: "gemstone-rudraksha", title: "Gemstone & Rudraksha Guidance", desc: "Certified natural gemstones & authentic Mukhi Rudraksha prescription.", link: "#/services/gemstone-rudraksha", icon: "shield" }
  ]
};

export const coursesData = [
  {
    id: "vastu-consultant",
    title: "VASTU CONSULTANT",
    price: "₹21,000",
    rawPrice: 21000,
    subtitle: "Become a Professional Vastu Consultant",
    duration: "12 Weeks (Comprehensive Mastery)",
    badge: "Flagship Professional Program",
    image: "/assets/vastu_blueprint.jpg",
    description: "An end-to-end certification curriculum designed for aspiring consultants, architects, interior designers, and real estate professionals. Master the art and science of 16-zone Vastu, client consultations, and commercial projects.",
    includes: [
      "Fundamentals of Vastu Shastra & Cosmic Energy Grids",
      "Direction & Energy Principles (16 Zones & 32 Entrances)",
      "Vastu for Homes, Villas, and Multi-Story Apartments",
      "Main Entrance Analysis & Scientific Door Placement",
      "Master Bedroom, Children Room & Guest Room Vastu",
      "Kitchen Vastu (Agni Zone Balancing & Elements)",
      "Bathroom & Toilet Vastu with Non-Demolition Corrections",
      "Pooja Room / Mandir Orientation & Deity Placement",
      "Office Vastu, Executive Cabins & Staff Seating Dynamics",
      "Shop & Showroom Vastu for Maximum Sales & Footfall",
      "Factory & Industrial Vastu Layout Planning",
      "Commercial Complex & Multi-Unit Vastu",
      "Plot Selection, Soil Testing & Veedhi Shula Analysis",
      "Vastu Defects Identification & Elemental Clashes",
      "Advanced Vastu Remedies (Metals, Colors, Crystals, Pyramids)",
      "Practical Real-World Case Analysis & Floor Plan Audits",
      "Client Consultation Methodology & Professional Pricing",
      "Professional Consultant Approach & Report Generation"
    ]
  },
  {
    id: "astro-consultant",
    title: "ASTRO CONSULTANT",
    price: "₹21,000",
    rawPrice: 21000,
    subtitle: "Learn the Fundamentals of Vedic Astrology",
    duration: "4 Weeks (Intensive Foundation)",
    badge: "Foundation Astro Mastery",
    image: "/assets/vastu_astrology.jpg",
    description: "A structured, beginner-friendly yet profound course to understand birth charts (Kundli), planetary impacts, zodiac constellations, and personalized astrological analysis.",
    includes: [
      "Introduction to Vedic Astrology & Astrological Philosophy",
      "12 Zodiac Signs (Rashis), Characteristics & Elements",
      "9 Celestial Planets (Navagrahas) & Their Influences",
      "12 Astrological Houses (Bhavas) and Life Domains",
      "27 Nakshatras (Lunar Mansions) & Pada Divisions",
      "Basic Kundli Understanding & Lagna Chart Reading",
      "Planetary Positions, Exaltation, Debilitation & Aspects",
      "Career Analysis & Profession Indicators in Horoscope",
      "Marriage Analysis & Compatibility Fundamentals",
      "Finance & Wealth House (2nd & 11th Bhava) Analysis",
      "Basic Dosha Understanding (Mangal, Kaal Sarp, Sade Sati)",
      "Consultation Fundamentals & Ethical Vedic Guidance"
    ]
  }
];

export const pricingPlans = [
  {
    category: "Residential Vastu",
    title: "Home & Apartment Vastu",
    price: "₹5,100",
    desc: "Personalized 16-zone consultation for your flat, villa, or independent house.",
    features: [
      "16-Zone Energy Grid Analysis",
      "Entrance, Kitchen, Master Bed & Pooja Room Check",
      "Zero-Demolition Metal & Color Remedies",
      "30-Minute Video / Phone Consultation",
      "Detailed PDF Summary Report"
    ],
    cta: "Book Home Vastu"
  },
  {
    category: "Commercial Vastu",
    title: "Business & Office Vastu",
    price: "₹11,000",
    desc: "Vastu optimization for corporate offices, retail stores, and commercial buildings.",
    features: [
      "Complete Floor Plan & Cabin Layout Audit",
      "Cash Counter, Accounts & CEO Desk Alignment",
      "Sales Boost & Employee Energy Optimization",
      "60-Minute In-Depth Consultation",
      "Comprehensive Vastu Action Blueprint"
    ],
    cta: "Book Business Vastu",
    popular: true
  },
  {
    category: "Astro Guidance",
    title: "Vedic Astrology Consultation",
    price: "₹21,000",
    desc: "Personalized Kundli analysis covering career, marriage, finance and remedies.",
    features: [
      "Complete Birth Chart (Lagna & Navamsha) Reading",
      "Dasha Analysis & Future Timeline Predictions",
      "Career, Marriage & Wealth Forecast",
      "Gemstone, Mantra & Yantra Guidance",
      "Direct 1-on-1 Session with Pinki Panwar (40 mins)"
    ],
    cta: "Book Astrology"
  },
  {
    category: "AI Smart Report",
    title: "AI Vastu Report Generator",
    price: "Instant / Free Preview",
    desc: "Upload floor plan and receive structured Vastu analysis instantly.",
    features: [
      "Automated 16-Zone Directional Breakdown",
      "Elemental Imbalance Detection",
      "Room-by-Room Score Matrix",
      "Instant Downloadable Analysis",
      "Optional Expert Review Add-on"
    ],
    cta: "Generate AI Report"
  }
];

export const blogArticles = [
  {
    slug: "vastu-tips-home-2026",
    title: "Vastu Tips for Home 2026: Practical Energy Alignment for Modern Living",
    author: "Anant Vastu Architect",
    date: "August 2026",
    category: "Home Vastu",
    readTime: "6 min read",
    image: "/assets/vastu_villa.jpg",
    summary: "Discover essential directional guidelines for the North-East, South-East, and South-West zones to boost peace, harmony, and vitality in contemporary urban apartments.",
    content: `
      <h3>Harmonizing Contemporary Spaces with Ancient Wisdom</h3>
      <p>In modern urban apartments and villas, architectural constraints often prevent structural changes. However, authentic Vastu Shastra principles focus on energetic balancing rather than mandatory demolition. Here are the core guidelines for 2026:</p>
      
      <h4>1. The Sacred North-East (Ishanya): Prana and Mental Clarity</h4>
      <p>The North-East zone governs spiritual wisdom, mental serenity, and cosmic inflow. Keep this corner light, spotlessly clean, and free from heavy storage or clutter. An indoor water fountain or brass bowl with fresh water and flowers enhances positive vibration.</p>
      
      <h4>2. South-East (Agni): Financial Flow and Vitality</h4>
      <p>The South-East direction is ruled by the Fire element (Agni). This is the supreme position for the kitchen burner. If your kitchen is misplaced in the North or North-East, balance the water-fire conflict using a natural green Baroda marble slab beneath the gas stove.</p>
      
      <h4>3. South-West (Nairitya): Master Stability & Leadership</h4>
      <p>The South-West represents the Earth element (Prithvi) and governs authority, health stability, and relationship longevity. Ensure the master bedroom is situated here with the bed headboard placed towards the South or East.</p>
    `
  },
  {
    slug: "mangal-dosha-marriage-guide",
    title: "Mangal Dosha Marriage Guide: Vedic Facts, Myths, and Effective Remedies",
    author: "Anant Vastu Architect",
    date: "July 2026",
    category: "Astrology",
    readTime: "8 min read",
    image: "/assets/vastu_astrology.jpg",
    summary: "A definitive guide to understanding Mars (Mangal) in the 1st, 4th, 7th, 8th, and 12th houses, its cancellations (Bhanga), and authentic Vedic remedies for marital bliss.",
    content: `
      <h3>Demystifying Mars in Vedic Astrology</h3>
      <p>Mars is the planet of passion, courage, vital energy, and assertion. When placed in specific houses (1, 4, 7, 8, 12) from the Lagna, Moon, or Venus, it creates Manglik Dosha. However, in over 70% of birth charts, natural astrological cancellations exist.</p>
      
      <h4>Common Cancellations of Manglik Dosha</h4>
      <ul>
        <li>Mars placed in its own sign (Aries or Scorpio) or exalted in Capricorn.</li>
        <li>Mars aspected by benevolent Jupiter (Guru Drishti).</li>
        <li>Partner having an equally strong Mars placement or Saturn in the 7th house.</li>
      </ul>
      
      <h4>Authentic Remedies</h4>
      <p>Chanting the Hanuman Chalisa daily, offering red lentils (masoor dal) on Tuesdays, and performing Kumbh Vivah under experienced Vedic guidance are proven classical remedies.</p>
    `
  },
  {
    slug: "numerology-business-name",
    title: "Numerology Business Name: Choosing a High-Vibration Brand Name",
    author: "Anant Vastu Architect",
    date: "June 2026",
    category: "Numerology",
    readTime: "5 min read",
    image: "/assets/vastu_office.jpg",
    summary: "Learn how the Chaldean and Pythagorean numerical systems calculate brand name vibrations to attract investors, clients, and commercial longevity.",
    content: `
      <h3>The Power of Numerical Resonance in Branding</h3>
      <p>Every alphabet carries a numerical frequency. When the letters in your business name add up to a compound number harmonizing with the founder's Life Path and Destiny numbers, business traction multiplies.</p>
      
      <h4>Favorable Master Numbers for Commerce</h4>
      <ul>
        <li><strong>Number 1 (Sun):</strong> 19, 37, 46 — Leadership, innovation, government contracts.</li>
        <li><strong>Number 5 (Mercury):</strong> 14, 23, 32, 41 — Fast commerce, marketing, trade, networking.</li>
        <li><strong>Number 6 (Venus):</strong> 15, 24, 33, 42 — Luxury brands, architecture, hospitality, design.</li>
      </ul>
    `
  },
  {
    slug: "gemstone-wearing-guide",
    title: "Gemstone Wearing Guide: Rules, Auspicious Days, and Vedic Energization",
    author: "Anant Vastu Architect",
    date: "May 2026",
    category: "Remedies",
    readTime: "7 min read",
    image: "/assets/vastu_gemstones.jpg",
    summary: "Discover how to properly select, cleanse, and wear Jyotish-quality natural gemstones aligned with your favorable Lagna lord to channel cosmic rays.",
    content: `
      <h3>Scientific Principles of Vedic Gemology (Ratna Shastra)</h3>
      <p>Gemstones act as optical energy prisms, filtering specific cosmic wavelengths into the human aura through skin contact. Wearing an unheated, untreated natural gemstone can revitalize weak benefic planets.</p>
      
      <h4>Key Wearing Guidelines</h4>
      <ul>
        <li><strong>Yellow Sapphire (Pukhraj):</strong> Thursday morning in gold on the index finger.</li>
        <li><strong>Blue Sapphire (Neelam):</strong> Saturday evening in silver/panchdhatu on the middle finger after strict test wear.</li>
        <li><strong>Emerald (Panna):</strong> Wednesday morning in gold or bronze on the little finger.</li>
        <li><strong>Red Coral (Moonga):</strong> Tuesday morning in copper or gold on the ring finger.</li>
      </ul>
    `
  },
  {
    slug: "monsoon-vastu-home-care",
    title: "Monsoon Vastu Home Care: Moisture, Mold, and Energy Cleansing Tips",
    author: "Anant Vastu Architect",
    date: "April 2026",
    category: "Home Vastu",
    readTime: "5 min read",
    image: "/assets/project_2.png",
    summary: "How to prevent water stagnation in the North-East and dampness in the South-West during rainy seasons to maintain crisp, uplifting household prana.",
    content: `
      <h3>Seasonal Vastu Transitions for Monsoon Months</h3>
      <p>The monsoon season brings abundant water element (Jala Tatwa), which must be balanced to avoid sluggish energy, health complaints, or financial stagnation.</p>
      <p>Ensure rainwater gutters flow naturally towards the North or East. Keep camphor diffusers in corners to eliminate damp odors and negative ether.</p>
    `
  },
  {
    slug: "rahu-ketu-remedies-2026",
    title: "Rahu-Ketu Remedies 2026: Balancing Karmic Nodes for Breakthroughs",
    author: "Anant Vastu Architect",
    date: "March 2026",
    category: "Astrology",
    readTime: "7 min read",
    image: "/assets/vastu_pooja.jpg",
    summary: "Strategic Vedic remedies for Rahu and Ketu transits to overcome sudden roadblocks, anxiety, and unlock digital and international breakthroughs.",
    content: `
      <h3>Navigating the Karmic Shadow Planets</h3>
      <p>Rahu and Ketu represent our karmic destiny axis. Rahu generates ambition and unconventional thinking, while Ketu provides detachment and spiritual insight.</p>
      <p>Keeping the South-West clean pacifies Rahu, while feeding stray dogs and keeping silver items calms Ketu's unpredictable transit shocks.</p>
    `
  }
];

export const horoscopesData = [
  { sign: "Aries", sanskrit: "Mesha", element: "Fire", planet: "Mars", luckNum: "9", color: "Crimson Red", forecast: "High vitality and sudden professional breakthroughs. Mars in favorable aspect brings courage for real estate decisions." },
  { sign: "Taurus", sanskrit: "Vrishabha", element: "Earth", planet: "Venus", luckNum: "6", color: "Lotus Pink", forecast: "Financial stability improves with Venus transits. Focus on family harmony and luxury home enhancements." },
  { sign: "Gemini", sanskrit: "Mithuna", element: "Air", planet: "Mercury", luckNum: "5", color: "Emerald Green", forecast: "Exceptional business communications, networking opportunities, and rapid paperwork clearance." },
  { sign: "Cancer", sanskrit: "Karka", element: "Water", planet: "Moon", luckNum: "2", color: "Pearl White", forecast: "Emotional clarity returns. Auspicious time for domestic peace, mother’s health care, and spiritual pujas." },
  { sign: "Leo", sanskrit: "Simha", element: "Fire", planet: "Sun", luckNum: "1", color: "Royal Gold", forecast: "Leadership recognition at work. Authority and public prestige receive a strong astrological boost." },
  { sign: "Virgo", sanskrit: "Kanya", element: "Earth", planet: "Mercury", luckNum: "5", color: "Pastel Green", forecast: "Detailed analytical projects yield high returns. Health remedies and balanced diet show fast results." },
  { sign: "Libra", sanskrit: "Tula", element: "Air", planet: "Venus", luckNum: "6", color: "Cream / Sky Blue", forecast: "Partnerships, marital harmony, and collaborative deals thrive. Great phase for design and aesthetic investments." },
  { sign: "Scorpio", sanskrit: "Vrishchika", element: "Water", planet: "Mars", luckNum: "9", color: "Dark Maroon", forecast: "Deep intuitive insights. Overcoming hidden adversaries and unlocking pending property inheritances." },
  { sign: "Sagittarius", sanskrit: "Dhanu", element: "Fire", planet: "Jupiter", luckNum: "3", color: "Saffron Yellow", forecast: "Higher learning, consultancy success, and spiritual travel bring immense joy and inner expansion." },
  { sign: "Capricorn", sanskrit: "Makara", element: "Earth", planet: "Saturn", luckNum: "8", color: "Navy Blue", forecast: "Hard work converts into enduring wealth. Industrial projects and long-term land investments flourish." },
  { sign: "Aquarius", sanskrit: "Kumbha", element: "Air", planet: "Saturn", luckNum: "8", color: "Electric Blue", forecast: "Breakthrough innovations and foreign collaboration opportunities. Social network expands significantly." },
  { sign: "Pisces", sanskrit: "Meena", element: "Water", planet: "Jupiter", luckNum: "3", color: "Golden Yellow", forecast: "Spiritual peace, creative inspiration, and blessings in family life. Auspicious period for charitable deeds." }
];
