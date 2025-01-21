import colorLogo from '../images/color-logo.png'
import bkLogo from '../images/bk-logo.png'

const Nav = ({ minimal, authToken, setShowModel, showModel, setIsSignUp }) => {

    const handleClick = () => {
        setShowModel(true)
        setIsSignUp(false)
    }

    // const minimal = true
    return (
        <nav>
            <div className="logo-container">
                {/* change the second 'colorLogo' to black & */}
                <img className="logo" src={minimal ? colorLogo : bkLogo} />
            </div>
            {!authToken && !minimal && <button
                className="nav-button"
                onClick={handleClick}
                disabled={showModel}
            >Log in</button>}
        </nav>
    )
}
export default Nav