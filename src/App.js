import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Foods from './components/Foods'
import AddFood from './components/AddFood'
import NutritionTotal from './components/NutritionTotal'
import axios from 'axios'

const App = () => {
  const [showAddFood, setShowAddFood] = useState(false)
  const [foods, setFoods] = useState([])
  var totalProtein = 0
  var totalEnergy = 0
  const url = 'https://630c789b53a833c5342c229e.mockapi.io/foods'

  // Calculate total kJs and Protein info (constantly)
  nutritionCalc()

  useEffect(() => {
    axios.get(url)
    .then(response => {
        setFoods(response.data)
    })
  }, [])

  // Fetch Tasks
  // const fetchFoods = async () => {
  //   const res = await fetch('http://localhost:5000/foods')
  //   const data = await res.json()

  //   return data
  // }



  // Add Food
  const addFood = async (food) => {
    const response = await axios.post(url, food);
    // await fetch('http://localhost:5000/foods', {
    //   method: 'POST',
    //   headers: {
    //     'Content-type': 'application/json'
    //   },
    //   body: JSON.stringify(food),
    // })

    // const data = await res.json()

    setFoods([...foods, response.data])

    // const id = Math.floor(Math.random() * 10000) + 1
    // const newFood = { id, ...food }
    // setFoods([...foods, newFood])
  }

  // Delete Food
  const deleteFood = async (id) => {
    var url_id = url + `/${id}`;
    await axios.delete(url_id);
    // await fetch(`http://localhost:5000/foods/${id}`, {
    //   method: 'DELETE'
    // })

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
      <Header onAdd={() => setShowAddFood(!showAddFood)} />
      {showAddFood && <AddFood onAdd={addFood} />}
      <Foods foods={foods} onDelete={deleteFood} />
      <NutritionTotal totalProtein={totalProtein} totalEnergy={totalEnergy} />
    </div>
  );
}

export default App;