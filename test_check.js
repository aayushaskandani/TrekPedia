// Mock browser globals
global.requestAnimationFrame = (cb) => setTimeout(cb, 0);
global.IntersectionObserver = class {
  observe() {}
  disconnect() {}
};
global.MutationObserver = class {
  observe() {}
  disconnect() {}
};
global.window = {
  supabase: null,
  emailjs: null,
  addEventListener: () => {},
  location: { href: 'http://localhost/', search: '' }
};
global.document = {
  getElementById: (id) => {
    if (id === 'heroCanvas') {
      return {
        getContext: () => ({
          clearRect: () => {},
          beginPath: () => {},
          arc: () => {},
          fill: () => {},
          stroke: () => {},
          moveTo: () => {},
          lineTo: () => {}
        }),
        addEventListener: () => {},
        style: {}
      };
    }
    return { textContent: '', value: '', style: {}, addEventListener: () => {} };
  },
  querySelectorAll: () => [],
  addEventListener: () => {},
  body: {
    classList: {
      contains: () => true,
      toggle: () => {}
    },
    appendChild: () => {}
  },
  createElement: () => ({
    className: '',
    id: '',
    style: {},
    addEventListener: () => {},
    appendChild: () => {},
    classList: { add: () => {}, remove: () => {} }
  })
};
Object.defineProperty(global, 'navigator', {
  value: {
    onLine: true,
    clipboard: { writeText: async () => {} },
    serviceWorker: { register: async () => {} }
  },
  writable: true,
  configurable: true
});
global.localStorage = {
  getItem: () => null,
  setItem: () => {}
};
global.L = {
  map: () => ({ setView: () => {}, addControl: () => {} }),
  control: { zoom: () => ({ addTo: () => {} }) },
  tileLayer: () => ({ addTo: () => {} }),
  divIcon: () => ({}),
  marker: () => ({ addTo: () => ({ bindPopup: () => ({ openPopup: () => {} }) }) }),
  polyline: () => ({ addTo: () => {} }),
  latLngBounds: () => ({})
};
global.performance = {
  now: () => Date.now()
};

async function runTests() {
  try {
    const { matchesFilters, haversine, buildElevProfile, getSeason, reviewAvg, ALL_TREKS } = await import('./js/main.js');
    console.log("SUCCESS: js/main.js imported without syntax or initial runtime errors.");
    
    // Assert some basic properties
    if (ALL_TREKS.length !== 210) {
      throw new Error(`Expected 210 treks, but found ${ALL_TREKS.length}`);
    }
    
    const dist = haversine(34.1526, 77.5771, 34.14, 77.53);
    if (dist !== 5) {
      throw new Error(`Expected haversine distance 5, got ${dist}`);
    }
    
    const baseElev = buildElevProfile(ALL_TREKS[0])[0];
    if (baseElev !== 800) {
      throw new Error(`Expected start elevation 800m, got ${baseElev}`);
    }
    
    const avg = parseFloat(reviewAvg([
      { name: "John", stars: 5, text: "Excellent" },
      { name: "Alice", stars: 4, text: "Good trek" },
      { name: "Bob", stars: 3, text: "Okay" }
    ]));
    if (avg !== 4.0) {
      throw new Error(`Expected review average 4.0, got ${avg}`);
    }
    
    console.log("SUCCESS: All mock tests passed successfully.");
  } catch (e) {
    console.error("TEST FAILED:", e);
    process.exit(1);
  }
}

runTests();
