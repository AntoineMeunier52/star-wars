let arr_left = document.querySelector(".arr-left");
let arr_right = document.querySelector(".arr-right");

arr_right.addEventListener("mouseover", () => {
	console.log("mouse on");
});

let list_li = document.querySelectorAll("li");

arr_left.addEventListener("click", () => {
	console.log(list_li.length);
});