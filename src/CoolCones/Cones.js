import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../CartContext'

const Cones=() =>{
    const {
        state: { Cones },
        additem,
        Item
    } = useContext(CartContext);
    return (
        <>
        <div className="container mt-4" style={{ border: '1px solid #151617' }}>
            <div className="row">
                {Cones.map(({ name, id, image, price, weight, quantity }, index) => (
                    <div className="col-3 mt-2 mb-3">
                        <div className="card w-100" style={{ height: '340px' }}>
                        <Link to="/menu/itemDetails"> <img src={image} height="200px" onClick={() => Item(index)} class="card-img-top " /></Link>
                            <div className="card-body">
                            <Link to='/menu/itemdetails'><h5 className="card-title " onClick={() => Item(index)}>{name}</h5></Link>
                                <div className="d-flex justify-content-between">
                                    <p className="card-text ">{weight}</p>
                                    <p className="card-text "><span class="badge badge-warning">MRP</span> : {price} <span>&#8377;</span></p>
                                </div>
                                <Link to="/cart">
                                <button className="btn btn-primary btn-sm" onClick={() => additem(index)}>BuyNow</button>
                                </Link></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>
    )}


export default Cones
