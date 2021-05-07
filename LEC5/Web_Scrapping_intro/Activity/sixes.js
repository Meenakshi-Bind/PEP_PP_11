let link="https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard";
const request=require("request");
const fs=require("fs");
const cheerio=require("cheerio");
request(link,cric);
//let htmlKaData = fs.readFileSync("./highsix.html" , "utf8");
//console.log(htmlKaData);
function cric(error,response,data)
{
    getsixes(data);
//console.log(data);
 //fs.writeFileSync("./highsix.html",data);

}
function getsixes(data)
{
    let myDocument=cheerio.load(data);
    let both_batting_table=myDocument(".table.batsman");
    //console.log(both_batting_table.length);
    //fs.writeFileSync("./onlytable.html",both_batting_table);
    //console.log(both_batting_table.find("tbody tr"));
    let high_sixes_hitter_name;
    let high_sixes_number;
    let strike_rate;
    //console.log(myDocument(both_batting_table[0]).text());
    for(let i=0;i<both_batting_table.length;i++)
    {  
        
        let batting_table=myDocument(both_batting_table[i]);
        let Table_row=batting_table.find("tbody tr");
        //console.log(Table_row);
        
       
        for(let j=0 ; j<Table_row.length ; j++)
        {
           
         let allTds = myDocument(Table_row[j]).find("td");
        if(allTds.length > 1)
        {
            if(i==0 && j==0)
        {
        high_sixes_hitter_name=myDocument(allTds[0]).find("a").text();
        //console.log(high_sixes_hitter_name);
        high_sixes_number=myDocument(allTds[6]).text();
        //console.log(high_sixes_number);
        strike_rate=myDocument(allTds[7]).text();
        //console.log(strike_rate);
         }
        else
         {
        let current_sixer_hitter_name=myDocument(allTds[0]).find("a").text();
        //console.log("name"+current_sixer_hitter_name);
        let current_high_sixer_number=myDocument(allTds[6]).text();
        //console.log(current_high_sixer_number)
        let current_strike_rate=myDocument(allTds[7]).text();
        //console.log(current_strike_rate);
        if(current_high_sixer_number>high_sixes_number )
        {
            high_sixes_hitter_name=current_sixer_hitter_name;
            
            high_sixes_number=current_high_sixer_number;
            
            strike_rate= current_strike_rate;
           
            
        }
        else if(current_high_sixer_number==high_sixes_number)
        {
            if(strike_rate<current_strike_rate)
            {
                high_sixes_hitter_name=current_sixer_hitter_name;
            
               high_sixes_number=current_high_sixer_number;
            
              strike_rate= current_strike_rate;
           
            }
        }
    }
    }
    }
    
 } console.log("NAME ="+high_sixes_hitter_name);
 console.log("Sixes ="+ high_sixes_number);
 console.log("Strike Rate ="+strike_rate);
}



