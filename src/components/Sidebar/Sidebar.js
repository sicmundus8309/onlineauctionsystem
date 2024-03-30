import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaHome,
    FaUserCog,
    FaShoppingCart,
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import "./sidebar.css";

const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path:"/",
            name:"Home",
            icon: <FaHome/>
        },
        {
            path: "/account",
            name: "Account",
            icon: <FaUserCog />
        },
        {
            path: "/cart",
            name: "Cart",
            icon: <FaShoppingCart />
        }
    ];

    return (
        <>
            <div className="scontainer">
                <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
                    <div className="top_section">
                        <h1 style={{ display: isOpen ? "block" : "none" }} className="slogo">BidBay</h1>
                        <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
                            <FaBars onClick={toggle} />
                        </div>
                    </div>
                    <hr className="separator" />
                    {menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link" activeClassName="active">
                            <div className="icon">{item.icon}</div>
                            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                        </NavLink>
                    ))}
                    <hr className="separator" />
                </div>
                <div className="main-content">
                    <main>{children}</main>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
