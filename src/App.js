import Header from './Header';
import Main from './Main';
import { createContext, useEffect, useState } from 'react'

// create table data contex to be used inside components down in the DOM tree
export const TableContext = createContext([])

function App() {

  const [data, setData] = useState([])

  // fetch data from server once the component "did mount"
  useEffect(()=>{
    async function fetchData(){
      const response = await fetch("http://localhost:3001/data");
      const data = await response.json()
      setData(data)
      console.log(data)
    }
    fetchData()
  }, [])

  return (
    <div className="App">
      <TableContext.Provider value={data}>
        <Header />
        <Main />
      </TableContext.Provider>
    </div>
  );
}

export default App
