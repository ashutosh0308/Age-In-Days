console.log("Welcome to age In Days");

function ageInDays(){
    let year = prompt("What is your birth year?");
    let age = (2021-year)*365;

    let h1 = document.createElement('h1'); // creating element to store ans
    let ans;
    if(age>=0)
        ans = document.createTextNode("You are "+age+" days old."); // creating a text sting
    else
        ans = document.createTextNode("You are yet to be born.");

    h1.setAttribute('id','age'); //Setting value of ID attribute of h1 element that we created
    h1.appendChild(ans); // appending ans to element
    document.getElementById("box-result-1").appendChild(h1); //appending element to result div
    
}
function reset(){
    document.getElementById("age").remove();
}

