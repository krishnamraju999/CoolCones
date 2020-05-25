import React from 'react'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
    return (

        <div className="text-center" >
            <img  height="400px"src="https://media0.giphy.com/media/l378nzdF8Y18tsMJG/source.gif" />
            <div className="text-center">
            <h6 >YOUR CART IS EMPTY</h6>
            <p >"MAKE AN ORDER BRFORE IT MELTS"</p>
            <Link to="/menu"> <button className="btn btn-dark btn-md mb-5">BuyNow</button></Link>
            </div>
        </div>
    )

}

export default EmptyCart
