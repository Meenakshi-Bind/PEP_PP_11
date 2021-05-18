const request=require("request");
const cheerio=require("cheerio");
const fs=require("fs");
//const getMatchDetails = require("../../LEC5/Web_Scrapping_intro/Activity/Activity3");
//let matchlink="https://www.espncricinfo.com/series/ipl-2020-21-1210595/mumbai-indians-vs-chennai-super-kings-1st-match-1216492/full-scorecard";
let leaderboard = [];
let countOfRequestSent=0;
// let leaderboard = [];
// let countOfRequestSent=0;

function getMatchDetails(teamLink){
   // console.log("Sending Request " , countOfRequestSent);
    request(teamLink , function(error , response , data){
        countOfRequestSent--;
        processData(data);
       // console.log("callback " , countOfRequestSent);
        if(countOfRequestSent == 0){
            console.table(leaderboard);
        }
    })
    countOfRequestSent++;
}
// request(matchlink,function(error,reponse,data)
// {
//     processData(data);
//     // console.log(data);
//     if(countOfRequestSent == 0){
//         console.table(leaderboard);
//     }
// })

function processData(html)
{
let myDocument=cheerio.load(html+"");
let B_Innings=myDocument(".card.content-block.match-scorecard-table .Collapsible");
for(let i=0;i<B_Innings.length;i++)
{
    let oneInning=myDocument(B_Innings[i]);
    let teamName=oneInning.find("h5").text();
    teamName=teamName.split("INNINGS")[0].trim();
    //console.log(teamName);
    let Alltr=oneInning.find(".table.batsman tbody tr");
    for(let j=0;j<Alltr.length-1;j++)
    {
        let Alltds=myDocument(Alltr[j]).find("td");
        if(Alltds.length>1)
        {
           let Batsman_Name=myDocument(Alltds[0]).text().trim();
           let runs=myDocument(Alltds[2]).text().trim();
           let balls=myDocument(Alltds[3]).text().trim();
           let fours=myDocument(Alltds[5]).text().trim();
           let sixes=myDocument(Alltds[6]).text().trim();
           let strike_rate=myDocument(Alltds[7]).text().trim();
           //console.log(`Batsman=${Batsman_Name} Runs=${runs} Balls=${balls} Fours=${fours} Sixes=${sixes} Strike_rate=${strike_rate}`);
           processLeaderBoard(teamName , Batsman_Name, runs , balls , fours , sixes);
        }
       
    }
   
    
    //console.log("########################################################################");
}
function processLeaderBoard(teamName , Batsman_Name , runs , balls , fours , sixes ){
    runs = Number(runs);
    balls = Number(balls);
    fours = Number(fours);
    sixes = Number(sixes);

    for(let i=0;i<leaderboard.length ; i++){
        let batsmanObject = leaderboard[i];
        
        if(batsmanObject.Team == teamName && batsmanObject.Batsman == Batsman_Name){
            batsmanObject.Runs = batsmanObject.Runs + runs;
            batsmanObject.Balls += balls;
            batsmanObject.Fours += fours;
            batsmanObject.Sixes += sixes;
            return;
        }
    }

    let batsmanObject = {
        Team : teamName ,
        Batsman : Batsman_Name ,
        Runs : runs ,
        Balls : balls , 
        Fours : fours , 
        Sixes : sixes
    }
    leaderboard.push(batsmanObject);
}





}

module.exports=getMatchDetails;