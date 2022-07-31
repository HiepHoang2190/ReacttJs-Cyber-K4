import React from 'react'
import { Link, NavLink } from "react-router-dom";
import './Header.css'
export default function Header() {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <a className="navbar-brand" href="/">Cyberlearn</a>
            <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="activeNavItem" className={({ isActive }) => "nav-link" + (isActive ? " activeNavItem" : "")} activeStyle={{fontWeight:'bold'}}
                        style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : '' })}
                        to="/home">Home </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="activeNavItem" className={({ isActive }) => "nav-link" + (isActive ? " activeNavItem" : "")} activeStyle={{fontWeight:'bold'}} 
                         style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : '' })}
                        to="/about">About</NavLink>
                    </li>
                    <li className="nav-item dropdown">
                    <NavLink className="nav-link" activeClassName="activeNavItem" className={({ isActive }) => "nav-link" + (isActive ? " activeNavItem" : "")} activeStyle={{fontWeight:'bold'}} 
                     style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : '' })}
                    to="/contact">Contact</NavLink>
                    </li>
                    <li className="nav-item dropdown">
                    <NavLink className="nav-link" activeClassName="activeNavItem" className={({ isActive }) => "nav-link" + (isActive ? " activeNavItem" : "")} activeStyle={{fontWeight:'bold'}} 
                     style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : '' })}
                    to="/todolistrfc">To do list rfc</NavLink>
                    </li>
                    <li className="nav-item dropdown">
                    <NavLink className="nav-link" activeClassName="activeNavItem" className={({ isActive }) => "nav-link" + (isActive ? " activeNavItem" : "")} activeStyle={{fontWeight:'bold'}} 
                     style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : '' })}
                    to="/todolistrcc">To do list rcc</NavLink>
                    </li>
                    <li className="nav-item dropdown">
                    <NavLink className="nav-link" activeClassName="activeNavItem" className={({ isActive }) => "nav-link" + (isActive ? " activeNavItem" : "")} activeStyle={{fontWeight:'bold'}} 
                     style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : '' })}
                    to="/todolistredux">To do list redux</NavLink>
                    </li>
                    <li className="nav-item dropdown">
                    <NavLink className="nav-link" activeClassName="activeNavItem" className={({ isActive }) => "nav-link" + (isActive ? " activeNavItem" : "")} activeStyle={{fontWeight:'bold'}} 
                     style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : '' })}
                    to="/todolistreduxsaga">To do list redux saga</NavLink>
                    </li>
                    <li className="nav-item dropdown">
                    <NavLink className="nav-link" activeClassName="activeNavItem" className={({ isActive }) => "nav-link" + (isActive ? " activeNavItem" : "")} activeStyle={{fontWeight:'bold'}} 
                     style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : '' })}
                    to="/demohocmodal">HOC Modal</NavLink>
                    </li>
                    <li className="nav-item dropdown">
                    <NavLink className="nav-link" activeClassName="activeNavItem" className={({ isActive }) => "nav-link" + (isActive ? " activeNavItem" : "")} activeStyle={{fontWeight:'bold'}} 
                     style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : '' })}
                    to="/login">Login</NavLink>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>

    )
}
