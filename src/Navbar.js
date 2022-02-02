import React from 'react';
import logo from './images/logo.svg';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right)/2;
    const bottom = tempBtn.bottom - 3;
    openSubmenu(page, center, bottom);

    console.log('tempBtn',tempBtn);
    // console.log('xAxis',xAxis);
    // console.log('yAxis',yAxis);
    // center, bottom of buttons(products,developers,company)
  };

  const handleSubmenu = (e) => {
    if (!e.target.classList.contains('link-btn')) {
    // contains() method returns a Boolean value indicating whether a node is a descendant of a specified node.
    // A descendant can be a child, grandchild, great-grandchild, and so on.
    // we have added link-btn class to products,developers and company buttons 
    // so if we are hovering over buttons then submenu will be shown otherwise submenu will not be shown 
      closeSubmenu();
    }
  };

  return (
    <nav className='nav' onMouseOver={handleSubmenu}>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='nav-logo' alt='' />
          <button className='btn toggle-btn' onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              products
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              developers
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              company
            </button>
          </li>
        </ul>
        <button className='btn signin-btn'>Sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;