import React from 'react';
import GroceryItem from './GroceryItem';

const GroceryList = (props) => {
    const { listz } = props
    return (
        <ul>{
            listz.map( (item, i) =>
                <GroceryItem item={item}/>
                )
            }
        </ul>
    );
}

export default GroceryList;