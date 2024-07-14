import PropTypes from "prop-types";
import "./TopNavigation.css";

const TopNavigation = ({ className = "" }) => {
  return (
    <div className={`top-navigation ${className}`}>
      <div className="top-nav">
        <header className="topnav">
          <div className="navcontainer">
            <a className="dashboard">Dashboard</a>
            <div className="profile">
              <div className="icon6">
                <div className="shop-name">
                  <a className="nannys-shop">Nanny’s Shop</a>
                  <img
                    className="fichevron-down-icon10"
                    alt=""
                    src="/fichevrondown.svg"
                  />
                </div>
              </div>
              <img
                className="iconlybulknotification"
                loading="lazy"
                alt=""
                src="/iconlybulknotification.svg"
              />
              <img
                className="profile-1-icon"
                loading="lazy"
                alt=""
                src="/profile-1@2x.png"
              />
            </div>
          </div>
        </header>
        <div className="breadcrumbs">
          <div className="contnet">
            <img className="iconlybulkhome" alt="" src="/iconlybulkhome.svg" />
            <div className="item">
              <div className="empty-page">/</div>
              <a className="page">Page</a>
            </div>
            <div className="item1">
              <div className="div19">/</div>
              <a className="page1">Page</a>
            </div>
            <div className="item2">
              <div className="div20">/</div>
              <a className="page2">Page</a>
            </div>
            <div className="item3">
              <div className="div21">/</div>
              <a className="page3">Page</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

TopNavigation.propTypes = {
  className: PropTypes.string,
};

export default TopNavigation;
