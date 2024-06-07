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




    
    
    
    
    
    
    
    
    
    

 








