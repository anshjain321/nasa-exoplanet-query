import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setdata] = useState(null);
  const [isloading, setisloading] = useState(null);
  const [error, seterror] = useState(null);

  useEffect(() => {
    const fetchData = async ()=>{
      try{
    const response  = await fetch('/api/data');
    if(!response.ok){
      throw new Error('failed to fetch data');
    }  
    const jsonData = await response.json();
    setdata(jsonData);
  }
  catch(error) {
   seterror(error.message);
  }
  finally{
    setisloading(false);
  }
    };
   fetchData();
  }, []);

  if (isloading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      
    </>
  )
}

export default App
