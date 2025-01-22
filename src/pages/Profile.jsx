import Nav from '../components/Nav'
import { useState } from 'react'

const Profile = () => {
    const [formData, setFormData] = useState({
        user_id: '',
        first_name: '',
        last_name: '',
        dob_day: '',
        dob_month: '',
        dob_year: '',
        show_gender: false,
        gender_identity: 'make',
        gender_interest: 'female',
        email: '',
        url: '',
        about: '',
        matches: []
    })

    const authToken = true


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("submitted")
    }
    const handleChange = (e) => {
        //const value = e.target.value
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
        const name = e.target.name

        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }))

    }

    return (
        <>
            <Nav
                minimal={true}
                authToken={true}
                setShowModel={() => { }}
                showModel={false}
            />
            <div className="profileForm">
                <h2>CREATE ACCOUNT</h2>

                <form onSubmit={handleSubmit}>
                    <section>
                        <label htmlFor="first_name">First Name</label>
                        <input
                            id="first_name"
                            type="text"
                            name="first_name"
                            placeholder="First Name"
                            required={true}
                            value={formData.first_name}
                            onChange={handleChange}
                        />
                        <label htmlFor="last_name">Last Name</label>
                        <input
                            id="last_name"
                            type="text"
                            name="last_name"
                            placeholder="Last Name"
                            required={true}
                            value={formData.last_name}
                            onChange={handleChange}
                        />
                        <label>Birthday</label>
                        <div className="multiple-input-container">
                            <input
                                id="dob_day"
                                type="number"
                                name="dob_day"
                                placeholder="DD"
                                required={true}
                                value={formData.dob_day}
                                onChange={handleChange}
                            />
                            <input
                                id="dob_month"
                                type="number"
                                name="dob_month"
                                placeholder="MM"
                                required={true}
                                value={formData.dob_month}
                                onChange={handleChange}
                            />
                            <input
                                id="dob_year"
                                type="number"
                                name="dob_year"
                                placeholder="YYYY"
                                required={true}
                                value={formData.dob_year}
                                onChange={handleChange}
                            />
                        </div>


                        <label>Gender</label>
                        <div className="multiple-input-container">
                            <input
                                id="male_gender_identity"
                                type="radio"
                                name="gender_identity"
                                value="male"
                                onChange={handleChange}
                                checked={formData.gender_identity === 'male'}
                            />
                            <label htmlFor="male_gender_identity">Male</label>
                            <input
                                id="female_gender_identity"
                                type="radio"
                                name="gender_identity"
                                value="female"
                                onChange={handleChange}
                                checked={formData.gender_identity === 'female'}
                            />
                            <label htmlFor="female_gender_identity">Female</label>
                        </div>

                        <label htmlFor="show-gender">Show gender on my profile</label>
                        <input
                            id="show-gender"
                            type="checkbox"
                            name="show_gender"
                            onChange={handleChange}
                            checked={formData.show_gender}
                        />

                        <label>Show Me</label>
                        <div className="multiple-input-container">
                            <input
                                id="male_gender_interest"
                                type="radio"
                                name="gender_interest"
                                value="male"
                                onChange={handleChange}
                                checked={formData.gender_interest === 'male'}
                            />
                            <label htmlFor="male_gender_interest">Male</label>
                            <input
                                id="female_gender_interest"
                                type="radio"
                                name="gender_interest"
                                value="female"
                                onChange={handleChange}
                                checked={formData.gender_interest === 'female'}
                            />
                            <label htmlFor="female_gender_interest">Female</label>
                            <input
                                id="everyone_gender_interest"
                                type="radio"
                                name="gender_interest"
                                value="everyone"
                                onChange={handleChange}
                                checked={formData.gender_interest === 'everyone'}
                            />
                            <label htmlFor="everyone_gender_interest">Everyone</label>
                        </div>

                        <label htmlFor="about">About me</label>
                        <input
                            id="about"
                            type="text"
                            name="about"
                            required={true}
                            placeholder="I like long walks .. "
                            value={formData.about}
                            onChange={handleChange}
                        />
                        <input type="submit" />
                    </section>

                    <section>
                        <label htmlFor="photo">Profile Photo</label>
                        <input
                            type="url"
                            name="url"
                            id="url"
                            onChange={handleChange}
                            required={true}
                        />
                        <div className="photo-container">
                            <img src={formData.url} alt="Picture preview" />
                        </div>



                    </section>
                </form>

            </div >
        </>
    )
}
export default Profile