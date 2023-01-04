import React from "react";

class UserForm extends React.Component {
    constructor(){
        super();
        this.state = {

        }
    }

    formSubmit(event){
        console.log("form submitted")
        event.preventDefault()
    }

    render(){
        return (
            <div className="form-contain">
                <form onSubmit={(event)=>this.formSubmit(event)}>
                    <input type="text" className="fname" placeholder="enter first name" required/>
                    <input type="text" className="lname" placeholder="enter last name" required/><br />
                    <input type="radio" id="Male" name="details" required/>
                    <label htmlFor="Male">Male</label>
                    <input type="radio" id="Female" name="details" required/>
                    <label htmlFor="Female">Female</label>
                    <input type="radio" id="Others" name="details" required/>
                    <label htmlFor="Others">Others</label><br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default UserForm