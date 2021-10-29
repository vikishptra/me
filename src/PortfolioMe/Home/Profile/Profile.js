import React from 'react';
import Typical from 'react-typical';
import './Profile.css';
export default function profile(){
    return  (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/viki.sahputra.3">
                <i className="fa fa-facebook-square"/>
              </a>
              <a href="https://www.linkedin.com/in/vickysahputra">
                <i className="fa fa-linkedin"/>
              </a>
              <a href="https://www.instagram.com/vikishptra/">
                <i className="fa fa-instagram" />
              </a>
              <a href="https://twitter.com/Shnooki/">
                <i className="fa fa-twitter" />
              </a>
              </div>
          </div>
        <div className="profile-details-name">
            <span className="primary-text">
            {" "}
            Hello, I'M <span className="highlighted-text">Vicky Sahputra</span>
            </span>
         </div>
          <div className="profile-details-role">
              <span className="primary-text">
                {" "}
                <h1>
                    {" "}
                    <Typical
                    loop={Infinity}
                    steps={[
                        "Enthusiastic Hacking 🕴️",
                        1000,
                        " Junior Developer 💻 ",
                        1000,
                        "UI/UX DESIGNER 🧑‍💻 ",
                        1000,
                    ]}
                    />
                </h1>
                <span className="profile-role-tagline">Keahlian membangun aplikasi dan menjaga keamanan sistem aplikasi.
                </span>
              </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">
            {""}
            Hire Me{" "}
            </button>
            <a href="Vicky Sahputra CV  (1).pdf" download="Vicky Sahputra CV  (1).pdf">
                <button className='btn highlighted-btn'>Get CV</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background">
          </div>
        </div>
      </div>
    </div>
        
  );
}