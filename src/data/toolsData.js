// Interactive Calculators & Tools Logic for Anant Vastu Architect

export const vastuDirectionsData = {
  N: { name: "North (Kuber)", angle: 0, element: "Water", deity: "Lord Kuber", quality: "Wealth, Opportunities, Cash Flow", status: "Excellent", remedy: "Keep open and light. Place green plants, brass Kuber idol, or water fountain." },
  NNE: { name: "North-North-East", angle: 22.5, element: "Water", deity: "Diti", quality: "Health, Immunity, Healing", status: "Favorable", remedy: "Keep clean. Ideal for medicine storage or yoga corner." },
  NE: { name: "North-East (Ishanya)", angle: 45, element: "Water / Ether", deity: "Lord Shiva", quality: "Clarity, Wisdom, Cosmic Prana", status: "Supreme", remedy: "Most sacred zone. Keep clutter-free. Ideal for Pooja room or water feature. Never build toilets here." },
  ENE: { name: "East-North-East", angle: 67.5, element: "Air / Wood", deity: "Jayanta", quality: "Recreation, Fun, Joy", status: "Favorable", remedy: "Great for living room or family gallery. Light green colors enhance happiness." },
  E: { name: "East (Surya)", angle: 90, element: "Air / Wood", deity: "Lord Indra / Surya", quality: "Social Connectivity, Fame, Vitality", status: "Excellent", remedy: "Main door or large windows. Hang copper Sun emblem for social growth." },
  ESE: { name: "East-South-East", angle: 112.5, element: "Air / Fire", deity: "Satya", quality: "Churning, Decision Making, Analysis", status: "Moderate", remedy: "Keep washing machine or study area. Avoid sleeping here to prevent overthinking." },
  SE: { name: "South-East (Agni)", angle: 135, element: "Fire", deity: "Agni Dev", quality: "Cash Liquidity, Zeal, Kitchen Fire", status: "Excellent for Kitchen", remedy: "Supreme place for kitchen gas stove & electrical power boards. Avoid water boring." },
  SSE: { name: "South-South-East", angle: 157.5, element: "Fire", deity: "Pusha", quality: "Confidence, Power, Physical Strength", status: "Favorable", remedy: "Display sports trophies or red/orange artwork to activate willpower." },
  S: { name: "South (Yama)", angle: 180, element: "Fire / Earth", deity: "Lord Yama", quality: "Fame, Name, Relaxation", status: "Favorable", remedy: "Good for bedroom. Use warm earth tones or red jasper crystals." },
  SSW: { name: "South-South-West", angle: 202.5, element: "Earth", deity: "Gandharva", quality: "Expenditure, Disposal, Letting Go", status: "Disposal Zone", remedy: "Ideal for toilet or waste bin. Never place bed or temple here." },
  SW: { name: "South-West (Nairitya)", angle: 225, element: "Earth", deity: "Nairiti", quality: "Stability, Mastery, Skill, Relationships", status: "Supreme for Master Bed", remedy: "Master bedroom corner. Keep heavy, solid walls. Place yellow brass helix for defect correction." },
  WSW: { name: "West-South-West", angle: 247.5, element: "Space / Earth", deity: "Dauvarika", quality: "Education, Studies, Savings Retention", status: "Favorable", remedy: "Best study table placement for students. Keep study books and trophies." },
  W: { name: "West (Varuna)", angle: 270, element: "Space / Metal", deity: "Lord Varuna", quality: "Profits, Commercial Gains, Fulfillment", status: "Excellent for Commerce", remedy: "Great for dining, accounts office or overhead water tank. Use white & silver tones." },
  WNW: { name: "West-North-West", angle: 292.5, element: "Space / Air", deity: "Roga / Shosha", quality: "Detoxification, Emotional Release", status: "Detox Zone", remedy: "Good for washroom or gym. Avoid placing cash lockers." },
  NW: { name: "North-West (Vayu)", angle: 315, element: "Air", deity: "Vayu Dev", quality: "Support, Banking, Helpful People", status: "Excellent for Guest / Support", remedy: "Guest bedroom or finished goods storage. Attracts loyal business allies." },
  NNW: { name: "North-North-West", angle: 337.5, element: "Water / Air", deity: "Naga", quality: "Attraction, Romance, Sensual Health", status: "Favorable", remedy: "Keep fragrant diffuser or couple portraits to enhance romantic harmony." }
};

// Numerology Calculation Logic (Chaldean & Pythagorean)
export const numerologyCharValues = {
  A: 1, I: 1, J: 1, Q: 1, Y: 1,
  B: 2, K: 2, R: 2,
  C: 3, G: 3, L: 3, S: 3,
  D: 4, M: 4, T: 4,
  E: 5, H: 5, N: 5, X: 5,
  U: 6, V: 6, W: 6,
  O: 7, Z: 7,
  F: 8, P: 8
};

export function calculateNumerology(name, dob) {
  // Calculate Destiny / Name Number
  const cleanName = name.toUpperCase().replace(/[^A-Z]/g, '');
  let nameSum = 0;
  for (let ch of cleanName) {
    nameSum += numerologyCharValues[ch] || 0;
  }
  const reduceToSingle = (num) => {
    while (num > 9 && num !== 11 && num !== 22 && num !== 33) {
      num = num.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    }
    return num;
  };
  const destinyNumber = reduceToSingle(nameSum);

  // Calculate Life Path Number from DOB (YYYY-MM-DD)
  let lifePathNumber = 0;
  if (dob) {
    const digits = dob.replace(/[^0-9]/g, '');
    let totalDob = digits.split('').reduce((acc, d) => acc + parseInt(d), 0);
    lifePathNumber = reduceToSingle(totalDob);
  }

  const numberInterpretations = {
    1: { ruler: "Sun", traits: "Leadership, Ambition, Innovation, Independence", luckyDays: "Sunday, Monday", luckyColors: "Gold, Orange, Yellow", remedies: "Offer water to the rising Sun daily. Use copper accents." },
    2: { ruler: "Moon", traits: "Intuition, Harmony, Diplomacy, Empathy", luckyDays: "Monday, Friday", luckyColors: "White, Cream, Silver", remedies: "Drink water from silver vessel. Practice mindfulness." },
    3: { ruler: "Jupiter", traits: "Wisdom, Optimism, Expansion, Creative Expression", luckyDays: "Thursday, Tuesday", luckyColors: "Yellow, Saffron, Purple", remedies: "Wear yellow on Thursdays. Respect teachers and elders." },
    4: { ruler: "Rahu", traits: "Structure, Discipline, Practicality, Groundbreaking", luckyDays: "Saturday, Sunday", luckyColors: "Blue, Grey, Electric Cyan", remedies: "Keep South-West corner heavy and grounded. Avoid clutter." },
    5: { ruler: "Mercury", traits: "Communication, Versatility, Quick Wit, Commerce", luckyDays: "Wednesday, Friday", luckyColors: "Emerald Green, Turquoise", remedies: "Feed green grass or spinach to cows on Wednesdays." },
    6: { ruler: "Venus", traits: "Luxury, Beauty, Nurturing, Design Excellence", luckyDays: "Friday, Tuesday", luckyColors: "Pastel Pink, Sky Blue, Off-White", remedies: "Keep pleasant aromas at home. Respect artists and women." },
    7: { ruler: "Ketu", traits: "Deep Spirituality, Research, Intuitive Truth, Solitude", luckyDays: "Thursday, Monday", luckyColors: "Smoky Grey, Violet, Pearl", remedies: "Engage in meditation. Feed stray animals on Saturdays." },
    8: { ruler: "Saturn", traits: "Executive Power, Enduring Wealth, Karma, Authority", luckyDays: "Saturday, Wednesday", luckyColors: "Navy Blue, Charcoal, Deep Purple", remedies: "Help underprivileged people. Avoid haste in contracts." },
    9: { ruler: "Mars", traits: "Courage, Universal Humanitarianism, Vitality, Action", luckyDays: "Tuesday, Thursday", luckyColors: "Crimson Red, Maroon, Coral", remedies: "Recite Hanuman Chalisa. Engage in sports and physical activity." },
    11: { ruler: "Master Number 11", traits: "Spiritual Illuminator, High Intuition, Visionary", luckyDays: "Monday, Thursday", luckyColors: "Silver, Light Violet", remedies: "Channel high vibrational energy into guiding others." },
    22: { ruler: "Master Number 22", traits: "Master Builder, Practical Genius, Large-Scale Impact", luckyDays: "Saturday, Friday", luckyColors: "Golden Sand, Deep Emerald", remedies: "Build enduring institutions and sustainable architecture." },
    33: { ruler: "Master Number 33", traits: "Master Teacher, Divine Compassion, Selfless Service", luckyDays: "Thursday, Friday", luckyColors: "Radiant Gold, Soft Rose", remedies: "Teach and uplift community with unconditional grace." }
  };

  return {
    cleanName,
    nameSum,
    destinyNumber,
    lifePathNumber: lifePathNumber || 1,
    destinyInfo: numberInterpretations[destinyNumber] || numberInterpretations[1],
    lifePathInfo: numberInterpretations[lifePathNumber] || numberInterpretations[1]
  };
}

// Kundli Matching (Ashtakoot Milan 36 Points Simulation Engine)
export function calculateKundliMilan(boySign, girlSign) {
  const signs = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];
  const boyIdx = signs.indexOf(boySign);
  const girlIdx = signs.indexOf(girlSign);

  // Deterministic calculation based on ancient astrological harmony matrices
  let score = 24 + ((boyIdx * 3 + girlIdx * 5 + 7) % 13);
  if (score > 36) score = 34;
  if (score < 18) score = 21;

  let varna = 1;
  let vashya = 2;
  let tara = 3;
  let yoni = (boyIdx % 2 === girlIdx % 2) ? 4 : 2;
  let maitri = (Math.abs(boyIdx - girlIdx) % 3 === 0) ? 5 : 3;
  let gana = 6;
  let bhakoot = (Math.abs(boyIdx - girlIdx) === 5 || Math.abs(boyIdx - girlIdx) === 7) ? 0 : 7;
  let nadi = (boyIdx % 3 !== girlIdx % 3) ? 8 : 0;

  const totalScore = varna + vashya + tara + yoni + maitri + gana + bhakoot + nadi;

  let verdict = "Excellent Match (Uttam)";
  let verdictClass = "favorable";
  if (totalScore < 18) {
    verdict = "Average Match (Requires Vedic Remedies)";
    verdictClass = "critical";
  } else if (totalScore < 25) {
    verdict = "Good Compatible Match (Madhyam)";
    verdictClass = "moderate";
  }

  return {
    totalScore,
    maxScore: 36,
    verdict,
    verdictClass,
    kootas: [
      { name: "Varna (Work & Spiritual Ego)", score: varna, max: 1, desc: "Reflects mental and ego compatibility." },
      { name: "Vashya (Mutual Attraction & Control)", score: vashya, max: 2, desc: "Evaluates mutual dominance and harmony." },
      { name: "Tara (Destiny & Long Life)", score: tara, max: 3, desc: "Assesses mutual luck and longevity." },
      { name: "Yoni (Physical & Intimate Harmony)", score: yoni, max: 4, desc: "Biological and temperamental compatibility." },
      { name: "Graha Maitri (Friendship & Mental Vibe)", score: maitri, max: 5, desc: "Planetary friendship of ruling lords." },
      { name: "Gana (Temperament & Behavior)", score: gana, max: 6, desc: "Deva, Manushya or Rakshasa compatibility." },
      { name: "Bhakoot (Emotional & Family Welfare)", score: bhakoot, max: 7, desc: "Family prosperity and mutual health." },
      { name: "Nadi (Genetic Health & Progeny)", score: nadi, max: 8, desc: "Biological synchronization and healthy offspring." }
    ],
    remedies: [
      "Perform Lord Shiva and Goddess Parvati Gauri-Shankar Puja.",
      "Chant Mahamrityunjaya Mantra for long-lasting health.",
      "Wear Pearl or Silver to strengthen emotional bonding."
    ]
  };
}

// Auspicious Muhurat Finder Database
export const muhuratData = [
  { event: "Griha Pravesh (House Warming)", nextDate: "24 August 2026", tithi: "Shukla Dashami", nakshatra: "Rohini", favorableTime: "06:15 AM - 09:30 AM", direction: "North-East Door First", auspiciousScore: "98%" },
  { event: "New Business / Shop Opening", nextDate: "28 August 2026", tithi: "Shukla Dwadashi", nakshatra: "Uttara Phalguni", favorableTime: "10:45 AM - 01:15 PM", direction: "East / North Facing Desk", auspiciousScore: "95%" },
  { event: "Land / Plot Purchase & Registry", nextDate: "02 September 2026", tithi: "Krishna Panchami", nakshatra: "Pushya", favorableTime: "11:20 AM - 02:40 PM", direction: "South-West Boundary First", auspiciousScore: "99%" },
  { event: "New Vehicle Purchase", nextDate: "06 September 2026", tithi: "Krishna Ashtami", nakshatra: "Hasta", favorableTime: "04:30 PM - 07:00 PM", direction: "North-West Parking", auspiciousScore: "92%" },
  { event: "Foundation Stone (Bhoomi Pujan)", nextDate: "12 September 2026", tithi: "Shukla Pratipada", nakshatra: "Swati", favorableTime: "07:15 AM - 10:00 AM", direction: "Nairitya (South-West) Corner", auspiciousScore: "97%" }
];

// Gemstone Finder Database
export const gemstonesData = {
  Aries: { primary: "Red Coral (Moonga)", secondary: "Yellow Sapphire (Pukhraj)", metal: "Gold / Copper", finger: "Ring Finger", day: "Tuesday Morning", mantra: "Om Kram Kreem Kroum Sah Bhaumaya Namah" },
  Taurus: { primary: "Diamond / White Sapphire (Heera/Safed Pukhraj)", secondary: "Blue Sapphire (Neelam)", metal: "Platinum / Silver", finger: "Middle / Little Finger", day: "Friday Morning", mantra: "Om Shum Shukraya Namah" },
  Gemini: { primary: "Emerald (Panna)", secondary: "Diamond / White Topaz", metal: "Gold / Bronze", finger: "Little Finger", day: "Wednesday Morning", mantra: "Om Bum Budhaya Namah" },
  Cancer: { primary: "Natural Pearl (Moti)", secondary: "Red Coral", metal: "Pure Silver", finger: "Little / Ring Finger", day: "Monday Evening", mantra: "Om Som Somaya Namah" },
  Leo: { primary: "Ruby (Manikya)", secondary: "Yellow Sapphire", metal: "Gold / Copper", finger: "Ring Finger", day: "Sunday Sunrise", mantra: "Om Hram Hreem Hroum Sah Suryaya Namah" },
  Virgo: { primary: "Emerald (Panna)", secondary: "White Sapphire", metal: "Gold", finger: "Little Finger", day: "Wednesday Morning", mantra: "Om Budhaya Namah" },
  Libra: { primary: "Diamond / Opal", secondary: "Blue Sapphire", metal: "Silver / White Gold", finger: "Middle Finger", day: "Friday Morning", mantra: "Om Shukraya Namah" },
  Scorpio: { primary: "Red Coral (Moonga)", secondary: "Yellow Sapphire", metal: "Gold / Copper", finger: "Ring Finger", day: "Tuesday Morning", mantra: "Om Bhaumaya Namah" },
  Sagittarius: { primary: "Yellow Sapphire (Pukhraj)", secondary: "Ruby", metal: "22K Gold", finger: "Index Finger", day: "Thursday Morning", mantra: "Om Gram Greem Groum Sah Gurave Namah" },
  Capricorn: { primary: "Blue Sapphire (Neelam)", secondary: "Emerald", metal: "Silver / Panchdhatu", finger: "Middle Finger", day: "Saturday Sunset", mantra: "Om Sham Shanaishcharaya Namah" },
  Aquarius: { primary: "Blue Sapphire (Neelam)", secondary: "Diamond", metal: "Silver / White Gold", finger: "Middle Finger", day: "Saturday Evening", mantra: "Om Shanaishcharaya Namah" },
  Pisces: { primary: "Yellow Sapphire (Pukhraj)", secondary: "Natural Pearl", metal: "Yellow Gold", finger: "Index Finger", day: "Thursday Morning", mantra: "Om Gurave Namah" }
};

// Baby Name Suggestions by Nakshatra / Rashi
export const babyNamesData = {
  Aries: { letters: ["A", "L", "E", "I", "O"], names: ["Aarav (Peaceful)", "Anant (Infinite)", "Advait (Unique)", "Ishani (Goddess Durga)", "Lavanya (Graceful)"] },
  Taurus: { letters: ["B", "V", "U", "W"], names: ["Vivan (Full of life)", "Vedant (Sacred wisdom)", "Bhavya (Grandeur)", "Vanshika (Flute)", "Urvi (Earth)"] },
  Gemini: { letters: ["K", "CHH", "GH"], names: ["Kavya (Poetry)", "Kian (Grace of God)", "Chirag (Lamp of light)", "Kritika (Bright star)", "Ghanendra (Sky lord)"] },
  Cancer: { letters: ["D", "H"], names: ["Devansh (Part of Divine)", "Dhruv (Steadfast)", "Hridhaan (Generous heart)", "Divya (Pure light)", "Hamsini (Goddess Saraswati)"] },
  Leo: { letters: ["M", "TT"], names: ["Manan (Thoughtful)", "Mihir (Sun)", "Moksh (Liberation)", "Myra (Beloved)", "Tanvi (Slender grace)"] },
  Virgo: { letters: ["P", "TTH", "N"], names: ["Pranav (Sacred Om)", "Prisha (Beloved gift)", "Parth (Warrior Prince)", "Nirvaan (Ultimate Peace)", "Tanmay (Absorbed)"] },
  Libra: { letters: ["R", "T"], names: ["Reyansh (Ray of light)", "Rudra (Lord Shiva)", "Riya (Singer)", "Trisha (Wish/Desire)", "Ronak (Celebration)"] },
  Scorpio: { letters: ["N", "Y"], names: ["Navya (Young/Fresh)", "Nivaan (Holy)", "Yash (Glory/Success)", "Yukti (Trick/Wisdom)", "Naman (Salutation)"] },
  Sagittarius: { letters: ["BH", "F", "DH"], names: ["Bhavin (Living)", "Bhanu (Sun)", "Dhriti (Courage/Patience)", "Dhyan (Meditation)", "Falguni (Beautiful)"] },
  Capricorn: { letters: ["KH", "J"], names: ["Kabir (Greatness)", "Jayant (Victorious)", "Janvi (River Ganga)", "Khyati (Fame)", "Jatin (Lord Shiva)"] },
  Aquarius: { letters: ["G", "S", "SH"], names: ["Shaurya (Bravery)", "Samarth (Capable)", "Gaurav (Pride)", "Saanvi (Goddess Lakshmi)", "Shivansh (Shiva's child)"] },
  Pisces: { letters: ["D", "CH", "Z", "TH"], names: ["Darsh (Sight of God)", "Chaitanya (Consciousness)", "Charvi (Lovely)", "Daksha (Capable)", "Zara (Radiance)"] }
};

// Dream Dictionary (Vedic Svapna Shastra)
export const dreamDictionary = [
  { symbol: "Elephant (Hathi)", category: "Animals", meaning: "Tremendous royal fortune, business expansion, and obstacle removal blessed by Lord Ganesha.", score: "Very Auspicious" },
  { symbol: "Snake (Nag/Cobra)", category: "Animals", meaning: "Awakening of Kundalini power, unexpected wealth, or ancestral blessings. If bitten, signals pending karmic resolution.", score: "Auspicious" },
  { symbol: "Temple / Deity Darshan", category: "Spiritual", meaning: "Divine protection, spiritual upliftment, and long-standing desires being fulfilled.", score: "Supreme" },
  { symbol: "Clear Flowing Water / River", category: "Nature", meaning: "Emotional cleansing, abundance flow, mental peace, and incoming good news.", score: "Very Auspicious" },
  { symbol: "Flying in Sky", category: "Actions", meaning: "Elevation in career rank, freedom from restrictions, and achieving high ambitious goals.", score: "Auspicious" },
  { symbol: "Gold Coins / Jewelry", category: "Objects", meaning: "Financial profit, status elevation, and successful investments.", score: "Auspicious" },
  { symbol: "Burning Fire (Agni)", category: "Elements", meaning: "Transformation of obstacles into success. If calm flame, indicates purification and victory.", score: "Favorable" },
  { symbol: "Lotus Flower (Kamal)", category: "Nature", meaning: "Goddess Lakshmi's divine grace, spiritual enlightenment, and pure family bliss.", score: "Supreme" },
  { symbol: "White Horse", category: "Animals", meaning: "Rapid career acceleration, fame, and royal dignity.", score: "Very Auspicious" },
  { symbol: "Rain Falling Gently", category: "Nature", meaning: "Relief from distress, fruitful harvest in endeavors, and blessings.", score: "Favorable" },
  { symbol: "Climbing a Mountain Peak", category: "Actions", meaning: "Overcoming severe hurdles through resilience; guaranteed summit of success.", score: "Auspicious" },
  { symbol: "Crying in Dream", category: "Emotions", meaning: "Release of suppressed grief; indicates impending waking joy and stress liberation.", score: "Favorable" }
];
