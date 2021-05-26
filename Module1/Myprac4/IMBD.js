const fs=require("fs");
const request=require("request");
const cheerio=require("cheerio");
const download=require("image-downloader");
let link="https://www.imdb.com/chart/top/";
request(link,function cb(error,res,data)
{
processData(data);
});
function processData(html)
{
let myDocument=cheerio.load(html);
let Table=myDocument(".table.chart.full-width");
let AllTr=myDocument("tbody.lister-list tr");
let $ = cheerio.load(html);
for(let i=0;i<10;i++)
{
    let AllTd=myDocument(AllTr[i]).find("td");
    let imgtag=myDocument(".posterColumn img");
    let link=imgtag[i].attribs.src;
    let title=myDocument(AllTd[1]).text().trim();
    title=title.split(".");
    let Movie_position=title[0];
   // console.log("POSITION-",Movie_position);
    let iMBD_Rating=myDocument(AllTd[2]).text().trim();
   // console.log("IMBD_RATING - "+iMBD_Rating);
    let name_of_Movie=title[1]+"";
    let MOVIENAME=title[1];
    //console.log("NAME-",name_of_Movie);
    let post=`./Top_Ten_Folder/${Movie_position}.jpg`
    let atag=myDocument(".posterColumn a");
    let movie_link="https://www.imdb.com/"+atag[i].attribs.href;
    //console.log("LINK-",movie_link);
    processFunction(link,Movie_position,post,name_of_Movie,iMBD_Rating,movie_link,MOVIENAME)
   }
function createDETAILfolder(Movie_position,name_of_Movie,iMBD_Rating,movie_link,MOVIENAME)
{
let DETAILS=[];
let detu={
    NAME:MOVIENAME,
    IMBD_RATING:iMBD_Rating,
    LINK:movie_link
}
DETAILS.push(detu);
let Path = `./Top_Ten_Folder/${Movie_position}/${iMBD_Rating}.json`;
fs.writeFileSync(Path,JSON.stringify(DETAILS));
}
function createPosterFolder(link,Movie_position,post,)
{
    fs.writeFileSync(post,"");
    const options = {
        url: link,
        dest: post    
    } 
    let filename=post; 
    download.image(options)
     .then(({filename}) => {
      //console.log(filename)
    // saved to /path/to/dest/image.jpg
    })
    .catch((err) => console.error(err)) 
}
function checkPoster(post)
{
    return fs.existsSync(post);
}
function checkMovie(Movie_position)
{
    let path=`./Top_Ten_Folder/${Movie_position}`
    return fs.existsSync(path);
}
function createMovieFolder(Movie_position){
    let Path = `./Top_Ten_Folder/${Movie_position}`;
    fs.mkdirSync(Path);
}
function  processFunction(link,Movie_position,post,name_of_Movie,iMBD_Rating,movie_link,MOVIENAME)
{ let POSTERCHECK=checkPoster(post);
    if(POSTERCHECK)
    {
        return;
        //console.log("ban chuka hai poster");
    }
    else
    {
        createPosterFolder(link,Movie_position,post,);
    }
   let Moviescheck=checkMovie(Movie_position);
   if(Moviescheck)
   {   //console.log("ban chuka hai movie")
     return;
   }
   else
   {
    createMovieFolder(Movie_position);
    createDETAILfolder(Movie_position,name_of_Movie,iMBD_Rating,movie_link,MOVIENAME);
   }
}
}