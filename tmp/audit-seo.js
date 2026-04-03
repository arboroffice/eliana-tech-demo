const fs = require('fs');
const path = require('path');

const baseDir = path.join(process.cwd(), 'app');

function walk(dir, filelist = []) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filepath = path.join(dir, file);
    const stat = fs.statSync(filepath);
    if (stat.isDirectory()) {
      walk(filepath, filelist);
    } else if (file === 'page.tsx' || file === 'page.js') {
      filelist.push(filepath);
    }
  });
  return filelist;
}

const pages = walk(baseDir);

const results = [];

pages.forEach(pagePath => {
  const content = fs.readFileSync(pagePath, 'utf8');
  const relativePath = path.relative(process.cwd(), pagePath);
  
  const hasH1 = /<h1/i.test(content);
  const hasMetadata = /export const metadata|generateMetadata/i.test(content);
  const hasCanonical = /canonical/i.test(content);
  const titleMatch = content.match(/title:\s*["'](.+?)["']/);
  const descMatch = content.match(/description:\s*["'](.+?)["']/);
  
  // Basic outgoing links check: look for Link component or <a> tags with href
  const links = [...content.matchAll(/href=["'](.+?)["']/g)].map(m => m[1]);
  const outgoingLinks = links.filter(l => l && !l.startsWith('#') && l !== '/');

  results.push({
    path: relativePath,
    hasH1,
    hasMetadata,
    hasCanonical,
    title: titleMatch ? titleMatch[1] : null,
    description: descMatch ? descMatch[1] : null,
    outgoingLinksCount: outgoingLinks.length
  });
});

console.log(JSON.stringify(results, null, 2));
