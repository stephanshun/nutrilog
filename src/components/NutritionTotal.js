import React from 'react'

const NutritionTotal = ({ totalProtein, totalEnergy }) => {
  return (
    <div>
      <h3>Total: {totalProtein} g Protein, { totalEnergy } kJ Energy</h3>
    </div>
  )
}

export default NutritionTotal
