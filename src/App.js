import './App.css'
import React, { useState } from 'react'
import Counter from './components/Counter'
import { getDeployed } from './contracts/counter'

function App () {
  const [count, setCount] = useState(0)

  const getData = async () => {
    try {
      const contract = await getDeployed()
      const counter = await contract.methods.value().call()
      console.log('contador', counter)
      setCount(counter)
    } catch (ex) {
      console.log(ex)
    }
  }

  React.useEffect(() => {
    getData()
  }, []) // eslint-disable-line

  return (
    <div className='App'>
      {count && <Counter counter={count} />}
    </div>
  )
}

export default App
