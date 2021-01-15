import React,{useState} from 'react'
  
const Contact =()=>{
    const [data, setData] = useState({
        name:"",
        mobile:"",
        email:"",
        message:""
    })
const InputEvent=(event)=>{
  
const{name,value} = event.target;
setData((preVal)=>{
    return{
        ...preVal,
        [name]:value,
    };
})
};

const formSubmit =(e)=>{

alert(data.mobile)
};
    return(<>  
     <div className="my-5">
    <h1 className="text-center">Contact US</h1>
 </div>
 <div className="container-fluid contact-div">
    <div className="row">
       <div className="col-8 mx-auto">
      
<form onSubmit={formSubmit}>
<div className="mb-3">
    <label htmlFor="exampleFormControlInput1" 
    className="form-label">
     Name
    </label>
    <input
      type="text"
      className="form-control"
      id="exampleFormControlInput1"
      value={data.name}
      name="name"
      onChange={InputEvent}
      placeholder="Name"
    />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleFormControlInput1" 
    className="form-label">
      Email address
    </label>
    <input
      type="email"
      className="form-control"
      id="exampleFormControlInput1"
      value={data.email}
      name="email"
      onChange={InputEvent}
      placeholder="name@example.com"
    />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleFormControlInput1" className="form-label">
      Mobile
    </label>
    <input
      type="number"
      className="form-control"
      value={data.mobile}
     name="mobile"
     onChange={InputEvent}
      id="exampleFormControlInput1"
      placeholder="Mobile"
    />
  </div>
   <div className="mb-3">
    <label htmlFor="exampleFormControlTextarea1" className="form-label">
      Message
    </label>
    <textarea
      className="form-control"
      id="exampleFormControlTextarea1"
      value={data.message}
     name="message"
     onChange={InputEvent}
      rows={3}
      defaultValue={""}
    ></textarea>
  </div> 
  <div className="col-12">
    <button className="btn btn-primary" type="submit">Submit form</button>
   
  </div>
  </form>
           
           </div>
           </div>
           </div>
           </>)
}
export default Contact;