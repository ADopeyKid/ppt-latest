const puppeteer=require('puppeteer');
const util=require('./utils/index');
const getWSAddress=()=>util.readFile(__dirname + '/wsa.txt');
(async ()=>{
    const wsAddress=await getWSAddress();
    const browser=await puppeteer.connect({browserWSEndpoint:wsAddress});
    const context=await browser.createIncognitoBrowserContext();
    const page=await context.newPage();
    await page.goto('https://weibo.com/zhangxv1992/home?wvr=5');
    process.exit();
})().catch(util.errorLogNExit);