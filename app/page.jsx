import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Trainers from "./sections/Trainers";

export default function Home() {
  
  return (
    <>

      <div>
        <header id="header">
          <div className="container header-container">
            <div className="logo">
              <div className="logo-text">AYODHANA<span>FIGHTERS</span></div>
            </div>
            <div className="mobile-toggle" id="mobile-toggle">
              <i className="fas fa-bars" />
            </div>
            <ul className="nav-menu" id="nav-menu">
              <li><a href="#home">Home</a></li>
              <li><a href="#programs">Programs</a></li>
              <li><a href="#trainers">Trainers</a></li>
              <li><a href="#schedule">Schedule</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#" id="login-link">Admin Login</a></li>
            </ul>
          </div>
        </header>
        {/* Login Modal */}
        <div className="login-modal" id="login-modal">
          <div className="login-container">
            <div className="login-header">
              <h3><i className="fas fa-user-shield" /> Admin Login</h3>
            </div>
            <div className="login-content">
              {/* Step 1: Username/Password */}
              <div className="login-step active" id="login-step-1">
                <form id="login-form">
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" className="form-control" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" className="form-control" required />
                  </div>
                  <div className="form-group">
                    <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                      Login &amp; Continue
                    </button>
                  </div>
                </form>
                <div className="login-footer">
                  <p>Use default credentials: admin / admin123</p>
                </div>
              </div>
              {/* Step 2: OTP Verification */}
              <div className="login-step" id="login-step-2">
                <div className="form-group">
                  <label>Enter 6-digit OTP sent to your registered email</label>
                  <div className="otp-inputs">
                    <input type="text" className="otp-input" maxLength={1} data-index={0} />
                    <input type="text" className="otp-input" maxLength={1} data-index={1} />
                    <input type="text" className="otp-input" maxLength={1} data-index={2} />
                    <input type="text" className="otp-input" maxLength={1} data-index={3} />
                    <input type="text" className="otp-input" maxLength={1} data-index={4} />
                    <input type="text" className="otp-input" maxLength={1} data-index={5} />
                  </div>
                </div>
                <div className="form-group">
                  <button id="verify-otp-btn" className="btn btn-primary" style={{ width: '100%' }}>
                    Verify OTP
                  </button>
                </div>
                <div className="login-footer">
                  <p>Demo OTP: <strong>123456</strong></p>
                  <p><a href="#" id="resend-otp">Resend OTP</a> | <a href="#" id="back-to-login">Back to Login</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Hero Section */}
        <section className="hero" id="home">
          <div className="container hero-content">
            <h1>AYODHANA <span>MARTIAL ARTS</span> ACADEMY</h1>
            <p>Where passion meets discipline and skill. We offer comprehensive martial arts training including KARATE, KICK BOXING, and SELF DEFENSE for all ages and skill levels.</p>
            <a href="#programs" className="cta-button">Explore Programs</a>
          </div>
        </section>
        {/* Stats Section */}
        <section className="stats">
          <div className="container stats-container">
            <div className="stat-item">
              <div className="stat-number" id="stat1">0</div>
              <div className="stat-text">5-Star Reviews</div>
            </div>
            <div className="stat-item">
              <div className="stat-number" id="stat2">0</div>
              <div className="stat-text">Students Trained</div>
            </div>
            <div className="stat-item">
              <div className="stat-number" id="stat3">0</div>
              <div className="stat-text">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number" id="stat4">0</div>
              <div className="stat-text">Classes Weekly</div>
            </div>
          </div>
        </section>
        {/* Programs Section */}
        <section className="programs" id="programs">
          <div className="container">
            <div className="section-title">
              <h2>Our Programs &amp; Fees</h2>
              <p>Choose the perfect martial arts program for you</p>
            </div>
            <div className="programs-container" id="programs-container">
              {/* Programs will be loaded here by JavaScript */}
            </div>
          </div>
        </section>
        {/* Trainers Section */}
        <Trainers/>
        {/* Schedule Section */}
        <section className="schedule" id="schedule">
          <div className="container">
            <div className="section-title">
              <h2>Class Schedule</h2>
              <p>Plan your training sessions with our weekly timetable</p>
            </div>
            <div className="schedule-container">
              <table className="schedule-table">
                <thead>
                  <tr>
                    <th>Time</th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>4:00 PM - 5:00 PM</td>
                    <td><span className="class-type karate">Kids Karate</span></td>
                    <td><span className="class-type karate">Kids Karate</span></td>
                    <td><span className="class-type karate">Kids Karate</span></td>
                    <td><span className="class-type karate">Kids Karate</span></td>
                    <td><span className="class-type karate">Kids Karate</span></td>
                    <td><span className="class-type karate">Kids Karate</span></td>
                  </tr>
                  <tr>
                    <td>5:00 PM - 6:00 PM</td>
                    <td><span className="class-type karate">Adult Karate</span></td>
                    <td><span className="class-type karate">Adult Karate</span></td>
                    <td><span className="class-type karate">Adult Karate</span></td>
                    <td><span className="class-type karate">Adult Karate</span></td>
                    <td><span className="class-type karate">Adult Karate</span></td>
                    <td><span className="class-type selfdefense">Self Defense</span></td>
                  </tr>
                  <tr>
                    <td>6:00 PM - 7:00 PM</td>
                    <td><span className="class-type kickboxing">Kickboxing</span></td>
                    <td><span className="class-type kickboxing">Kickboxing</span></td>
                    <td><span className="class-type kickboxing">Kickboxing</span></td>
                    <td><span className="class-type kickboxing">Kickboxing</span></td>
                    <td><span className="class-type kickboxing">Kickboxing</span></td>
                    <td><span className="class-type selfdefense">Women's Defense</span></td>
                  </tr>
                  <tr>
                    <td>7:00 PM - 8:00 PM</td>
                    <td><span className="class-type selfdefense">Self Defense</span></td>
                    <td><span className="class-type karate">Advanced Karate</span></td>
                    <td><span className="class-type selfdefense">Self Defense</span></td>
                    <td><span className="class-type karate">Advanced Karate</span></td>
                    <td><span className="class-type selfdefense">Self Defense</span></td>
                    <td>Closed</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
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
        <footer id="contact">
          <div className="container">
            <div className="footer-container">
              <div className="footer-column">
                <h3>Ayodhana Fighters</h3>
                <p>Martial Arts Academy in Thrissur, Kerala. We empower individuals through martial arts training, fostering physical fitness, mental strength, and self-confidence.</p>
                <div className="social-links">
                  <a href="#"><i className="fab fa-facebook-f" /></a>
                  <a href="#"><i className="fab fa-instagram" /></a>
                  <a href="#"><i className="fab fa-youtube" /></a>
                  <a href="#"><i className="fab fa-whatsapp" /></a>
                </div>
              </div>
              <div className="footer-column">
                <h3>Contact Info</h3>
                <div className="contact-info">
                  <i className="fas fa-map-marker-alt" />
                  <div>
                    <p>Thamarayoor Building, Bus stop, near petrol pump</p>
                    <p>Keltron Nagar, Kolazhy, Thrissur, Kerala 680010</p>
                  </div>
                </div>
                <div className="contact-info">
                  <i className="fas fa-phone" />
                  <div>
                    <p>+91 96565 71330</p>
                    <p>+91 94478 21330</p>
                  </div>
                </div>
                <div className="contact-info">
                  <i className="fas fa-envelope" />
                  <div>
                    <p>info@ayodhanafighters.com</p>
                    <p>akhil@ayodhanafighters.com</p>
                  </div>
                </div>
                <div className="contact-info">
                  <i className="fas fa-clock" />
                  <div>
                    <p>Monday-Friday: 4 PM - 8 PM</p>
                    <p>Saturday: 4 PM - 7 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
              <div className="footer-column">
                <h3>Quick Links</h3>
                <ul className="footer-links">
                  <li><a href="#home">Home</a></li>
                  <li><a href="#programs">Programs &amp; Fees</a></li>
                  <li><a href="#trainers">Trainers</a></li>
                  <li><a href="#schedule">Schedule</a></li>
                  <li><a href="#testimonials">Testimonials</a></li>
                  <li><a href="#" id="admin-login-link">Admin Login</a></li>
                </ul>
              </div>
            </div>
            <div className="copyright">
              <p>© 2023 Ayodhana Fighters Martial Arts Academy. All Rights Reserved.</p>
              <p>Website developed for $200 with premium animations and admin panel.</p>
            </div>
          </div>
        </footer>
      </div>

    </>

  )
}