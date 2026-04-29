import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useParams } from "react-router-dom";
import Rating from "../components/ui/Rating";
import Price from "../components/ui/Price";

const Bookinfo = ({ books }) => {
   const { id } = useParams();
   const book = books.find(book => +book.id == +id);
   console.log(book);
   
   
  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="books__selected--top">
              <Link to="/books" className="books__link">
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to="/books" className="book__link">
                <h2 className="book__selected--title--top">Books</h2>
              </Link>
            </div>
            <div className="book__selected">
              <figure className="book__selected--figure">
                <img
                  src="https://m.media-amazon.com/images/I/61mIq2iJUXL._AC_UF1000,1000_QL80_.jpg"
                  alt=""
                  className="book__selected--img"
                />
              </figure>
              <div className="book__selected--description">
                <h2 className="book__selected--title">
                  Crack the coding Interview
                </h2>
                <Rating rating="4.5" />
                <div className="book__selected--price">
                  <Price originalPrice={50} salePrice={20} />
                </div>
                <div className="book__summary">
                  <div className="book_summary--title">
                    Summary
                    </div>
                    <p className="book__summary__para">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Eveniet, odit aperiam vitae impedit adipisci recusandae 
                         nesciunt ea molestiae beatae nihil debitis quo officia 
                         harum maiores. Non maxime fugiat accusamus molestias?
                    </p>
                    <p className="book__summary__para">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Eveniet, odit aperiam vitae impedit adipisci recusandae 
                         nesciunt ea molestiae beatae nihil debitis quo officia 
                         harum maiores. Non maxime fugiat accusamus molestias?
                    </p>
                </div>
                <button className="btn">
                    Add to Cart

                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="books__container">
            <div className="row">
                <div className="book__selected--top">
                    <h2 className="books__selected--title">
                        Recommended Books
                    </h2>
                </div>

            </div>
        </div>
      </main>
    </div>
  );
};

export default Bookinfo;
