import React, { Component } from 'react';
import SortableTree from 'react-sortable-tree';
import 'react-sortable-tree/style.css'; // This only needs to be imported once in your app

class Tree extends Component {
  constructor(props) {
    super(props);

    this.state = {
      treeData: [
        {title:'Chicken', subtitle:'NotDone', expanded:true, children:[
          {title:'Egg', subtitle:'Done', children:[
            {title:'yolk', subtitle:'NotDone'},
            {title:'white', subtitle:'Done'}
          ] }
        ]},
        {title:'Fish', subtitle:'Done', children:[
          {title:'Carp', subtitle:'Done'},
          {title:'Trout', subtitle:'NotDone'}
        ] }
      ],
    };
  }

  render() {
    return (
      <div style={{ height: 400 }}>
        <SortableTree
          treeData={this.state.treeData}
          onChange={treeData => this.setState({ treeData })}
        />
      </div>
    );
  }
}

export default Tree;
