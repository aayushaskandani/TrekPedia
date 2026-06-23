import fs from 'fs';
import { IMAGE_CREDITS } from './data/imageCredits.js';

const treksList = [
  { id: "harihar-fort", slug: "harihar-fort-trek" },
  { id: "harishchandragad", slug: "harishchandragad-trek" },
  { id: "kalsubai-peak", slug: "kalsubai-trek" },
  { id: "rajmachi", slug: "rajmachi-trek" },
  { id: "kalavantin-durg", slug: "kalavantin-durg-trek" },
  { id: "visapur-fort", slug: "visapur-fort-trek" },
  { id: "torna-fort", slug: "torna-fort-trek" },
  { id: "devkund-waterfall", slug: "devkund-waterfall-trek" },
  { id: "andharban", slug: "andharban-trek-monsoon-route" },
  { id: "kumara-parvatha", slug: "kumara-parvatha-trek" },
  { id: "skandagiri", slug: "skandagiri-trek" },
  { id: "savandurga", slug: "savandurga-trek" },
  { id: "netravati-peak", slug: "netravati-peak-trek" },
  { id: "meesapulimala", slug: "meesapulimala-trek" },
  { id: "kumta-gokarna", slug: "gokarna-beach-trek" },
  { id: "kodachadri", slug: "kodachadri-trek" },
  { id: "triund", slug: "triund-trek" },
  { id: "prashar-lake", slug: "prashar-lake-trek" },
  { id: "kareri-lake", slug: "kareri-lake-trek" },
  { id: "borasu-pass", slug: "borasu-pass-trek" },
  { id: "indrahar-pass", slug: "indrahar-pass-trek" },
  { id: "audens-col", slug: "audens-col-trek" },
  { id: "dodital", slug: "dodital-trek" },
  { id: "satopanth-tal", slug: "satopanth-tal-trek" },
  { id: "pindari-glacier", slug: "pindari-glacier-trek" },
  { id: "kolahoi-glacier", slug: "kolahoi-glacier-trek" },
  { id: "david-scott", slug: "david-scott-trail-trek" },
  { id: "saddle-peak", slug: "saddle-peak-trek" },
  { id: "talle-valley", slug: "tally-valley-trek" },
  { id: "gosaikunda", slug: "gosaikunda-lake-trek" }
];

// Fallback Unsplash mappings in case Indiahikes returns 404
const unsplashFallbacks = {
  "harihar-fort": "https://images.unsplash.com/photo-1606707764516-72886f4a2b97?w=1200&h=600&fit=crop",
  "harishchandragad": "https://images.unsplash.com/photo-1590766948512-494e0e56f4d2?w=1200&h=600&fit=crop",
  "kalsubai-peak": "https://images.unsplash.com/photo-1626847037657-fd3622613ce3?w=1200&h=600&fit=crop",
  "rajmachi": "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=1200&h=600&fit=crop",
  "kalavantin-durg": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=600&fit=crop",
  "visapur-fort": "https://images.unsplash.com/photo-1563824443-1b32990a4255?w=1200&h=600&fit=crop",
  "torna-fort": "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=1200&h=600&fit=crop",
  "devkund-waterfall": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&h=600&fit=crop",
  "andharban": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=600&fit=crop",
  "kumara-parvatha": "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=1200&h=600&fit=crop",
  "skandagiri": "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=1200&h=600&fit=crop",
  "savandurga": "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=1200&h=600&fit=crop",
  "netravati-peak": "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200&h=600&fit=crop",
  "meesapulimala": "https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200&h=600&fit=crop",
  "kumta-gokarna": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=600&fit=crop",
  "kodachadri": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&h=600&fit=crop",
  "triund": "https://images.unsplash.com/photo-1596761375311-37ff3908f51a?w=1200&h=600&fit=crop",
  "prashar-lake": "https://images.unsplash.com/photo-1548018560-c7196f96ee19?w=1200&h=600&fit=crop",
  "kareri-lake": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&h=600&fit=crop",
  "borasu-pass": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop",
  "indrahar-pass": "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=1200&h=600&fit=crop",
  "audens-col": "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&h=600&fit=crop",
  "dodital": "https://images.unsplash.com/photo-1455156218388-5e61b526818b?w=1200&h=600&fit=crop",
  "satopanth-tal": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&h=600&fit=crop",
  "pindari-glacier": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop",
  "kolahoi-glacier": "https://images.unsplash.com/photo-1520208422220-d12a3be0d814?w=1200&h=600&fit=crop",
  "david-scott": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=600&fit=crop",
  "saddle-peak": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=600&fit=crop",
  "talle-valley": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=600&fit=crop",
  "gosaikunda": "https://images.unsplash.com/photo-1544198365-f5d60b6d8190?w=1200&h=600&fit=crop"
};

async function scrapeTrekImage(trek) {
  const url = `https://indiahikes.com/documented-trek/${trek.slug}/`;
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
      }
    });
    
    if (res.status === 200) {
      const text = await res.text();
      // Look for main post images in wp-content/uploads
      const regex = /https:\/\/indiahikes\.com\/wp-content\/uploads\/[^\s"'>]+\.(?:jpg|jpeg|png)/gi;
      const matches = text.match(regex);
      if (matches && matches.length > 0) {
        // filter out small thumbs, icons or profile avatars
        const validUrls = [...new Set(matches)].filter(img => 
          !img.includes('avatar') && 
          !img.includes('logo') && 
          !img.includes('-150x') && 
          !img.includes('-100x')
        );
        if (validUrls.length > 0) {
          // Take first large image
          return { url: validUrls[0], credit: 'Indiahikes' };
        }
      }
    }
  } catch (e) {
    // ignore fetch error, fallback will take care
  }
  
  // Fallback
  return { url: unsplashFallbacks[trek.id], credit: 'Unsplash' };
}

async function run() {
  console.log("Starting Indiahikes image scraper for 30 treks...");
  const results = {};
  
  for (const trek of treksList) {
    console.log(`Scraping ${trek.id}...`);
    const imageInfo = await scrapeTrekImage(trek);
    results[trek.id] = imageInfo;
    console.log(`Result for ${trek.id}: ${imageInfo.url} (${imageInfo.credit})`);
    
    // Add a tiny delay between requests to be polite
    await new Promise(r => setTimeout(r, 200));
  }
  
  // Merge results into IMAGE_CREDITS
  Object.entries(results).forEach(([id, info]) => {
    IMAGE_CREDITS[id] = info;
  });
  
  // Write back to data/imageCredits.js
  const fileContent = `export const IMAGE_CREDITS = ${JSON.stringify(IMAGE_CREDITS, null, 2)};\n`;
  fs.writeFileSync('./data/imageCredits.js', fileContent);
  console.log("Successfully updated imageCredits.js!");
}

run();
