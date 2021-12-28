const fs = require('fs');
const { functions } = require('stylus');

fs.writeFileSync('./.env', `API=${process.env.API}\n`);