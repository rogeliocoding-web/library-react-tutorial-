import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Highlights = () => {
  return (
    <section id="highlights">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Why choose <span className="spanpurple">Library</span>?
          </h2>
          <div className="highlight__wrapper">
            <div className="highlight">
              <div className="highlight__img">
                <FontAwesomeIcon icon="bolt" />
              </div>
              <h3 className="hightlight__subtitle">Easy and Quick</h3>
              <p className="hightlight__para">
                Get access to book you purchase online instantly.
              </p>
            </div>
            <div className="highlight">
              <div className="highlight__img">
                <FontAwesomeIcon icon="book-open" />
              </div>
              <h3 className="hightlight__subtitle">10,000 + Books</h3>
              <p className="hightlight__para">
                Library has books in all your favorite categories.
              </p>
            </div>
            <div className="highlight">
              <div className="highlight__img">
                <FontAwesomeIcon icon="tags" />
              </div>
              <h3 className="hightlight__subtitle">Affordable</h3>
              <p className="hightlight__para">
                Get your hands on popular books for as little as $10.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;