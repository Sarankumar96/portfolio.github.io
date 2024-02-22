import { useState } from "react";

import img from './Portfolio1.png';
import img1 from './About1.jpg';
import img2 from './Portfolio4.png';
import img3 from './Calculator.png';
import img4 from './VishalMegaMart.png';
import img5 from './Taj Studio.png';
import img6 from './Digital Clock.png';
import img7 from './Shopping.png';
import img8 from './Daawat Restaurant.png';
import img9 from './Web Guruz.png';
import img10 from './W3 School.png';
import img11 from "./Contact.jpg";
import img12 from "./Contact2.jpg";
import img13 from "./Calculator1.png"; 
import img14 from "./Resume.png"; 
import img15 from "./loginform.png";

const Home = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [message, setMessage] = useState('');

    const loginHandle = (e) => {
        if (name.length == 0 || email.length == 0 || number.length == 0 || message.length == 0) {
            alert('Please Fill the Complete Form 📝 ');
        } else {
            alert('Form Submitted 👍')
        }
        e.preventDefault();
    }
    const User = (e) => {
        let input = e.target.value
        setName(input);
    }
    const Email = (e) => {
        let input = e.target.value;
        setEmail(input);
    }
    const Number = (e) => {
        let input = e.target.value;
        setNumber(input);
    }
    const Message = (e) => {
        let input = e.target.value;
        setMessage(input);
    }
    return (
        <>
            {/* ---------Home Component----*/}
            <div className="container homeintro">

                {/* -Row 1-- */}
                <div className="row">
                    <div className="col-md-6">
                        <div class='intro'>
                            <h1 style={{ fontSize: '35px', color: '--secondary--color' }}>Hello, my name is </h1>
                            <h1 style={{ fontSize: '82px', fontWeight: 'bold' }} title='Full Stack Developer'>Saran Premi</h1>
                            <div class='dynamic-txt'> <h1 style={{ position: 'relative' }} >I'm a <span style={{ fontSize: '42px', color: 'rgb(206, 15, 15)', fontWeight: 'bold', position: 'relative' }} class='full'>Full Stack Developer</span></h1></div>
                            <h1 >Specialized in <span style={{ fontSize: '42px', color: 'rgb(206, 15, 15)', fontWeight: 'bold' }}>MERN Stack</span></h1>
                            <a target='_blank' href='https://sarankumar96.github.io/Resume/' style={{ textDecoration: 'none' }}>  <button type="button" class="btn btn-primary " style={{ backgroundColor: 'rgb(206, 15, 15)', color: '#fff', fontSize: '20px', border: 'none', fontWeight: 'bold' }}>Resume</button></a>
                        </div>
                    </div>
                    <div className="col-md-6 ">
                        <img src={img} style={{ height: '350px', width: '400px', borderRadius: '50%', marginLeft: '20px' }} class='introImg' />
                    </div>
                </div>
                {/* -----------------Row 2------------------- */}
                <div class='row'>
                    <div className="col-md-12 icons ">
                        <a href='https://github.com/Sarankumar96' target='_blank' style={{ textDecoration: 'none' }}><img src='https://cdn-icons-png.flaticon.com/128/10090/10090288.png' class='ghi3' /></a> <br />
                        <a href='http://www.linkedin.com/in/sarankumar22' target='_blank' style={{ textDecoration: 'none' }}>  <img src='https://cdn-icons-png.flaticon.com/128/10090/10090300.png' class='ghi4' /></a> <br />
                        <a href='mailto:saranpremi22@gmail.com' target='_blank' style={{ textDecoration: 'none' }}>  <img src='https://cdn-icons-png.flaticon.com/128/6806/6806987.png' class='ghi5' /></a> <br />
                    </div>
                </div>
            </div>
            {/* ---------------About Component------------- */}
            {/* -------------------Row 1------------------------ */}
            <div className="container-fluid ref" data-aos="zoom-in" >
                <div className="row">
                    <div className="col-md-12">
                        <br />
                        <br />
                        <h1 style={{ textAlign: 'center', backgroundColor: '--ternary--color;', color: '--secondary--color', marginTop: '20px', fontFamily: 'inherit', fontWeight: 'bold' }}>About <span class='rt'>Me</span></h1>
                    </div>
                </div>
                {/* ----Row 2 */}
                <div className="row ">
                    <div className="col-md-4">
                        <img src={img1} class='image' />
                    </div>
                    <div className="col-md-8">
                        <ul style={{ backgroundColor: '--ternary--color', fontSize: '20px', marginLeft: '-100px', marginRight: '30px', marginTop: '20px' }}>
                            <li style={{ backgroundColor: '--ternary--color', marginLeft: '100px', fontFamily: 'inherit' }}>Hello ! My Name is Saran Kumar, I am a Full Stack Web Developer Specialized in MERN Stack . I am Expert in Front-end Development and Back-end Development.
                            </li>
                            <br />

                            <li style={{ backgroundColor: '--ternary--color', marginLeft: '100px' }}> I Love writing Code 👨‍💻 and 🚀 Building Web Apps. I am a Hardworking and Passionate Web Developer with Strong Problem Solving Skills and Creative Mindset. I am Passionate about Delivering User-Centric Solutions. </li> <br />

                            <li style={{ backgroundColor: '--ternary--color', marginLeft: '100px', fontFamily: 'inherit' }}> I am a graduate of Patel Memorial National College, Rajpura, Punjab, India. I hold a Bachelor's degree in  Computer Science, Statistics and Mathematics.</li>
                            <br />
                            <li style={{ backgroundColor: '--ternary--color', marginLeft: '100px', fontFamily: 'inherit' }}> My interest in Coding was Developed when i was in my 1st year of college. I enjoy building things which live on internet. I'm a passionate Developer, with strong administrative and communication skill, good attention to detail and ability to write efficient code.</li>

                        </ul>
                    </div>

                </div>


            </div>
            {/* ---------------Project Component-------------------- */}
            <div className="container" style={{ paddingTop: '50px', paddingBottom: '100px' }} >
                <div className="row" >
                    <div className="col-md-12 col-sm-6 col-xs-12" >
                        <br />
                        <br />
                        <h1 style={{ textAlign: 'center', marginTop: '20px', fontWeight: 'bold', color: 'var(--secondary--color)' }}>My Creative <span style={{ color: 'rgb(206, 15, 15)' }}>Portfolio</span> Section</h1>
                    </div>
                </div>
                <br />
                <br />

                < div className="row">
                    <div className="col-md-4"  >

                        <div className="card-box" style={{ width: '23rem', height: '530px', color: 'black' }} data-aos="flip-left">
                            <img src={img2} className="card-img-top" style={{ height: '300px' }} />
                            <div className="card-body-box" >
                                <h5 className="card-title" style={{ textAlign: 'center', fontFamily: 'inherit', fontWeight: 'bold', color: 'var(--secondary--color)' }}>Portfolio Website</h5>
                                <p className="card-text" style={{ marginLeft: '20px', fontFamily: 'inherit', color: 'var(--secondary--color)' }}>This is my portfolio Website. Which I created using HTML, CSS, Bootstrap and React.</p>
                                <p style={{ color: 'var(--secondary--color)' }}> <span style={{ color: 'red', marginLeft: '20px', fontFamily: 'inherit', fontWeight: 'bold' }}>Tech Stacks - </span> HTML, CSS, Bootstrap and <span style={{ marginLeft: '120px' }}>React.</span></p>
                                <center><a target='_blank' href="" className="btn btn-primary click" style={{ backgroundColor: 'rgb(217, 37, 37)', color: '#fff' }}>Click To View</a></center>
                            </div>
                        </div>
                        <br />
                        <br />
                        <br />
                        <br />
                        {/* Calculator 2 */}
                        <div className="card-box" style={{ width: '23rem', height: '530px', color: 'black' }} data-aos="flip-left">
                            <img src={img13} className="card-img-top" style={{ height: '300px' }} />
                            <div className="card-body-box" >
                                <h5 className="card-title" style={{ textAlign: 'center', fontFamily: 'inherit', fontWeight: 'bold', marginTop: '20px', color: 'var(--secondary--color)' }}>Calculator</h5>
                                <p className="card-text" style={{ marginLeft: '20px', fontFamily: 'inherit', color: 'var(--secondary--color)' }}>This is a Working Calculator Created Using HTML, CSS and JavaScript.</p>
                                <p style={{ color: 'var(--secondary--color)' }}> <span style={{ color: 'red', marginLeft: '20px', fontFamily: 'inherit', fontWeight: 'bold' }}>Tech Stacks - </span>HTML, CSS and JavaScript.</p>
                                <center>  <a target='_blank' href="https://sarankumar96.github.io/Calculator-2/" className="btn btn-primary click" style={{ backgroundColor: 'rgb(217, 37, 37)', color: '#fff' }}>Click To View</a></center>
                            </div>
                        </div>


                        <br />
                        <br />
                        <br />
                        <br />

                        <div className="card-box" style={{ width: '23rem', height: '530px' }} data-aos="flip-left">
                            <img src={img5} className="card-img-top" style={{ height: '300px' }} />
                            <div className="card-body-box">
                                <h5 className="card-title" style={{ textAlign: 'center', fontFamily: 'inherit', fontWeight: 'bold', marginTop: '20px', color: 'var(--secondary--color)' }}>Taj Studio</h5>
                                <p className="card-text" style={{ marginLeft: '20px', fontFamily: 'inherit', color: 'var(--secondary--color)' }}>This is a Website is designed for a Commercial Studio.</p>
                                <p style={{ color: 'var(--secondary--color)' }}> <span style={{ color: 'red', marginLeft: '20px', fontFamily: 'inherit', fontWeight: 'bold' }}>Tech Stacks - </span>HTML, CSS and Bootstrap</p>

                                <center> <a target='_blank' href="https://sarankumar96.github.io/Taj-Studio/" className="btn btn-primary click" style={{ backgroundColor: 'rgb(217, 37, 37)', color: '#fff' }}>Click To View</a></center>
                            </div>
                        </div>


                        <br />
                        <br />
                        <br />
                        <br />
                    
                            {/* My Resume */}
                            <div className="card-box" style={{ width: '23rem', height: '530px' }} data-aos="flip-left">
                            <img src={img14} className="card-img-top" style={{ height: '300px' }} />
                            <div className="card-body-box">
                                <h5 className="card-title" style={{ textAlign: 'center', fontFamily: 'inherit', fontWeight: 'bold', marginTop: '20px', color: 'var(--secondary--color)' }}>My Resume</h5>
                                <p className="card-text" style={{ marginLeft: '20px', fontFamily: 'inherit', color: 'var(--secondary--color)' }}>This is My Resume created using HTML and CSS..</p>
                                <p style={{ color: 'var(--secondary--color)' }}> <span style={{ color: 'red', marginLeft: '20px', fontFamily: 'inherit', fontWeight: 'bold' }}>Tech Stacks - </span>HTML and CSS.</p>
                                <center>  <a target='_blank' href='https://sarankumar96.github.io/Resume/' className="btn btn-primary click" style={{ backgroundColor: 'rgb(217, 37, 37)', color: '#fff' }}>Click To View</a></center>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-4" >

                        <div className="card-box" style={{ width: '23rem', height: '530px', color: 'black' }} data-aos="flip-left">
                            <img src={img15} className="card-img-top" style={{ height: '300px' }} />
                            <div className="card-body-box" >
                                <h5 className="card-title" style={{ textAlign: 'center', fontFamily: 'inherit', fontWeight: 'bold', color: 'var(--secondary--color)' }}>Login Form</h5>
                                <p className="card-text" style={{ marginLeft: '20px', fontFamily: 'inherit', color: 'var(--secondary--color)' }}>This is a login Form Cloning the Facebook Login Form.</p>
                                <p style={{ color: 'var(--secondary--color)' }}> <span style={{ color: 'red', marginLeft: '20px', fontFamily: 'inherit', fontWeight: 'bold' }}>Tech Stacks - </span> HTML, CSS, JavaScript and <span style={{ marginLeft: '120px' }}>React.</span></p>
                                <center><a target='_blank' href="https://sarankumar96.github.io/loginform.github.io/" className="btn btn-primary click" style={{ backgroundColor: 'rgb(217, 37, 37)', color: '#fff' }}>Click To View</a></center>
                            </div>
                        </div>
                        <br />
                        <br />
                        <br />
                        <br />

                         
                        {/* Digital Clock */}

                        <div className="card-box" style={{ width: '23rem', height: '530px' }} data-aos="flip-left">
                            <img src={img6} className="card-img-top" style={{ height: '300px' }} />
                            <div className="card-body-box">
                                <h5 className="card-title" style={{ textAlign: 'center', fontFamily: 'inherit', fontWeight: 'bold', marginTop: '20px', color: 'var(--secondary--color)' }}>Digital Clock</h5>
                                <p className="card-text" style={{ marginLeft: '20px', fontFamily: 'inherit', color: 'var(--secondary--color)' }}>This is a Digital Clock Created Using HTML, CSS and JavaScript.</p>
                                <p style={{ color: 'var(--secondary--color)' }}> <span style={{ color: 'red', marginLeft: '20px', fontFamily: 'inherit', fontWeight: 'bold' }}>Tech Stacks - </span> HTML, CSS and JavaScript.</p>
                                <center><a target='_blank' href="https://sarankumar96.github.io/Digital-Clock/" className="btn btn-primary click" style={{ backgroundColor: 'rgb(217, 37, 37)', color: '#fff' }}>Click To View</a></center>
                            </div>
                        </div>


                        <br />
                        <br />
                        <br />
                        <br />
                        {/* Web Guruz */}
                        <div className="card-box" style={{ width: '23rem', height: '530px' }} data-aos="flip-left">
                            <img src={img9} className="card-img-top" style={{ height: '300px' }} />
                            <div className="card-body-box">
                                <h5 className="card-title" style={{ textAlign: 'center', fontFamily: 'inherit', fontWeight: 'bold', marginTop: '20px', color: 'var(--secondary--color)' }}>Web Guruz</h5>
                                <p className="card-text" style={{ marginLeft: '20px', fontFamily: 'inherit', color: 'var(--secondary--color)' }}>This is a Website designed for a Commercial Web Service Company.</p>
                                <p style={{ color: 'var(--secondary--color)' }}> <span style={{ color: 'red', marginLeft: '20px', fontFamily: 'inherit', fontWeight: 'bold' }}>Tech Stacks - </span> HTML, CSS and Bootstrap</p>
                                <center><a target='_blank' href="https://sarankumar96.github.io/Web-Guruz/" className="btn btn-primary click" style={{ backgroundColor: 'rgb(217, 37, 37)', color: '#fff' }}>Click To View</a></center>
                            </div>
                        </div>

                        <br />
                        <br />
                        <br />
                        <br />
                        {/* Shopping Website */}
                        <div className="card-box" style={{ width: '23rem', height: '530px' }} data-aos="flip-left">
                            <img src={img7} className="card-img-top" style={{ height: '300px' }} />
                            <div className="card-body-box">
                                <h5 className="card-title" style={{ textAlign: 'center', fontFamily: 'inherit', fontWeight: 'bold', marginTop: '20px', color: 'var(--secondary--color)' }}>Shopping Website</h5>
                                <p className="card-text" style={{ marginLeft: '20px', fontFamily: 'inherit', color: 'var(--secondary--color)' }}>This is an Online Shopping Website. Created Using HTML and CSS.</p>
                                <p style={{ color: 'var(--secondary--color)' }}> <span style={{ color: 'red', marginLeft: '20px', fontFamily: 'inherit', fontWeight: 'bold' }}>Tech Stacks - </span> HTML and CSS </p>
                                <center><a target='_blank' href="https://sarankumar96.github.io/Shopping_Website/" className="btn btn-primary click" style={{ backgroundColor: 'rgb(217, 37, 37)', color: '#fff' }}>Click To View</a></center>
                            </div>
                        </div>
                    </div>


                    {/*  */}


                    <div className="col-md-4" >

                        {/* Calculator */}
                        <div className="card-box" style={{ width: '23rem', height: '530px' }} data-aos="flip-left">
                            <img src={img3} className="card-img-top" style={{ height: '300px' }} />
                            <div className="card-body-box">
                                <h5 className="card-title" style={{ textAlign: 'center', fontFamily: 'inherit', fontWeight: 'bold', marginTop: '20px', color: 'var(--secondary--color)' }}>Calculator</h5>
                                <p className="card-text" style={{ marginLeft: '20px', fontFamily: 'inherit', color: 'var(--secondary--color)' }}>This is a Working Calculator Created Using HTML, CSS and JavaScript.</p>
                                <p style={{ color: 'var(--secondary--color)' }}> <span style={{ color: 'red', marginLeft: '20px', fontFamily: 'inherit', fontWeight: 'bold' }}>Tech Stacks - </span>HTML, CSS and JavaScript.</p>
                                <center>  <a target='_blank' href="https://sarankumar96.github.io/Calculator/" className="btn btn-primary click" style={{ backgroundColor: 'rgb(217, 37, 37)', color: '#fff' }}>Click To View</a></center>
                            </div>
                        </div>
                        <br />
                        <br />
                        <br />
                        <br />

                              {/* Daawat Restaurant */}
                        <div className="card-box" style={{ width: '23rem', height: '530px' }} data-aos="flip-left">
                            <img src={img8} className="card-img-top" style={{ height: '300px' }} />
                            <div className="card-body-box">
                                <h5 className="card-title" style={{ textAlign: 'center', fontFamily: 'inherit', fontWeight: 'bold', marginTop: '20px', color: 'var(--secondary--color)' }}>Daawat Restaurant</h5>
                                <p className="card-text" style={{ marginLeft: '20px', fontFamily: 'inherit', color: 'var(--secondary--color)' }}>This is a Website designed for a commercial restaurant.</p>
                                <p style={{ color: 'var(--secondary--color)' }}> <span style={{ color: 'red', marginLeft: '20px', fontFamily: 'inherit', fontWeight: 'bold' }}>Tech Stacks - </span> HTML, CSS and Bootstrap</p>
                                <center><a target='_blank' href="https://sarankumar96.github.io/DaawatRestaurant/" className="btn btn-primary click" style={{ backgroundColor: 'rgb(217, 37, 37)', color: '#fff' }}>Click To View</a></center>
                            </div>
                        </div>

                        <br />
                        <br />
                        <br />
                        <br />
                                {/* Vishal Mega Mart */}
                        <div className="card-box" style={{ width: '23rem', height: '530px' }} data-aos="flip-left">
                            <img src={img4} className="card-img-top" style={{ height: '300px' }} />
                            <div className="card-body-box">
                                <h5 className="card-title" style={{ textAlign: 'center', fontFamily: 'inherit', fontWeight: 'bold', marginTop: '20px', color: 'var(--secondary--color)' }}>Vishal Mega Mart</h5>
                                <p className="card-text" style={{ marginLeft: '20px', fontFamily: 'inherit', color: 'var(--secondary--color)' }}>This is a Website Created For Commercial Clothing Store.</p>
                                <p style={{ color: 'var(--secondary--color)' }}> <span style={{ color: 'red', marginLeft: '20px', fontFamily: 'inherit', fontWeight: 'bold' }}>Tech Stacks - </span>HTML, CSS and Bootstrap.</p>
                                <center>  <a target='_blank' href="https://sarankumar96.github.io/Vishal-Mega-Mart/" className="btn btn-primary click" style={{ backgroundColor: 'rgb(217, 37, 37)', color: '#fff' }}>Click To View</a></center>
                            </div>
                        </div>
                        {/* Web Guruz */}
                       
                        <br />
                        <br />
                        <br />
                        <br />
                        {/* W3 School */}
                        <div className="card-box" style={{ width: '23rem', height: '530px' }} data-aos="flip-left">
                            <img src={img10} className="card-img-top" style={{ height: '300px' }} />
                            <div className="card-body-box">
                                <h5 className="card-title" style={{ textAlign: 'center', fontFamily: 'inherit', fontWeight: 'bold', marginTop: '20px', color: 'var(--secondary--color)' }}>W3 School</h5>
                                <p className="card-text" style={{ marginLeft: '20px', fontFamily: 'inherit', color: 'var(--secondary--color)' }}>This is an Online Edtech Website provides free content to learn Programming Languages.</p>
                                <p style={{ color: 'var(--secondary--color)' }}> <span style={{ color: 'red', marginLeft: '20px', fontFamily: 'inherit', fontWeight: 'bold' }}>Tech Stacks - </span> HTML and CSS.</p>
                                <center><a target='_blank' href="https://sarankumar96.github.io/W3-School/" className="btn btn-primary click" style={{ backgroundColor: 'rgb(217, 37, 37)', color: '#fff' }}>Click To View</a></center>
                            </div>
                        </div>

                    </div>


                </div>
            </div>

            {/*- ------------------Skills Component------------------ */}
            <div className="container-fluid skills">
                {/*---row 1------  */}
                <div className="row">
                    <div className="col-md-12">
                        <h1 style={{ textAlign: 'center', fontWeight: 'bold', paddingTop: '50px', color: 'var(--secondary--color)' }}>My <span class='rt'>Technical</span> Skills</h1>
                        <br />
                        <br />
                    </div>
                </div>

                {/* -----row 2------ */}

                <div className="row">

                    <div className="col-md-2" data-aos="zoom-in">
                        <div class="card imagee1" style={{ width: "12rem", backgroundColor: '#fff' }}>
                            <img src="data:image/png;base64,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" class="card-img-top" />
                            <h5 style={{ textAlign: 'center', backgroundColor: '#fff', marginTop: '20px', fontFamily: 'inherit' }}>HTML</h5>
                        </div>
                    </div>
                    <div className="col-md-2" data-aos="zoom-in">
                        <div class="card  imagee1 " style={{ width: "12rem" }}>
                            <span class='css'><img src="data:image/png;base64,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" class="card-img-top" /></span>
                            <h5 style={{ textAlign: 'center', backgroundColor: '#fff', marginTop: '20px', fontFamily: 'inherit' }}>CSS</h5>
                        </div>
                    </div>
                    <div className="col-md-2" data-aos="zoom-in">
                        <div class="card imagee1 " style={{ width: "12rem" }}>
                            <span class='css'>  <img src="data:image/jpeg;base64,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" class="card-img-top" /></span>
                            <h5 style={{ textAlign: 'center', backgroundColor: '#fff', marginTop: '20px', fontFamily: 'inherit', }}>Bootstrap</h5>
                        </div>

                    </div>
                    <div className="col-md-2" data-aos="zoom-in">
                        <div class="card imagee1" style={{ width: "12rem" }}>
                            <span class='css'>  <img src="data:image/png;base64,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" class="card-img-top" /></span>
                            <h5 style={{ textAlign: 'center', backgroundColor: '#fff', marginTop: '20px', fontFamily: 'inherit' }}>JavaScript</h5>
                        </div>

                    </div>
                    <div className="col-md-2" data-aos="zoom-in">
                        <div class="card imagee1" style={{ width: "12rem" }}>
                            <img src="data:image/png;base64,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" class="card-img-top" />
                            <h5 style={{ textAlign: 'center', backgroundColor: '#fff', marginTop: '20px', fontFamily: 'inherit' }}>jQuery</h5>
                        </div>

                    </div>
                    <div className="col-md-2" data-aos="zoom-in">
                        <div class="card imagee1" style={{ width: "12rem" }}>
                            <span class='css'> <img src="data:image/png;base64,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" class="card-img-top" /></span>
                            <h5 style={{ textAlign: 'center', backgroundColor: '#fff', marginTop: '20px', fontFamily: 'inherit' }}>React JS</h5>
                        </div>

                    </div>
                </div>
                <br />

                {/* ------------------row 3----------- */}

                <div className="row">
                    <div className="col-md-2" data-aos="zoom-in">
                        <div class="card imagee1" style={{ width: "12rem" }}>
                            <img src="data:image/png;base64,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" class="card-img-top" />
                            <h5 style={{ textAlign: 'center', backgroundColor: '#fff', marginTop: '20px', fontFamily: 'inherit' }}>Redux</h5>

                        </div>
                    </div>

                    <div className="col-md-2" data-aos="zoom-in">
                        <div class="card imagee1" style={{ width: "12rem" }}>
                            <img src="data:image/png;base64,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" class="card-img-top" alt="..." />
                            <h5 style={{ textAlign: 'center', backgroundColor: '#fff', marginTop: '20px', fontFamily: 'inherit' }}>Node JS</h5>
                        </div>
                    </div>
                    <div className="col-md-2" data-aos="zoom-in">

                        <div class="card imagee1" style={{ width: "12rem" }}>
                            <span class='css'> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIh2gzSTM3DNyTJzyNP4qPvZba-fWYsaG6OA&usqp=CAU" class="card-img-top" /></span>
                            <h5 style={{ textAlign: 'center', backgroundColor: '#fff', marginTop: '20px', fontFamily: 'inherit', marginTop: '20px' }}>Express JS</h5>
                        </div>

                    </div>
                    <div className="col-md-2" data-aos="zoom-in">

                        <div class="card imagee1" style={{ width: "12rem" }}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwmIjAV-_r9mAsURpyS8tZwthVuwDfFfaqPg&usqp=CAU" class="card-img-top" />
                            <h5 style={{ textAlign: 'center', backgroundColor: '#fff', marginTop: '20px', fontFamily: 'inherit' }}>Mongo DB</h5>
                        </div>

                    </div>
                    <div className="col-md-2" data-aos="zoom-in">

                        <div class="card imagee1" style={{ width: "12rem" }}>
                            <img src="data:image/png;base64,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" class="card-img-top" alt="..." />
                            <h5 style={{ textAlign: 'center', backgroundColor: '#fff', marginTop: '20px', fontFamily: 'inherit' }}>Git</h5>
                        </div>

                    </div>
                    <div className="col-md-2" data-aos="zoom-in">

                        <div class="card imagee1" style={{ width: "12rem" }}>
                            <img src="data:image/png;base64,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" class="card-img-top" alt="..." />
                            <h5 style={{ textAlign: 'center', backgroundColor: '#fff', marginTop: '20px' }}>Github</h5>
                        </div>

                    </div>
                </div>
            </div>
            {/* -----------------Contact Component--------------------- */}
            <div className="container-fluid contact" data-aos="fade-up"
                data-aos-duration="2000">
                {/* -----Row 1--------- */}
                <div className="row">
                    <div className="col-md-12">
                        <h1 style={{ textAlign: 'center', fontWeight: 'bold', color: 'var(--secondary--color)' }}>Get in <span class='ti'>Touch</span></h1>
                    </div>
                </div>
                <br />
                <br />
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
export default Home;