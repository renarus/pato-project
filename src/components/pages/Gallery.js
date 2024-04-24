import React, { useState } from 'react'
import { GalleryData } from '../../datas/GalleryData';
import {IoSearchCircle} from 'react-icons/io5'
const Gallery = () => {
  const [interior, setInterior] = useState(true);
  const [food, setFood] = useState(true);
  const [events, setEvents] = useState(true);

  const setInteriorItems = () => {
    setInterior(true);
    setFood(false);
    setEvents(false);
  }

  const setFoodItems = () => {
    setInterior(false);
    setFood(true);
    setEvents(false);
  }

  const setEventsItems = () => {
    setInterior(false);
    setFood(false);
    setEvents(true);
  }
  const setAllItems = () => {
    setInterior(true);
    setFood(true);
    setEvents(true);
  }
  return (
    <div className='gallery-page'>
      <section className='gallery-section-1'>
        <h1>GALLERY</h1>
      </section>
      <section className='gallery-section-2'>
        <div className="gallery-buttons">
          <div className="container">
            <div className="row">
              <div className="col-3">
                <button onClick={() => setAllItems()}>All Photo</button>
              </div>
              <div className="col-3">
                <button onClick={() => setInteriorItems()}>Interior</button>
              </div>
              <div className="col-3">
                <button onClick={() => setFoodItems()}>Food</button>
              </div>
              <div className="col-3">
                <button onClick={() => setEventsItems()}>Events</button>
              </div>
            </div>
          </div>
        </div>
        <div className="items">
        {
          interior ?
            GalleryData.interior.map((int, index) => {
              return (
                      
                      <div className="int-box" key={index}>
                        <div className="img-container"><img src={int.img} alt="" /></div>
                        <IoSearchCircle />
                      </div>
                   
                 
              )
            })
            : null}
        {
          food ?
            GalleryData.food.map((food, index) => {
              return (
                <div className="food-box" key={index}>
                 <div className="img-container"><img src={food.img} alt="" /></div>
                  <IoSearchCircle />
                </div>
              )
            })
            : null}
        {
          events ?
            GalleryData.events.map((events, index) => {
              return (
                <div className='events-box' key={index}>
                  <div className="img-container"><img src={events.img} alt="" /></div>
                  <IoSearchCircle />
                </div>
              )
            })
            : null}
            </div>
           
      </section>
    </div>
  )
}

export default Gallery