import React from 'react';

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Content</th>
                <th>is_done</th>
                <th>Remove</th>
            </tr>
        </thead>
    );
}

const TableBody = props => {
    const rows = props.nodeData.map((row, index) => {
      let done = row.is_done == "" ? "no" : "yes";
        return (
            <tr key={index}>
                <td>{row.content}</td>
                <td>{done}</td>
                <td><button onClick={() => props.removeNode(index)}>Remove</button></td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

const Table = (props) => {
    const { nodeData, removeNode } = props;
        return (
            <table>
                <TableHeader />
                <TableBody nodeData={nodeData} removeNode={removeNode} />
            </table>
        );
}

export default Table;
