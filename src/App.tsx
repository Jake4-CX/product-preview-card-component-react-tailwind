import { useState } from 'react'
import { Product } from './components/Product'

function App() {

  return (
    <div className="App bg-[#f3eae3] w-screen h-screen">
      <div className='flex flex-row min-h-screen justify-center items-center'>
        <Product />
      </div>
    </div>
  )
}

export default App
