import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie'

const AuthModule = ({ setShowModel, isSignUp }) => {

    let navigate = useNavigate()
    const BASE_API = import.meta.env.VITE_API_BASE_URL;

    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState(null)
    const [error, setError] = useState(null)
    const [cookies, setCookie, removeCookie] = useCookies(['user'])

    // console.log(email, password, confirmPassword)

    //const isSignUp = true

    const handleClick = () => {
        setShowModel(false)
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            if (isSignUp && (password !== confirmPassword)) {
                setError('Password must be match!')
                return
            }

            // console.log('TODO Post the form the the backend / DB')
            //const response = await axios.post(BASE_API + '/signup', { email, password })
            const response = await axios.post(BASE_API + `${isSignUp ? '/signup' : '/login'}`, { email, password })
            setCookie('AuthToken', response.data.token)
            const success = response.status === 201

            // if (success) navigate('/profile')
            if (success && isSignUp) navigate('/profile')
            if (success && !isSignUp) navigate('/weather')

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="auth-model">
            <div className="close-icon" onClick={handleClick}>⦻</div>
            <h2>{isSignUp ? 'CREATE ACCOUNT' : 'LOG IN'}</h2>
            <p>By clicking Log In, you agree to our terms. Learn how we process your data in our Privacy Policy and Cookie Policy.</p>
            <form onSubmit={handleSubmit}>

                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="email"
                    required={true}
                    onChange={(e) => setEmail(e.target.value)}

                />
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="password"
                    required={true}
                    onChange={(e) => setPassword(e.target.value)}

                />
                {isSignUp && <input
                    type="password"
                    id="password-check"
                    name="password-check"
                    placeholder="confirm Password"
                    required={true}
                    onChange={(e) => setConfirmPassword(e.target.value)}

                />}
                <input className='secondary-button' type='submit' />
                <p>{error}</p>
            </form>
            <hr />
            <h2>Hit the Gym</h2>
        </div>
    )
}
export default AuthModule