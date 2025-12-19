// // //  1 
console.log("1");
const studentsfirst = [
  { name: "Ali", marks: 85 },
  { name: "Ahmed", marks: 92 },
  { name: "Sara", marks: 78 }
];
const tbody = document.querySelector("#studentTable tbody");

studentsfirst.forEach(studentfirst => {
        const tr = document.createElement("tr");

        tr.innerHTML = `
        <td>${studentfirst.name}</td>
        <td>${studentfirst.marks}</td> `;
        tbody.appendChild(tr)
});


// // 2
console.log("2");
const students2 = [
  { name: "Ali", marks: 85 },
  { name: "Ahmed", marks: 92 },
  { name: "Sara", marks: 78 }
];
let topper2 = students2[0] ;

students2.forEach(student2 => {
if (student2.marks > topper2.marks) {
     topper2 = student2   
}
})
document.getElementById("topper").innerText =
  `Top Scorer: ${topper2.name} (${topper2.marks})`;


// // 3
console.log("3");

const products = [
  { name: "Laptop", price: 800 },
  { name: "Phone", price: 500 },
  { name: "Headphones", price: 100 },
  { name: "Mouse", price: 30 },
  { name: "Keyboard", price: 70 }
];
let min = products[0].price ;
let max = products[0].price ;

for (let i = 0; i < products.length; i++) {
    if (products[i].price < min) {
        min = products[i].price
    }
if (products[i].price > max) {
    max = products[i].price
}
}
console.log(products);

console.log("Min Price:" , min);
console.log("Max Price:" , max);

    
// 4
console.log("4");
        function countWords() {
            let text = document.getElementById("text").value.toLowerCase();

            // Remove punctuation
            text = text.replace(/[.,!?;:()"]/g, "");

            const words = text.split(/\s+/); // Split on spaces
            const frequency = {};

            for (let word of words) {
                if (word.trim() !== "") {
                    frequency[word] = (frequency[word] || 0) + 1;
                } };
            let result = "";
            for (let key in frequency) {
                result += `${key}: ${frequency[key]} <br>`;
            }
            document.getElementById("output").innerHTML = result;
        };
  

//  5
console.log("5");
const users = [
  { name: "Ahmed", role: "Admin" },
  { name: "Sara", role: "User" },
  { name: "Ali", role: "Admin" },
  { name: "Zain", role: "Editor" },
  { name: "Ayesha", role: "User" }
];
const container5 = document.getElementById("container5");

// group users by role
const grouped = {};

users.forEach(user => {
  if (!grouped[user.role]) {
    grouped[user.role] = [];
  }
  grouped[user.role].push(user.name);
});

// display
for (let role in grouped) {
  const heading = document.createElement("h3");
  heading.textContent = role;
  container5.appendChild(heading);

  const ul = document.createElement("ul");

  grouped[role].forEach(name => {
    const li = document.createElement("li");
    li.textContent = name;
    ul.appendChild(li);
  });

  container5.appendChild(ul);
}


//   6
console.log("6");
const item = [
  { name: "Laptop", price: 800, quantity: 4 },
  { name: "Phone", price: 500, quantity: 3},
  { name: "Headphones", price: 100, quantity: 6},
  { name: "Mouse", price: 30, quantity: 13},
  { name: "Keyboard", price: 70, quantity:  11},
];
const btn = document.querySelector("#totalbtn");
const container = document.querySelector("#total");
function greetbtn(){
    for (let  i = 0;  i < item.length;  i++) {
    btn.innerHTML = ""
      container.innerHTML +=   `
     Item  ${item[i].name }
      <br>
     Price =  ${item[i].price }
      <br>
    Total Quantity = ${item[i].quantity }
      <br>
    Total Price =  ${item[i].price * item[i].quantity}
<br><br><br> `;  
}
};


//  7
 console.log("7");
document.getElementById("userForm7").addEventListener("submit", function(event) {
    event.preventDefault(); // stop page refresh

    const user7 = {
        name7: document.getElementById("name7").value,
        age7: document.getElementById("age7").value,
        email7: document.getElementById("email7").value
    };
    // Display object
    document.getElementById("output7").textContent = JSON.stringify(user7, null, 2);
});


// given  a nested object like a user with address,  
// display all info in a structured format in the DOM

//  8
console.log("8");
const user = {
    name: "Ahmed",
    age: 22,
    email: "ahmed@example.com",
    address: {
        street: "12 Street",
        city: "Karachi",
        country: "Pakistan"
    }
};
const output8 = document.querySelector("#divoutput");

console.log(user);
output8.innerHTML = `${user.name}  ,<br> ${user.age}  ,<br> ${user.email} , <br>  `;
const ul = document.createElement("ul")
const li = document.createElement("li")
li.innerHTML = `${user.address.street},<br> ${user.address.city}.<br>  ${user.address.country} `
ul.appendChild(li)  
output8.appendChild(ul)


// 9

console.log("9");

const cart = [
  { name: "Apple", price: 50, quantity: 2 },
  { name: "Banana", price: 20, quantity: 5 },
  { name: "Orange", price: 30, quantity: 3 }
];

const tbody9 = document.querySelector("#cartTable tbody");
let total = 0;

cart.forEach(item => {
  const subtotal = item.price * item.quantity;
  total += subtotal;

  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${item.name}</td>
    <td>${item.price}</td>
    <td>${item.quantity}</td>
    <td>${subtotal}</td>
  `;
  tbody9.appendChild(tr);
});

document.getElementById("total").innerText = `Total: Rs ${total}`;


const input9 = document.querySelector("#input");
const result = document.querySelector("#result");

function greetreturn(){
result.innerHTML = input9.value.length
};


//    10
console.log("10");
 const item10 = [
  { name: "Laptop", price: 800, quantity: 4 },
  { name: "Phone", price: 500, quantity: 3},
  { name: "Headphones", price: 100, quantity: 6},
  { name: "Mouse", price: 30, quantity: 13},
  { name: "Keyboard", price: 70, quantity:  11 },
];

const result10 = document.querySelector("#result");
const div = document.querySelector("#div");
const h2 = document.querySelector("#h2div");
const input10 = document.querySelector("#check").addEventListener("click" , function () {
for (let i = 0; i < item10.length; i++) {
  result10.innerHTML = " " ;
  h2.innerHTML += `${item10[i].name}  ,  ${item10[i].price} , ${item10[i].quantity} <br> ` ;
  div.style.display = 'none' ;
};
} );


11
console.log("11");
const item11 = [
  { name: "Laptop", price: 800, quantity: 4 },
  { name: "Phone", price: 500, quantity: 3},
  { name: "Headphones", price: 100, quantity: 6},
  { name: "Mouse", price: 30, quantity: 13},
  { name: "Keyboard", price: 70, quantity:  11 },
];

const filterselect = document.querySelector("#filterselect");
const filterinput = document.querySelector("#filterinput");
const filterbtn = document.querySelector("#filterbtn");
const filterresult = document.querySelector("#filterresult");

 function greetfilter() {

        for (let i = 0; i < item11.length; i++) {
         if (filterinput.value.includes(item11[i].name)) {
        console.log(item11[i].name , item11[i].price , item11[i].quantity);
          filterresult.innerHTML = `<h3>${item11[i].name}</h3>
          <ul><li>Price: ${item11[i].price}</li>
          <li>Quantity:  ${item11[i].quantity}</li></ul> `; 
          } ;            
        } };


12
console.log("12");
 let todos = [
        {title: "Buy groceries" , complete: false } ,
        {title: "Finish project" , complete: false } ,
    ];

    function renderTodos() {
        const  todoList = document.querySelector("#todoList");
        todoList.innerHTML = ' ' ;
        todos.forEach((todo , index) => {
            const li = document.createElement('li');
            li.innerHTML  =    `
            <span style="text-decoration: ${todo.complete ? 'line-through' : 'none'}">
            ${todo.title}
            </span>
            <button class="completeBtn">${todo.complete ? 'Undo' : 'Complete'}</button>
            <button class="removeBtn"> Remove </button> `;

            li.querySelector('.completeBtn').onclick = () => toggleComplete (index);
            li.querySelector('.removeBtn').onclick = () => removeTodo (index);
            todoList.appendChild(li);
        })
    }

    function toggleComplete(index) {
        todos[index].complete = !todos[index].complete;
        renderTodos(); 
        }
        function removeTodo(index){
            todos.splice(index , 1);
            renderTodos()
        }


        document.querySelector("#addTaskBtn").addEventListener('clcik' , () => {
            const input = document.querySelector("#todoInput");
            if (input.value) {
                todos.push({ title: input.value , complete: false});
                input.value = '' ;
                renderTodos();
            }
        });
        renderTodos()



13
console.log("13");
let entries = [ ];

document.querySelector("#userForm13").addEventListener("submit" , (e) => {
    e.preventDefault()

    const name13 = document.querySelector("#name13");
    const email13 = document.querySelector("#email13");

    entries.push(name13 , email13);
    renderEntries();
    document.querySelector("#userForm13").result();
})

function renderEntries() {
    const entriesList13 = document.querySelector("#entriesList13");
    entriesList13.innerHTML = "" ;


    entries.forEach((entry , index) => {
        const li = document.createElement("li");
        li.textContent = ` ${entry}` ;
        li.appendChild(li);
    });
};


14
console.log("14");
const input14 = document.querySelector("#input");
const ol = document.querySelector("#ol");

const allTodos = [] ;

function renderTodo() {
      
  ol.innerHTML = "" ;

  for (let i = 0 ; i < allTodos.length ; i++){
      
    ol.innerHTML += `<li>
    ${allTodos[i]}
    <button id="edittodobtn" onclick="editTodo(${i})" > Edit </button>
    </li>`
}};
function addTodo(){
  allTodos.push(input14.value)

  renderTodo()
  input14.value = "";
}
  function editTodo(index) {
    console.log("edited todo" , index) 
    const updatedVal = prompt("todo updated value" , allTodos[index])
    allTodos[index] = updatedVal
    renderTodo()

  };


15
console.log("15");
const data = [
  { name: "Ahmed", age: 22, marks: 88 },
  { name: "Sara", age: 21, marks: 92 },
  { name: "Ali", age: 23, marks: 75 }
];

const table = document.getElementById("table");

const headers = Object.keys(data[0]);

const thead = document.createElement("tr");
headers.forEach(h => {
  const th = document.createElement("th");
  th.textContent = h.toUpperCase();
  thead.appendChild(th);
});
table.appendChild(thead);

data.forEach(obj => {
  const tr = document.createElement("tr");
  headers.forEach(key => {
    const td = document.createElement("td");
    td.textContent = obj[key];
    tr.appendChild(td);
  });
  table.appendChild(tr);
});


16
console.log("16");
document.querySelector("#countBtn").addEventListener('click' , () => {
        const input = document.querySelector("#inputText").value ;
        const freq  = countChars(input);
        displayResult(freq)
} );
function countChars(str){
        const freq = {}
for (let char of str) {
        char = char.toLowerCase();
        freq[char] = (freq[char] || 0) + 1 ;    
}
        return freq;
}
function displayResult(freq){
       const resultDiv = document.querySelector("#inputresult") 
        let html = `<h3>Char Freq:</h3><ul>` ;
        for (let char in freq){
                html += `<li><strong> ${char === ' ' ? '(space)' : char} </strong> : ${freq[char]}</li>`
        }
        html += `</ul>`;
        resultDiv.innerHTML = html ; 
};


17
console.log("17");
const categories = {
  name: "Electronics",
  children: [
    {
      name: "Mobiles",
      children: [
        { name: "Android", children: [] },
        { name: "iPhone", children: [] }
      ]
    }, {
      name: "Laptops",
      children: [
        { name: "Gaming", children: [] },
        { name: "Ultrabook", children: [] }
      ]}
  ]};

function renderTree(node, parentEl) {
  const li = document.createElement("li");
  li.textContent = node.name;
  parentEl.appendChild(li);

  if (node.children && node.children.length > 0) {
    const ul = document.createElement("ul");
    li.appendChild(ul);

    node.children.forEach(child => {
      renderTree(child, ul); 
    });
  }};


18
console.log("18");
const students18 = [
  { name: "Ali", grade: 85 },
  { name: "Zain", grade: 92 },
  { name: "Ahmed", grade: 85 },
  { name: "Bilal", grade: 92 }
];
students18.sort((a , b) => {
        if (a.grade !== b.grade) {
           return a.grade - b.grade     
        }
        return a.name.localeCompare(b.name)
})
console.log(students18);


19
console.log("19");
const paragraphs = [
  "JavaScript is easy to learn",
  "DOM manipulation is powerful",
  "Search and highlight text",
  "Learning JavaScript is fun",
];
const content = document.getElementById("content");
const input = document.getElementById("search");
// render paragraphs
paragraphs.forEach(text => {
  const p = document.createElement("p");
  p.textContent = text;
  content.appendChild(p);
});
input.addEventListener("input", () => {
  const value = input.value.toLowerCase();
  content.querySelectorAll("p").forEach(p => {
    const text = p.textContent;
    if (!value) {
      p.innerHTML = text;
      return;
    }
    if (text.toLowerCase().includes(value)) {
      p.innerHTML = text.replace(
        new RegExp(value, "gi"),
        match => `<mark>${match}</mark>` );
    } else {
      p.innerHTML = text; };
  });});



// 20
console.log("20");
const data20 = {
    Pakistan : ['Karachi' , 'Lahore' , 'pehawar'],
    India : ['Delhi' , 'Hyderabad' , 'Mumbai'],
    USA : ['New York' , 'Los Angles' , 'Chicago'],
    Japan : ['Tokyo' , 'Kawasaki' , 'Sapporo'],
};
const input20 = document.querySelector('#countrypassword');
const country = document.querySelector("#countries");
const city = document.querySelector("#city");
const codediv = document.querySelector("#codediv");

  country.style.display = "none" ;
function countrypasswordfun() {

  if (input20.value === 'code') {
    country.style.display = "block" ;
    country.addEventListener('change' , function(){
    city.innerHTML = `<option>Selected City</option>`

    let SelectedCountry = country.value
    if(SelectedCountry && data20[SelectedCountry]){
    data20[SelectedCountry].forEach (function(CityName){
        city.innerHTML += `<option value="${CityName}">${CityName}</option>`;
    });
    }});
  }};


