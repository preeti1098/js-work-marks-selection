console.log('hello-world')



let usernumber = prompt('What is your number')
document.querySelector('.number').innerText = usernumber



if(usernumber <= 30){
    document.querySelector('.result').innerText = ' Sorry ! You are Fail.'


}else if (usernumber <= 35){
    document.querySelector('.result').innerText = ' Sorry ! You are Reappear.'


}else{
    document.querySelector('.result').innerText = ' Congratulations You are Pass.'
}


