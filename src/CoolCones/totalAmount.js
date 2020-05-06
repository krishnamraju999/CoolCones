import React, { useContext } from 'react'
import { CartContext } from '../CartContext';
import {Link} from 'react-router-dom'

const TotalAmount = () => {
    const {state:{totalAmount,cart},reset}=useContext(CartContext)
    return (
        <>
            <h5>PRICE DETAILS</h5><hr />
           <div className="d-flex justify-content-between"> <p className="float-left">No Of Items</p><b className="float-right">{cart.length}</b></div>
           <div className="d-flex justify-content-between"> <p className="float-left">Total Amount</p><b className="float-right">{totalAmount}</b></div>
            <Link to="/checkout">
            <button disabled={totalAmount==0?true:false} className="btn btn-primary mt-3"onClick={()=>reset()} >CheckOut</button></Link>
        </>
    )
}
export default TotalAmount;