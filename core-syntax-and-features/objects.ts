const person = {
    name: 'Aaron',
    age: 28,
    hobbies: ['lifting', 'is sushi a hobby?']
}

// TS will implicitly create `prop types` for your objects
// behind the scenes, TS is doing... (I can see the value, but they say its better to let TS do this)
// const example: {
//     name: string;
//     age: number
// } = {
//     name: 'Aaron',
//     age: 28,
// };

// TS creates an error because it doesnt see the `nickName` entry!
// console.log(person.nickName);

// we can tell TS what data values we expect to see
let favoriteActivities: string[];

// if you wanted it to be flexible, you could use any, but at this point you're using regular JS
// and losing out on your TS features
// let favoriteActivities: any[];

// this creates an error because we can see that the variable should be an array of strings, not a string
// favoriteActivities = 'sports'

for(const entry of person.hobbies) {
    console.log(entry.toUpperCase());
    // entry.map() // this gives us an error because TS can see that the `hobbies` array should have strings
}   