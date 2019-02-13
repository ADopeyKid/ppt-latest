const nodeUtils=require('./nodeUtils');
const puppeteerUtils=require('./puppeteerUitls');
const utils=require('./utils');
module.exports={
    ...nodeUtils,
    ...puppeteerUtils,
    ...utils,
};