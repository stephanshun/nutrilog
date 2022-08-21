import React from 'react'
import Food from './Food'

const Foods = ({ foods, onDelete }) => {
    return (
        <>
            {foods.map((food) => (
                <Food key={food.id} food={food} 
                onDelete={onDelete} />
            ))}
        </>
    )
}

export default Foods