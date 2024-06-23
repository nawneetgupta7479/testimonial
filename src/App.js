import React from 'react';
import './App.css';
import reviews from './data';
import Testimonial from './components.js/Testimonial';

function App() {
  return (
    <div className="App flex flex-col bg-gray-200 py-2 h-[100vh]   w-[100vw]justify-center items-center overflow-x-hidden">
        <div className='text-center'>
          <h className="heading text-3xl  ">Our Testimonials</h>
        </div>
        <div className='underline h-[2px] w-[90px] mb-4 mt-2 bg-violet-600'></div>
        <Testimonial reviews={reviews}/>
    </div>
  );
}

export default App;
