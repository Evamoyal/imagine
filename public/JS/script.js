const btn = document.getElementById('btn');
btn.onclick = function () {
    const name = prompt('Enter your name');
    document.getElementById('name').innerText = name;
}

//  Varriables
const pi = 3.142;
let username = 'evamoyal';
let age = 101;
let present = false;

// Objects
const person = {
    username: 'evamoyal',
    age: '101',
    present: 'false',
    child: {
        name:'michelle',
        friend:{
         name: 'Mattew',

        }
    }
}
console.log(person.username);
person.age = 105;
console.log( person);

// 
console.log(person.child.friend.name = 'Mark'); 



// Arrays
const bottle1 = {
    size: 'large',
    color: 'green'
    }
    
    const bottle2 = {
      size: 'small',
      color: 'grey'
    }
    
    
    const bottles = [bottle1, bottle2];
    bottles;
    bottles.push(bottle1);
    bottles.push (bottle2);
    bottles;
    bottles [2]
    
    const date = new Date();
    date.getDay();
    
    
    // const age =18
    if (age >=18) {
      'You are True'
    } else  {
      'You are False'
    }
    
    // For Loop
    for (let i = 0; i<=5; i++) {
      'We did it'
      console.log ( 'we did it', i); 
    }
    
    
     

      
//Strings in JavarScript
//Concatenation
const firstname = 'Evelyn';
const lastname  = 'Yalley';
const middlename = 'Amonoowah'
firstname + ' ' +  middlename + ' '+lastname ;

//Template literal 
` ${firstname} ${middlename} ${lastname}`;



// Strings Methods

let fullName = "evelyn amonoowah yalley"


fullName.length
fullName.toUpperCase()
fullName.toLowerCase()
fullName.charAt(8)
fullName. slice (7,16)
fullName.split(" ")
fullName.replace("evelyn", "koku-anu")
fullName.indexOf('lyn')

//string conversation
Number ("3.243")
parseInt ("3.243")
parseFloat("3.243")

let amount = 18000
console.log(`GHS${amount}`)
amount.toString()


// Functions
//Defining a function

function login (username, password) {
  //Validate username and password
  if (!username|| !password) {
    return'Username or password not provide';
  }
  
// Verify username and password
  if (username == 'evamoyal' && password == '1234') {
  return 'User is logged in';
  
}else {
  return 'Invalid username or password';
}

}
// Invoking a function
 login('evamoyal');



// Basic Arithmetic operations
11+ 12;
1 + 0.5;
43- 12;
45 /7;
5 * 3;
14 % 3;

  
 Math.floor (45/24);
45 % 24
Math.random() * 1000;
Math.max (34, 32, 37);

2 * (3 + 4) * 5 / 2;

// '2'*'2
Number( '2'*'2')
'2'+'2'
Number ('ty') +2

//write a fuction that will add a participant Google Classroom

const participants = [];
function addParticipant(email) {
   //Check if email was provided
  if (email === undefined || email === null) {
    return 'no email provided';
  }
  

  //check if email is valid
  if (!email.includes('@')) {
    return 'Invalid email provided';
 }

   //Add email to participants
 participants.push(email);
  return 'participant added';
}

 addParticipant('michelle@gmail.com');
 addParticipant( 'michelle@yahoo.com');
participants
 

 //Arrays in JaverScript
const users = [  
{
Username:'misslyn',
password: '1234',
email:'misslyn@yahoo.com'
},
 
{

Username:'evamoyal',
password: '9094',
 email:'evamoyal@gmail.com'
 }   
 ];
 

  // write a function that will take a user with firstname, lastname and return fullname;
function fullName(user) {
  return{
    ...user,
    fullname:`${user.firstname} ${user. lastname}`
  } 
  return ; `${user.firstname} ${user. lastname}`
  }
  
  const user = {
  firstname: 'Evelyn',
  lastname: 'Yalley'
  }
  
  fullName(user)
  
  
  //Array map
  const users = [
    { firstname: 'Michelle',lastname: 'Amoateng'},
    { firstname: 'Mattew', lastname: 'Baako'},
    { firstname: 'Mark',   lastname: 'Mensah'},
    {firstname: 'Moses',   lastname: 'Yalley'},
    { firstname: 'Mabel',  lastname: 'Eshun'}, g
  ]
  
  // users.map (fullName);
  
  //square of numbers
  function square(number) {
  return number **2;
  }
  
  square (7);
  const numbers = [9,8,7,6];
  numbers.map(square);
  
  
  // Array filter
    function isEven (number){
      return number % 2 === 0;
  }
  isEven(6);
  numbers.filter(isEven);


     //Write a function that will allow a user to reset their password
const user ={
  email: 'evelynyalley@yahoo.com',
  password: '1234'
}

function resetPassword(email, newPassword) {
  
  //check if email and new password was provided
  if (!email || !newPassword){
    return "Email or password not provided";  
  }
  
  //check if provided email is correct
  if ( email === user. email) {
    //Update password with new one
    user.password = newPassword;
    return "Password reset successful";
  }
  
  if (email !== user.email) {
    return "Invalid email";
  }
    
 }

user;
resetPassword ('evelynyalley@yahoo.com' );

user;
    
    
//You have been given an array of students with some of them marked as absent and others marked as present.
//Write a function that returns the total number of students present
const students = [
  {id: 1, present: true},
  {id: 2, present: true},
  {id: 3, present: false},
  {id: 4, present: true},
  {id: 5, present: false},  
  
  ]
  
  function studentsPresent (students) {
   // Define a variable to track the total present
   let total = 0;
    
    // Begin a loop
    for (let i = 0; i < students.length; i++) {
      
      // For any iteration if student is present then increase total present by 1;
      if (students[i].present === true) {
        total++;
      }
      
    }
    //return the totalm 
   return  total; 
  }
studentsPresent (students);


//Classes in JaveScript 
class Laptop {
  constructor(brand, color ) {
     this. brand = brand;
     this.color = color;
  }
}

const laptop1 = new Laptop('Dell', 'black');
const laptop2= new Laptop('HP', 'silver');
laptop1.brand;
laptop2.brand;




   
  





















  


   
     
     
  
  
  



















   


// //Alternative

// Function add(fullname, email){
//   If (fullname) !! !email) {
//     return 'participant not added' 
// }

//   if (fullname == 'michelle amoateng' && email == 'michelle@gmail.com') {
//     return 'participant added successfully'
//   } else {
//     return 'participant not added';
//   }
  
// add ('michelle amoateng', 'micheellee@gmail.com') 
// add ('michelle amoateng' ,'micheellee@gmail.com')
  
  






















 
    
    
    
    
    
    
    
    
    

 








