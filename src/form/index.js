import React from "react";

class FormComponent extends React.Component {
    constructor(){
        super();
        this.state = {
            inputText : "",
            showPreview : false
        }
    }

    handleFormSubmit(event){
        event.preventDefault()
        console.log("form is submitted")
        this.setState({
            showPreview : true
        })
    }

    handleFormreset(event){
        event.preventDefault()
        console.log("form resetted")
        this.setState({
            showPreview:false,
            inputText : ""
        })
    }

    handleChange(value){
        this.setState({
            inputText : value
        })
    }

    render(){
        return (
            <div className="form-container">
            <form onSubmit={(event)=>this.handleFormSubmit(event)}
            onReset={(event)=>this.handleFormreset(event)}>
                <input type="text" value={this.state.inputText} placeholder="enter some value" onChange={(event)=>this.handleChange(event.target.value)}/>
                <button type="submit">Submit</button>
                <button type="reset">Reset</button>
            </form>
            {this.state.showPreview && (
            <div>
                <h2>Preview form Data</h2>
                <p>{this.state.inputText}</p>
            </div>
            )
            }
            </div>
        )
    }
}

export default FormComponent