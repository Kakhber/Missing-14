// 1.

let numberArr = [8, 14, 20, 27, 64];

let numberArrLength = numberArr.length;
let numberArrTotal = 8 + 14 + 20 + 27 + 64;
let numberMedium = numberArrTotal / numberArrLength

console.log(numberMedium);

// 2.

let uniteArr = [
  { name: "kakha", age: 28 },
	{ name: "irakli", age: 38 },
	{ name: "levani", age: 31 },
	{ name: "nikolozi", age: 12 },
	{ name: "sandro", age: 7 },
];

console.log(uniteArr)

// 3.

let personalInfo = {
	firstName: "Kakha",
	lastName: "Beridze",
	address: ["tbilisi", "Georgia"],
	age: 28,
	phoneNumbers: [591922449, 599025222],
};


console.log(
  `My name is ${personalInfo.firstName}, My age is ${personalInfo.age}, My address is ${personalInfo.address}.`
);