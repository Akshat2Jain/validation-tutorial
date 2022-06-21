const form=document.getElementById("contact");
const nm=document.getElementById("username");
const em=document.getElementById("email");
const ps=document.getElementById("password");


// validation on username
function validatename(input)
{
  if(input.value=="")
  {
      alert("Name can not be empty");
  }
  else if(input.value.length<5 || input.value.length>10)
  {
      alert("Name must be in range")
  }
  else{
      console.log("Name is valid")
  }

}
// validation on email

 function validateemail(input)
{
    if(input.value.trim()==="")
    {
        alert("Email Can not be empty")
    }
    else if(!input.value.includes("@"))
    {
        alert("@ is not included!")
    }
    else if(!input.value.includes("."))
    {
        alert(". is not present")
    }
    else if(input.value.charAt(input.value.length-4)!=".")
    {
        alert("must contain something after '.' ");
    }
    else
    {
        console.log("Email is Valid!")
    }
}

function validatepassword(input)
{
    let pattern= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,10}$/
    if(input.value.trim()==="")
    {
        alert("password can not be empty!")
    }      
    else if(!input.value.match(pattern)) 
    {
        alert("password between 5 to 10 characters which contain at least one numeric digit, one uppercase and one lowercase letter")
    }         
    else
    {
        console.log("valid password");
    }
}


form.addEventListener("submit",(e)=>{
    e.preventDefault();
    // console.log("submitted")
    validatename(nm);
    validateemail(em);
    validatepassword(ps);
})

