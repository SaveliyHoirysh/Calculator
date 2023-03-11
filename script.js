let key = document.querySelectorAll(".key");
let input = document.querySelector("#display")
let exp = "";
let result = document.querySelector("#result")
let reset = document.querySelector("#reset")
for (let a of key) {
    a.addEventListener("click", function () {
        exp = exp + a.textContent
        input.value = exp;
    })

}
result.addEventListener("click", function () {
    input.value = eval(exp);
    exp = "";
})

reset.addEventListener("click", function () {
    input.value = 0;
    exp = "";
})


