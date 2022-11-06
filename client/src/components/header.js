

const Header = () => {
    return(
        <>
            <div className="header">
                <label style={{fontSize:"35px"}}>TODO APP</label>
                <h3>{userName ? userName.userName: "Non User"}</h3>
            </div>
        </>
    )
}
export default Header;