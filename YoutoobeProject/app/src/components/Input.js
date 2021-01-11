import '../styles/input.css'
import '../pictures/loupe.png'

export default function Input (){
    return (
        <div className="main-search-box">
        <div className="input-box">
            <input type="text" className="search-input" placeholder="Пошук"/>
            <span className="keyboard-box">
                <img src="//www.gstatic.com/inputtools/images/tia.png" alt="keyboard-image" className="keyboard-img"/>
            </span>

        </div>
    <button className="search-btn">
        <img src="https://www.flaticon.com/svg/vstatic/svg/622/622669.svg?token=exp=1610390426~hmac=d4c2b13447bed7bc20705a2573f088a0" alt="" className="search-img"/>
    </button>
            <button className="microphone-btn">
                <img src="https://www.flaticon.com/svg/vstatic/svg/709/709682.svg?token=exp=1610391315~hmac=116803b59b97f85a2d9cdcdb85253929" alt="microphone" className="microphone-img"/>
            </button>
            </div>
    );
}