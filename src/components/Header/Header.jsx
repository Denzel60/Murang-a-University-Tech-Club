import '../../components/Header/Header.css'
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";

const Header = () => {
    return (
        <div>
            <div className="header">
                <div className="logo">
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <h2> Murang'a University Tech Club (MUTC)</h2>
                </div>
                <div className="header-left" id='navbar'>
                    <h3><Link to="/">Home</Link></h3>
                    <h3><Link to="/Leadership">Leadership</Link></h3>
                    <h3><Link to="/Tracks">Tracks</Link></h3>
                    <h3><Link to="/Events">Events</Link></h3>
                </div>
                <div>
                    <h3 className='bar' id='bar'><FaBars /></h3>
                </div>
            </div>
        </div>
    )
}

export default Header;