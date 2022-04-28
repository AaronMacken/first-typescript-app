// ===================================== BASIC TYPES ===================================== //

// we need to define types for these params
// by leaving as default (n1, n2) we're choosing no type constraints
// list the expected type after the params
const add = (n1: number, n2: number, showResult: boolean, resultPhrase: string) => {
    const result = n1 + n2
    if (showResult) {
        // this will create a bug, because now all params are converted to strings / not caught by TS
        // do your maths first
        // console.log('result is: ', n1 + n2)
        // console.log('result is: ', result)
        return console.log(resultPhrase + result);
    }
    return result;
}

// this will create an error unless we fix our type
// const number1 = '5';
const number1 = 5;
const number2 = 2.5;
const shouldShow = true;
const resultPhrase = "Result is: "

// if you add a param here that is not listed in the function definition, you'll get an error
const result = add(number1, number2, shouldShow, resultPhrase);

// now we HAVE to pass in 4 params
console.log(add(number1, number2, false, null));


// ===================================== OBJECT TYPES ===================================== //
