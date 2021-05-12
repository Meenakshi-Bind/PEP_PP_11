// Title: 
// Rain Dance

// Meta-Tags:
// Javascript, JS, interview, questions, interview questions, arrays,objects,practice

// Description:
// You are given a week's rainfall data of few cities 
// Using the data write a function rainDance which returns an array of objects each object containing city name and average rainfall.

// Constraints:
// Nil





// Test Cases:
//     Input#1
//     [
//         { name: "Delhi", rainfall: [2.3, 4, 3.1, 5.5, 1.1, 1.2, 7] },
//         { name: "Noida", rainfall: [6.3, 0, 0.1, 3.5, 1, 2.6, 0.7] },
//         { name: "Dehradun", rainfall: [12, 5.6, 3.1, 0.55, 11, 16.2, 19] },
//         { name: "Nanital", rainfall: [8, 1.4, 0.61, 15.5, 6.6, 2, 9.82] },
//     ]

//     Output#1
//     [   
//         
//     ]

//     Input#2
//     [
//         { name: "Boston", rainfall: [1, 2, 3, 4, 5, 6, 7] },
//         { name: "Chandler", rainfall: [0, 0, 1, 0, 0, 1, 1] },
//         { name: "Charlotte", rainfall: [2, 2, 2, 2, 2, 2, 2] },
//         { name: "Dallas", rainfall: [3, 3, 2, 6, 1, 3, 8] },
//     ]

//     Output#2
//      [
//         { name: "Boston", avgRainfall: 4 },
//         { name: "Chandler", avgRainfall: 0.42857142857142855 },
//         { name: "Charlotte", avgRainfall: 2 },
//         { name: "Dallas", avgRainfall: 3.7142857142857144 },
//     ]
// Sample Input:
// [
//   { name: "Roorkee", rainfall: [5, 6, 5, 5, 4, 7, 8] },
//   { name: "Pauri", rainfall: [3, 3, 3, 1, 2, 2, 2] },
// ];
// Sample Output:
;

let data=require("./Mod.js");
let num=[];let avg=[];let name=[];
 for(let i=0;i<data.length;i++)
 {
let Raindata=data[i];

num.push(Raindata.rainfall);
name.push(Raindata.name);
}
Total_Average=getsum(num);
for(let i=0;i<Total_Average.length;i++)
{
    let ans=Total_Average[i];
    
    console.log("{"+"name:"+name[i]+","+"avgRainfall:"+ans+"}");
}

 function getsum(num)
 {  
    
     for(let i=0;i<num.length;i++)
     {let sum=0; 
     let arr=num[i];
     
     for(let j=0;j<arr.length;j++)
     {
        sum=(sum+arr[j]);
         
     }
     avg[i]=sum/arr.length;
     
    }return avg;
 }
    
// [
//   { name: "Roorkee", avgRainfall: 5.714285714285714 },
//   { name: "Pauri", avgRainfall: 2.2857142857142856 },
// ]
