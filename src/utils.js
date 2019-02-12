const fs=require('fs');

const writeFile=(path,data,flag)=>new Promise((resolve,reject)=>{
    fs.writeFile(path, data, {flag}, function (err) {
        if(err) {
            console.error(err);
            reject();
        } else {
            console.log('写入成功');
            resolve();
        }

    });
});
const coverFile=(path,data)=>writeFile(path,data,"w+");
const readFile=(path,{flag= 'r+', encoding= 'utf8'}={})=>new Promise((resolve,reject)=>{
    fs.readFile(path, {flag, encoding}, function (err, data) {
        if(err) {
            console.error(err);
            reject();
        }
        console.log('read file data',data);
        resolve(data);
    });
});
const sleep=(time)=>new Promise(resolve => {
    setTimeout(resolve,time)
});

module.exports={
    writeFile,
    coverFile,
    readFile,
    sleep
};