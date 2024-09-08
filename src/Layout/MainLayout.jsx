import {useRef} from "react";
import NavBar from "../components/NavBar/Navbar";

const MainLayout = ({ children }) => {
    const footerDivRef = useRef ();

    const handleClick = () => {
    footerDivRef.current.innerHTML = "Footer content reference" ;
    };

 return (
    <div>
        {children}
        
    </div>
    );  
};
export default MainLayout;