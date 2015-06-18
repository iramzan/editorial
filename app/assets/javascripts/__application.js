// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//
// Check if the user is ready to play!
//------------------------------------------------------------------------------------------------


// -------------- vvv CODEACADEMY TUTORIAL vvv ------------------
//
// --------- simple operations ---------
//
//	confirm("I'm ready to play!");
//
//	var age = prompt("Whats your age?");
//
//	if (age < 13 )
//	{
//		console.log("You can play, but at your own risk!");
//	}
//	else
//	{
//		console.log("You may procced, it's all good.");
//	};
//
//	console.log("You are at a Justin Bieber concert, and you hear this lyric 'Lace my shoes off, start racing.'");
//
//	console.log("Suddenly, Bieber stops and says, 'Who wants to race me?'");
//
//	var userAnswer = prompt("Do you want to race Bieber on stage?");
//
//	if (userAnswer === "yes" || userAnswer === "y")
//	{
//		console.log("You and Bieber start racing. It's neck and neck! You win by a shoelace!");
//	}
//	else
//	{
//		console.log("Oh no! Bieber shakes his head and sings 'I set a pace, so I can race without pacing.'");
//	};
//
//	var feedback = prompt("How did you like my game (1 to 10 scale)?");
//
//
//	if (feedback > 8 && feedback <= 10)
//	{
//		console.log("Thank you! We should race at the next concert!");
//	}
//	else
//	{
//		console.log("I'll keep practicing coding and racing.");
//	};


// --------- functions ---------

//
//	var divideByThree = function (number) {
//		var val = number / 3;
//		console.log(val);
//	};
//
//	divideByThree(14);

// ---- functions > scopes ----

//	var my_number = 7; //this has global scope
//
//	var timesTwo = function(number) {
//		var my_number = number * 2;
//		console.log("Inside the function my_number is: ");
//		console.log(my_number);
//	};
//
//	timesTwo(7);
//
//	console.log("Outside the function my_number is: ")
//	console.log(my_number);


// ---- functions > ROCK PAPER SCISSORS ----
//
//	var userChoice = prompt("Rock / paper / scissors?\n\n you can go with 'r / p / s!'");
//
//	var computerChoice = Math.random();
//	console.log(computerChoice);
//
//	if ( 0 < computerChoice && computerChoice < 0.34)
//	{
//		computerChoice = "paper";
//	}
//	else if ( 0.34 < computerChoice && computerChoice < 0.66)
//	{
//		computerChoice = "scissors";
//	}
//	else
//	{
//		computerChoice = "rock";
//	};
//
//
//
//	var compare = function (choice1, choice2)
//	{
//		if (choice1 === choice2)
//		{   return 'The result is a tie!';    }
//		else if (choice1 === "rock" || choice1 === "r")
//		{
//			if (choice2 === "paper" || choice2 === "p")
//			{   return 'paper wins!'; }
//			else
//			{   return 'rock wins!'; };
//		}
//		else if (choice1 === "paper" || choice1 === "p")
//		{
//			if (choice2 === "scissors" || choice2 === "s")
//			{   return 'scissors wins!'; }
//			else
//			{   return 'paper wins!'; };
//		}
//		else if (choice1 === "scissors" || choice1 === "s")
//		{
//			if (choice2 === "paper" || choice2 === "p")
//			{   return 'scissors wins!'; }
//			else
//			{   return 'rock wins!'; };
//		};
//	};
//
//	compare (userChoice, computerChoice);
//


// --------- FOR LOOPS ---------
//
//
//
//	var text = "Hey, how are you doing? My name is Tim. Tim is great, Tim code! Mister T is also cool, Tea tea teeth";
//
//	var myName = 'Tim';
//
//	var hits = [];
//
//	for ( var i = 0; i < text.length; i++)
//	{
//		if (text[i] === myName[0]  && myName === text.substring(i, i + myName.length))
//		{
//			for ( var j = i; j < i + myName.length; j++)
//			{
//				hits.push(text[j]);
//			};
//		};
//	};
//
//	if (hits === "")
//	{
//		console.log( "Your name wasn't found!");
//	}
//	else
//	{
//		console.log(hits);
//	};

// --------- WHILE LOOPS ---------
// ---- silly dragon slaying game ----

//
//	var slaying = true;
//
//	var youHit = Math.floor(Math.random() * 2);
//
//	var damageThisRound = Math.floor(Math.random()*5 + 1 );
//
//	var totalDamage = 0;
//
//	while (slaying)
//	{
//
//		if (youHit)
//		{
//			console.log("You hit the fuckin dragon in the face, yay!");
//			totalDamage += damageThisRound;
//
//			if (totalDamage >= 4)
//			{
//				console.log("You slayed the damn lizard yo!");
//				slaying = false;
//			}
//			else
//			{
//				youHit = Math.floor(Math.random() * 2);
//			};
//		}
//		else
//		{
//			console.log("Dragon beating you bro, sorry!");
//		};
//		slaying = false;
//	};


// --------- SWITCH STATEMENTS ---------
//
//	var input = prompt("1, 2, 3, 4, 5 or 6?", "just go already");
//
//	switch(input)
//	{
//		case '1':
//			console.log('1 is the best, right?');
//			break;
//
//		case '2':
//			console.log('2 is the love of my life too!');
//			break;
//
//		case '3':
//			console.log('3 is way bigger, that is just great');
//			break;
//
//		case '4':
//			console.log('beep boop, fuck 123');
//			break;
//
//		case '5':
//			console.log('cinco, eh?');
//			break;
//
//		case '6':
//			console.log('go for it three more times and you got a number of the beast!')
//			break;
//
//		default:
//			console.log('Once again, how fuckin hard can it be?');
//	};

// --------- OBJECTS ---------
// ----  IMPORTANT!!! CONTACT INFO TASK ----
//	var friends =
//	{
//		bill:
//		{
//			firstName: 'Bill',
//			lastName: 'Gates',
//			number: '8 (921) 951-43-16',
//			address: ['microsoft', 'microsoft land', 'house']
//		},
//		steve:
//		{
//			firstName: 'Steve',
//			lastName: 'Jobs',
//			number: '8 (812) 312-28-47',
//			address: ['california', 'cupertino', 'office']
//		}
//
//	};
//
//	var list = function(fr)
//	{
//		for (var object in fr)
//		{
//			console.log(object);
//		};
//	};
//
//	var search = function(name)
//	{
//		for (var object in friends)
//		{
//			if (friends[object].firstName === name)
//			{
//				console.log(friends[object].number);
//				return friends[object];
//			};
//		};
//	};
//
//	search('Steve');
//

// ---- JS FIZZ BUZZ ----
//	for ( i = 1; i <= 20; i ++)
//	{
//		var string = i
//		if (i % 3 === 0)
//		{
//			if (i % 5 === 0)
//			{
//				string = ' FizzBuzz';
//			} else
//			{
//				string = ' Fizz';
//			};
//		} else
//		{
//			if (i % 5 === 0)
//			{
//				string = ' Buzz';
//			};
//		};
//		console.log(string);
//	};


// ---- OBJECT CREATION ----
// ---- literal notation VS constructor ----

//	Our bob object again, but made using a constructor this time
//	var bob = new Object();
//	bob.name = "Bob Smith";
//	bob.age = 30;
//	// Here is susan1, in literal notation
//	var susan1 = {
//		name: "Susan Jordan",
//		age: 24
//	};
//


// ---- assigning functions as methods ----

//	// here is bob again, with his usual properties
//	var bob = new Object();
//	bob.name = "Bob Smith";
//	bob.age = 30;
//	// this time we have added a method, setAge
//	bob.setAge = function (newAge){
//		bob.age = newAge;
//	};
//	// here we set bob's age to 40
//	bob.setAge(40);
//	// bob's feeling old.  Use our method to set bob's age to 20
//	bob.setAge(20);


// ---- using this. ----

//	// here we define our method using "this", before we even introduce bob
//	var setAge = function (newAge) {
//		this.age = newAge;
//	};
//	// now we make bob
//	var bob = new Object();
//	bob.age = 30;
//	// and down here we just use the method we already made
//	bob.setAge = setAge;
//	// note no brackets after set age as we assign it to a method of a bob class
//
//	// change bob's age to 50 here
//	bob.setAge(50);
//


//	// here we define our method using "this", before we even introduce bob
//	var setAge = function (newAge) {
//		this.age = newAge;
//	};
//	// now we make bob
//	var bob = new Object();
//	bob.age = 30;
//	bob.setAge = setAge;
//
//	// make susan here, and first give her an age of 25
//	var susan = new Object();
//	susan.age = 22;
//
//	susan.setAge = setAge;
//	susan.setAge(35);
//


// ---- custom constructor ----

//	function Person(name,age) {
//		this.name = name;
//		this.age = age;
//	}
//
//	// Let's make bob and susan again, using our constructor
//	var bob = new Person("Bob Smith", 30);
//	var susan = new Person("Susan Jordan", 25);
//	// help us make george, whose name is "George Washington" and age is 275
//	var george = new Person("George Washington", 275);


// ---- more on custom constructors ----

//	function Rabbit(adjective) {
//		this.adjective = adjective;
//		this.describeMyself = function() {
//			console.log("I am a " + this.adjective + " rabbit");
//		};
//	}
//
//	// now we can easily make all of our rabbits
//
//	var rabbit1 = new Rabbit('fluffy');
//	var rabbit2 = new Rabbit('happy');
//	var rabbit3 = new Rabbit('sleepy');
//	rabbit1.describeMyself();
//	rabbit2.describeMyself();
//	rabbit3.describeMyself();


// ---- more object looping ----

//	// Our Person constructor
//	function Person(name, age)
//	{
//		this.name = name;
//		this.age = age;
//	};
//
//
//	// Now we can make an array of people
//	var family = [];
//
//	family[0] = new Person('alice', 40);
//	family[1] = new Person('bob', 42);
//	family[2] = new Person('michelle', 8);
//	family[3] = new Person('timmy', 6);
//	// loop through our new array
//
//	for (var object in family)
//	{
//		console.log(family[object].name);
//	};


// ---- finalization of objects 101 ----
//
//	var bob = {
//		firstName: "Bob",
//		lastName: "Jones",
//		phoneNumber: "(650) 777-7777",
//		email: "bob.jones@example.com"
//	};
//
//	var mary = {
//		firstName: "Mary",
//		lastName: "Johnson",
//		phoneNumber: "(650) 888-8888",
//		email: "mary.johnson@example.com"
//	};
//
//	var contacts = [bob, mary];
//
//	function printPerson(person) {
//		console.log(person.firstName + " " + person.lastName);
//	}
//
//	function list() {
//		var contactsLength = contacts.length;
//		for (var i = 0; i < contactsLength; i++) {
//			printPerson(contacts[i]);
//		}
//	}
//
//	function search(lastName)
//	{
//		contactsLength = contacts.length;
//		for(i = 0; i < contacts.length - 1; i++)
//		{
//			if (contacts[i].lastName === lastName)
//			{
//				printPerson(contacts[i]);
//			};
//		};
//	};
//	/*Create a search function
//	 then call it passing "Jones"*/
//	function add(firstName, lastName, email, phoneNumber)
//	{
//		contacts[contacts.length] =
//		{
//			firstName: firstName,
//			lastName: lastName,
//			phoneNumber: phoneNumber,
//			email: email
//		};
//	};
//
//	add('tim','chu','posseslash@gmail.com','3212847');
//	list();


// --------- OBJECTS 2!---------
// ----  referencing inside the class ----

//	var james = {
//		job: "programmer",
//		married: false,
//		sayJob: function() {
//			// complete this method
//			console.log('Hi, I work as a ' + this.job);
//		}
//	};
//
//	// james' first job
//	james.sayJob();
//
//	// change james' job to "super programmer" here
//	james.job = 'super programmer';
//
//	// james' second job
//	james.sayJob();


// ----  IMPORTANT bracket notation property calling trick ----

//	var james = {
//		job: "programmer",
//		married: false
//	};
//
//	// set to the first property name of "james"
//	var aProperty = 'job';
//
//	// print the value of the first property of "james"
//	// using the variable "aProperty"
//
//	console.log(james[aProperty]);


// ----  hasOwnProperty ----
//
//	var suitcase = {
//		shirt: "Hawaiian"
//	};
//
//	if ( suitcase.hasOwnProperty('shorts'))
//	{
//		console.log(suitcase.shorts);
//	} else
//	{
//		suitcase.shorts = 'yellow swimshorts';
//		console.log(suitcase.shorts);
//	};


// ----  IMPORTANT using bracket notation property calling trick to list all the properties----

//	var nyc = {
//		fullName: "New York City",
//		mayor: "Bill de Blasio",
//		population: 8000000,
//		boroughs: 5
//	};
//
//	// write a for-in loop to print the value of nyc's properties
//	for (var pro in nyc)
//	{
//		var x = pro;
//		console.log(nyc[pro]);
//	};


// ----  Prototype editing----
//
//	function Dog (breed) {
//		this.breed = breed;
//	};
//
//	// here we make buddy and teach him how to bark
//	var buddy = new Dog("golden Retriever");
//	Dog.prototype.bark = function() {
//		console.log("Woof");
//	};
//	buddy.bark();
//
//	// here we make snoopy
//	var snoopy = new Dog("Beagle");
//	/// this time it works!
//	snoopy.bark();

//
// ----  JS Class inheriting ----

//	// the original Animal class and sayName method
//	function Animal(name, numLegs) {
//		this.name = name;
//		this.numLegs = numLegs;
//	}
//	Animal.prototype.sayName = function() {
//		console.log("Hi my name is " + this.name);
//	};
//
//	// define a Penguin class
//	function Penguin(name) {
//		this.name = name;
//		this.numLegs = 2;
//	}
//
//	Penguin.prototype = new Animal();
//
//	// set its prototype to be a new instance of Animal
//
//	var penguin = new Penguin('garcia');
//	penguin.sayName();


// ----  prototype chain inheriting ----
//
//	// original classes
//	function Animal(name, numLegs) {
//		this.name = name;
//		this.numLegs = numLegs;
//		this.isAlive = true;
//	}
//	function Penguin(name) {
//		this.name = name;
//		this.numLegs = 2;
//	}
//	function Emperor(name) {
//		this.name = name;
//		this.saying = "Waddle waddle";
//	}
//
//	// set up the prototype chain
//	Penguin.prototype = new Animal();
//	Emperor.prototype = new Penguin();
//
//	var myEmperor = new Emperor("Jules");
//
//	console.log( myEmperor.saying ); // should print "Waddle waddle"
//	console.log( myEmperor.numLegs ); // should print 2
//	console.log( myEmperor.isAlive ); // should print true
//

// ----  private variables in objects ----

//	function Person(first,last,age) {
//		this.firstname = first;
//		this.lastname = last;
//		this.age = age;
//		var bankBalance = 7500; // private var
//
//		this.getBalance = function() {
//			return bankBalance;
//			// your code should return the bankBalance
//
//		};
//	}
//
//	var john = new Person('John','Smith',30);
//	console.log(john.bankBalance);
//
//	// create a new variable myBalance that calls getBalance()
//	var myBalance = john.getBalance();
//	console.log(myBalance);
//

// ----  private methods in objects ----

//	function Person(first,last,age) {
//		this.firstname = first;
//		this.lastname = last;
//		this.age = age;
//		var bankBalance = 7500;
//
//		var returnBalance = function() {
//			return bankBalance;
//		};
//
//		this.askTeller = function ()
//		{
//			return returnBalance;    // no (), we return the method not method call;
//		};
//		// create the new function here
//
//	}
//
//	var john = new Person('John','Smith',30);
//	console.log(john.returnBalance);
//	var myBalanceMethod = john.askTeller();
//	var myBalance = myBalanceMethod();
//	console.log(myBalance);


// ----  cash register excercise ----
//
//	function StaffMember(name,discountPercent){
//	this.name = name;
//	this.discountPercent = discountPercent;
//	}
//
//	var sally = new StaffMember("Sally",5);
//	var bob = new StaffMember("Bob",10);
//
//	// Create yourself again as 'me' with a staff discount of 20%
//	var me = new StaffMember('Tim',20);
//
//	var cashRegister = {
//		total:0,
//		lastTransactionAmount: 0,
//		add: function(itemCost){
//			this.total += (itemCost || 0);
//			this.lastTransactionAmount = itemCost;
//		},
//		scan: function(item,quantity){
//			switch (item){
//				case "eggs": this.add(0.98 * quantity); break;
//				case "milk": this.add(1.23 * quantity); break;
//				case "magazine": this.add(4.99 * quantity); break;
//				case "chocolate": this.add(0.45 * quantity); break;
//			}
//			return true;
//		},
//		voidLastTransaction : function(){
//			this.total -= this.lastTransactionAmount;
//			this.lastTransactionAmount = 0;
//		},
//		// Create a new method applyStaffDiscount here
//		applyStaffDiscount: function(employee)
//		{
//			this.total -= this.total * (employee.discountPercent / 100)
//		},
//
//	};
//
//	cashRegister.scan('eggs',1);
//	cashRegister.scan('milk',1);
//	cashRegister.scan('magazine',3);
//	// Apply your staff discount by passing the 'me' object
//	// to applyStaffDiscount
//	cashRegister.applyStaffDiscount(me);
//
//	// Show the total bill
//	console.log('Your bill is '+cashRegister.total.toFixed(2));