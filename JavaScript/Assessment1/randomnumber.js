const randomNumber = Math.floor(Math.random()*10 + 1)

//prompting user to input any number 

const userNumber = parseInt(prompt("enter any random number"))

if(userNumber < 10 ){
    console.log("Good work")
}
else{
    console.log("Not Matched")
}