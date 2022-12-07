import { useState } from 'react'
import CartItem from './CartItem'
import CartSave from "./CartSave";


const Cart = () => {

    let cartValue = [
        {
            id: 1,
            title: "HP Ryzen 5 Hexa Core 5500U",
            img: "https://rukminim1.flixcart.com/image/416/416/xif0q/computer/5/6/i/-original-imaggshd5zgfe8ev.jpeg?q=70",
            price: "77000",
        },
        {
            id: 2,
            title: "ThinkBook 14 Gen 2 (14, Intel)",
            img: "https://www.lenovo.com/medias/ThinkBook-14-Gen-2-Intel-hero.png?context=bWFzdGVyfHJvb3R8NjYwMDh8aW1hZ2UvcG5nfGg2NC9oZjYvMTMwMzMyMzY0NjM2NDYucG5nfDdlZWU5OGJlYzllYWI0OTM2NDcyMjMwYzA4ZmY3OWRjZDFkNTI4NjgxNWJhOGRmNmZlYTE3OWUzODhmOWQyZjM",
            price: "6000",
        },
        {
            id: 3,

            title: "Yoga Slim 7 Carbon Gen 6 (14, AMD)",
            img: "https://www.lenovo.com/medias/lenovo-laptop-yoga-slim-7-carbon-gen-6-14-intel-subseries-hero.png?context=bWFzdGVyfHJvb3R8MjIxNTIyfGltYWdlL3BuZ3xoYTgvaDQ5LzE0MTkyNDM0Njc1NzQyLnBuZ3w1YzdiNzFlYjBiYWY0YmZlN2Q2MzhkZmViZDdkZTE2NGM0NWU4YTgyZjY5NWI3MDgyNDJlNjE3ZTNhY2ZmMmZh",
            price: "119990",
        },
    ];

    let [addCart, setCart] = useState([])
    let [total, setTotal] = useState(0)


    let addToCart = (item) => {

        setCart([...addCart, item])
        setTotal(total + parseInt(item.price))

    }

    let removeCart = (product) => {

        let itemcart = addCart.findIndex((item) => {
            return product.id == item.id
        })

        console.log(itemcart);
        addCart.splice(itemcart, 1)
        setCart([...addCart])
        setTotal(total - parseInt(product.price))

    }
    return (
        <div>

            <div className=" px-4 px-lg-5 mt-5">
                <div className="row ">
                    <div className='col-lg-8 d-flex flex-row align-content-start flex-wrap gap-5 mb-5'>
                        {
                            cartValue.map((Cart, idx) => {
                                return <CartItem key={idx} addCart={addCart} item={Cart} addToCart={addToCart} ></CartItem>
                            })
                        }
                    </div>
                    <div className='col-lg-4'>
                        <div className='col-lg-3 cart  addToCart'>
                            <h1 className='text-center'>Add to Cart</h1>
                            <CartSave addCart={addCart} removeCart={removeCart}></CartSave>
                            <h1 className='py-3'>Total <span>{total}</span></h1>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Cart
