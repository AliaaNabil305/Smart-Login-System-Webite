var heading=document.getElementById("heading")
var Name = localStorage.getItem('name');

console.log(Name)

heading.textContent="Welcome"+ " "+ Name

