import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';
import Tree from './Tree';

class App extends Component {
    state = {
        nodes: [
          {content:'Chicken', is_done:false},
          {content:'Egg', is_done:true},
          {content:'yolk', is_done:false},
          {content:'white', is_done:true},
          {content:'Fish', is_done:true},
          {content:'Carp', is_done:true},
          {content:'Trout', is_done:false},
        ] };

    removeNode = index => {
        const { nodes } = this.state;

        this.setState({
            nodes: nodes.filter((node, i) => {
                return i !== index;
            })
        });
    }

    handleSubmit = node => {
        this.setState({nodes: [...this.state.nodes, node]});
    }

    render() {
        const { nodes } = this.state;

        return (
            <div className="container">
                <h1>LMAP</h1>
                <p>Add a node with a content and a is_done to the table.</p>
                <Tree />
                <Table
                    nodeData={nodes}
                    removeNode={this.removeNode}
                />
                <h3>Add New</h3>
                <Form handleSubmit={this.handleSubmit} />
            </div>
        );
    }
}

export default App;
