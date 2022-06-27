import React, { useEffect, useState } from 'react';
import Loading from './Container/Loding';
import Home from './Container/Home';


const LoadingWithHome = Loading(Home);

function App(props) {

  const [loading, setLoading] =  useState(false);
  const [data, setData] = useState([]);

  const orgData =[
    {id: 4880, name: "Shreeya"},
    {id: 4965, name: "Vidhi"}
  ]

  useEffect(() => {
    setLoading(true);
    setTimeout (() => {setLoading(false); setData(orgData) }, 2000)
  },[])

  return (
    <div> 
        <LoadingWithHome  loading = {loading}
        data = {data} />
    </div>
  );
}

export default App; 