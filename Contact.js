Contact.js:-
import { Message } from "@material-ui/icons";
import React, { useState } from "react";

const Contact = () => {
    const [data, setData] = useState({
        FullName:"",
        PhoneNumber:"",
        Emailaddress:"",
        Message:"",
    });

    const InputEvent = (event) => {
        const {name , value} = event.target;

        setData((preVal) => {
            return {
                ...preVal,
                [name]: value,
            };
        });
    };

    const fromSubmit = (e) => {
e.preventDefault();
alert(` ${data.FullName}`);
    };
    return (
<>
<div className="my-5">
    <h1 className="text-center">
        Contact Us
    </h1>
    <div className="container contact_div">
        <div className="row">
            <div className="col-md-6 col-10 mx-auto">
                <from onSubmit={fromSubmit}>
                <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">
      FullName 
  </label>
  <input
   type="text" class="form-control"
   id="exampleFormControlInput1"
   name="FullName"
   value={data.FullName}
   onChange={InputEvent}
    placeholder="Enter Your Name "/>
</div>

<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">
      Phone Number 
  </label>
  <input
   type="number" class="form-control"
   id="exampleFormControlInput1"
   name="Phone Number"
 
   onChange={InputEvent}
    placeholder="Mobile Number"/>
</div>

<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">
      Email address
  </label>
  <input
   type="email" class="form-control"
   id="exampleFormControlInput1"
   name="Email address"
  
   onChange={InputEvent}
    placeholder="name@example.com"/>
</div>

<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">
      Message
      </label>
  <textarea class="form-control"
   id="exampleFormControlTextarea1"
    rows="3" 
    name="Message"
    value={data.Message}
    onChange={InputEvent}>
  </textarea>
</div>
<div class="col-12">
    <button class="btn btn-outline-primary" type="submit">Submit form</button>
  </div>

</from>
</div>
 </div>
 </div>
</div>
</>
    );

};

export default Contact;
