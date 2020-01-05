import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            content: '',
            is_done: false
        };

        this.state = this.initialState;
    }

    handleTextChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name] : value,
        });
    }

    handleCheckboxChange = event => {
        this.setState({
            is_done: !this.state.is_done
        });
      }

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
        //visually reset the checkbox
        event.target[1].checked=this.initialState.is_done;
    }

    render() {
        const { content, is_done} = this.state;

        return (
            <form onSubmit={this.onFormSubmit}>
                <label for="content">Contet</label>
                <input
                    type="text"
                    name="content"
                    id="content"
                    value={content}
                    onChange={this.handleTextChange} />
                <label for="is_done">Is_done</label>
                <input
                    type="checkbox"
                    name="is_done"
                    id="is_done"
                    value={is_done}
                    onChange={this.handleCheckboxChange} />
                <br />
                <button type="submit">
                    Submit
                </button>
            </form>
        );
    }
}

export default Form;
