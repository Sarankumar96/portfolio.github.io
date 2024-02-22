import { NavLink } from "react-router-dom";
import img from './moon.png';
// import img1 from './sun.png';

const Navbar = () => {
    const showSidebar = () => {
        const sidebar = document.querySelector('.sidebar');
        sidebar.style.display = 'flex';
    }
    const hideSidebar = () => {
        const sidebar = document.querySelector('.sidebar');
        sidebar.style.display = 'none';
    }
    // const icon = document.getElementById('icon');
    const changeTheme = () => {
        document.body.classList.toggle('dark-theme'); 
        // if (document.body.classList.contains('dark-theme')) {
        //     icon.src={img1};
        // }
}

    return (
        <>
            <nav >
                <ul class='sidebar'>
                    <li onClick={hideSidebar}><a href=''><svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 -960 960 960" width="26"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg></a></li>
                    <li><NavLink to='/'>HOME</NavLink></li>
                    <li><NavLink to='/About'>ABOUT</NavLink></li>
                    <li><NavLink to='Projects'>PROJECTS</NavLink></li>
                    <li><NavLink to='/Skills'>SKILLS</NavLink></li>
                    <li><a target='_blank' href='https://sarankumar96.github.io/Resume/' style={{ textDecoration: 'none' }}>RESUME</a></li>
                    <li><NavLink to='/Contact'>CONTACT</NavLink></li>
                </ul>

                <ul class='navbar'>
                    <li><a href='' class='saran' style={{ color: 'var(--secondary--color)' }}>SA<span class="ran">RAN</span></a></li>
                    <li class='hideOnMobile'><NavLink to='/'>HOME</NavLink></li>
                    <li class='hideOnMobile'><NavLink to='/Projects'>PROJECTS</NavLink></li>
                    <li class='hideOnMobile'><NavLink to='/Skills'>SKILLS</NavLink></li>
                    <li class='hideOnMobile'><a target='_blank' href='https://sarankumar96.github.io/Resume/' > RESUME</a></li> 
                    <li class='hideOnMobile'><NavLink to='/About'>ABOUT</NavLink></li>
                    <li class='hideOnMobile'><NavLink to='/Contact'>CONTACT</NavLink></li>
                    <li class='menu-button' onClick={showSidebar}><a href='#'><svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 -960 960 960" width="26"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg></a></li>
                    <li><img onClick={changeTheme} src={img} id='icon' /></li>
                </ul>

            </nav>
        </>
    )
};
export default Navbar;