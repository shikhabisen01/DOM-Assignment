

const decrementbtn = document.getElementById("decrementbtn");
const incrementbtn = document.getElementById("incrementbtn");
const resetbtn = document.getElementById("resetbtn");
const displayvalue = document.getElementById("displayvalue");

// for decrement btn 

decrementbtn.addEventListener ("click", () => {

    const value = Number(displayvalue.innerText);
    if (value > 0) {
        displayvalue.innerText = value - 1 ;  
    }else {
        alert ("Negative value not allowed");
    }

});

// for increment btn

incrementbtn.addEventListener ("click", () => {

    const value = Number(displayvalue.innerText);
    if (value >= 10) {
        alert("10+ values are not allowed");
    } else {
        displayvalue.innerText = value + 1 ;
        
    }
});

// for reset btn

resetbtn.addEventListener ("click", () => {
    displayvalue.innerText = 0

});


