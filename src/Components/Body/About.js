
import img1 from './About1.jpg';


const About = ()=>{
    return(
        <>
        <div className="container-fluid ref">
                <div className="row">
                    <div className="col-md-12">
                        <br />
                        <br />
                        <h1 style={{ textAlign: 'center', backgroundColor: 'var(--ternary--color)', marginTop: '20px', fontFamily: 'inherit', fontWeight: 'bold',color:'var(--secondary--color)' }}>About <span class='rt'>Me</span></h1>
                    </div>
                </div>
                {/* ----Row 2 */}
                <div className="row ">
                    <div className="col-md-4">
                        <img src={img1} class='image' />
                    </div>
                    <div className="col-md-8">
                        <ul style={{ backgroundColor: 'var(--ternary--color)', fontSize: '20px', marginLeft: '-100px', marginRight: '30px', marginTop: '20px' }}>
                            <li style={{ backgroundColor: 'var(--ternary--color)', marginLeft: '100px', fontFamily: 'inherit' }}>Hello ! My Name is Saran Kumar, I am a Full Stack Developer Specialized in MERN Stack . I am Expert in Front-end Development and Back-end Development.
                            </li>
                            <br />

                            <li style={{ backgroundColor: 'var(--ternary--color)', marginLeft: '100px' }}> I Love writing Code 👨‍💻 and 🚀 Building Web Apps. I am a Hardworking and Passionate Web Developer with Strong Problem Solving Skills and Creative Mindset. I am Passionate about Delivering User-Centric Solutions. </li> <br />

                            <li style={{ backgroundColor: 'var(--ternary--color)', marginLeft: '100px', fontFamily: 'inherit' }}> I am a graduate of Patel Memorial National College, Rajpura, Punjab, India. I hold a Bachelor's degree in  Computer Science, Statistics and Mathematics.</li>
                            <br />
                            <li style={{ backgroundColor: 'var(--ternary--color)', marginLeft: '100px', fontFamily: 'inherit' }}> My interest in Coding was Developed when i was in my 1st year of college. I enjoy building things which live on internet. I'm a passionate Developer, with strong administrative and communication skill, good attention to detail and ability to write efficient code.</li>

                        </ul>
                    </div>

                </div>


            </div>
        </>
    )
};
export default About;