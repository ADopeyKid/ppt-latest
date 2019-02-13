const puppeteer=require('puppeteer');
const util=require('./utils/index');
const program=require('commander');
program.version('0.0.1')
    .option('-m, --mobile')
    .parse(process.argv);
const ifMobile=program.mobile;
const launchConfig={
    headless:false,
    devtools:true,
};
// todo 优化模拟手机效果
if(ifMobile){
    launchConfig.defaultViewport=util.iphoneViewportConfig
}
(async ()=>{
    const browser=await puppeteer.launch(launchConfig);
    const wsEPAddress=browser.wsEndpoint();
    const w_data=new Buffer(wsEPAddress);
    await util.coverFile(__dirname + '/wsa.txt', w_data);
    await browser.disconnect();
    // process.exit();
})().catch(util.errorLogNExit);