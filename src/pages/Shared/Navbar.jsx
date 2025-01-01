import { NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut();
    };

    const links = <>
        <NavLink to="/"><li>Home</li></NavLink>
        <NavLink to="/menu"><li>Menu</li></NavLink>
        <NavLink to="/order/salad"><li>Order</li></NavLink>
    </>

    return (
        <div className="navbar fixed z-10 bg-opacity-50 bg-[#151515] max-w-screen-xl text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-4">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Bistro Boss</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-4">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <>
                            <button onClick={handleLogOut} className="btn">Logout</button>
                        </>
                        :
                        <>
                            <NavLink to="/login"><button className="btn mr-2">Login</button></NavLink>
                            <><NavLink to="/signup"><button className="btn">Sign Up</button></NavLink></>
                        </>
                }
            </div>
        </div>
    );
};

export default Navbar;