import React from "react";

const Body = props => {
    const { amount, date, description, selectValue } = props.items;
    return (
        <tbody>
            <tr>
                <td>{amount}</td>
                <td>{date}</td>
                <td>{description}</td>
                <td>{selectValue}</td>
                <td>
                    <p onClick={props.deleteElement(props.items)}>delete</p>
                </td>
            </tr>
        </tbody>
    );
};

export default Body;
