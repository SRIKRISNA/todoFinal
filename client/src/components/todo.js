import Header from "./header";
import Sidebar from "./sidebar";

const TODO = () => {
    return(
        <>
            <div className="header">
                <Header/>
            </div>
            <div className="sidebar">
                <Sidebar/>
            </div>
            <div className="todo-container">
                
            </div>
        </>
    )
}
export default TODO;