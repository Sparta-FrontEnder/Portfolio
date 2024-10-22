import React, { Component } from "react";

class AskForHello extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0,
        };
    }

    handleClick = () => {
        this.setState({count: this.state.count + 1});
    };

    render() {
        return (
            <div>
                <h1>this is class</h1>
                <h1>Hello, {this.props.name}!</h1>
                <p>you clicked {this.state.count} times</p>
                <button onClick={this.handleClick}>Click me</button>
            </div>
        )
    }
}

export default AskForHello;