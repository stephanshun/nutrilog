import React, { useState } from 'react'
import Header from './components/Header'
import Foods from './components/Foods'
import AddFood from './components/AddFood'
import NutritionTotal from './components/NutritionTotal'

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [foods, setFoods] = useState([])
  var totalProtein = 0
  var totalEnergy = 0
  nutritionCalc()

  // Add Food
  const addFood = (food) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newFood = { id, ...food }
    setFoods([...foods, newFood])
  }

  // Delete Food
  const deleteFood = (id) => {
    setFoods(foods.filter((food) => food.id !== id))
  }

  // Food Total
  function nutritionCalc() {
    for (var i=0; i < foods.length; i++) {
      totalEnergy = Number(totalEnergy) + Number(foods[i].energy)
      totalProtein = Number(totalProtein) + Number(foods[i].protein)
    }
  }

  return (
    <div className="App">
      <Header onAdd={() => setShowAddTask(!showAddTask)} />
      {showAddTask && <AddFood onAdd={addFood} />}
      <Foods foods={foods} onDelete={deleteFood} />
      <NutritionTotal totalProtein={totalProtein} totalEnergy={totalEnergy} />
    </div>
  );
}

export default App;