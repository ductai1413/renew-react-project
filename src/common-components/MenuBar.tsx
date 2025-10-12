import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '@/common-components/MenuBar.scss';
import { ROUTES } from '@/interfaces/Routes';

const MenuBar: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="advanced-menu">
      <div className="menu-container">
        {ROUTES.map(item => (
          <div key={item.path || item.label} className="menu-item-wrapper">
            {item.submenu ? (
              <div className="dropdown">
                <button className="dropdown-toggle">{item.label}</button>
                {
                  <div className="dropdown-menu">
                    {item.submenu.map(dropdownItem => (
                      <NavLink
                        key={dropdownItem.path}
                        to={dropdownItem.path}
                        className="dropdown-item"
                      >
                        {dropdownItem.label}
                      </NavLink>
                    ))}
                  </div>
                }
              </div>
            ) : (
              <NavLink
                to={item.path}
                className={`menu-link ${location.pathname === item.path ? 'active' : ''}`}
              >
                {item.label}
              </NavLink>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default MenuBar;
