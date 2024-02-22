import img11 from "./Contact.jpg";
import img12 from "./Contact2.jpg";


import { useState } from "react";

const Contact = ()=>{
const[name, setName] = useState("");
const[email, setEmail] = useState('');
const[number, setNumber] = useState('');
const[message,setMessage] = useState('');

const loginHandle = (e)=>{
  if(name.length == 0 || email.length ==0 || number.length == 0 || message.length ==0){
    alert('Please Fill the Complete Form 📝 ');
  }else{
    alert('Form Submitted 👍')
  }
  e.preventDefault();
}
const User = (e)=>{
  let input = e.target.value
  setName(input);
}
const Email = (e)=>{
  let input = e.target.value;
  setEmail(input);
}
const Number = (e)=>{
  let input = e.target.value;
  setNumber(input);
}
const Message = (e)=>{
  let input = e.target.value;
  setMessage(input);
}
    return(
        <>
         <div className="container-fluid contact">
                {/* -----Row 1--------- */}
                <div className="row">
                    <div className="col-md-12">
                        <h1 style={{ textAlign: 'center', fontWeight: 'bold', color:'var(--secondary--color)' }}>Get in <span class='ti'>Touch</span></h1>
                    </div>
                </div>
                <br/>
                <br/>
                {/* -------Row 2---------- */}
                <div className="row">
                    <div className="col-md-4 contact1">
                        <img src={img11} />

                    </div>
                    <div className="col-md-4 form">
                        <form style={{ marginLeft: '100px' }}>
                            <a target='_blank' href='http://www.linkedin.com/in/sarankumar22' style={{ textDecoration: 'none' }}> <button type="button" class="btn btn-secondary" style={{ backgroundColor: 'rgb(5, 133, 218)', width: '110px', fontWeight: 'bold', marginRight: '20px', border: 'none', marginLeft: '-10px' }}>LinkedIn</button></a>
                            <a target='_blank' href='https://github.com/Sarankumar96' style={{ textDecoration: 'none' }}>   <button type="button" class="btn btn-secondary" style={{ backgroundColor: 'rgb(66, 70, 73)', width: '110px', fontWeight: 'bold', marginRight: '20px', border: 'none' }}>Github</button></a>
                            <a target='_blank' href='mailto:saranpremi22@gmail.com' style={{ textDecoration: 'none' }}> <button type="button" class="btn btn-secondary" style={{ backgroundColor: 'rgb(224, 49, 49)', width: '110px', fontWeight: 'bold', border: 'none' }}>Gmail</button></a> <br />
                            <input type="text" placeholder="  Full Name" style={{ backgroundColor: '#fff', width: '380px', marginTop: '20px', height: '40px', marginLeft: '-10px', border: 'none', borderRadius: '5px', fontSize: '20px' }} onChange={User} />
                            <input type='email' placeholder="  Email" style={{ backgroundColor: '#fff', width: '380px', marginTop: '20px', height: '40px', marginLeft: '-10px', border: 'none', borderRadius: '5px', fontSize: '20px' }} onChange={Email} />
                            <input type='number' placeholder="  Number" style={{ backgroundColor: '#fff', width: '380px', marginTop: '20px', height: '40px', marginLeft: '-10px', border: 'none', borderRadius: '5px', fontSize: '20px' }} onChange={Number} />
                            <input type='text' placeholder="  Your Message" style={{ backgroundColor: '#fff', width: '380px', marginTop: '20px', height: '200px', marginLeft: '-10px', border: 'none', borderRadius: '5px', fontSize: '20px', textAlign: 'left' }} onChange={Message} />
                            <button type="button" class="btn btn-secondary" onClick={loginHandle} style={{ backgroundColor: 'rgb(224, 49, 49)', width: '380px', fontWeight: 'bold', border: 'none', marginLeft: '-10px', marginTop: '20px', fontSize: '18px' }}>Send Message</button><br />

                        </form>
                    </div>
                    <div className="col-md-4 contact2">
                    <img src={img12} />
                    </div>
                </div>

            </div>
        </>
    )
};
export default Contact;