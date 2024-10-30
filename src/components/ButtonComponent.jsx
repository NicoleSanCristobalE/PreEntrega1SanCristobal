const ButtonComponent = ({texto, clase}) => {
    return(
        <button className={clase}>{texto}</button>
    );
};
export default ButtonComponent;