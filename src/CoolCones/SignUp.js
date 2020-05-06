import React from 'react'

const SignUp=() =>{
    return (
        <div> 
    <div  class="padding"style={{height: '525px'}}>
        <div class="row  d-flex justify-content-center mt-5">
            <div class="col-md-6 col-lg-4">
                <form class="card mb-5">
                    <h5 class="card-title pt-3 text-center">Sign Up</h5>
                    <div class="card-body ">
                        <div class="form-group"> <input class="form-control" type="text" placeholder="Email"/> </div>
                        <div class="form-group"> <input class="form-control" type="password" placeholder="Password"/> </div>
                        <div class="form-group"> <input class="form-control" type="password" placeholder="Confirm Password"/> </div> <button class="btn btn-block btn-bold btn-primary">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
        
    )
}

export default SignUp
