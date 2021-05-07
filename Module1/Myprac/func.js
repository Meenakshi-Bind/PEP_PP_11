let fs=require("fs");
//console.log(fs);
// let data=fs.readFileSync("./myext.js");
// console.log(data+" ");
// fs.writeFileSync("./prac.js","hi!");
// fs.writeFileSync("first.js","helloooo");
let extensionMap=require("./util.js");
let testFolder="./DOWN";
let allFiles=fs.readdirSync(testFolder);
//console.log(allFiles);
for(let i=0;i<allFiles.length;i++)
{
    //let extension=allFiles[i].split(".")
    sortFile(allFiles[i]);
}
function getExtension(Files)
{
    Files=Files.split(".");
    return Files[1];
}
function checkExtension(extension)
{let extensionFolderName;
for(let key in extensionMap)
{
let extensions=extensionMap[key];
//if(extensions[i]==extension)
    if(extensions.includes(extension))
    {
        extensionFolderName=key;
        break;
    }
}
    let Foldertobechecked=testFolder+"/"+extensionFolderName;
    let isFolderexits=fs.existsSync(Foldertobechecked);
    if(!isFolderexits)
    {
        fs.mkdirSync(Foldertobechecked);
    }
return Foldertobechecked;

}

function moveFile(Files,Foldertobe)

{
    let sourceFile=testFolder+"/"+Files;
    let destinationFile=Foldertobe+"/"+Files;
 fs.copyFileSync(sourceFile,destinationFile);
 fs.unlinkSync(sourceFile);
}

function sortFile(Files)
{
//let getExtension=Files.split(".");
//console.log(getExtension[1]);
let extensionFolderName;
let extension=getExtension(Files);
//console.log(data);
let Foldertobe=checkExtension(extension);
moveFile(Files,Foldertobe);
}
