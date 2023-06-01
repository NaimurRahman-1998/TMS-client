/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from '../../public/logo.jpg'
const CustomLink = ({ to, className, title }) => {
    const location = useLocation()
    return (
        <NavLink to={to} className={`${className} relative group`}>
            {title}

            <span
                className={`duration-300 transition-[width] ease 
            group-hover:w-full h-[1px] bg-black 
            inline-block absolute left-0 -bottom-0.5
            ${location.pathname === to ? 'w-full' : 'w-0'}
            `}>
                &nbsp;
            </span>
        </NavLink>
    )
}



const Header = () => {

    return (
        <header className="px-32 py-8 font-medium flex justify-between border-2 items-center">


            <div className="flex w-full justify-between items-center ">
                <nav >
                    <CustomLink to='/' className='mr-4' title='Welcome Page' />
                    <CustomLink to='/home' className='mx-4' title='Home' />
                    <CustomLink to='/addTask' className='ml-4' title='Add Task' />
                </nav>

                <nav>
                    logout
                </nav>
                
            </div>

            <div className="absolute left-[47%] top-2">
                <img className="w-20" src={logo} alt="" />
            </div>
        </header>
    );
};

export default Header;