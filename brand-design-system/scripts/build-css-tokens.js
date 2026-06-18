const fs = require('fs');
const path = require('path');

const tokenPath = path.join(__dirname, '..', 'design-tokens', 'tokens.json');
const outPath = path.join(__dirname, '..', 'design-tokens', 'tokens.generated.css');

const tokens = JSON.parse(fs.readFileSync(tokenPath, 'utf8'));
const lines = [':root {'];

function kebab(parts) {
  return parts.join('-').replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}

function walk(node, parts = []) {
  if (node && typeof node === 'object' && Object.prototype.hasOwnProperty.call(node, 'value')) {
    lines.push(`  --${kebab(parts)}: ${node.value};`);
    return;
  }

  if (node && typeof node === 'object') {
    for (const [key, value] of Object.entries(node)) {
      if (key !== '$schema') walk(value, [...parts, key]);
    }
  }
}

walk(tokens);
lines.push('}');
lines.push('');

fs.writeFileSync(outPath, lines.join('\n'));
console.log(`Generated ${outPath}`);
