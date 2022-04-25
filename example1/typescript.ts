const button = document.querySelector("button");

// putting `!` at the end tells typescript that the `getElementById` will not return null
// then we cast this variable to an `HTMLInputElement` which tells TS that the constants have `.value`
// otherwise it shows an error because there's no gauruntee that the constants have `.value`
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

// Telling TS that this function params will be `numbers` causes an error where we're calling the function (see below)
const add = (num1: number, num2: number) => {
    return num1 + num2;
}

button.addEventListener("click", () => {
    // typescript knows that HTML Inputs are always strings
    // so we must cast the param to a number first
    // seems tedious but the point is that TS caught the error on its own
    console.log(add(Number(input1.value), Number(input2.value)));
});
