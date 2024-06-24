import { Link } from 'react-router-dom';

const Navbar = () => {
    return (  
        <nav className="navbar">
            <h3>WalthropeOnlineReport</h3>
            <div className="links">
                <Link to="/Pages/Report">View Reports</Link> 
                <Link to="/Pages/ReportForm" style={{
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRadius: "8px"
                }}>Input Report</Link>
            </div>

        </nav>


    );
}
 
export default Navbar;