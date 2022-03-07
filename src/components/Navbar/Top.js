import tree from '../../assets/images/tree.png';
import avatar from '../../assets/images/avatar.png';
import { Notification, ChevronDown } from '../Svg';

const TopNavbar = () => {
  return (
    <header className="header">
      <nav className="nav">
        <h3 className="title">Welcome, Huss Smith</h3>
        <div className="right">
          <div className="search__field">
            <span></span>
            <input type="text" className="search__input" placeholder="Search" />
          </div>
          <div className="plant">
            <img src={tree} alt="tree" />
            <span className="qty">0 Planted</span>
          </div>
          <span className="notification">
            <Notification strokecolor="#000" />
          </span>
          <button className="profile" type="button">
            <img src={avatar} alt="avatar" className="avatar" />
            <div className="badge">
              <span className='status'>Verified</span>
              <span>Huss Smith</span>
            </div>
            <span>
                <ChevronDown strokecolor="#55676B" />
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default TopNavbar;
