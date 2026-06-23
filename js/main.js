import { TREKS } from '../data/treks.js';
import { CONFIG } from './config.js';
const IMAGE_CREDITS = {
  "hampta-pass": {
    "url": "./images/hampta-pass.jpg",
    "credit": "Official Partner Photo"
  },
  "chadar-trek": {
    "url": "https://images.unsplash.com/photo-1434394354979-a235cd36269d?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Snow Pass Crossing"
  },
  "sar-pass": {
    "url": "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Everest Region Peak"
  },
  "pin-parvati": {
    "url": "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Glacier Traverse"
  },
  "rupin-pass": {
    "url": "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Glacial Valley"
  },
  "buran-ghati": {
    "url": "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Glacial Valley"
  },
  "valley-of-flowers": {
    "url": "https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Summit Ascent"
  },
  "roopkund": {
    "url": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Verified Landscape"
  },
  "kedarkantha": {
    "url": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Alpine Peak"
  },
  "har-ki-dun": {
    "url": "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Mountain Stream"
  },
  "bali-pass": {
    "url": "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Everest Region Peak"
  },
  "brahmatal": {
    "url": "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Glacial Lake"
  },
  "gaumukh-tapovan": {
    "url": "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Mountain Stream"
  },
  "pangarchulla": {
    "url": "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Glacial Valley"
  },
  "kashmir-great-lakes": {
    "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Sunset Lake"
  },
  "sandakphu": {
    "url": "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Foggy Mountain Forest"
  },
  "harihar-fort": {
    "url": "https://images.unsplash.com/photo-1542856391-010fb87dcfed?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - South India Cliff"
  },
  "harishchandragad": {
    "url": "https://images.unsplash.com/photo-1605647540924-852290f6b0d5?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Monsoon Fort Trek"
  },
  "kalsubai-peak": {
    "url": "https://images.unsplash.com/photo-1605647540924-852290f6b0d5?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Monsoon Fort Trek"
  },
  "rajmachi": {
    "url": "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Sahyadri Ridge"
  },
  "kalavantin-durg": {
    "url": "https://images.unsplash.com/photo-1605647540924-852290f6b0d5?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Monsoon Fort Trek"
  },
  "visapur-fort": {
    "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Verified Landscape"
  },
  "torna-fort": {
    "url": "https://images.unsplash.com/photo-1626847037657-fd3622613ce3?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Misty Peak"
  },
  "devkund-waterfall": {
    "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Sunset Lake"
  },
  "andharban": {
    "url": "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Sahyadri Ridge"
  },
  "kumara-parvatha": {
    "url": "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Grassy Dome"
  },
  "skandagiri": {
    "url": "https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Kudremukh Grasslands"
  },
  "savandurga": {
    "url": "https://images.unsplash.com/photo-1626847037657-fd3622613ce3?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Misty Peak"
  },
  "netravati-peak": {
    "url": "https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Kudremukh Grasslands"
  },
  "meesapulimala": {
    "url": "https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Ridge Trail Hiker"
  },
  "kumta-gokarna": {
    "url": "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Misty Valley Ghats"
  },
  "kodachadri": {
    "url": "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Grassy Dome"
  },
  "triund": {
    "url": "https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Summit Ascent"
  },
  "prashar-lake": {
    "url": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Lakeside Meadow"
  },
  "kareri-lake": {
    "url": "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Glacial Lake"
  },
  "borasu-pass": {
    "url": "https://images.unsplash.com/photo-1434394354979-a235cd36269d?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Snow Pass Crossing"
  },
  "indrahar-pass": {
    "url": "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Starry Snow Mountain"
  },
  "audens-col": {
    "url": "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Starry Snow Mountain"
  },
  "dodital": {
    "url": "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Starry Lake Peak"
  },
  "satopanth-tal": {
    "url": "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Verified Landscape"
  },
  "pindari-glacier": {
    "url": "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Starry Snow Mountain"
  },
  "kolahoi-glacier": {
    "url": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Verified Landscape"
  },
  "david-scott": {
    "url": "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Mountain Stream"
  },
  "saddle-peak": {
    "url": "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Foggy Mountain Forest"
  },
  "talle-valley": {
    "url": "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Glacial Lake"
  },
  "gosaikunda": {
    "url": "https://images.unsplash.com/photo-1544198365-f5d60b6d8190?w=1200&h=600&fit=crop",
    "credit": "Unsplash"
  },
  "dzukou-valley": {
    "url": "https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Summit Ascent"
  },
  "goecha-la": {
    "url": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Verified Landscape"
  },
  "markha-valley": {
    "url": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Snow Peaks"
  },
  "stok-kangri": {
    "url": "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Everest Region Peak"
  },
  "kedartal": {
    "url": "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Glacial Lake"
  },
  "chandrashila": {
    "url": "https://images.unsplash.com/photo-1434394354979-a235cd36269d?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Snow Pass Crossing"
  },
  "tarsar-marsar": {
    "url": "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Mountain Stream"
  },
  "bhrigu-lake": {
    "url": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Lakeside Meadow"
  },
  "phulara-ridge": {
    "url": "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Annapurna Range"
  },
  "kedarnath-trek": {
    "url": "https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Mountain Hiker"
  },
  "madhyamaheshwar": {
    "url": "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Mountain Stream"
  },
  "munsiyari-khaliya": {
    "url": "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Snow Ridge"
  },
  "agasthyarkoodam": {
    "url": "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Tropical Shola Forest"
  },
  "chembra-peak": {
    "url": "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Western Ghats Ridge"
  },
  "kudremukh": {
    "url": "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Tropical Shola Forest"
  },
  "tadiandamol": {
    "url": "https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Kudremukh Grasslands"
  },
  "mullayanagiri": {
    "url": "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Grassy Dome"
  },
  "pin-bhaba": {
    "url": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Snow Peaks"
  },
  "yulla-kanda": {
    "url": "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Starry Snow Mountain"
  },
  "namdapha": {
    "url": "https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Summit Ascent"
  },
  "ahupe-ghat": {
    "url": "https://images.unsplash.com/photo-1605647540924-852290f6b0d5?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Monsoon Fort Trek"
  },
  "alang-madan-kulang": {
    "url": "https://images.unsplash.com/photo-1626847037657-fd3622613ce3?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Misty Peak"
  },
  "anjaneri-fort": {
    "url": "https://images.unsplash.com/photo-1605647540924-852290f6b0d5?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Monsoon Fort Trek"
  },
  "arnala-fort": {
    "url": "https://images.unsplash.com/photo-1542856391-010fb87dcfed?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - South India Cliff"
  },
  "arthur-seat": {
    "url": "https://images.unsplash.com/photo-1434394354979-a235cd36269d?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Verified Landscape"
  },
  "bagini-glacier": {
    "url": "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Everest Region Peak"
  },
  "bagji-bugyal": {
    "url": "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - High Altitude Meadow"
  },
  "ballalarayana-durga": {
    "url": "https://images.unsplash.com/photo-1542856391-010fb87dcfed?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - South India Cliff"
  },
  "banasura-hill": {
    "url": "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Western Ghats Ridge"
  },
  "bhadraj-hill": {
    "url": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Alpine Peak"
  },
  "bhimashankar": {
    "url": "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Sahyadri Ridge"
  },
  "brahmagiri-range": {
    "url": "https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Ridge Trail Hiker"
  },
  "chandratal-baralachala": {
    "url": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Lakeside Meadow"
  },
  "charang-ghati": {
    "url": "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Glacial Valley"
  },
  "churdhar-peak": {
    "url": "https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Mountain Hiker"
  },
  "darcha-padum": {
    "url": "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Starry Snow Mountain"
  },
  "deo-tibba": {
    "url": "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Snow Ridge"
  },
  "dhodap-fort": {
    "url": "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Verified Landscape"
  },
  "dudhsagar-waterfalls": {
    "url": "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Misty Valley Ghats"
  },
  "ettina-bhuja": {
    "url": "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Tropical Hilltop"
  },
  "gorakhgad": {
    "url": "https://images.unsplash.com/photo-1605647540924-852290f6b0d5?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Monsoon Fort Trek"
  },
  "irshalgad": {
    "url": "https://images.unsplash.com/photo-1542856391-010fb87dcfed?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - South India Cliff"
  },
  "karnala-fort": {
    "url": "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Verified Landscape"
  },
  "kinner-kailash": {
    "url": "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Verified Landscape"
  },
  "kolukkumalai": {
    "url": "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Grassy Dome"
  },
  "kothaligad": {
    "url": "https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Verified Landscape"
  },
  "kugti-pass": {
    "url": "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Glacial Valley"
  },
  "kurinjal-peak": {
    "url": "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Grassy Dome"
  },
  "lingana-raigad": {
    "url": "https://images.unsplash.com/photo-1542856391-010fb87dcfed?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - South India Cliff"
  },
  "lonavala-bhimashankar": {
    "url": "https://images.unsplash.com/photo-1605647540924-852290f6b0d5?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Monsoon Fort Trek"
  },
  "madhugiri-fort": {
    "url": "https://images.unsplash.com/photo-1626847037657-fd3622613ce3?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Misty Peak"
  },
  "mahuli-trek": {
    "url": "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Sahyadri Ridge"
  },
  "makalidurga": {
    "url": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Verified Landscape"
  },
  "mayali-pass": {
    "url": "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Starry Snow Mountain"
  },
  "duke-nose": {
    "url": "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Sahyadri Ridge"
  },
  "nanda-devi-bc": {
    "url": "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Snow Ridge"
  },
  "nanda-devi-np": {
    "url": "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Mountain Stream"
  },
  "nandi-hills": {
    "url": "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Tropical Hilltop"
  },
  "nandi-one": {
    "url": "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Misty Valley Ghats"
  },
  "narasimha-parvatha": {
    "url": "https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Kudremukh Grasslands"
  },
  "nishani-motte": {
    "url": "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Western Ghats Ridge"
  },
  "panch-kedar": {
    "url": "https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Summit Ascent"
  },
  "panwali-kantha": {
    "url": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Alpine Peak"
  },
  "parvathamalai": {
    "url": "https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Kudremukh Grasslands"
  },
  "patalsu-peak": {
    "url": "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Glacial Lake"
  },
  "peb-fort": {
    "url": "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Sahyadri Ridge"
  },
  "pythalmala": {
    "url": "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Tropical Hilltop"
  },
  "rajgad": {
    "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Verified Landscape"
  },
  "ramdevarabetta": {
    "url": "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Tropical Hilltop"
  },
  "ranganathaswamy-betta": {
    "url": "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Tropical Hilltop"
  },
  "ranipuram": {
    "url": "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Misty Valley Ghats"
  },
  "ratangad": {
    "url": "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Verified Landscape"
  },
  "rohida-fort": {
    "url": "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Sahyadri Ridge"
  },
  "rumtse-tso-moriri": {
    "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Sunset Lake"
  },
  "sagargad": {
    "url": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Verified Landscape"
  },
  "sainj-valley": {
    "url": "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Foggy Mountain Forest"
  },
  "salher-salota": {
    "url": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Verified Landscape"
  },
  "sarasgad": {
    "url": "https://images.unsplash.com/photo-1434394354979-a235cd36269d?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Verified Landscape"
  },
  "sathuragiri-hill": {
    "url": "https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Ridge Trail Hiker"
  },
  "serolsar-lake": {
    "url": "https://images.unsplash.com/photo-1559494007-9f5847c49d94?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Kashmiri Alpine Lake"
  },
  "shali-tibba": {
    "url": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Alpine Peak"
  },
  "sinhagad-fort": {
    "url": "https://images.unsplash.com/photo-1542856391-010fb87dcfed?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - South India Cliff"
  },
  "srikhand-mahadev": {
    "url": "https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Mountain Hiker"
  },
  "sudhagad-fort": {
    "url": "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Verified Landscape"
  },
  "sunderdhunga": {
    "url": "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Mountain Stream"
  },
  "takmak-fort": {
    "url": "https://images.unsplash.com/photo-1542856391-010fb87dcfed?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - South India Cliff"
  },
  "tandulwadi": {
    "url": "https://images.unsplash.com/photo-1542856391-010fb87dcfed?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - South India Cliff"
  },
  "buxa-fort": {
    "url": "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Verified Landscape"
  },
  "ghangad-fort": {
    "url": "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Verified Landscape"
  },
  "pindari-kafni": {
    "url": "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Annapurna Range"
  },
  "umberkhind": {
    "url": "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Green Fort Wall"
  },
  "aane-gudda-ridge": {
    "url": "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Tropical Shola Forest"
  },
  "aane-gudda": {
    "url": "https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Ridge Trail Hiker"
  },
  "ajan-top": {
    "url": "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Mountain Stream"
  },
  "ambaji-durga": {
    "url": "https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Verified Landscape"
  },
  "amedikallu-peak": {
    "url": "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Western Ghats Ridge"
  },
  "arshan-valley": {
    "url": "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Foggy Mountain Forest"
  },
  "athri-hill": {
    "url": "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Tropical Shola Forest"
  },
  "ayodhya-hills": {
    "url": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Alpine Peak"
  },
  "bajiling-top": {
    "url": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Alpine Peak"
  },
  "balang-ri": {
    "url": "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Glacier Traverse"
  },
  "balekallu-peak": {
    "url": "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Tropical Hilltop"
  },
  "balwantgad": {
    "url": "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Sahyadri Ridge"
  },
  "bansi-narayan": {
    "url": "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Mountain Stream"
  },
  "bashal-peak": {
    "url": "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Snow Ridge"
  },
  "bekal-beach": {
    "url": "https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Ridge Trail Hiker"
  },
  "bhal-padri": {
    "url": "https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Summit Ascent"
  },
  "bharadsar-lake": {
    "url": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Verified Landscape"
  },
  "bheemana-kindi": {
    "url": "https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Ridge Trail Hiker"
  },
  "bhoot-bangla": {
    "url": "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Glacial Valley"
  },
  "bidirukatte": {
    "url": "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Tropical Shola Forest"
  },
  "biharinath-hill": {
    "url": "https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Summit Ascent"
  },
  "bisudi-tal": {
    "url": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Alpine Lake"
  },
  "budha-kedar": {
    "url": "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Mountain Stream"
  },
  "chambal-valley": {
    "url": "https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Summit Ascent"
  },
  "chandan-vandan": {
    "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Verified Landscape"
  },
  "channagiri": {
    "url": "https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Kudremukh Grasslands"
  },
  "channarayana-durga": {
    "url": "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Green Fort Wall"
  },
  "chatakpur-tiger-hill": {
    "url": "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Snow Ridge"
  },
  "cheengeri-hills": {
    "url": "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Tropical Hilltop"
  },
  "chenap-bugyal": {
    "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Alpine Meadow"
  },
  "chinaga-betta": {
    "url": "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Tropical Shola Forest"
  },
  "chincholi-forest": {
    "url": "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Western Ghats Ridge"
  },
  "chumnai-sar": {
    "url": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Alpine Peak"
  },
  "dabbe-falls": {
    "url": "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Tropical Hilltop"
  },
  "danizab-meadow": {
    "url": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Green Ridges"
  },
  "darati-pass": {
    "url": "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Verified Landscape"
  },
  "dhankar-lake": {
    "url": "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Starry Lake Peak"
  },
  "dhanna-kunnu": {
    "url": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Snow Peaks"
  },
  "dharansi-pass": {
    "url": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Snow Peaks"
  },
  "doddabetta-abbey": {
    "url": "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Tropical Shola Forest"
  },
  "doodhpathri": {
    "url": "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Mountain Stream"
  },
  "durg-dhakoba": {
    "url": "https://images.unsplash.com/photo-1542856391-010fb87dcfed?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - South India Cliff"
  },
  "gangadikal": {
    "url": "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Sahyadri Ridge"
  },
  "george-everest": {
    "url": "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Mountain Stream"
  },
  "gwaru-pass": {
    "url": "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Everest Region Peak"
  },
  "halu-chilume": {
    "url": "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Misty Valley Ghats"
  },
  "handi-gundi": {
    "url": "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Western Ghats Ridge"
  },
  "hanol": {
    "url": "https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Summit Ascent"
  },
  "harihara-betta": {
    "url": "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Tropical Hilltop"
  },
  "hatu-peak": {
    "url": "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Mountain Stream"
  },
  "horagina-betta": {
    "url": "https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Ridge Trail Hiker"
  },
  "huliyurdurga": {
    "url": "https://images.unsplash.com/photo-1542856391-010fb87dcfed?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - South India Cliff"
  },
  "jalsu-pass": {
    "url": "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Glacier Traverse"
  },
  "jiwa-nala": {
    "url": "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Glacial Valley"
  },
  "jogin-abc": {
    "url": "https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Summit Ascent"
  },
  "kaiwara-betta": {
    "url": "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Misty Valley Ghats"
  },
  "kali-cho-pass": {
    "url": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Snow Peaks"
  },
  "kalpeshwar-rudranath": {
    "url": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Alpine Peak"
  },
  "kamalgad": {
    "url": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Verified Landscape"
  },
  "kamandurg": {
    "url": "https://images.unsplash.com/photo-1605647540924-852290f6b0d5?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Monsoon Fort Trek"
  },
  "kanari-khal": {
    "url": "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Snow Ridge"
  },
  "kasar-devi-binsar": {
    "url": "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Foggy Mountain Forest"
  },
  "kavnai-fort": {
    "url": "https://images.unsplash.com/photo-1605647540924-852290f6b0d5?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Monsoon Fort Trek"
  },
  "kheerganga-buni-buni": {
    "url": "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Annapurna Range"
  },
  "kuari-pass": {
    "url": "https://images.unsplash.com/photo-1434394354979-a235cd36269d?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Snow Pass Crossing"
  },
  "dayara-bugyal": {
    "url": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Green Ridges"
  },
  "nag-tibba": {
    "url": "https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Mountain Hiker"
  },
  "panchachuli-base-camp": {
    "url": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Alpine Peak"
  },
  "chokramudi-peak": {
    "url": "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Misty Valley Ghats"
  },
  "beas-kund": {
    "url": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Alpine Lake"
  },
  "laka-glacier": {
    "url": "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Starry Snow Mountain"
  },
  "yunam-peak": {
    "url": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Alpine Peak"
  },
  "baba-budangiri": {
    "url": "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Western Ghats Ridge"
  },
  "dhoni-hills": {
    "url": "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1200&h=600&fit=crop&q=80",
    "credit": "Unsplash - Tropical Hilltop"
  }
};

// Force unregister outdated service worker and clear old caches
const CURRENT_VERSION = 'v39';
if (localStorage.getItem('tp_version') !== CURRENT_VERSION) {
  if ('serviceWorker' in navigator && typeof navigator.serviceWorker.getRegistrations === 'function' && typeof caches !== 'undefined') {
    navigator.serviceWorker.getRegistrations().then(regs => {
      const unregisterPromises = regs.map(reg => reg.unregister());
      Promise.all(unregisterPromises).then(() => {
        caches.keys().then(keys => {
          const deletePromises = keys.map(key => caches.delete(key));
          Promise.all(deletePromises).then(() => {
            localStorage.setItem('tp_version', CURRENT_VERSION);
            window.location.reload();
          });
        });
      });
    }).catch(() => {
      localStorage.setItem('tp_version', CURRENT_VERSION);
    });
  } else {
    localStorage.setItem('tp_version', CURRENT_VERSION);
  }
}



// Initialize clients safely (supports graceful fallback to local/mock mode if keys are not filled)
let supabaseClient = null;
if (CONFIG.SUPABASE_URL && CONFIG.SUPABASE_ANON_KEY) {
  try {
    supabaseClient = window.supabase.createClient(CONFIG.SUPABASE_URL, CONFIG.SUPABASE_ANON_KEY);
  } catch (e) {
    console.error("Failed to initialize Supabase client:", e);
  }
} else {
  console.log("Supabase URL and/or Anon Key not provided. Running in local mode.");
}

if (CONFIG.EMAILJS_PUBLIC_KEY) {
  try {
    window.emailjs.init({
      publicKey: CONFIG.EMAILJS_PUBLIC_KEY,
    });
  } catch (e) {
    console.error("Failed to initialize EmailJS:", e);
  }
} else {
  console.log("EmailJS Public Key not provided. Email checklist functionality will run in fallback/demo mode.");
}

// Global Auth State
let currentUser = null;
let isSignUpMode = false;

// Attempt to restore mock session if Supabase is not configured
if (!supabaseClient) {
  try {
    currentUser = JSON.parse(localStorage.getItem("tp_mock_session") || "null");
  } catch (e) {
    console.error("Failed to parse mock session:", e);
  }
}

      const MONTHS = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];

      

      // flatten all treks, sort easy→moderate→hard within each country
      const DIFF_ORDER = { easy: 0, moderate: 1, hard: 2 };
      const ALL_TREKS = [];
      Object.entries(TREKS).forEach(([c, ts]) => {
        ts.sort((a, b) => DIFF_ORDER[a.difficulty] - DIFF_ORDER[b.difficulty]);
        ts.forEach((t) => {
          t.country = c;
          ALL_TREKS.push(t);
        });
      });

      // Set hero trek count dynamically on page load to prevent layout shifts/flicker
      const heroCountEl = document.getElementById("heroTrekCount");
      if (heroCountEl) heroCountEl.textContent = ALL_TREKS.length;

      let currentCountry = "India";
      let currentTrek = null;
      let activeView = "country"; // country | detail | saved | rec | compare
      let compareList = [];
      let bookmarks = JSON.parse(localStorage.getItem("tp_bookmarks") || "[]");
      let trekLog = JSON.parse(localStorage.getItem("tp_log") || "{}");

      function getFooterHTML() {
        return `
      <footer class="app-footer">
        <div class="footer-grid">
          <div class="footer-col">
            <div class="footer-logo">Trek<span>pedia</span></div>
            <div class="footer-tagline">The Complete Trek Encyclopedia. For the Modern Explorer.</div>
          </div>
          <div class="footer-col">
            <h5>Expeditions</h5>
            <a href="#" onclick="showCountry('India'); return false;">India</a>
          </div>
          <div class="footer-col">
            <h5>Information</h5>
            <a href="#" onclick="switchNavTab('journal'); return false;">Journal</a>
            <a href="#" onclick="switchNavTab('archives'); return false;">Archives</a>
            <a href="#" onclick="switchNavTab('maps'); return false;">Maps</a>
          </div>
          <div class="footer-col">
            <h5>Manifesto</h5>
            <a href="#" onclick="alert('Every trail. Every summit. Every story.'); return false;">Our Mission</a>
            <a href="#" onclick="alert('Safety protocols are detailed inside each trek guide.'); return false;">Safety Protocols</a>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2026 Trekpedia. All rights reserved.</p>
        </div>
      </footer>`;
      }

      const TREK_PHOTOS = {
        "hampta-pass": "photo-1609947017136-9daf32a5a0c3",
        "chadar-trek": "photo-1578662996442-48f60103fc96",
        "sar-pass": "photo-1600185365483-26d7a4cc7519",
        "pin-parvati": "photo-1551632811-561732d1e306",
        "rupin-pass": "photo-1504280390367-361c6d9f38f4",
        "buran-ghati": "photo-1506905925346-21bda4d32df4",
        "bhrigu-lake": "photo-1464822759023-fed622ff2c3b",
        "yulla-kanda": "photo-1469474968028-56623f02e42e",
        "valley-of-flowers": "photo-1444464666168-49d633b86797",
        roopkund: "photo-1519681393784-d120267933ba",
        kedarkantha: "photo-1418985991508-e47386d96a71",
        "har-ki-dun": "photo-1470071459604-3b5ec3a7fe05",
        "bali-pass": "photo-1501854140801-50d01698950b",
        chandrashila: "photo-1548018560-c7196f96ee19",
        kedartal: "photo-1455156218388-5e61b526818b",
        brahmatal: "photo-1491555103944-7c647fd857e6",
        "phulara-ridge": "photo-1508739773434-c26b3d09e071",
        "gaumukh-tapovan": "photo-1532274402911-5a369e4c4bb5",
        pangarchulla: "photo-1620466420899-5e9e3a3a2a0b",
        "markha-valley": "photo-1587474260584-136574528ed5",
        "stok-kangri": "photo-1611348586804-61bf6c080437",
        "kashmir-great-lakes": "photo-1559494007-9f5847c49d94",
        "tarsar-marsar": "photo-1434394354979-a235cd36269d",
        "goecha-la": "photo-1606168094336-48f8b0b3a5b4",
        sandakphu: "photo-1494783367193-149034c05e8f",
        "dzukou-valley": "photo-1448375240586-882707db888b",
        agasthyarkoodam: "photo-1541480601022-2308c0f02487",
        "chembra-peak": "photo-1500534314209-a25ddb2bd429",
        kudremukh: "photo-1421789665209-c9b2a435e3dc",
        tadiandamol: "photo-1542856391-010fb87dcfed",
        mullayanagiri: "photo-1447752875215-b2761acb3c5d",
        "pin-bhaba": "photo-1526779259212-939e64788e3c",
        namdapha: "photo-1441974231531-c6227db76b6e",
        "everest-base-camp": "photo-1526772662000-3f88f10405ff",
        "annapurna-circuit": "photo-1486870591958-9b9d0d1dda99",
        "langtang-valley": "photo-1516426122078-c23e76319801",
        "poon-hill": "photo-1544198365-f5d60b6d8190",
        "gokyo-lakes": "photo-1601999009738-5b44aff7cb23",
        "mardi-himal": "photo-1585409677983-0f6c41ca9c3b",
        "snowman-trek": "photo-1520208422220-d12a3be0d814",
        "druk-path": "photo-1570168007204-dfb528c6958f",
        jomolhari: "photo-1519655671787-c913f1ed6e6e",
        "kedarnath-trek": "photo-1614082242765-7c58aaeb135b",
        madhyamaheshwar: "photo-1566847438217-76e82d383f84",
        "munsiyari-khaliya": "z4Vn83-5yL4",
        "harihar-fort": "photo-1606707764516-72886f4a2b97",
        "harishchandragad": "photo-1590766948512-494e0e56f4d2",
        "kalsubai-peak": "photo-1626847037657-fd3622613ce3",
        "rajmachi": "photo-1533105079780-92b9be482077",
        "kalavantin-durg": "photo-1507525428034-b723cf961d3e",
        "visapur-fort": "photo-1563824443-1b32990a4255",
        "torna-fort": "photo-1589182373726-e4f658ab50f0",
        "devkund-waterfall": "photo-1470071459604-3b5ec3a7fe05",
        "andharban": "photo-1441974231531-c6227db76b6e",
        "kumara-parvatha": "photo-1508739773434-c26b3d09e071",
        "skandagiri": "photo-1498654896293-37aacf113fd9",
        "savandurga": "photo-1502680390469-be75c86b636f",
        "netravati-peak": "photo-1501854140801-50d01698950b",
        "meesapulimala": "photo-1551632811-561732d1e306",
        "kumta-gokarna": "photo-1507525428034-b723cf961d3e",
        "kodachadri": "photo-1470071459604-3b5ec3a7fe05",
        "triund": "photo-1596761375311-37ff3908f51a",
        "prashar-lake": "photo-1548018560-c7196f96ee19",
        "kareri-lake": "photo-1464822759023-fed622ff2c3b",
        "borasu-pass": "photo-1506905925346-21bda4d32df4",
        "indrahar-pass": "photo-1611348586804-61bf6c080437",
        "audens-col": "photo-1519681393784-d120267933ba",
        "dodital": "photo-1455156218388-5e61b526818b",
        "satopanth-tal": "photo-1464822759023-fed622ff2c3b",
        "pindari-glacier": "photo-1506905925346-21bda4d32df4",
        "kolahoi-glacier": "photo-1520208422220-d12a3be0d814",
        "david-scott": "photo-1441974231531-c6227db76b6e",
        "saddle-peak": "photo-1507525428034-b723cf961d3e",
        "talle-valley": "photo-1441974231531-c6227db76b6e",
        "gosaikunda": "photo-1544198365-f5d60b6d8190",
      };

      function getSeason() {
        const m = new Date().getMonth();
        if (m >= 2 && m <= 4) return "spring";
        if (m >= 5 && m <= 7) return "monsoon";
        if (m >= 8 && m <= 10) return "autumn";
        return "winter";
      }

      const SEASON_PHOTO_SWAP = {
        kedarkantha: {
          winter: "photo-1418985991508-e47386d96a71",
          autumn: "photo-1501854140801-50d01698950b",
        },
        brahmatal: {
          winter: "photo-1491555103944-7c647fd857e6",
          spring: "photo-1501854140801-50d01698950b",
        },
        "valley-of-flowers": {
          monsoon: "photo-1444464666168-49d633b86797",
          spring: "photo-1444464666168-49d633b86797",
        },
        sandakphu: {
          spring: "photo-1469474968028-56623f02e42e",
          winter: "photo-1418985991508-e47386d96a71",
        },
        "hampta-pass": {
          winter: "photo-1506905925346-21bda4d32df4",
          spring: "photo-1469474968028-56623f02e42e",
        },
      };

      function formatElev(t) {
        if (!t || !t.elevM) return t ? t.elevation : "";
        const ft = Math.round(t.elevM * 3.28084);
        return `${t.elevM.toLocaleString()} m (${ft.toLocaleString()} ft)`;
      }

      function getImg(id, w = 600, h = 300) {
        // Check if there is an official partner image in IMAGE_CREDITS
        const partnerImg = IMAGE_CREDITS && IMAGE_CREDITS[id];
        if (partnerImg && partnerImg.url) {
          return partnerImg.url;
        }

        const season = getSeason();
        const swap = SEASON_PHOTO_SWAP[id];
        const pid = (swap && swap[season]) || TREK_PHOTOS[id];
        if (!pid) return null;
        return (
          "https://images.unsplash.com/" +
          pid +
          "?w=" +
          w +
          "&h=" +
          h +
          "&fit=crop&auto=format&q=80"
        );
      }

      let compareMode = false;
      let aiContext = "";

      // filter state
      let filterDiff = "",
        filterDur = "",
        filterMonth = "",
        filterElev = "",
        filterRegion = "",
        sortBy = "difficulty",
        searchQ = "";

      function getCardSVG(trek) {
        const w = 400, h = 140;
        const farPts = `0,${h} 0,80 50,50 120,90 190,40 260,85 330,35 400,80 400,${h}`;
        const midPts = `0,${h} 0,100 80,75 160,110 240,65 310,95 400,70 400,${h}`;
        const nearPts = `0,${h} 0,115 120,95 220,120 320,85 400,105 400,${h}`;
        
        return `<svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;background:linear-gradient(180deg, var(--page-bg) 0%, var(--card-bg) 100%);">
          <defs>
            <linearGradient id="skyGrad-${trek.id}" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="var(--page-bg)" />
              <stop offset="100%" stop-color="var(--card-bg)" />
            </linearGradient>
            <linearGradient id="mountainGrad-${trek.id}" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="var(--gold)" stop-opacity="0.25" />
              <stop offset="100%" stop-color="var(--gold)" stop-opacity="0.05" />
            </linearGradient>
          </defs>
          <rect width="${w}" height="${h}" fill="url(#skyGrad-${trek.id})"/>
          <circle cx="300" cy="45" r="16" fill="var(--gold)" opacity="0.15" />
          <polygon points="${farPts}" fill="var(--mist)" opacity="0.2" />
          <polygon points="${midPts}" fill="url(#mountainGrad-${trek.id})" />
          <polygon points="${nearPts}" fill="var(--gold)" opacity="0.15" />
          <path d="M 0 139 L 400 139" stroke="var(--border)" stroke-width="1" />
        </svg>`;
      }

      function matchesFilters(t) {
        if (filterDiff && t.difficulty !== filterDiff) return false;
        if (filterDur) {
          const d = t.durationDays;
          if (filterDur === "1" && d !== 1) return false;
          if (filterDur === "short" && (d < 2 || d > 5)) return false;
          if (filterDur === "medium" && (d < 6 || d > 14)) return false;
          if (filterDur === "long" && d < 15) return false;
        }
        if (
          filterMonth !== "" &&
          !t.bestMonths.includes(parseInt(filterMonth)) &&
          !t.okMonths.includes(parseInt(filterMonth))
        )
          return false;
        if (filterElev) {
          const e = t.elevM;
          if (filterElev === "low" && e >= 3000) return false;
          if (filterElev === "mid" && (e < 3000 || e > 4500)) return false;
          if (filterElev === "high" && e <= 4500) return false;
        }
        const pf = document.getElementById("priceFilter");
        const pv = pf ? pf.value : "";
        if (pv && t.price) {
          const std = t.price.standard;
          if (pv === "low" && std >= 10000) return false;
          if (pv === "mid" && (std < 10000 || std > 30000)) return false;
          if (pv === "high" && std <= 30000) return false;
        }
        if (filterRegion && t.region !== filterRegion) return false;
        if (searchQ) {
          const q = searchQ.toLowerCase();
          return (
            t.name.toLowerCase().includes(q) ||
            t.region.toLowerCase().includes(q) ||
            t.country.toLowerCase().includes(q)
          );
        }
        return true;
      }

      function applyFilters() {
        filterDiff = document.getElementById("diffFilter")?.value || "";
        filterDur = document.getElementById("durFilter")?.value || "";
        filterMonth = document.getElementById("monthFilter")?.value || "";
        filterElev = document.getElementById("elevFilter")?.value || "";
        filterRegion = document.getElementById("regionFilter")?.value || "";
        sortBy = document.getElementById("sortFilter")?.value || "difficulty";
        currentPage = 1;
        renderCurrentView();
      }

      const TREKS_PER_PAGE = 20;
      let currentPage = 1;

      function sortTreks(treksList) {
        const DIFF_ORDER = { easy: 0, moderate: 1, hard: 2 };
        if (sortBy === "difficulty") {
          treksList.sort((a, b) => DIFF_ORDER[a.difficulty] - DIFF_ORDER[b.difficulty]);
        } else if (sortBy === "region") {
          treksList.sort((a, b) => a.region.localeCompare(b.region) || (DIFF_ORDER[a.difficulty] - DIFF_ORDER[b.difficulty]));
        } else if (sortBy === "duration") {
          treksList.sort((a, b) => a.durationDays - b.durationDays);
        } else if (sortBy === "elevation") {
          treksList.sort((a, b) => b.elevM - a.elevM);
        } else if (sortBy === "distance") {
          const getDistNum = (dStr) => {
            const num = parseFloat(dStr);
            return isNaN(num) ? 0 : num;
          };
          treksList.sort((a, b) => getDistNum(a.distance) - getDistNum(b.distance));
        }
        return treksList;
      }

      function changePage(p) {
        currentPage = p;
        renderCurrentView();
        document.getElementById("app")?.scrollIntoView({ behavior: "smooth" });
      }
      window.changePage = changePage;

      function doSearch(v) {
        searchQ = v;
        currentPage = 1;
        if (v) {
          showAllSearchResults();
          renderSuggestions(v);
        } else {
          renderCurrentView();
          hideSuggestions();
        }
      }

      function renderSuggestions(query) {
        const container = document.getElementById("searchSuggestions");
        if (!container) return;
        
        const q = query.toLowerCase();
        const matches = ALL_TREKS.filter(t => 
          t.name.toLowerCase().includes(q) ||
          t.region.toLowerCase().includes(q) ||
          t.country.toLowerCase().includes(q)
        ).slice(0, 5);
        
        if (matches.length === 0) {
          container.style.display = "none";
          return;
        }
        
        const DIFF_COLOR_MAP = {
          easy: "#10b981",
          moderate: "#f59e0b",
          hard: "#ef4444"
        };
        
        container.innerHTML = matches.map(t => `
          <div class="suggestion-item" onclick="event.stopPropagation(); selectSuggestion('${t.id}', '${t.country}')">
            <div class="suggestion-left">
              <span class="suggestion-name">${t.name}</span>
              <span class="suggestion-meta">${t.country} · ${t.region}</span>
            </div>
            <span class="suggestion-diff" style="background: ${DIFF_COLOR_MAP[t.difficulty] || "#de5e3a"}">${t.difficulty}</span>
          </div>
        `).join("");
        container.style.display = "flex";
      }
      
      function selectSuggestion(id, country) {
        const inp = document.getElementById("searchInput");
        if (inp) {
          inp.value = "";
          searchQ = "";
        }
        hideSuggestions();
        flyToTrek(id, country);
      }
      
      function hideSuggestions() {
        const container = document.getElementById("searchSuggestions");
        if (container) container.style.display = "none";
      }

      window.addEventListener("click", (e) => {
        const searchWrap = e.target.closest(".search-wrap");
        if (!searchWrap) {
          hideSuggestions();
        }
      });

      function showAllSearchResults() {
        setView("country");
        const allFiltered = ALL_TREKS.filter((t) => matchesFilters(t));
        const easy = allFiltered.filter((t) => t.difficulty === "easy").length;
        const mod = allFiltered.filter((t) => t.difficulty === "moderate").length;
        const hard = allFiltered.filter((t) => t.difficulty === "hard").length;
        
        const sorted = sortTreks([...allFiltered]);
        const totalPages = Math.ceil(sorted.length / TREKS_PER_PAGE) || 1;
        if (currentPage > totalPages) currentPage = totalPages;
        const visibleTreks = sorted.slice((currentPage - 1) * TREKS_PER_PAGE, currentPage * TREKS_PER_PAGE);

        let gridHTML = visibleTreks.length > 0 ? 
          visibleTreks.map((t, i) => trekCardHTML(t, i)).join("") : 
          `<div style="grid-column: 1/-1; text-align: center; padding: 4rem 2rem; color: var(--mist); font-size: 0.95rem; background: var(--card-bg); border-radius: var(--radius); border: 1px dashed var(--border);">
            <div style="font-size: 1.5rem; font-family: 'Libre Caslon Text', serif; font-weight: bold; margin-bottom: 0.8rem; color: var(--gold);">No Results</div>
            <strong>No search results</strong>
            <div style="font-size: 0.8rem; margin-top: 0.4rem; opacity: 0.8;">No treks match "${searchQ}". Try searching for a country, region, or general terms.</div>
           </div>`;

        let paginationHTML = "";
        if (totalPages > 1) {
          paginationHTML = `
            <div class="pagination-controls" style="grid-column: 1/-1; display: flex; justify-content: center; align-items: center; gap: 1rem; margin: 3rem 0 2rem; font-family: 'Inter', sans-serif;">
              <button class="explore-btn" ${currentPage === 1 ? "disabled" : ""} onclick="changePage(${currentPage - 1})" style="padding: 8px 16px; font-size: 0.85rem; border-radius: 4px; ${currentPage === 1 ? "opacity:0.4; pointer-events:none;" : ""}">Previous</button>
              <span style="color: var(--mist); font-size: 0.9rem;">Page <strong>${currentPage}</strong> of <strong>${totalPages}</strong></span>
              <button class="explore-btn" ${currentPage === totalPages ? "disabled" : ""} onclick="changePage(${currentPage + 1})" style="padding: 8px 16px; font-size: 0.85rem; border-radius: 4px; ${currentPage === totalPages ? "opacity:0.4; pointer-events:none;" : ""}">Next</button>
            </div>`;
        }

        const tv = document.getElementById("trek-view");
        tv.innerHTML = `
    <div class="country-header"><div class="country-title">Search Results</div><div class="country-count">${sorted.length} trek${sorted.length !== 1 ? "s" : ""}</div></div>
    <div class="diff-legend">
      <div class="diff-legend-item"><div class="diff-legend-dot" style="background:#10b981"></div>${easy} Easy</div>
      <div class="diff-legend-item"><div class="diff-legend-dot" style="background:#f59e0b"></div>${mod} Moderate</div>
      <div class="diff-legend-item"><div class="diff-legend-dot" style="background:#ef4444"></div>${hard} Hard</div>
    </div>
    <div class="trek-grid">
      ${gridHTML}
      ${paginationHTML}
    </div>
    ${getFooterHTML()}`;
      }

      function renderCurrentView() {
        if (searchQ) {
          showAllSearchResults();
          return;
        }
        showCountry(currentCountry);
      }

      let enterApp = function() {
        document.getElementById("hero").style.opacity = "0";
        document.getElementById("hero").style.transform = "scale(1.05)";
        setTimeout(() => {
          document.getElementById("hero").style.display = "none";
          const a = document.getElementById("app");
          a.style.display = "flex";
          requestAnimationFrame(() => {
            a.style.opacity = "1";
            a.style.transform = "translateY(0)";
          });
          buildNav();
          setView("country");
          showSkeletons("trek-view");
          currentPage = 1;
          setTimeout(() => showCountry("India"), 120);
        }, 700);
      }

      function goHome() {
        const h = document.getElementById("hero"),
          a = document.getElementById("app");
        a.style.opacity = "0";
        setTimeout(() => {
          a.style.display = "none";
          h.style.display = "flex";
          h.style.opacity = "0";
          h.style.transform = "scale(1)";
          requestAnimationFrame(() => {
            h.style.opacity = "1";
          });
        }, 400);
      }

      function buildNav() {
        document.getElementById("countryNav").innerHTML = Object.keys(TREKS)
          .map(
            (c) =>
              `<button class="nav-country ${c === currentCountry ? "active" : ""}" onclick="showCountry('${c}')">${c}</button>`,
          )
          .join("");
      }

      let setView = function(v) {
        activeView = v;
        document.getElementById("trek-view").style.display =
          v === "country" ? "block" : "none";
        document.getElementById("trek-detail").style.display =
          v === "detail" ? "block" : "none";
        document.getElementById("saved-view").style.display =
          v === "saved" ? "block" : "none";
        document.getElementById("rec-view").style.display =
          v === "rec" ? "block" : "none";
        document.getElementById("compare-view").style.display =
          v === "compare" ? "block" : "none";

        const isCountry = (v === "country");
        const subheader = document.getElementById("explorationSubheader");
        const filterBar = document.getElementById("filterBar");
        if (subheader) subheader.style.display = isCountry ? "block" : "none";
        if (filterBar) filterBar.style.display = isCountry ? "block" : "none";
      }

      function trekCardHTML(t, i) {
        const saved = bookmarks.includes(t.id);
        const done = trekLog[t.id];
        const img = getImg(t.id);
        return `<div class="trek-card" data-diff="${t.difficulty}" style="animation-delay:${i * 0.07}s" onclick="flyToTrek('${t.id}','${t.country}')">
    <div class="card-visual">
      ${img ? `<img src="${img}" style="width:100%;height:100%;object-fit:cover;display:block" loading="lazy" onerror="this.style.display='none';this.nextSibling.style.display='block'"><div style="display:none;height:100%">${getCardSVG(t)}</div>` : `${getCardSVG(t)}`}
      <div class="card-difficulty diff-${t.difficulty}">${t.difficulty}</div>
      <div class="card-elevation">${formatElev(t)}</div>
      <button class="bookmark-btn ${saved ? "saved" : ""}" onclick="event.stopPropagation();toggleBookmark('${t.id}',this)">${saved ? "Saved" : "Save"}</button>
    </div>
    <div class="card-body">
      <div style="display:flex;align-items:center;gap:.5rem;flex-wrap:wrap;margin-bottom:.2rem"><div class="card-name" style="margin-bottom:0">${t.name}</div>${getSnowBadge(t)}</div>
      <div class="card-region">${t.country} · ${t.region}</div>
      <div class="card-tags"><span class="tag">${t.duration}</span><span class="tag">${t.distance}</span><span class="tag">${t.difficulty}</span>${t.price ? `<span class="tag" style="color:var(--gold);border-color:rgba(201,147,42,.3)">from &#x20B9;${(t.price.budget / 1000).toFixed(0)}K</span>` : ""}</div>
    </div>
    ${done && done.date ? `<div class="done-badge">Completed${done.rating ? ` · ${done.rating} stars` : ""}</div>` : ""}
  </div>`;
      }

      const COUNTRY_BANNERS = {
        India:
          "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&h=300&fit=crop&auto=format&q=80",
      };
      const COUNTRY_TAGLINES = {
        India: "200 treks across the Himalayas, Western Ghats, Sahyadri & more",
      };

      function showCountry(country) {
        currentCountry = country;
        searchQ = "";
        document.getElementById("searchInput").value = "";
        
        // Dynamically populate region selector if it hasn't been populated or if it is empty
        const regionFilterEl = document.getElementById("regionFilter");
        if (regionFilterEl && regionFilterEl.options.length <= 1) {
          const allRegions = [...new Set(TREKS[country].map(t => t.region))].sort();
          regionFilterEl.innerHTML = '<option value="">All regions</option>' + 
            allRegions.map(r => `<option value="${r}">${r}</option>`).join("");
          if (filterRegion) {
            regionFilterEl.value = filterRegion;
          }
        }

        buildNav();
        setView("country");
        
        const allFiltered = TREKS[country].filter(matchesFilters);
        const easy = allFiltered.filter((t) => t.difficulty === "easy").length;
        const mod = allFiltered.filter((t) => t.difficulty === "moderate").length;
        const hard = allFiltered.filter((t) => t.difficulty === "hard").length;
        
        const sorted = sortTreks([...allFiltered]);
        
        // Pagination logic
        const totalPages = Math.ceil(sorted.length / TREKS_PER_PAGE) || 1;
        if (currentPage > totalPages) currentPage = totalPages;
        const visibleTreks = sorted.slice((currentPage - 1) * TREKS_PER_PAGE, currentPage * TREKS_PER_PAGE);
        
        const bannerImg = COUNTRY_BANNERS[country] || "";
        
        let gridHTML = visibleTreks.length > 0 ? 
          visibleTreks.map((t, i) => trekCardHTML(t, i)).join("") : 
          `<div style="grid-column: 1/-1; text-align: center; padding: 4rem 2rem; color: var(--mist); font-size: 0.95rem; background: var(--card-bg); border-radius: var(--radius); border: 1px dashed var(--border);">
            <div style="font-size: 1.5rem; font-family: 'Libre Caslon Text', serif; font-weight: bold; margin-bottom: 0.8rem; color: var(--gold);">No Treks</div>
            <strong>No treks found</strong>
            <div style="font-size: 0.8rem; margin-top: 0.4rem; opacity: 0.8;">Try relaxing your difficulty, duration, elevation, or month filters.</div>
           </div>`;

        let paginationHTML = "";
        if (totalPages > 1) {
          paginationHTML = `
            <div class="pagination-controls" style="grid-column: 1/-1; display: flex; justify-content: center; align-items: center; gap: 1rem; margin: 3rem 0 2rem; font-family: 'Inter', sans-serif;">
              <button class="explore-btn" ${currentPage === 1 ? "disabled" : ""} onclick="changePage(${currentPage - 1})" style="padding: 8px 16px; font-size: 0.85rem; border-radius: 4px; ${currentPage === 1 ? "opacity:0.4; pointer-events:none;" : ""}">Previous</button>
              <span style="color: var(--mist); font-size: 0.9rem;">Page <strong>${currentPage}</strong> of <strong>${totalPages}</strong></span>
              <button class="explore-btn" ${currentPage === totalPages ? "disabled" : ""} onclick="changePage(${currentPage + 1})" style="padding: 8px 16px; font-size: 0.85rem; border-radius: 4px; ${currentPage === totalPages ? "opacity:0.4; pointer-events:none;" : ""}">Next</button>
            </div>`;
        }

        document.getElementById("trek-view").innerHTML = `
    <div class="country-banner">
      ${bannerImg ? `<img class="country-banner-img" src="${bannerImg}" loading="lazy" alt="${country}">` : ""}
      <div class="country-banner-overlay"></div>
      <div class="country-banner-content">
        <div class="country-banner-title">${country}</div>
        <div class="country-banner-meta">${sorted.length} trek${sorted.length !== 1 ? "s" : ""} &nbsp;·&nbsp; ${COUNTRY_TAGLINES[country] || ""}</div>
      </div>
    </div>
    <div class="diff-legend">
      <div class="diff-legend-item"><div class="diff-legend-dot" style="background:#10b981"></div>${easy} Easy</div>
      <div class="diff-legend-item"><div class="diff-legend-dot" style="background:#f59e0b"></div>${mod} Moderate</div>
      <div class="diff-legend-item"><div class="diff-legend-dot" style="background:#ef4444"></div>${hard} Hard</div>
    </div>
    <div class="trek-grid">
      ${gridHTML}
      ${paginationHTML}
    </div>
    ${getFooterHTML()}`;
      }

      function toggleBookmark(id, btn) {
        const i = bookmarks.indexOf(id);
        if (i === -1) {
          bookmarks.push(id);
          btn.textContent = "";
          btn.classList.add("saved");
          syncBookmarkToDB(id, true);
        } else {
          bookmarks.splice(i, 1);
          btn.textContent = "";
          btn.classList.remove("saved");
          syncBookmarkToDB(id, false);
        }
        localStorage.setItem("tp_bookmarks", JSON.stringify(bookmarks));
        showToast(i === -1 ? "Saved to bookmarks" : "Removed from bookmarks");
      }

      function flyToTrek(id, country) {
        const t = ALL_TREKS.find((x) => x.id === id && x.country === country);
        if (!t) return;
        currentTrek = t;
        if (compareMode) {
          addToCompare(t);
          return;
        }
        startPlane(() => showDetail(t));
      }

      function startPlane(cb) {
        const ov = document.getElementById("plane-overlay"),
          pl = document.getElementById("plane-el"),
          fl = document.getElementById("destFlash");
        ov.style.display = "block";
        const sx = Math.random() * 300 + 100,
          sy = window.innerHeight + 50,
          ex = Math.random() * 400 + 200,
          ey = -80;
        pl.style.cssText = `position:absolute;font-size:2rem;left:${sx}px;top:${sy}px;transition:none;opacity:1;transform:rotate(-30deg)`;
        for (let i = 0; i < 6; i++) {
          const d = document.createElement("div");
          d.className = "trail-dot";
          ov.appendChild(d);
          const t = i / 5;
          d.style.cssText = `position:absolute;left:${sx + (ex - sx) * t}px;top:${sy + (ey - sy) * t}px`;
          setTimeout(
            () => {
              d.style.transition = "opacity .4s";
              d.style.opacity = ".7";
            },
            100 + i * 120,
          );
        }
        setTimeout(() => {
          pl.style.cssText = `position:absolute;font-size:2rem;left:${ex}px;top:${ey}px;transition:left 1.4s cubic-bezier(.4,0,.2,1),top 1.4s cubic-bezier(.4,0,.2,1),transform 1.4s;opacity:1;transform:rotate(-45deg) scale(1.3)`;
        }, 50);
        setTimeout(() => {
          fl.style.cssText =
            "position:absolute;inset:0;background:var(--cream);opacity:1;transition:opacity .3s";
        }, 1300);
        setTimeout(() => {
          ov.querySelectorAll(".trail-dot").forEach((d) => d.remove());
          fl.style.opacity = "0";
          pl.style.opacity = "0";
          setTimeout(() => (ov.style.display = "none"), 300);
          cb();
        }, 1700);
      }

      let showDetail = function(t) {
        aiContext = `Current trek: ${t.name} in ${t.country}. Region: ${t.region}. Elevation: ${t.elevation}. Duration: ${t.duration}. Distance: ${t.distance}. Difficulty: ${t.difficulty}.`;
        setView("detail");
        const saved = bookmarks.includes(t.id);
        const done = trekLog[t.id];
        const img = getImg(t.id, 1200, 400);
        const monthRow = MONTHS.map((m, i) => {
          let cls = "month-avoid";
          if (t.bestMonths.includes(i)) cls = "month-best";
          else if (t.okMonths.includes(i)) cls = "month-ok";
          return `<span class="month-pill ${cls}">${m}</span>`;
        }).join("");
        const nearby = t.nearby || [];
        const gearHTML = t.gear
          .map(
            (g, i) =>
              `<label class="gear-item ${done && done.gear && done.gear[i] ? "checked" : ""}"><input type="checkbox" ${done && done.gear && done.gear[i] ? "checked" : ""} onchange="saveGear('${t.id}',${i},this.checked)"> ${g}</label>`,
          )
          .join("");
        const elevPoints = buildElevProfile(t);
        const partnerImg = IMAGE_CREDITS && IMAGE_CREDITS[t.id];
        const creditHTML = partnerImg && partnerImg.credit ? 
          `<div class="image-credit-badge">Photo Credit: ${partnerImg.credit}</div>` : '';

        document.getElementById("trek-detail").innerHTML = `
    <div class="detail-hero" style="${img ? "" : `background:${t.country === "Nepal" ? "#1A2848" : t.country === "India" ? "#2C4A2E" : "#2C2A1A"}`}">
      ${img ? `<img class="detail-hero-img" src="${img}" loading="eager" alt="${t.name}" onerror="this.style.display='none'; this.closest('.detail-hero').style.background='${t.country === 'Nepal' ? '#1A2848' : t.country === 'India' ? '#2C4A2E' : '#2C2A1A'}'; this.nextElementSibling.style.display='block';">` : ""}
      <div class="detail-hero-fallback" style="display:${img ? 'none' : 'block'}; width:100%; height:100%; position:absolute; inset:0; z-index:0;">${getCardSVG(t)}</div>
      ${creditHTML}
      <div class="detail-overlay"></div>
      <div class="detail-actions">
        <button class="detail-action-btn ${saved ? "saved" : ""}" id="detSaveBtn" onclick="toggleBookmarkDetail('${t.id}')">${saved ? "Saved" : "Save"}</button>
        <button class="detail-action-btn" onclick="openLog('${t.id}')">${done ? "Edit Log" : "Log Trek"}</button>
        <button class="detail-action-btn" onclick="shareCurrentTrek('${t.id}')">Share Link</button>
        <button class="detail-action-btn" onclick="window.print()">Print</button>
      </div>
      <div class="detail-title-block">
        <div class="detail-country-tag" style="display:flex;align-items:center;gap:.6rem">${t.country} · ${t.region} &nbsp;${getSnowBadge(t)}</div>
        <div class="detail-name">${t.name}</div>
      </div>
    </div>
    <div class="detail-body">
      <button class="back-btn" onclick="showCountry('${t.country}')">← Back to ${t.country}</button>
      ${done && done.date ? `<div style="background:rgba(44,74,46,.12);border:1px solid var(--forest);border-radius:4px;padding:.8rem 1rem;margin-bottom:1.2rem;font-size:.85rem;color:var(--forest)">Completed on ${done.date}${done.rating ? ` · Rated ${done.rating} stars` : ""}${done.note ? ` · "${done.note}"` : ""}</div>` : ""}<div class="detail-stats-row">
        <div class="ds-item"><div class="ds-val">${formatElev(t)}</div><div class="ds-key">Max Elevation</div></div>
        <div class="ds-item"><div class="ds-val">${t.duration}</div><div class="ds-key">Duration</div></div>
        <div class="ds-item"><div class="ds-val">${t.distance}</div><div class="ds-key">Distance</div></div>
        <div class="ds-item"><div class="ds-val">${t.startPoint}</div><div class="ds-key">Start Point</div></div>
        <div class="ds-item"><div class="ds-val" style="text-transform:capitalize">${t.difficulty}</div><div class="ds-key">Difficulty</div></div>
      </div>
      <div class="section-title" style="margin-top: 1rem;">Live Trail Status</div>
      <div class="live-status-grid">
        <div class="live-status-item">
          <div class="live-status-val" id="liveWeatherVal">Loading...</div>
          <div class="live-status-key">Weather</div>
        </div>
        <div class="live-status-item">
          <div class="live-status-val" id="liveWindVal">Loading...</div>
          <div class="live-status-key">Wind Speed</div>
        </div>
        <div class="live-status-item">
          <div class="live-status-val" id="liveVisibilityVal">Loading...</div>
          <div class="live-status-key">Visibility</div>
        </div>
        <div class="live-status-item">
          <div class="live-status-val" style="text-transform: capitalize;">${t.difficulty === 'hard' ? 'Low' : t.difficulty === 'moderate' ? 'Moderate' : 'High'}</div>
          <div class="live-status-key">Hiker Density</div>
        </div>
      </div>
      <div class="section-title">Pricing</div>
      ${
        t.price
          ? `
      <div class="price-section">
        <div class="price-section-title">Estimated cost per person (INR) — organized group trek</div>
        <div class="price-tiers">
          <div class="price-tier">
            <div class="price-tier-label">Self-Arrange</div>
            <div class="price-tier-amount">&#x20B9;${(t.price.budget / 1000).toFixed(0)}K</div>
            <div class="price-tier-sub">Self-arrange</div>
          </div>
          <div class="price-tier recommended">
            <div class="price-tier-label">Trek Company</div>
            <div class="price-tier-amount">&#x20B9;${(t.price.standard / 1000).toFixed(0)}K</div>
            <div class="price-tier-sub">Trek company package</div>
          </div>
          <div class="price-tier">
            <div class="price-tier-label">Premium</div>
            <div class="price-tier-amount">&#x20B9;${(t.price.premium / 1000).toFixed(0)}K</div>
            <div class="price-tier-sub">Premium service</div>
          </div>
        </div>
        <div class="price-note">Trek company package includes: ${t.price.note}</div>
        <div class="price-disclaimer">Prices sourced from Indiahikes, Trek the Himalayas, Thrillophilia & operator websites (2024–25). Excludes travel to base city. Nepal treks priced from Kathmandu. Bhutan treks include govt daily tariff.</div>
      </div>`
          : ""
      }
      <div class="section-title">About this trek</div>
      <div class="detail-desc">${t.desc.replace(/\n\n/g, '</div><div class="detail-desc">').replace(/^/, "").replace(/$/, "")}</div>
      <div class="section-title" style="margin-top:1.5rem">Elevation profile</div>
      <div class="elev-chart" style="margin-top:.7rem"><canvas class="elev-canvas" id="elevCanvas" width="800" height="120"></canvas></div>
      <div class="section-title" style="margin-top:1.5rem">Interactive Trail Map</div>
      <div class="detail-map-wrap" style="height: 260px; margin-top: .7rem; margin-bottom: 1.8rem; border-radius: var(--radius); overflow: hidden; border: 1px solid var(--border); position: relative; z-index: 1;">
        <div id="detailMap" style="width: 100%; height: 100%;"></div>
      </div>
      <div class="section-title">Best time to visit</div>
      <div class="best-time-grid" style="margin-top:.6rem">${monthRow}</div>
      <div style="display:flex;gap:1rem;margin-bottom:1.5rem;margin-top:.5rem;flex-wrap:wrap">
        <span style="font-size:.7rem;display:flex;align-items:center;gap:4px"><span class="month-pill month-best" style="padding:3px 8px">●</span>Best</span>
        <span style="font-size:.7rem;display:flex;align-items:center;gap:4px"><span class="month-pill month-ok" style="padding:3px 8px">●</span>Possible</span>
        <span style="font-size:.7rem;display:flex;align-items:center;gap:4px"><span class="month-pill month-avoid" style="padding:3px 8px">●</span>Avoid</span>
      </div>
      <div class="section-title">Day-by-day itinerary</div>
      <div class="itinerary-list" style="margin-top:.7rem">${t.itinerary
        .map(
          (d, i) => `
        <div class="itin-day">
          <div><div class="itin-day-num">${String(i + 1).padStart(2, "0")}</div><div class="itin-day-label">Day</div></div>
          <div><strong style="font-size:.87rem;color:var(--text)">${d.camp}</strong>${d.km && !["Drive", "Hike", "Exploration", "Sunrise", "Full day"].includes(d.km) ? `<span style="font-size:.72rem;color:var(--mist);margin-left:6px">${d.km}</span>` : ""}<p class="itin-day-desc">${d.desc}</p></div>
        </div>`,
        )
        .join("")}</div>
      <div class="section-title">Gear checklist</div>
      <div class="gear-grid" style="margin-top:.7rem">${gearHTML}</div>
      <div style="margin-top: 1rem; margin-bottom: 1.5rem;">
        <div style="font-size: 0.8rem; color: var(--mist); margin-bottom: 0.4rem;">Get this checklist emailed to you:</div>
        <form class="email-checklist-form" onsubmit="emailChecklist(event, '${t.id}')">
          <input type="email" id="emailChecklistInput-${t.id}" placeholder="Enter your email address" required />
          <button type="submit" class="email-checklist-btn" id="emailChecklistBtn-${t.id}">Email Me</button>
        </form>
      </div>
      <div class="section-title">Essential tips</div>
      <div class="tips-grid" style="margin-top:.7rem">${Object.entries(t.tips)
        .map(
          ([k, v]) =>
            `<div class="tip-card"><div class="tip-label">${k}</div><div class="tip-val">${v}</div></div>`,
        )
        .join("")}</div>
      ${nearby.length ? `<div class="section-title">You might also like</div><div class="nearby-row" style="margin-top:.7rem">${nearby.map((n) => `<div class="nearby-chip" onclick="goToNearby('${n}')">${n} →</div>`).join("")}</div>` : ""}
      <div style="margin-bottom:1.8rem">
        <div class="section-title">Navigate</div>
        <div style="display:flex;gap:.6rem;flex-wrap:wrap;margin-top:.7rem">
          <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(t.name + " " + t.region)}" target="_blank" rel="noopener" class="back-btn" style="text-decoration:none;display:inline-block">Open in Google Maps</a>
          <a href="https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(t.startPoint + "," + t.region)}" target="_blank" rel="noopener" class="back-btn" style="text-decoration:none;display:inline-block">Directions to ${t.startPoint}</a>
        </div>
      </div>
      <div class="section-title">Weather at ${t.startPoint}</div>
      <div class="weather-widget" style="margin-top:.7rem" id="weatherWidget"><div style="color:var(--mist);font-size:.82rem">Loading weather…</div></div>
    </div>`;
        document.getElementById("trek-detail").scrollTop = 0;
        // parallax on scroll
        const detailEl = document.getElementById("trek-detail");
        const onScroll = () => {
          const img = detailEl.querySelector(".detail-hero-img");
          if (img)
            img.style.transform = `translateY(${detailEl.scrollTop * 0.3}px)`;
        };
        detailEl.removeEventListener("scroll", detailEl._parallax || null);
        detailEl._parallax = onScroll;
        detailEl.addEventListener("scroll", onScroll);
        drawElevProfile(elevPoints);
        // add day labels below chart
        setTimeout(() => {
          const wrap = document.querySelector(".elev-chart");
          if (wrap && !wrap.querySelector(".elev-day-labels")) {
            const labels = document.createElement("div");
            labels.className = "elev-day-labels";
            labels.innerHTML = elevPoints
              .map((_, i) => `<span class="elev-day-label">D${i + 1}</span>`)
              .join("");
            wrap.after(labels);
          }
        }, 50);
        fetchWeather(t);
        // inject reviews + pdf button after render
        setTimeout(() => {
          const body = document.querySelector(".detail-body");
          if (body && !body.querySelector(".review-section")) {
            const rd = document.createElement("div");
            rd.innerHTML = renderReviewSection(t);
            if (rd.firstElementChild) body.appendChild(rd.firstElementChild);
          }
          if (body && !body.querySelector(".operator-grid")) {
            const od = document.createElement("div");
            od.innerHTML = renderOperatorSection(t);
            if (od.firstElementChild) body.appendChild(od.firstElementChild);
          }
          const actions = document.querySelector(".detail-actions");
          if (actions && !actions.querySelector("[data-pdf]")) {
            const pb = document.createElement("button");
            pb.className = "detail-action-btn";
            pb.setAttribute("data-pdf", "1");
            pb.textContent = "Packing List";
            pb.onclick = () => exportPackingPDF(t);
            actions.appendChild(pb);
          }
          if (body && !body.querySelector(".app-footer")) {
            const fd = document.createElement("div");
            fd.innerHTML = getFooterHTML();
            if (fd.firstElementChild) body.appendChild(fd.firstElementChild);
          }
        }, 100);
      }

      function buildElevProfile(t) {
        const base = 800,
          peak = t.elevM,
          days = t.itinerary.length;
        const pts = [];
        pts.push(base);
        for (let i = 1; i <= days; i++) {
          const ratio = i / days;
          const isReturn = ratio > 0.7;
          if (isReturn)
            pts.push(
              Math.round(base + (peak - base) * (1 - (ratio - 0.7) / 0.3)),
            );
          else
            pts.push(
              Math.round(
                base + (peak - base) * Math.sin(ratio * Math.PI * 0.8),
              ),
            );
        }
        return pts;
      }

      let drawElevProfile = function(pts) {
        const c = document.getElementById("elevCanvas");
        if (!c) return;
        const ctx = c.getContext("2d");
        const w = c.width,
          h = c.height,
          pad = 20;
        const min = Math.min(...pts),
          max = Math.max(...pts);
        const scaleX = (w - pad * 2) / (pts.length - 1);
        const scaleY = (h - pad * 2) / (max - min);
        const px = (i) => pad + i * scaleX;
        const py = (v) => h - pad - (v - min) * scaleY;
        ctx.clearRect(0, 0, w, h);
        // gradient fill
        const grad = ctx.createLinearGradient(0, 0, 0, h);
        grad.addColorStop(0, "rgba(201,147,42,0.35)");
        grad.addColorStop(1, "rgba(201,147,42,0.02)");
        ctx.beginPath();
        ctx.moveTo(px(0), py(pts[0]));
        pts.forEach((v, i) => {
          if (i > 0) ctx.lineTo(px(i), py(v));
        });
        ctx.lineTo(px(pts.length - 1), h - pad);
        ctx.lineTo(px(0), h - pad);
        ctx.closePath();
        ctx.fillStyle = grad;
        ctx.fill();
        // line
        ctx.beginPath();
        ctx.moveTo(px(0), py(pts[0]));
        pts.forEach((v, i) => {
          if (i > 0) ctx.lineTo(px(i), py(v));
        });
        ctx.strokeStyle = "#de5e3a";
        ctx.lineWidth = 2;
        ctx.stroke();
        // labels
        ctx.fillStyle = "rgba(255,255,255,0.5)";
        ctx.font = "10px DM Sans,sans-serif";
        ctx.textAlign = "center";
        ctx.fillText(min + "m", pad, h - 4);
        ctx.fillText(max + "m", px(Math.floor(pts.length / 2)), pad + 10);
      }

      async function fetchWeather(t) {
        const el = document.getElementById("weatherWidget");
        if (!el) return;
        const coords = {
          Manali: [32.2396, 77.1887],
          Leh: [34.1526, 77.5771],
          Govindghat: [30.5869, 79.7432],
          Loharjung: [30.08, 79.83],
          Viswema: [25.62, 94.15],
          Sankri: [31.09, 78.11],
          Lukla: [27.6869, 86.7314],
          Besisahar: [28.23, 84.4],
          Syabrubesi: [28.1636, 85.3275],
          Paro: [27.4287, 89.4181],
          Skardu: [35.2971, 75.6333],
          Dalhousie: [32.5355, 75.9804],
          Qiaotou: [27.22, 100.18],
          Yuksom: [27.38, 88.23],
          Gangotri: [30.9941, 79.0746],
          Maneybhanjang: [27.05, 88.09],
          Kasol: [32.01, 77.32],
          Stok: [33.99, 77.55],
          Spituk: [34.14, 77.53],
          Barsheni: [31.87, 77.38],
          Chopta: [30.43, 79.24],
        };
        let lat = 20, lon = 80;
        const tGeo = TREK_COORDS[t.id];
        if (tGeo) {
          lon = tGeo[0];
          lat = tGeo[1];
        } else {
          const c = coords[t.startPoint] || [20, 80];
          lat = c[0];
          lon = c[1];
        }

        const cacheKey = `tp_weather_cache_${lat.toFixed(4)}_${lon.toFixed(4)}`;
        const cached = JSON.parse(localStorage.getItem(cacheKey) || "null");
        const cacheDuration = 3 * 60 * 60 * 1000; // 3 hours in ms
        const now = Date.now();
        
        let weatherData = null;
        let isCached = false;
        
        if (cached && (now - cached.timestamp < cacheDuration)) {
          weatherData = cached.data;
          isCached = true;
        } else {
          try {
            const elevParam = t.elevM ? `&elevation=${t.elevM}` : '';
            const r = await fetch(
              `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min&wind_speed_unit=kmh&timezone=auto${elevParam}`,
            );
            weatherData = await r.json();
            localStorage.setItem(cacheKey, JSON.stringify({
              timestamp: now,
              data: weatherData
            }));
          } catch (e) {
            console.error("Failed to fetch weather forecast:", e);
            if (cached) {
              // Fallback to expired cache if offline
              weatherData = cached.data;
              isCached = true;
            }
          }
        }

        if (!weatherData || !weatherData.current) {
          el.innerHTML = `<div style="color:var(--mist);font-size:.8rem">Weather details currently unavailable</div>`;
          return;
        }

        const cur = weatherData.current;
        const weatherMap = {
          0: { label: "Sunny", emoji: "☀️" },
          1: { label: "Mainly Clear", emoji: "🌤️" },
          2: { label: "Partly Cloudy", emoji: "⛅" },
          3: { label: "Overcast", emoji: "☁️" },
          45: { label: "Foggy", emoji: "🌫️" },
          48: { label: "Rime Fog", emoji: "🌫️" },
          51: { label: "Light Drizzle", emoji: "🌦️" },
          53: { label: "Drizzle", emoji: "🌦️" },
          55: { label: "Dense Drizzle", emoji: "🌧️" },
          61: { label: "Slight Rain", emoji: "🌧️" },
          63: { label: "Rain", emoji: "🌧️" },
          65: { label: "Heavy Rain", emoji: "⛈️" },
          71: { label: "Slight Snow", emoji: "🌨️" },
          73: { label: "Snow", emoji: "❄️" },
          75: { label: "Heavy Snow", emoji: "❄️" },
          77: { label: "Snow Grains", emoji: "🌨️" },
          80: { label: "Slight Showers", emoji: "🌦️" },
          81: { label: "Showers", emoji: "🌧️" },
          82: { label: "Violent Showers", emoji: "⛈️" },
          85: { label: "Snow Showers", emoji: "🌨️" },
          86: { label: "Heavy Snow Showers", emoji: "❄️" },
          95: { label: "Thunderstorm", emoji: "⛈️" },
          96: { label: "Thunderstorm with Hail", emoji: "⛈️" },
          99: { label: "Thunderstorm with Heavy Hail", emoji: "⛈️" }
        };
        const code = cur.weathercode || 0;
        const weatherInfo = weatherMap[code] || { label: "Sunny", emoji: "☀️" };
        
        let forecastHTML = '';
        if (weatherData.daily && weatherData.daily.time && weatherData.daily.time.length >= 4) {
          forecastHTML = `<div class="weather-forecast" style="display:flex;gap:1rem;margin-top:1rem;border-top:1px solid var(--border);padding-top:0.8rem;width:100%;">`;
          for (let i = 1; i <= 3; i++) {
            const dDate = new Date(weatherData.daily.time[i]);
            const dDay = dDate.toLocaleDateString("en-US", { weekday: 'short' });
            const dCode = weatherData.daily.weathercode[i];
            const dInfo = weatherMap[dCode] || { label: "Sunny", emoji: "" };
            const tMax = Math.round(weatherData.daily.temperature_2m_max[i]);
            const tMin = Math.round(weatherData.daily.temperature_2m_min[i]);
            forecastHTML += `
              <div class="forecast-day" style="flex:1;text-align:center;">
                <div style="font-size:0.7rem;color:rgba(255,255,255,0.75);font-weight:600;text-transform:uppercase;">${dDay}</div>
                <div style="font-size:1.4rem;margin:0.2rem 0;">${dInfo.emoji}</div>
                <div style="font-size:0.75rem;font-weight:700;color:#ffffff;">${tMax}° / ${tMin}°</div>
                <div style="font-size:0.6rem;color:rgba(255,255,255,0.6);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;" title="${dInfo.label}">${dInfo.label}</div>
              </div>
            `;
          }
          forecastHTML += `</div>`;
        }

        el.innerHTML = `
          <div style="display:flex;align-items:center;width:100%;">
            <div class="weather-info" style="flex:1;">
              <div class="weather-temp">${Math.round(cur.temperature_2m)}°C at ${t.name} (approx.)</div>
              <div class="weather-desc">${weatherInfo.label} · Wind ${Math.round(cur.windspeed_10m)} km/h · ${isCached ? "Cached" : "Live"}</div>
            </div>
          </div>
          ${forecastHTML}
        `;

        const tempVal = document.getElementById("liveWeatherVal");
        const windVal = document.getElementById("liveWindVal");
        const visVal = document.getElementById("liveVisibilityVal");
        
        if (tempVal) tempVal.textContent = Math.round(cur.temperature_2m) + "°C";
        if (windVal) windVal.textContent = Math.round(cur.windspeed_10m) + " km/h";
        if (visVal) {
          const code = cur.weathercode || 0;
          if (code <= 2) visVal.textContent = "Excellent";
          else if (code <= 48) visVal.textContent = "Moderate";
          else visVal.textContent = "Low";
        }
      }

      function toggleBookmarkDetail(id) {
        const i = bookmarks.indexOf(id);
        const btn = document.getElementById("detSaveBtn");
        if (i === -1) {
          bookmarks.push(id);
          btn.textContent = "Saved";
          btn.classList.add("saved");
          syncBookmarkToDB(id, true);
        } else {
          bookmarks.splice(i, 1);
          btn.textContent = "Save";
          btn.classList.remove("saved");
          syncBookmarkToDB(id, false);
        }
        localStorage.setItem("tp_bookmarks", JSON.stringify(bookmarks));
        showToast(i === -1 ? "Saved to bookmarks" : "Removed from bookmarks");
      }

      function shareCurrentTrek(id) {
        const url = window.location.href.split("?")[0] + "?trek=" + id;
        navigator.clipboard.writeText(url).catch(() => {});
        showToast("Link copied to clipboard!");
      }

      function openLog(id) {
        currentTrek = ALL_TREKS.find((t) => t.id === id) || currentTrek;
        const existing = trekLog[id] || {};
        document.getElementById("logDate").value = existing.date || "";
        document.getElementById("logRating").value = existing.rating || "";
        document.getElementById("logNote").value = existing.note || "";
        document.getElementById("logModal").style.display = "flex";
      }

      function closeLog() {
        document.getElementById("logModal").style.display = "none";
      }

      function saveLog() {
        if (!currentTrek) return;
        const id = currentTrek.id;
        const log = {
          date: document.getElementById("logDate").value,
          rating: document.getElementById("logRating").value,
          note: document.getElementById("logNote").value,
          gear: (trekLog[id] && trekLog[id].gear) || [],
        };
        trekLog[id] = log;
        localStorage.setItem("tp_log", JSON.stringify(trekLog));
        syncLogToDB(id, log);
        closeLog();
        showToast("Trek logged!");
        showDetail(currentTrek);
      }

      function saveGear(id, idx, val) {
        if (!trekLog[id]) trekLog[id] = { gear: [] };
        if (!trekLog[id].gear) trekLog[id].gear = [];
        trekLog[id].gear[idx] = val;
        localStorage.setItem("tp_log", JSON.stringify(trekLog));
        syncLogToDB(id, trekLog[id]);
      }

      function goToNearby(name) {
        const t = ALL_TREKS.find(
          (x) =>
            x.name.toLowerCase() === name.toLowerCase() ||
            x.name.toLowerCase().includes(name.toLowerCase()),
        );
        if (t) flyToTrek(t.id, t.country);
      }

      function showSaved() {
        setView("saved");
        const saved = ALL_TREKS.filter((t) => bookmarks.includes(t.id));
        document.getElementById("saved-view").innerHTML = `
    <div class="country-header"><div class="country-title">Saved Treks</div><div class="country-count">${saved.length} saved</div></div>
    <div class="trek-grid">
      ${saved.length > 0 ? 
        saved.map((t, i) => trekCardHTML(t, i)).join("") : 
        `<div style="grid-column: 1/-1; text-align: center; padding: 4rem 2rem; color: var(--mist); font-size: 0.95rem; background: var(--card-bg); border-radius: var(--radius); border: 1px dashed var(--border);">
          <div style="font-size: 1.5rem; font-family: 'Libre Caslon Text', serif; font-weight: bold; margin-bottom: 0.8rem; color: var(--gold);">Saved</div>
          <strong>No saved treks yet</strong>
          <div style="font-size: 0.8rem; margin-top: 0.4rem; opacity: 0.8;">Tap the "Save" button on any trek card or detail view to bookmark it here.</div>
         </div>`
      }
    </div>
    ${getFooterHTML()}`;
      }

      // RECOMMENDER
      let recAnswers = {};
      const REC_QS = [
        {
          q: "How fit are you?",
          k: "fit",
          opts: [
            "Beginner — occasional walks",
            "Moderate — gym regular",
            "Advanced — I run or climb",
          ],
        },
        {
          q: "How long can you take off?",
          k: "dur",
          opts: ["Just a day or weekend", "Up to a week", "2+ weeks"],
        },
        {
          q: "What kind of experience?",
          k: "vibe",
          opts: [
            "Scenic & easy",
            "Cultural & immersive",
            "Raw & challenging",
            "Snow & winter",
          ],
        },
        {
          q: "When are you planning to go?",
          k: "month",
          opts: [
            "Winter (Dec–Feb)",
            "Spring (Mar–May)",
            "Monsoon (Jun–Aug)",
            "Autumn (Sep–Nov)",
          ],
        },
      ];

      function showRecommender() {
        setView("rec");
        recAnswers = {};
        renderRecQ(0);
      }

      function renderRecQ(qi) {
        const rv = document.getElementById("rec-view");
        if (qi >= REC_QS.length) {
          showRecResult();
          return;
        }
        const q = REC_QS[qi];
        rv.innerHTML = `<button class="back-btn" onclick="showCountry('${currentCountry}')">← Back</button>
    <div style="margin-bottom:2rem"><div style="font-size:.72rem;color:var(--mist);letter-spacing:2px;text-transform:uppercase;margin-bottom:.5rem">Question ${qi + 1} of ${REC_QS.length}</div>
    <div style="height:3px;background:var(--border);border-radius:2px;margin-bottom:1.5rem"><div style="height:100%;width:${((qi + 1) / REC_QS.length) * 100}%;background:var(--gold);border-radius:2px;transition:width .4s"></div></div>
    <div class="rec-q"><div class="rec-q-label">${q.q}</div><div class="rec-opts">${q.opts.map((o, i) => `<div class="rec-opt" onclick="pickRec('${q.k}','${i}',${qi + 1})">${o}</div>`).join("")}</div></div></div>`;
      }

      function pickRec(k, v, next) {
        recAnswers[k] = parseInt(v);
        renderRecQ(next);
      }

      function showRecResult() {
        // score each trek
        const monthMap = {
          0: [11, 0, 1],
          1: [2, 3, 4],
          2: [5, 6, 7],
          3: [8, 9, 10],
        };
        const bestMonths = monthMap[recAnswers.month] || [];
        const scored = ALL_TREKS.map((t) => {
          let s = 0;
          if (recAnswers.fit === 0 && t.difficulty === "easy") s += 3;
          else if (recAnswers.fit === 1 && t.difficulty === "moderate") s += 3;
          else if (recAnswers.fit === 2 && t.difficulty === "hard") s += 3;
          if (recAnswers.dur === 0 && t.durationDays <= 2) s += 2;
          else if (recAnswers.dur === 1 && t.durationDays <= 7) s += 2;
          else if (recAnswers.dur === 2 && t.durationDays > 7) s += 2;
          if (
            recAnswers.vibe === 3 &&
            t.bestMonths.some((m) => [11, 0, 1].includes(m))
          )
            s += 2;
          if (bestMonths.some((m) => t.bestMonths.includes(m))) s += 3;
          return { t, s };
        }).sort((a, b) => b.s - a.s);
        const top = scored.slice(0, 3).map((x) => x.t);
        const rv = document.getElementById("rec-view");
        rv.innerHTML = `<button class="back-btn" onclick="showCountry('${currentCountry}')">← Back</button>
    <div class="country-header"><div class="country-title">Your Matches</div></div>
    <div class="trek-grid">${top.map((t, i) => trekCardHTML(t, i)).join("")}</div>
    ${getFooterHTML()}`;
      }

      // COMPARE
      function toggleCompare() {
        compareMode = !compareMode;
        const cb = document.getElementById("cmpBtn");
        if (cb) cb.classList.toggle("active", compareMode);
        document.getElementById("compare-panel").style.display = compareMode
          ? "flex"
          : "none";
        showToast(
          compareMode ? "Click any 2 treks to compare" : "Compare mode off",
        );
      }

      function addToCompare(t) {
        if (compareList.length >= 2) {
          showToast("Already picked 2 treks. Run compare or clear.");
          return;
        }
        if (compareList.find((x) => x.id === t.id)) {
          showToast("Already added");
          return;
        }
        compareList.push(t);
        const slot = document.getElementById(
          "cslot" + (compareList.length - 1),
        );
        slot.textContent = t.name;
        slot.classList.add("filled");
        if (compareList.length === 2)
          showToast("Both treks selected! Hit Compare →");
      }

      function removeCompare(i) {
        compareList.splice(i, 1);
        updateCompareSlots();
      }
       function clearCompare() {
        compareList = [];
        updateCompareSlots();
        compareMode = false;
        const cb = document.getElementById("cmpBtn");
        if (cb) cb.classList.remove("active");
        document.getElementById("compare-panel").style.display = "none";
      }
      function updateCompareSlots() {
        [0, 1].forEach((i) => {
          const s = document.getElementById("cslot" + i);
          s.textContent = compareList[i]
            ? compareList[i].name
            : "+ Pick a trek";
          s.classList.toggle("filled", !!compareList[i]);
        });
      }

      function runCompare() {
        if (compareList.length < 2) {
          showToast("Pick 2 treks first");
          return;
        }
        compareMode = false;
        document.getElementById("compare-panel").style.display = "none";
        setView("compare");
        const [a, b] = compareList;
        // higher=better: elevation. lower=better: duration, difficulty
        const diffRank = { easy: 1, moderate: 2, hard: 3 };
        const rows = [
          { l: "Country", av: a.country, bv: b.country, win: null },
          { l: "Region", av: a.region, bv: b.region, win: null },
          {
            l: "Difficulty",
            av: a.difficulty,
            bv: b.difficulty,
            win:
              diffRank[a.difficulty] < diffRank[b.difficulty]
                ? "a"
                : diffRank[b.difficulty] < diffRank[a.difficulty]
                  ? "b"
                  : null,
          },
          {
            l: "Max Elevation",
            av: a.elevation,
            bv: b.elevation,
            win: a.elevM > b.elevM ? "a" : "b",
          },
          {
            l: "Duration",
            av: a.duration,
            bv: b.duration,
            win: a.durationDays < b.durationDays ? "a" : "b",
          },
          { l: "Distance", av: a.distance, bv: b.distance, win: null },
          { l: "Start Point", av: a.startPoint, bv: b.startPoint, win: null },
          {
            l: "Best Season",
            av: a.bestMonths.map((m) => MONTHS[m]).join(", ") || "—",
            bv: b.bestMonths.map((m) => MONTHS[m]).join(", ") || "—",
            win: null,
          },
          {
            l: "Standard Cost",
            av: a.price
              ? "Rs " + (a.price.standard / 1000).toFixed(0) + "K"
              : "—",
            bv: b.price
              ? "Rs " + (b.price.standard / 1000).toFixed(0) + "K"
              : "—",
            win:
              a.price && b.price
                ? a.price.standard < b.price.standard
                  ? "a"
                  : "b"
                : null,
          },
        ];
        document.getElementById("compare-view").innerHTML = `
    <button class="back-btn" onclick="showCountry('${currentCountry}')">Back</button>
    <div class="country-header"><div class="country-title">Comparison</div></div>
    <div style="overflow-x:auto"><table class="compare-table">
      <thead><tr><th style="width:140px">Attribute</th><th>${a.name}</th><th>${b.name}</th></tr></thead>
      <tbody>${rows.map((r) => `<tr><td class="compare-label">${r.l}</td><td class="${r.win === "a" ? "compare-winner" : ""}">${r.av}</td><td class="${r.win === "b" ? "compare-winner" : ""}">${r.bv}</td></tr>`).join("")}</tbody>
    </table></div>
    <div style="margin-top:1.5rem;display:grid;grid-template-columns:1fr 1fr;gap:1rem">
      <div style="background:var(--card-bg);border:1px solid var(--border);border-radius:4px;padding:1rem"><div style="font-family:'Playfair Display',serif;font-size:1rem;color:var(--text);margin-bottom:.5rem">${a.name}</div><div style="font-size:.82rem;color:var(--subtle);line-height:1.6">${a.desc.slice(0, 200)}…</div><button class="back-btn" style="margin-top:.7rem;margin-bottom:0;font-size:.68rem" onclick="flyToTrek('${a.id}','${a.country}')">View full →</button></div>
      <div style="background:var(--card-bg);border:1px solid var(--border);border-radius:4px;padding:1rem"><div style="font-family:'Playfair Display',serif;font-size:1rem;color:var(--text);margin-bottom:.5rem">${b.name}</div><div style="font-size:.82rem;color:var(--subtle);line-height:1.6">${b.desc.slice(0, 200)}…</div><button class="back-btn" style="margin-top:.7rem;margin-bottom:0;font-size:.68rem" onclick="flyToTrek('${b.id}','${b.country}')">View full →</button></div>
    </div>`;
      }

      // AI CHAT
      function toggleAI() {
        const p = document.getElementById("ai-panel");
        p.style.display =
          p.style.display === "none" || !p.style.display ? "flex" : "none";
        setTimeout(
          () => p.classList.toggle("open", p.style.display === "flex"),
          10,
        );
        document
          .getElementById("aiBtn")
          .classList.toggle("active", p.style.display === "flex");
      }

      function getAIResponse(query) {
        const q = query.toLowerCase();
        
        // 1. Check for specific trek inquiries
        for (const t of ALL_TREKS) {
          if (q.includes(t.id) || q.includes(t.name.toLowerCase())) {
            let reply = `<strong>${t.name}</strong> (${t.country} · ${t.region}):<br><br>`;
            reply += `• <strong>Elevation:</strong> ${t.elevation}<br>`;
            reply += `• <strong>Duration:</strong> ${t.duration} (${t.distance})<br>`;
            reply += `• <strong>Difficulty:</strong> ${t.difficulty}<br>`;
            reply += `• <strong>Best time:</strong> ${t.bestMonths.map(m => MONTHS[m]).join(", ")}<br><br>`;
            reply += `${t.desc.slice(0, 150)}...<br><br>`;
            reply += `<em>Tip: ${t.tips.Permit || t.tips.Season || "Requires preparation!"}</em><br><br>`;
            reply += `<button class="back-btn" style="font-size: 0.68rem; margin: 0; padding: 6px 12px;" onclick="window.flyToTrekFromMap('${t.id}', '${t.country}')">Explore details</button>`;
            return reply;
          }
        }
        
        // 2. Check for country-specific queries
        const countries = ["india", "nepal", "bhutan"];
        for (const c of countries) {
          if (q.includes(c)) {
            const matches = ALL_TREKS.filter(t => t.country.toLowerCase() === c);
            let reply = `Here are some great treks in <strong>${c.charAt(0).toUpperCase() + c.slice(1)}</strong>:<br><br>`;
            matches.slice(0, 4).forEach(t => {
              reply += `• <strong>${t.name}</strong> - ${t.difficulty} (${t.duration})<br>`;
            });
            reply += `<br>Which one would you like to know more about?`;
            return reply;
          }
        }

        // 3. Check for difficulty-specific queries
        const difficulties = ["easy", "moderate", "hard"];
        for (const d of difficulties) {
          if (q.includes(d)) {
            const matches = ALL_TREKS.filter(t => t.difficulty === d);
            let reply = `Here are some <strong>${d}</strong> difficulty treks:<br><br>`;
            matches.slice(0, 4).forEach(t => {
              reply += `• <strong>${t.name}</strong> (${t.country}) - ${t.duration}<br>`;
            });
            reply += `<br>Let me know if you want details on any of these!`;
            return reply;
          }
        }

        // 4. Check for permits
        if (q.includes("permit") || q.includes("permission") || q.includes("entry fee") || q.includes("forest department")) {
          return `Many high-altitude treks in India (such as Chadar Trek, Har Ki Dun, or Kudremukh) require forest department or inner line permits. Local guides or trek operators usually arrange these for you, but solo trekkers must obtain them at regional offices or portals like the Karnataka Eco-Tourism portal.`;
        }

        // 5. Check for altitude sickness / AMS
        if (q.includes("altitude") || q.includes("sickness") || q.includes("ams") || q.includes("acclimatize")) {
          return `Acute Mountain Sickness (AMS) can affect anyone above 2,500m (8,000 ft). Prevent it by ascending gradually (no more than 300-500m per day), staying hydrated (4-5L water daily), and avoiding alcohol. If symptoms like headache or nausea persist, descend immediately.`;
        }

        // 6. Check for food / meals
        if (q.includes("food") || q.includes("meal") || q.includes("eat") || q.includes("diet")) {
          return `On organized Himalayan expeditions, hot vegetarian meals (dal, rice, soup, roti) are freshly prepared at camps for easy digestion. For treks in the Western Ghats (Maharashtra/Karnataka), local home stays along the route offer traditional regional meals.`;
        }

        // 7. Check for safety / danger / rescue
        if (q.includes("safe") || q.includes("danger") || q.includes("rescue") || q.includes("risk")) {
          return `Safety is paramount. Always trek with a guide in remote regions, check local weather advisories, wear proper high-traction hiking boots, and carry a basic first-aid kit. High-altitude operators carry emergency oxygen cylinders and stretchers.`;
        }

        // 8. Check for maps / GPS
        if (q.includes("map") || q.includes("route") || q.includes("gps") || q.includes("coordinates")) {
          return `You can view the full routes, elevations, and starting points on our interactive maps! Click on the **Maps** tab in the main navigation header to open the Leaflet-powered global trek explorer.`;
        }

        // 9. Check for total count
        if (q.includes("how many") || q.includes("total trek") || q.includes("count")) {
          return `Trekpedia currently catalogs **210 treks** across India, Nepal, and Bhutan. You can filter and sort them on the Exploration home dashboard.`;
        }

        // 10. Check for weather queries
        if (q.includes("weather") || q.includes("temperature") || q.includes("rain") || q.includes("snow")) {
          if (currentTrek) {
            return `For <strong>${currentTrek.name}</strong>, the best months to visit are <strong>${currentTrek.bestMonths.map(m => MONTHS[m]).join(", ")}</strong>. You can see the live weather widget on the details page!`;
          }
          return `I can help with weather! Navigate to any trek details page to see the live weather forecast at the trek's starting point.`;
        }

        // 11. Check for gear/packing
        if (q.includes("gear") || q.includes("pack") || q.includes("checklist")) {
          if (currentTrek) {
            return `For <strong>${currentTrek.name}</strong>, essential gear includes:<br><br>` + 
              currentTrek.gear.slice(0, 5).map(g => `• ${g}`).join('<br>') + 
              `<br><br>Check out the interactive **Gear Checklist** on the details page or download the PDF list!`;
          }
          return `You can check out custom gear checklists on any trek's detail page. Try searching for a trek first!`;
        }

        // Default greeting / help
        return `Hello! I'm your Trekpedia offline expert assistant. Ask me about permits, altitude sickness, gear, maps, safety, or specific treks.<br><br>` +
          `Try asking me something like:<br><br>` +
          `• <em>"Tell me about Kedarkantha"</em><br>` +
          `• <em>"Are permits required for treks?"</em><br>` +
          `• <em>"How do I prevent altitude sickness?"</em><br>` +
          `• <em>"Show me easy treks in India"</em>`;
      }

      async function sendAI() {
        const inp = document.getElementById("aiInput");
        const q = inp.value.trim();
        if (!q) return;
        inp.value = "";
        appendMsg(q, "user");
        const loadId = appendMsg("__typing__", "bot loading");
        
        // Simulate typing delay for realistic AI feel
        setTimeout(() => {
          const responseText = getAIResponse(q);
          const el = document.getElementById(loadId);
          if (el) {
            el.innerHTML = responseText;
            el.className = "ai-msg bot";
            const ms = document.getElementById("aiMessages");
            ms.scrollTop = ms.scrollHeight;
          }
        }, 800);
      }

      function appendMsg(text, cls) {
        const ms = document.getElementById("aiMessages");
        const id = "msg" + Date.now();
        const d = document.createElement("div");
        d.className = "ai-msg " + cls;
        d.id = id;
        if (text === "__typing__") {
          d.className = "ai-typing";
          d.innerHTML =
            '<div class="ai-dot"></div><div class="ai-dot"></div><div class="ai-dot"></div>';
        } else {
          d.textContent = text;
        }
        ms.appendChild(d);
        ms.scrollTop = ms.scrollHeight;
        return id;
      }

      function surpriseMe() {
        const t = ALL_TREKS[Math.floor(Math.random() * ALL_TREKS.length)];
        flyToTrek(t.id, t.country);
        showToast("Taking you to " + t.name + " — enjoy the ride.");
      }

      function toggleDark() {
        document.body.classList.toggle("dark");
        const d = document.body.classList.contains("dark");
        localStorage.setItem('tp_theme', d ? 'dark' : 'light');
        if (map) {
          map.remove();
          map = null;
          if (activeView === "map") {
            renderMap();
          }
        }
        if (detailMapInstance && currentTrek) {
          detailMapInstance.remove();
          detailMapInstance = null;
          renderDetailMap(currentTrek);
        }
      }

      // Initialize system theme change listener
      if (typeof window !== 'undefined' && typeof window.matchMedia === 'function') {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
        prefersDark.addEventListener('change', (e) => {
          if (!localStorage.getItem('tp_theme')) {
            const isDarkNow = e.matches;
            if (isDarkNow !== document.body.classList.contains("dark")) {
              toggleDark();
            }
          }
        });
      }

      function showToast(msg) {
        const t = document.getElementById("toast");
        t.textContent = msg;
        t.classList.add("show");
        setTimeout(() => t.classList.remove("show"), 2600);
      }

      // ── WORLD MAP (Leaflet.js Integration) ──────────────────────
      const TREK_COORDS = {
        "hampta-pass": [77.19, 32.24],
        "chadar-trek": [76.85, 33.85],
        "valley-of-flowers": [79.74, 30.59],
        roopkund: [79.73, 30.08],
        "dzukou-valley": [94.18, 25.62],
        kedarkantha: [78.12, 31.09],
        "har-ki-dun": [78.35, 31.15],
        "goecha-la": [88.14, 27.52],
        "markha-valley": [77.6, 33.9],
        "stok-kangri": [77.63, 34.02],
        "pin-parvati": [77.6, 31.95],
        "sar-pass": [77.31, 32.14],
        kedartal: [79.07, 30.99],
        chandrashila: [79.24, 30.48],
        sandakphu: [87.99, 27.11],
        brahmatal: [79.58, 30.15],
        "bali-pass": [78.4, 31.05],
        "everest-base-camp": [86.93, 27.98],
        "annapurna-circuit": [84.4, 28.23],
        "langtang-valley": [85.33, 28.16],
        "snowman-trek": [89.5, 27.8],
        "druk-path": [89.42, 27.43],
        "kashmir-great-lakes": [75.3, 34.3],
        "tarsar-marsar": [75.2, 34.05],
        "rupin-pass": [78.2, 31.1],
        "buran-ghati": [77.65, 31.3],
        "bhrigu-lake": [77.25, 32.26],
        "phulara-ridge": [78.32, 31.14],
        "gaumukh-tapovan": [79.07, 30.93],
        pangarchulla: [79.57, 30.56],
        "kedarnath-trek": [79.07, 30.74],
        madhyamaheshwar: [79.21, 30.61],
        "munsiyari-khaliya": [80.23, 30.06],
        "yulla-kanda": [78.52, 31.41],
        agasthyarkoodam: [77.2, 8.61],
        "chembra-peak": [76.1, 11.52],
        kudremukh: [75.23, 13.18],
        tadiandamol: [75.73, 12.37],
        mullayanagiri: [75.73, 13.4],
        "pin-bhaba": [78.1, 31.55],
        namdapha: [96.4, 27.5],
        "poon-hill": [83.7, 28.4],
        "gokyo-lakes": [86.68, 27.97],
        "mardi-himal": [83.96, 28.44],
        jomolhari: [89.27, 27.85],
      };
      const COUNTRY_COLORS = {
        India: "#10b981",
      };

      const TRAIL_PATHS = {
        "hampta-pass": [
          [77.19, 32.24],
          [77.22, 32.26],
          [77.25, 32.28],
          [77.28, 32.31],
          [77.24, 32.33],
          [77.2, 32.36],
        ],
        kedarkantha: [
          [78.12, 31.09],
          [78.13, 31.11],
          [78.14, 31.13],
          [78.15, 31.15],
          [78.16, 31.17],
        ],
        "valley-of-flowers": [
          [79.56, 30.5],
          [79.6, 30.54],
          [79.64, 30.57],
          [79.68, 30.6],
          [79.72, 30.63],
        ],
        roopkund: [
          [79.5, 29.95],
          [79.55, 30.0],
          [79.6, 30.04],
          [79.65, 30.07],
          [79.7, 30.09],
        ],
        "chadar-trek": [
          [76.6, 33.55],
          [76.65, 33.62],
          [76.72, 33.7],
          [76.8, 33.78],
          [76.85, 33.85],
        ],
        "everest-base-camp": [
          [86.72, 27.69],
          [86.78, 27.8],
          [86.85, 27.87],
          [86.9, 27.93],
          [86.93, 27.98],
        ],
        "goecha-la": [
          [88.05, 27.36],
          [88.1, 27.42],
          [88.13, 27.48],
          [88.14, 27.52],
        ],
        "markha-valley": [
          [77.53, 34.18],
          [77.57, 34.08],
          [77.6, 33.98],
          [77.63, 33.92],
          [77.6, 33.9],
        ],
        "annapurna-circuit": [
          [84.4, 28.23],
          [84.6, 28.4],
          [84.8, 28.6],
          [84.4, 28.8],
          [84.0, 28.7],
          [83.8, 28.5],
        ],
        sandakphu: [
          [87.97, 26.98],
          [87.98, 27.04],
          [87.99, 27.09],
          [87.99, 27.11],
        ],
        "kashmir-great-lakes": [
          [75.2, 34.1],
          [75.25, 34.2],
          [75.28, 34.28],
          [75.3, 34.3],
        ],
        "sar-pass": [
          [77.2, 32.07],
          [77.23, 32.11],
          [77.25, 32.14],
          [77.28, 32.18],
          [77.31, 32.14],
        ],
        "rupin-pass": [
          [78.1, 31.05],
          [78.12, 31.1],
          [78.14, 31.15],
          [78.18, 31.2],
          [78.2, 31.1],
        ],
        brahmatal: [
          [79.52, 30.08],
          [79.55, 30.12],
          [79.58, 30.15],
        ],
        "har-ki-dun": [
          [78.2, 31.05],
          [78.25, 31.1],
          [78.28, 31.13],
          [78.32, 31.15],
          [78.35, 31.15],
        ],
        kedartal: [
          [79.04, 30.89],
          [79.06, 30.93],
          [79.07, 30.99],
        ],
        "gaumukh-tapovan": [
          [78.95, 30.75],
          [79.0, 30.83],
          [79.05, 30.89],
          [79.07, 30.93],
        ],
        "tarsar-marsar": [
          [75.09, 34.01],
          [75.15, 34.04],
          [75.2, 34.05],
        ],
        "poon-hill": [
          [83.68, 28.28],
          [83.7, 28.35],
          [83.71, 28.4],
          [83.69, 28.44],
        ],
        "snowman-trek": [
          [89.18, 27.43],
          [89.3, 27.6],
          [89.45, 27.72],
          [89.5, 27.8],
        ],
        jomolhari: [
          [89.18, 27.43],
          [89.22, 27.6],
          [89.25, 27.75],
          [89.27, 27.85],
        ],
      };

      let map = null;
      let detailMapInstance = null;

      function renderDetailMap(t) {
        const container = document.getElementById("detailMap");
        if (!container) return;
        
        const coords = TREK_COORDS[t.id];
        if (!coords) {
          const wrap = container.closest(".detail-map-wrap");
          if (wrap) wrap.style.display = "none";
          const title = wrap ? wrap.previousElementSibling : null;
          if (title && title.textContent === "Interactive Trail Map") title.style.display = "none";
          return;
        }
        
        const lat = coords[1];
        const lon = coords[0];
        const isDark = document.body.classList.contains("dark");
        
        try {
          detailMapInstance = L.map('detailMap', {
            zoomControl: false,
            attributionControl: false
          }).setView([lat, lon], 12);
          
          L.control.zoom({ position: 'topright' }).addTo(detailMapInstance);

          const tileUrl = isDark 
            ? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
            : 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png';

          L.tileLayer(tileUrl, {
            maxZoom: 20
          }).addTo(detailMapInstance);

          const countryColor = COUNTRY_COLORS[t.country] || "#de5e3a";
          const customIcon = L.divIcon({
            className: 'custom-detail-map-marker',
            html: `<div style="
              width: 16px; 
              height: 16px; 
              background: ${countryColor}; 
              border: 2px solid white; 
              border-radius: 50%;
              box-shadow: 0 0 12px ${countryColor};
            "></div>`,
            iconSize: [16, 16],
            iconAnchor: [8, 8]
          });

          L.marker([lat, lon], { icon: customIcon }).addTo(detailMapInstance)
            .bindPopup(`<strong style="font-family:'Playfair Display',serif;font-size:0.85rem;color:var(--text);">${t.name}</strong><br><span style="font-size:0.75rem;color:var(--subtle);">Start: ${t.startPoint}</span>`)
            .openPopup();

          const path = TRAIL_PATHS[t.id];
          if (path && path.length >= 2) {
            const latLons = path.map(p => [p[1], p[0]]);
            L.polyline(latLons, {
              color: '#de5e3a',
              weight: 3,
              opacity: 0.85,
              dashArray: '6, 6'
            }).addTo(detailMapInstance);
            
            const bounds = L.latLngBounds(latLons);
            detailMapInstance.fitBounds(bounds, { padding: [20, 20] });
          }
        } catch(e) {
          console.error("Leaflet detail map initialization failed:", e);
        }
      }

      window.flyToTrekFromMap = function(id, country) {
        if (map) map.closePopup();
        
        // Close AI panel if it is open to focus on the trek details
        const aiPanel = document.getElementById("ai-panel");
        if (aiPanel && aiPanel.classList.contains("open")) {
          toggleAI();
        }
        
        flyToTrek(id, country);
      };

      function showMap() {
        setView("map");
        const mapBtn = document.getElementById("mapBtn");
        if (mapBtn) mapBtn.classList.add("active");
        setTimeout(renderMap, 50);
      }

      let renderMap = function() {
        const container = document.getElementById("map-container");
        if (!container) return;

        if (map) {
          map.invalidateSize();
          return;
        }

        const isDark = document.body.classList.contains("dark");
        
        // Initialize Leaflet map centered on Himalayas / South Asia
        map = L.map('map-container', {
          zoomControl: false
        }).setView([28.5, 82.0], 5);

        // Add custom zoom control at top-right
        L.control.zoom({ position: 'topright' }).addTo(map);

        const tileUrl = isDark 
          ? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
          : 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png';

        L.tileLayer(tileUrl, {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          subdomains: 'abcd',
          maxZoom: 20
        }).addTo(map);

        // Plot markers for ALL_TREKS
        ALL_TREKS.forEach((t) => {
          const coords = TREK_COORDS[t.id];
          if (!coords) return;
          const lat = coords[1];
          const lon = coords[0];

          const countryColor = COUNTRY_COLORS[t.country] || "#4A8A5A";
          const customIcon = L.divIcon({
            className: 'custom-map-marker',
            html: `<div style="
              width: 14px; 
              height: 14px; 
              background: ${countryColor}; 
              border: 2px solid white; 
              border-radius: 50%;
              box-shadow: 0 0 10px ${countryColor};
            "></div>`,
            iconSize: [14, 14],
            iconAnchor: [7, 7]
          });

          const marker = L.marker([lat, lon], { icon: customIcon }).addTo(map);

          const popupContent = `
            <div class="map-popup-card" style="font-family: 'DM Sans', sans-serif; padding: 4px; min-width: 160px; line-height: 1.4; color: var(--text);">
              <h4 style="font-family: 'Playfair Display', serif; margin: 0 0 4px 0; font-size: 0.95rem; font-weight: 700; color: var(--text);">${t.name}</h4>
              <div style="font-size: 0.72rem; color: var(--subtle); margin-bottom: 6px;">${t.country} · ${t.region}</div>
              <div style="font-size: 0.75rem; margin-bottom: 8px; color: var(--text);">
                <strong>${formatElev(t)}</strong> | <strong>${t.duration}</strong> | <strong style="text-transform: capitalize;">${t.difficulty}</strong>
              </div>
              <button onclick="window.flyToTrekFromMap('${t.id}', '${t.country}')" style="
                background: #de5e3a;
                color: #fff;
                border: none;
                padding: 6px 8px;
                font-size: 0.7rem;
                font-weight: 600;
                border-radius: 20px;
                cursor: pointer;
                width: 100%;
                text-transform: uppercase;
                letter-spacing: 0.5px;
              ">Explore Trek</button>
            </div>
          `;
          marker.bindPopup(popupContent);
        });

        // Plot trail lines
        Object.entries(TRAIL_PATHS).forEach(([tid, pts]) => {
          if (pts.length < 2) return;
          const latLons = pts.map(p => [p[1], p[0]]);
          L.polyline(latLons, {
            color: '#de5e3a',
            weight: 2,
            opacity: 0.5,
            dashArray: '5, 5'
          }).addTo(map);
        });

        // Legend control
        const legend = L.control({ position: 'bottomleft' });
        legend.onAdd = function() {
          const div = L.DomUtil.create('div', 'map-legend');
          div.style.background = isDark ? '#1a1208' : '#fff';
          div.style.padding = '8px 12px';
          div.style.border = '1px solid ' + (isDark ? '#2a2318' : '#e0d8cc');
          div.style.borderRadius = '4px';
          div.style.color = isDark ? '#f5f0e8' : '#1a1208';
          div.style.fontSize = '0.72rem';
          div.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';

          div.innerHTML = Object.entries(COUNTRY_COLORS)
            .map(([c, col]) => `
              <div style="display:flex; align-items:center; gap: 6px; margin-bottom: 4px;">
                <div style="width: 8px; height: 8px; border-radius: 50%; background: ${col}; border: 1px solid white;"></div>
                <span style="font-weight: 500;">${c}</span>
              </div>
            `).join('');
          return div;
        };
        legend.addTo(map);

        // Back button control
        const backBtn = L.control({ position: 'topleft' });
        backBtn.onAdd = function() {
          const btn = L.DomUtil.create('button', 'back-btn');
          btn.textContent = 'Back';
          btn.style.margin = '10px';
          btn.style.cursor = 'pointer';

          btn.onclick = function() {
            setView("country");
            showCountry(currentCountry);
            const mapBtn = document.getElementById("mapBtn");
            if (mapBtn) mapBtn.classList.remove("active");
          };
          return btn;
        };
        backBtn.addTo(map);
      }

      // ── AI TREK GENERATOR ──────────────────────────────────────
      function showAIGenerator() {
        setView("gen");
        const genBtn = document.getElementById("genBtn");
        if (genBtn) genBtn.classList.add("active");
        document.getElementById("gen-view").innerHTML = `
    <button class="back-btn" onclick="showCountry('${currentCountry}');const gb = document.getElementById('genBtn'); if (gb) gb.classList.remove('active')">Back</button>
    <div class="country-header"><div class="country-title">Generate a Trek</div><div class="country-count">AI-powered</div></div>
    <p style="font-size:.88rem;color:var(--subtle);margin-bottom:1.5rem;line-height:1.7">Describe a region, difficulty, season, or any combination — the AI will write a full trek profile for you.</p>
    <div class="gen-form">
      <label>Region or location</label>
      <input id="genRegion" type="text" placeholder="e.g. Spiti Valley, Arunachal Pradesh, Mustang Nepal">
      <label>Difficulty</label>
      <select id="genDiff"><option value="easy">Easy</option><option value="moderate" selected>Moderate</option><option value="hard">Hard</option></select>
      <label>Duration (days)</label>
      <input id="genDur" type="number" value="7" min="1" max="30">
      <label>Season / month</label>
      <input id="genSeason" type="text" placeholder="e.g. October, winter, post-monsoon">
      <label>Special interest (optional)</label>
      <input id="genInterest" type="text" placeholder="e.g. glaciers, culture, wildlife, snow peaks">
    </div>
    <button class="compare-go-btn" style="font-size:.85rem;padding:11px 28px" onclick="runGenerator()">Generate Trek Profile</button>
    <div class="gen-loading" id="genLoading"><div>Crafting your trek profile...</div><div class="gen-loading-bar"><div class="gen-loading-fill"></div></div></div>
    <div class="gen-result" id="genResult"><div class="gen-result-title" id="genResultTitle"></div><div class="gen-result-body" id="genResultBody"></div></div>
    ${getFooterHTML()}`;
      }

      function runGenerator() {
        const region = document.getElementById("genRegion").value.trim() || "Himalayas";
        const diff = document.getElementById("genDiff").value;
        const dur = parseInt(document.getElementById("genDur").value) || 7;
        const season = document.getElementById("genSeason").value.trim() || "autumn";
        const interest = document.getElementById("genInterest").value.trim() || "beautiful scenery";
        
        document.getElementById("genLoading").style.display = "block";
        document.getElementById("genResult").style.display = "none";
        
        // Simulate a minor generation delay for realism
        setTimeout(() => {
          const elev = diff === "easy" ? "2,800m" : diff === "moderate" ? "3,950m" : "4,900m";
          const dist = (dur * 6) + " km";
          const startPoints = {
            easy: ["Sankri", "Govindghat", "Yuksom", "Kasol"],
            moderate: ["Manali", "Besisahar", "Yuksom", "Leh"],
            hard: ["Leh", "Yuksom", "Spituk", "Loharjung"]
          };
          const start = startPoints[diff][Math.floor(Math.random() * startPoints[diff].length)];
          const name = region.replace(/valley|pass|trek/gi, "").trim() + " " + (diff === "hard" ? "Pass" : "Ridge") + " Trek";
          
          const overview = `The **${name}** is a spectacular ${diff} trekking trail located in the ${region} region. Designed for hikers looking for a combination of ${interest} and raw nature, this ${dur}-day trek takes you through majestic pine forests, alpine meadows, and pristine glacial streams.<br><br>The route is best attempted during the ${season} season when skies are clear and trail conditions are stable. Acclimatization is key, especially during the later phases of the trek as you approach the maximum altitude of ${elev}.`;
          
          // Generate day-by-day itinerary
          let itinHTML = "";
          for (let i = 1; i <= dur; i++) {
            if (i === 1) {
              itinHTML += `• <strong>Day 1:</strong> Arrival at ${start} — Acclimatization and briefing.<br>`;
            } else if (i === dur) {
              itinHTML += `• <strong>Day ${i}:</strong> Descend back to ${start} — Transfer for departure.<br>`;
            } else {
              itinHTML += `• <strong>Day ${i}:</strong> Hike to Campsite ${i} — Traverse through high terrains (${6 + i % 2} km).<br>`;
            }
          }
          
          const resultText = `
<strong>REGION:</strong> ${region}<br>
<strong>MAX ELEVATION:</strong> ${elev}<br>
<strong>DISTANCE:</strong> ${dist}<br>
<strong>START POINT:</strong> ${start}<br><br>

<strong>Overview</strong><br>
${overview}<br><br>

<strong>Day-by-Day Itinerary</strong><br>
${itinHTML}<br>

<strong>Best Time</strong><br>
Best done in ${season} due to optimal weather and visible trail markings.<br><br>

<strong>Essential Tips</strong><br>
• Pack layers as temperatures drop significantly at night.<br>
• Stay hydrated and watch for signs of altitude sickness.<br>
• Carry microspikes if trekking during early or late season snow.<br>
• Support local guides and minimize environmental footprint.
          `;
          
          document.getElementById("genLoading").style.display = "none";
          const res = document.getElementById("genResult");
          res.style.display = "block";
          document.getElementById("genResultTitle").textContent = name;
          document.getElementById("genResultBody").innerHTML = resultText;
        }, 1000);
      }

      // ── MY TREK LOG VIEW ──────────────────────────────────────
      function showLogView() {
        setView("log");
        const logViewBtn = document.getElementById("logViewBtn");
        if (logViewBtn) logViewBtn.classList.add("active");
        const logged = Object.entries(trekLog).filter(([, v]) => v && v.date);
        const totalKm = logged.reduce((sum, [id]) => {
          const t = ALL_TREKS.find((x) => x.id === id);
          return sum + (t ? parseInt(t.distance) || 0 : 0);
        }, 0);
        const totalDays = logged.reduce((sum, [id]) => {
          const t = ALL_TREKS.find((x) => x.id === id);
          return sum + (t ? t.durationDays || 0 : 0);
        }, 0);
        const maxElev = logged.reduce((max, [id]) => {
          const t = ALL_TREKS.find((x) => x.id === id);
          return t ? Math.max(max, t.elevM || 0) : max;
        }, 0);

        const entriesHTML =
          logged.length === 0
            ? `<div style="text-align: center; padding: 4rem 2rem; color: var(--mist); font-size: 0.95rem; background: var(--card-bg); border-radius: var(--radius); border: 1px dashed var(--border); margin-top: 1rem;">
                <div style="font-size: 1.5rem; font-family: 'Libre Caslon Text', serif; font-weight: bold; margin-bottom: 0.8rem; color: var(--gold);">Logs</div>
                <strong>No treks logged yet</strong>
                <div style="font-size: 0.8rem; margin-top: 0.4rem; opacity: 0.8;">Open any trek page and click "Log Trek" to record your adventure completed dates, ratings, notes, and gear checklists.</div>
               </div>`
            : logged
                .sort((a, b) =>
                  (b[1].date || "").localeCompare(a[1].date || ""),
                )
                .map(([id, entry]) => {
                  const t = ALL_TREKS.find((x) => x.id === id);
                  if (!t) return "";
                  const img = getImg(id, 120, 120);
                  return `<div class="log-entry" onclick="flyToTrek('${id}','${t.country}')">
        ${img ? `<img class="log-entry-img" src="${img}" loading="lazy" onerror="this.style.background='var(--deep)'">` : `<div class="log-entry-img"></div>`}
        <div class="log-entry-body">
          <div class="log-entry-name">${t.name}</div>
          <div class="log-entry-meta">${t.country} · ${t.region} · ${entry.date || "Date not set"}</div>
          ${entry.note ? `<div style="font-size:.75rem;color:var(--subtle);margin-top:3px;font-style:italic">"${entry.note}"</div>` : ""}
        </div>
        <div class="log-entry-rating">${entry.rating ? entry.rating + " / 5" : ""}</div>
      </div>`;
                })
                .join("");

        document.getElementById("log-view").innerHTML = `
    <button class="back-btn" onclick="showCountry('${currentCountry}');document.getElementById('logViewBtn').classList.remove('active')">Back</button>
    <div class="country-header"><div class="country-title">My Trek Log</div><div class="country-count">${logged.length} completed</div></div>
    ${
      logged.length > 0
        ? `<div class="stats-row">
      <div class="stat-box"><div class="stat-box-val">${logged.length}</div><div class="stat-box-key">Treks Done</div></div>
      <div class="stat-box"><div class="stat-box-val">${totalKm}km</div><div class="stat-box-key">Total Distance</div></div>
      <div class="stat-box"><div class="stat-box-val">${totalDays}</div><div class="stat-box-key">Trail Days</div></div>
      <div class="stat-box"><div class="stat-box-val">${maxElev}m</div><div class="stat-box-key">Highest Reached</div></div>
    </div>`
        : ""
    }
    ${entriesHTML}
    ${getFooterHTML()}`;
      }

      // --- COMMUNITY JOURNALS DATA ---
      const COMMUNITY_JOURNALS = [
        {
          id: "story-chadar-winter",
          title: "Surviving the -30°C Cold on the Zanskar River",
          trekId: "chadar-trek",
          trekName: "Chadar Trek",
          excerpt: "Walking on a thick sheet of glass-like ice while the Zanskar River flows underneath is a humbling experience. Here is how our expedition survived a sudden cold snap.",
          author: "Aravind Sharma",
          date: "Jan 2026",
          img: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=350&fit=crop&q=80"
        },
        {
          id: "story-hampta-crossing",
          title: "The Ultimate Shift: From Kullu Green to Lahaul Desert",
          trekId: "hampta-pass",
          trekName: "Hampta Pass",
          excerpt: "Standing on top of Hampta Pass at 4,268m felt like crossing a portal. On one side, green valleys; on the other, barren rock and glacier fields.",
          author: "Mira Deshmukh",
          date: "July 2025",
          img: "https://images.unsplash.com/photo-1609947017136-9daf32a5a0c3?w=600&h=350&fit=crop&q=80"
        },
        {
          id: "story-ebc-journey",
          title: "Standing Before Everest: My 12-Day Solo Journey",
          trekId: "everest-base-camp",
          trekName: "Everest Base Camp",
          excerpt: "The flight to Lukla was just the beginning. The journey to Everest Base Camp is as much a mental challenge as it is a physical ascent through history.",
          author: "Rohan Malhotra",
          date: "Oct 2025",
          img: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=600&h=350&fit=crop&q=80"
        },
        {
          id: "story-valley-flowers",
          title: "A Monsoon Dream in the Valley of Flowers",
          trekId: "valley-of-flowers",
          trekName: "Valley of Flowers",
          excerpt: "UNESCO got it right. Walking through mist and rain while 500 species of flowers bloom is pure poetry. Don't let the rains deter you.",
          author: "Anjali Sen",
          date: "Aug 2025",
          img: "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=600&h=350&fit=crop&q=80"
        }
      ];

      function renderJournalView() {
        const container = document.getElementById("journal-view");
        if (!container) return;

        // Calculate User Profile Stats
        const logged = Object.entries(trekLog).filter(([, v]) => v && v.date);
        const totalKm = logged.reduce((sum, [id]) => {
          const t = ALL_TREKS.find((x) => x.id === id);
          return sum + (t ? parseInt(t.distance) || 0 : 0);
        }, 0);
        const totalDays = logged.reduce((sum, [id]) => {
          const t = ALL_TREKS.find((x) => x.id === id);
          return sum + (t ? t.durationDays || 0 : 0);
        }, 0);
        const maxElev = logged.reduce((max, [id]) => {
          const t = ALL_TREKS.find((x) => x.id === id);
          return t ? Math.max(max, t.elevM || 0) : max;
        }, 0);

        // Render loadout checklist
        const defaultLoadout = [
          "Thermal Base Layers",
          "Waterproof Trekking Boots",
          "Down Insulation Jacket",
          "UV Protective Sunglasses",
          "Trekking Poles",
          "Acclimatization Medication (Diamox)",
          "Headlamp with spare batteries",
          "Rain Poncho"
        ];
        
        let checkedLoadout = [];
        try {
          checkedLoadout = JSON.parse(localStorage.getItem("tp_profile_loadout") || "[]");
        } catch (e) {
          checkedLoadout = [];
        }
        
        const loadoutHTML = defaultLoadout.map((item) => {
          const isChecked = checkedLoadout.includes(item);
          return `
            <label class="loadout-item">
              <input type="checkbox" ${isChecked ? 'checked' : ''} onchange="toggleLoadoutItem('${item}', this.checked)">
              <span>${item}</span>
            </label>
          `;
        }).join("");

        const journalsHTML = COMMUNITY_JOURNALS.map(j => {
          const trek = ALL_TREKS.find(x => x.id === j.trekId);
          const country = trek ? trek.country : "India";
          return `
            <div class="journal-card" onclick="flyToTrek('${j.trekId}', '${country}')">
              <div class="journal-card-visual">
                <img src="${j.img}" alt="${j.title}" loading="lazy">
                <div class="mist-overlay"></div>
              </div>
              <div class="journal-card-body">
                <div class="journal-card-meta">${j.trekName} &middot; ${j.date}</div>
                <h4 class="journal-card-title">${j.title}</h4>
                <p class="journal-card-excerpt">${j.excerpt}</p>
                <div class="journal-card-author">
                  <div class="journal-author-avatar">${j.author.charAt(0)}</div>
                  <span>By ${j.author}</span>
                </div>
              </div>
            </div>
          `;
        }).join("");

        container.innerHTML = `
          <div class="country-header">
            <div class="country-title">Expedition Journal</div>
            <div class="country-count">Active Dashboard</div>
          </div>
          
          <!-- Profile Dashboard -->
          <div class="profile-dashboard">
            <div class="profile-stat-panel">
              <div class="profile-stat-box">
                <div class="profile-stat-num" id="profileSummits">${logged.length}</div>
                <div class="profile-stat-label">Summits Reached</div>
              </div>
              <div class="profile-stat-box">
                <div class="profile-stat-num" id="profileElev">${maxElev}m</div>
                <div class="profile-stat-label">Max Elevation</div>
              </div>
              <div class="profile-stat-box">
                <div class="profile-stat-num" id="profileDist">${totalKm} km</div>
                <div class="profile-stat-label">Distance Logged</div>
              </div>
              <button class="icon-btn" onclick="showLogView()" style="width: 100%; border-radius: 4px; padding: 10px;">View Full Log →</button>
            </div>
            
            <div class="profile-loadout-panel">
              <div class="loadout-title-row">
                <h4 style="margin: 0; font-size: 1.1rem; color: var(--text);">Active Loadout Checklist</h4>
                <span style="font-size: 0.72rem; color: var(--gold); text-transform: uppercase; font-weight: 600;">Gear Inventory</span>
              </div>
              <div class="loadout-checklist-container">
                ${loadoutHTML}
              </div>
            </div>
          </div>

          <div class="country-header" style="margin-top: 3rem; margin-bottom: 1.5rem;">
            <div class="country-title">Community Stories</div>
            <div class="country-count">${COMMUNITY_JOURNALS.length} stories</div>
          </div>

          <!-- Masonry Grid for Journals -->
          <div class="journal-grid">
            ${journalsHTML}
          </div>
          ${getFooterHTML()}
        `;

        // Animate profile stats counters
        setTimeout(() => {
          animateCounter(document.getElementById("profileSummits"), logged.length.toString(), 800);
          animateCounter(document.getElementById("profileElev"), maxElev.toString() + "m", 800);
          animateCounter(document.getElementById("profileDist"), totalKm.toString() + " km", 800);
        }, 50);
      }

      function toggleLoadoutItem(item, checked) {
        let items = [];
        try {
          items = JSON.parse(localStorage.getItem("tp_profile_loadout") || "[]");
        } catch (e) {
          items = [];
        }
        if (checked) {
          if (!items.includes(item)) items.push(item);
        } else {
          items = items.filter(x => x !== item);
        }
        localStorage.setItem("tp_profile_loadout", JSON.stringify(items));
        showToast("Loadout updated");
      }

      function renderArchivesView() {
        const container = document.getElementById("archives-view");
        if (!container) return;

        const tools = [
          {
            title: "Saved Treks",
            desc: "Browse your bookmarked expeditions, mountain guides, and personal checklists.",
            action: "showSaved()",
            label: "Open Bookmarks"
          },
          {
            title: "Match Me Recommender",
            desc: "Answer a brief set of questions to discover your ideal Himalayan or Ghats trail.",
            action: "showRecommender()",
            label: "Start Matching"
          },
          {
            title: "Trek Calendar",
            desc: "Year-round seasonal guide showing which valleys and passes are open by month.",
            action: "showCalendar()",
            label: "View Calendar"
          },
          {
            title: "AI Trek Generator",
            desc: "Design custom itineraries in remote valleys powered by our expedition assistant.",
            action: "showAIGenerator()",
            label: "Generate Profile"
          },
          {
            title: "Fitness Quiz",
            desc: "Evaluate your endurance, altitude tolerance, and gear capability level.",
            action: "showQuiz()",
            label: "Start Evaluation"
          }
        ];

        const cardsHTML = tools.map(t => `
          <div class="archive-card" onclick="${t.action}">
            <h4 class="archive-card-title">${t.title}</h4>
            <p class="archive-card-desc">${t.desc}</p>
            <span class="archive-card-action">${t.label} &rarr;</span>
          </div>
        `).join("");

        container.innerHTML = `
          <div class="country-header" style="margin-bottom: 2rem;">
            <div class="country-title">Expedition Archives</div>
            <div class="country-count">Research Tools</div>
          </div>
          <div class="archives-grid">
            ${cardsHTML}
          </div>
          ${getFooterHTML()}
        `;
      }

      let currentTab = 'exploration';

      function switchNavTab(tab) {
        currentTab = tab;
        
        // Update active class on tab buttons
        const tabs = ['exploration', 'journal', 'archives', 'maps'];
        tabs.forEach(t => {
          const btn = document.getElementById(`navTab-${t}`);
          if (btn) btn.classList.toggle('active', t === tab);
        });

        // Hide headers / panels
        document.getElementById("explorationSubheader").style.display = "none";
        document.querySelector(".filter-bar").style.display = "none";
        document.getElementById("compare-panel").style.display = "none";

        if (tab === 'exploration') {
          document.getElementById("explorationSubheader").style.display = "flex";
          document.querySelector(".filter-bar").style.display = "flex";
          if (activeView === 'detail' && currentTrek) {
            setView('detail');
          } else {
            setView('country');
            renderCurrentView();
          }
        } else if (tab === 'journal') {
          setView('journal');
          renderJournalView();
        } else if (tab === 'archives') {
          setView('archives');
          renderArchivesView();
        } else if (tab === 'maps') {
          showMap();
        }
      }

      // ── MASTER setView — single source of truth ───────────────
      let masterSetViewRaw = function (v) {
        activeView = v;
        const MAP = {
          country: "trek-view",
          detail: "trek-detail",
          saved: "saved-view",
          log: "log-view",
          rec: "rec-view",
          compare: "compare-view",
          map: "map-view",
          gen: "gen-view",
          quiz: "quiz-view",
          cal: "cal-view",
          journal: "journal-view",
          archives: "archives-view",
        };
        // hide all
        Object.values(MAP).forEach((id) => {
          const el = document.getElementById(id);
          if (el) el.style.display = "none";
        });
        // show target
        const target = MAP[v];
        if (target) {
          const el = document.getElementById(target);
          if (el) {
            if (target === "journal-view" || target === "archives-view" || target === "map-view") {
              el.style.display = "flex";
            } else {
              el.style.display = "block";
            }
          }
        }
        // sync active buttons
        const BTNS = {
          map: "mapBtn",
          gen: "genBtn",
          log: "logViewBtn",
          quiz: "quizBtn",
          cal: "calBtn",
        };
        Object.entries(BTNS).forEach(([view, btnId]) => {
          const b = document.getElementById(btnId);
          if (b) b.classList.toggle("active", v === view);
        });
      };

      setView = function(v) {
        if (v === 'country') {
          document.getElementById("explorationSubheader").style.display = "flex";
          document.querySelector(".filter-bar").style.display = "flex";
        } else {
          document.getElementById("explorationSubheader").style.display = "none";
          document.querySelector(".filter-bar").style.display = "none";
        }

        let tabId = "exploration";
        if (v === 'map') tabId = "maps";
        else if (v === 'journal' || v === 'log') tabId = "journal";
        else if (v === 'archives' || ['rec', 'compare', 'saved', 'gen', 'quiz', 'cal'].includes(v)) tabId = "archives";
        
        const btn = document.getElementById(`navTab-${tabId}`);
        if (btn) {
          document.querySelectorAll(".nav-link-btn").forEach(b => b.classList.remove("active"));
          btn.classList.add("active");
        }

        masterSetViewRaw(v);
      };

      // ── SVG ELEVATION PROFILE with bezier curves and hover tooltips ──
      drawElevProfile = function(pts) {
        const chartContainer = document.querySelector(".elev-chart");
        if (!chartContainer) return;

        const W = 800, H = 140;
        const pad = 30;
        const min = Math.min(...pts);
        const max = Math.max(...pts);
        const scX = (W - pad * 2) / (pts.length - 1);
        const scY = (H - pad * 2 - 10) / (max - min || 1);
        
        const px = (i) => pad + i * scX;
        const py = (v) => H - pad - (v - min) * scY;

        // Build path data string for smooth bezier curve
        let pathLine = `M ${px(0)} ${py(pts[0])}`;
        for (let i = 1; i < pts.length; i++) {
          const x0 = px(i - 1), y0 = py(pts[i - 1]);
          const x1 = px(i), y1 = py(pts[i]);
          const cpX1 = x0 + (x1 - x0) / 2;
          const cpY1 = y0;
          const cpX2 = x0 + (x1 - x0) / 2;
          const cpY2 = y1;
          pathLine += ` C ${cpX1} ${cpY1}, ${cpX2} ${cpY2}, ${x1} ${y1}`;
        }

        const pathArea = `${pathLine} L ${px(pts.length - 1)} ${H - pad} L ${px(0)} ${H - pad} Z`;

        // Render SVG code
        const dotsHTML = pts.map((v, i) => `
          <circle cx="${px(i)}" cy="${py(v)}" r="5" fill="#f07146" stroke="#ffffff" stroke-width="2" 
                  class="elev-dot" data-val="${v}" data-day="${i + 1}" style="cursor: pointer; transition: r 0.2s;" />
        `).join("");

        chartContainer.innerHTML = `
          <svg viewBox="0 0 ${W} ${H}" width="100%" height="100%" style="overflow: visible; background: transparent;" id="elevSVG">
            <defs>
              <linearGradient id="elevGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#f07146" stop-opacity="0.35" />
                <stop offset="100%" stop-color="#f07146" stop-opacity="0.01" />
              </linearGradient>
            </defs>
            
            <!-- Grid Lines -->
            <line x1="${pad}" y1="${py(min)}" x2="${W - pad}" y2="${py(min)}" stroke="rgba(255,255,255,0.05)" stroke-width="1" />
            <line x1="${pad}" y1="${py(max)}" x2="${W - pad}" y2="${py(max)}" stroke="rgba(255,255,255,0.05)" stroke-width="1" />
            
            <!-- Axis text -->
            <text x="${pad - 10}" y="${py(min) + 4}" fill="rgba(255,255,255,0.4)" font-size="10" font-family="system-ui" text-anchor="end">${min}m</text>
            <text x="${pad - 10}" y="${py(max) + 4}" fill="rgba(255,255,255,0.4)" font-size="10" font-family="system-ui" text-anchor="end">${max}m</text>
            
            <!-- Area Gradient Fill -->
            <path d="${pathArea}" fill="url(#elevGrad)" />
            
            <!-- Smooth Path Line -->
            <path d="${pathLine}" fill="none" stroke="#f07146" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
            
            <!-- Interactivity Dots -->
            ${dotsHTML}
            
            <!-- Hover Tooltip Element -->
            <g id="chartTooltip" style="display: none; pointer-events: none; z-index: 100;">
              <rect width="70" height="34" rx="4" fill="rgba(18, 20, 22, 0.95)" stroke="rgba(255,255,255,0.15)" stroke-width="1" id="tooltipBg" />
              <text x="35" y="14" fill="#f07146" font-size="9" font-family="system-ui" font-weight="700" text-anchor="middle" id="tooltipElev">0m</text>
              <text x="35" y="26" fill="rgba(255,255,255,0.5)" font-size="8" font-family="system-ui" text-anchor="middle" id="tooltipDay">Day 1</text>
            </g>
          </svg>
        `;

        // Tooltip scripting
        const svg = document.getElementById("elevSVG");
        if (!svg) return;
        const tooltip = document.getElementById("chartTooltip");
        const tooltipElev = document.getElementById("tooltipElev");
        const tooltipDay = document.getElementById("tooltipDay");
        const dots = svg.querySelectorAll(".elev-dot");

        dots.forEach(dot => {
          dot.addEventListener("mouseenter", (e) => {
            dot.setAttribute("r", "7");
            const cx = parseFloat(dot.getAttribute("cx"));
            const cy = parseFloat(dot.getAttribute("cy"));
            const val = dot.getAttribute("data-val");
            const day = dot.getAttribute("data-day");

            if (tooltipElev) tooltipElev.textContent = val + "m";
            if (tooltipDay) tooltipDay.textContent = "Day " + day;

            if (tooltip) {
              tooltip.style.display = "block";
              const tx = Math.min(cx - 35, W - 75);
              const ty = Math.max(cy - 42, 5);
              tooltip.setAttribute("transform", `translate(${tx}, ${ty})`);
            }
          });

          dot.addEventListener("mouseleave", () => {
            dot.setAttribute("r", "5");
            if (tooltip) tooltip.style.display = "none";
          });
        });
      };

      // ── DEEP LINK ─────────────────────────────────────────────
      window.addEventListener("load", () => {
        const inp = document.getElementById("searchInput");
        if (inp) {
          inp.addEventListener("focus", () => {
            if (inp.value.trim()) {
              renderSuggestions(inp.value.trim());
            }
          });
        }
        const params = new URLSearchParams(window.location.search);
        const trekId = params.get("trek");
        if (trekId) {
          const t = ALL_TREKS.find((x) => x.id === trekId);
          if (t) {
            enterApp();
            setTimeout(() => {
              currentTrek = t;
              showDetail(t);
            }, 800);
          }
        }
      });

      // emoji stripping no longer needed

      // ═══════════════════════════════════════════════════
      // COMMUNITY REVIEWS
      // ═══════════════════════════════════════════════════
      let reviewPending = { stars: 0, trek: null };

      function getReviews(tid) {
        try {
          return JSON.parse(localStorage.getItem("tp_reviews_" + tid) || "[]");
        } catch (e) {
          return [];
        }
      }
      function saveReviews(tid, arr) {
        localStorage.setItem("tp_reviews_" + tid, JSON.stringify(arr));
      }
      function reviewAvg(arr) {
        if (!arr.length) return 0;
        return (arr.reduce((s, r) => s + r.stars, 0) / arr.length).toFixed(1);
      }

      function renderReviewSection(t) {
        const reviews = getReviews(t.id);
        const avg = reviewAvg(reviews);
        const starsDisplay = (n) =>
          "★".repeat(Math.round(n)) + "☆".repeat(5 - Math.round(n));
        return `
    <div class="review-section">
      <div class="section-title">Community Reviews</div>
      ${reviews.length ? `<div class="review-avg"><div class="review-avg-num">${avg}</div><div><div style="color:var(--gold);font-size:1rem">${starsDisplay(avg)}</div><div class="review-avg-sub">${reviews.length} review${reviews.length > 1 ? "s" : ""}</div></div></div>` : ""}
      <div class="review-form">
        <div style="font-size:.78rem;font-weight:600;color:var(--text);margin-bottom:.6rem">Leave a review</div>
        <div class="star-row" id="starRow_${t.id}">
          ${[1, 2, 3, 4, 5].map((n) => `<button class="star-btn" onclick="setReviewStar('${t.id}',${n})">★</button>`).join("")}
        </div>
        <input id="reviewName_${t.id}" type="text" placeholder="Your name" style="width:100%;background:var(--page-bg);border:1px solid var(--border);color:var(--text);padding:7px 10px;font-family:'DM Sans',sans-serif;font-size:.82rem;border-radius:3px;outline:none;margin-bottom:.5rem">
        <textarea id="reviewText_${t.id}" placeholder="Share your experience on this trek…"></textarea>
        <button class="compare-go-btn" style="font-size:.75rem;padding:7px 18px;margin-top:.5rem" onclick="submitReview('${t.id}')">Post Review</button>
      </div>
      <div id="reviewList_${t.id}">
        ${
          reviews.length === 0
            ? '<div style="font-size:.82rem;color:var(--mist);padding:.5rem 0">No reviews yet. Be the first.</div>'
            : reviews
                .slice()
                .reverse()
                .map(
                  (r) => `
          <div class="review-card">
            <div class="review-card-header">
              <span class="review-card-name">${r.name || "Anonymous"}</span>
              <span class="review-card-date">${r.date}</span>
            </div>
            <div class="review-card-stars">${"★".repeat(r.stars)}${"☆".repeat(5 - r.stars)}</div>
            <div class="review-card-text">${r.text}</div>
          </div>`,
                )
                .join("")
        }
      </div>
    </div>`;
      }

      function setReviewStar(tid, n) {
        reviewPending.stars = n;
        reviewPending.trek = tid;
        document
          .querySelectorAll(`#starRow_${tid} .star-btn`)
          .forEach((b, i) => {
            b.classList.toggle("lit", i < n);
          });
      }

      function submitReview(tid) {
        if (!reviewPending.stars) {
          showToast("Please select a star rating");
          return;
        }
        const name =
          (document.getElementById("reviewName_" + tid) || {}).value ||
          "Anonymous";
        const text =
          (document.getElementById("reviewText_" + tid) || {}).value || "";
        if (!text.trim()) {
          showToast("Please write something");
          return;
        }
        const reviews = getReviews(tid);
        reviews.push({
          stars: reviewPending.stars,
          name: name.trim().slice(0, 40),
          text: text.trim().slice(0, 500),
          date: new Date().toLocaleDateString("en-IN", {
            day: "numeric",
            month: "short",
            year: "numeric",
          }),
        });
        saveReviews(tid, reviews);
        reviewPending = { stars: 0, trek: null };
        showToast("Review posted. Thank you.");
        // Re-render review section
        const t = ALL_TREKS.find((x) => x.id === tid);
        if (t) showDetail(t);
      }

      // ═══════════════════════════════════════════════════
      // FITNESS DIFFICULTY QUIZ
      // ═══════════════════════════════════════════════════
      const QUIZ_QS = [
        {
          q: "What is your age range?",
          k: "age",
          opts: ["Under 20", "20 – 35", "35 – 50", "50+"],
        },
        {
          q: "How many days per week do you exercise?",
          k: "exercise",
          opts: ["0 – 1 days", "2 – 3 days", "4 – 5 days", "6 – 7 days"],
        },
        {
          q: "Can you walk continuously for 6–8 hours on flat terrain?",
          k: "endurance",
          opts: [
            "No, I get tired after 2 hrs",
            "Yes but only on flat ground",
            "Yes including moderate inclines",
            "Easily, even with a backpack",
          ],
        },
        {
          q: "Have you trekked before?",
          k: "experience",
          opts: [
            "Never trekked",
            "1 – 2 day treks only",
            "Multi-day Himalayan treks",
            "Regular high-altitude trekker",
          ],
        },
        {
          q: "How do you handle cold (below 5°C nights)?",
          k: "cold",
          opts: [
            "Badly — I struggle",
            "Manageable with gear",
            "Fine, I camp regularly",
            "No issue at all",
          ],
        },
        {
          q: "Any health conditions? (altitude sickness, cardiac, asthma)",
          k: "health",
          opts: [
            "Yes — relevant conditions",
            "Minor, well-managed",
            "No, fully healthy",
            "Athlete-level fitness",
          ],
        },
        {
          q: "How much weight can you carry comfortably for 8 hrs?",
          k: "weight",
          opts: ["Under 5 kg", "5 – 8 kg", "8 – 12 kg", "12 kg+"],
        },
      ];

      let quizAnswers = {};

      function showQuiz() {
        setView("quiz");
        const quizBtn = document.getElementById("quizBtn");
        if (quizBtn) quizBtn.classList.add("active");
        quizAnswers = {};
        renderQuizQ(0);
      }

      function renderQuizQ(qi) {
        const qv = document.getElementById("quiz-view");
        if (qi >= QUIZ_QS.length) {
          showQuizResult();
          return;
        }
        const q = QUIZ_QS[qi];
        const pct = Math.round((qi / QUIZ_QS.length) * 100);
        qv.innerHTML = `
    <button class="back-btn" onclick="showCountry('${currentCountry}');const qb = document.getElementById('quizBtn'); if (qb) qb.classList.remove('active')">Back</button>
    <div class="country-header"><div class="country-title">Fitness Quiz</div><div class="country-count">Question ${qi + 1} of ${QUIZ_QS.length}</div></div>
    <div class="quiz-progress"><div class="quiz-progress-fill" style="width:${pct}%"></div></div>
    <div style="font-family:'Playfair Display',serif;font-size:1.2rem;color:var(--text);margin-bottom:1.2rem;line-height:1.4">${q.q}</div>
    <div class="rec-opts">
      ${q.opts.map((o, i) => `<div class="rec-opt" onclick="pickQuiz('${q.k}',${i},${qi + 1})">${o}</div>`).join("")}
    </div>`;
      }

      function pickQuiz(k, v, next) {
        quizAnswers[k] = v;
        renderQuizQ(next);
      }

      function showQuizResult() {
        // Score: 0-3 per question, max 21
        const scores = Object.values(quizAnswers);
        const total = scores.reduce((s, v) => s + v, 0);
        const maxScore = (QUIZ_QS.length - 1) * 3;
        const pct = total / maxScore;

        let level, color, rec, treks;
        if (pct < 0.3) {
          level = "Beginner";
          color = "#2C4A2E";
          rec =
            "Start with short, low-altitude day treks. Focus on building walking endurance over 3–6 months before attempting multi-day routes.";
          treks = ALL_TREKS.filter((t) => t.difficulty === "easy").slice(0, 4);
        } else if (pct < 0.55) {
          level = "Intermediate";
          color = "#7A6A00";
          rec =
            "You can handle moderate multi-day treks up to 4000m. Train with a loaded backpack on inclines for 8–12 weeks before hard treks.";
          treks = ALL_TREKS.filter((t) => t.difficulty === "moderate").slice(
            0,
            4,
          );
        } else if (pct < 0.78) {
          level = "Advanced";
          color = "#8B3A2A";
          rec =
            "Hard Himalayan treks are within reach. Ensure altitude acclimatization protocols and invest in quality gear before attempting 5000m+ routes.";
          treks = ALL_TREKS.filter((t) => t.difficulty === "hard").slice(0, 4);
        } else {
          level = "Elite";
          color = "#4A3A8A";
          rec =
            "You are ready for the most demanding routes. Technical passes, long glaciers, and expedition-style treks are your playground.";
          treks = ALL_TREKS.filter((t) => t.elevM >= 4800).slice(0, 4);
        }

        // Fitness attribute breakdown
        const attrs = [
          { label: "Endurance", val: (quizAnswers.endurance || 0) / 3 },
          { label: "Experience", val: (quizAnswers.experience || 0) / 3 },
          { label: "Cold Tolerance", val: (quizAnswers.cold || 0) / 3 },
          { label: "Carry Strength", val: (quizAnswers.weight || 0) / 3 },
          { label: "Overall", val: pct },
        ];

        const qv = document.getElementById("quiz-view");
        qv.innerHTML = `
    <button class="back-btn" onclick="showCountry('${currentCountry}');document.getElementById('quizBtn').classList.remove('active')">Back</button>
    <div class="country-header"><div class="country-title">Your Result</div></div>
    <div class="quiz-result">
      <div class="quiz-result-badge" style="background:${color}22;color:${color};border:1px solid ${color}44">${level} Trekker</div>
      <div class="quiz-result-title">Fitness Score: ${Math.round(pct * 100)} / 100</div>
      <div style="font-size:.88rem;color:var(--subtle);line-height:1.7;margin-bottom:1.2rem">${rec}</div>
      <div class="fitness-score">
        ${attrs
          .map(
            (a) => `
          <div style="display:flex;align-items:center;gap:.8rem;margin-bottom:.6rem">
            <div style="font-size:.7rem;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:var(--mist);width:100px;flex-shrink:0">${a.label}</div>
            <div class="fitness-bar-wrap" style="flex:1"><div class="fitness-bar-fill" style="width:${Math.round(a.val * 100)}%;background:${a.val > 0.7 ? "#10b981" : a.val > 0.4 ? "#f59e0b" : "#ef4444"}"></div></div>
            <div style="font-size:.72rem;color:var(--gold);width:30px;text-align:right">${Math.round(a.val * 100)}%</div>
          </div>`,
          )
          .join("")}
      </div>
    </div>
    <div style="margin-top:1.5rem">
      <div class="section-title" style="margin-bottom:.8rem">Recommended for you</div>
      <div class="trek-grid">${treks.map((t, i) => trekCardHTML(t, i)).join("")}</div>
    </div>
    ${getFooterHTML()}`;
      }

      // ═══════════════════════════════════════════════════
      // DISTANCE CALCULATOR (on map)
      // ═══════════════════════════════════════════════════
      let distPoints = [];

      function haversine(lat1, lon1, lat2, lon2) {
        const R = 6371,
          dLat = ((lat2 - lat1) * Math.PI) / 180,
          dLon = ((lon2 - lon1) * Math.PI) / 180;
        const a =
          Math.sin(dLat / 2) ** 2 +
          Math.cos((lat1 * Math.PI) / 180) *
            Math.cos((lat2 * Math.PI) / 180) *
            Math.sin(dLon / 2) ** 2;
        return Math.round(R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
      }

      function injectDistCalc() {
        const mv = document.getElementById("map-view");
        if (!mv || document.getElementById("distCalcPanel")) return;
        const panel = document.createElement("div");
        panel.id = "distCalcPanel";
        panel.className = "dist-calc-panel";
        panel.innerHTML = `
    <div class="dist-calc-title">Distance Between Treks</div>
    <div class="dist-calc-slot" id="dslot0">Click a trek pin to select Start</div>
    <div style="text-align:center;font-size:.65rem;color:var(--mist);margin:.2rem 0">to</div>
    <div class="dist-calc-slot" id="dslot1">Click another pin to select End</div>
    <div class="dist-result" id="distResult" style="display:none"></div>
    <div class="dist-result-sub" id="distResultSub" style="display:none">straight-line distance</div>
    <button class="icon-btn" onclick="clearDist()" style="width:100%;margin-top:.7rem;font-size:.68rem;text-align:center;border-radius:20px">Clear</button>`;
        mv.appendChild(panel);
      }

      function addDistPoint(t) {
        const c = TREK_COORDS[t.id];
        if (!c) return;
        distPoints = distPoints.filter((x) => x.id !== t.id);
        distPoints.push({ id: t.id, name: t.name, lat: c[1], lon: c[0] });
        if (distPoints.length > 2) distPoints.shift();
        updateDistUI();
      }

      function updateDistUI() {
        const s0 = document.getElementById("dslot0"),
          s1 = document.getElementById("dslot1"),
          r = document.getElementById("distResult"),
          rs = document.getElementById("distResultSub");
        if (!s0) return;
        s0.textContent = distPoints[0]
          ? distPoints[0].name
          : "Click a trek pin to select Start";
        s0.classList.toggle("filled", !!distPoints[0]);
        s1.textContent = distPoints[1]
          ? distPoints[1].name
          : "Click another pin to select End";
        s1.classList.toggle("filled", !!distPoints[1]);
        if (distPoints.length === 2 && r) {
          const km = haversine(
            distPoints[0].lat,
            distPoints[0].lon,
            distPoints[1].lat,
            distPoints[1].lon,
          );
          r.textContent = km + " km";
          r.style.display = "block";
          rs.style.display = "block";
        } else if (r) {
          r.style.display = "none";
          rs.style.display = "none";
        }
      }

      function clearDist() {
        distPoints = [];
        updateDistUI();
      }

      // Patch showMap to inject distCalc and wire pins
      const _origRenderMap = renderMap;
      renderMap = function () {
        _origRenderMap();
        injectDistCalc();
        // Wire pins to also add dist point
        setTimeout(() => {
          document.querySelectorAll(".map-pin").forEach((pin) => {
            const origClick = pin.onclick;
            pin.addEventListener("click", (e) => {
              const label = pin.querySelector(".map-pin-label");
              if (!label) return;
              const t = ALL_TREKS.find((x) => x.name === label.textContent);
              if (t) addDistPoint(t);
            });
          });
        }, 200);
      };

      // ═══════════════════════════════════════════════════
      // PDF EXPORT (packing list)
      // ═══════════════════════════════════════════════════
      function exportPackingPDF(t) {
        // Build plain-text content, open in new tab as print-ready HTML
        const lines = t.gear || [];
        const tips = Object.entries(t.tips || {});
        const html = `<!DOCTYPE html><html><head><meta charset="UTF-8">
<title>${t.name} — Packing List</title>
<style>
  body{font-family:Georgia,serif;max-width:600px;margin:40px auto;color:#1A1208;line-height:1.7}
  h1{font-size:1.8rem;border-bottom:2px solid #de5e3a;padding-bottom:.5rem;margin-bottom.5rem}
  h2{font-size:1rem;text-transform:uppercase;letter-spacing:2px;color:#6B6357;margin:1.5rem 0 .5rem}
  .meta{display:grid;grid-template-columns:repeat(3,1fr);gap:.5rem;background:#F5F0E8;padding:.8rem;border-radius:4px;margin-bottom:1.2rem;font-size:.85rem}
  .meta-label{font-size:.65rem;text-transform:uppercase;letter-spacing:1px;color:#8BA89A;margin-bottom:2px}
  .meta-val{font-weight:700}
  ul{padding-left:1.2rem}
  li{margin-bottom:.3rem;font-size:.9rem}
  li.checked::marker{content:'✓ '}
  .tip-row{display:flex;gap.5rem;margin-bottom:.4rem;font-size:.85rem}
  .tip-key{font-weight:700;min-width:120px;flex-shrink:0}
  .footer{margin-top:2rem;font-size:.7rem;color:#8BA89A;border-top:1px solid #e0d8cc;padding-top:.8rem}
  @media print{body{margin:20px}}

/* ── HERO ENHANCEMENTS ──────────────────────────────── */
#hero{background:linear-gradient(160deg,#0d0b06 0%,#1a1208 50%,#0f1a0e 100%)}
.hero-title{text-shadow:0 4px 40px rgba(201,147,42,.25)}
.explore-btn{box-shadow:0 4px 24px rgba(201,147,42,.35);letter-spacing:3px;font-size:.82rem}
.explore-btn:hover{box-shadow:0 8px 40px rgba(201,147,42,.5);transform:translateY(-3px)}
.hero-stats{gap:4rem}
.stat-num{font-size:2.2rem;background:linear-gradient(135deg,var(--cream),var(--gold));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
/* animated mountain silhouette */
.mountain-bg{animation:mountainDrift 18s ease-in-out infinite alternate}
@keyframes mountainDrift{0%{transform:scale(1) translateX(0)}100%{transform:scale(1.04) translateX(-8px)}}

/* ── HEADER IMPROVEMENTS ────────────────────────────── */
.app-header{padding:.7rem 1.2rem;gap:.8rem;box-shadow:0 2px 20px rgba(0,0,0,.4)}
.header-actions{gap:.35rem}
.icon-btn{font-size:.68rem;padding:5px 11px;letter-spacing:.5px;border-radius:20px;font-weight:500;white-space:nowrap}
.app-nav{gap:.3rem}
.nav-country{font-size:.68rem;padding:4px 11px}

/* ── COUNTRY BANNER ─────────────────────────────────── */
.country-banner{position:relative;height:160px;border-radius:8px;overflow:hidden;margin-bottom:1.5rem;display:flex;align-items:flex-end;padding:1.2rem 1.4rem}
.country-banner-img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.country-banner-overlay{position:absolute;inset:0;background:linear-gradient(to top,rgba(26,18,8,.9) 0%,rgba(26,18,8,.2) 70%)}
.country-banner-content{position:relative;z-index:1}
.country-banner-title{font-family:'Playfair Display',serif;font-size:2rem;font-weight:900;color:var(--cream);line-height:1;letter-spacing:-1px}
.country-banner-meta{font-size:.7rem;color:var(--gold);letter-spacing:2px;text-transform:uppercase;margin-top:.3rem}

/* ── TREK GRID MASONRY ──────────────────────────────── */
.trek-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:1.2rem;align-items:start}
.trek-card{border-radius:8px;transition:transform .22s cubic-bezier(.34,1.56,.64,1),box-shadow .22s ease}
.trek-card:hover{transform:translateY(-6px) scale(1.01)}
.card-visual{border-radius:8px 8px 0 0;height:150px}
.card-body{padding:1rem 1.1rem .9rem}
/* stagger cards */
.trek-card:nth-child(3n+2){margin-top:14px}
.trek-card:nth-child(3n+3){margin-top:6px}

/* ── DETAIL PAGE ────────────────────────────────────── */
.detail-hero{height:380px;border-radius:0}
/* parallax handled via JS */
.detail-hero-img{position:absolute;inset:-30px;width:calc(100% + 60px);height:calc(100% + 60px);object-fit:cover;will-change:transform}
.detail-overlay{background:linear-gradient(to top,rgba(26,18,8,.92) 0%,rgba(26,18,8,.35) 45%,rgba(26,18,8,.05) 100%)}
.detail-name{text-shadow:0 2px 20px rgba(0,0,0,.5);letter-spacing:-1px}
.detail-stats-row{border-radius:8px;margin-bottom:1.5rem}
.ds-item{border-right:1px solid rgba(255,255,255,.06);padding:.2rem}
.ds-item:last-child{border-right:none}
/* section titles */
.section-title{font-size:1.1rem;letter-spacing:-.3px}

/* ── SKELETON SHIMMER EXACT MATCH ───────────────────── */
.skel-card{background:var(--card-bg);border:1px solid var(--border);border-radius:8px;overflow:hidden;height:230px}
.skel-img{height:150px;background:linear-gradient(90deg,rgba(0,0,0,.06) 25%,rgba(0,0,0,.1) 50%,rgba(0,0,0,.06) 75%);background-size:400% 100%;animation:shimmer 1.4s infinite}
.skel-line{height:14px;border-radius:3px;margin:10px 12px 6px;background:linear-gradient(90deg,rgba(0,0,0,.06) 25%,rgba(0,0,0,.1) 50%,rgba(0,0,0,.06) 75%);background-size:400% 100%;animation:shimmer 1.4s infinite}
.skel-line.short{width:60%;margin-top:0}

/* ── MOBILE RESPONSIVE ──────────────────────────────── */
@media(max-width:700px){
  .app-header{padding:.6rem .8rem;gap:.5rem}
  .header-actions{gap:.25rem;flex-wrap:wrap}
  .icon-btn{font-size:.62rem;padding:4px 8px}
  .filter-bar{padding:.4rem .8rem;gap:.35rem}
  .filter-bar select{font-size:.68rem;padding:4px 8px}
  #trek-view{padding:1rem .8rem}
  .country-banner{height:120px}
  .country-banner-title{font-size:1.5rem}
  .detail-body{padding:1.2rem .8rem}
  .detail-stats-row{grid-template-columns:repeat(3,1fr)}
  .trek-grid{grid-template-columns:1fr 1fr;gap:.8rem}
  .trek-card:nth-child(3n+2),.trek-card:nth-child(3n+3){margin-top:0}
  .price-tiers{grid-template-columns:repeat(3,1fr)}
  .tips-grid{grid-template-columns:1fr}
  .ai-panel{width:100vw}
  .compare-slots{gap:.5rem}
  .hero-stats{gap:2rem}
  .hero-title{font-size:clamp(2.8rem,12vw,5rem)}
}
@media(max-width:420px){
  .trek-grid{grid-template-columns:1fr}
  .header-actions .icon-btn:nth-child(n+6){display:none}
}

/* ── COMPARE TABLE WINNER HIGHLIGHT ─────────────────── */
.compare-winner{background:rgba(201,147,42,.12);color:var(--gold);font-weight:600}

/* ── ELEVATION CHART LABELS ─────────────────────────── */
.elev-day-labels{display:flex;justify-content:space-between;padding:2px 24px 0;margin-top:-4px;margin-bottom:1.2rem}
.elev-day-label{font-size:.6rem;color:var(--mist);text-align:center}

/* ── AI LOADING ─────────────────────────────────────── */
.ai-typing{display:flex;gap:4px;align-items:center;padding:.7rem .9rem}
.ai-dot{width:6px;height:6px;border-radius:50%;background:var(--gold);animation:aiPulse 1.2s ease-in-out infinite}
.ai-dot:nth-child(2){animation-delay:.2s}
.ai-dot:nth-child(3){animation-delay:.4s}
@keyframes aiPulse{0%,80%,100%{transform:scale(.8);opacity:.4}40%{transform:scale(1.2);opacity:1}}

/* ── TREK CALENDAR ──────────────────────────────────── */
#cal-view{flex:1;overflow-y:auto;display:none;padding:1.5rem}
.cal-header{display:flex;align-items:center;gap:1rem;margin-bottom:1.5rem;flex-wrap:wrap}
.cal-title{font-family:'Playfair Display',serif;font-size:1.8rem;font-weight:700;color:var(--text)}
.cal-month-nav{display:flex;align-items:center;gap:.5rem;margin-left:auto}
.cal-nav-btn{background:var(--card-bg);border:1px solid var(--border);color:var(--text);width:32px;height:32px;border-radius:50%;cursor:pointer;font-size:1rem;display:flex;align-items:center;justify-content:center;transition:all .2s;font-family:'DM Sans',sans-serif;font-weight:700}
.cal-nav-btn:hover{border-color:var(--gold);color:var(--gold)}
.cal-month-label{font-family:'Playfair Display',serif;font-size:1.1rem;font-weight:700;color:var(--text);min-width:130px;text-align:center}
.cal-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;margin-bottom:2rem}
@media(max-width:600px){.cal-grid{grid-template-columns:1fr 1fr}}
.cal-month-card{background:var(--card-bg);border:1px solid var(--border);border-radius:8px;padding:1rem;transition:border .2s}
.cal-month-card.active{border-color:var(--gold);background:rgba(201,147,42,.04)}
.cal-month-name{font-family:'Playfair Display',serif;font-size:1rem;font-weight:700;color:var(--text);margin-bottom:.7rem;display:flex;align-items:center;justify-content:space-between}
.cal-month-count{font-size:.65rem;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:var(--gold)}
.cal-trek-chip{display:flex;align-items:center;gap:.5rem;padding:5px 8px;border-radius:5px;margin-bottom:.4rem;cursor:pointer;transition:background .15s;border:1px solid transparent}
.cal-trek-chip:hover{background:var(--page-bg);border-color:var(--border)}
.cal-chip-dot{width:8px;height:8px;border-radius:50%;flex-shrink:0}
.cal-chip-name{font-size:.75rem;font-weight:500;color:var(--text);flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.cal-chip-season{font-size:.62rem;padding:1px 6px;border-radius:10px;white-space:nowrap;font-weight:600}
.cal-chip-best{background:rgba(44,74,46,.2);color:#4A8A5A}
.cal-chip-ok{background:rgba(201,147,42,.12);color:var(--gold)}
/* Single month detail */
.cal-month-detail{background:var(--card-bg);border:1px solid var(--gold);border-radius:8px;padding:1.2rem;margin-top:1.5rem}
.cal-detail-title{font-family:'Playfair Display',serif;font-size:1.2rem;font-weight:700;color:var(--text);margin-bottom:1rem}
.cal-trek-row{display:grid;grid-template-columns:1fr auto auto auto;gap:.8rem;align-items:center;padding:.5rem .3rem;border-bottom:1px solid var(--border);cursor:pointer;transition:background .15s;border-radius:4px}
.cal-trek-row:hover{background:var(--page-bg)}
.cal-trek-row:last-child{border-bottom:none}
.cal-trek-name{font-size:.85rem;font-weight:600;color:var(--text)}
.cal-trek-region{font-size:.68rem;color:var(--mist)}
.cal-trek-diff{font-size:.65rem;font-weight:700;letter-spacing:1px;text-transform:uppercase;padding:2px 8px;border-radius:10px}
.cal-trek-price{font-size:.75rem;font-weight:600;color:var(--gold)}

</style></head><body>
<h1>${t.name}</h1>
<div class="meta">
  <div><div class="meta-label">Region</div><div class="meta-val">${t.region}</div></div>
  <div><div class="meta-label">Elevation</div><div class="meta-val">${formatElev(t)}</div></div>
  <div><div class="meta-label">Duration</div><div class="meta-val">${t.duration}</div></div>
  <div><div class="meta-label">Distance</div><div class="meta-val">${t.distance}</div></div>
  <div><div class="meta-label">Difficulty</div><div class="meta-val" style="text-transform:capitalize">${t.difficulty}</div></div>
  <div><div class="meta-label">Start Point</div><div class="meta-val">${t.startPoint}</div></div>
</div>
<h2>Packing Checklist</h2>
<ul>${lines.map((g) => `<li>${g}</li>`).join("")}</ul>
<h2>Essential Tips</h2>
${tips.map(([k, v]) => `<div class="tip-row"><span class="tip-key">${k}</span><span>${v}</span></div>`).join("")}
<h2>Best Months</h2>
<p>${t.bestMonths.map((m) => ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][m]).join(", ")}</p>
<div class="footer">Generated by Trekpedia &middot; Prices and details current as of 2024–25 &middot; Always verify with local operators before trekking.</div>
</body></html>`;

        const blob = new Blob([html], { type: "text/html" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download =
          t.name.replace(/\s+/g, "-").toLowerCase() + "-packing-list.html";
        a.click();
        URL.revokeObjectURL(url);
        showToast("Packing list downloaded. Open in browser and print as PDF.");
      }

      // Caching is handled cleanly by the dedicated sw.js file service worker registered at the bottom.

      // reviews+pdf already wired into showDetail

      // quiz handled in master setView

      // ═══════════════════════════════════════════════════
      // TREK CALENDAR
      // ═══════════════════════════════════════════════════
      const CAL_MONTHS = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      const CAL_SHORT = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      let calSelectedMonth = new Date().getMonth();

      const DIFF_COLOR = {
        easy: "#2C4A2E",
        moderate: "#8B6914",
        hard: "#8B3A2A",
      };

      function showCalendar() {
        setView("cal");
        renderCalendar();
      }

      function renderCalendar() {
        const cv = document.getElementById("cal-view");
        // Build 12-month grid
        const monthCards = CAL_MONTHS.map((mname, mi) => {
          const best = ALL_TREKS.filter((t) => t.bestMonths.includes(mi));
          const ok = ALL_TREKS.filter((t) => t.okMonths.includes(mi));
          const total = best.length + ok.length;
          const isActive = mi === calSelectedMonth;
          const chips = [
            ...best.slice(0, 3).map((t) => ({ t, type: "best" })),
            ...ok.slice(0, 2).map((t) => ({ t, type: "ok" })),
          ];
          return `<div class="cal-month-card ${isActive ? "active" : ""}" onclick="selectCalMonth(${mi})">
      <div class="cal-month-name">
        <span>${mname}</span>
        <span class="cal-month-count">${total} open</span>
      </div>
      ${chips
        .map(
          ({ t, type }) => `
        <div class="cal-trek-chip" onclick="event.stopPropagation();flyToTrek('${t.id}','${t.country}')">
          <div class="cal-chip-dot" style="background:${DIFF_COLOR[t.difficulty]}"></div>
          <span class="cal-chip-name">${t.name}</span>
          <span class="cal-chip-season ${type === "best" ? "cal-chip-best" : "cal-chip-ok"}">${type === "best" ? "Best" : "OK"}</span>
        </div>`,
        )
        .join("")}
      ${total > 5 ? `<div style="font-size:.65rem;color:var(--mist);padding:3px 8px">+${total - 5} more</div>` : ""}
    </div>`;
        }).join("");

        // Detailed list for selected month
        const selBest = ALL_TREKS.filter((t) =>
          t.bestMonths.includes(calSelectedMonth),
        ).sort((a, b) => a.difficulty.localeCompare(b.difficulty));
        const selOk = ALL_TREKS.filter((t) =>
          t.okMonths.includes(calSelectedMonth),
        );

        const detailRows = (treks, label, color) =>
          treks.length === 0
            ? ""
            : `<div style="font-size:.68rem;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:${color};margin:.8rem 0 .4rem">${label} — ${treks.length} treks</div>` +
              treks
                .map(
                  (t) => `
    <div class="cal-trek-row" onclick="flyToTrek('${t.id}','${t.country}')">
      <div>
        <div class="cal-trek-name">${t.name}</div>
        <div class="cal-trek-region">${t.country} · ${t.region}</div>
      </div>
      <span class="cal-trek-diff diff-${t.difficulty}">${t.difficulty}</span>
      <span style="font-size:.72rem;color:var(--mist)">${t.duration}</span>
      <span class="cal-trek-price">${t.price ? "Rs " + (t.price.standard / 1000).toFixed(0) + "K" : ""}</span>
    </div>`,
                )
                .join("");

        cv.innerHTML = `
    <div class="cal-header">
      <div class="cal-title">Trek Calendar</div>
      <div style="font-size:.78rem;color:var(--mist)">Pick any month to see which treks are open</div>
    </div>
    <div class="cal-grid">${monthCards}</div>
    <div class="cal-month-detail">
      <div class="cal-detail-title">${CAL_MONTHS[calSelectedMonth]} — all open treks</div>
      ${
        selBest.length + selOk.length === 0
          ? '<div style="color:var(--mist);font-size:.85rem">No treks typically open this month.</div>'
          : detailRows(selBest, "Best Season", "#10b981") +
            detailRows(selOk, "Also Possible", "#de5e3a")
      }
    </div>
    ${getFooterHTML()}`;
      }

      function selectCalMonth(mi) {
        calSelectedMonth = mi;
        renderCalendar();
        // scroll to detail
        setTimeout(() => {
          const detail = document.querySelector(".cal-month-detail");
          if (detail)
            detail.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }, 80);
      }

      function showSkeletons(containerId, count = 6) {
        const el = document.getElementById(containerId);
        if (!el) return;
        el.innerHTML =
          '<div class="trek-grid">' +
          Array(count)
            .fill(0)
            .map(
              () => `
      <div class="skel-card">
        <div class="skel-img"></div>
        <div class="skel-line"></div>
        <div class="skel-line short"></div>
      </div>`,
            )
            .join("") +
          "</div>";
      }

      // ═══════════════════════════════════════════════════
      // HERO CANVAS — floating particles + stars
      // ═══════════════════════════════════════════════════
      (function initHeroCanvas() {
        const canvas = document.getElementById("heroCanvas");
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        let W,
          H,
          particles = [],
          mouseX = 0,
          mouseY = 0;

        function resize() {
          W = canvas.width = window.innerWidth;
          H = canvas.height = window.innerHeight;
        }
        resize();
        window.addEventListener("resize", resize);

        // Create particles: mix of stars + slow drifting motes
        function createParticles() {
          particles = [];
          // Stars — fixed bright points
          for (let i = 0; i < 120; i++) {
            particles.push({
              x: Math.random() * W,
              y: Math.random() * H * 0.75,
              r: Math.random() * 1.2 + 0.2,
              alpha: Math.random() * 0.6 + 0.2,
              twinkleSpeed: Math.random() * 0.02 + 0.005,
              twinkleOffset: Math.random() * Math.PI * 2,
              vx: 0,
              vy: 0,
              type: "star",
            });
          }
          // Slow rising motes (like campfire sparks / dust)
          for (let i = 0; i < 35; i++) {
            particles.push({
              x: Math.random() * W,
              y: H * 0.4 + Math.random() * H * 0.6,
              r: Math.random() * 1.5 + 0.5,
              alpha: 0,
              maxAlpha: Math.random() * 0.4 + 0.1,
              vy: -(Math.random() * 0.3 + 0.05),
              vx: (Math.random() - 0.5) * 0.15,
              life: 0,
              maxLife: Math.random() * 300 + 150,
              type: "mote",
            });
          }
        }
        createParticles();

        // Mountain parallax on mouse move
        document.getElementById("hero").addEventListener("mousemove", (e) => {
          mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
          mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
          const far = document.getElementById("mtnFar");
          const mid = document.getElementById("mtnMid");
          const near = document.getElementById("mtnNear");
          if (far)
            far.style.transform = `translateX(${mouseX * -8}px) translateY(${mouseY * 3}px)`;
          if (mid)
            mid.style.transform = `translateX(${mouseX * -14}px) translateY(${mouseY * 5}px)`;
          if (near)
            near.style.transform = `translateX(${mouseX * -22}px) translateY(${mouseY * 8}px)`;
        });

        let frame = 0;
        function draw() {
          ctx.clearRect(0, 0, W, H);
          frame++;

          particles.forEach((p) => {
            if (p.type === "star") {
              const twinkle =
                Math.sin(frame * p.twinkleSpeed + p.twinkleOffset) * 0.3 + 0.7;
              ctx.beginPath();
              ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
              ctx.fillStyle = `rgba(255,245,220,${p.alpha * twinkle})`;
              ctx.fill();
              // occasional cross-sparkle on bright stars
              if (p.r > 1 && twinkle > 0.95) {
                ctx.strokeStyle = `rgba(255,245,200,${p.alpha * 0.4})`;
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                ctx.moveTo(p.x - p.r * 3, p.y);
                ctx.lineTo(p.x + p.r * 3, p.y);
                ctx.moveTo(p.x, p.y - p.r * 3);
                ctx.lineTo(p.x, p.y + p.r * 3);
                ctx.stroke();
              }
            } else {
              // mote / spark
              p.life++;
              p.x += p.vx + Math.sin(frame * 0.01 + p.y) * 0.1;
              p.y += p.vy;
              // fade in/out
              if (p.life < 40) p.alpha = (p.life / 40) * p.maxAlpha;
              else if (p.life > p.maxLife - 60)
                p.alpha = ((p.maxLife - p.life) / 60) * p.maxAlpha;
              else p.alpha = p.maxAlpha;
              if (p.life >= p.maxLife) {
                p.x = Math.random() * W;
                p.y = H * 0.5 + Math.random() * H * 0.5;
                p.life = 0;
              }
              ctx.beginPath();
              ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
              ctx.fillStyle = `rgba(201,170,80,${p.alpha})`;
              ctx.fill();
            }
          });
          if (document.getElementById("hero").style.display !== "none") {
            requestAnimationFrame(draw);
          }
        }
        draw();
      })();

      // ═══════════════════════════════════════════════════
      // CARD TILT — subtle 3D on hover
      // ═══════════════════════════════════════════════════
      document.addEventListener("mouseover", (e) => {
        const card = e.target.closest(".trek-card");
        if (!card) return;
        card.addEventListener("mousemove", onCardTilt);
        card.addEventListener("mouseleave", onCardLeave);
      });

      function onCardTilt(e) {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = (e.clientX - cx) / (rect.width / 2);
        const dy = (e.clientY - cy) / (rect.height / 2);
        card.style.transform = `translateY(-6px) rotateX(${-dy * 4}deg) rotateY(${dx * 5}deg) scale(1.01)`;
      }

      function onCardLeave(e) {
        const card = e.currentTarget;
        card.style.transform = "";
        card.style.transition = "transform .4s cubic-bezier(.34,1.56,.64,1)";
        setTimeout(() => (card.style.transition = ""), 400);
        card.removeEventListener("mousemove", onCardTilt);
        card.removeEventListener("mouseleave", onCardLeave);
      }

      // ═══════════════════════════════════════════════════
      // SNOW FLAKES on HARD difficulty cards
      // ═══════════════════════════════════════════════════
      function addSnowToCard(card) {
        if (card.querySelector(".snow-wrap")) return;
        const wrap = document.createElement("div");
        wrap.className = "snow-wrap";
        const count = 6;
        for (let i = 0; i < count; i++) {
          const f = document.createElement("div");
          f.className = "snow-flake";
          f.style.cssText = `left:${Math.random() * 90 + 5}%;animation-duration:${2 + Math.random() * 3}s;animation-delay:${-Math.random() * 4}s;width:${2 + Math.random() * 2}px;height:${2 + Math.random() * 2}px;opacity:${0.4 + Math.random() * 0.4}`;
          wrap.appendChild(f);
        }
        const visual = card.querySelector(".card-visual");
        if (visual) visual.appendChild(wrap);
      }

      // Observer to add snow when hard cards enter viewport
      const snowObs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting && e.target.dataset.diff === "hard") {
              addSnowToCard(e.target);
            }
          });
        },
        { threshold: 0.1 },
      );

      // Observe new cards after render
      const cardObs = new MutationObserver((muts) => {
        muts.forEach((m) => {
          m.addedNodes.forEach((n) => {
            if (n.nodeType !== 1) return;
            n.querySelectorAll &&
              n
                .querySelectorAll('.trek-card[data-diff="hard"]')
                .forEach((c) => {
                  snowObs.observe(c);
                });
            if (
              n.classList &&
              n.classList.contains("trek-card") &&
              n.dataset.diff === "hard"
            ) {
              snowObs.observe(n);
            }
          });
        });
      });
      cardObs.observe(document.body, { childList: true, subtree: true });

      // ═══════════════════════════════════════════════════
      // TRAIL LINE on detail hero
      // ═══════════════════════════════════════════════════
      function addTrailLine() {
        const hero = document.querySelector(".detail-hero");
        if (!hero || hero.querySelector(".trail-svg")) return;
        const svg = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "svg",
        );
        svg.setAttribute("viewBox", "0 0 400 200");
        svg.setAttribute("preserveAspectRatio", "none");
        svg.className = "trail-svg";
        const path = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "path",
        );
        path.setAttribute(
          "d",
          "M20,180 Q60,140 100,160 Q140,120 180,100 Q220,80 260,60 Q300,40 340,20 L380,15",
        );
        path.className = "trail-path";
        svg.appendChild(path);
        hero.appendChild(svg);
      }

      // ═══════════════════════════════════════════════════
      // STAT COUNTER ANIMATION
      // ═══════════════════════════════════════════════════
      function animateCounter(el, target, duration = 1200) {
        if (!el) return;
        const start = performance.now();
        const isNum = !isNaN(parseInt(target));
        if (!isNum) {
          el.textContent = target;
          return;
        }
        const end = parseInt(target);
        function step(now) {
          const t = Math.min((now - start) / duration, 1);
          const ease = 1 - Math.pow(1 - t, 3);
          el.textContent = Math.round(ease * end);
          if (t < 1) requestAnimationFrame(step);
          else el.textContent = target; // restore original with units
        }
        requestAnimationFrame(step);
      }

      // Patch showDetail to add trail line + animate counters + detail map
      const _showDetailBase = showDetail;
      showDetail = function (t) {
        _showDetailBase(t);
        if (detailMapInstance) {
          try {
            detailMapInstance.remove();
          } catch(e) {
            console.error("Error removing detail map:", e);
          }
          detailMapInstance = null;
        }
        setTimeout(() => {
          addTrailLine();
          // animate stat values
          document.querySelectorAll(".ds-val").forEach((el) => {
            const raw = el.textContent;
            const num = parseInt(raw);
            if (!isNaN(num)) animateCounter(el, raw, 900);
          });
          renderDetailMap(t);
          // Ensure Leaflet repaints tiles once container is fully visible
          setTimeout(() => {
            if (detailMapInstance) detailMapInstance.invalidateSize();
          }, 300);
        }, 200);
      };

      // Animate hero stats on enter
      const _enterAppBase = enterApp;
      enterApp = function () {
        _enterAppBase();
        setTimeout(() => {
          const heroCount = document.getElementById("heroTrekCount");
          if (heroCount)
            animateCounter(heroCount, ALL_TREKS.length.toString(), 1400);
        }, 900);
      };

      function shareWhatsApp(t) {
        const price = t.price
          ? " | From Rs " + Math.round(t.price.standard / 1000) + "K"
          : "";
        const text =
          t.name +
          " — " +
          t.region +
          "\n" +
          t.elevation +
          " | " +
          t.duration +
          " | " +
          t.difficulty +
          price +
          "\n\nBest time: " +
          t.bestMonths
            .map(
              (m) =>
                [
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                  "Sep",
                  "Oct",
                  "Nov",
                  "Dec",
                ][m],
            )
            .join(", ") +
          "\n\nCheck it out on Trekpedia: " +
          window.location.href.split("?")[0] +
          "?trek=" +
          t.id;
        window.open(
          "https://wa.me/?text=" + encodeURIComponent(text),
          "_blank",
        );
      }

      // Snow condition badge based on current month
      function getSnowBadge(t) {
        const m = new Date().getMonth();
        const snowMonths = {
          kedarkantha: [11, 0, 1, 2],
          brahmatal: [11, 0, 1, 2],
          roopkund: [4, 5],
          "chadar-trek": [0, 1],
          "stok-kangri": [5, 6],
          "rupin-pass": [4, 5],
          "hampta-pass": [4, 5, 6],
          "buran-ghati": [4, 5],
          kedartal: [4, 5],
          "everest-base-camp": [3, 4, 9, 10],
          "annapurna-circuit": [3, 4, 10, 11],
          "gokyo-lakes": [3, 4, 10, 11],
          jomolhari: [3, 4, 10, 11],
          "snowman-trek": [8, 9],
          pangarchulla: [3, 4, 10, 11],
          "gaumukh-tapovan": [4, 5],
          "goecha-la": [3, 4, 10, 11],
        };
        const hasSnow = snowMonths[t.id] && snowMonths[t.id].includes(m);
        const inSeason = t.bestMonths.includes(m);
        const possibleSeason = t.okMonths.includes(m);
        if (hasSnow && inSeason)
          return '<span class="status-badge snow">Snow trail</span>';
        if (inSeason)
          return '<span class="status-badge open">Open now</span>';
        if (possibleSeason)
          return '<span class="status-badge possible">Possible</span>';
        return '<span class="status-badge off">Off season</span>';
      }

      // PWA install prompt
      let _pwaPrompt = null;
      window.addEventListener("beforeinstallprompt", (e) => {
        e.preventDefault();
        _pwaPrompt = e;
        // Show install banner after 8 seconds
        setTimeout(() => {
          if (!_pwaPrompt) return;
          showToast("Add Trekpedia to your home screen for offline use");
          const btn = document.createElement("button");
          btn.className = "icon-btn active";
          btn.textContent = "Install App";
          btn.style.cssText =
            "position:fixed;bottom:1rem;right:1rem;z-index:500;background:var(--gold);color:var(--deep);border-color:var(--gold)";
          btn.onclick = () => {
            _pwaPrompt.prompt();
            _pwaPrompt.userChoice.then(() => {
              btn.remove();
              _pwaPrompt = null;
            });
          };
          document.body.appendChild(btn);
          setTimeout(() => {
            if (btn.parentNode) btn.remove();
          }, 12000);
        }, 8000);
      });

      // ── OPERATOR DIRECTORY ────────────────────────────────────────
      const OPERATOR_DATA = {
        default: [
          {
            name: "Indiahikes",
            type: "Group treks",
            url: "https://indiahikes.com",
            price: "Best for fixed departures",
          },
          {
            name: "Trek The Himalayas",
            type: "Group treks",
            url: "https://trekthehimalayas.com",
            price: "Good gear & safety",
          },
          {
            name: "Thrillophilia",
            type: "Aggregator",
            url: "https://thrillophilia.com",
            price: "Compare multiple operators",
          },
          {
            name: "India Hike Finder",
            type: "Custom treks",
            url: "https://indiahikefinder.com",
            price: "Private & custom",
          },
        ],
        ladakh: [
          {
            name: "Rimo Expeditions",
            type: "Specialist",
            url: "https://rimoexpeditions.com",
            price: "Best Ladakh operator",
          },
          {
            name: "Indiahikes",
            type: "Group treks",
            url: "https://indiahikes.com",
            price: "Fixed departures",
          },
          {
            name: "Thrillophilia",
            type: "Aggregator",
            url: "https://thrillophilia.com",
            price: "Multiple operators",
          },
        ],
        nepal: [
          {
            name: "Nepal Hiking Team",
            type: "Nepal specialist",
            url: "https://nepalhikingteam.com",
            price: "Highly rated local",
          },
          {
            name: "Himalayan Wonders",
            type: "Nepal specialist",
            url: "https://himalayanwonders.com",
            price: "Fixed & custom",
          },
          {
            name: "Intrepid Travel",
            type: "International",
            url: "https://intrepidtravel.com",
            price: "With airfare packages",
          },
        ],
        bhutan: [
          {
            name: "Druk Asia",
            type: "Bhutan specialist",
            url: "https://drukasia.com",
            price: "Licensed Bhutan operator",
          },
          {
            name: "Bhutan Majestic Travel",
            type: "Bhutan specialist",
            url: "https://bhutanmajestictravel.com",
            price: "All-inclusive",
          },
        ],
      };
      const TREK_OP_MAP = {
        "chadar-trek": "ladakh",
        "markha-valley": "ladakh",
        "stok-kangri": "ladakh",
        "kashmir-great-lakes": "ladakh",
        "tarsar-marsar": "ladakh",
        "everest-base-camp": "nepal",
        "annapurna-circuit": "nepal",
        "langtang-valley": "nepal",
        "poon-hill": "nepal",
        "gokyo-lakes": "nepal",
        "mardi-himal": "nepal",
        "snowman-trek": "bhutan",
        "druk-path": "bhutan",
        jomolhari: "bhutan",
      };

      function getBookingUrl(operatorName, trek) {
        const query = `utm_source=trekpedia&utm_medium=affiliate&ref=trekpedia`;
        const base = operatorName.toLowerCase();
        
        if (base.includes("indiahikes")) {
          return `https://indiahikes.com/${trek.id}-trek/?${query}`;
        }
        if (base.includes("himalayas")) {
          return `https://trekthehimalayas.com/tours/${trek.id}/?${query}`;
        }
        if (base.includes("thrillophilia")) {
          return `https://www.thrillophilia.com/tours/${trek.id}/?${query}`;
        }
        if (base.includes("nepal hiking")) {
          return `https://www.nepalhikingteam.com/package/${trek.id}/?${query}`;
        }
        if (base.includes("druk asia")) {
          return `https://www.drukasia.com/bhutan/${trek.id}/?${query}`;
        }
        return null;
      }

      function renderOperatorSection(t) {
        const cat = TREK_OP_MAP[t.id] || "default";
        const ops = OPERATOR_DATA[cat] || OPERATOR_DATA["default"];
        return `<div class="review-section">
    <div class="section-title">Recommended Operators</div>
    <div class="operator-grid" style="margin-top:.7rem">
      ${ops
        .map(
          (o) => {
            const bookingUrl = getBookingUrl(o.name, t) || o.url;
            return `<div class="operator-card">
              <div class="operator-name">${o.name}</div>
              <div class="operator-type">${o.type}</div>
              <a class="operator-link" href="${o.url}" target="_blank" rel="noopener">${o.url.replace("https://", "").replace("www.", "")}</a>
              <div class="operator-price">${o.price}</div>
              <a class="operator-book-btn" href="${bookingUrl}" target="_blank" rel="noopener">Book Departures →</a>
            </div>`;
          }
        )
        .join("")}
    </div>
    <div style="font-size:.65rem;color:var(--subtle);margin-top:.3rem;font-style:italic">Trekpedia does not endorse any operator. Always verify credentials, read reviews, and compare prices independently. Affiliate links may earn us a commission.</div>
  </div>`;
      }

      // ─── AUTH & SYNC FUNCTIONS ───
      function toggleAccountModal() {
        const modal = document.getElementById("accountModal");
        if (!modal) return;
        if (modal.style.display === "none" || !modal.style.display) {
          modal.style.display = "flex";
          updateAuthModalUI();
        } else {
          modal.style.display = "none";
        }
      }

      function updateAuthModalUI() {
        const authView = document.getElementById("authView");
        const profileView = document.getElementById("profileView");
        const profileEmail = document.getElementById("profileEmail");
        const accountBtn = document.getElementById("accountBtn");
        
        if (!authView || !profileView || !profileEmail || !accountBtn) return;
        
        if (currentUser) {
          authView.style.display = "none";
          profileView.style.display = "block";
          profileEmail.textContent = currentUser.email;
          accountBtn.textContent = "Account";
        } else {
          authView.style.display = "block";
          profileView.style.display = "none";
          accountBtn.textContent = "Login";
        }
      }

      function switchAuthView(e) {
        if (e) e.preventDefault();
        isSignUpMode = !isSignUpMode;
        const authTitle = document.getElementById("authTitle");
        const authSubmitBtn = document.getElementById("authSubmitBtn");
        const authSwitchText = document.getElementById("authSwitchText");
        const authSwitchLink = document.getElementById("authSwitchLink");
        
        if (!authTitle || !authSubmitBtn || !authSwitchText || !authSwitchLink) return;
        
        if (isSignUpMode) {
          authTitle.textContent = "Sign Up";
          authSubmitBtn.textContent = "Sign Up";
          authSwitchText.textContent = "Already have an account?";
          authSwitchLink.textContent = "Log In";
        } else {
          authTitle.textContent = "Log In";
          authSubmitBtn.textContent = "Log In";
          authSwitchText.textContent = "Don't have an account?";
          authSwitchLink.textContent = "Sign Up";
        }
      }

      async function handleAuth(e) {
        if (e) e.preventDefault();
        const email = document.getElementById("authEmail").value;
        const password = document.getElementById("authPassword").value;
        
        if (supabaseClient) {
          const submitBtn = document.getElementById("authSubmitBtn");
          const originalText = submitBtn.textContent;
          submitBtn.textContent = "Processing...";
          submitBtn.disabled = true;
          
          try {
            let result;
            if (isSignUpMode) {
              result = await supabaseClient.auth.signUp({ email, password });
            } else {
              result = await supabaseClient.auth.signInWithPassword({ email, password });
            }
            
            if (result.error) {
              showToast("Auth Error: " + result.error.message);
            } else {
              showToast(isSignUpMode ? "Sign up successful! Check your email." : "Logged in successfully!");
              toggleAccountModal();
            }
          } catch (err) {
            console.error(err);
            showToast("Error processing request.");
          } finally {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
          }
        } else {
          // Mock authentication
          currentUser = { email, id: "mock-user-123" };
          localStorage.setItem("tp_mock_session", JSON.stringify(currentUser));
          updateAuthModalUI();
          showToast(isSignUpMode ? "Demo Sign Up successful (Mock Mode)!" : "Demo Logged in (Mock Mode)!");
          toggleAccountModal();
          await syncUserDataFromDB();
          renderCurrentView();
        }
      }

      async function handleGoogleLogin() {
        if (supabaseClient) {
          try {
            const { error } = await supabaseClient.auth.signInWithOAuth({
              provider: 'google',
              options: {
                redirectTo: window.location.origin + window.location.pathname
              }
            });
            if (error) showToast("Google Auth Error: " + error.message);
          } catch (err) {
            console.error(err);
            showToast("Google Auth Error.");
          }
        } else {
          // Mock Google Authentication
          currentUser = { email: "google.user@example.com", id: "mock-google-123" };
          localStorage.setItem("tp_mock_session", JSON.stringify(currentUser));
          updateAuthModalUI();
          showToast("Demo Google Login successful (Mock Mode)!");
          toggleAccountModal();
          await syncUserDataFromDB();
          renderCurrentView();
        }
      }

      async function handleLogout() {
        if (supabaseClient) {
          try {
            const { error } = await supabaseClient.auth.signOut();
            if (error) showToast("Sign out error: " + error.message);
            else {
              currentUser = null;
              updateAuthModalUI();
              showToast("Logged out successfully!");
              toggleAccountModal();
              renderCurrentView();
            }
          } catch (err) {
            console.error(err);
          }
        } else {
          currentUser = null;
          localStorage.removeItem("tp_mock_session");
          updateAuthModalUI();
          showToast("Logged out from Demo mode!");
          toggleAccountModal();
          renderCurrentView();
        }
      }

      async function syncUserDataFromDB() {
        if (!currentUser) return;
        
        if (supabaseClient) {
          try {
            // Bookmarks sync
            const { data: dbBookmarks, error: bmErr } = await supabaseClient
              .from('bookmarks')
              .select('trek_id')
              .eq('user_id', currentUser.id);
            
            if (!bmErr && dbBookmarks) {
              const dbBmIds = dbBookmarks.map(b => b.trek_id);
              bookmarks = Array.from(new Set([...bookmarks, ...dbBmIds]));
              localStorage.setItem("tp_bookmarks", JSON.stringify(bookmarks));
              
              for (const id of bookmarks) {
                if (!dbBmIds.includes(id)) {
                  await supabaseClient.from('bookmarks').insert({ user_id: currentUser.id, trek_id: id });
                }
              }
            }

            // Logs sync
            const { data: dbLogs, error: logErr } = await supabaseClient
              .from('trek_logs')
              .select('*')
              .eq('user_id', currentUser.id);
            
            if (!logErr && dbLogs) {
              dbLogs.forEach(dl => {
                const local = trekLog[dl.trek_id] || {};
                trekLog[dl.trek_id] = {
                  date: dl.completed_date || local.date || "",
                  rating: dl.rating || local.rating || "",
                  note: dl.notes || local.note || "",
                  gear: dl.gear_checklist || local.gear || [],
                };
              });
              localStorage.setItem("tp_log", JSON.stringify(trekLog));
              
              for (const [trekId, log] of Object.entries(trekLog)) {
                const existsInDb = dbLogs.some(dl => dl.trek_id === trekId);
                if (!existsInDb) {
                  await supabaseClient.from('trek_logs').insert({
                    user_id: currentUser.id,
                    trek_id: trekId,
                    completed_date: log.date || null,
                    rating: log.rating ? parseInt(log.rating) : null,
                    notes: log.note || null,
                    gear_checklist: log.gear || []
                  });
                }
              }
            }
          } catch (e) {
            console.error("Database synchronization failed:", e);
          }
        } else {
          // Mock DB Sync
          const mockDbBookmarks = JSON.parse(localStorage.getItem(`tp_mock_db_bookmarks_${currentUser.id}`) || "[]");
          bookmarks = Array.from(new Set([...bookmarks, ...mockDbBookmarks]));
          localStorage.setItem("tp_bookmarks", JSON.stringify(bookmarks));

          const mockDbLogs = JSON.parse(localStorage.getItem(`tp_mock_db_logs_${currentUser.id}`) || "{}");
          Object.entries(mockDbLogs).forEach(([trekId, log]) => {
            const local = trekLog[trekId] || {};
            trekLog[trekId] = {
              date: log.date || local.date || "",
              rating: log.rating || local.rating || "",
              note: log.note || local.note || "",
              gear: log.gear || local.gear || [],
            };
          });
          localStorage.setItem("tp_log", JSON.stringify(trekLog));
        }
      }

      async function syncBookmarkToDB(id, isAdded) {
        if (!currentUser) return;
        if (supabaseClient) {
          try {
            if (isAdded) {
              await supabaseClient.from('bookmarks').insert({ user_id: currentUser.id, trek_id: id });
            } else {
              await supabaseClient.from('bookmarks').delete().eq('user_id', currentUser.id).eq('trek_id', id);
            }
          } catch (e) {
            console.error("Failed to sync bookmark to DB:", e);
          }
        } else {
          let mockDb = JSON.parse(localStorage.getItem(`tp_mock_db_bookmarks_${currentUser.id}`) || "[]");
          if (isAdded) {
            if (!mockDb.includes(id)) mockDb.push(id);
          } else {
            mockDb = mockDb.filter(x => x !== id);
          }
          localStorage.setItem(`tp_mock_db_bookmarks_${currentUser.id}`, JSON.stringify(mockDb));
        }
      }

      async function syncLogToDB(id, log) {
        if (!currentUser) return;
        if (supabaseClient) {
          try {
            await supabaseClient.from('trek_logs').upsert({
              user_id: currentUser.id,
              trek_id: id,
              completed_date: log.date || null,
              rating: log.rating ? parseInt(log.rating) : null,
              notes: log.note || null,
              gear_checklist: log.gear || []
            }, { onConflict: 'user_id,trek_id' });
          } catch (e) {
            console.error("Failed to sync log to DB:", e);
          }
        } else {
          const mockDb = JSON.parse(localStorage.getItem(`tp_mock_db_logs_${currentUser.id}`) || "{}");
          mockDb[id] = log;
          localStorage.setItem(`tp_mock_db_logs_${currentUser.id}`, JSON.stringify(mockDb));
        }
      }

      async function emailChecklist(e, trekId) {
        if (e) e.preventDefault();
        const emailInput = document.getElementById(`emailChecklistInput-${trekId}`);
        const submitBtn = document.getElementById(`emailChecklistBtn-${trekId}`);
        if (!emailInput || !submitBtn) return;
        
        const email = emailInput.value;
        const t = ALL_TREKS.find(x => x.id === trekId);
        if (!t) return;
        
        const originalText = submitBtn.textContent;
        submitBtn.textContent = "Sending...";
        submitBtn.disabled = true;
        
        const done = trekLog[trekId] || {};
        const gearListText = t.gear.map((g, i) => {
          const isChecked = done.gear && done.gear[i];
          return `[${isChecked ? "x" : " "}] ${g}`;
        }).join("\n");
        
        const templateParams = {
          to_email: email,
          trek_name: t.name,
          trek_region: t.region,
          trek_country: t.country,
          trek_elevation: t.elevation,
          trek_duration: t.duration,
          checklist_content: gearListText,
        };
        
        if (CONFIG.EMAILJS_PUBLIC_KEY && CONFIG.EMAILJS_SERVICE_ID && CONFIG.EMAILJS_TEMPLATE_ID) {
          try {
            const response = await window.emailjs.send(
              CONFIG.EMAILJS_SERVICE_ID,
              CONFIG.EMAILJS_TEMPLATE_ID,
              templateParams
            );
            if (response.status === 200) {
              showToast("Checklist emailed successfully!");
              emailInput.value = "";
            } else {
              showToast("Failed to email checklist. Status: " + response.status);
            }
          } catch (err) {
            console.error(err);
            showToast("Email sending failed.");
          } finally {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
          }
        } else {
          setTimeout(() => {
            showToast(`Demo mode: Checklist emailed to ${email} (Mock)!`);
            emailInput.value = "";
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
          }, 1000);
        }
      }

      // Initialize Supabase Auth Listener on startup
      if (supabaseClient) {
        try {
          supabaseClient.auth.onAuthStateChange(async (event, session) => {
            currentUser = session ? session.user : null;
            updateAuthModalUI();
            if (currentUser) {
              await syncUserDataFromDB();
            }
            renderCurrentView();
          });
        } catch (e) {
          console.error("Auth state change subscription error:", e);
        }
      } else {
        // Run sync for mock mode if already authenticated
        if (currentUser) {
          setTimeout(async () => {
            await syncUserDataFromDB();
            renderCurrentView();
          }, 100);
        }
      }

      function initConnectionStatus() {
        const banner = document.createElement("div");
        banner.id = "offlineBanner";
        banner.className = "offline-banner";
        document.body.appendChild(banner);
        
        const showStatus = (isOnline) => {
          if (isOnline) {
            banner.className = "offline-banner online show";
            banner.innerHTML = `<span class="offline-dot"></span><span>You are back online. Live updates active.</span>`;
            setTimeout(() => banner.classList.remove("show"), 3000);
          } else {
            banner.className = "offline-banner show";
            banner.innerHTML = `<span class="offline-dot"></span><span>Offline mode. Cached content loaded.</span>`;
          }
        };
        
        window.addEventListener("online", () => showStatus(true));
        window.addEventListener("offline", () => showStatus(false));
        
        if (!navigator.onLine) {
          showStatus(false);
        }
      }
      initConnectionStatus();

      // Register Service Worker for offline PWA capability
      if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
          navigator.serviceWorker.register('./sw.js')
            .then(reg => console.log('Trekpedia Service Worker registered successfully! Scope:', reg.scope))
            .catch(err => console.error('Trekpedia Service Worker registration failed:', err));
        });
      }

      function doHeroSearch(v) {
        const suggestionsContainer = document.getElementById("heroSearchSuggestions");
        if (!suggestionsContainer) return;
        
        if (!v) {
          suggestionsContainer.style.display = "none";
          return;
        }
        
        const q = v.toLowerCase();
        const matches = ALL_TREKS.filter(t => 
          t.name.toLowerCase().includes(q) ||
          t.region.toLowerCase().includes(q) ||
          t.country.toLowerCase().includes(q)
        ).slice(0, 5);
        
        if (matches.length === 0) {
          suggestionsContainer.style.display = "none";
          return;
        }
        
        const DIFF_COLOR_MAP = {
          easy: "#10b981",
          moderate: "#f59e0b",
          hard: "#ef4444"
        };
        
        suggestionsContainer.innerHTML = matches.map(t => `
          <div class="suggestion-item" onclick="event.stopPropagation(); selectHeroSuggestion('${t.id}', '${t.country}')">
            <div class="suggestion-left">
              <span class="suggestion-name">${t.name}</span>
              <span class="suggestion-meta">${t.country} · ${t.region}</span>
            </div>
            <span class="suggestion-diff" style="background: ${DIFF_COLOR_MAP[t.difficulty] || "#de5e3a"}">${t.difficulty}</span>
          </div>
        `).join("");
        suggestionsContainer.style.display = "flex";
      }

      function selectHeroSuggestion(id, country) {
        const sugg = document.getElementById("heroSearchSuggestions");
        if (sugg) sugg.style.display = "none";
        const heroInp = document.getElementById("heroSearchInput");
        if (heroInp) heroInp.value = "";
        
        enterApp();
        
        setTimeout(() => {
          flyToTrek(id, country);
        }, 800);
      }

      function handleHeroSearchEnter(v) {
        if (!v.trim()) return;
        const sugg = document.getElementById("heroSearchSuggestions");
        if (sugg) sugg.style.display = "none";
        const heroInp = document.getElementById("heroSearchInput");
        if (heroInp) heroInp.value = "";
        
        enterApp();
        
        setTimeout(() => {
          const mainSearch = document.getElementById("searchInput");
          if (mainSearch) {
            mainSearch.value = v;
            doSearch(v);
          }
        }, 800);
      }

      // Hide suggestions when clicking outside hero search
      window.addEventListener("click", (e) => {
        const heroSearchWrap = e.target.closest(".hero-search-wrap");
        if (!heroSearchWrap) {
          const sugg = document.getElementById("heroSearchSuggestions");
          if (sugg) sugg.style.display = "none";
        }
      });

      // Bind all interactive functions to the global window object to support inline HTML event handlers
      window.enterApp = enterApp;
      window.goHome = goHome;
      window.doSearch = doSearch;
      window.showSaved = showSaved;
      window.showLogView = showLogView;
      window.showRecommender = showRecommender;
      window.showCalendar = showCalendar;
      window.showMap = showMap;
      window.toggleCompare = toggleCompare;
      window.toggleAI = toggleAI;
      window.showAIGenerator = showAIGenerator;
      window.showQuiz = showQuiz;
      window.surpriseMe = surpriseMe;
      window.toggleDark = toggleDark;
      window.applyFilters = applyFilters;
      window.selectSuggestion = selectSuggestion;
      window.hideSuggestions = hideSuggestions;
      window.sendAI = sendAI;
      window.closeLog = closeLog;
      window.saveLog = saveLog;
      window.removeCompare = removeCompare;
      window.clearCompare = clearCompare;
      window.runCompare = runCompare;
      window.pickRec = pickRec;
      window.pickQuiz = pickQuiz;
      window.clearDist = clearDist;
      window.flyToTrek = flyToTrek;
      window.toggleBookmark = toggleBookmark;
      window.toggleBookmarkDetail = toggleBookmarkDetail;
      window.openLog = openLog;
      window.shareCurrentTrek = shareCurrentTrek;
      window.saveGear = saveGear;
      window.goToNearby = goToNearby;
      window.setReviewStar = setReviewStar;
      window.submitReview = submitReview;
      window.selectCalMonth = selectCalMonth;
      window.runGenerator = runGenerator;
      window.showCountry = showCountry;
      window.toggleAccountModal = toggleAccountModal;
      window.switchAuthView = switchAuthView;
      window.handleAuth = handleAuth;
      window.handleGoogleLogin = handleGoogleLogin;
      window.handleLogout = handleLogout;
      window.emailChecklist = emailChecklist;
      window.doHeroSearch = doHeroSearch;
      window.selectHeroSuggestion = selectHeroSuggestion;
      window.handleHeroSearchEnter = handleHeroSearchEnter;
      window.switchNavTab = switchNavTab;

      // Export functions for unit testing
      export { matchesFilters, haversine, buildElevProfile, getSeason, reviewAvg, ALL_TREKS };