  // Sample data for programs
        const programsData = [
            {
                id: 1,
                name: "Karate Training",
                description: "Traditional Japanese martial art focusing on strikes, kicks, and blocks. Suitable for all ages.",
                price: "₹1,200/month",
                features: ["Beginner to Advanced", "Age 6+", "Belt System", "Self-Defense"],
                image: "karate"
            },
            {
                id: 2,
                name: "Kickboxing",
                description: "High-intensity workout combining martial arts techniques with cardiovascular exercise.",
                price: "₹1,500/month",
                features: ["Cardio Focus", "Age 12+", "Weight Loss", "Competition Training"],
                image: "kickboxing"
            },
            {
                id: 3,
                name: "Self Defense",
                description: "Practical techniques to protect yourself in real-world situations. For men and women.",
                price: "₹1,000/month",
                features: ["Women's Classes", "Real-World Scenarios", "Age 16+", "Quick Learning"],
                image: "selfdefense"
            },
            {
                id: 4,
                name: "Kids Martial Arts",
                description: "Fun and engaging martial arts classes designed specifically for children.",
                price: "₹900/month",
                features: ["Age 4-12", "Discipline Focus", "Fun Activities", "Bully Prevention"],
                image: "kids"
            },
            {
                id: 5,
                name: "Advanced Combat",
                description: "For experienced practitioners looking to take their skills to the next level.",
                price: "₹2,000/month",
                features: ["Sparring Sessions", "Competition Prep", "Weapons Training", "Age 18+"],
                image: "advanced"
            },
            {
                id: 6,
                name: "Online Training",
                description: "Virtual martial arts classes from the comfort of your home.",
                price: "₹800/month",
                features: ["Live Sessions", "Recorded Classes", "All Levels", "Flexible Timing"],
                image: "online"
            }
        ];

        // Sample testimonials
        const testimonialsData = [
            {
                id: 1,
                text: "I joined Ayodhana Fighters Academy a few months ago, and it's been one of the best decisions I've made. The instructors are highly skilled, patient, and motivating.",
                author: "A B I Z Z",
                rating: 5
            },
            {
                id: 2,
                text: "Fantastic fighting class atmosphere and a good coach. My son has gained so much confidence since joining.",
                author: "Srilakshmi Sukumaran",
                rating: 5
            },
            {
                id: 3,
                text: "Enrolling in this martial arts academy has been a transformative experience. The instructor AKHIL MASTER is highly skilled and incredibly passionate about teaching.",
                author: "Anil Babu",
                rating: 5
            },
            {
                id: 4,
                text: "The best martial arts academy in Thrissur. Professional trainers and well-maintained facility. Highly recommended!",
                author: "Rahul Nair",
                rating: 5
            },
            {
                id: 5,
                text: "Excellent training for self-defense. The women's self-defense classes have given me so much confidence. Thank you Ayodhana Fighters!",
                author: "Priya Menon",
                rating: 5
            },
            {
                id: 6,
                text: "My kids love the classes! They've learned discipline and respect while having fun. The instructors are amazing with children.",
                author: "Sunitha Raj",
                rating: 5
            }
        ];

        // DOM Elements
        const header = document.getElementById('header');
        const mobileToggle = document.getElementById('mobile-toggle');
        const navMenu = document.getElementById('nav-menu');
        const loginLink = document.getElementById('login-link');
        const adminLoginLink = document.getElementById('admin-login-link');
        const loginModal = document.getElementById('login-modal');
        const loginForm = document.getElementById('login-form');
        const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');
        const loginStep1 = document.getElementById('login-step-1');
        const loginStep2 = document.getElementById('login-step-2');
        const otpInputs = document.querySelectorAll('.otp-input');
        const verifyOtpBtn = document.getElementById('verify-otp-btn');
        const resendOtpLink = document.getElementById('resend-otp');
        const backToLoginLink = document.getElementById('back-to-login');
        const logoutBtn = document.getElementById('logout-btn');
        const adminPanel = document.getElementById('admin');
        const programsContainer = document.getElementById('programs-container');
        const testimonialSlider = document.getElementById('testimonial-slider');
        const sliderControls = document.getElementById('slider-controls');
        const adminProgramList = document.getElementById('admin-program-list');
        const addProgramForm = document.getElementById('add-program-form');
        const adminTabs = document.querySelectorAll('.admin-tab');
        const adminSections = document.querySelectorAll('.admin-section');
        const totalRevenueElement = document.getElementById('total-revenue');

        // Authentication state
        let isAuthenticated = false;
        let otpCode = '123456'; // Demo OTP

        // Initialize the page
        document.addEventListener('DOMContentLoaded', function() {
            // Load programs
            renderPrograms();
            
            // Load testimonials
            renderTestimonials();
            
            // Load admin programs
            renderAdminPrograms();
            
            // Calculate total revenue
            calculateTotalRevenue();
            
            // Initialize counters
            initializeCounters();
            
            // Initialize scroll animations
            initializeScrollAnimations();
            
            // Set up event listeners
            setupEventListeners();
            
            // Check if user is already logged in
            checkAuthStatus();
        });

        // Check authentication status from localStorage
        function checkAuthStatus() {
            const auth = localStorage.getItem('ayodhana_admin_auth');
            if (auth === 'true') {
                isAuthenticated = true;
                adminPanel.classList.add('active');
                // Scroll to admin panel if it's in the URL hash
                if (window.location.hash === '#admin') {
                    setTimeout(() => {
                        window.scrollTo({
                            top: adminPanel.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }, 300);
                }
            }
        }

        // Render programs on the page
        function renderPrograms() {
            programsContainer.innerHTML = '';
            
            programsData.forEach(program => {
                const programCard = document.createElement('div');
                programCard.className = 'program-card';
                
                // Image URLs from Unsplash based on program type
                const imageUrls = {
                    karate: 'https://images.unsplash.com/photo-1656653121475-e33829581294?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2FyYXRlfGVufDB8fDB8fHww',
                    kickboxing: 'https://images.unsplash.com/photo-1486215397028-cb4f31efea3e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2lja2JveGluZ3xlbnwwfHwwfHx8MA%3D%3D',
                    selfdefense: 'https://plus.unsplash.com/premium_photo-1682434699813-f44b49a2ea87?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFydGlhbCUyMGFydHxlbnwwfHwwfHx8MA%3D%3D',
                    kids: 'https://plus.unsplash.com/premium_photo-1663013066703-d00f8538b642?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8S2lkcyUyME1hcnRpYWwlMjBBcnRzfGVufDB8fDB8fHww',
                    advanced: 'https://images.unsplash.com/photo-1560631820-9e677e8ba3af?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QWR2YW5jZWQlMjBDb21iYXQlMjBtYXJ0aWFsJTIwYXJ0c3xlbnwwfHwwfHx8MA%3D%3D',
                    online: 'https://cdn.thecoolist.com/wp-content/uploads/2022/01/Types-of-Martial-Arts.png'
                };
                
                const featuresList = program.features.map(feature => 
                    `<li><i class="fas fa-check"></i> ${feature}</li>`
                ).join('');
                
                programCard.innerHTML = `
                    <div class="program-img">
                        <img src="${imageUrls[program.image] || imageUrls.karate}" alt="${program.name}">
                    </div>
                    <div class="program-content">
                        <h3>${program.name}</h3>
                        <p>${program.description}</p>
                        <div class="program-price">${program.price}</div>
                        <ul class="program-features">
                            ${featuresList}
                        </ul>
                        <a href="#contact" class="program-button">Enroll Now</a>
                    </div>
                `;
                
                programsContainer.appendChild(programCard);
            });
            
            // Add scroll animation trigger
            setTimeout(() => {
                const programCards = document.querySelectorAll('.program-card');
                programCards.forEach(card => {
                    card.classList.add('visible');
                });
            }, 300);
        }

        // Render testimonials
        function renderTestimonials() {
            testimonialSlider.innerHTML = '';
            sliderControls.innerHTML = '';
            
            testimonialsData.forEach((testimonial, index) => {
                const slide = document.createElement('div');
                slide.className = `testimonial-slide ${index === 0 ? 'active' : ''}`;
                slide.innerHTML = `
                    <div class="testimonial-text">"${testimonial.text}"</div>
                    <div class="testimonial-author">
                        <div class="author-avatar">
                            <i class="fas fa-user"></i>
                        </div>
                        <div class="author-info">
                            <h4>${testimonial.author}</h4>
                            <p>${'★'.repeat(testimonial.rating)}</p>
                        </div>
                    </div>
                `;
                testimonialSlider.appendChild(slide);
                
                // Create slider dots
                const dot = document.createElement('div');
                dot.className = `slider-dot ${index === 0 ? 'active' : ''}`;
                dot.dataset.index = index;
                dot.addEventListener('click', () => {
                    showTestimonial(index);
                });
                sliderControls.appendChild(dot);
            });
            
            // Auto rotate testimonials
            setInterval(() => {
                const currentIndex = Array.from(document.querySelectorAll('.testimonial-slide')).findIndex(slide => 
                    slide.classList.contains('active')
                );
                const nextIndex = (currentIndex + 1) % testimonialsData.length;
                showTestimonial(nextIndex);
            }, 5000);
        }

        // Show specific testimonial
        function showTestimonial(index) {
            const slides = document.querySelectorAll('.testimonial-slide');
            const dots = document.querySelectorAll('.slider-dot');
            
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            
            slides[index].classList.add('active');
            dots[index].classList.add('active');
        }

        // Render admin programs
        function renderAdminPrograms() {
            adminProgramList.innerHTML = '';
            
            if (programsData.length === 0) {
                adminProgramList.innerHTML = '<p style="color: var(--gray); text-align: center; grid-column: 1 / -1; padding: 40px;">No programs found. Add your first program!</p>';
                return;
            }
            
            programsData.forEach(program => {
                const programItem = document.createElement('div');
                programItem.className = 'program-list-item';
                programItem.innerHTML = `
                    <h4>${program.name}</h4>
                    <p>${program.description}</p>
                    <p class="price">${program.price}</p>
                    <div class="admin-actions">
                        <button class="btn btn-primary edit-btn" data-id="${program.id}">Edit</button>
                        <button class="btn btn-danger delete-btn" data-id="${program.id}">Delete</button>
                    </div>
                `;
                adminProgramList.appendChild(programItem);
            });
            
            // Add event listeners to edit/delete buttons
            document.querySelectorAll('.edit-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const programId = parseInt(this.dataset.id);
                    editProgram(programId);
                });
            });
            
            document.querySelectorAll('.delete-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const programId = parseInt(this.dataset.id);
                    deleteProgram(programId);
                });
            });
        }

        // Calculate total monthly revenue
        function calculateTotalRevenue() {
            let totalPerProgram = 0;
            
            programsData.forEach(program => {
                // Extract numeric value from price string
                const priceMatch = program.price.match(/₹([\d,]+)/);
                if (priceMatch) {
                    const price = parseInt(priceMatch[1].replace(/,/g, ''));
                    totalPerProgram += price;
                }
            });
            
            // Calculate average revenue per program
            const avgProgramPrice = totalPerProgram / programsData.length;
            
            // Assuming 15 students per program on average
            const estimatedStudentsPerProgram = 15;
            const estimatedRevenue = Math.round(avgProgramPrice * programsData.length * estimatedStudentsPerProgram);
            
            totalRevenueElement.innerHTML = `
                <strong>₹${estimatedRevenue.toLocaleString('en-IN')}/month</strong>
                <p class="small-text">Estimated based on ${estimatedStudentsPerProgram} students per program</p>
            `;
        }

        // Initialize counter animations
        function initializeCounters() {
            const stats = {
                stat1: 206, // 5-star reviews
                stat2: 850, // students trained
                stat3: 8,   // years experience
                stat4: 28   // classes weekly
            };
            
            Object.keys(stats).forEach(statId => {
                const element = document.getElementById(statId);
                const target = stats[statId];
                const duration = 2000; // 2 seconds
                const step = target / (duration / 16); // 60fps
                let current = 0;
                
                const updateCounter = () => {
                    current += step;
                    if (current < target) {
                        element.textContent = Math.floor(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        element.textContent = target;
                    }
                };
                
                // Start counter when element is in viewport
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            updateCounter();
                            observer.unobserve(entry.target);
                        }
                    });
                });
                
                observer.observe(element);
            });
        }

        // Initialize scroll animations for program cards
        function initializeScrollAnimations() {
            const programCards = document.querySelectorAll('.program-card');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, { threshold: 0.1 });
            
            programCards.forEach(card => {
                observer.observe(card);
            });
        }

        // Edit program function
        function editProgram(programId) {
            const program = programsData.find(p => p.id === programId);
            if (program) {
                // Switch to add program tab with pre-filled data
                document.querySelectorAll('.admin-tab').forEach(tab => tab.classList.remove('active'));
                document.querySelectorAll('.admin-section').forEach(section => section.classList.remove('active'));
                
                document.querySelector('[data-tab="add-program-tab"]').classList.add('active');
                document.getElementById('add-program-tab').classList.add('active');
                
                // Pre-fill form
                document.getElementById('program-name').value = program.name;
                document.getElementById('program-description').value = program.description;
                document.getElementById('program-price').value = parseInt(program.price.replace(/[^0-9]/g, ''));
                document.getElementById('program-features').value = program.features.join(', ');
                
                alert(`Editing program: ${program.name}. In a full implementation, this would allow you to update the program.`);
            }
        }

        // Delete program function
        function deleteProgram(programId) {
            const program = programsData.find(p => p.id === programId);
            if (program && confirm(`Are you sure you want to delete "${program.name}"?`)) {
                // In a real app, you would send a request to the server
                alert(`Program "${program.name}" deleted. In a full implementation, this would remove it from the database.`);
                
                // Remove from array
                const index = programsData.findIndex(p => p.id === programId);
                programsData.splice(index, 1);
                
                // Refresh the lists
                renderPrograms();
                renderAdminPrograms();
                calculateTotalRevenue();
            }
        }

        // Handle login
        function handleLogin(username, password) {
            // Demo credentials - in a real app, this would check against a database
            if (username === 'admin' && password === 'admin123') {
                // Show OTP step
                loginStep1.classList.remove('active');
                loginStep2.classList.add('active');
                
                // Focus first OTP input
                otpInputs[0].focus();
                return true;
            } else {
                alert('Invalid username or password. Use: admin / admin123');
                return false;
            }
        }

        // Handle OTP verification
        function handleOtpVerification() {
            let enteredOtp = '';
            otpInputs.forEach(input => {
                enteredOtp += input.value;
            });
            
            if (enteredOtp === otpCode) {
                // Successful authentication
                isAuthenticated = true;
                localStorage.setItem('ayodhana_admin_auth', 'true');
                loginModal.classList.remove('active');
                adminPanel.classList.add('active');
                
                // Reset OTP inputs
                otpInputs.forEach(input => input.value = '');
                
                // Scroll to admin panel
                setTimeout(() => {
                    window.scrollTo({
                        top: adminPanel.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }, 300);
                
                return true;
            } else {
                alert('Invalid OTP. Use: 123456');
                return false;
            }
        }

        // Handle logout
        function handleLogout() {
            isAuthenticated = false;
            localStorage.removeItem('ayodhana_admin_auth');
            adminPanel.classList.remove('active');
            
            // Reset login modal
            loginStep2.classList.remove('active');
            loginStep1.classList.add('active');
            usernameInput.value = '';
            passwordInput.value = '';
            otpInputs.forEach(input => input.value = '');
            
            alert('Successfully logged out.');
        }

        // Set up event listeners
        function setupEventListeners() {
            // Header scroll effect
            window.addEventListener('scroll', function() {
                if (window.scrollY > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });

            // Mobile menu toggle
            mobileToggle.addEventListener('click', function() {
                navMenu.classList.toggle('active');
                this.innerHTML = navMenu.classList.contains('active') ? 
                    '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
            });

            // Close mobile menu when clicking a link
            document.querySelectorAll('.nav-menu a').forEach(link => {
                link.addEventListener('click', function() {
                    navMenu.classList.remove('active');
                    mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
                });
            });

            // Show login modal
            loginLink.addEventListener('click', function(e) {
                e.preventDefault();
                loginModal.classList.add('active');
            });
            
            // Show login modal from footer link
            adminLoginLink.addEventListener('click', function(e) {
                e.preventDefault();
                loginModal.classList.add('active');
            });

            // Close login modal when clicking outside
            loginModal.addEventListener('click', function(e) {
                if (e.target === this) {
                    this.classList.remove('active');
                    // Reset to step 1
                    loginStep2.classList.remove('active');
                    loginStep1.classList.add('active');
                    usernameInput.value = '';
                    passwordInput.value = '';
                    otpInputs.forEach(input => input.value = '');
                }
            });

            // Login form submission
            loginForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const username = usernameInput.value.trim();
                const password = passwordInput.value.trim();
                
                if (username && password) {
                    handleLogin(username, password);
                }
            });

            // OTP input navigation
            otpInputs.forEach((input, index) => {
                input.addEventListener('input', function() {
                    // Move to next input if current is filled
                    if (this.value.length === 1 && index < otpInputs.length - 1) {
                        otpInputs[index + 1].focus();
                    }
                    
                    // Auto submit if all inputs are filled
                    const allFilled = Array.from(otpInputs).every(input => input.value.length === 1);
                    if (allFilled) {
                        verifyOtpBtn.click();
                    }
                });
                
                input.addEventListener('keydown', function(e) {
                    // Move to previous input on backspace if current is empty
                    if (e.key === 'Backspace' && this.value.length === 0 && index > 0) {
                        otpInputs[index - 1].focus();
                    }
                });
            });

            // Verify OTP button
            verifyOtpBtn.addEventListener('click', function() {
                handleOtpVerification();
            });

            // Resend OTP link
            resendOtpLink.addEventListener('click', function(e) {
                e.preventDefault();
                otpCode = Math.floor(100000 + Math.random() * 900000).toString();
                alert(`New OTP sent: ${otpCode}`);
            });

            // Back to login link
            backToLoginLink.addEventListener('click', function(e) {
                e.preventDefault();
                loginStep2.classList.remove('active');
                loginStep1.classList.add('active');
            });

            // Logout button
            logoutBtn.addEventListener('click', function() {
                handleLogout();
            });

            // Admin tab switching
            adminTabs.forEach(tab => {
                tab.addEventListener('click', function() {
                    const tabId = this.dataset.tab;
                    
                    // Update active tab
                    adminTabs.forEach(t => t.classList.remove('active'));
                    this.classList.add('active');
                    
                    // Show corresponding section
                    adminSections.forEach(section => {
                        section.classList.remove('active');
                        if (section.id === tabId) {
                            section.classList.add('active');
                        }
                    });
                });
            });

            // Add program form submission
            addProgramForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const name = document.getElementById('program-name').value;
                const description = document.getElementById('program-description').value;
                const price = document.getElementById('program-price').value;
                const features = document.getElementById('program-features').value.split(',').map(f => f.trim());
                
                // Validate inputs
                if (!name || !description || !price) {
                    alert("Please fill in all required fields.");
                    return;
                }
                
                // Create new program object
                const newProgram = {
                    id: programsData.length + 1,
                    name: name,
                    description: description,
                    price: `₹${price}/month`,
                    features: features.length > 0 ? features : ["All Levels", "Certified Training", "Flexible Timing"],
                    image: 'karate' // Default image
                };
                
                // Add to programs array
                programsData.push(newProgram);
                
                // Refresh displays
                renderPrograms();
                renderAdminPrograms();
                calculateTotalRevenue();
                
                // Reset form
                addProgramForm.reset();
                
                // Show success message
                alert(`Program "${name}" added successfully!`);
                
                // Switch back to programs tab
                document.querySelectorAll('.admin-tab').forEach(tab => tab.classList.remove('active'));
                document.querySelectorAll('.admin-section').forEach(section => section.classList.remove('active'));
                
                document.querySelector('[data-tab="programs-tab"]').classList.add('active');
                document.getElementById('programs-tab').classList.add('active');
            });

            // Smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    // Don't prevent default for admin login
                    if (this.id === 'login-link' || this.id === 'admin-login-link') {
                        return;
                    }
                    
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                });
            });
        }