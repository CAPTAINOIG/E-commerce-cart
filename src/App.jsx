import './App.css'
import { Route, Routes } from 'react-router-dom'
import Commerce from './component/Commerce'
import Getitem from './component/Getitem'
import { createContext, useState } from 'react'
import Paystack from './component/Paystack'
import Errorpage from './component/Errorpage'




export  const AppContext = createContext("")
function App() {
  const [num, setnum] = useState(0)

  const air = () => {
    if (num == 0) {
        alert("iii")
    } else {

        setnum(num - 1)
        console.log(num);
        localStorage.setItem("cartAcc", JSON.stringify(num))
    }
}

const plus = () => {
    setnum(num + 1)
    console.log(num);
    localStorage.setItem("cartAcc", JSON.stringify(num))

}

  return (
    
    <>
    
    <AppContext.Provider value={{num, setnum}}>
      <Routes>
        <Route path='/' element={<Commerce/>}/>
        <Route path='/getitem' element={<Getitem/>}/>
        <Route path='/Paystack' element={<Paystack/>}/>
        <Route path='*' element={<Errorpage/>}/>
      </Routes>
    </AppContext.Provider>
      


     
    </>
  )
}

export default App
