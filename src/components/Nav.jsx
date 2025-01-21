import colorLogo from '../images/color-logo.png'
import bkLogo from '../images/bk-logo.png'

const Nav = ({ active, authToken }) => {

    // const active = true
    return (
        <nav>
            <div className="logo-container">
                {/* change the second 'colorLogo' to black & */}
                <img className="logo" src={active ? colorLogo : bkLogo} />
            </div>
            {!authToken && !active && <button className="nav-button">Log in</button>}
        </nav>
    )
}
export default Nav