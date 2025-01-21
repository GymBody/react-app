import Nav from "../components/Nav"
import AuthModule from '../components/AuthModule'
import { useState } from 'react'


const Login = () => {

    const [showModel, setShowModel] = useState(false)

    const authToken = false

    const handleClick = () => {
        console.log('clicked')
        setShowModel(true)
    }

    return (
        <div className="overlay">
            <Nav active={true} authToken={false} />
            <div>
                <h1>
                    Swipe Right
                </h1>
                <button className="primary-button" onClick={handleClick}>
                    {authToken ? 'Signout' : 'Create AccountE'}
                </button>

                {showModel && (
                    <AuthModule setShowModel={setShowModel} />
                )}

            </div>
        </div>
    )

}

export default Login