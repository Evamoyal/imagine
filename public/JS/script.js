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
    
    
      
      
    
    
    
    
    
    
    
    
    
    

 








