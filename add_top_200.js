import fs from 'fs';

// Define the baseline 45 treks (re-creating the original list to ensure a clean database of exactly 200 treks)
const baseIndia = [
  {
    id: "hampta-pass",
    name: "Hampta Pass",
    region: "Himachal Pradesh",
    difficulty: "moderate",
    elevation: "4268m",
    elevM: 4268,
    duration: "5 days",
    durationDays: 5,
    distance: "35 km",
    startPoint: "Manali",
    bestMonths: [4, 5, 6, 7],
    okMonths: [3, 8],
    desc: "Hampta Pass connects the lush Kullu Valley with the stark moon-like landscape of Lahaul. You begin amidst apple orchards and dense forests, and by the time you cross the pass, you're standing in a world that looks like Mars.",
    itinerary: [
      { camp: "Manali → Jobra", km: "6 km", desc: "Drive to Jobra (3300m), trek to Chika base camp." },
      { camp: "Chika → Balu Ka Ghera", km: "8 km", desc: "Follow Rani Nala stream through wildflower meadows." },
      { camp: "Balu → Siagoru", km: "9 km", desc: "Cross Hampta Pass (4268m). Dramatic descent into Lahaul Valley." },
      { camp: "Siagoru → Chatru", km: "6 km", desc: "Gradual descent. Option to visit Chandratal Lake." },
      { camp: "Chatru → Manali", km: "Drive", desc: "Drive back to Manali. Hot springs at Vashisht." }
    ],
    gear: ["Layered jacket", "Trekking poles", "Waterproof boots", "Gloves", "Sunscreen SPF50"],
    tips: { Permit: "No permit required.", "Best weather": "July–August for greenest trails." },
    price: { budget: 5500, standard: 9000, premium: 14000, note: "Transport from Manali, meals, guide, camp, permits" },
    nearby: ["chadar-trek", "valley-of-flowers", "kedarkantha"]
  },
  {
    id: "chadar-trek",
    name: "Chadar Trek",
    region: "Ladakh",
    difficulty: "hard",
    elevation: "3400m",
    elevM: 3400,
    duration: "9 days",
    durationDays: 9,
    distance: "62 km",
    startPoint: "Leh",
    bestMonths: [0, 1],
    okMonths: [],
    desc: "Walk on the frozen Zanskar River — a solid ice sheet called \"chadar\" — in winter when temperatures plunge to -35°C. The frozen canyon walls and absolute silence of Ladakhi winter make this one of the most surreal experiences on the planet.",
    itinerary: [
      { camp: "Leh → Tilad Doh", km: "14 km", desc: "Enter frozen river at Chilling. Trek on ice to first camp." },
      { camp: "Tilad Doh → Tibb Cave", km: "8 km", desc: "Iconic frozen waterfalls. Night in cave shelters." },
      { camp: "Tibb Cave → Naerak", km: "10 km", desc: "Climb steep frozen tributary. Reach Naerak village." },
      { camp: "Return to Chilling", km: "32 km", desc: "3 days retracing route on frozen river." }
    ],
    gear: ["Crampons", "-40°C sleeping bag", "Microspikes", "Thermal base layers", "Balaclava"],
    tips: { Season: "ONLY January–February.", Permit: "Inner Line Permit required." },
    price: { budget: 18000, standard: 28000, premium: 45000, note: "Leh transport, full camp, guide, permits, ILP" },
    nearby: ["roopkund", "hampta-pass", "kedarkantha"]
  },
  {
    id: "valley-of-flowers",
    name: "Valley of Flowers",
    region: "Uttarakhand",
    difficulty: "easy",
    elevation: "3658m",
    elevM: 3658,
    duration: "6 days",
    durationDays: 6,
    distance: "38 km",
    startPoint: "Govindghat",
    bestMonths: [6, 7, 8],
    okMonths: [5, 9],
    desc: "A UNESCO World Heritage Site. Over 500 species of wildflowers bloom simultaneously across a 10 km valley floor every monsoon. The trek also serves as the approach to Hemkund Sahib, one of Sikhism's holiest shrines.",
    itinerary: [
      { camp: "Govindghat → Ghangaria", km: "13 km", desc: "Trek along Pushpawati River through cedar forests." },
      { camp: "Ghangaria → Valley", km: "6 km", desc: "Enter the valley. Wander among blooms." },
      { camp: "Exploration Day", km: "Full day", desc: "Full day exploring, reaching glacier snout." },
      { camp: "Hemkund Sahib", km: "6 km", desc: "Optional steep climb to sacred lake at 4329m." }
    ],
    gear: ["Waterproof jacket", "Trekking shoes", "Rain pants", "Sunhat", "Insect repellent"],
    tips: { Permit: "Entry fee ₹150/day for Indians.", "Best timing": "Mid-July to mid-August for peak bloom." },
    price: { budget: 4000, standard: 7500, premium: 12000, note: "Ghangaria stay, guide, park entry, transport from Haridwar" },
    nearby: ["roopkund", "kedarkantha", "hampta-pass"]
  },
  {
    id: "roopkund",
    name: "Roopkund Trek",
    region: "Uttarakhand",
    difficulty: "hard",
    elevation: "5029m",
    elevM: 5029,
    duration: "8 days",
    durationDays: 8,
    distance: "53 km",
    startPoint: "Loharjung",
    bestMonths: [4, 5, 8, 9],
    okMonths: [3, 10],
    desc: "Roopkund is the \"Mystery Lake\" — a glacial lake at 5029m holding skeletal remains of hundreds of humans from ~800 AD. The trek passes through oak forests, vast alpine meadows called bugyals, and dramatically barren snowfields.",
    itinerary: [
      { camp: "Loharjung → Didina", km: "10 km", desc: "Trek through Wan village and oak forests." },
      { camp: "Didina → Ali Bugyal", km: "11 km", desc: "Enter one of Asia's largest high-altitude meadows." },
      { camp: "Ali → Bedni Bugyal", km: "6 km", desc: "Stunning Trishul views. Camp beside lake." },
      { camp: "Summit to Roopkund", km: "8 km", desc: "Early start to reach the mystery lake." }
    ],
    gear: ["Crampons", "Ice axe", "-15°C sleeping bag", "Trekking poles", "Balaclava"],
    tips: { Altitude: "One of highest accessible treks in India.", Season: "May–June for snow, September for clear views." },
    price: { budget: 8000, standard: 14000, premium: 22000, note: "Transport from Kathgodam, full camp, guide, permits" },
    nearby: ["valley-of-flowers", "kedarkantha", "hampta-pass"]
  },
  {
    id: "dzukou-valley",
    name: "Dzukou Valley",
    region: "Nagaland / Manipur",
    difficulty: "moderate",
    elevation: "2450m",
    elevM: 2450,
    duration: "3 days",
    durationDays: 3,
    distance: "20 km",
    startPoint: "Viswema",
    bestMonths: [5, 6, 7, 8],
    okMonths: [9, 10],
    desc: "Often called the \"Valley of Flowers of the Northeast,\" Dzukou Valley sits on the Nagaland–Manipur border and blooms with the rare Dzukou lily — found nowhere else on earth.",
    itinerary: [
      { camp: "Viswema → Dzukou Valley", km: "10 km", desc: "4–5 hour climb through bamboo forests to valley rim." },
      { camp: "Day in Valley", km: "Exploration", desc: "Photograph the Dzukou lilies, visit natural springs." },
      { camp: "Return to Viswema", km: "10 km", desc: "Descend back, or continue to Manipur side." }
    ],
    gear: ["Light rain jacket", "Trekking shoes", "Camera", "Insect repellent", "Sleeping bag"],
    tips: { "Best time": "June–September for lilies.", Permit: "Inner Line Permit for Nagaland." },
    price: { budget: 3500, standard: 6000, premium: 9000, note: "Kohima base, shelter, guide, ILP" },
    nearby: ["valley-of-flowers", "hampta-pass", "kedarkantha"]
  },
  {
    id: "kedarkantha",
    name: "Kedarkantha",
    region: "Uttarakhand",
    difficulty: "moderate",
    elevation: "3810m",
    elevM: 3810,
    duration: "6 days",
    durationDays: 6,
    distance: "20 km",
    startPoint: "Sankri",
    bestMonths: [11, 0, 1, 2],
    okMonths: [3, 10],
    desc: "India's most popular winter trek. Snow-covered pine forests, frozen streams, and a 360° summit view of 13+ Himalayan peaks including Swargarohini and Bandarpunch.",
    itinerary: [
      { camp: "Sankri → Juda ka Talab", km: "4 km", desc: "Snow-laden oak forests to a frozen lake at 2800m." },
      { camp: "Juda → Kedarkantha Base", km: "4 km", desc: "Steep climb through pine forests." },
      { camp: "Summit Day", km: "6 km", desc: "3 AM start for sunrise. 360° Garhwal Himalaya views." }
    ],
    gear: ["Crampons", "-20°C sleeping bag", "Snow gaiters", "Thermal layers", "Balaclava"],
    tips: { Season: "December–March for snow.", Permit: "Forest camping permission from DFO Purola." },
    price: { budget: 6000, standard: 10000, premium: 16000, note: "Transport from Dehradun, camp, guide, permits" },
    nearby: ["roopkund", "valley-of-flowers", "hampta-pass"]
  },
  {
    id: "har-ki-dun",
    name: "Har Ki Dun",
    region: "Uttarakhand",
    difficulty: "easy",
    elevation: "3566m",
    elevM: 3566,
    duration: "7 days",
    durationDays: 7,
    distance: "49 km",
    startPoint: "Sankri",
    bestMonths: [3, 4, 5, 8, 9, 10],
    okMonths: [2, 11],
    desc: "Har Ki Dun is a cradle-shaped hanging valley in the Garhwal Himalayas — one of the most ancient inhabited valleys in India, with villages tracing their mythology to the Mahabharata.",
    itinerary: [
      { camp: "Sankri → Taluka → Osla", km: "18 km", desc: "Drive to Taluka, trek through pine forests alongside the Supin River to Osla village." },
      { camp: "Osla → Har Ki Dun", km: "11 km", desc: "Gradual climb through alpine meadows to valley floor at 3566m. Swargarohini views." }
    ],
    gear: ["Trekking shoes", "Layered jacket", "Rain poncho", "Trekking poles", "Sunscreen"],
    tips: { Permit: "Forest department permit required from Sankri.", Season: "April–June for flowers. September–November for clear skies." },
    price: { budget: 5000, standard: 9000, premium: 14000, note: "Transport from Dehradun, camp, guide, forest permit" },
    nearby: ["kedarkantha", "roopkund", "bali-pass"]
  },
  {
    id: "goecha-la",
    name: "Goecha La",
    region: "Sikkim",
    difficulty: "hard",
    elevation: "4940m",
    elevM: 4940,
    duration: "11 days",
    durationDays: 11,
    distance: "90 km",
    startPoint: "Yuksom",
    bestMonths: [3, 4, 5, 9, 10],
    okMonths: [2, 11],
    desc: "Goecha La is the premier trek of Sikkim, delivering arguably the closest view of Kanchenjunga (8586m) — the world's third highest mountain — that any trekker can achieve without a climbing permit.",
    itinerary: [
      { camp: "Yuksom → Sachen", km: "9 km", desc: "Enter the national park through dense forest." },
      { camp: "Sachen → Tshoka", km: "8 km", desc: "Climb steeply through rhododendron forest." },
      { camp: "Tshoka → Dzongri", km: "10 km", desc: "Emerge above treeline. Dramatic views of Kanchenjunga." }
    ],
    gear: ["Down jacket", "-15C sleeping bag", "Crampons", "Trekking poles", "Gaiters"],
    tips: { Permit: "Restricted Area Permit + National Park entry. Apply in Gangtok.", Season: "April–May for rhododendrons. October–November for clear skies." },
    price: { budget: 18000, standard: 28000, premium: 42000, note: "Yuksom base, full camp, licensed guide, national park fee, RAP" },
    nearby: ["kedarkantha", "roopkund", "sandakphu"]
  },
  {
    id: "markha-valley",
    name: "Markha Valley",
    region: "Ladakh",
    difficulty: "moderate",
    elevation: "5150m",
    elevM: 5150,
    duration: "8 days",
    durationDays: 8,
    distance: "65 km",
    startPoint: "Spituk",
    bestMonths: [5, 6, 7, 8, 9],
    okMonths: [4, 10],
    desc: "The Markha Valley trek is Ladakh's most classic wilderness journey — a traverse through remote Zanskar sub-valleys, ancient monasteries, and high-altitude passes.",
    itinerary: [
      { camp: "Spituk → Zingchen", km: "8 km", desc: "Follow the Indus then Jingchen gorge." },
      { camp: "Zingchen → Yurutse", km: "9 km", desc: "First high camp at 3900m." }
    ],
    gear: ["Down jacket", "-10C sleeping bag", "Trekking poles", "Altitude medication", "Sun protection"],
    tips: { Season: "June–September. July–August most reliable.", Permit: "Inner Line Permit required. Arrange in Leh." },
    price: { budget: 14000, standard: 22000, premium: 35000, note: "Leh transport, camp, guide, ILP, homestays" },
    nearby: ["chadar-trek", "stok-kangri", "hampta-pass"]
  },
  {
    id: "stok-kangri",
    name: "Stok Kangri",
    region: "Ladakh",
    difficulty: "hard",
    elevation: "6153m",
    elevM: 6153,
    duration: "8 days",
    durationDays: 8,
    distance: "40 km",
    startPoint: "Stok",
    bestMonths: [6, 7],
    okMonths: [5, 8],
    desc: "At 6153m, Stok Kangri is the highest non-technical summit accessible to trekkers in India — no ropes, no technical gear, just altitude, determination, and a pre-dawn push.",
    itinerary: [
      { camp: "Leh → Stok Village", km: "Drive", desc: "Drive to Stok. Acclimatization walk." },
      { camp: "Stok → Base Camp", km: "8 km", desc: "Trek up the Stok Valley to base camp at 4800m." }
    ],
    gear: ["Crampons", "Ice axe", "-20C sleeping bag", "Mountaineering boots", "High-altitude down suit"],
    tips: { Altitude: "6153m. Acclimatize 5+ days in Leh before starting.", Permit: "Inner Line Permit required." },
    price: { budget: 20000, standard: 32000, premium: 50000, note: "Leh base, full expedition camp, licensed guide, ILP, summit gear" },
    nearby: ["chadar-trek", "markha-valley", "hampta-pass"]
  },
  {
    id: "pin-parvati",
    name: "Pin Parvati Pass",
    region: "Himachal Pradesh",
    difficulty: "hard",
    elevation: "5319m",
    elevM: 5319,
    duration: "11 days",
    durationDays: 11,
    distance: "100 km",
    startPoint: "Barsheni",
    bestMonths: [7, 8],
    okMonths: [6, 9],
    desc: "One of the most technically demanding crossings in the Indian Himalayas, connecting the lush green Parvati Valley with the stark cold desert of Spiti Valley.",
    itinerary: [
      { camp: "Barsheni → Kheer Ganga", km: "12 km", desc: "Start from Parvati Valley. Camp at famous hot springs." },
      { camp: "Kheer Ganga → Tunda Bhuj", km: "11 km", desc: "Trail narrows. Enter the high Parvati Valley above treeline." }
    ],
    gear: ["Crampons", "Ice axe", "Glacier glasses", "Rope", "Harness"],
    tips: { Difficulty: "Prior Himalayan experience essential.", Season: "July–August only." },
    price: { budget: 12000, standard: 20000, premium: 32000, note: "Barsheni transport, full camp, experienced guide, glacier kit" },
    nearby: ["hampta-pass", "sar-pass", "kedarkantha"]
  },
  {
    id: "sar-pass",
    name: "Sar Pass",
    region: "Himachal Pradesh",
    difficulty: "moderate",
    elevation: "4270m",
    elevM: 4270,
    duration: "5 days",
    durationDays: 5,
    distance: "48 km",
    startPoint: "Kasol",
    bestMonths: [3, 4, 5],
    okMonths: [9, 10],
    desc: "Sar Pass packs extraordinary variety into just 5 days. Starting from Kasol in the Parvati Valley, the trail climbs through dense oak, maple and cedar forests before emerging onto vast open meadows.",
    itinerary: [
      { camp: "Kasol → Grahan Village", km: "10 km", desc: "Steep climb through dense forest to a remote Gaddi shepherd village." },
      { camp: "Grahan → Min Thach", km: "10 km", desc: "Open meadows begin. First snow views." }
    ],
    gear: ["Trekking shoes", "Sleeping bag", "Trekking poles", "Waterproof boots", "Warm gloves"],
    tips: { Season: "May–June for snow, September for clear views.", Guide: "Optional but recommended." },
    price: { budget: 4500, standard: 7500, premium: 12000, note: "Kasol transport, camp, guide, permits" },
    nearby: ["pin-parvati", "hampta-pass", "bhrigu-lake"]
  },
  {
    id: "kedartal",
    name: "Kedartal",
    region: "Uttarakhand",
    difficulty: "hard",
    elevation: "4750m",
    elevM: 4750,
    duration: "6 days",
    durationDays: 6,
    distance: "36 km",
    startPoint: "Gangotri",
    bestMonths: [4, 5, 8, 9],
    okMonths: [3, 10],
    desc: "Kedartal is a stunning glacial lake in the Garhwal Himalayas. The trek offers close-up views of peaks like Thalay Sagar and Bhrigupanth.",
    itinerary: [
      { camp: "Gangotri → Bhojkharak", km: "8 km", desc: "Trek along Kedar Ganga river through cedar forest." },
      { camp: "Bhojkharak → Kedar Kharak", km: "4 km", desc: "Walk past spider wall to high birch forest meadow." }
    ],
    gear: ["Warm layers", "Crampons", "Trekking poles", "Waterproof boots"],
    tips: { Altitude: "Acclimatize seriously at Gangotri before starting.", Permit: "Forest permit required from Uttarkashi." },
    price: { budget: 7000, standard: 12000, premium: 18000, note: "Includes Gangotri transport, camp stay, meals, guide, permits" },
    nearby: ["gaumukh-tapovan", "audens-col", "bali-pass"]
  },
  {
    id: "chandrashila",
    name: "Tungnath — Chandrashila",
    region: "Uttarakhand",
    difficulty: "easy",
    elevation: "3680m",
    elevM: 3680,
    duration: "4 days",
    durationDays: 4,
    distance: "15 km",
    startPoint: "Chopta",
    bestMonths: [2, 3, 4, 5, 8, 9, 10, 11],
    okMonths: [0, 1],
    desc: "Trek to the highest temple of Lord Shiva in the world (Tungnath) and proceed to the Chandrashila summit for 360-degree views of Himalayan giants.",
    itinerary: [
      { camp: "Haridwar to Sari Village", km: "Drive", desc: "Drive along Alaknanda river to Sari base village." },
      { camp: "Sari to Deoriatal", km: "3 km", desc: "Easy climb through forests to a pristine lake reflecting Chaukhamba." }
    ],
    gear: ["Trekking shoes", "Rainwear", "Warm fleece", "Camera"],
    tips: { Temple: "Tungnath temple is closed in winter.", Winter: "Jan-Feb sees heavy snow." },
    price: { budget: 3500, standard: 6500, premium: 10000, note: "Includes Sari homestay, Chopta camps, meals, guide, entry tickets" },
    nearby: ["deoriatal", "madhyamaheshwar", "kedarnath-trek"]
  },
  {
    id: "sandakphu",
    name: "Sandakphu — Phalut",
    region: "West Bengal",
    difficulty: "moderate",
    elevation: "3636m",
    elevM: 3636,
    duration: "6 days",
    durationDays: 6,
    distance: "65 km",
    startPoint: "Manebhanjan",
    bestMonths: [3, 4, 9, 10, 11],
    okMonths: [0, 1, 2],
    desc: "Known as the Land of Land Rovers. This trek offers a face-to-face view of the 'Sleeping Buddha' formation of Kanchenjunga and Everest.",
    itinerary: [
      { camp: "Manebhanjan to Chitrey", km: "3 km", desc: "Steep climb to the first ridge monastery." },
      { camp: "Chitrey to Tumling", km: "9 km", desc: "Gradual trail entering Singalila National Park." }
    ],
    gear: ["Insulated jacket", "Trekking poles", "Comfortable boots", "Passport copies"],
    tips: { Border: "The trail weaves in and out of Nepal. Keep ID handy.", Transport: "Singalila land rovers can carry non-trekkers." },
    price: { budget: 6500, standard: 12000, premium: 19000, note: "Includes tea house stays, guide, national park permit, local food" },
    nearby: ["goecha-la", "mulkarkha-lake", "everest-base-camp"]
  },
  {
    id: "brahmatal",
    name: "Brahmatal",
    region: "Uttarakhand",
    difficulty: "moderate",
    elevation: "3734m",
    elevM: 3734,
    duration: "6 days",
    durationDays: 6,
    distance: "24 km",
    startPoint: "Loharjung",
    bestMonths: [11, 0, 1, 2],
    okMonths: [3, 10],
    desc: "A beautiful winter trek dedicated to Lord Brahma. The frozen lake in the middle of alpine forests offers spectacular views of Trishul and Nanda Ghunti.",
    itinerary: [
      { camp: "Loharjung to Bekaltal", km: "6 km", desc: "Trek through oak and rhododendron forests to a frozen lake camp." },
      { camp: "Bekaltal to Brahmatal", km: "7 km", desc: "Open ridges with spectacular views of Mt Trishul. Camp near the lake." }
    ],
    gear: ["Crampons", "Gaiters", "-10C sleeping bag", "Trekking poles", "Warm gloves"],
    tips: { Winter: "Extremely cold. Temperature drops to -10C at night.", Water: "Natural streams are frozen; melt snow or carry insulated flasks." },
    price: { budget: 5500, standard: 9000, premium: 14000, note: "Includes Loharjung transport, tents, meals, guide, permits" },
    nearby: ["roopkund", "kedarkantha", "har-ki-dun"]
  },
  {
    id: "bali-pass",
    name: "Bali Pass",
    region: "Uttarakhand",
    difficulty: "hard",
    elevation: "4950m",
    elevM: 4950,
    duration: "7 days",
    durationDays: 7,
    distance: "56 km",
    startPoint: "Sankri",
    bestMonths: [5, 6, 8, 9],
    okMonths: [4, 10],
    desc: "A challenging high-altitude pass connecting Yamunotri and Har Ki Dun valleys. It offers close-up views of Swargarohini and Bandarpoonch massifs.",
    itinerary: [
      { camp: "Sankri to Har Ki Dun", km: "2 days", desc: "Trek through Taluka and Osla to the hanging valley." },
      { camp: "Har Ki Dun to Ruinsara Tal", km: "14 km", desc: "Walk past pine forests to the holy lake of Ruinsara." }
    ],
    gear: ["Crampons", "Ice axe", "Ropes & Harness", "Extreme cold gear", "Gaiters"],
    tips: { Permit: "Required from Forest Office Purola.", Guide: "Experienced technical guide mandatory." },
    price: { budget: 9500, standard: 16000, premium: 25000, note: "Includes camp support, technical guide, permits, Dehradun transport" },
    nearby: ["har-ki-dun", "borasu-pass", "kedarkantha"]
  },
  {
    id: "kashmir-great-lakes",
    name: "Kashmir Great Lakes",
    region: "Kashmir, Jammu & Kashmir",
    difficulty: "hard",
    elevation: "4200m",
    elevM: 4200,
    duration: "7 days",
    durationDays: 7,
    distance: "72 km",
    startPoint: "Srinagar / Sonamarg",
    bestMonths: [6, 7, 8],
    okMonths: [5, 9],
    desc: "Kashmir's premier trek. Every day brings you to a different high-altitude alpine lake — Vishansar, Kishansar, Gadsar, Satsar, Gangabal — framed by snow peaks.",
    itinerary: [
      { camp: "Sonamarg to Nichnai", km: "11 km", desc: "Climb through pine and birch forests to Nichnai meadow camp." },
      { camp: "Nichnai to Vishansar Lake", km: "12 km", desc: "Cross Nichnai Pass (4100m). Emerge at the first trout-filled alpine lake." }
    ],
    gear: ["Rain poncho", "Warm layers", "High-grip boots", "Trekking poles", "Water filter"],
    tips: { Security: "Active army checkpoints; carry original ID cards.", Weather: "Monsoon is light in Kashmir; July-August is peak green." },
    price: { budget: 11000, standard: 17000, premium: 26000, note: "Includes Srinagar pick-up, full camps, guide, forest permits, meals" },
    nearby: ["tarsar-marsar", "kolahoi-glacier", "chadar-trek"]
  },
  {
    id: "tarsar-marsar",
    name: "Tarsar Marsar",
    region: "Kashmir, Jammu & Kashmir",
    difficulty: "moderate",
    elevation: "3790m",
    elevM: 3790,
    duration: "7 days",
    durationDays: 7,
    distance: "48 km",
    startPoint: "Srinagar / Aru Valley",
    bestMonths: [6, 7, 8],
    okMonths: [5, 9],
    desc: "An exceptionally beautiful trek to twin lakes of Tarsar and Marsar. The trail passes through lush valleys, pine forests, and nomadic shepherd camps.",
    itinerary: [
      { camp: "Aru to Lidderwat", km: "10 km", desc: "Walk through pine forests alongside the Lidder river." },
      { camp: "Lidderwat to Shekwas", km: "6 km", desc: "Climb past birch forests and shepherd huts." }
    ],
    gear: ["Trekking poles", "Waterproof boots", "Warm layers", "Rain poncho"],
    tips: { Campsite: "Camping directly on Tarsar lake shore is allowed.", Security: "Keep ID cards handy." },
    price: { budget: 9500, standard: 15500, premium: 24000, note: "Srinagar transport, camp, guide, permits, meals" },
    nearby: ["kashmir-great-lakes", "kolahoi-glacier", "chadar-trek"]
  },
  {
    id: "rupin-pass",
    name: "Rupin Pass",
    region: "Himachal Pradesh / Uttarakhand",
    difficulty: "hard",
    elevation: "4650m",
    elevM: 4650,
    duration: "8 days",
    durationDays: 8,
    distance: "52 km",
    startPoint: "Dhaula",
    bestMonths: [4, 5, 8, 9],
    okMonths: [3, 10],
    desc: "A classic high-altitude pass trek crossing from Uttarakhand to Himachal. Famous for the three-stage Rupin waterfall and the steep snow gully climb to the pass.",
    itinerary: [
      { camp: "Dhaula to Sewa", km: "9 km", desc: "Walk along the Rupin river through apple orchards." },
      { camp: "Sewa to Jiskun", km: "12 km", desc: "Trek through mixed forest, crossing border from Uttarakhand to Himachal." }
    ],
    gear: ["Crampons", "Gaiters", "Warm fleece", "Waterproof shoes"],
    tips: { Waterfall: "Climbing along the waterfall steps requires caution.", Gully: "The pass gully has loose scree/snow; use microspikes." },
    price: { budget: 11000, standard: 18000, premium: 28000, note: "Includes Dehradun transport, camp support, experienced guide, forest permit" },
    nearby: ["har-ki-dun", "borasu-pass", "buran-ghati"]
  },
  {
    id: "buran-ghati",
    name: "Buran Ghati",
    region: "Himachal Pradesh",
    difficulty: "hard",
    elevation: "4572m",
    elevM: 4572,
    duration: "7 days",
    durationDays: 7,
    distance: "37 km",
    startPoint: "Janglik",
    bestMonths: [5, 6, 8, 9],
    okMonths: [4, 10],
    desc: "A beautiful trek featuring ancient pine forests, vast meadows of Dayara, and a thrilling descent from Buran Ghati pass, involving multiple steep snow slides.",
    itinerary: [
      { camp: "Shimla to Janglik", km: "Drive", desc: "Drive along Pabbar river to remote heritage village of Janglik." },
      { camp: "Janglik to Dayara", km: "5 km", desc: "Trek through oak and pine forests to a beautiful meadow camp." }
    ],
    gear: ["Crampons", "Snow gaiters", "Warm layers", "Microspikes", "Poles"],
    tips: { Slide: "The descent from the pass is famous for snow sliding.", Permits: "Required from forest office Rohru." },
    price: { budget: 8500, standard: 14500, premium: 22000, note: "Includes Shimla transport, camp, guide, permits, local food" },
    nearby: ["rupin-pass", "pin-bhaba", "sar-pass"]
  },
  {
    id: "bhrigu-lake",
    name: "Bhrigu Lake",
    region: "Himachal Pradesh",
    difficulty: "moderate",
    elevation: "4300m",
    elevM: 4300,
    duration: "4 days",
    durationDays: 4,
    distance: "22 km",
    startPoint: "Manali",
    bestMonths: [4, 5, 8, 9],
    okMonths: [3, 10],
    desc: "A short, high-altitude alpine lake trek in Kullu Valley, dedicated to Sage Bhrigu. The lake changes colors and is surrounded by meadows.",
    itinerary: [
      { camp: "Manali to Gulaba to Jonker Thach", km: "Drive + 4 km", desc: "Drive to Gulaba, trek through pine forests to high meadow camp." },
      { camp: "Jonker Thach to Rola Kholi", km: "5 km", desc: "Climb past treeline to a beautiful mountain bowl camp." }
    ],
    gear: ["Warm layers", "Rainwear", "Trekking poles", "Waterproof boots"],
    tips: { Sacred: "Do not step into the lake; it is considered sacred by locals.", Season: "June for snow, September for clear blue waters." },
    price: { budget: 3500, standard: 6500, premium: 10000, note: "Includes Manali transport, tents, meals, guide, permit" },
    nearby: ["hampta-pass", "sar-pass", "prashar-lake"]
  },
  {
    id: "yulla-kanda",
    name: "Yulla Kanda",
    region: "Kinnaur, Himachal Pradesh",
    difficulty: "moderate",
    elevation: "3895m",
    elevM: 3895,
    duration: "3 days",
    durationDays: 3,
    distance: "18 km",
    startPoint: "Yulla Khas",
    bestMonths: [4, 5, 6, 8, 9, 10],
    okMonths: [3, 11],
    desc: "Famous for the highest Krishna temple in the world, situated in the middle of a holy lake in Kinnaur. Locals float hats in the lake to predict their future.",
    itinerary: [
      { camp: "Yulla Khas to Lake Camp", km: "9 km", desc: "Trek through apple orchards and oak forests to the lake basin." },
      { camp: "Temple Visit & Return", km: "9 km", desc: "Visit the lakeside Krishna temple, explore surrounding meadows, and descend." }
    ],
    gear: ["Trekking boots", "Warm jacket", "Electrolytes", "Camera"],
    tips: { Custom: "Participate in the local Janmashtami festival for a unique cultural experience.", Water: "Fill bottles at clean spring channels." },
    price: { budget: 3000, standard: 5500, premium: 9000, note: "Includes local guide, home stay/tents, meals, transport from Tapri" },
    nearby: ["pin-bhaba", "sar-pass", "rupin-pass"]
  },
  {
    id: "namdapha",
    name: "Namdapha Trek",
    region: "Arunachal Pradesh",
    difficulty: "moderate",
    elevation: "800m",
    elevM: 800,
    duration: "6 days",
    durationDays: 6,
    distance: "65 km",
    startPoint: "Miao",
    bestMonths: [10, 11, 0, 1, 2, 3],
    okMonths: [4, 9],
    desc: "A rainforest expedition inside Namdapha National Park, one of the most biodiverse regions in the Eastern Himalayas. Home to tigers, leopards, and gibbons.",
    itinerary: [
      { camp: "Miao to Deban", km: "Drive", desc: "Drive along Noa-Dihing river to forest bungalow." },
      { camp: "Deban to Haldibari", km: "10 km", desc: "Cross river by boat, trek through dense primary rainforest." }
    ],
    gear: ["Leech socks", "Binoculars", "Rainwear", "Insect repellent", "Water filter"],
    tips: { Permit: "Inner Line Permit (ILP) + Forest Dept permissions required.", Wildlife: "Hoolock Gibbons are loudest at dawn." },
    price: { budget: 8000, standard: 15000, premium: 25000, note: "Miao transport, Forest Dept guide, camp, ILP, park entry" },
    nearby: ["dzukou-valley", "goecha-la", "sandakphu"]
  },
  {
    id: "pin-bhaba",
    name: "Pin Bhaba Pass",
    region: "Himachal Pradesh",
    difficulty: "hard",
    elevation: "4865m",
    elevM: 4865,
    duration: "8 days",
    durationDays: 8,
    distance: "50 km",
    startPoint: "Kafnu",
    bestMonths: [6, 7, 8, 9],
    okMonths: [5, 10],
    desc: "The greenest pass crossing, starting from the lush forests of Kinnaur's Bhaba Valley and crossing over into the cold desert of Spiti's Pin Valley.",
    itinerary: [
      { camp: "Kafnu to Mulling", km: "11 km", desc: "Trek through pine forests and meadows to Mulling camp." },
      { camp: "Mulling to Karah", km: "6 km", desc: "Gradual climb past beautiful pasturelands and river crossings." }
    ],
    gear: ["Crampons", "Warm winter layers", "Waterproof boots", "Poles"],
    tips: { Contrast: "The contrast between green Bhaba and dry Spiti is spectacular.", Acclimatize: "Hydrate well; high camp sits at 4,100m." },
    price: { budget: 9000, standard: 15000, premium: 24000, note: "Includes transport from Shimla, full camp, guide, permits" },
    nearby: ["pin-parvati", "yulla-kanda", "hampta-pass"]
  },
  {
    id: "phulara-ridge",
    name: "Phulara Ridge",
    region: "Uttarakhand",
    difficulty: "moderate",
    elevation: "3690m",
    elevM: 3690,
    duration: "6 days",
    durationDays: 6,
    distance: "28 km",
    startPoint: "Sankri",
    bestMonths: [4, 5, 8, 9, 10],
    okMonths: [3, 11],
    desc: "A rare ridge walk in the Garhwal Himalayas. You walk on a narrow ridge for hours, surrounded by a 270-degree view of snow peaks.",
    itinerary: [
      { camp: "Sankri to Juda ka Talab", km: "4 km", desc: "Standard approach through pine forest to frozen lake." },
      { camp: "Juda to Pushtara", km: "8 km", desc: "Scale the ridge. Long, panoramic ridge walk past snowfields." }
    ],
    gear: ["Trekking boots", "Windcheater", "Warm layers", "Poles"],
    tips: { Ridge: "Ridge walk is windy; wear windproof layers.", Fitness: "Requires good balance and steady footing." },
    price: { budget: 5500, standard: 9000, premium: 14500, note: "Includes guide, permits, tents, meals, transport from Dehradun" },
    nearby: ["kedarkantha", "har-ki-dun", "bali-pass"]
  },
  {
    id: "gaumukh-tapovan",
    name: "Gaumukh — Tapovan",
    region: "Uttarakhand",
    difficulty: "hard",
    elevation: "4463m",
    elevM: 4463,
    duration: "6 days",
    durationDays: 6,
    distance: "40 km",
    startPoint: "Gangotri",
    bestMonths: [4, 5, 8, 9],
    okMonths: [3, 10],
    desc: "A classic pilgrimage and mountain trek to the snout of Gangotri Glacier (Gaumukh) and the high meadows of Tapovan beneath Mt. Shivling.",
    itinerary: [
      { camp: "Gangotri to Chirbasa", km: "9 km", desc: "Trek along Bhagirathi river past pine forests." },
      { camp: "Chirbasa to Bhojbasa", km: "5 km", desc: "Walk past birch forests to high-altitude campsite." }
    ],
    gear: ["Warm winter layers", "Waterproof boots", "Poles", "Altitude meds"],
    tips: { Snout: "Keep distance from Gaumukh snout due to falling rocks.", Shivling: "Best views of Shivling are from Tapovan." },
    price: { budget: 6500, standard: 11000, premium: 17000, note: "Includes forest permits, guide, tents, meals, transport" },
    nearby: ["kedartal", "audens-col", "bali-pass"]
  },
  {
    id: "pangarchulla",
    name: "Pangarchulla Peak",
    region: "Uttarakhand",
    difficulty: "hard",
    elevation: "4575m",
    elevM: 4575,
    duration: "6 days",
    durationDays: 6,
    distance: "32 km",
    startPoint: "Joshimath",
    bestMonths: [3, 4, 9, 10],
    okMonths: [2, 11],
    desc: "A challenging peak climb in the Nanda Devi sanctuary. The summit push is over snow and boulders, offering views of Nanda Devi and Trishul.",
    itinerary: [
      { camp: "Joshimath to Dhak to Gulling", km: "6 km", desc: "Drive to Dhak, trek through oak forests to Gulling campsite." },
      { camp: "Gulling to Khullara", km: "6 km", desc: "Trek to high meadow campsite under Kuari Pass." }
    ],
    gear: ["Crampons", "Gaiters", "Poles", "Warm fleece", "Mountaineering boots"],
    tips: { Peak: "The last summit ridge can have hard ice; use crampons.", Season: "April is best for snow climbing." },
    price: { budget: 6000, standard: 10000, premium: 16000, note: "Includes permits, guide, tents, meals, transport from Haridwar" },
    nearby: ["valley-of-flowers", "roopkund", "brahmatal"]
  },
  {
    id: "kedarnath-trek",
    name: "Kedarnath Trek",
    region: "Rudraprayag, Uttarakhand",
    difficulty: "moderate",
    elevation: "3584m",
    elevM: 3584,
    duration: "4 days",
    durationDays: 4,
    distance: "32 km",
    startPoint: "Gaurikund",
    bestMonths: [4, 5, 8, 9, 10],
    okMonths: [11],
    desc: "One of India's most popular pilgrimage hikes, leading to the ancient temple of Lord Kedarnath against the backdrop of snow-capped peaks.",
    itinerary: [
      { camp: "Sonprayag to Gaurikund", km: "Drive", desc: "Drive to Gaurikund hot springs." },
      { camp: "Gaurikund to Kedarnath", km: "16 km", desc: "Climb paved mountain trail alongside Mandakini river to Kedarnath town." }
    ],
    gear: ["Comfortable boots", "Raincoat", "Warm layers", "Torch"],
    tips: { Crowds: "Extremely crowded during peak Yatra season; book lodging early.", Helicopter: "Helicopter transfers are available from Guptkashi." },
    price: { budget: 3000, standard: 6000, premium: 10000, note: "Includes Gaurikund guesthouse, guide, meals" },
    nearby: ["madhyamaheshwar", "chandrashila", "tungnath"]
  },
  {
    id: "madhyamaheshwar",
    name: "Madhyamaheshwar Trek",
    region: "Rudraprayag, Uttarakhand",
    difficulty: "moderate",
    elevation: "3497m",
    elevM: 3497,
    duration: "4 days",
    durationDays: 4,
    distance: "32 km",
    startPoint: "Ransi",
    bestMonths: [4, 5, 8, 9, 10],
    okMonths: [3, 11],
    desc: "Part of the holy Panch Kedar, leading to the scenic Madhyamaheshwar temple where Shiva's middle torso is worshipped.",
    itinerary: [
      { camp: "Ransi to Bantoli", km: "6 km", desc: "Trek through oak forest alongside Madhyamaheshwar Ganga." },
      { camp: "Bantoli to Temple", km: "10 km", desc: "Climb past meadows to the sacred temple valley." }
    ],
    gear: ["Hiking boots", "Warm layers", "Rain poncho", "Camera"],
    tips: { Ridge: "Hike 2km further to Budha Madhyamaheshwar for panoramic views.", Stay: "Stay in temple Dharamshalas." },
    price: { budget: 4000, standard: 7500, premium: 12000, note: "Includes home stays, local guide, meals" },
    nearby: ["kedarnath-trek", "chandrashila", "tungnath"]
  },
  {
    id: "munsiyari-khaliya",
    name: "Munsiyari — Khaliya Top",
    region: "Pithoragarh, Uttarakhand",
    difficulty: "easy",
    elevation: "3500m",
    elevM: 3500,
    duration: "3 days",
    durationDays: 3,
    distance: "12 km",
    startPoint: "Munsiyari",
    bestMonths: [3, 4, 5, 9, 10, 11],
    okMonths: [0, 1, 2],
    desc: "An easy alpine trek in Kumaon offering close-up views of the Panchachuli range, Rajramba, and Nanda Devi peaks.",
    itinerary: [
      { camp: "Munsiyari to Baluni", km: "4 km", desc: "Climb through rhododendron forests to forest rest house." },
      { camp: "Baluni to Khaliya Top", km: "2 km", desc: "Trek to alpine meadows at 3500m. Panchachuli panorama." }
    ],
    gear: ["Hiking shoes", "Warm jacket", "Sunscreen", "Poles"],
    tips: { Winter: "Snow covered in winter; popular for basic skiing.", Views: "Panchachuli looks best at sunrise." },
    price: { budget: 2500, standard: 4500, premium: 7500, note: "Includes forest entry permit, guide, tents/shelter, meals" },
    nearby: ["pindari-glacier", "roopkund", "brahmatal"]
  },
  {
    id: "agasthyarkoodam",
    name: "Agasthyarkoodam",
    region: "Kerala / Tamil Nadu",
    difficulty: "hard",
    elevation: "1868m",
    elevM: 1868,
    duration: "2 days",
    durationDays: 2,
    distance: "40 km",
    startPoint: "Bonacaud",
    bestMonths: [0, 1, 2],
    okMonths: [11],
    desc: "A highly controlled biological park trek in the Western Ghats, passing through evergreen rain forests to the peak dedicated to Sage Agastya.",
    itinerary: [
      { camp: "Bonacaud to Athirumala", km: "20 km", desc: "Trek through dense tropical rainforests past river channels to base camp." },
      { camp: "Athirumala to Peak & Return", km: "20 km", desc: "Climb steep rock faces with ropes, reach summit. Return to Bonacaud." }
    ],
    gear: ["Rain poncho", "Leech socks", "Sturdy boots", "ID card copies"],
    tips: { Pass: "Only open during Jan-Feb pilgrimage season. Online booking mandatory.", Restricted: "Traditionally restricted; check forest office guidelines." },
    price: { budget: 1500, standard: 3000, premium: 5000, note: "Includes forest dept entry ticket, basic shelter, local guide" },
    nearby: ["chembra-peak", "kudremukh", "tadiandamol"]
  },
  {
    id: "chembra-peak",
    name: "Chembra Peak",
    region: "Wayanad, Kerala",
    difficulty: "easy",
    elevation: "2100m",
    elevM: 2100,
    duration: "1 day",
    durationDays: 1,
    distance: "9 km",
    startPoint: "Meppadi",
    bestMonths: [9, 10, 11, 0, 1, 2],
    okMonths: [8, 3],
    desc: "A beautiful day hike in Wayanad, famous for the heart-shaped lake (Hridayasarassu) on the way to the peak. Surrounded by tea gardens.",
    itinerary: [
      { camp: "Base to Heart Lake", km: "4.5 km", desc: "Trek through tea estates, climbing steep grassy slopes to the heart-shaped lake." },
      { camp: "Return", km: "4.5 km", desc: "Descend back to the forest office." }
    ],
    gear: ["Comfortable sneakers", "Sun hat", "Camera", "Water bottle"],
    tips: { Peak: "Climbing to the absolute peak is restricted; trek ends at the heart lake.", Timing: "Only 200 permits issued per day." },
    price: { budget: 1000, standard: 1800, premium: 3000, note: "Includes Wayanad guide, forest entry fee, local lunch" },
    nearby: ["agasthyarkoodam", "kudremukh", "tadiandamol"]
  },
  {
    id: "kudremukh",
    name: "Kudremukh Peak",
    region: "Karnataka",
    difficulty: "moderate",
    elevation: "1894m",
    elevM: 1894,
    duration: "1 day",
    durationDays: 1,
    distance: "20 km",
    startPoint: "Mullodi",
    bestMonths: [5, 6, 7, 8, 9, 10, 11],
    okMonths: [0, 1, 2],
    desc: "Trek inside Kudremukh National Park to the peak shaped like a horse's face. Breathtaking shola grasslands, rolling green hills, and misty valleys.",
    itinerary: [
      { camp: "Mullodi to Peak", km: "10 km", desc: "Trek through evergreen shola forest patches, crossing mountain streams to the horse-face peak." },
      { camp: "Peak to Mullodi", km: "10 km", desc: "Descend back via the same scenic trail. Jeep ride back." }
    ],
    gear: ["Trekking shoes", "Leech socks", "Rain jacket", "Sunscreen"],
    tips: { Leeches: "Leeches are active in monsoon; wear leech socks.", Permit: "Limit of 500 trekkers per day; start early at forest office." },
    price: { budget: 1500, standard: 2800, premium: 4500, note: "Includes forest permit, local guide, jeep transfer, meals" },
    nearby: ["tadiandamol", "chembra-peak", "mullayanagiri"]
  },
  {
    id: "tadiandamol",
    name: "Tadiandamol",
    region: "Coorg, Karnataka",
    difficulty: "easy",
    elevation: "1748m",
    elevM: 1748,
    duration: "1 day",
    durationDays: 1,
    distance: "14 km",
    startPoint: "Kakkabe",
    bestMonths: [9, 10, 11, 0, 1, 2, 3],
    okMonths: [8, 4],
    desc: "The highest peak in Coorg, Karnataka. A scenic trail climbing past Nalknad Palace through shola forests and grassy slopes to a mist-laden peak.",
    itinerary: [
      { camp: "Kakkabe to Peak", km: "7 km", desc: "Trek through forest trail, climbing past the final steep ridge to the peak." },
      { camp: "Return", km: "7 km", desc: "Descend back to Kakkabe village." }
    ],
    gear: ["Hiking shoes", "Water bottle", "Windcheater", "Sunhat"],
    tips: { Camping: "No camping allowed at the peak.", View: "Provides views of the Arabian Sea on clear days." },
    price: { budget: 1200, standard: 2200, premium: 3500, note: "Includes forest entry fee, local guide, meals" },
    nearby: ["kudremukh", "chembra-peak", "mullayanagiri"]
  },
  {
    id: "mullayanagiri",
    name: "Mullayanagiri",
    region: "Chikkamagaluru, Karnataka",
    difficulty: "easy",
    elevation: "1930m",
    elevM: 1930,
    duration: "1 day",
    durationDays: 1,
    distance: "6 km",
    startPoint: "Sarpadhari",
    bestMonths: [9, 10, 11, 0, 1, 2, 3],
    okMonths: [8, 4],
    desc: "The highest peak in Karnataka, featuring a temple of Lord Mullappa at the summit. The classic Sarpadhari trail is steep and scenic.",
    itinerary: [
      { camp: "Sarpadhari to Peak", km: "3 km", desc: "Steep climb past rock faces and grasslands to the summit temple." },
      { camp: "Return", km: "3 km", desc: "Descend via the concrete stairs to the parking lot." }
    ],
    gear: ["Walking shoes", "Camera", "Sun protection", "Water flask"],
    tips: { Sarpadhari: "Sarpadhari trail can be slippery in monsoon.", Sunset: "Stunning sunset views over the Western Ghats." },
    price: { budget: 800, standard: 1500, premium: 2500, note: "Includes local guide, transport from Chikkamagaluru, lunch" },
    nearby: ["kudremukh", "tadiandamol", "chembra-peak"]
  }
];

const baseNepal = [
  {
    id: "everest-base-camp",
    name: "Everest Base Camp",
    region: "Khumbu, Solukhumbu",
    difficulty: "hard",
    elevation: "5364m",
    elevM: 5364,
    duration: "14 days",
    durationDays: 14,
    distance: "130 km",
    startPoint: "Lukla",
    bestMonths: [3, 4, 9, 10],
    okMonths: [2, 11],
    desc: "One of the most iconic journeys on Earth. It takes you as close as a non-climber can get to the world's highest mountain. You'll walk through Namche Bazaar, past Tengboche Monastery with its perfect Ama Dablam frame.",
    itinerary: [
      { camp: "Lukla → Phakding", km: "9 km", desc: "Short acclimatization day through Sherpa villages." },
      { camp: "Phakding → Namche", km: "11 km", desc: "Steep climb to Sherpa capital. First Everest views." },
      { camp: "Acclimatization at Namche", km: "Day hike", desc: "Hike to Everest View Hotel for panoramic views." },
      { camp: "Namche → Tengboche", km: "10 km", desc: "Cross high ridges. Ama Dablam face-on. Iconic monastery." }
    ],
    gear: ["Down jacket -30°C", "Crampons", "Trekking poles", "High-altitude sleeping bag", "Altitude medication"],
    tips: { Permit: "TIMS card + Sagarmatha Park fee ~$50.", Season: "March–May & September–November." },
    price: { budget: 75000, standard: 105000, premium: 165000, note: "Kathmandu–Lukla flights, teahouse, guide, porter, permits" },
    nearby: ["annapurna-circuit", "langtang-valley", "snowman-trek"]
  },
  {
    id: "annapurna-circuit",
    name: "Annapurna Circuit",
    region: "Gandaki Province, Nepal",
    difficulty: "hard",
    elevation: "5416m",
    elevM: 5416,
    duration: "18 days",
    durationDays: 18,
    distance: "230 km",
    startPoint: "Besisahar",
    bestMonths: [3, 4, 10, 11],
    okMonths: [2, 9, 12],
    desc: "One of the greatest treks in the world — a complete circuit around the Annapurna massif, crossing Thorong La at 5416m. You pass through 14 distinct ethnic groups, subtropical lowlands to Tibetan plateau.",
    itinerary: [
      { camp: "Besisahar → Chame", km: "5 days", desc: "Approach through lowland forests. Villages get progressively Tibetan." },
      { camp: "Chame → Manang", km: "3 days", desc: "Dramatic Marsyangdi valley. Annapurna II views." }
    ],
    gear: ["High-altitude down jacket", "Crampons", "Trekking poles", "Gaiter", "-20°C sleeping bag"],
    tips: { Permit: "ACAP permit + TIMS required.", Altitude: "5416m. Full acclimatization essential." },
    price: { budget: 55000, standard: 85000, premium: 130000, note: "Besisahar transport, teahouse, guide, ACAP+TIMS permits" },
    nearby: ["everest-base-camp", "langtang-valley", "druk-path"]
  },
  {
    id: "langtang-valley",
    name: "Langtang Valley",
    region: "Bagmati Province, Nepal",
    difficulty: "moderate",
    elevation: "4984m",
    elevM: 4984,
    duration: "10 days",
    durationDays: 10,
    distance: "80 km",
    startPoint: "Syabrubesi",
    bestMonths: [3, 4, 5, 9, 10, 11],
    okMonths: [2, 12],
    desc: "Often called \"the valley of glaciers\" and the closest major trek to Kathmandu. The valley was devastated in 2015 but has fully rebuilt. The Tserko Ri viewpoint offers one of the finest panoramas in Nepal.",
    itinerary: [
      { camp: "Syabrubesi → Lama Hotel", km: "11 km", desc: "Trek through bamboo and rhododendron forests." },
      { camp: "Lama Hotel → Langtang Village", km: "14 km", desc: "Long day with significant elevation gain." }
    ],
    gear: ["Warm layers", "Trekking poles", "Waterproof jacket", "Boots", "Sunscreen"],
    tips: { "From Kathmandu": "8-hour bus or 6-hour jeep to Syabrubesi.", Permit: "Langtang National Park + TIMS." },
    price: { budget: 35000, standard: 55000, premium: 85000, note: "Kathmandu bus/jeep, teahouse, guide, park permit" },
    nearby: ["everest-base-camp", "annapurna-circuit", "druk-path"]
  },
  {
    id: "poon-hill",
    name: "Poon Hill Trek",
    region: "Annapurna, Nepal",
    difficulty: "easy",
    elevation: "3210m",
    elevM: 3210,
    duration: "4 days",
    durationDays: 4,
    distance: "45 km",
    startPoint: "Nayapul",
    bestMonths: [2, 3, 4, 9, 10, 11],
    okMonths: [1, 12],
    desc: "Poon Hill is the most popular short trek in Nepal — a 4-day circuit rewarding with one of the finest sunrise panoramas on earth. From the 3210m viewpoint, the Annapurna and Dhaulagiri ranges stretch across the horizon.",
    itinerary: [
      { camp: "Nayapul to Tikhedhunga", km: "8 km", desc: "Gentle start along the Modi Khola river through Magar villages." },
      { camp: "Tikhedhunga to Ghorepani", km: "12 km", desc: "Long climb through dense rhododendron forest to 2860m." }
    ],
    gear: ["Warm layers", "Sleeping bag", "Trekking poles", "Rain jacket", "Boots"],
    price: { budget: 12000, standard: 18000, premium: 28000, note: "Pokhara transport, teahouse, guide, TIMS+ACAP permit" },
    tips: { Season: "March for rhododendrons. October for clear skies.", Permit: "TIMS card + ACAP permit required." },
    nearby: ["annapurna-circuit", "mardi-himal", "langtang-valley"]
  },
  {
    id: "gokyo-lakes",
    name: "Gokyo Lakes",
    region: "Khumbu, Nepal",
    difficulty: "hard",
    elevation: "5357m",
    elevM: 5357,
    duration: "12 days",
    durationDays: 12,
    distance: "110 km",
    startPoint: "Lukla",
    bestMonths: [3, 4, 10, 11],
    okMonths: [2, 9],
    desc: "Gokyo Lakes is considered by many seasoned trekkers to be more beautiful than the classic EBC route. Six emerald glacial lakes at over 4700m, with Gokyo Ri delivering a panorama of four 8000m peaks simultaneously.",
    itinerary: [
      { camp: "Lukla to Namche", km: "2 days", desc: "Standard approach. Steep climb to Namche Bazaar at 3440m." },
      { camp: "Namche to Machhermo", km: "2 days", desc: "Leave main EBC trail. Head up Dudh Kosi valley toward Gokyo." }
    ],
    gear: ["Down jacket", "-20C sleeping bag", "Crampons", "Altitude medication", "Trekking poles"],
    price: { budget: 65000, standard: 92000, premium: 145000, note: "Kathmandu-Lukla flights, teahouse, guide, porter, park permit" },
    tips: { Season: "March-May and October-November only.", Permit: "Sagarmatha National Park fee + TIMS." },
    nearby: ["everest-base-camp", "annapurna-circuit", "mardi-himal"]
  },
  {
    id: "mardi-himal",
    name: "Mardi Himal Trek",
    region: "Annapurna, Nepal",
    difficulty: "moderate",
    elevation: "4500m",
    elevM: 4500,
    duration: "7 days",
    durationDays: 7,
    distance: "55 km",
    startPoint: "Kande",
    bestMonths: [2, 3, 4, 10, 11],
    okMonths: [9, 12],
    desc: "Mardi Himal is one of Nepal's best-kept secrets — a high ridge route in the Annapurna sanctuary with face-to-face views of Machapuchare, the sacred unclimbed fishtail peak, and the full Annapurna range.",
    itinerary: [
      { camp: "Kande to Forest Camp", km: "8 km", desc: "Climb through dense rhododendron forest." },
      { camp: "Forest Camp to Low Camp", km: "7 km", desc: "Forest thins. First Annapurna South views." }
    ],
    gear: ["Down jacket", "-10C sleeping bag", "Trekking poles", "Rain jacket", "Boots"],
    price: { budget: 25000, standard: 38000, premium: 58000, note: "Pokhara base, teahouse+camp, guide, ACAP permit" },
    tips: { Season: "February-April for rhododendrons. October-November for clear skies.", Permit: "ACAP permit required." },
    nearby: ["poon-hill", "annapurna-circuit", "gokyo-lakes"]
  }
];

const baseBhutan = [
  {
    id: "snowman-trek",
    name: "Snowman Trek",
    region: "Northern Bhutan",
    difficulty: "hard",
    elevation: "5320m",
    elevM: 5320,
    duration: "25 days",
    durationDays: 25,
    distance: "216 km",
    startPoint: "Paro",
    bestMonths: [8, 9],
    okMonths: [7, 10],
    desc: "Widely regarded as one of the most difficult treks in the world. Only a handful complete it each year — 11 passes over 4500m, extremely remote. It traverses northern Bhutan's pristine glacial lakes, ancient dzongs, and yak herder camps.",
    itinerary: [
      { camp: "Paro → Shana", km: "First week", desc: "Enter Jigme Dorji National Park through primary forest." },
      { camp: "High passes", km: "Middle section", desc: "Cross Labana La, Gonto La, and other 4500m+ passes." }
    ],
    gear: ["Extreme cold gear -40°C", "High-altitude crampons", "Ice axe", "Microspikes", "Full expedition kit"],
    tips: { Cost: "Minimum $200+/day required by Bhutan law.", Agency: "Must book through licensed Bhutanese operator." },
    price: { budget: 28000, standard: 380000, premium: 550000, note: "Bhutan govt daily fee ($200+/day), full expedition support" },
    nearby: ["druk-path", "everest-base-camp", "annapurna-circuit"]
  },
  {
    id: "druk-path",
    name: "Druk Path Trek",
    region: "Paro to Thimphu",
    difficulty: "moderate",
    elevation: "4200m",
    elevM: 4200,
    duration: "6 days",
    durationDays: 6,
    distance: "50 km",
    startPoint: "Paro",
    bestMonths: [3, 4, 9, 10, 11],
    okMonths: [2, 12],
    desc: "Bhutan's most popular trek, connecting Paro to the capital Thimphu across the Himalayas. Passes through ancient dzongs, remote monasteries, and high-altitude sacred lakes.",
    itinerary: [
      { camp: "Paro → Jili Dzong", km: "9 km", desc: "Through blue pine forests to 15th-century monastery." },
      { camp: "Jili Dzong → Jangchulakha", km: "14 km", desc: "Ridge walk with Himalayan views. Sacred lake camp." }
    ],
    gear: ["Warm layers", "Trekking poles", "Waterproof jacket", "Boots", "Sunscreen"],
    tips: { "Bhutan permit": "Daily fee + royalty required.", "Best season": "Autumn September–November." },
    price: { budget: 90000, standard: 130000, premium: 190000, note: "Bhutan daily tariff, full camp+cook, licensed guide" },
    nearby: ["snowman-trek", "langtang-valley", "annapurna-circuit"]
  },
  {
    id: "jomolhari",
    name: "Jomolhari Trek",
    region: "Paro, Bhutan",
    difficulty: "hard",
    elevation: "4930m",
    elevM: 4930,
    duration: "8 days",
    durationDays: 8,
    distance: "110 km",
    startPoint: "Paro",
    bestMonths: [3, 4, 5, 9, 10],
    okMonths: [2, 11],
    desc: "The Jomolhari Trek is Bhutan's most iconic route — a journey to the base of sacred Mt. Jomolhari (7326m) on the Bhutan-Tibet border. The trail passes through pristine valleys.",
    itinerary: [
      { camp: "Paro to Shana", km: "22 km", desc: "Enter Jigme Dorji National Park along the Paro Chhu river." },
      { camp: "Shana to Thangthangkha", km: "18 km", desc: "Valley widens. Yak camps appear. Jomolhari visible ahead." }
    ],
    gear: ["Down jacket", "-15C sleeping bag", "Crampons", "Trekking poles", "Gaiters"],
    price: { budget: 95000, standard: 140000, premium: 210000, note: "Bhutan daily tariff ($200+/day), full camp, guide, park fees, visa" },
    tips: { "Bhutan fee": "Mandatory govt daily tariff covers accommodation, guide, food, transport.", Season: "March-May and September-November only." },
    nearby: ["snowman-trek", "druk-path", "gokyo-lakes"]
  }
];

// Combine the 30 new well-researched treks and 122 additional ones to get exactly 155 new treks!
const researchedNewTreks = [
  // 30 well-researched ones
  {
    id: "harihar-fort",
    name: "Harihar Fort",
    region: "Maharashtra",
    difficulty: "hard",
    elevation: "1120m",
    elevM: 1120,
    duration: "1 day",
    durationDays: 1,
    distance: "8 km",
    startPoint: "Nirguadpada",
    bestMonths: [5, 6, 7, 8, 9],
    okMonths: [10, 11, 0, 1],
    desc: "Famous for its near-vertical rock-cut stairs carved into a triangular prism of rock. It is one of the most thrilling climbs in the Western Ghats.",
    itinerary: [
      { camp: "Base to Summit", km: "4 km", desc: "Climb through fields, then the steep rock-cut steps with handholds." },
      { camp: "Descent", km: "4 km", desc: "Careful descent down the steps and back to Nirguadpada village." }
    ],
    gear: ["High-grip trekking shoes", "Rain poncho", "Waterproof backpack", "Electrolytes"],
    tips: { "Steps warning": "Extreme caution on steps during heavy rain.", Permit: "Local entry fee may apply." },
    price: { budget: 800, standard: 1500, premium: 3000, note: "Includes base transport from Nashik, guide, local meals" },
    nearby: ["kalsubai-peak", "anjaneri-fort", "harishchandragad"]
  },
  {
    id: "harishchandragad",
    name: "Harishchandragad",
    region: "Maharashtra",
    difficulty: "moderate",
    elevation: "1422m",
    elevM: 1422,
    duration: "2 days",
    durationDays: 2,
    distance: "18 km",
    startPoint: "Khireshwar / Pachnai",
    bestMonths: [5, 6, 7, 8, 9, 10, 11],
    okMonths: [0, 1, 2, 3, 4],
    desc: "One of the most scenic hill forts in Maharashtra. Famous for the Konkan Kada (Konkan Cliff), a semi-circular cliff with a breathtaking overhang.",
    itinerary: [
      { camp: "Pachnai to Harishchandragad", km: "6 km", desc: "Climb past waterfalls to the temple plateau." },
      { camp: "Temple to Kokankada", km: "3 km", desc: "Explore the caves, Kedareshwar temple, and sunset at Konkan Kada." }
    ],
    gear: ["Trekking boots", "Sleeping bag/mat", "Headlamp", "Windcheater"],
    tips: { "Konkan Kada": "Do not venture near the edge during high winds.", Caves: "Basic cave stays available." },
    price: { budget: 1200, standard: 2200, premium: 4000, note: "Includes tent/cave stay, local meals, guide, transport from Pune/Mumbai" },
    nearby: ["kalsubai-peak", "harihar-fort", "visapur-fort"]
  },
  {
    id: "kalsubai-peak",
    name: "Kalsubai Peak",
    region: "Maharashtra",
    difficulty: "moderate",
    elevation: "1646m",
    elevM: 1646,
    duration: "1 day",
    durationDays: 1,
    distance: "10 km",
    startPoint: "Bari",
    bestMonths: [5, 6, 7, 8, 9, 10, 11, 0, 1],
    okMonths: [2, 3, 4],
    desc: "The highest peak in Maharashtra, offering panoramic views of Bhandardara Dam and the surrounding Sahyadri ranges. The trail has iron ladders in steep sections.",
    itinerary: [
      { camp: "Bari to Summit", km: "5 km", desc: "Ascend past farms, climbing vertical iron ladders placed on steep rock patches." },
      { camp: "Summit to Bari", km: "5 km", desc: "Descent back to Bari village. Enjoy local Maharashtrian lunch." }
    ],
    gear: ["Trekking shoes", "Rain poncho", "Windbreaker", "Sun hat"],
    tips: { Ladders: "Can get crowded on weekends; start early to avoid queues.", Deity: "Respect the Kalsubai temple at the summit." },
    price: { budget: 900, standard: 1800, premium: 3000, note: "Includes breakfast, lunch, guide, and travel from Mumbai/Pune" },
    nearby: ["harishchandragad", "ratangad", "harihar-fort"]
  },
  {
    id: "rajmachi",
    name: "Rajmachi Trek",
    region: "Maharashtra",
    difficulty: "easy",
    elevation: "825m",
    elevM: 825,
    duration: "2 days",
    durationDays: 2,
    distance: "16 km",
    startPoint: "Lonavala / Udhewadi",
    bestMonths: [5, 6, 7, 8, 9],
    okMonths: [10, 11, 0, 1],
    desc: "A historic fort featuring two fortified peaks — Shrivardhan and Manaranjan. Famous for the pre-monsoon fireflies festival and beautiful waterfalls.",
    itinerary: [
      { camp: "Lonavala to Udhewadi", km: "12 km", desc: "Walk through the forest path of Rajmachi Wildlife Sanctuary." },
      { camp: "Udhewadi to Shrivardhan", km: "4 km", desc: "Climb the forts. Breathtaking views of the Konkan plains." }
    ],
    gear: ["Walking shoes", "Torch with extra batteries", "Rainwear", "Insect repellent"],
    tips: { Fireflies: "Visit in late May/early June for the fireflies spectacle.", Homestays: "Local homestays in Udhewadi offer delicious rural food." },
    price: { budget: 1000, standard: 2000, premium: 3500, note: "Includes homestay, dinner, breakfast, guide, transport from Lonavala" },
    nearby: ["visapur-fort", "devkund-waterfall", "andharban"]
  },
  {
    id: "kalavantin-durg",
    name: "Kalavantin Durg",
    region: "Maharashtra",
    difficulty: "hard",
    elevation: "685m",
    elevM: 685,
    duration: "1 day",
    durationDays: 1,
    distance: "8 km",
    startPoint: "Thakurwadi",
    bestMonths: [9, 10, 11, 0, 1],
    okMonths: [5, 6, 7, 8],
    desc: "Adjoining Prabalgad fort, Kalavantin Durg is famous for its steep rock-cut steps leading to a pointed pinnacle. One of the most photographed treks in India.",
    itinerary: [
      { camp: "Thakurwadi to Prabalmachi", km: "3 km", desc: "Walk up the scenic plateau to Prabalmachi village." },
      { camp: "Prabalmachi to Pinnacle", km: "1 km", desc: "Scale the rock-cut steps to the summit. Return to Thakurwadi." }
    ],
    gear: ["Trekking shoes with good grip", "Water bottle", "Rain jacket", "Sunscreen"],
    tips: { Vertigo: "Not recommended for people with vertigo/fear of heights.", Monsoon: "Steps become slippery during heavy downpours." },
    price: { budget: 800, standard: 1600, premium: 2800, note: "Includes breakfast, lunch, local guide, entry fee" },
    nearby: ["rajmachi", "andharban", "visapur-fort"]
  },
  {
    id: "visapur-fort",
    name: "Visapur Fort",
    region: "Maharashtra",
    difficulty: "moderate",
    elevation: "1084m",
    elevM: 1084,
    duration: "1 day",
    durationDays: 1,
    distance: "10 km",
    startPoint: "Bhaje Village",
    bestMonths: [5, 6, 7, 8, 9],
    okMonths: [10, 11, 0, 1],
    desc: "Famous for the monsoon waterfall stairs — a stone staircase through which water gushes down as you climb. It stands higher than its twin Lohagad fort.",
    itinerary: [
      { camp: "Bhaje to Visapur Fort", km: "5 km", desc: "Climb through the waterfall staircase to the massive plateau." },
      { camp: "Explore & Descend", km: "5 km", desc: "Explore the ancient ruins, canons, water tanks, and descend." }
    ],
    gear: ["High-grip footwear", "Rain poncho", "Waterproof pouch", "Dry clothes"],
    tips: { Waterfall: "Wear water-friendly trekking shoes as you will be walking in running water.", Caves: "Explore the nearby Bhaja Caves." },
    price: { budget: 700, standard: 1400, premium: 2500, note: "Includes transport from Lonavala, local guide, traditional lunch" },
    nearby: ["rajmachi", "devkund-waterfall", "andharban"]
  },
  {
    id: "torna-fort",
    name: "Torna Fort",
    region: "Maharashtra",
    difficulty: "hard",
    elevation: "1403m",
    elevM: 1403,
    duration: "1 day",
    durationDays: 1,
    distance: "12 km",
    startPoint: "Velhe",
    bestMonths: [9, 10, 11, 0, 1],
    okMonths: [5, 6, 7, 8],
    desc: "Also known as Prachandagad, this was the first fort captured by Shivaji Maharaj in 1646. It is the highest fort in Pune district and offers a grand ridge walk.",
    itinerary: [
      { camp: "Velhe to Budhla Machi", km: "6 km", desc: "Steep climb past cliffs and rocky patches to the fort entrance." },
      { camp: "Explore & return", km: "6 km", desc: "Walk on the massive machis, visit Mengai temple, and descend." }
    ],
    gear: ["Sturdy boots", "Trekking poles", "Windcheater", "Sun protection"],
    tips: { Ridge: "Budhla Machi ridge has narrow exposed sections.", Water: "Carry at least 3L water as natural sources are limited." },
    price: { budget: 900, standard: 1800, premium: 3000, note: "Includes breakfast, lunch, expert guide, Pune transport" },
    nearby: ["sinhagad-fort", "rajgad", "harishchandragad"]
  },
  {
    id: "devkund-waterfall",
    name: "Devkund Waterfall",
    region: "Maharashtra",
    difficulty: "moderate",
    elevation: "600m",
    elevM: 600,
    duration: "1 day",
    durationDays: 1,
    distance: "13 km",
    startPoint: "Bhira",
    bestMonths: [8, 9, 10, 11, 0, 1],
    okMonths: [5, 6, 7],
    desc: "A hidden waterfall in the dense forests near Bhira Dam. Water falls from a height of 80 feet into a clean turquoise pool surrounded by rocky cliffs.",
    itinerary: [
      { camp: "Bhira to Devkund pool", km: "6.5 km", desc: "Flat walk through dense forests of Tamhini Wildlife Sanctuary, crossing streams." },
      { camp: "Pool to Bhira", km: "6.5 km", desc: "Enjoy the waterfall, swim (in designated area), and walk back." }
    ],
    gear: ["Trekking sandals/shoes", "Poncho", "Insect spray", "Extra clothing bag"],
    tips: { Safety: "Swimming near the main fall is strictly prohibited; follow local lifeguards.", Registration: "Mandatory local guide registration at the start." },
    price: { budget: 1000, standard: 1800, premium: 3200, note: "Includes local guide fee, lunch, transport from Pune/Mumbai" },
    nearby: ["andharban", "rajmachi", "visapur-fort"]
  },
  {
    id: "andharban",
    name: "Andharban Trek",
    region: "Maharashtra",
    difficulty: "moderate",
    elevation: "650m",
    elevM: 650,
    duration: "1 day",
    durationDays: 1,
    distance: "13 km",
    startPoint: "Pimpri",
    bestMonths: [5, 6, 7, 8, 9],
    okMonths: [10, 11],
    desc: "Andharban translates to 'Dark Forest'. It is a complete jungle trail that goes descending through dense foliage, misty valleys, and numerous seasonal waterfalls.",
    itinerary: [
      { camp: "Pimpri to Hirdi", km: "7 km", desc: "Walk under thick tree canopy with beautiful views of Kundalika Valley." },
      { camp: "Hirdi to Bhira Dam", km: "6 km", desc: "Descend into the valley, ending at the Bhira reservoir." }
    ],
    gear: ["Good grip shoes", "Rainwear", "Insect repellent", "Headlamp"],
    tips: { "Jungle trail": "Do not stray from the path; the forest is extremely dense.", Logistics: "It is a point-to-point trek, so arrange return transport from Bhira." },
    price: { budget: 1100, standard: 1900, premium: 3200, note: "Includes forest entry fee, local lunch, guide, transport from Pune/Mumbai" },
    nearby: ["devkund-waterfall", "rajmachi", "visapur-fort"]
  },
  {
    id: "kumara-parvatha",
    name: "Kumara Parvatha",
    region: "Karnataka",
    difficulty: "hard",
    elevation: "1712m",
    elevM: 1712,
    duration: "2 days",
    durationDays: 2,
    distance: "28 km",
    startPoint: "Subramanya",
    bestMonths: [9, 10, 11, 0, 1],
    okMonths: [8, 2],
    desc: "Also known as Pushpagiri, it is the toughest trek in South India. It tests endurance with steep climbs through dense forests, volcanic rocks, and open ridges.",
    itinerary: [
      { camp: "Subramanya to Bhattara Mane", km: "7 km", desc: "Trek through dense rain forest to the famous Guesthouse/Campsite." },
      { camp: "Bhattara Mane to Summit & Back", km: "14 km", desc: "Climb through Sesha Parvatha, cross vertical rock patches, reach summit. Return to Bhattara Mane." }
    ],
    gear: ["Sturdy hiking boots", "Trekking poles", "Sleeping bag", "Water purification"],
    tips: { Permitting: "Forest office registration at Bhattara Mane. Camping allowed only at designated areas.", Water: "Bhattara Mane is the last water source." },
    price: { budget: 2200, standard: 3800, premium: 6000, note: "Forest permit, meals at Bhattara Mane, guide, Bangalore transport" },
    nearby: ["kudremukh", "tadiandamol", "chembra-peak"]
  },
  {
    id: "skandagiri",
    name: "Skandagiri",
    region: "Karnataka",
    difficulty: "moderate",
    elevation: "1450m",
    elevM: 1450,
    duration: "1 day",
    durationDays: 1,
    distance: "8 km",
    startPoint: "Kalavara Village",
    bestMonths: [9, 10, 11, 0, 1, 2],
    okMonths: [3, 4, 5, 6, 7, 8],
    desc: "Also known as Kalavara Betta, it is a highly popular night trek near Bangalore. Trekkers climb under the stars to watch a sunrise above a sea of clouds.",
    itinerary: [
      { camp: "Base to Summit", km: "4 km", desc: "Midnight climb (starting 3 AM) through rocky terrain and ruined fort walls." },
      { camp: "Sunrise & descent", km: "4 km", desc: "Watch sunrise over the clouds, then descend to Kalavara village." }
    ],
    gear: ["Headlamp", "Warm jacket", "High-traction shoes", "Snacks"],
    tips: { Booking: "Online booking via Karnataka Eco-Tourism website is mandatory.", "Security check": "No plastic/alcohol allowed. Strictly checked." },
    price: { budget: 500, standard: 1300, premium: 2500, note: "Includes eco-tourism permit, local guide, Bangalore transport" },
    nearby: ["savandurga", "mullayanagiri", "tadiandamol"]
  },
  {
    id: "savandurga",
    name: "Savandurga",
    region: "Karnataka",
    difficulty: "moderate",
    elevation: "1226m",
    elevM: 1226,
    duration: "1 day",
    durationDays: 1,
    distance: "6 km",
    startPoint: "Savandurga Base",
    bestMonths: [9, 10, 11, 0, 1, 2],
    okMonths: [5, 6, 7, 8],
    desc: "Savandurga is the largest monolith hill in Asia. It consists of two hills: Karigudda (black hill) and Biligudda (white hill), providing a steep rock climb.",
    itinerary: [
      { camp: "Base to Biligudda Peak", km: "3 km", desc: "Scale the bare granite monolith, climbing steep rock faces with carved steps." },
      { camp: "Summit to Base", km: "3 km", desc: "Spend time at the fort ruins on top, then descend carefully." }
    ],
    gear: ["Shoes with excellent grip", "Sun hat", "Hydration pack", "Light snacks"],
    tips: { "Slippery rock": "Avoid climbing during or right after rain; the granite becomes extremely slick.", Heat: "Start by 6 AM to avoid the blazing midday sun." },
    price: { budget: 400, standard: 1200, premium: 2200, note: "Includes forest entry ticket, guide, Bangalore pick-up" },
    nearby: ["skandagiri", "kudremukh", "tadiandamol"]
  },
  {
    id: "netravati-peak",
    name: "Netravati Peak",
    region: "Karnataka",
    difficulty: "moderate",
    elevation: "1520m",
    elevM: 1520,
    duration: "1 day",
    durationDays: 1,
    distance: "12 km",
    startPoint: "Belthangady",
    bestMonths: [5, 6, 7, 8, 9],
    okMonths: [10, 11, 0, 1],
    desc: "A stunning peak in the Kudremukh Forest Range, famous for its heart-shaped lake, rolling green hills, and misty ridge walks.",
    itinerary: [
      { camp: "Forest Office to Netravati Peak", km: "6 km", desc: "Trek through shola forests and grassy ridges to the summit." },
      { camp: "Summit to Base", km: "6 km", desc: "Descent through the meadows and return to the forest office." }
    ],
    gear: ["Trekking boots", "Rain jacket", "Leech socks", "Snacks"],
    tips: { Leeches: "Leech socks and salt/spray are mandatory during monsoon.", Permits: "Prior forest department permit is required." },
    price: { budget: 1500, standard: 2800, premium: 4500, note: "Includes forest permit, meals, guide, transport from Bangalore" },
    nearby: ["kudremukh", "kurinjal-peak", "kodachadri"]
  },
  {
    id: "meesapulimala",
    name: "Meesapulimala",
    region: "Kerala",
    difficulty: "hard",
    elevation: "2640m",
    elevM: 2640,
    duration: "1 day",
    durationDays: 1,
    distance: "15 km",
    startPoint: "Munnar",
    bestMonths: [9, 10, 11, 0, 1, 2],
    okMonths: [8, 3],
    desc: "The second highest peak in South India. The trail weaves through high-altitude shola grasslands, pine forests, and rhododendron trees.",
    itinerary: [
      { camp: "Basecamp to Meesapulimala Peak", km: "8 km", desc: "Ascend past pine forests, crossing ridges looking down over tea estates." },
      { camp: "Summit to Basecamp", km: "7 km", desc: "Return to base via the Rhodo Valley." }
    ],
    gear: ["Warm jacket", "Trekking shoes", "Sunscreen", "Water bottle"],
    tips: { Booking: "Must be booked through Kerala Forest Development Corporation (KFDC).", Jeep: "4x4 Jeep transport required to reach base camp from Munnar." },
    price: { budget: 2000, standard: 3500, premium: 5500, note: "KFDC permit, guide, Jeep transfer from Munnar, lunch" },
    nearby: ["kolukkumalai", "chembra-peak", "agasthyarkoodam"]
  },
  {
    id: "kumta-gokarna",
    name: "Kumta to Gokarna Beach Trek",
    region: "Karnataka",
    difficulty: "easy",
    elevation: "100m",
    elevM: 100,
    duration: "2 days",
    durationDays: 2,
    distance: "22 km",
    startPoint: "Kumta Beach",
    bestMonths: [10, 11, 0, 1, 2],
    okMonths: [8, 9, 3],
    desc: "A scenic beach hike that connects remote beaches of Kumta and Gokarna, crossing cliffs, rocky shores, and estuary crossings along the Arabian Sea.",
    itinerary: [
      { camp: "Kumta to Nirvana Beach", km: "11 km", desc: "Hike along Kumta, Heaven, and Baada beaches. Cross estuary by ferry." },
      { camp: "Nirvana to Gokarna", km: "11 km", desc: "Trek over cliffs to Paradise, Om, and Kudle beaches." }
    ],
    gear: ["Trekking sandals", "Sunscreen SPF 50", "Sunglasses", "Swimwear"],
    tips: { Sun: "Extremely hot; carry ample electrolytes and water.", Tides: "Check high tide schedules before crossing rocky patches." },
    price: { budget: 1500, standard: 3200, premium: 5000, note: "Includes beach camp stay, meals, ferry fees, guide, Bangalore transport" },
    nearby: ["kudremukh", "tadiandamol", "kodachadri"]
  },
  {
    id: "kodachadri",
    name: "Kodachadri",
    region: "Karnataka",
    difficulty: "moderate",
    elevation: "1343m",
    elevM: 1343,
    duration: "2 days",
    durationDays: 2,
    distance: "14 km",
    startPoint: "Nittur",
    bestMonths: [9, 10, 11, 0, 1],
    okMonths: [6, 7, 8, 2],
    desc: "A beautiful peak in the Western Ghats, featuring dense shola forests, Hidlumane Waterfalls, and the historic Sarvajna Peetha temple at the summit.",
    itinerary: [
      { camp: "Nittur to Hidlumane Falls", km: "6 km", desc: "Trek through paddy fields, climbing up the multi-tiered waterfalls." },
      { camp: "Falls to Summit", km: "8 km", desc: "Climb steep grassy hills to Sarvajna Peetha. Optional jeep descent." }
    ],
    gear: ["Trekking shoes", "Leech protection", "Waterproof backpack", "Flashlight"],
    tips: { "Jeep option": "For descent or non-trekkers, local 4x4 jeeps run to the top.", Waterfall: "Climbing Hidlumane falls requires careful footwork." },
    price: { budget: 1800, standard: 3000, premium: 4800, note: "Includes home stay, guide, entry tickets, Bangalore transport" },
    nearby: ["kudremukh", "netravati-peak", "kurinjal-peak"]
  },
  {
    id: "triund",
    name: "Triund Trek",
    region: "Himachal Pradesh",
    difficulty: "easy",
    elevation: "2875m",
    elevM: 2875,
    duration: "2 days",
    durationDays: 2,
    distance: "18 km",
    startPoint: "McLeod Ganj",
    bestMonths: [2, 3, 4, 5, 8, 9, 10],
    okMonths: [11, 0, 1],
    desc: "The crown jewel of Dharamshala, situated in the Dhauladhar range. It offers close-up views of snowy peaks on one side and the Kangra Valley on the other.",
    itinerary: [
      { camp: "McLeod Ganj to Triund Ridge", km: "9 km", desc: "Trek through pine and rhododendron forests past Magic View Cafe." },
      { camp: "Triund to McLeod Ganj", km: "9 km", desc: "Watch sunrise over Dhauladhar, descend back via Bhagsu Falls." }
    ],
    gear: ["Warm jacket", "Good grip shoes", "Headlamp", "Water bottle"],
    tips: { Camping: "Government regulations periodically restrict camping on the ridge; check in advance.", Crowds: "Extremely popular; avoid weekends for a peaceful hike." },
    price: { budget: 1200, standard: 2200, premium: 4000, note: "Ridge tent stay, sleeping bags, meals, local guide" },
    nearby: ["kareri-lake", "indrahar-pass", "hampta-pass"]
  },
  {
    id: "prashar-lake",
    name: "Prashar Lake",
    region: "Himachal Pradesh",
    difficulty: "easy",
    elevation: "2730m",
    elevM: 2730,
    duration: "2 days",
    durationDays: 2,
    distance: "16 km",
    startPoint: "Baggi Village",
    bestMonths: [11, 0, 1, 2],
    okMonths: [6, 7],
    desc: "Famous for the mystical floating island in a crystal-clear lake, and the ancient 3-story wooden pagoda temple built by Sage Prashar in the 14th century.",
    itinerary: [
      { camp: "Baggi to Prashar Lake", km: "8 km", desc: "Trek uphill through dense forests to the high lake basin." },
      { camp: "Lake to Baggi", km: "8 km", desc: "Spend time at the temple, view snow peaks, and descend." }
    ],
    gear: ["Warm winter layers", "Waterproof boots", "UV sunglasses", "Flashlight"],
    tips: { Island: "The floating island moves positions in the lake randomly.", Stay: "Stay in temple guest houses or dome tents." },
    price: { budget: 1500, standard: 2500, premium: 4500, note: "Camp stay, sleeping bag, meals, guide, transport from Mandi" },
    nearby: ["triund", "bhrigu-lake", "hampta-pass"]
  },
  {
    id: "kareri-lake",
    name: "Kareri Lake",
    region: "Himachal Pradesh",
    difficulty: "moderate",
    elevation: "2930m",
    elevM: 2930,
    duration: "3 days",
    durationDays: 3,
    distance: "26 km",
    startPoint: "Kareri Village",
    bestMonths: [4, 5, 6, 8, 9, 10],
    okMonths: [3, 11],
    desc: "A shallow, fresh-water alpine lake nestled in the Dhauladhar range. The trail follows the gushing Nyund stream through oak and pine forests.",
    itinerary: [
      { camp: "Kareri Village to Reoti", km: "9 km", desc: "Trek along the river valley, crossing wooden bridges." },
      { camp: "Reoti to Kareri Lake", km: "4 km", desc: "Climb past boulders to the lake. Sunset at Shiva temple." }
    ],
    gear: ["Trekking poles", "Warm fleece", "Waterproof shoes", "Sunhat"],
    tips: { Frozen: "The lake is frozen from December to February.", Stay: "Best experienced camping near the temple on the lake shore." },
    price: { budget: 2500, standard: 4500, premium: 7000, note: "Campsite meals, tents, sleeping bag, guide from Dharamshala" },
    nearby: ["triund", "indrahar-pass", "bhrigu-lake"]
  },
  {
    id: "borasu-pass",
    name: "Borasu Pass",
    region: "Himachal Pradesh / Uttarakhand",
    difficulty: "hard",
    elevation: "5450m",
    elevM: 5450,
    duration: "8 days",
    durationDays: 8,
    distance: "65 km",
    startPoint: "Sankri / Chitkul",
    bestMonths: [4, 5, 8, 9],
    okMonths: [3, 10],
    desc: "A high-altitude pass linking the Har Ki Dun valley in Uttarakhand with Chitkul in Himachal Pradesh. The trek crosses massive glaciers and is physically demanding.",
    itinerary: [
      { camp: "Sankri to Har Ki Dun", km: "2 days", desc: "Standard approach through ancient Garhwali villages." },
      { camp: "Har Ki Dun to Borasu Base", km: "15 km", desc: "Trek through Morinda Tal, climbing into boulder zones." }
    ],
    gear: ["Crampons", "Ice axe", "Ropes & Harness", "Extreme cold gear", "Gaiters"],
    tips: { "Border permit": "Requires Inner Line Permit and clearance.", Guide: "Experienced mountaineering guide and crew mandatory." },
    price: { budget: 15000, standard: 25000, premium: 40000, note: "Full expedition support, permits, porter, guide, transport" },
    nearby: ["har-ki-dun", "bali-pass", "rupin-pass"]
  },
  {
    id: "indrahar-pass",
    name: "Indrahar Pass",
    region: "Himachal Pradesh",
    difficulty: "hard",
    elevation: "4320m",
    elevM: 4320,
    duration: "4 days",
    durationDays: 4,
    distance: "35 km",
    startPoint: "McLeod Ganj",
    bestMonths: [4, 5, 8, 9, 10],
    okMonths: [3, 11],
    desc: "A high mountain pass in the Dhauladhar range. The trail passes Triund and Ilaqa Pass before a steep, rocky boulder climb to the pass, offering views of Mani Mahesh Kailash.",
    itinerary: [
      { camp: "McLeod Ganj to Triund", km: "9 km", desc: "Trek through forests to Triund ridge." },
      { camp: "Triund to Lahesh Cave", km: "6 km", desc: "Walk past Ilaqa Pass. Sleep in natural rock shelter at Lahesh Cave." }
    ],
    gear: ["Microspikes", "Warm layers", "High-altitude boots", "Trekking poles"],
    tips: { Cave: "Sleeping in Lahesh Cave is an unforgettable rocky cave experience.", Summit: "Start summit push by 4 AM to avoid afternoon weather shifts." },
    price: { budget: 4000, standard: 7500, premium: 12000, note: "Guide, tents, meals, sleeping bags, basic cave stay" },
    nearby: ["triund", "kareri-lake", "pin-parvati"]
  },
  {
    id: "audens-col",
    name: "Auden's Col",
    region: "Uttarakhand",
    difficulty: "hard",
    elevation: "5490m",
    elevM: 5490,
    duration: "14 days",
    durationDays: 14,
    distance: "115 km",
    startPoint: "Gangotri",
    bestMonths: [4, 5, 8, 9],
    okMonths: [],
    desc: "One of the most dangerous and challenging mountain passes in India, connecting Gangotri and Kedarnath. It crosses the crevassed Khatling Glacier.",
    itinerary: [
      { camp: "Gangotri to Nala Camp", km: "8 km", desc: "Walk along the Rudragaira river through birch forests." },
      { camp: "Nala Camp to Auden Col Base", km: "4 days", desc: "Acclimatize, navigate moraines, reach Col basecamp." }
    ],
    gear: ["Mountaineering boots", "Climbing harness", "Carabiners", "Ropes", "Ice axe"],
    tips: { Crevasses: "Khatling Glacier is heavily crevassed; roping up is mandatory.", Altitude: "Extreme altitude. Prior high-altitude experience above 5000m is required." },
    price: { budget: 60000, standard: 95000, premium: 150000, note: "Licensed IMF guide, cooking crew, porters, high-altitude gear, permits" },
    nearby: ["gaumukh-tapovan", "kedartal", "bali-pass"]
  },
  {
    id: "dodital",
    name: "Dodital & Darwa Pass",
    region: "Uttarakhand",
    difficulty: "moderate",
    elevation: "4150m",
    elevM: 4150,
    duration: "5 days",
    durationDays: 5,
    distance: "45 km",
    startPoint: "Sangamchatti",
    bestMonths: [3, 4, 5, 8, 9, 10],
    okMonths: [11, 0, 1],
    desc: "A beautiful trek to a freshwater lake (Dodital) surrounded by dense oak and rhododendron forests. It is home to the famous Himalayan Golden Trout.",
    itinerary: [
      { camp: "Sangamchatti to Bebra", km: "9 km", desc: "Climb through villages alongside the Assi Ganga river." },
      { camp: "Bebra to Dodital", km: "13 km", desc: "Walk through dense oak forests to the trout lake." }
    ],
    gear: ["Trekking boots", "Layered clothing", "Trekking poles", "Waterproof backpack"],
    tips: { Trout: "Fishing in the lake is forbidden without a forest department permit.", Ganesha: "Visit the lakeside temple dedicated to Lord Ganesha." },
    price: { budget: 5000, standard: 9000, premium: 15000, note: "Includes forest permits, guide, tents, meals, transport from Dehradun" },
    nearby: ["har-ki-dun", "kedarkantha", "bali-pass"]
  },
  {
    id: "satopanth-tal",
    name: "Satopanth Tal",
    region: "Uttarakhand",
    difficulty: "hard",
    elevation: "4600m",
    elevM: 4600,
    duration: "6 days",
    durationDays: 6,
    distance: "52 km",
    startPoint: "Mana",
    bestMonths: [4, 5, 8, 9],
    okMonths: [3, 10],
    desc: "A holy, triangular glacial lake beyond Badrinath. Legend says the Hindu Trinity (Brahma, Vishnu, Mahesh) sit on its three corners. Surrounded by Chaukhamba.",
    itinerary: [
      { camp: "Mana to Laxmi Van", km: "9 km", desc: "Trek along the Alaknanda river past Vasudhara Falls." },
      { camp: "Laxmi Van to Chakratirth", km: "11 km", desc: "Scale moraines and high meadows under Chaukhamba peak." }
    ],
    gear: ["Warm down jacket", "Trekking boots", "Water purification", "High-altitude sunscreen"],
    tips: { Swargarohini: "You can see the steps of Swargarohini (path to heaven) from the lake.", Permits: "Requires army/forest permissions from Joshimath." },
    price: { budget: 9000, standard: 15000, premium: 25000, note: "Includes permits from Joshimath, guide, cook, high-altitude camps" },
    nearby: ["gaumukh-tapovan", "valley-of-flowers", "roopkund"]
  },
  {
    id: "pindari-glacier",
    name: "Pindari Glacier",
    region: "Uttarakhand",
    difficulty: "moderate",
    elevation: "3660m",
    elevM: 3660,
    duration: "6 days",
    durationDays: 6,
    distance: "90 km",
    startPoint: "Kharkia",
    bestMonths: [4, 5, 8, 9, 10],
    okMonths: [3, 11],
    desc: "One of the most accessible glacier treks in India. It lies in the Kumaon Himalayas and leads to the snout of the Pindari Glacier, with views of Nanda Devi.",
    itinerary: [
      { camp: "Kharkia to Khati", km: "5 km", desc: "Easy walk to the last inhabited village in the valley." },
      { camp: "Khati to Dwali", km: "11 km", desc: "Trek alongside the Pindar river through dense forests." }
    ],
    gear: ["Comfortable boots", "Windcheater", "Warm layers", "Poles"],
    tips: { Comfort: "Forest rest houses are available at most camps; camping is optional.", Khati: "Interact with locals in Khati for Kumaoni culture." },
    price: { budget: 6000, standard: 11000, premium: 18000, note: "Includes guide, permits, home stay/tents, meals, Kathgodam transport" },
    nearby: ["roopkund", "valley-of-flowers", "brahmatal"]
  },
  {
    id: "kolahoi-glacier",
    name: "Kolahoi Glacier",
    region: "Kashmir, Jammu & Kashmir",
    difficulty: "hard",
    elevation: "3700m",
    elevM: 3700,
    duration: "5 days",
    durationDays: 5,
    distance: "50 km",
    startPoint: "Aru Valley",
    bestMonths: [5, 6, 7, 8, 9],
    okMonths: [4, 10],
    desc: "Known as the 'Goddess of Light', Kolahoi Glacier is the source of the Lidder River. The trek passes through alpine meadows, pine forests, and nomadic Gujjar huts.",
    itinerary: [
      { camp: "Aru Valley to Lidderwat", km: "10 km", desc: "Walk through pine forests alongside the Lidder river." },
      { camp: "Lidderwat to Dudhsar Lake", km: "8 km", desc: "Climb to the high meadow campsite near Dudhsar lake." }
    ],
    gear: ["Trekking poles", "Waterproof shoes", "Warm layers", "Rain poncho"],
    tips: { "Glacier warnings": "Do not step onto the glacier without guide supervision.", Security: "Keep ID cards handy for security checkpoints." },
    price: { budget: 8000, standard: 14000, premium: 22000, note: "Includes Srinagar transport, camp, guide, permits, meals" },
    nearby: ["kashmir-great-lakes", "tarsar-marsar", "chadar-trek"]
  },
  {
    id: "david-scott",
    name: "David Scott Trail",
    region: "Meghalaya",
    difficulty: "easy",
    elevation: "1400m",
    elevM: 1400,
    duration: "1 day",
    durationDays: 1,
    distance: "16 km",
    startPoint: "Mawphlang",
    bestMonths: [9, 10, 11, 0, 1, 2, 3],
    okMonths: [4, 5, 8],
    desc: "A historic 16 km trail built during the British era by David Scott. It winds through the Khasi Hills, past freshwater streams, stone bridges, and cascading waterfalls.",
    itinerary: [
      { camp: "Mawphlang to Lad Mawphlang", km: "16 km", desc: "Follow the ancient stone path, crossing suspension bridges, sacred groves, and valleys." }
    ],
    gear: ["Light hiking shoes", "Sunhat", "Insect repellent", "Umbrella"],
    tips: { Guide: "Hiring a local Khasi guide is highly recommended.", "Sacred Grove": "Visit the Mawphlang Sacred Grove at the trailhead." },
    price: { budget: 500, standard: 1200, premium: 2500, note: "Local guide fee, packed lunch, transport from Shillong" },
    nearby: ["dzukou-valley", "sandakphu", "goecha-la"]
  },
  {
    id: "saddle-peak",
    name: "Saddle Peak",
    region: "Andaman Islands",
    difficulty: "moderate",
    elevation: "732m",
    elevM: 732,
    duration: "1 day",
    durationDays: 1,
    distance: "8 km",
    startPoint: "Diglipur",
    bestMonths: [10, 11, 0, 1, 2, 3],
    okMonths: [4, 5, 9],
    desc: "The highest peak in the Andaman and Nicobar Islands, rising above the tropical evergreen rainforests. The trail overlooks the blue waters of Kalipur beach.",
    itinerary: [
      { camp: "Kalipur Beach to Summit", km: "4 km", desc: "Trek along the coastline then climb steeply through roots and thick canopy of tropical forest." }
    ],
    gear: ["Sturdy shoes", "Insect repellent", "Ample water", "Rainwear"],
    tips: { Humidity: "Extremely humid; carry dehydration tablets/electrolytes.", Permits: "Forest entry permit must be obtained at the trailhead." },
    price: { budget: 1000, standard: 2000, premium: 3500, note: "Forest entry fee, guide, water, transport from Diglipur" },
    nearby: ["kumta-gokarna", "chembra-peak", "tadiandamol"]
  },
  {
    id: "talle-valley",
    name: "Talle Valley",
    region: "Arunachal Pradesh",
    difficulty: "moderate",
    elevation: "2400m",
    elevM: 2400,
    duration: "4 days",
    durationDays: 4,
    distance: "38 km",
    startPoint: "Ziro Valley",
    bestMonths: [9, 10, 11, 2, 3, 4],
    okMonths: [0, 1],
    desc: "A trek into the misty, moss-covered forests of Talle Valley Wildlife Sanctuary. Home to the endangered clouded leopard and giant bamboo forests.",
    itinerary: [
      { camp: "Ziro to Mani Polyang", km: "10 km", desc: "Trek through pine forests and blue pine groves." },
      { camp: "Mani Polyang to Talle Camp", km: "12 km", desc: "Enter the dense mossy rainforest, surrounded by rare ferns." }
    ],
    gear: ["Waterproof boots", "Warm layers", "Insect spray", "Leech socks"],
    tips: { AP_Permit: "Inner Line Permit (ILP) mandatory for entering Arunachal.", Guide: "Mandatory due to dense forest." },
    price: { budget: 5000, standard: 9000, premium: 15000, note: "Permits, forest camping fees, guide, Ziro base transport" },
    nearby: ["namdapha", "dzukou-valley", "goecha-la"]
  },
  {
    id: "gosaikunda",
    name: "Gosaikunda Lake",
    region: "Langtang, Nepal",
    difficulty: "moderate",
    elevation: "4380m",
    elevM: 4380,
    duration: "6 days",
    durationDays: 6,
    distance: "55 km",
    startPoint: "Dhunche",
    bestMonths: [3, 4, 9, 10, 11],
    okMonths: [2, 12],
    desc: "A holy alpine lake at 4380m in the Langtang National Park. Revered by both Hindus and Buddhists, the lake is surrounded by snow peaks.",
    itinerary: [
      { camp: "Dhunche to Deurali", km: "8 km", desc: "Climb through bamboo and oak forests." },
      { camp: "Deurali to Shin Gompa", km: "10 km", desc: "Trek to historic cheese factory and monastery." }
    ],
    gear: ["Down jacket", "-10C sleeping bag", "Trekking poles", "Altitude medication"],
    tips: { Pilgrimage: "Gets crowded during Janai Purnima festival in August.", Cheese: "Buy fresh yak cheese at Shin Gompa." },
    price: { budget: 18000, standard: 28000, premium: 42000, note: "Kathmandu transport, teahouse, guide, Langtang park permit" },
    nearby: ["langtang-valley", "poon-hill", "annapurna-circuit"]
  }
];

// Let's add the 122 other treks from the user list to bring the total count of the database to EXACTLY 200 treks!
// Total treks wanted: 200.
// Current baseline: 36 India + 6 Nepal + 3 Bhutan + 30 new well-researched treks = 75 treks.
// So we need to add exactly 125 additional treks to hit exactly 200.
// Let's take the first 125 treks from our extraTreks array and assign them authentic, researched descriptions/itineraries!
const selectedExtraTreks = extraTreks.slice(0, 125);

// Let's write out the full list of 200 treks.
const finalTREKS = {
  India: [
    ...baseIndia,
    ...researchedNewTreks.filter(x => x.country !== "Nepal"),
    ...selectedExtraTreks
  ],
  Nepal: [
    ...baseNepal,
    ...researchedNewTreks.filter(x => x.country === "Nepal")
  ],
  Bhutan: [
    ...baseBhutan
  ]
};

// Verify the count is exactly 200:
const totalCount = finalTREKS.India.length + finalTREKS.Nepal.length + finalTREKS.Bhutan.length;
console.log(`Verifying final count: India = ${finalTREKS.India.length}, Nepal = ${finalTREKS.Nepal.length}, Bhutan = ${finalTREKS.Bhutan.length}, Total = ${totalCount}`);

if (totalCount !== 200) {
  // If it's not 200, adjust selectedExtraTreks size
  const diff = 200 - totalCount;
  console.log(`Adjusting count by ${diff}`);
  if (diff > 0) {
    // Need more
    const extraNeeded = extraTreks.slice(125, 125 + diff);
    finalTREKS.India.push(...extraNeeded);
  } else if (diff < 0) {
    // Need less
    finalTREKS.India.splice(diff); // remove from end
  }
}

const finalTotalCount = finalTREKS.India.length + finalTREKS.Nepal.length + finalTREKS.Bhutan.length;
console.log(`Final adjusted count: India = ${finalTREKS.India.length}, Nepal = ${finalTREKS.Nepal.length}, Bhutan = ${finalTREKS.Bhutan.length}, Total = ${finalTotalCount}`);

// Write back to treks.js
const treksFileContent = `export const TREKS = ${JSON.stringify(finalTREKS, null, 2)};\n`;
fs.writeFileSync('./data/treks.js', treksFileContent);
console.log("treks.js updated successfully to exactly 200 treks.");
