import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
// import FontAwesomeIcon from './'

const CartItem = ({ item, addToCart, addCart }) => {
    return (


        <div className="col col-lg-3 mb-5 cart-item">
            <div className="card h-100">
                <div className="badge bg-dark text-white position-absolute" >Sale</div>
                <div className='img-box'>
                    <img className=" images img-fluid" src={item.img} alt="..." />
                </div>
                <div className="card-body ">
                    <div className="text-center">
                        <h5 className="fw-bolder">{item.title}</h5>
                        <div className="d-flex justify-content-center small text-warning mb-2">
                            {/* <div><FontAwesomeIcon icon="fa-solid fa-star" /> </div> */}
                            <div className="">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStarHalf} />
                            </div>
                        </div>
                        <b>{item.price}</b>
                    </div>
                </div>

                <div className=" text-center mb-3 ">
                    <button disabled={addCart.some(val => val.id === item.id)} className="text-center btn btn-outline-dark "
                        onClick={() => {
                            addToCart(item)
                            // console.log(item);
                        }}
                    >Add to cart</button>
                </div>
            </div>

        </div>




    )
}

export default CartItem
