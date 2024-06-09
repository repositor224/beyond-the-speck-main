import React from 'react';


const Login = () => {
    return (
    <html>
    <div className="container mx-auto px-4 py-8">
        <div className = "some-space"></div>
        <div class = "form">
            <div class = "form-group">
                <input type = "text" id = "username" placeholder = "Your name"></input>
                <label for = "fullName">Your username</label>
            </div>
            <div class = "form-group">
                <input type = "text" id = "password"></input>
                <label for = "fullName">Your password</label>
            </div>
        </div>
        <div class = "center-btn-wrapper">
           <button id = "myBtn" type = "button" class = "btn" onclick = "test()"> Login </button>
           <button id = "Register" type = "button" class = "btn" onclick = "register()"> Register </button>
           <script>
           let inputing = document.getElementById("username");
           let inputs = inputing.value;
           let outputing = document.getElementById("password");
           let outputs = outputing.value;
           function test()
                if(inputs.equals("ABCD")){
                    alert("Username and password correct!")
                }
                else{
                    alert("Incorrect username and password")
                } 
           </script>
        </div>
    </div>
    </html>
)
}


export default Login

