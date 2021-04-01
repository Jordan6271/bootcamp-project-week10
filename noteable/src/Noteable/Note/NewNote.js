import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class NewNote extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: ``,
            title: ``,
            description: ``
        }
    }

    handleChange(event) {
        const newState = {};
        newState[event.target.name] = event.target.value;
        this.setState(newState);
        
    }

    submitHandler(event) {
        event.preventDefault();
        this.props.onsubmit(this.state.username, this.state.title, this.state.description, this.state.stamps);
        this.setState({
            username: ``,
            title: ``,
            description: ``
        })
    }

    render () {
        return (
            <div id="new-note">
                <Form onSubmit={(e) => this.submitHandler(e)} >
                    <Form.Group controlId="noteUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control onChange={(e) => this.handleChange(e)} name="username" type="text" value={this.state.username} />
                    </Form.Group>
    
                    <Form.Group controlId="noteTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control onChange={(e) => this.handleChange(e)} name="title" type="text" value={this.state.title} />
                    </Form.Group>
    
                    <Form.Group controlId="noteDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control onChange={(e) => this.handleChange(e)} name="description" type="text" value={this.state.description} />
                    </Form.Group>
    
                    <Button variant="danger" type="submit">
                        Pin
                    </Button>
                </Form>
            </div>
        );
    }
}

export default NewNote;