const fs=require("fs");
let Dataone=fs.readFileSync("./data1.txt","utf8");
let Datatwo=fs.readFileSync("./data2.txt","utf8");
let Data=useOfN(Dataone);
console.log(Data);
function useOfN(Data)
{    
    Sorted=[];
    let Splitted_data=Data.split("\r\n");
    count=1;let replaced;
    for(let i=0;i<Splitted_data.length;i++)
    {
        // `${count}.${Splitted_data[i]}`);
     Splitted_data[i]=count+". "+Splitted_data[i];
     count++;
    replaced= Splitted_data.join("\r\n");
    }
    
    return replaced;
}