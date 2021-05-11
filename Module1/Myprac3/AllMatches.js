const request=require("request");
const cheerio=require("cheerio");

// const get_all_link=require("./Match");
function get_all_link(AllMatchlink)
{
request(AllMatchlink,function cb(error,res,data)

{
  processData(data);

})
}
function processData(html)
{  let myDocument=cheerio.load(html);
    // console.log(html);
    let Allatag=myDocument('a[data-hover="Scorecard"]');
    //cosole.log(Allatag);
    //console.log(Allatag.length);
    for(let i=0;i<Allatag.length;i++)
    {
        let teamsLink="https://www.espncricinfo.com"+Allatag[i].attribs.href;
        console.log(teamsLink);
    }

}
module.exports=get_all_link;