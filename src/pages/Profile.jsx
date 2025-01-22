import Nav from '../components/Nav'
import { useState } from 'react'

const Profile = () => {
    const authToken = true


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("submitted")
    }
    const handleChange = () => {
        console.log("submitted")
    }

    return (
        <>
            Profile
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
                            value={""}
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
                                value={""}
                                onChange={handleChange}
                            />
                            <input
                                id="dob_month"
                                type="number"
                                name="dob_month"
                                placeholder="MM"
                                required={true}
                                value={""}
                                onChange={handleChange}
                            />
                            <input
                                id="dob_year"
                                type="number"
                                name="dob_year"
                                placeholder="YYYY"
                                required={true}
                                value={""}
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
                                checked={false}
                            />
                            <label htmlFor="male_gender_identity">Male</label>
                            <input
                                id="female_gender_identity"
                                type="radio"
                                name="gender_identity"
                                value="female"
                                onChange={handleChange}
                                checked={false}
                            />
                            <label htmlFor="female_gender_identity">Female</label>
                        </div>

                        <label htmlFor="show-gender">Show gender on my profile</label>
                        <input
                            id="show-gender"
                            type="checkbox"
                            name="show_gender"
                            onChange={handleChange}
                            checked={false}
                        />

                        <label>Show Me</label>
                        <div className="multiple-input-container">
                            <input
                                id="male_gender_identity"
                                type="radio"
                                name="gender_identity"
                                value="male"
                                onChange={handleChange}
                                checked={false}
                            />
                            <label htmlFor="male_gender_identity">Male</label>
                            <input
                                id="female_gender_identity"
                                type="radio"
                                name="gender_identity"
                                value="female"
                                onChange={handleChange}
                                checked={false}
                            />
                            <label htmlFor="female_gender_identity">Female</label>
                            <input
                                id="everyone_gender_identity"
                                type="radio"
                                name="gender_identity"
                                value="everyone"
                                onChange={handleChange}
                                checked={false}
                            />
                            <label htmlFor="everyone_gender_identity">Everyone</label>
                        </div>

                        <label htmlFor="about">About me</label>
                        <input
                            id="about"
                            type="text"
                            name="about"
                            required={true}
                            placeholder="I like long walks .. "
                            value={""}
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

                        </div>



                    </section>
                </form>

            </div >
        </>
    )
}
export default Profile