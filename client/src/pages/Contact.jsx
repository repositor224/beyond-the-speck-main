import React from 'react'

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8">
    <h1 className="text-4xl font-bold">Registration Page</h1>
    <div class = "form">
       <div class = "form-group">
           <input type = "text" id = "email" placeholder = "Enter your email"></input>
           <label for = "fullName">Your email</label>
       </div>
       <div class = "form-group">
           <textarea name="message" id = "message" placeholder = "Enter your message"></textarea>
           <label for = "fullName">Your message</label>
       </div>       
   </div>
   </div>
  )
}

export default Contact