// JS IN CONSOLE


// // let user enter the no 
// // by using prompt fn
// let n=prompt("enter a number")

// // defining the fn
// function number(n){
//     if(n<0){
//         console.log('number is negative')
//     }
//     else if(n==0){
//         console.log('number is zero')
//     }
//     else{
//         console.log('number is positive')
//     }
// }
// // calling the fn
// number(n);




// USER INTRACTION WITH SCREEN DISPLAY



document.getElementById('btn').onclick = function () {
    let n = document.getElementById('inp').value

    if (n < 0) {
        document.getElementById('result').innerHTML="the number is negative"
    }
    else if (n == 0) {

        document.getElementById('result').innerHTML="the number is zero"
    }
    else {
        document.getElementById('result').innerHTML="the number is postive"
    }
    

}




