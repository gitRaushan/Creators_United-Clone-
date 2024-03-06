import React from 'react';
import '../styles/SidebarStyles.css'; // Assuming your CSS file is named styles.css

class Sidebar extends React.Component {
  render() {
    return (
      <div className="sticky-menu">
        <div className="custom-header-menu">
          <p className="cursor-pointer custom-header-icon mb-2">Popular Creators</p>
          <p className="cursor-pointer custom-header-icon mb-2">Hot & Trending</p>
          <p className="cursor-pointer custom-header-icon mb-2">Never miss Out</p>
        </div>
      </div>
    );
  }
}

export default Sidebar;
