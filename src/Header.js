import React from 'react';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <div className="App-header">
                <NavLink className="headerPage" to="/"> MyPage </NavLink>
                <NavLink to="/"> Home </NavLink>
                <NavLink to="/feed"> Feed </NavLink>
                <NavLink to="/faq"> FAQ </NavLink>
            </div>
        )
    }
}

export default Header