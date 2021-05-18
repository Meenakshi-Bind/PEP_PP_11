const fs=require("fs");
let files=["./f1.txt","./f2.txt","./f3.txt"];
for(let i=0;i<files.length;i++)
{
while(data.length>0)
{    
let promise=fs.promises.readFile(files[i]);
promise.then(function(data){
    console.log(data+"");
})
}
}