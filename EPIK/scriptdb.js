let pay=document.querySelector(".PaymentDone")
// window.location.reload();
let btn=document.querySelector("button.addContent");
let block=document.querySelector(".block");
let submit=document.querySelector(".submit");
let aftercheckout=document.querySelector(".afterCheckOut");
let popup=document.querySelector(".popCheckIn");

btn.addEventListener("click",function(){
    block.style.display = "none";
    popup.style.removeProperty("display");
    
})

let List=[];

submit.addEventListener("click",function(){
    let VehicleType=document.querySelector("select#cars");
    let VehicleNo=document.querySelector("input#VehicleNo");
    let phone=document.querySelector("input#Phoneno");
    let VehicleModel=document.querySelector("input#VehicleModel");
    let customer=document.querySelector("input#CustomerName");
    let counter=List.length;
    let bool=false;
for(let i=0;i<counter;i++)
{
  console.log(VehicleNo.value)
  if(List[i].type!=VehicleNo.value)
  {
   
    bool=false;
    console.log(bool)
  }
  else
  {
    alert("already Parked");
   bool=true;
   console.log(bool)
   counter=-1;
  }
  popup.style.display = "none";
    block.style.removeProperty("display");
}
if(bool==false)
{
  addMedia(VehicleType.value,VehicleNo.value,customer.value,phone.value,VehicleModel.value);
 window.location.reload();
}



   

   // window.location.reload();
})


let db;

let dbOpenRequest = indexedDB.open("Car", 2);
dbOpenRequest.onupgradeneeded = function (e) {
  db = e.target.result;
  db.createObjectStore("CAR_NAME", { keyPath: "mid" }); // table will only be create when db is create first time
};
dbOpenRequest.onsuccess = function (e) {
  db = e.target.result;
  fetchMedia();
};
dbOpenRequest.onerror = function (e) {
  alert("Inside on error !!");
};


function addMedia(VehicleType,VehicleNo,customer,phone,VehicleModel) {
    //   db me media add hojaega
    let txnObject = db.transaction("CAR_NAME", "readwrite"); // start transaction on mediaTable
    let NameTable = txnObject.objectStore("CAR_NAME"); // this will get access to mediaTable
    
    NameTable.add({ mid: Date.now(), type: VehicleNo,VehicleMODEL:VehicleModel,VehicleTYPE:VehicleType,Duration:new Date().getTime(), Contact : phone,NameCus:customer,CheckINDate:new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })}); // it will add this object in mediaTable or mediaStore
  
    txnObject.onerror = function (e) {
      console.log("txn failed");
      console.log(e);
      window.location.reload();
    };
  }
  function fetchMedia() {
    let txnObject = db.transaction("CAR_NAME", "readonly");
    let NameTable = txnObject.objectStore("CAR_NAME");
    let cursorObject = NameTable.openCursor(); //to iterate on all the rows / tuples
    cursorObject.onsuccess = function (e) {
      let cursor = cursorObject.result;
      if (cursor) {
        let NameObj = cursor.value;
        
        
        
        cursor.continue();
        
        append(NameObj,List);
      }
    };
  }
  function append(NameObj,List)
        {
       List.push(NameObj);
      // console.log(List)
        let table=document.querySelector(".table") 
        
        let telement=document.createElement("tr");
        telement.setAttribute('id','myTR');
        telement.innerHTML=`<tr >
        <th>${NameObj.type}</th>
        <th>${NameObj.VehicleMODEL}</th>
        <th>${NameObj.VehicleTYPE}</th>
        <th>${NameObj.Contact}</th>
        <th>${NameObj.CheckINDate}</th>
        <button class="buttonOut"><i class="fas fa-minus"></i>Check-Out</button>
       </tr>`
        table.append(telement);
        
        }
        
      let close=document.querySelector(".closeButton");
        close.addEventListener("click",function(){
         
          pay.style.display = "none";
        })
       
       
       
       