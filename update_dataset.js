import fs from 'fs';
import { TREKS } from './data/treks.js';

// The 30 new treks to add to the dataset
const newIndiaTreks = [
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
    tips: {
      "Steps warning": "Extreme caution on steps during heavy rain.",
      Permit: "Local entry fee may apply."
    },
    price: {
      budget: 800,
      standard: 1500,
      premium: 3000,
      note: "Includes base transport from Nashik, guide, local meals"
    },
    nearby: ["Kalsubai Peak", "Anjaneri Fort", "Harishchandragad"]
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
      { camp: "Temple to Kokankada", km: "3 km", desc: "Explore the caves, Kedareshwar temple, and sunset at Konkan Kada." },
      { camp: "Descent", km: "9 km", desc: "Morning sunrise, then descend back to the base village." }
    ],
    gear: ["Trekking boots", "Sleeping bag/mat", "Headlamp", "Windcheater"],
    tips: {
      "Konkan Kada": "Do not venture near the edge during high winds.",
      Caves: "Basic cave stays available."
    },
    price: {
      budget: 1200,
      standard: 2200,
      premium: 4000,
      note: "Includes tent/cave stay, local meals, guide, transport from Pune/Mumbai"
    },
    nearby: ["Kalsubai Peak", "Harihar Fort", "Visapur Fort"]
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
    tips: {
      Ladders: "Can get crowded on weekends; start early to avoid queues.",
      Deity: "Respect the Kalsubai temple at the summit."
    },
    price: {
      budget: 900,
      standard: 1800,
      premium: 3000,
      note: "Includes breakfast, lunch, guide, and travel from Mumbai/Pune"
    },
    nearby: ["Harishchandragad", "Ratangad", "Harihar Fort"]
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
    tips: {
      Fireflies: "Visit in late May/early June for the fireflies spectacle.",
      Homestays: "Local homestays in Udhewadi offer delicious rural food."
    },
    price: {
      budget: 1000,
      standard: 2000,
      premium: 3500,
      note: "Includes homestay, dinner, breakfast, guide, transport from Lonavala"
    },
    nearby: ["Visapur Fort", "Devkund Waterfall", "Andharban"]
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
    tips: {
      Vertigo: "Not recommended for people with vertigo/fear of heights.",
      Monsoon: "Steps become slippery during heavy downpours."
    },
    price: {
      budget: 800,
      standard: 1600,
      premium: 2800,
      note: "Includes breakfast, lunch, local guide, entry fee"
    },
    nearby: ["Rajmachi Trek", "Andharban", "Visapur Fort"]
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
    tips: {
      Waterfall: "Wear water-friendly trekking shoes as you will be walking in running water.",
      Caves: "Explore the nearby Bhaja Caves."
    },
    price: {
      budget: 700,
      standard: 1400,
      premium: 2500,
      note: "Includes transport from Lonavala, local guide, traditional lunch"
    },
    nearby: ["Rajmachi Trek", "Devkund Waterfall", "Andharban"]
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
    tips: {
      Ridge: "Budhla Machi ridge has narrow exposed sections.",
      Water: "Carry at least 3L water as natural sources are limited."
    },
    price: {
      budget: 900,
      standard: 1800,
      premium: 3000,
      note: "Includes breakfast, lunch, expert guide, Pune transport"
    },
    nearby: ["Sinhagad Fort", "Rajgad Trek", "Harishchandragad"]
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
    tips: {
      Safety: "Swimming near the main fall is strictly prohibited; follow local lifeguards.",
      Registration: "Mandatory local guide registration at the start."
    },
    price: {
      budget: 1000,
      standard: 1800,
      premium: 3200,
      note: "Includes local guide fee, lunch, transport from Pune/Mumbai"
    },
    nearby: ["Andharban", "Rajmachi Trek", "Visapur Fort"]
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
    tips: {
      "Jungle trail": "Do not stray from the path; the forest is extremely dense.",
      Logistics: "It is a point-to-point trek, so arrange return transport from Bhira."
    },
    price: {
      budget: 1100,
      standard: 1900,
      premium: 3200,
      note: "Includes forest entry fee, local lunch, guide, transport from Pune/Mumbai"
    },
    nearby: ["Devkund Waterfall", "Rajmachi Trek", "Visapur Fort"]
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
      { camp: "Bhattara Mane to Summit & Back", km: "14 km", desc: "Climb through Sesha Parvatha, cross vertical rock patches, reach summit. Return to Bhattara Mane." },
      { camp: "Descent", km: "7 km", desc: "Descend back to Subramanya town." }
    ],
    gear: ["Sturdy hiking boots", "Trekking poles", "Sleeping bag", "Water purification"],
    tips: {
      Permitting: "Forest office registration at Bhattara Mane. Camping allowed only at designated areas.",
      Water: "Bhattara Mane is the last water source."
    },
    price: {
      budget: 2200,
      standard: 3800,
      premium: 6000,
      note: "Forest permit, meals at Bhattara Mane, guide, Bangalore transport"
    },
    nearby: ["Kudremukh", "Tadiandamol", "Chembra Peak"]
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
    tips: {
      Booking: "Online booking via Karnataka Eco-Tourism website is mandatory.",
      "Security check": "No plastic/alcohol allowed. Strictly checked."
    },
    price: {
      budget: 500,
      standard: 1300,
      premium: 2500,
      note: "Includes eco-tourism permit, local guide, Bangalore transport"
    },
    nearby: ["Savandurga", "Mullayanagiri", "Tadiandamol"]
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
    tips: {
      "Slippery rock": "Avoid climbing during or right after rain; the granite becomes extremely slick.",
      Heat: "Start by 6 AM to avoid the blazing midday sun."
    },
    price: {
      budget: 400,
      standard: 1200,
      premium: 2200,
      note: "Includes forest entry ticket, guide, Bangalore pick-up"
    },
    nearby: ["Skandagiri", "Kudremukh", "Tadiandamol"]
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
    tips: {
      Leeches: "Leech socks and salt/spray are mandatory during monsoon.",
      Permits: "Prior forest department permit is required."
    },
    price: {
      budget: 1500,
      standard: 2800,
      premium: 4500,
      note: "Includes forest permit, meals, guide, transport from Bangalore"
    },
    nearby: ["Kudremukh", "Kurinjal Peak", "Kodachadri"]
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
    tips: {
      Booking: "Must be booked through Kerala Forest Development Corporation (KFDC).",
      Jeep: "4x4 Jeep transport required to reach base camp from Munnar."
    },
    price: {
      budget: 2000,
      standard: 3500,
      premium: 5500,
      note: "KFDC permit, guide, Jeep transfer from Munnar, lunch"
    },
    nearby: ["Kolukkumalai Sunrise", "Chembra Peak", "Agasthyarkoodam"]
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
    tips: {
      Sun: "Extremely hot; carry ample electrolytes and water.",
      Tides: "Check high tide schedules before crossing rocky patches."
    },
    price: {
      budget: 1500,
      standard: 3200,
      premium: 5000,
      note: "Includes beach camp stay, meals, ferry fees, guide, Bangalore transport"
    },
    nearby: ["Kudremukh", "Tadiandamol", "Kodachadri"]
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
    tips: {
      "Jeep option": "For descent or non-trekkers, local 4x4 jeeps run to the top.",
      Waterfall: "Climbing Hidlumane falls requires careful footwork."
    },
    price: {
      budget: 1800,
      standard: 3000,
      premium: 4800,
      note: "Includes home stay, guide, entry tickets, Bangalore transport"
    },
    nearby: ["Kudremukh", "Netravati Peak", "Kurinjal Peak"]
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
    tips: {
      Camping: "Government regulations periodically restrict camping on the ridge; check in advance.",
      Crowds: "Extremely popular; avoid weekends for a peaceful hike."
    },
    price: {
      budget: 1200,
      standard: 2200,
      premium: 4000,
      note: "Ridge tent stay, sleeping bags, meals, local guide"
    },
    nearby: ["Kareri Lake", "Indrahar Pass", "Hampta Pass"]
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
    tips: {
      Island: "The floating island moves positions in the lake randomly.",
      Stay: "Stay in temple guest houses or dome tents."
    },
    price: {
      budget: 1500,
      standard: 2500,
      premium: 4500,
      note: "Camp stay, sleeping bag, meals, guide, transport from Mandi"
    },
    nearby: ["Triund", "Bhrigu Lake", "Hampta Pass"]
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
      { camp: "Reoti to Kareri Lake", km: "4 km", desc: "Climb past boulders to the lake. Sunset at Shiva temple." },
      { camp: "Lake to Kareri Village", km: "13 km", desc: "Descend back via Reoti to the base village." }
    ],
    gear: ["Trekking poles", "Warm fleece", "Waterproof shoes", "Sunhat"],
    tips: {
      Frozen: "The lake is frozen from December to February.",
      Stay: "Best experienced camping near the temple on the lake shore."
    },
    price: {
      budget: 2500,
      standard: 4500,
      premium: 7000,
      note: "Campsite meals, tents, sleeping bag, guide from Dharamshala"
    },
    nearby: ["Triund", "Indrahar Pass", "Bhrigu Lake"]
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
      { camp: "Har Ki Dun to Borasu Base", km: "15 km", desc: "Trek through Morinda Tal, climbing into boulder zones." },
      { camp: "Base to Chitkul via Pass", km: "22 km", desc: "Glacier traverse. Cross Borasu Pass (5450m). Steep snow descent into Kinnaur." }
    ],
    gear: ["Crampons", "Ice axe", "Ropes & Harness", "Extreme cold gear", "Gaiters"],
    tips: {
      "Border permit": "Requires Inner Line Permit and clearance.",
      Guide: "Experienced mountaineering guide and crew mandatory."
    },
    price: {
      budget: 15000,
      standard: 25000,
      premium: 40000,
      note: "Full expedition support, permits, porter, guide, transport"
    },
    nearby: ["Har Ki Dun", "Bali Pass", "Rupin Pass"]
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
      { camp: "Triund to Lahesh Cave", km: "6 km", desc: "Walk past Ilaqa Pass. Sleep in natural rock shelter at Lahesh Cave." },
      { camp: "Cave to Pass & Back", km: "10 km", desc: "Climb steep rock faces and snow patches to Indrahar Pass (4320m). Return to Ilaqa." },
      { camp: "Descent", km: "10 km", desc: "Walk back to McLeod Ganj." }
    ],
    gear: ["Microspikes", "Warm layers", "High-altitude boots", "Trekking poles"],
    tips: {
      Cave: "Sleeping in Lahesh Cave is an unforgettable rocky cave experience.",
      Summit: "Start summit push by 4 AM to avoid afternoon weather shifts."
    },
    price: {
      budget: 4000,
      standard: 7500,
      premium: 12000,
      note: "Guide, tents, meals, sleeping bags, basic cave stay"
    },
    nearby: ["Triund", "Kareri Lake", "Pin Parvati Pass"]
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
      { camp: "Nala Camp to Auden Col Base", km: "4 days", desc: "Acclimatize, navigate moraines, reach Col basecamp." },
      { camp: "Col Crossing to Khatling", km: "15 km", desc: "Roped crossing of Auden's Col (5490m). Steep abseil down onto Khatling glacier." },
      { camp: "Khatling to Kedarnath", km: "5 days", desc: "Cross crevassed glacier, descend into lush forests of Kedarnath." }
    ],
    gear: ["Mountaineering boots", "Climbing harness", "Carabiners", "Ropes", "Ice axe", "Snow stakes"],
    tips: {
      Crevasses: "Khatling Glacier is heavily crevassed; roping up is mandatory.",
      Altitude: "Extreme altitude. Prior high-altitude experience above 5000m is required."
    },
    price: {
      budget: 60000,
      standard: 95000,
      premium: 150000,
      note: "Licensed IMF guide, cooking crew, porters, high-altitude gear, permits"
    },
    nearby: ["Gaumukh Tapovan", "Kedartal", "Bali Pass"]
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
      { camp: "Bebra to Dodital", km: "13 km", desc: "Walk through dense oak forests to the trout lake." },
      { camp: "Dodital to Darwa Top", km: "5 km", desc: "Climb to Darwa Pass (4150m) for close views of Bandarpoonch peak." },
      { camp: "Return", km: "18 km", desc: "Two days descent back to Sangamchatti." }
    ],
    gear: ["Trekking boots", "Layered clothing", "Trekking poles", "Waterproof backpack"],
    tips: {
      Trout: "Fishing in the lake is forbidden without a forest department permit.",
      Ganesha: "Visit the lakeside temple dedicated to Lord Ganesha."
    },
    price: {
      budget: 5000,
      standard: 9000,
      premium: 15000,
      note: "Includes forest permits, guide, tents, meals, transport from Dehradun"
    },
    nearby: ["Har Ki Dun", "Kedarkantha", "Bali Pass"]
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
      { camp: "Laxmi Van to Chakratirth", km: "11 km", desc: "Scale moraines and high meadows under Chaukhamba peak." },
      { camp: "Chakratirth to Lake & return", km: "16 km", desc: "Reach the holy Satopanth Tal. Return to Laxmi Van." },
      { camp: "Mana descent", km: "9 km", desc: "Return to Mana village." }
    ],
    gear: ["Warm down jacket", "Trekking boots", "Water purification", "High-altitude sunscreen"],
    tips: {
      Swargarohini: "You can see the steps of Swargarohini (path to heaven) from the lake.",
      Permits: "Requires army/forest permissions from Joshimath."
    },
    price: {
      budget: 9000,
      standard: 15000,
      premium: 25000,
      note: "Includes permits from Joshimath, guide, cook, high-altitude camps"
    },
    nearby: ["Gaumukh Tapovan", "Valley of Flowers", "Roopkund"]
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
      { camp: "Khati to Dwali", km: "11 km", desc: "Trek alongside the Pindar river through dense forests." },
      { camp: "Dwali to Phurkia", km: "5 km", desc: "Climb through rhododendron forests past seasonal waterfalls." },
      { camp: "Phurkia to Zero Point", km: "14 km", desc: "Trek to Pindari Glacier Zero Point (3660m) and return to Dwali." },
      { camp: "Return", km: "16 km", desc: "Two days descent back to Kharkia." }
    ],
    gear: ["Comfortable boots", "Windcheater", "Warm layers", "Poles"],
    tips: {
      Comfort: "Forest rest houses are available at most camps; camping is optional.",
      Khati: "Interact with locals in Khati for Kumaoni culture."
    },
    price: {
      budget: 6000,
      standard: 11000,
      premium: 18000,
      note: "Includes guide, permits, home stay/tents, meals, Kathgodam transport"
    },
    nearby: ["Roopkund", "Valley of Flowers", "Brahmatal"]
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
      { camp: "Lidderwat to Dudhsar Lake", km: "8 km", desc: "Climb to the high meadow campsite near Dudhsar lake." },
      { camp: "Dudhsar to Kolahoi Snout & Back", km: "12 km", desc: "Scale the moraine ridge to the glacier snout. Return to Lidderwat." },
      { camp: "Return to Aru", km: "10 km", desc: "Descend back to Aru valley." }
    ],
    gear: ["Trekking poles", "Waterproof shoes", "Warm layers", "Rain poncho"],
    tips: {
      "Glacier warnings": "Do not step onto the glacier without guide supervision due to crevasses and rockfalls.",
      Security: "Keep ID cards handy for security checkpoints."
    },
    price: {
      budget: 8000,
      standard: 14000,
      premium: 22000,
      note: "Includes Srinagar transport, camp, guide, permits, meals"
    },
    nearby: ["Kashmir Great Lakes", "Tarsar Marsar", "Chadar Trek"]
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
    tips: {
      Guide: "Hiring a local Khasi guide is highly recommended for history and navigation.",
      "Sacred Grove": "Visit the Mawphlang Sacred Grove at the trailhead."
    },
    price: {
      budget: 500,
      standard: 1200,
      premium: 2500,
      note: "Local guide fee, packed lunch, transport from Shillong"
    },
    nearby: ["Dzukou Valley", "Sandakphu", "Goecha La"]
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
      { camp: "Kalipur Beach to Summit", km: "4 km", desc: "Trek along the coastline then climb steeply through roots and thick canopy of tropical forest." },
      { camp: "Summit to Beach", km: "4 km", desc: "Enjoy views of the archipelago, then descend back to Kalipur." }
    ],
    gear: ["Sturdy shoes", "Insect repellent", "Ample water", "Rainwear"],
    tips: {
      Humidity: "Extremely humid; carry dehydration tablets/electrolytes.",
      Permits: "Forest entry permit must be obtained at the trailhead."
    },
    price: {
      budget: 1000,
      standard: 2000,
      premium: 3500,
      note: "Forest entry fee, guide, water, transport from Diglipur"
    },
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
      { camp: "Mani Polyang to Talle Camp", km: "12 km", desc: "Enter the dense mossy rainforest, surrounded by rare ferns." },
      { camp: "Talle Camp to Ziro", km: "16 km", desc: "Retrace steps back to Ziro valley." }
    ],
    gear: ["Waterproof boots", "Warm layers", "Insect spray", "Leech socks"],
    tips: {
      AP_Permit: "Inner Line Permit (ILP) or Protected Area Permit (PAP) mandatory for entering Arunachal.",
      Guide: "Mandatory due to dense forest."
    },
    price: {
      budget: 5000,
      standard: 9000,
      premium: 15000,
      note: "Permits, forest camping fees, guide, meals, Ziro base transport"
    },
    nearby: ["namdapha", "dzukou-valley", "goecha-la"]
  }
];

const newNepalTreks = [
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
      { camp: "Deurali to Shin Gompa", km: "10 km", desc: "Trek to historic cheese factory and monastery." },
      { camp: "Shin Gompa to Gosaikunda", km: "14 km", desc: "Climb above treeline to Laurebina pass, reach the sacred lakes." },
      { camp: "Return", km: "23 km", desc: "Two days descent back to Dhunche." }
    ],
    gear: ["Down jacket", "-10C sleeping bag", "Trekking poles", "Altitude medication"],
    tips: {
      Pilgrimage: "Gets crowded during Janai Purnima festival in August.",
      Cheese: "Buy fresh yak cheese at Shin Gompa."
    },
    price: {
      budget: 18000,
      standard: 28000,
      premium: 42000,
      note: "Kathmandu transport, teahouse, guide, Langtang park permit"
    },
    nearby: ["langtang-valley", "poon-hill", "annapurna-circuit"]
  }
];

// Append to TREKS object
TREKS.India.push(...newIndiaTreks);
TREKS.Nepal.push(...newNepalTreks);

// Write updated treks back to data/treks.js
const treksFileContent = `export const TREKS = ${JSON.stringify(TREKS, null, 2)};\n`;
fs.writeFileSync('./data/treks.js', treksFileContent);
console.log(`Successfully updated treks.js. India count: ${TREKS.India.length}, Nepal count: ${TREKS.Nepal.length}, Bhutan count: ${TREKS.Bhutan.length}`);
