import axios from 'axios';
import React, {useState, useEffect} from 'react';
import Card from './components/Card';
// import data from './data.json'

function App(){
  const [itemList, setItemList] = useState([]);

  useEffect(()=> {
    fetch('https://www.breakingbadapi.com/api/characters')
    .then(response => response.json())
    .then((data)=> setItemList(data))
    // .then((data) => console.log('data: ',  data))
    // axios
    // .get('https://www.breakingbadapi.com/api/characters')
    // .then ((res)=> setItemList(res.data));
  }, [])

  return(
    <div className = 'App'>
      <div className = 'header'>
        <img 
          src = "https://www.logolynx.com/images/logolynx/55/55a537ca9549600cf7d1d0b274b3bc61.png"
          alt = 'Breaking Bad Logo'
         />
      </div>
      <div className = 'cards'>
        {itemList.map((item)=> (
          <Card key= {item.char_id} item={item} />
        ))}
      </div>    
    </div>
  )
}
export default App;
