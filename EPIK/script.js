 
 setTimeout(function() {
    let OUTcheck=document.querySelectorAll("button.buttonOut");
    // console.log(OUTcheck.length+"dff")
    for(let i=0;i<OUTcheck.length;i++)
    {
        OUTcheck[i].addEventListener("click",function(e){
            
            aftercheckout.style.removeProperty("display");
           
            
                block.style.display = "none";
                let table2=document.querySelector(".popCheckOut");
                let telement2=document.createElement("tr");
                telement2.innerHTML=`<tr>
                <td>${List[i].NameCus}</td>
                <td>${List[i].Contact}</td>
                <td>${List[i].type}</td>
                <td>${List[i].VehicleMODEL}</td>
               
            </tr> ` 
            let table3=document.querySelector(".popCheckOut2");
            let telement3=document.createElement("tr");
            telement3.innerHTML=`<tr> 
            <td>${List[i].VehicleTYPE}</td>
            <td>${List[i].CheckINDate}</td>
            <td>${new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })}</td>
            <td>${Math.round((((new Date().getTime()-List[i].Duration)/1000)/60)/60)}hrs</td>
            </tr>`
            table2.append(telement2);
            table3.append(telement3);
       
            
        })
    }
}, 1000);
 
 
 let buttonPro=document.querySelector("button.Pro");

 buttonPro.addEventListener("click",function(){
    aftercheckout.style.display = "none";
    block.style.display = "";
    pay.style.display = "";
 })
 
 
 
 
 
 //after the submission
 
 function myFunction() {
    let input, filter, tr,th, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    tr = document.querySelectorAll("#myTR");
    
    for (i = 0; i < tr.length; i++) {
        th = tr[i].getElementsByTagName("th");
        txtValue = th[0].textContent;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        }
    }
}
 
 
 
 
       