import React, { useEffect, useState, useRef } from 'react';
import profileImg from '../assets/profile.png';

// Custom component to handle the counting animation smoothly
const AnimatedCounter = ({ endValue, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    let start = 1;
    const end = parseInt(endValue, 10);
    if (start === end) return;

    let totalMiliseconds = duration;
    let incrementTime = Math.max(Math.floor(totalMiliseconds / end), 30);
    
    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [endValue, duration]);

  return <>{suffix === "+" ? `${count}+` : `${count}${suffix}`}</>;
};

export const HomePage = ({ currentPage, setCurrentPage }) => {
  const [animate, setAnimate] = useState(false);
  const targetRef = useRef(null);
  
  useEffect(() => {
    document.title = "Majesca Maclan | Homepage";

    const currentTarget = targetRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true); 
          if (currentTarget) observer.unobserve(currentTarget);
        }
      },
      { threshold: 0.4 }
    );

    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) observer.disconnect();
    };
  }, []);
  
  return (
    <>
      <main className="flex-shrink-0 bg-light">

        {/* JUMBOTRON HEADER */}
        <header className="py-5 bg-gradient-primary-to-secondary">
          <div className="homepage container px-5 pb-5">
            <div className="row gx-5 align-items-center">
              <div className="col-xxl-5">
                <div className="text-center text-xxl-start">
                  <div className="badge bg-gradient-primary-to-secondary2 text-white mb-4">
                    <div className="text-uppercase">
                      Sales &middot; & &middot; Marketing
                    </div>
                  </div>
                  <div className="fs-3 fw-light text-white opacity-75">
                    I can help your business to
                  </div>
                  <h1 className="display-3 fw-bolder mb-5">
                    <span className="text-white">
                      Drive predictable revenue and market expansion
                    </span>
                  </h1>
                  <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
                    <a className="btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder" onClick={() => setCurrentPage("resumepage")}>
                      Resume
                    </a>
                    <a className="btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder" onClick={() => setCurrentPage("contactpage")}>
                      Contact
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xxl-7">
                <div className="d-flex justify-content-center mt-5 mt-xxl-0">
                  <div className="profile bg-gradient-primary-to-secondary2">
                    <img className="profile-img" src={profileImg} alt="Majesca Maclan" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* METRICS COUNTER GRID */}
        <div className="container px-5 mt-5">
          <div className="text-center mb-4">
          <h2 className="display-5 fw-bolder">
            <span className="text-gradient d-inline">
              Some of my numbers
            </span>
          </h2>
          </div>
          <div className="row text-center bg-white p-4 rounded shadow-sm border">
            <div className="col-md-4 py-3">
              <h2 className="display-4 fw-bold" style={{ color: '#722f37' }}>
                <AnimatedCounter endValue="45" suffix="%" />
              </h2>
              <p className="text-muted text-uppercase small mb-0 fw-semibold">Revenue Growth Achieved</p>
            </div>
            <div className="col-md-4 py-3 border-start border-end">
              <h2 className="display-4 fw-bold" style={{ color: '#722f37' }}>
                £2.5M+
              </h2>
              <p className="text-muted text-uppercase small mb-0 fw-semibold">Annual Budget Managed</p>
            </div>
            <div className="col-md-4 py-3">
              <h2 className="display-4 fw-bold" style={{ color: '#722f37' }}>
                <AnimatedCounter endValue="15" suffix=" years" />
              </h2>
              <p className="text-muted text-uppercase small mb-0 fw-semibold">Luxury Hospitality Experience</p>
            </div>
          </div>
        </div>

        {/* ABOUT ME SECTION */}
        <section ref={targetRef}>
          <div className="container under-jumbotron px-5 my-5">
            <div className="row gx-5 justify-content-center">
              <div className="col-xxl-12">
                <div className="text-center my-5">
                  <h2 className="display-5 fw-bolder">
                    <span className="text-gradient d-inline">
                      About Me
                    </span>
                  </h2>
                  <p className={`lead fw-light mb-4 ${animate ? 'animate-typing' : ''}`}>
                    My name is Majesca Maclan and I build high-performing growth strategies.
                  </p>
                  <p className="text-muted px-lg-5">
                    Rising from an event clerk to director of sales and marketing, I seamlessly lead sales and marketing teams.
                    I personally engage clients and manage diverse vendors from premium catering to sound and lighting technicians—delivering top-tier results with elegance, professionalism, and genuine kindness.
                  </p>
                  <div className="d-flex justify-content-evenly fs-2 gap-4 mt-4">
                    <a className="text-gradient" href="mailto:majesca.maclan@gmail.com">
                      <i className="bi bi-at"></i>
                    </a>
                    <a className="text-gradient" href="https://www.linkedin.com/in/majesca-m-6a9050165/" target="_blank" rel="noreferrer">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
      </main>
    </>
  );
};