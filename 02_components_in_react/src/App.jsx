import React from 'react'
import Card from './components/card'
import Navbar from './components/navBar'
const App = () => {
  
  const user = 'sarthak'
  const age = 21

  return (
    <div>
      <Navbar/>
      <div className='card'>
        <h1>Satyapradip</h1>
        <p>Helo guys , i am satyapradip and i am a engineering student. I am learning from {user}. i am {age} years old.</p>
      </div>
      <Card/>

    </div>
  )
}

export default App
