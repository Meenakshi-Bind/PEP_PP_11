const fs=require("fs");
let promises=fs.promises.readFile("./f1.txt","utf8");
console.log(promises);
promises.then(function(data){
    console.log("inside suc");
    console.log(data);
    console.log(promises);
})
promises.catch(function(data)
{
    console.log("inside fail");
    console.log(data);
    console.log(promises);
})
