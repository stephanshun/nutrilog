import { FaTimes } from 'react-icons/fa'
import React from 'react'

const Food = ( { food, onDelete }) => {
    return (
        <div className='food'>
            <h3>{food.name}
                <FaTimes
                    style={{ color: 'red', cursor: 
                    'pointer' }}
                    onClick={() => onDelete(food.id)}
                />
            </h3>
            <p>Protein: {food.protein} g</p>
            <p>Energy: {food.energy} kJ</p>
        </div>
    )
}

export default Food
