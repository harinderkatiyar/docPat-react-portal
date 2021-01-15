import React from 'react'

const LoginSignUp =()=>{

    return(<>

              <div className="col-lg-12 loginbttm">
                <div className="col-lg-6 login-btm login-text">
                  {/* Error Message */}
                </div>
             <a href="/registration-doc">  <div className="col-lg-6 login-btm login-button">
                  <button type="submit" className="btn btn-outline-primary">For Doctor</button>
                </div></a> 

                <a href="/registration-paitent">   <div className="col-lg-6 login-btm login-button">
                  <button type="submit" className="btn btn-outline-primary">For Paitent</button>
                </div></a> 
              </div>
           
</>)
}
export default LoginSignUp;