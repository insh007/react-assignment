import React from "react";
import './text.css'

class FormTextArea extends React.Component {
    constructor(){
        super();
        this.state = {
            showPreview : false,
            inputText : ""
        }
    }
    formSubmit(event){
        event.preventDefault()
        console.log("form submitted")
        this.setState({
            showPreview : true
        })
    }
    
    formReset(event){
        event.preventDefault()
        this.setState({
            showPreview : false,
            inputText : ""
        })
    }

    changeInput(value){
        this.setState({
            inputText : value
        })
    }


    render(){
        return (
            <div className="form-textarea">
                <form onSubmit={(event)=>this.formSubmit(event)}
                onReset={(event)=>this.formReset(event)}>
                <input className="form-control" type="text" placeholder="type here" value={this.state.inputText} onChange={(event)=>this.changeInput(event.target.value)} /> <br />
                <button type="submit">toUpperCase</button>
                <button type="reset">Reset</button>
                </form>
                {this.state.showPreview && (
                    <div>
                        <h2>Uppercase Preview</h2>
                        <p>{this.state.inputText.toUpperCase()}</p>
                    </div>
                )}
            </div>
        )
    }
}

export default FormTextArea