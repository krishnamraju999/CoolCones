import React from 'react'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
    return (
        <div class="row">
            <div className="col-7">
                <img src="https://media0.giphy.com/media/l378nzdF8Y18tsMJG/source.gif" />
            </div>
            <div className="col-5 text-center my-auto" >
                <h6>YOUR CART IS EMPTY</h6>
                <p style={{fontFamily:'cursive'}}>"MAKE AN ORDER BRFORE IT MELTS"</p>
                <Link to="/menu"> <button className="btn btn-dark btn-md">BuyNow</button></Link>
            </div>
        </div>

            
    )
}

export default EmptyCart
