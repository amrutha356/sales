import PropTypes from "prop-types";
import "./MenuItems.css";

const MenuItems = ({ className = "" }) => {
  return (
    <div className={`menuitems ${className}`}>
      <img className="active-icon" loading="lazy" alt="" src="/active.svg" />
      <div className="active1">
        <img
          className="iconlylightbag"
          loading="lazy"
          alt=""
          src="/iconlylightbag.svg"
        />
        <div className="chat-icon">
          <div className="div18">3</div>
        </div>
      </div>
      <img className="active-icon1" loading="lazy" alt="" src="/active-1.svg" />
      <div className="active2">
        <img
          className="iconlybulkfolder"
          loading="lazy"
          alt=""
          src="/iconlybulkfolder@2x.png"
        />
      </div>
      <div className="active3">
        <div className="empty-icon-wrapper">
          <div className="empty-icon">16</div>
        </div>
        <img
          className="iconlylightchat"
          loading="lazy"
          alt=""
          src="/iconlylightchat.svg"
        />
      </div>
      <img className="active-icon2" loading="lazy" alt="" src="/active-2.svg" />
    </div>
  );
};

MenuItems.propTypes = {
  className: PropTypes.string,
};

export default MenuItems;
