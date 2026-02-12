import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Trainers from "./sections/Trainers";
import Layouts from "./containers/Layouts";
import Hero from "./sections/Hero";
import Stats from "./sections/Stats";
import Schedule from "./sections/Schedule";
import Achivements from "./sections/Achivements";
import Founder from "./sections/Founder";
import Activities from "./sections/Activities";
import Testimonials from "./sections/Testimonials";

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
        <Testimonials/>
        {/* Admin Panel (Hidden by default) */}

        {/* Footer */}
        
      </div>

    </Layouts>
    </>

  )
}