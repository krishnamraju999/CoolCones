import React, { useContext }from 'react'
import Reviews from "./Reviews";
import { Link } from "react-router-dom";
import { CartContext } from '../CartContext'

const Home = () => {
    const {
        sundaes,
        cones,scoops
    } = useContext(CartContext);
    return (
        <div className="py-4">
            <div className="row">
                <div class="col-6 pt-4 pl-5">
                    <h1 style={{ fontWeight: '700px' }}>Melt into moments of bliss</h1>
                    <p className="pt-3"
                        style={{ textAlign: 'left', lineHeight: '35px', fontWeight: '500' }}>
                        CoolCones ice creams hailed with an urge to craft the finest flavours upbringing
                        rich and creamy texture for an indulging experience. From fairs,
                        festivals and parties to “hooray”,” yippee” and “yaay”, take a dose of
                        Iceberg ice creams and amplify the happiness.
                        It is all about creating sumptuous treats for everyone, every day and everywhere!</p>
                    <Link to='/menu'>
                        <button className=" btn-dark btn-lg border">Check Our Menu</button></Link>
                </div> <div className="col-6 pt-3">
                    <img className="img-responsive" src="http://naturalicecreams.in/images/Cone.jpg" height="400px" width="inherit"></img>
                </div>
            </div>
            <div className="row bg-light">
                <div className="col-4 pt-3 text-center">
                    <img className="rounded-circle  " src="http://kindkones.com/wp-content/uploads/2019/03/Layer-158.png" />
                    <Link to="/menu/sundaes"><h3 className="pt-3" onClick={()=>sundaes()}>Sundae</h3></Link>
                </div>
                <div className="col-4 pt-3 text-center">
                    <img className="rounded-circle  " src="http://kindkones.com/wp-content/uploads/2019/03/Layer-159.png" />
                    <Link to="/menu/cones"><h3 className="pt-3" onClick={()=>cones()}>Cones</h3></Link>
                </div>
                <div className="col-4 pt-3 text-center">
                    <img className="rounded-circle " src="http://kindkones.com/wp-content/uploads/2019/03/Layer-157.png" />
                    <Link to="/menu/scoops"><h3 className="pt-3" onClick={()=>scoops()}>Scoops</h3></Link>
                </div>
            </div>
            <hr style={{ borderTop: '2px dashed white' }}></hr>
            <h1 className="text-center" style={{ fontFamily: 'cursive' }}>WHAT'S BEEN SAID</h1>
            <Reviews></Reviews>
        </div>
    )
}

export default Home
