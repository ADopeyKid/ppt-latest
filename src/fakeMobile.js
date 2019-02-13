const puppeteer=require('puppeteer');
const util=require('./utils/index');
const getWSAddress=()=>util.readFile(__dirname + '/wsa.txt');
(async ()=>{
    const wsAddress=await getWSAddress();
    const browser= await puppeteer.connect({
        browserWSEndpoint :wsAddress,
        defaultViewport:util.iphoneViewportConfig,
    });
    // const context=await browser.createIncognitoBrowserContext();
    const page=await browser.newPage();
    await page.goto('https://weibo.com/zhangxv1992/home?wvr=5');
    await util.sleep(2000);
    console.log(`end ${new Date()}`);
    process.exit();
})().catch(util.errorLogNExit);