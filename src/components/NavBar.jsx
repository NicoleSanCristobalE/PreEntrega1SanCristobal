import Brand from "./Brand";
import ButtonComponent from "./ButtonComponent";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return(
        <div className="navbar">
            <Brand/>
            <ButtonComponent texto="Ropa" clase="btn btn-success"/>
            <ButtonComponent texto="Zapatos" clase="btn btn-info"/>
            <ButtonComponent texto="Accesorios" clase="btn btn-secondary"/>
            <CartWidget/>
        </div>
    );
};

export default NavBar;