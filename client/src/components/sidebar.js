import { Navigate } from 'react-router-dom';

const Sidebar = () => {
    const LogoutHandler = () => {
        localStorage.clear();
        Navigate('/');
    }
    return(
        <>
            <div className="sidebar">
                <label style={{fontSize:"35px"}}>TODO LIST</label>
                <label style={{fontSize:"35px"}}>HISTORY</label>
                <button onClick={LogoutHandler()}>Logout</button>
            </div>
        </>
    )
}
export default Sidebar;