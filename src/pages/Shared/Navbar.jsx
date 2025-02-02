import { NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../hooks/useCart";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();

    const handleLogOut = () => {
        logOut();
    };

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/menu">Menu</NavLink></li>
        <li><NavLink to="/order/salad">Order</NavLink></li>
        <li><NavLink to="/secret">Secret</NavLink></li>
        <li><NavLink to="/dashboard/carts">
            <button className="btn btn-ghost p-0 btn-sm">
                <FaShoppingCart className="mr-2"/>
                <div className="badge badge-secondary">+{cart.length}</div>
            </button>
        </NavLink></li>
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
                <ul className="menu menu-horizontal px-1 gap-4 items-center">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <>
                            <img className="w-[40px] h-[40px] mr-2 rounded-full" src={user?.photoURL} alt="" />
                            <span>{user?.displayName}</span>
                            <button onClick={handleLogOut} className="btn ml-2">Logout</button>
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