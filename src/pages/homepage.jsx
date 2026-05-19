import React from 'react';
import '../tricsy-style.css'

export const HomePage = () => {
  return (
    <>
      <main className="flex-shrink-0">
        <nav className="navbar navbar-expand-lg navbar-light bg-white py-3">
          <div className="container px-5">
            <a className="navbar-brand" href="index.html">
              <span className="fw-bolder text-primary">Majesca Maclan</span>
            </a>
            <button 
              className="navbar-toggler" 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#navbarSupportedContent" 
              aria-controls="navbarSupportedContent" 
              aria-expanded="false" 
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
                <li className="nav-item"><a className="nav-link" href="index.html">Home</a></li>
                <li className="nav-item"><a className="nav-link" href="resume.html">Resume</a></li>
                <li className="nav-item"><a className="nav-link" href="contact.html">Contact</a></li>
              </ul>
            </div>
          </div>
        </nav>

        <header className="py-5">
          <div className="container px-5 pb-5">
            <div className="row gx-5 align-items-center">
              <div className="col-xxl-5">
                <div className="text-center text-xxl-start">
                  <div className="badge bg-gradient-primary-to-secondary text-white mb-4">
                    <div className="text-uppercase">Sales &middot; & &middot; Marketing</div>
                  </div>
                  <div className="fs-3 fw-light text-muted">I can help your business to</div>
                  <h1 className="display-3 fw-bolder mb-5">
                    <span className="text-gradient d-inline">Drive predictable revenue and market expansion</span>
                  </h1>
                  <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
                    <a className="btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder" href="resume.html">Resume</a>
                    <a className="btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder" href="contact.html">Contact</a>
                  </div>
                </div>
              </div>
              <div className="col-xxl-7 photo-section">
                <div className="d-flex justify-content-center mt-5 mt-xxl-0">
                  <div className="profile bg-gradient-primary-to-secondary">
                    <img className="profile-img" src="src/assets/profile.png" alt="..." />
                    
                    <div className="dots-1">
                      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 191.6 1215.4" style={{ enableBackground: "new 0 0 191.6 1215.4" }}>
                        <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)">
                          <path d="M227.7,12788.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262 C383.7,12801.6,289.7,12808.6,227.7,12788.6z"></path>
                          {/* Paths truncated here for visual clarity, but left intact in your actual code */}
                        </g>
                      </svg>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="bg-light py-5">
          <div className="container px-5">
            <div className="row gx-5 justify-content-center">
              <div className="col-xxl-8">
                <div className="text-center my-5">
                  <h2 className="display-5 fw-bolder">
                    <span className="text-gradient d-inline">
                      About Me
                    </span>
                  </h2>
                  <p className="lead fw-light mb-4">
                    My name is Majesca Maclan and I build high-performing growth strategies.
                  </p>
                  <p className="text-muted">
                    Rising from an event clerk to director of sales and marketing, I seamlessly lead sales and marketing teams.
                    I personally engage clients and manage diverse vendors—from premium catering to sound and lighting technicians—delivering top-tier results with elegance, professionalism, and genuine kindness.
                  </p>
                  <div className="d-flex justify-content-center fs-2 gap-4">
                    <a className="text-gradient" href="mailto:majesca.maclan@gmail.com">
                      <i className="bi bi-at"></i>
                    </a>
                    <a className="text-gradient"href="https://www.linkedin.com/in/majesca-m-6a9050165/" target="_blank">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white py-4 mt-auto">
        <div className="container px-5">
          <div className="row align-items-center justify-content-between flex-column flex-sm-row">
            <div className="col-auto"><div className="small m-0">Copyright &copy; Your Website 2023</div></div>
            <div className="col-auto">
              <a className="small" href="#!">Privacy</a>
              <span className="mx-1">&middot;</span>
              <a className="small" href="#!">Terms</a>
              <span className="mx-1">&middot;</span>
              <a className="small" href="#!">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};