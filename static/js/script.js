console.log("Welcome to age In Days");

function count_leap(m,y) //Counting Leap Years
{
    let years = y;
    if(m<=2)
        years--;

    return Math.floor(years/4) - Math.floor(years/100) + Math.floor(years/400) ;
}


function ageInDays(){

    cur_date = new Date()  //Current Date Obj
    cur_day = Number(cur_date.getDate());  // Current Day
    cur_month = Number(cur_date.getMonth()) +1; // Current Month (func returns 0 to 11)
    cur_year = Number(cur_date.getFullYear()); // Current Year

    user_date = document.getElementById("date").value;
    user_arr = user_date.split("-");

    user_day = Number(user_arr[2]);
    user_month = Number(user_arr[1]);
    user_year = Number(user_arr[0]);
    
    days=[31,28,31,30,31,30,31,31,30,31,30,31];
    // User Date
    let d1 = user_year*365 + user_day;
    for(let i=0;i<user_month-1;i++)
    {
        d1+=days[i];
    }
    
    d1+= count_leap(user_month,user_year);
    // Current Date
    let d2 = cur_year*365 + cur_day;
    for(let i=0;i<cur_month-1;i++)
    {
        d2+=days[i];
    }
    d2+= count_leap(cur_month,cur_year);
    // Age in days
    let age = d2-d1;

    let h1 = document.createElement('h1'); // creating element to store ans
    let ans;
    if(age>=0)
        ans = document.createTextNode("You are "+age+" days old."); // creating a text sting
    else
        ans = document.createTextNode("You are yet to be born!");

    h1.setAttribute('id','age'); //Setting value of ID attribute of h1 element that we created
    h1.appendChild(ans); // appending ans to element
    document.getElementById("box-result-1").appendChild(h1); //appending element to result div
    
}
function reset(){
    document.getElementById("box-result-1").innerHTML= "";
}

