import React from 'react';
import { NavLink } from 'react-router-dom';
import Ramen from './data/ramen.png'

class Header extends React.Component {
    render() {
        return (
            <div className="App-header">
                <img className="ramen-pic" src={Ramen} width="120px" height="120px"></img>
                <div className="links">
                    <NavLink to="/"> RamenExplore </NavLink>
                    <NavLink to="/ramen"> Ramen </NavLink>
                    <NavLink to="/about"> About </NavLink>
                </div>
            </div>
        )
    }
}

export default Header