import React from 'react';

const Register = () => {
    return (
        <div className="container mx-auto px-4 py-8">
             <h1 className="text-4xl font-bold">Registration Page</h1>
             <div class = "form">
                <div class = "form-group">
                    <input type = "text" id = "username" placeholder = "Enter your username"></input>
                    <label for = "fullName">Your username</label>
                </div>
                <div class = "form-group">
                    <input type = "text" id = "password" placeholder = "Enter your password"></input>
                    <label for = "fullName">Your password</label>
                </div>
                <div class = "form-group">
                    <input type = "text" id = "email" placeholder = "Enter your email"></input>
                    <label for = "fullName">Your password</label>
                </div>           

            </div>

        </div>
    );
};



export default Register
