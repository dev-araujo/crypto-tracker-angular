const fs = require('fs');
const path = require('path');
require('dotenv').config();

const envConfigFile = `
export const environment = {
    url: {
        baseUrl: 'https://api.coinranking.com/v2/',
    },
    tokens: {
        ACCESSTOKEN: '${process.env.COINRANKING_API_KEY || ''}'
    }
};
`;

const targetPath = path.join(__dirname, '../src/environments/environment.ts');
const targetDevPath = path.join(__dirname, '../src/environments/environment.development.ts');

fs.mkdirSync(path.join(__dirname, '../src/environments'), { recursive: true });

fs.writeFileSync(targetPath, envConfigFile.trim() + '\n');
console.log(`Output generated at ${targetPath}`);

fs.writeFileSync(targetDevPath, envConfigFile.trim() + '\n');
console.log(`Output generated at ${targetDevPath}`);
