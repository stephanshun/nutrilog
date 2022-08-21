import React, { useState } from 'react'

const AddFood = ( { onAdd } ) => {
    const [name, setName] = useState('')
    const [protein, setProtein] = useState('')
    const [energy, setEnergy] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!name) {
            alert('Please add a food item')
            return
        }

        onAdd({ name, protein, energy} )

        setName('')
        setProtein('')
        setEnergy('')
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Food</label>
                <input
                    type='name'
                    placeholder='Add Food'
                    value={name}
                    onChange={(e) => setName(e.target.value)} 
                />
            </div>
            <div className='form-control'>
                <label>Protein (g)</label>
                <input
                    type='protein'
                    placeholder='Add Protein'
                    value={protein}
                    onChange={(e) => setProtein(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Energy (kJ)</label>
                <input
                    type='energy'
                    placeholder='Add Energy'
                    value={energy}
                    onChange={(e) => setEnergy(e.target.value)}
                />
            </div>

            <input type='submit' value='Save Food' className='btn btn-block' />
        </form>
    )
}

export default AddFood