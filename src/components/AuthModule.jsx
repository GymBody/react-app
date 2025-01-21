import { useState } from 'react'

const AuthModule = ({ setShowModel, isSignUp }) => {

    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState(null)
    const [error, setError] = useState(null)

    console.log(email, password, confirmPassword)

    //const isSignUp = true

    const handleClick = () => {
        setShowModel(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            if (isSignUp && (password !== confirmPassword)) {
                setError('Password must be match!')
            }

            console.log('TODO Post the form the the backend / DB')

        } catch (error) {
            console.log(error)
        }
    }





    return (
        <div className="auth-model">
            <div className="close-icon" onClick={handleClick}>x</div>
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
        </div>
    )
}
export default AuthModule