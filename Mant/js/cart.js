let cartfinal=document.querySelector(".listCart");
let deleteBtn=document.querySelector("#delete");

let name11=[localStorage.getItem('listCart')];

deleteBtn.addEventListener("click",function(){
  
})


let order=name11[0].split(",")

for(let i=0;i<order.length;i++)
{
  
          if(i%2==0 && i!=order.length)
          {
            let pTag = document.createElement("p");
            pTag.classList.add("order");
            pTag.textContent = order[i]+"  "+order[i+1];
            cartfinal.append(pTag);
     
          }  
            
        
    

    
}


// cartfinal.textContent=name11;