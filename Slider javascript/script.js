let count = 1;

let slider1 = document.getElementById("slide1");
let slider2 = document.getElementById("slide2");
let slider3 = document.getElementById("slide3");    

function showSlide(num){

    count = count+num;
    console.log("Count:",count);
    if(count%3===1 || count%3===-1){
        slider1.style.display = "block";
        slider2.style.display = "none";
        slider3.style.display = "none";
    }
    else if(count%3===2 || count%3===-2){
        slider1.style.display = "none";
        slider2.style.display = "block";
        slider3.style.display = "none";
    }
    else{
        slider1.style.display = "none";
        slider2.style.display = "none";
        slider3.style.display = "block";
    }
}