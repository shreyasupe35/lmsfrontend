import { Link } from "react-router-dom";
import {FiMenu} from 'react-icons/fi'
import Footer from '../compoents/Footer.jsx'
import {AiFillCloseCircle} from 'react-icons/ai'
function HomeLayout({children}){

    
    function changewidth(){
        const drawerSide=document.getElementsByClassName("drawer-side");
        drawerSide[0].style.width='auto';
    }
    function hideDrawer(){
        const element = document.getElementsByClassName("drawer-toggle");
        element[0].checked = false;
        const drawerSide = document.getElementsByClassName("drawer-side");
        drawerSide[0].style.width = '0';
    }
    return (
        <div className="min-h-[90vh]">
            <div className="drawer absolute left-0 z-50 w-full">
                <input type=" checkbox" className="drawer-toggle" id="my-drawer" />
                <div className="drawer-content">
                    <label htmlFor="my-drawer">
                        <FiMenu  onClick={changewidth} size={"32px"} className="font-bold text-white m-4" />
                    </label>
                </div>
                <div className="drawer-side w-0" >
                    <label htmlFor="my-drawer" className="drawer-overlay">
                        <ul className="menu p-4 w-48 h-[100%] sm:w-80 bg-base-200 text-base-content relative">
                            <li className='w-fit absolute right-2 z-50'>
                               <button onClick={hideDrawer}>
                                    <AiFillCloseCircle size={24}/>
                                </button>
                            </li>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact Us</Link>
                            </li>
                            <li>
                                <Link to="/courses">Courses</Link>
                            </li>
                        </ul>
                    </label>
                </div>
            </div>
            {children}
            <Footer/>
        </div>
    )
}
export default HomeLayout;