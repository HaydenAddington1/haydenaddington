import puppeteer from 'puppeteer';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const resumeHtml = resolve(__dirname, 'public', 'resume.html');
const resumePdf  = resolve(__dirname, 'public', 'resume.pdf');

const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
const page = await browser.newPage();

await page.goto(`file://${resumeHtml}`, { waitUntil: 'networkidle0' });

await page.pdf({
  path: resumePdf,
  format: 'Letter',
  printBackground: true,
  margin: { top: '0', right: '0', bottom: '0', left: '0' },
});

await browser.close();
console.log('resume.pdf generated successfully');
