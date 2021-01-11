import '../styles/header.css'
import BurgerButton from "./BurgerButton";
import Logo from "./Logo";
import Input from "./Input";
import NavigationList from "./NavigationList";

export default function Header (){
    return (
        <header>
            <div className="d-flex">
           <BurgerButton/>
           <Logo/>
            </div>
            <Input/>
            <NavigationList/>
        </header>
    );
}