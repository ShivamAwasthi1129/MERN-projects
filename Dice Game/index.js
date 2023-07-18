
var digit = document.body.getElementsByClassName('number')[0];
var button = document.getElementsByClassName("mybutton")[0];
var screen = document.getElementById('output');


function generateNumber(){
    const randomNumber = Math.trunc(Math.random()*(7-1) + 1);
    return randomNumber;
}

digit.addEventListener("click" , function(){
    const image2 = "/die rolls/d" +digit.value+ ".jpg";
    document.querySelector('#die2').setAttribute("src" , image2);
})
button.addEventListener("click" , function(){
    var result = generateNumber();
    const image1 = "/die rolls/d" +result+ ".jpg";
    document.querySelector('#die1').setAttribute("src" , image1);
    
    if(digit.value <  result){
        screen.innerHTML = "Computer Win 🤵 < 💻";
    }
 
    else if(digit.value >  result){
        screen.innerHTML = "User Win 🤵 > 💻";
    }
    else{
        screen.innerHTML = "Match Draw 💻==🤵";
   }
  

})

