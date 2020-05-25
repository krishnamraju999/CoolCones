import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../CartContext'


const Scoops = () => {
    const {
        state: { Scoops },
        sitem,
        addsitem
    } = useContext(CartContext);
    return (
        <>
            <div className="container mt-4" style={{ border: '1px solid #151617' }}>
                <div className="row">
                    {Scoops.map(({ name, id, image, price, weight, incart }, index) => (
                        <div className="col-3 mt-2 mb-3">
                            <div className="card w-100" style={{ height: '340px' }}>
                            <Link to='/menu/itemdetails'> <img  onClick={() => sitem(index)} src={image} height="200px" class="card-img-top " /></Link>
                                <div className="card-body">
                                <Link to='/menu/itemdetails'> <h5  onClick={() => sitem(index)} className="card-title " >{name}</h5></Link>
                                    <div className="d-flex justify-content-between">
                                        <p className="card-text ">{weight}</p>
                                        <p className="card-text "><span class="badge badge-warning">MRP</span> : {price} <span>&#8377;</span></p>
                                    </div>
                                    <button disabled={incart=="true"?true:false} onClick={() => addsitem(index)}className="btn btn-primary btn-sm">BuyNow</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}


export default Scoops
