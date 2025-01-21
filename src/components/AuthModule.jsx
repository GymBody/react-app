const AuthModule = ({ setShowModel }) => {

    const handleClick = () => {
        setShowModel(false)
    }

    return (
        <div>
            <div onClick={handleClick}>x</div>
        </div>
    )
}
export default AuthModule