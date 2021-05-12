// let n = 86;
// console.log(decToBin(n));
// function decToBin(x) {
//     let ans = 0;
//     let pow = 1;
    
//     while (x != 0) {
//         let rem = x % 2;
//         x = parseInt(x / 2);
//         ans = ans + rem * pow;
//         pow = pow * 10;
//     }
//     return(ans);
// }
// function DecimalToBinary(n) {
//     let ans=0;
//     let rem=0;
//     let power=1;
//     const base=2;
//     const ten=10;
//     while(n!=0)
//     {   
//         rem=n%base;
//         n=n/base;
//         ans=ans+(rem*power);
//         power=power*ten;
//     }return ans;
// }

    
    
   


    // let ans = 0;let x=n;
    // let rem, power = 1;
    // while (x != 0) {
    //     rem = x % 2;
    //     x = x / 2;
    //     ans = ans + rem * power;
    //     power = power * 10;
    let n = 86;
console.log(decToBin(n));
function decToBin(x) {
    let ans = 0;
    let pow = 1;
    
    while (x != 0) {
        let rem = x % 2;
        x = parseInt(x / 2);
        ans = ans + rem * pow;
        pow = pow * 10;
    }
    return ans;
}