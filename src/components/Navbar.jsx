import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';

const Navbar  = ({onClick, sidebar, name}) =>{

  var welcome;  
  var date = new Date();  
  var hour = date.getHours();  
    
  if (hour < 12) {  
    welcome = "Good Morning";  
  } else if (hour < 17) {  
    welcome = "Good Afternoon";  
  } else {  
    welcome = "Good Evening";  
  }
  

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={onClick} />
          </Link>
          
          <span className="welcome">
            <h4>{welcome}, <strong>{name}</strong></h4>
            
          </span>
          <span className="search">
            <input type="text" placeholder="Search.."/>
            <FaIcons.FaSearch className="search-icon"/>          
          </span>
            
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={onClick}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;