import React from 'react';
import ReactDOM from 'react-dom';
import Table from './components/Table';

const myList = ['Kebab', 'Pizza', 'Salad'];   
const listItems = myList.map((myList)=>{   
    return <li>{myList}</li>;   
});  

const myFavCity = "Istanbul";

ReactDOM.render(
  <div>
  <h1 className='header'>My Website</h1>
  <h4 className='food'>My favorite food list!</h4>
  <ul className='listitems'> {listItems} </ul>   
  <button className='button'>Click Me</button>
  <h2 className='favcity'>{myFavCity} is my favorite city</h2>
  <img className='image' src='https://st3.depositphotos.com/1020618/13308/i/1600/depositphotos_133081938-stock-photo-close-up-of-kebab-sandwich.jpg'></img>
  <br></br>
  <br></br>
  
  <Table />
  </div>,
  document.getElementById('root')
);
