let arr_left = document.querySelector(".arr-left");
let arr_right = document.querySelector(".arr-right");
let counter = 0;

let logos = document.querySelectorAll("#logo");
let titles = document.querySelectorAll("#title");
let descriptions = document.querySelectorAll("#description");
let pictures = document.querySelectorAll("#picture");
let li = document.querySelectorAll("li");

arr_right.addEventListener("click", () => {
	if (counter < 2)
	{
		counter++;
		change_carrou_pos(counter);
	}
});

arr_left.addEventListener("click", () => {
	if (counter > 0)
	{
		counter--;
		change_carrou_neg(counter);
	}
});

function change_carrou_pos(counter){
	logos[counter-1].className = "old"
	titles[counter-1].className = "old"
	descriptions[counter-1].className = "old"
	pictures[counter-1].className = "old"
	logos[counter].className = "activ"
	titles[counter].className = "activ"
	pictures[counter].className = "activ"
	descriptions[counter].className = "activ"
	li[counter].className = "activ"
	arr_left.classList.add("activ");
}

function change_carrou_neg(counter)
{
	logos[counter].classList.add("activ");
	logos[counter].classList.remove("old");
	logos[counter + 1].classList.remove("activ");
	titles[counter].classList.add("activ");
	titles[counter].classList.remove("old");
	titles[counter + 1].classList.remove("activ");
	descriptions[counter].classList.add("activ");
	descriptions[counter].classList.remove("old");
	descriptions[counter + 1].classList.remove("activ");
	pictures[counter].classList.add("activ");
	pictures[counter].classList.remove("old");
	pictures[counter + 1].classList.remove("activ");
	li[counter + 1].classList.remove("activ");
	if (counter == 0)
		arr_left.classList.remove("activ");
}