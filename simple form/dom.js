let number =document.getElementById('number').value; 
let name =document.getElementById('name').value; 
let email =document.getElementById('email').value; 
let check =document.getElementById('check').value; 

if(number !=null &&  name !=null && email!=null&&check!=null){
    alet("Form submitted Successfully")
}else{
    alert("All fields are required")
}