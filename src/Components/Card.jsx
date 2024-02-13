import { useState } from "react";

const Card = ({ setCartCount, productDetail }) => {
  const [add, setAdd] = useState(false);
  const buttonClick = (value) => {
    setAdd((pre) => !pre);
    setCartCount((pre) => pre + value);
  };
  return (
    <div>
      <div className='col mb-5'>
        <div className='card h-100'>
          <div
            className='badge bg-dark text-white position-absolute'
            style={{ top: "0.5rem", right: "0.5rem" }}
          >
            Sale
          </div>
          <img
            className='card-img-top'
            src='https://dummyimage.com/450x300/dee2e6/6c757d.jpg'
            alt='...'
          ></img>
          <div className='card-body p-4'>
            <div className='text-center'>
              <h5 className='fw-bolder'>{productDetail.productName}</h5>
              <div className='d-flex justify-content-center small text-warning mb-2'>
                <div className='bi-star-fill'></div>
                <div className='bi-star-fill'></div>
                <div className='bi-star-fill'></div>
                <div className='bi-star-fill'></div>
                <div className='bi-star-fill'></div>
              </div>
              {"$" + productDetail.price}
            </div>
          </div>
          <div
            className='card-footer p-4 pt-0 border-top-0 bg-transparent'
            onClick={() => (!add ? buttonClick(1) : buttonClick(-1))}
          >
            <div className='text-center'>
              <a className='btn btn-outline-dark mt-auto'>
                <span>{!add ? "Add to cart" : "Remove from cart"}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
