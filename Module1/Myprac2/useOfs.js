// use of -s
const fs=require("fs");
//console.log(fs);
let Dataone=fs.readFileSync("./data1.txt","utf8");
let Datatwo=fs.readFileSync("./data2.txt","utf8");
// console.log(Dataone);
let Sorted=[];
// let Sorted_final=[];
Data=useOfS(Dataone);
console.log(Data);
function useOfS(Data)
{   
    let Splitted_data = Data.split("\r\n");
    //console.log(Splitted_data);
    let Spaces=false;
    for(let i=0;i<Splitted_data.length;i++)
    {
        if(Splitted_data[i]=="" && Spaces==false)
        {
        Sorted.push(Splitted_data[i]);
        
        Spaces=true;
        }
        else if(Splitted_data[i]!="")
        {
           Sorted.push(Splitted_data[i]);
           if(i<Splitted_data-2=="")
           {
               Spaces=false;
           }
           
        }
    }
    let Sorted_final= Sorted.join("\r\n");
    return Sorted_final;

}
