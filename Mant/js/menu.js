let food=document.querySelectorAll(".size");
let cart=document.querySelector(".right");
let minus=document.querySelectorAll(".minus");
let plus=document.querySelectorAll(".plus");
let count=document.querySelectorAll("#count");

console.log(food.textContent);


cart.addEventListener("click", function(){
    window.location.assign("cart.html")
});

let listCart=[];
for(let i=0;i<minus.length;i++)
{   
    minus[i].addEventListener("click",function(){
        
        console.log(count);
        if(count[i].textContent == 0)
            {
               
               count[i].textContent=parseInt(count[i].textContent);
               listCart.push([food[i].textContent,count[i].textContent]);
               localStorage.setItem('listCart',listCart);
            }
            else{
               
                count[i].textContent=parseInt(count[i].textContent)-1;
                listCart.push([food[i].textContent,count[i].textContent]);
                localStorage.setItem('listCart',listCart);
            }
            console.log(listCart);
    })
        //;
        
    
    plus[i].addEventListener("click",function(){
       
        count[i].textContent=parseInt(count[i].textContent)+1;
        listCart.push([food[i].textContent,count[i].textContent]);
        localStorage.setItem('listCart',listCart);
        console.log(listCart);
    })
        
    

   
   
    
    
}

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

var input = document.getElementById("input-name");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 'Enter') {
   event.preventDefault();
   document.getElementById("continue").click();
  }
});

function splash(){
    let uname = document.getElementById("input-name").value;
    document.getElementById("spscreen").style.width = "0%";
    document.getElementById("name").innerHTML = "Hi! "+ uname+"..";
}

$(document).ready(function(){
    //create variable
    var counts = 0;
    $(".addtocart").click(function () {
    //to number and increase to 1 on each click
       counts += +1;
       $(".cart-counter").animate({
    //show span with number
                 opacity: 1
             }, 300, function () {
    //write number of counts into span
                 $(this).text(counts);
             });
         }); 
 });