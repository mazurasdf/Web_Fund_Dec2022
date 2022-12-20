console.log("hey it's me, the js file!");

// var sundae = {
//     "flavor": "vanilla",
//     "scoops": 2,
//     "toppings": ["hot fudge","peanuts"]
// }
// sundae["scoops"]

var count = 0;
function buttonClick(){
    count++;

    var countText = document.querySelector("#countText");

    // console.log(countText.innerText);
    countText.innerText = `you clicked ${count} times`;
    // .value(for inputs)
    // .style, .style.display, .style.backgroundColor
    // .src(for images)
}

function mouseOver(){
    console.log("you hovered over me!");

    var box = document.querySelector("#box");
    box.style.backgroundColor = "blue";
}

function mouseOut(){
    console.log("you hovered away from me!");
    var box = document.querySelector("#box");
    box.style.backgroundColor = "orangered";
}