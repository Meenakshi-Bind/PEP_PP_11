const puppeteer=require("puppeteer");
const id="1813310104@niet.co.in";
const pw="Dobby@12";
let mails=require("./mails.js");
async function login(){
    let browser=await puppeteer.launch({ 
    executablePath:"C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
    headless:false,
    defaultViewport:null,
    args:["--start-maximized"],
    //slowMo:50
    });
   
    let pages=await browser.pages();
    let tab=pages[0];
    await tab.goto("https://www.office.com/");
    await tab.waitForSelector('#hero-banner-sign-in-to-office-365-link' , {visible:true});
    let Element = await tab.$('#hero-banner-sign-in-to-office-365-link');
    let Link = await tab.evaluate( function(elem){ return elem.getAttribute("href"); }   , Element)
    let newTab = await browser.newPage();
    await newTab.goto(Link);
    await newTab.waitForSelector('input#i0116.form-control.ltr_override.input.ext-input.text-box.ext-text-box ', {visible:true});
    let element = await newTab.$('input#i0116.form-control.ltr_override.input.ext-input.text-box.ext-text-box');
    await newTab.type('input#i0116.form-control.ltr_override.input.ext-input.text-box.ext-text-box',id);
    await newTab.click("div.inline-block");
    await newTab.waitForTimeout(2000);
    await newTab.type("input#i0118.form-control.input.ext-input.text-box.ext-text-box",pw);
    await newTab.click("div.inline-block");
    await newTab.waitForTimeout(2000);
    await newTab.click("input#idBtn_Back");
    await newTab.waitForSelector('#ShellMail_link' , {visible:true});
    let Element2 = await newTab.$('#ShellMail_link');
    let Link2 = await newTab.evaluate( function(eleme){ return eleme.getAttribute("href"); }   , Element2)
    let newTab2 = await browser.newPage();
    await newTab2.goto(Link2);
    await newTab.waitForTimeout(2000);
    await newTab.close();
    for(let i=0;i<mails.length;i++)
    {
        await addMails(browser,newTab2,mails[i],i,mails.length);
    }
    await tab.waitForTimeout(2000);
    await tab.close();
    
};
login();

async function addMails(browser,newTab2,mails,i,length)
{ 
    
    let Too=mails["To"];
    let Subject=mails["Add a Subject"];
    let Message=mails["Message"];
    
    await newTab2.waitForSelector('.ms-Button-label.sDjQm2-pu3zdQ7E2MIynW.label-57', {visible:true});
    await newTab2.click('.ms-Button-label.sDjQm2-pu3zdQ7E2MIynW.label-57');
    await newTab2.waitForSelector('[aria-label="To"]', {visible:true});
    await newTab2.type('[aria-label="To"]',Too);
    await newTab2.type('input[aria-label="Add a subject"]',Subject);
    await newTab2.type('div[aria-label="Message body"]',Message);
    await newTab2.waitForTimeout(2000);
    await newTab2.click('[aria-label="Send"]');
    if(i==length-1)
    {
        await newTab2.waitForTimeout(2000);
        await newTab2.click("div._2KqWkae0FcyhdNhWQ-Cp-M");
        await newTab2.waitForSelector('a[aria-label="Sign out of this account"]',{visible:true});
        await newTab2.waitForTimeout(2000);
        await newTab2.click('a[aria-label="Sign out of this account"]');
        await newTab2.waitForTimeout(5000);
        await newTab2.close();
    }
}