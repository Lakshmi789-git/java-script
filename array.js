// array=[1,"day",{name:"pro"},true]
// console.log(array[0])
// array[1]
// console.log(array.length)

// fruits=["apple","orange","grapes",];
// console.log (fruits.push("pro"));
// console.log(fruits)



// // push method string
fruits=["apple", "banana","mango"];
console.log(fruits.push("grapes"));
console.log(fruits);

bikes=["herohonda","royal enfield","deo"];
console.log(bikes.push("duke"));
console.log(bikes)

car=["swift","innova","KIA"];
console.log(car.push("THAR"));
console.log(car)

// integers
numbers = [1, 2, 3];
console.log(numbers.push(4)); 
console.log(numbers)

numbers=["88","91","92"];
console.log(numbers.push("90"));
console.log(numbers)

numbers=["U18CX120033","U19EX120044","U10DX318899"];
console.log(numbers.push("U21FX23556"));
console.log(numbers)

// pop method string
 fruits = ["apple", "banana", "orange"];
console.log ( fruits.pop());
console.log(fruits)

names=["ravi","sai","lakshmi"];
console.log(names.pop());
console.log(names)

subjects=["english","kannada","hindi"];
console.log(subjects.pop());
console.log(subjects)


// integers

numbers=["1","2","3","4","5","6","7"];
console.log(numbers.pop());
console.log(numbers)

numbers=["4144796530","3584267866","915368379487"]
console.log(numbers.pop());
console.log(numbers)

numbers=["07","12","31","22"];
console.log(numbers.pop());
console.log(numbers)

// shift method string

fruits=["blue berry","pomogranets","orange"];
console.log(fruits.shift())
console.log(fruits)

vegetables=["brinjal","peas","bitterguard"];
console.log(vegetables.shift());
console.log()

 fruits = ["apple", "banana", "cherry"];
console.log(fruits.shift()); 
console.log(fruits)


// integers

numbers=["1","2","3"];
console.log(numbers.shift(3));
console.log(numbers)


numbers=["22","12","07","32"];
console.log(numbers.shift());
console.log(numbers)


numbers=["9916510123","8832430033","8867646873"];
console.log(numbers.shift());
console.log(numbers)

// unshift method string 

names=["sai","sweety"];
console.log(names.unshift("ravi"));
console.log(names)



 fruits = ["banana", "cherry"];
console.log(fruits.unshift("apple"));
console.log(fruits);

places=["hampi","halebidu",];
console.log(places.unshift("honavara"));
console.log(places)


// integers

numbers=["678","938","844"];
console.log(numbers.unshift(789));
console.log(numbers)

numbers=["1","2","3"];
console.log(numbers.unshift("4"));
console.log(numbers)

numbers=["U18EX21M0033","U18EX21M0044"];
console.log(numbers.unshift("U18EX21M0065"));
console.log(numbers)

// Filter method (string)

 fruits = ['apple', 'banana', 'cherry', 'date'];
 fruitsWithA = fruits.filter(fruit => fruit.includes('a'));
console.log(fruitsWithA); 


vegetables=["potato","corn","broccoli"];
vegetableswithA=vegetables.filter(vegetables=> vegetables.includes("a"));
console.log(vegetableswithA);

countries=["India","america","australia"];
countrieswithR=countries.filter(countries=> countries.includes("r"));
console.log(countrieswithR);

// Intergers

numbers=["8073","9380","9100","7660"];
numberswith9=numbers.filter(numbers=> numbers.includes("9"));
console.log(numberswith9);

numbers=["150","200","250"];
numberswith2=numbers.filter(numbers=> numbers.includes("2"));
console.log(numberswith2);


numbers=["983","982","989"];
numberswith3=numbers.filter(numbers=> numbers.includes("3"));
console.log(numberswith3);

// slice method (string)

 text = "Hello, world!";
slicedText = text.slice("7");
console.log(slicedText); 

text="kavya, varun";
slicedText= text.slice("6");
console.log(slicedText);

// integer


number = 123456;
 slicedNumber = number.toString().slice(1, 4);
console.log(slicedNumber); 


number=1234567;
slicedNumber = number.toString().slice(1,6);
console.log(slicedNumber);

number= 3527882;
slicedNumber = number.toString().slice(5,8);
console.log(slicedNumber);

// splice method (string)

 fruits = ['apple', 'banana', 'cherry'];
fruits.splice(1, 0, 'orange');
console.log(fruits);

vegetables=["potato","tomato","radish"];
vegetables.splice(2,0,"peas");
console.log(vegetables);

alphabets=["a","b","c","d"];
alphabets.splice(4,0,"e");
console.log(alphabets);

// integers

number=["1","2","3","4"];
number.splice(3,0,"4");
console.log(number);

number=["22","12","07",];
number.splice(2,0,"31");
console.log(number);


number=["807","938","884"];
number.splice(2,0,"886");
console.log(number);

// Find method (string)

 numbers = [1, 2, 3, 4, 5];
index = numbers.indexOf(3);
console.log(index); 

numbers = [1, 2, 3, 4, 5, 6];
index = numbers.indexof(3);
console.log(index);


// At method (string)

 fruits = "apple","cherry";
 char = fruits.at(3);
console.log(char); 


vegetables = "chillies","radish";
char = vegetables.at(5);
console.log(char);

cars = "thar","innova","swift";
char = cars.at(3);
console.log(char);


// Integers

numbers = "1","2","3","4";
char = numbers.at(0);
console.log(char)

numbers = "90","80","70","60","50";
char = numbers.at(1);
console.log(char);


numbers = "1","2","3","4";
char = numbers.at(0);
console.log(char);


// Indexof method (string)

 fruits = ["apple", "banana", "orange", "apple"];
index = fruits.indexOf("apple"); 
console.log(index); 

names = ["nikhil","akhil", "ankush"];
index = names.indexOf("nikhil");
console.log(index);

// integers

numbers=["1","2","3","4"];
index = numbers.indexOf("3");
console.log(index);

numbers = ["99","88","77","66"];
index = numbers.indexOf("4");
console.log(index);

numbers = ["100","200","300"];
index = numbers.indexOf("3");
console.log(index);

// Foreach method (string)

fruits = ["apple", "banana", "cherry"];

fruits.forEach((fruit) => {
    console.log(fruit);
});


alphabets = ["a","b","c","d"];
alphabets.forEach((alphabets)=>{
    console.log(alphabets);
});

places = ["karnataka","kerala","tamil nadu"];
places.forEach((places)=>{
    console.log(places)
});

// Integers

numbers=["1","2","3","4"];
numbers.forEach((numbers)=>{
    console.log(numbers);
});

numbers=["100","200","300","400"];
numbers.forEach((numbers)=>{
    console.log(numbers);
});

numbers = ["10000","20000","30000","40000"];
numbers.forEach((numbers)=>{
    console.log(numbers);
});


// From method (string)
str = "Hello";
arrFromString = Array.from(str);
console.log(arrFromString); 

fruits = "apple";
arrFromString = Array.from(fruits);
console.log(arrFromString);

vegetables = "radish";
arrFromString = Array.from(vegetables);
console.log(arrFromString);

// Integers

numbers = "8899000666";
arrFromString = Array.from(numbers);
console.log(arrFromString);

numbers="9976657436776";
arrFromString = Array.from(numbers);
console.log(arrFromString);

numbers="12345";
arrFromString =Array.from(numbers);
console.log(arrFromString);


// sort method (string)

 fruits = ["banana", "apple", "cherry"];
fruits.sort();
console.log(fruits); 

alphabets = ["b","a","e","c","d"];
alphabets.sort();
console.log(alphabets);

alphabets=["l","k","j","i","g","f"]
alphabets.sort();
console.log(alphabets);

// Integer

numbers=["5","4","2","0","3","1"];
numbers.sort();
console.log(numbers);


numbers=["6","9","7","8","10"];
numbers.sort();
console.log(numbers);

numbers=["105","104","102","103","101"];
numbers.sort();
console.log(numbers);

// Flat method (string)
 
 nestedStrings = ["I", ["love", ["coding", "in"], "JavaScript"]];
 flattenedStrings = nestedStrings.flat(2);
console.log(flattenedStrings); 


nestedStrings=["my",["name",["is"],"lakshmi"]];
flattenedStrings = nestedStrings.flat(2);
console.log(flattenedStrings);


nestedStrings=["my",["favourite",["color","is"],"blue"]];
flattenedStrings=nestedStrings.flat(3);
console.log(flattenedStrings);


// Integers

nestedStrings=["2",["3",["3","4"],"3"]];
flattenedStrings=nestedStrings.flat(3);
console.log(flattenedStrings)

nestedStrings=["10",["20",["30","40","50"],"60","70"]];
flattenedStrings=nestedStrings.flat(4);
console.log(flattenedStrings);

nestedStrings=["100",["200","300",["400","500"],"600","700"]];
flattenedStrings = nestedStrings.flat(5);
console.log(flattenedStrings);

// Array String (asscending  order)

 fruits = ["banana", "apple", "cherry"];
console.log(fruits.sort()); 
console.log(fruits);

 fruits = ["mango", "grapes", "orange"];
console.log(fruits.sort()); 
console.log(fruits); 

languages = ["telugu","knnada","hindi","englis"];
console.log(languages.sort());
console.log(languages)


// (descending order)

fruits = ["banana", "apple", "cherry"];
console.log(fruits.reverse()); 
console.log(fruits); 

names= ["chinnu","dimple","ammu","cutie"];
console.log(names.reverse());
console.log(names);



// integers

// asscending order

numbers = [10, 5, 100, 1];
numbers.sort((a, b) => a - b); 
console.log(numbers); 

// descending order

numbers = [10, 5, 100, 1];
numbers.sort((a, b) => b - a); 
console.log(numbers); 



 




































