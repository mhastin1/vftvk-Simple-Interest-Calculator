function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}
function compute()
{
//Populate the variables from the data that was input on the form
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear()+parseInt(years);

//Test for valid principal amount
    if (principal <= 0){
        alert("Please enter a positve number");
        document.getElementById("principal").focus();
    }
//If principal value is valid then show the output
    else{
        document.getElementById("result").innerHTML="If you deposit <mark>" +principal+ "</mark><br/>"+
                                                    "at an interest rate of <mark>" +rate+ "%</mark><br/>"+
                                                    "you will receive an amount of <mark>" +interest+ "</mark><br/>"+
                                                    "in the year <mark>" +year+ "</mark><br/>";
    }
    
}
        