import React, { Component } from 'react'

class Form extends Component {
    initiaState = {
        name: '',
        job: ''
    }
    state = this.initiaState

    handleChange = event => {
        const { name, value } = event.target

        this.setState({
            [name]: value,
        })
    }

    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initiaState)
    }

    render() {
        const { name, job } = this.state;
        return (
            <form>
                <label html="name">Name</label>
                <input
                    type="text"
                    name="job"
                    id="job"
                    value={job}
                    onChange={this.handleChange} />

                <input type="button" value="Submit" onClick={this.submitForm} />
            </form>
        );
    }
}

export default Form;
