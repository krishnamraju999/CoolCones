import React from 'react'
import { Link } from 'react-router-dom'

const CheckoutPage = () => {
    return (

        <div className="text-center" style={{ height: '570px' }}>
            <img height="400px"  src="https://media0.giphy.com/media/l378nzdF8Y18tsMJG/source.gif" />
            <h2 > " ORDER PLACED SUCCESSFULLY"</h2>
            <Link to='/'>
                <button className="btn btn-dark mt-3 ">GoToHome</button>
            </Link>
        </div>



    )
}

export default CheckoutPage
