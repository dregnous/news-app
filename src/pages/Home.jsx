import React, {useState, useEffect}  from 'react';
import { Card } from '../components/Card';
import './Home.css';

const Home = () => {

  useEffect(() => {
    fetchItems();

  },[]);
  
  const [items, setItems] = useState([]);

  // const API_KEY = 54f99911124a411eb2cc90a0f1154c6d;

  const fetchItems = async () => {
    const data = await fetch(`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=54f99911124a411eb2cc90a0f1154c6d`);
    const items = await data.json();
    console.log(items)
    setItems(items.articles);
   
  }

  const handleClass = () => {
    let num = Math.floor(Math.random() * 4);

    if (num === 1) {
      return 'big';
    }
    else if (num === 2) {
      return 'medium';
    } 
    else {
      return 'small';
    }
  }
    return (
        
        <div className='card-grid'>
          {items.map((item, index) => {
            return (
              <Card 
                className={handleClass()} 
                key={index} 
                title={item.title} 
                excerpt={item.description} 
                category={item.author}
                img={item.urlToImage}
                alt="image"
                
              />
            );
          })}
        </div>

        
    );
}

export default Home;