const fs = require('fs');
const path = require('path');

const required = [
  'README.md',
  'CLAUDE.md',
  'package.json',
  'design-tokens/tokens.json',
  'design-tokens/tokens.css',
  'foundations/brand-foundation.md',
  'foundations/voice-and-tone.md',
  'components/component-guidelines.md',
  'components/examples/button.html',
  'components/examples/card.html',
  'assets/asset-inventory.md'
];

const root = path.join(__dirname, '..');
const missing = required.filter((file) => !fs.existsSync(path.join(root, file)));

if (missing.length) {
  console.error('Missing required files:');
  for (const file of missing) console.error(`- ${file}`);
  process.exit(1);
}

console.log('Brand design system structure looks good.');
