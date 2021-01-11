import '../styles/burger-button.css'
import '../styles/header.css'

export default function BurgerButton (){
    return (
        <div className="main-box-burger-btn">
            <button className="burger-btn" >
                <svg viewBox="0 0 100 80" width="24px" height="24px" fill="#606060">
                    <rect width="100" height="8"></rect>
                    <rect y="30" width="100" height="8"></rect>
                    <rect y="60" width="100" height="8"></rect>
                </svg>
               </button>
        </div>
    );
}