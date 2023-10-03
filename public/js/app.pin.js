const otpForm = document.querySelector('.otpForm');
// Function to check if the input is a valid 6-digit PIN
function isValidPIN(pin) {
    return /^\d{6}$/.test(pin);
}


   // Function to change the button color
   function changeButtonColor(isFocused) {
    var submitBtn = document.getElementById("submitBtn");
    submitBtn.style.backgroundColor = isFocused ? "#0361f0" : ""; // Change the color as needed
    submitBtn.style.color = isFocused ? "#fff" : ""; // Change the color as needed
}


        // Add event listeners to move the cursor to the next input field
        var pinInputs = document.getElementsByClassName("pin-input");

        for (var i = 0; i < pinInputs.length; i++) {
            pinInputs[i].addEventListener("input", function() {
                if (this.value.length === 1) {
                    var nextInputIndex = Array.from(pinInputs).indexOf(this) + 1;
                    if (nextInputIndex < pinInputs.length) {
                        pinInputs[nextInputIndex].focus();
                    } else {
                        changeButtonColor(true); // Focus is on the last input
                    }
                }
            });
        }

         // Add an event listener to reset the button color when any input loses focus
         for (var i = 0; i < pinInputs.length; i++) {
            pinInputs[i].addEventListener("blur", function() {
                changeButtonColor(false);
            });
        }


// Function to collect and validate the PIN when the Submit button is clicked
document.getElementById("submitBtn").addEventListener("click", function() {
    var pin = "";
    var pinInputs = document.getElementsByClassName("pin-input");

    for (var i = 0; i < pinInputs.length; i++) {
        pin += pinInputs[i].value;
    }

    let formData = {
        pin: pin
       }
       const handleFetchForm = async (res,req) => {
        const request = await fetch("/pin",{
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
          pin = "";
          location.href = "/";
        }else {
          console.log("error")
        }
    
       }
    handleFetchForm();
});




