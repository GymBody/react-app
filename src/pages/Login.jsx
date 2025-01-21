import Nav from "../components/Nav"


const Login = () => {

    const authToken = true

    const handleClick = () => {
        console.log('clicked')
    }

    return (
        <>
            <Nav active={true} />
            <div>
                <h1>
                    Swipe Right
                </h1>
                <button className="primary-button" onClick={handleClick}>
                    {authToken ? 'Signout' : 'Create AccountE'}
                </button>

            </div>
        </>
    )

}

export default Login