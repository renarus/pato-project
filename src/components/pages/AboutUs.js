import React from 'react'
import { IoMdPlayCircle } from 'react-icons/io'
const AboutUs = () => {
    return (
        <div className='about-page'>
            <section className='about-section-1'>
                <h1>About us</h1>
            </section>
            <section className="about-section-2">
                <div className="about-content-1">
                    <h3>Italian Restaurant</h3>
                    <h1>Our story</h1>
                    <p>Fusce at risus eget mi auctor pulvinar. Suspendisse maximus venenatis pretium. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam purus purus, lacinia a scelerisque in, luctus vel felis. Donec odio diam, dignissim a efficitur at, efficitur et est. Pellentesque semper est ut pulvinar ullamcorper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla et leo accumsan, egestas velit ac, fringilla tortor. Sed varius justo sed luctus mattis.</p>
                </div>
            </section>
            <section className='about-section-3'>
                <div className="about-video">
                    {/* <iframe src="https://youtu.be/5k1hSu2gdKE?si=meKagXiGQnZikebw" frameborder="0" allowFullScreen></iframe> */}
                    <h3>Discover</h3>
                    <h1>Our video</h1>
                    <a href="https://youtu.be/5k1hSu2gdKE?si=meKagXiGQnZikebw"><IoMdPlayCircle /></a>
                </div>
            </section>
            <section className='about-section-4'>
                <div className="section-4-content row container">
                    <div className="romantic-restaurant-img col-7">
                    <img src="https://preview.colorlib.com/theme/pato/images/our-story-02.jpg" alt="" />
                    </div>
                    <div className="romantic-restaurant col-5">
                        <h3>Romantic</h3>
                        <h1>Restaurant</h1>
                        <p>Fusce iaculis, quam quis volutpat cursus, tellus quam varius eros, in euismod lorem nisl in ante. Maecenas imperdiet vulputate dui sit amet vestibulum. Nulla quis suscipit nisl.</p>
                    </div>
                </div>
                <div className='about-section-4-pic'></div>
            </section>
            <section className='about-section-5'>
                <div className="section-5-content">
                    <h3>Meet Our</h3>
                    <h1>Chef</h1>
                </div>
                <div className="container">
                <div className="row chefs">
                    <div className="col-4 about-chefs">
                        <div className="chef-image">
                            <img src="https://preview.colorlib.com/theme/pato/images/avatar-02.jpg" alt="" />
                        </div>
                        <div className="about-chef">
                            <h1>Peter Hart</h1>
                             <h6>Chef</h6>
                             <p>Donec porta eleifend mauris ut effici-tur. Quisque non velit vestibulum, lob-ortis mi eget, rhoncus nunc</p>
                        </div>
                    </div>
                    <div className="col-4 about-chefs">
                        <div className="chef-image">
                            <img src="https://preview.colorlib.com/theme/pato/images/avatar-03.jpg" alt="" />
                        </div>
                        <div className="about-chef">
                            <h1>Joyce Bowman</h1>
                             <h6>Chef</h6>
                             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultricies felis a sem tempus tempus.</p>
                        </div>
                    </div>
                    <div className="col-4 about-chefs">
                        <div className="chef-image">
                            <img src="https://preview.colorlib.com/theme/pato/images/avatar-05.jpg" alt="" />
                        </div>
                        <div className="about-chef">
                            <h1>Andre Siero</h1>
                             <h6>Chef</h6>
                             <p>Phasellus aliquam libero a nisi varius, vitae placerat sem aliquet. Ut at velit nec ipsum iaculis posuere quis in sapien</p>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutUs