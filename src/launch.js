const puppeteer=require('puppeteer');
const fs=require('fs');
const util=require('./utils');
const launchConfig={
    headless:false
};
(async ()=>{
    const browser=await puppeteer.launch(launchConfig);
    const wsEPAddress=browser.wsEndpoint();
    const w_data=new Buffer(wsEPAddress);
    await util.coverFile(__dirname + '/wsa.txt', w_data);
    await browser.disconnect();
    // process.exit();
})().catch(err=>{
    console.log(err);
    process.exit();
});