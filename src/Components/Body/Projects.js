
// import img from './Portfolio1.png';
// import img1 from './About1.jpg';
import img2 from './Portfolio4.png';
import img3 from './Calculator.png';
import img4 from './VishalMegaMart.png';
import img5 from './Taj Studio.png';
import img6 from './Digital Clock.png';
import img7 from './Shopping.png';
import img8 from './Daawat Restaurant.png';
import img9 from './Web Guruz.png';
import img10 from './W3 School.png';
// import img11 from "./Contact.jpg";
// import img12 from "./Contact2.jpg";
import img13 from "./Calculator1.png";
import img14 from "./Resume.png";
import img15 from "./loginform.png";

const Projects = () => {
    return (
        <>
            <div className="container" >
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


        </>
    )
};
export default Projects;

// 
{/* < div className="row">
<div className="container" style={{ paddingTop: '50px', paddingBottom: '100px' }} >
<div className="row" >
    <div className="col-md-12 col-sm-6 col-xs-12" >
        <br />
        <br />
        <h1 style={{ textAlign: 'center', marginTop: '20px', fontWeight: 'bold', color: 'var(--secondary--color)' }}>My Creative <span style={{ color: 'rgb(206, 15, 15)' }}>Portfolio</span> Section</h1>
    </div>
</div>
<br />
<br /> */}