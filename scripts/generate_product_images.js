import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const colors = {
  'stealth_black': {
    name: 'Stealth Black',
    primary: '#181920',
    secondary: '#282a36',
    mesh: '#12131a',
    accent: '#e8b86d',
    sole: '#111218',
    lug: '#333545',
    label: 'STEALTH BLACK'
  },
  'earth_olive': {
    name: 'Earth Olive',
    primary: '#3b4728',
    secondary: '#55633b',
    mesh: '#2d371d',
    accent: '#e8b86d',
    sole: '#1c2213',
    lug: '#485532',
    label: 'EARTH OLIVE'
  },
  'summit_gray': {
    name: 'Summit Gray',
    primary: '#505663',
    secondary: '#707787',
    mesh: '#3a3f4a',
    accent: '#e8b86d',
    sole: '#22252c',
    lug: '#616776',
    label: 'SUMMIT GRAY'
  }
};

function buildMainShoeSvg(cKey) {
  const c = colors[cKey];
  return `
<svg width="1200" height="900" viewBox="0 0 1200 900" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="bgGlow" cx="50%" cy="50%" r="70%">
      <stop offset="0%" stop-color="#1e2030"/>
      <stop offset="60%" stop-color="#0e0f17"/>
      <stop offset="100%" stop-color="#07080c"/>
    </radialGradient>
    <linearGradient id="floorGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="rgba(232,184,109,0.06)"/>
      <stop offset="100%" stop-color="transparent"/>
    </linearGradient>
    <linearGradient id="upperGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${c.secondary}"/>
      <stop offset="100%" stop-color="${c.primary}"/>
    </linearGradient>
    <linearGradient id="soleGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="${c.lug}"/>
      <stop offset="100%" stop-color="${c.sole}"/>
    </linearGradient>
    <filter id="shadowBlur" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="25"/>
    </filter>
  </defs>

  <rect width="1200" height="900" fill="url(#bgGlow)"/>
  <ellipse cx="600" cy="720" rx="480" ry="120" fill="url(#floorGrad)"/>
  <ellipse cx="600" cy="670" rx="420" ry="45" fill="#000000" opacity="0.85" filter="url(#shadowBlur)"/>

  <!-- Main Barefoot Water & Trail Shoe Group -->
  <g transform="translate(140, 160)">
    <!-- Zero-Drop Rubber Outsole with Drainage Ports -->
    <path d="M 120 440 
             Q 130 455 200 460 
             L 750 460 
             Q 820 455 830 420 
             L 835 390 
             Q 810 395 740 395 
             L 200 395 
             Q 130 395 120 440 Z" 
          fill="url(#soleGrad)" stroke="${c.sole}" stroke-width="4"/>

    <!-- Drainage Holes along Sole (From Amazon Image #1 & #3) -->
    <g fill="#0e0f17" stroke="${c.accent}" stroke-width="1.5">
      <circle cx="240" cy="435" r="7"/>
      <circle cx="320" cy="435" r="7"/>
      <circle cx="400" cy="435" r="7"/>
      <circle cx="480" cy="435" r="7"/>
      <circle cx="560" cy="435" r="7"/>
      <circle cx="640" cy="435" r="7"/>
    </g>

    <!-- Outsole Lug Teeth -->
    <g fill="${c.sole}" opacity="0.9">
      <rect x="180" y="455" width="22" height="15" rx="3"/>
      <rect x="230" y="455" width="22" height="15" rx="3"/>
      <rect x="280" y="455" width="22" height="15" rx="3"/>
      <rect x="330" y="455" width="22" height="15" rx="3"/>
      <rect x="380" y="455" width="22" height="15" rx="3"/>
      <rect x="430" y="455" width="22" height="15" rx="3"/>
      <rect x="480" y="455" width="22" height="15" rx="3"/>
      <rect x="530" y="455" width="22" height="15" rx="3"/>
      <rect x="580" y="455" width="22" height="15" rx="3"/>
      <rect x="630" y="455" width="22" height="15" rx="3"/>
      <rect x="680" y="455" width="22" height="15" rx="3"/>
      <rect x="730" y="455" width="22" height="15" rx="3"/>
    </g>

    <!-- Toe Bumper (Wide Toe Guard from Amazon Image #4) -->
    <path d="M 740 395 
             Q 835 390 840 350 
             Q 845 300 810 270 
             Q 770 240 730 260 
             L 740 395 Z" 
          fill="${c.sole}" opacity="0.95"/>

    <!-- Main Upper Body -->
    <path d="M 140 400 
             Q 130 310 180 230 
             Q 240 160 340 140 
             Q 450 180 540 230 
             Q 660 250 780 270 
             Q 830 300 835 370 
             L 750 395 
             L 200 395 Z" 
          fill="url(#upperGrad)"/>

    <!-- Quick-Dry Skin-Friendly Mesh Texture -->
    <g stroke="rgba(255,255,255,0.12)" stroke-width="2" stroke-dasharray="3 3">
      <line x1="260" y1="200" x2="300" y2="380"/>
      <line x1="320" y1="180" x2="370" y2="380"/>
      <line x1="380" y1="185" x2="440" y2="380"/>
      <line x1="440" y1="200" x2="510" y2="380"/>
      <line x1="500" y1="220" x2="580" y2="380"/>
      <line x1="560" y1="240" x2="650" y2="380"/>
      <line x1="620" y1="255" x2="720" y2="380"/>
    </g>

    <!-- Synthetic TPU Ribs -->
    <path d="M 200 380 Q 250 250 340 220" stroke="${c.accent}" stroke-width="4" fill="none" opacity="0.6"/>
    <path d="M 320 380 Q 380 230 460 210" stroke="${c.accent}" stroke-width="4" fill="none" opacity="0.6"/>
    <path d="M 440 380 Q 500 240 580 230" stroke="${c.accent}" stroke-width="4" fill="none" opacity="0.6"/>

    <!-- Collar & Quick Toggle Laces -->
    <path d="M 180 230 Q 260 130 360 150 Q 320 220 180 230 Z" fill="#0c0d14"/>
    <g stroke="#e8b86d" stroke-width="3.5" fill="none">
      <line x1="360" y1="180" x2="420" y2="250"/>
      <line x1="420" y1="190" x2="480" y2="260"/>
      <line x1="470" y1="200" x2="540" y2="270"/>
      <line x1="530" y1="215" x2="600" y2="280"/>
    </g>

    <!-- Speed Toggle Cord Lock -->
    <rect x="420" y="145" width="24" height="32" rx="6" fill="#181924" stroke="#e8b86d" stroke-width="2.5"/>
    <circle cx="432" cy="161" r="5" fill="#e8b86d"/>
  </g>

  <!-- Feature Badge Overlay (Reflecting Attached Amazon Images) -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="340" height="46" rx="23" fill="rgba(15,16,25,0.9)" stroke="rgba(232,184,109,0.3)" stroke-width="1.5"/>
    <circle cx="24" cy="23" r="6" fill="#e8b86d"/>
    <text x="42" y="28" fill="#f0f0f5" font-family="system-ui, sans-serif" font-size="13" font-weight="700" letter-spacing="0.5">${c.label} - DRAINAGE &amp; ZERO-DROP</text>
  </g>
</svg>
`;
}

function buildSideViewSvg(cKey) {
  const c = colors[cKey];
  return `
<svg width="1200" height="900" viewBox="0 0 1200 900" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="bgGlow" cx="50%" cy="50%" r="70%">
      <stop offset="0%" stop-color="#1e2030"/>
      <stop offset="100%" stop-color="#07080c"/>
    </radialGradient>
    <linearGradient id="upperGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${c.secondary}"/>
      <stop offset="100%" stop-color="${c.primary}"/>
    </linearGradient>
    <linearGradient id="soleGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="${c.lug}"/>
      <stop offset="100%" stop-color="${c.sole}"/>
    </linearGradient>
    <filter id="shadowBlur" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="25"/>
    </filter>
  </defs>

  <rect width="1200" height="900" fill="url(#bgGlow)"/>
  <ellipse cx="600" cy="690" rx="460" ry="40" fill="#000000" opacity="0.85" filter="url(#shadowBlur)"/>

  <!-- Straight Side Profile Highlighting Zero-Drop & Wide Toe Box (Amazon Image #2 & #4) -->
  <g transform="translate(120, 220)">
    <rect x="100" y="360" width="760" height="45" rx="10" fill="url(#soleGrad)" stroke="${c.sole}" stroke-width="3"/>
    
    <!-- Drainage Ports -->
    <g fill="#0e0f17" stroke="#e8b86d" stroke-width="2">
      <circle cx="200" cy="382" r="8"/>
      <circle cx="340" cy="382" r="8"/>
      <circle cx="480" cy="382" r="8"/>
      <circle cx="620" cy="382" r="8"/>
      <circle cx="740" cy="382" r="8"/>
    </g>

    <!-- Side Silhouette -->
    <path d="M 100 360 
             Q 110 240 180 180 
             Q 280 100 420 140 
             Q 560 170 700 240 
             Q 850 280 860 360 Z" 
          fill="url(#upperGrad)"/>

    <!-- Wide Toe Box Highlight -->
    <path d="M 680 240 Q 860 270 860 360 L 680 360 Z" fill="${c.sole}" opacity="0.3"/>
    <path d="M 680 240 Q 860 270 860 360" stroke="${c.accent}" stroke-width="3" stroke-dasharray="6 6" fill="none"/>

    <line x1="80" y1="405" x2="880" y2="405" stroke="#e8b86d" stroke-width="2" stroke-dasharray="8 8"/>
    <text x="480" y="445" fill="#e8b86d" font-family="system-ui, sans-serif" font-size="16" font-weight="700" text-anchor="middle">ZERO DROP SOLE (NATURAL WALKING GAIT)</text>
  </g>

  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="310" height="42" rx="21" fill="rgba(15,16,25,0.85)" stroke="rgba(232,184,109,0.3)" stroke-width="1.5"/>
    <circle cx="24" cy="21" r="6" fill="#e8b86d"/>
    <text x="42" y="26" fill="#f0f0f5" font-family="system-ui, sans-serif" font-size="13" font-weight="700" letter-spacing="1">${c.label} - ZERO DROP</text>
  </g>
</svg>
`;
}

function buildSoleViewSvg(cKey) {
  const c = colors[cKey];
  return `
<svg width="1200" height="900" viewBox="0 0 1200 900" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="bgGlow" cx="50%" cy="50%" r="70%">
      <stop offset="0%" stop-color="#1e2030"/>
      <stop offset="100%" stop-color="#07080c"/>
    </radialGradient>
    <linearGradient id="soleRubber" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${c.sole}"/>
      <stop offset="100%" stop-color="#0a0b10"/>
    </linearGradient>
    <filter id="shadowBlur" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="20"/>
    </filter>
  </defs>

  <rect width="1200" height="900" fill="url(#bgGlow)"/>

  <!-- Outsole View with Drainage Holes (Amazon Image #1 & #3) -->
  <g transform="translate(420, 100)">
    <path d="M 70 80 
             Q 30 200 40 400 
             Q 50 600 100 720 
             Q 180 750 260 720 
             Q 310 600 320 400 
             Q 330 200 290 80 
             Q 180 30 70 80 Z" 
          fill="url(#soleRubber)" stroke="${c.lug}" stroke-width="4"/>

    <!-- Drainage Hole Grid in Sole -->
    <g fill="#000" stroke="#e8b86d" stroke-width="2.5">
      <circle cx="140" cy="300" r="10"/>
      <circle cx="220" cy="300" r="10"/>
      <circle cx="180" cy="360" r="10"/>
      <circle cx="140" cy="420" r="10"/>
      <circle cx="220" cy="420" r="10"/>
      <circle cx="180" cy="480" r="10"/>
      <circle cx="180" cy="540" r="10"/>
    </g>

    <!-- Toe Pod Lugs -->
    <g fill="${c.lug}" opacity="0.85">
      <ellipse cx="100" cy="110" rx="20" ry="28"/>
      <ellipse cx="145" cy="95" rx="18" ry="26"/>
      <ellipse cx="185" cy="95" rx="18" ry="26"/>
      <ellipse cx="225" cy="100" rx="18" ry="26"/>
      <ellipse cx="265" cy="120" rx="18" ry="26"/>
    </g>
  </g>

  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="360" height="42" rx="21" fill="rgba(15,16,25,0.85)" stroke="rgba(232,184,109,0.3)" stroke-width="1.5"/>
    <circle cx="24" cy="21" r="6" fill="#e8b86d"/>
    <text x="42" y="26" fill="#f0f0f5" font-family="system-ui, sans-serif" font-size="13" font-weight="700" letter-spacing="1">${c.label} - DRAINAGE HOLES</text>
  </g>
</svg>
`;
}

function buildHeroBannerSvg() {
  return `
<svg width="1920" height="1080" viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="skyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f1424"/>
      <stop offset="40%" stop-color="#181d36"/>
      <stop offset="80%" stop-color="#2a1e38"/>
      <stop offset="100%" stop-color="#0d0e17"/>
    </linearGradient>
    <linearGradient id="trailGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#263a4e"/>
      <stop offset="100%" stop-color="#0d1017"/>
    </linearGradient>
  </defs>

  <rect width="1920" height="1080" fill="url(#skyGrad)"/>
  <path d="M 0 700 L 300 450 L 600 620 L 950 380 L 1350 580 L 1650 420 L 1920 600 L 1920 1080 L 0 1080 Z" fill="#111322"/>
  <path d="M 0 850 Q 600 750 1100 880 Q 1500 980 1920 860 L 1920 1080 L 0 1080 Z" fill="url(#trailGrad)"/>

  <!-- Water Splash Effect (Reflecting Amazon Wading Image #1) -->
  <g fill="rgba(232,184,109,0.3)">
    <circle cx="1100" cy="820" r="14"/>
    <circle cx="1150" cy="790" r="20"/>
    <circle cx="1180" cy="840" r="10"/>
    <circle cx="1060" cy="850" r="16"/>
  </g>
</svg>
`;
}

async function main() {
  const publicDir = path.join(process.cwd(), 'public');

  for (const cKey of Object.keys(colors)) {
    const mainSvg = buildMainShoeSvg(cKey);
    const sideSvg = buildSideViewSvg(cKey);
    const soleSvg = buildSoleViewSvg(cKey);

    await sharp(Buffer.from(mainSvg)).jpeg({ quality: 90 }).toFile(path.join(publicDir, `shoe_${cKey}.jpg`));
    await sharp(Buffer.from(sideSvg)).jpeg({ quality: 90 }).toFile(path.join(publicDir, `shoe_${cKey}_side.jpg`));
    await sharp(Buffer.from(soleSvg)).jpeg({ quality: 90 }).toFile(path.join(publicDir, `shoe_${cKey}_sole.jpg`));
    console.log(`Generated enhanced images for ${cKey}`);
  }

  const heroSvg = buildHeroBannerSvg();
  await sharp(Buffer.from(heroSvg)).jpeg({ quality: 90 }).toFile(path.join(publicDir, 'hero_banner.jpg'));
  console.log('Generated hero_banner.jpg');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
