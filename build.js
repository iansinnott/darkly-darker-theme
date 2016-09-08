const fs = require('fs');
const path = require('path');

const output = JSON.stringify(require('./index.js'), null, 2);

fs.writeFileSync(path.join('dist', 'manifest.json'), output, {
  encoding: 'utf8',
});
