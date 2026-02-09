import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Trainers from "./sections/Trainers";
import Layouts from "./containers/Layouts";
import Hero from "./sections/Hero";
import Stats from "./sections/Stats";
import Schedule from "./sections/Schedule";
import Achivements from "./sections/Achivements";
import Founder from "./sections/Founder";
import Activities from "./sections/Activities";

export default function Home() {
  
  return (
    <>
    <Layouts>


      <div>
        

        
        {/* Hero Section */}
       <Hero/>
        {/* Stats Section */}
       <Stats/>
       {/* founder */}
        <Founder/>
        {/* Programs Section */}
        <Activities/>
        {/* Achivements Section */}
        <Achivements/>
        {/* Trainers Section */}
        <Trainers/> 
        {/* Schedule Section */}
            <Schedule/>
        {/* Testimonials Section */}  
        <section className="testimonials" id="testimonials">
          <div className="container">
            <div className="section-title">
              <h2>Student Testimonials</h2>
              <p>See what our students have to say about their experience</p>
            </div>
            <div className="testimonials-container">
              <div className="testimonial-slider" id="testimonial-slider">
                {/* Testimonials will be loaded by JavaScript */}
              </div>
              <div className="slider-controls" id="slider-controls">
                {/* Slider dots will be added by JavaScript */}
              </div>
            </div>
          </div>
        </section>
        {/* Admin Panel (Hidden by default) */}

        {/* Footer */}
        
      </div>

    </Layouts>
    </>

  )
}