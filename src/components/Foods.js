import React from 'react'
import Food from './Food'

const Foods = ({ foods, onDelete }) => {
    return (
        <>
            {foods.map((food, index) => (
                <Food key={index} food={food} 
                onDelete={onDelete} />
            ))}
        </>
    )
}

export default Foods