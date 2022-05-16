const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerSet = "abcdefghijklmnopqrstuvwxyz"
const numberSet = "1234567890"
const symbolSet = "~!@#$%^&*()_+/"


const passBox = document.getElementById('passBox');
const totalLength = document.getElementById('total-char');
const upper = document.getElementById('upper-case');
const lower = document.getElementById('lower-case');
const number = document.getElementById('number');
const symbol = document.getElementById('symbol');
const copyBtn = document.getElementById('btn2');
console.log(passBox)
const getRandomData = (dataSet)=>{
    return dataSet[Math.floor(Math.random()*dataSet.length)];
}


const generatePass = (password = "") =>{
    if(upper.checked)
    {
        password+= getRandomData(upperSet);
    }
    if(lower.checked)
    {
        password+= getRandomData(lowerSet);
    }
    if(number.checked)
    {
        password+= getRandomData(numberSet);
    }
    if(symbol.checked)
    {
        password+= getRandomData(symbolSet);
    }

    if(password.length< totalLength.value)
    {
        return generatePass(password);
    }

    let answer = truncatePass(password,totalLength.value);
    console.log(answer)
    passBox.value = answer;
}

generatePass();

document.getElementById("btn").addEventListener(
    "click",
    function(){
        generatePass();
        copyBtn.innerHTML = "Copy";
        copyBtn.style.backgroundColor = "white";
    }
)
document.getElementById("btn2").addEventListener(
    "click",
    function(){
        navigator.clipboard.writeText(passBox.value);
        copyBtn.innerHTML= "Copied";
        copyBtn.style.backgroundColor = "#66AD47";
        copyBtn.style.transition = "0.4s";
    }
)

function truncatePass(password,num)
{
    if(password.length>num)
    {
        let substr = password.substr(0,num);
        return substr;
    }
    else
    {
        return password;
    }
}