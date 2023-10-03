const Form = document.querySelector('#login');
const username = document.querySelector("#username")
const password = document.querySelector("#password")



Form.addEventListener("submit", (e) => {
    e.preventDefault()


   let formData = {
    username: username.value,
    password: password.value,
   }
   
   const handleFetchForm = async (res,req) => {
    const request = await fetch("/",{
      method: "POST",
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(formData)

    })
    const response = await request.text()
    console.log(request.statusText)
    console.log(response)
    if(response == 'success'){
      username.value = "";
      password.value = "";
      location.href = "/otp";
    }else {
      console.log("error")
    }

   }
handleFetchForm();


//    let xhr = new XMLHttpRequest();
//    xhr.open('POST','/');
//    xhr.setRequestHeader('content-type','application/json');
//    xhr.onload = function(){
//     console.log(xhr.responseText)
//     if(xhr.responseText == 'success'){
//         email.value = "";
//         password.value = "";
//         location.href = "/otp"
//     }else {
//         alert("something went wrong")
//     }
//    }

//    xhr.send(JSON.stringify(formData))

})


const eye = document.querySelector(".formInput i.fa-eye");

eye.onclick = () => {  
    if (password.type === "password") {
        password.type = "text";
        eye.classList.replace("fa-eye", "fa-eye-slash");
    } else {
        password.type = "password";
        eye.classList.replace("fa-eye-slash","fa-eye");

    }
}