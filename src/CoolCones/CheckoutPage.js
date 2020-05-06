import React from 'react'
import { Link } from 'react-router-dom'

const CheckoutPage = () => {
    return (
        <div className="text-center" style={{height:'570px'}}>
            <div class="row">
                <div className="col-7 mt-5">
                    <img height="400px" src="https://i.dlpng.com/static/png/1648122-ice-cream-transparent-background-png-ice-cream-png-background-icecream-png-800_446_preview.png" />
                </div>
                <div className="col-5  mt-5">
                    <h2 className="p-5 "  >
                        " ORDER PLACED SUCCESSFULLY"</h2>
                    <Link to='/'>
                        <button className="btn btn-dark mt-1 ">GoToHome</button>
                    </Link>
                </div></div>

        </div>
    )
}

export default CheckoutPage
