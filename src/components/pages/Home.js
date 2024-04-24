import React, { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { FaLongArrowAltRight } from 'react-icons/fa';
import Card from '../Card';
const Home = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [])
  return (
    <div className="home-page">
      <section className='home-section-1'>
        {loading ? <img className='gif' src='https://i.stack.imgur.com/ATB3o.gif' alt='loading' /> :
          <div className='carousel-1'>
            <Carousel fade>
              <Carousel.Item>
                <img src="https://preview.colorlib.com/theme/pato/images/slide1-01.jpg" alt="image" />
                <Carousel.Caption>
                  <h1 className='animate__animated animate__rotateInDownLeft'>Welcome to</h1>
                  <h2 className='animate__animated animate__rotateInUpRight'>Pato Place</h2>
                  <button className='animate__animated animate__fadeInUp'>Look Menu</button>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src="https://preview.colorlib.com/theme/pato/images/master-slides-02.jpg" alt="image" />
                <Carousel.Caption>
                  <h1 className='animate__animated animate__rotateInDownLeft'>Welcome to</h1>
                  <h2 className='animate__animated animate__rotateInUpRight'>Pato Place</h2>
                  <button className='animate__animated animate__fadeInUp'>Look Menu</button>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src="https://preview.colorlib.com/theme/pato/images/master-slides-01.jpg" alt="image" />
                <Carousel.Caption>
                  <h1 className='animate__animated animate__rotateInDownLeft'>Welcome to</h1>
                  <h2 className='animate__animated animate__rotateInUpRight'>Pato Place</h2>
                  <button className='animate__animated animate__fadeInUp'>Look Menu</button>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>}
      </section>
      <section className='home-section-2'>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 italian-res-content">
              <h3>Italian Restaurant</h3>
              <h1>Welcome</h1>
              <p>Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi, ac facilisis ligula sem id neque.</p>
              <a href="#">Our Story  <FaLongArrowAltRight /></a>
            </div>
            <div className="col-lg-6 italian-res-food">
              <img src="https://preview.colorlib.com/theme/pato/images/our-story-01.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className='home-section-3'>
        <div className="section-3-content">
          <p>Discover</p>
          <h1>Pato Place</h1>
        </div>
      </section>
      <section className='home-section-4 container'>
        {
          Card.map((cardItem, index) => {
            return (
              <div className="card" style={{ width: "21rem" }} >
                <img className="card-img-top" src={cardItem.img} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">{cardItem.title}</h5>
                  <p className="card-text">
                    {cardItem.text}
                  </p>
                  <a href="#">
                    Learn More  <FaLongArrowAltRight />
                  </a>
                </div>
              </div>
            )
          })
        }
      </section>
      <section className='home-section-5'>
        <div className="container">
          <div className="section-5-content">
            <p>Discover</p>
            <h1>Our menu</h1>
          </div>
          <div className="row">
            <div className="col-4">
              <div className="our-menu-img-1">
                <img src="https://preview.colorlib.com/theme/pato/images/our-menu-01.jpg" alt="" />
                <button>Lunch</button>
              </div>
            </div>
            <div className="col-4">
              <div className="our-menu-img-1">
                <img src="https://preview.colorlib.com/theme/pato/images/our-menu-05.jpg" alt="" />
                <button>Dinner</button>
              </div>
            </div>
            <div className="col-4">
              <div className="our-menu-img-2">
                <img src="https://preview.colorlib.com/theme/pato/images/our-menu-08.jpg" alt="" />
                <button>Drink</button>
              </div>
              <div className="our-menu-img-2">
                <img src="https://preview.colorlib.com/theme/pato/images/our-menu-10.jpg" className='mt-4' alt="" />
                <button>Starters</button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-8">
              <div className="our-menu-img-3">
                <img src="https://preview.colorlib.com/theme/pato/images/our-menu-13.jpg" className='mt-4' alt="" />
                <button>Happy Hour</button>
              </div>
            </div>
            <div className="col-4">
              <div className="our-menu-img-4">
                <img src="https://preview.colorlib.com/theme/pato/images/our-menu-16.jpg" className='mt-4' alt="" />
                <button>Dessert</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-section-6">
        <div className='carousel-2'>
          <Carousel fade>
            <Carousel.Item>
              <img src="https://preview.colorlib.com/theme/pato/images/bg-event-01.jpg" alt="image" />
              <Carousel.Caption>
                <p className='animate__animated animate__rotateInDownLeft'>Upcoming</p>
                <h1 className='animate__animated animate__rotateInUpRight'>Events</h1>
                <div className="box">
                  <div className="row">
                    <div className="col-6">
                      <img src="https://preview.colorlib.com/theme/pato/images/event-01.jpg" alt="" />
                    </div>
                    <div className="col-6">
                      <h4>Wines during specific nights</h4>
                      <p>Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed fringilla, nunc sed imperdiet lacinia</p>
                      <div className="row">
                        <div className="col-3">
                          <h1>25</h1>
                          <h2>Days</h2>
                        </div>
                        <div className="col-3">
                          <h1>12</h1>
                          <h2>Hours</h2>
                        </div>
                        <div className="col-3">
                          <h1>46</h1>
                          <h2>Minutes</h2>
                        </div>
                        <div className="col-3">
                          <h1><time>15</time></h1>
                          <h2>Seconds</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src="https://preview.colorlib.com/theme/pato/images/bg-event-02.jpg" alt="image" />
              <Carousel.Caption>
                <p className='animate__animated animate__rotateInDownLeft'>Upcoming</p>
                <h1 className='animate__animated animate__rotateInUpRight'>Events</h1>
                <div className="box">
                  <div className="row">
                    <div className="col-6">
                      <img src="https://preview.colorlib.com/theme/pato/images/event-02.jpg" alt="" />
                    </div>
                    <div className="col-6">
                      <h4>Wines during specific nights</h4>
                      <p>Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed fringilla, nunc sed imperdiet lacinia</p>
                      <div className="row">
                        <div className="col-3">
                          <h1>25</h1>
                          <h2>Days</h2>
                        </div>
                        <div className="col-3">
                          <h1>12</h1>
                          <h2>Hours</h2>
                        </div>
                        <div className="col-3">
                          <h1>46</h1>
                          <h2>Minutes</h2>
                        </div>
                        <div className="col-3">
                          <h1><time>15</time></h1>
                          <h2>Seconds</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src="https://preview.colorlib.com/theme/pato/images/bg-event-04.jpg" alt="image" />
              <Carousel.Caption>
                <p className='animate__animated animate__rotateInDownLeft'>Upcoming</p>
                <h1 className='animate__animated animate__rotateInUpRight'>Events</h1>
                <div className="box">
                  <div className="row">
                    <div className="col-6">
                      <img src="https://preview.colorlib.com/theme/pato/images/event-06.jpg" alt="" />
                    </div>
                    <div className="col-6">
                      <h4>Wines during specific nights</h4>
                      <p>Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed fringilla, nunc sed imperdiet lacinia</p>
                      <div className="row">
                        <div className="col-3">
                          <h1>25</h1>
                          <h2>Days</h2>
                        </div>
                        <div className="col-3">
                          <h1>12</h1>
                          <h2>Hours</h2>
                        </div>
                        <div className="col-3">
                          <h1>46</h1>
                          <h2>Minutes</h2>
                        </div>
                        <div className="col-3">
                          <h1><time>15</time></h1>
                          <h2>Seconds</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </section>
      <section className='home-section-7'>
        <div className="section-7-content">
          <p>Reservation</p>
          <h1>BOOK TABLE</h1>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="row">
                <div className="col-6">
                  <input type="date" /> 
                  <div className="selection-1">
                  <select>
                    <option>9:00</option>
                    <option>9:30</option>
                    <option>10:00</option>
                    <option>10:30</option>
                    <option>11:00</option>
                    <option>11:30</option>
                    <option>12:00</option>
                    <option>12:30</option>
                    <option>13:00</option>
                    <option>13:30</option>
                    <option>14:00</option>
                    <option>14:30</option>
                    <option>15:00</option>
                    <option>15:30</option>
                    <option>16:00</option>
                    <option>16:30</option>
                    <option>17:00</option>
                    <option>17:30</option>
                    <option>18:00</option>
                  </select>
                  </div>
                  <div className="selection-2">
                  <select>
                    <option>1 person</option>
                    <option>2 people</option>
                    <option>3 people</option>
                    <option>4 people</option>
                    <option>5 people</option>
                    <option>6 people</option>
                    <option>7 people</option>
                    <option>8 people</option>
                    <option>9 people</option>
                    <option>10 people</option>
                    <option>11 people</option>
                    <option>12 people</option>
                  </select>
                  </div>
                </div>
                <div className="col-6">
                  <input type="" />
                  <input type="" />
                  <input type="" />
                </div>
              </div>
            </div>
            <div className="col-6">
              <img src="https://preview.colorlib.com/theme/pato/images/booking-01.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )


}


export default Home