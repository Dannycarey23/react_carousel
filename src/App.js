import React from 'react'
import Carousel from './Carousel';
import './App.css';

const pics = [
  { url: './images/1.png', title: 'vet1' },
  { url: './images/2.png', title: 'vet2' },
  { url: './images/3.png', title: 'vet3' },
  { url: './images/4.png', title: 'vet4' },
  { url: './images/5.png', title: 'vet5' },
]

function App() {
  return (
    <div className='carouselContainer' height="100%">
      <Carousel pics={pics} />
    </div>


  );
}

export default App;
