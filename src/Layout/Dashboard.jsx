import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {

    const [cart] = useCart();

    const [isAdmin] = useAdmin();

    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu">
                    {
                        isAdmin ?
                            <>
                                <li><NavLink to="/dashboard/adminHome"> <FaHome /> Admin Home</NavLink></li>
                                <li><NavLink to="/dashboard/addItems"> <FaUtensils /> Add Items</NavLink></li>
                                <li><NavLink to="/dashboard/manageItems"> <FaList /> Manage Items</NavLink></li>
                                <li><NavLink to="/dashboard/bookings"> <FaBook /> Manage Bookings</NavLink></li>
                                <li><NavLink to="/dashboard/users"> <FaUsers /> All users</NavLink></li>
                            </> :
                            <>
                                <li><NavLink to="/dashboard/userHome"> <FaHome /> User Home</NavLink></li>
                                <li><NavLink to="/dashboard/reservation"> <FaCalendar /> Reservation</NavLink></li>
                                <li><NavLink to="/dashboard/carts"> <FaShoppingCart /> My Cart ({cart.length})</NavLink></li>
                                <li><NavLink to="/dashboard/review"> <FaAd /> Add a Review</NavLink></li>
                                <li><NavLink to="/dashboard/bookings"> <FaList /> My Bookings</NavLink></li>
                            </>
                    }
                    <div className="divider"></div>
                    <li><NavLink to="/"> <FaHome /> Home</NavLink></li>
                    <li><NavLink to="/menu"> <FaList /> Menu</NavLink></li>
                    <li><NavLink to="/order/contact"> <FaEnvelope /> Contact</NavLink></li>
                </ul>
            </div>
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;