import React from 'react'

const CartSave = ({ addCart, removeCart }) => {
    return (
        <div className='cartsave '>
            {
                addCart.map((item, idx) => {
                    return (
                        <div key={idx}>
                            <div className='card-body d-flex justify-content-between cardPrice'>
                                <img src={item.img} className=' w-25' ></img>
                                <h2>price<span><h3>{item.price}</h3></span></h2>
                                <button className='btn btn-danger h-25 mt-4 ' onClick={() => removeCart(item)} >Del</button>
                            </div>
                            <hr />
                        </div>
                    )

                })}
        </div >
    )
}

export default CartSave
    // <div className='card'>


