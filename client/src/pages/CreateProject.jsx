import React from 'react';

const CreateProject = () => {
    return (
        <div className="container mx-auto px-4 py-8">
             <div className = "some-space"></div>
                 <div class = "form">
                    <div class = "form-group">
                        <input type = "text" id = "projectname" placeholder = "Project name"></input>
                        <label for = "fullName">Your Project Name</label>
                    </div>
                    <div class = "form-group">
                        <input type = "text" id = "projectname" placeholder = "Location"></input>
                        <label for = "fullName">Location</label>
                    </div>
                    <div class = "Expected Budget">
                        <input type = "text" id = "projectname" placeholder = "ExpectedBudget"></input>
                        <label for = "fullName">Expected Budget</label>
                    </div>
                    <div class = "Sustainability Goals">
                        <input type = "message" id = "goals" rows = "30" cols = "10" placeholder = "ExpectedBudget"></input>
                        <label for = "fullName">Sustainability Goals</label>
                    </div>
            </div>
        </div>
    )};
  
  export default CreateProject