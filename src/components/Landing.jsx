import React from 'react';
import UndrawBooks from "../assets/Undraw_Books.svg";

const Landing = () => {
  return (
    <section div="landing">
      <header>
        <div className="landing__content">
          <div className="header__description">
            <h1>Mexico's Most Awarded Library</h1>
            <h2>
              Find your dream books with <span className="purple">Library</span>
            </h2>
            <a href="#features">
              <button className="btn">Browse Books</button>
            </a>
          </div>
          <figure className="header__image--wrapper">
            <img src={UndrawBooks} alt="" />
          </figure>
        </div>
      </header>
    </section>
  );
};

export default Landing;
