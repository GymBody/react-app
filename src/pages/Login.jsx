import NavBar from '../components/NavBar'

const Login = () => {

    const authToken = true

    const handleClick =() => {
        console.log('clicked')
    }

    return (
    <>
        <NavBar/>
        <div>
            <h1>
                Swipe Right
            </h1>
            <button onClick={handleClick}>
                {authToken ? 'Signout' : 'Create AccountE'}
            </button>

        </div>
    </>
    )

}

export default Login