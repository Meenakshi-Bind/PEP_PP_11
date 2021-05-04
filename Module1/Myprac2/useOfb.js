const fs=require("fs");
let Dataone=fs.readFileSync("./data1.txt","utf8");
let Datatwo=fs.readFileSync("./data2.txt","utf8");
let Data=useOfB(Dataone);
console.log(Data);
function useOfB(Data)
{   let Sorted=[];
    let Spaces=false;
    let Splitted_data=Data.split("\r\n");
    count=1;
    let final;
    for(let i=0;i<Splitted_data.length;i++)
    {
        if(Splitted_data[i]=="")
         {
          Sorted.push(Splitted_data[i]);
        

        }
        if(Splitted_data[i]!="")
        {

            Sorted.push(`${count}.${Splitted_data[i]}`);
            final= Sorted.join("\r\n");
            count++;

        }
    }return final;
}