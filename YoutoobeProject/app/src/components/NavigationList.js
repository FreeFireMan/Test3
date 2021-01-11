import '../styles/navigation-list.css'


export default function NavigationList (){
    return (
        <div className="main-list-box">
            <ul className="main-list-items-box">
                <li className="main-list-item"><a href="" className="main-list-link"><img className="list-img" src="https://www.flaticon.com/svg/vstatic/svg/73/73534.svg?token=exp=1610397471~hmac=a95782f94d11952a95e83897f613b858" alt="video camera"/></a></li>
                <li className="main-list-item"><a href="" className="main-list-link"> <img className="list-img" src="https://www.flaticon.com/svg/vstatic/svg/3603/3603178.svg?token=exp=1610397650~hmac=65247eae7887d6e4d6c775b8bb497a7e" alt="menu"/></a></li>
                <li className="main-list-item"><a href="" className="main-list-link"><img className="list-img"  src="https://www.flaticon.com/svg/vstatic/svg/2645/2645890.svg?token=exp=1610397695~hmac=03a6306bfb3d12e5731a44ec0d7ec324" alt="notification bell"/> </a></li>
                <li className="main-list-item"><a href="" className="main-list-link"><img className="list-img"  src="https://www.flaticon.com/premium-icon/icons/svg/1144/1144811.svg" alt="accounts"/> </a></li>
            </ul>
        </div>
    );
}