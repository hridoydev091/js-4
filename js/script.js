// //--------------Arry
// const language = ['HTML','CSS','Javascript','PHP','true','50'];
// // arry 2ta niom ye kora jai niche r ekta niom dewa ache
// const language2 =new Array ('HTML','CSS','Javascript','PHP','true','50');
// // r javascript 0 theke suru hoi   
// console.log(language);
// console.log(language[2]);// ekhon eita out put asbe javascript

// const language3 = ['HTML','CSS','Javascript','PHP','true','50'];// abr kono kisu change korte gele nicher niom follow korte hobe
// language3 [4] = 'Tailwind CSS';// ei niom ye amra kono kisu change korte pari
// language3 [5] = 'React.js ';// \ othaba chaile ekta item baranu jai
// console.log(language3);
// console.log(language3.toString());// ei vabe abr string er moto output ana jai 

// // abr ei niom ye string ana jai nicher niom ye
// let firstName = 'Ali Hossain';
// console.log(firstName);

// console.log(language3.length);// abr ei khane koita item ache oita e dekhe  
// console.log(language3.length - 1);// abr ei niom ye item komanu jai 


//------------------Arry at dekbo ekhon
// const Hridoy = ['wasim','tanzil','jenez','polash','rakib'];
// console.log(Hridoy.at(5));// last 4 asbe  rakib


// ---------join arry kaj kore ei vabe jekono chinho dite pari $ ba * &
const Hridoy = ['wasim','tanzil','jenez','polash','rakib'];
console.log(Hridoy.join('$'));// eit outpu asbe emon $wasim namer pashe dolar shine asbe

//----pop arry eita delet kore last item
const  fruits = ["apple", "banana", "mango"];
fruits.pop();
console.log(fruits);

//--------push arry eita diye item add kora jai mane jog kora jai
let names = ["Hridoy"];
names.push("Misu", "Shimoli");// ei niom ye add kora jai
console.log(names);


//----------------- unshift arry eita prothom item jog kore 
let cities = ["Dhaka", "Chittagong"];
cities.unshift("Rajshahi");// eita hoilo niom
console.log(cities);

//----------shift arry eita diye prothom item delete kori
let names1 = ["Hridoy", "Misu", "Shimoli"];
names.shift();// eita holo niom
console.log(names1);

//------- concat arry  concat diye akadik arry jog kora ji
let boys = ["Hridoy", "Rakib"];
let girls = ["Misu", "Shimoli"];
let allFriends = boys.concat(girls);// eita holo nioom
console.log(allFriends);

// abar dekhi 
let morningFoods = ["Bread", "Egg"];
let lunchFoods = ["Rice", "Chicken"];
let eveningFoods = ["Burger", "Coffee"];
let dinnerFoods = ["Ruti", "Beef"];

// সব মিলিয়ে একসাথে করি
let fullDayMeals = morningFoods.concat(lunchFoods, eveningFoods, dinnerFoods);
console.log("Full Day Meals:", fullDayMeals);// eita hoilo output Full Day Meals: ["Bread", "Egg", "Rice", "Chicken", "Burger", "Coffee", "Ruti", "Beef"]



// abr ei vabe o kora jai
const a = [
    [1,2,3,4,5,],
    [6,7,8,9],
    [1,2,3,4,],
    [7,8,9,10],
]
console.log(a);
// abar
const b = [
    [1,2,3,4,5,[21,34,23,12]],
    [6,7,8,9],
    [1,2,3,4,],
    [7,8,9,10],
]
console.log(b.flat());


//--------- splice arry ,
// protme hocche khotai coop marbe
// tar pore koita eliment ekhan thke delete kore dibe
//3rd hocche ami ei khane unlimited item dite pari
let  number = [1,2,3,4,7];
let result = number.splice(1,3,10,20,30,40,70,);
console.log(number);
console.log(result);// ei log diye dekhe koita item delete hoiche











