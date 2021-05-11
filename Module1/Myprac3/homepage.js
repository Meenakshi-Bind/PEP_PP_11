let matchlink="https://www.espncricinfo.com/series/ipl-2020-21-1210595";
const request=require("request");
const cheerio=require("cheerio");
// const get_all_link=require("./AllMatches"); 
const get_all_link=require("./AllMatches");
request( matchlink , cb );
function cb(error , response , data)
{
    processData(data);
}
function processData(data)
{
    let myDocument=cheerio.load(data);
    let atag=myDocument(".widget-items.cta-link a");
    //console.log(atag);
    let AllMatchlink="https://www.espncricinfo.com"+atag["0"].attribs.href;
    // console.log(AllMatchlink);
    get_all_link(AllMatchlink);

}
