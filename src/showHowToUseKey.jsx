import React from "react";
// const item = ['apple', 'banana', 'orange'];
// const ItemList = items.map((item, index) => {
//     <l1 key={index}>{item}</l1>
// });

const ItemList = () => {
    const item = ['apple', 'banana', 'orange'];
    return (
        <ul>
            {item.map((item, index) => (
                <li key={index} style={{ listStyle: 'none' }}>{item}</li>
            ))}
        </ul>
    )
}

export default ItemList;