import Card from './components/Card';
import data from './data.json'

function App(){


  return(
    <div className = 'App'>
      <header className = 'header'>
      <img 
      src = "https://www.logolynx.com/images/logolynx/55/55a537ca9549600cf7d1d0b274b3bc61.png"
      alt = 'Breaking Bad Logo'
      />
      </header>

      <div className = 'cards'>
        {data.map((item)=> (
          <Card key= {item.char_id} item={item} />

        ))}
      </div>
      
    </div>
  )
}
export default App;