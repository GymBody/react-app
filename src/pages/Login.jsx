import Nav from "../components/Nav"
import AuthModule from '../components/AuthModule'
import { useState } from 'react'


const Login = () => {

    const [showModel, setShowModel] = useState(false)
    const [isSignUp, setIsSignUp] = useState(true)

    const authToken = false

    const handleClick = () => {
        console.log('clicked')
        setShowModel(true)
        setIsSignUp(true)
    }

    return (
        <div className="overlay">
            <Nav minimal={false}
                authToken={false}
                setShowModel={setShowModel}
                showModel={showModel}
                setIsSignUp={setIsSignUp}
            />
            <div className="home">
                <h1 className="primary-title">
                    Swipe Right
                </h1>
                <button className="primary-button" onClick={handleClick}>
                    {authToken ? 'Signout' : 'Create AccountE'}
                </button>

                {showModel && (
                    <AuthModule setShowModel={setShowModel} isSignUp={isSignUp} />
                )}

            </div>
        </div>
    )

}

export default Login