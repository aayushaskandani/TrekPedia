async function test() {
  const url = 'https://indiahikes.com/documented-trek/harihar-fort-trek/';
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
      }
    });
    console.log('Status:', res.status);
    if (res.status === 200) {
      const text = await res.text();
      console.log('Fetched successfully! Length:', text.length);
      // find some jpg urls
      const matches = text.match(/https:\/\/indiahikes\.com\/wp-content\/uploads\/[^\s"'>]+\.(?:jpg|jpeg|png|webp)/gi);
      console.log('Sample image URLs:', matches ? [...new Set(matches)].slice(0, 8) : 'None');
    }
  } catch (e) {
    console.error(e);
  }
}
test();
