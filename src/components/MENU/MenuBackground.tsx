import SonelIcon from "../../assets/icons/sonel-icon-large.svg";

// Background image for behind menu
const MenuBackground= () => {
    return (
        <div className="menu-background" role="img" aria-label="Sonel Icon For Decoration">
            <img className="menu-background-icon" src={SonelIcon} alt="sonel-icon" />
        </div>
    )
}
// End of MenuBackground

export default MenuBackground;