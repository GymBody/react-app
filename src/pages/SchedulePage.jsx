import { useState, useEffect } from "react";
import ScheduleForm from "../components/ScheduleForm";
import axios from "axios";
import Nav from '../components/Nav'
import { useCookies } from 'react-cookie'

const SchedulePage = () => {
    const [schedule, setSchedule] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [cookies, setCookie, removeCookie] = useCookies(['user'])

    const userId = cookies.UserId

    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; // Get API base URL

    // Fetch schedule for user
    useEffect(() => {
        const fetchSchedule = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/schedule?userId=${userId}`);

                setSchedule(response.data.schedule);
            } catch (err) {
                console.error("Error fetching schedule:", err);
                setError("Failed to load schedule.");
            } finally {
                setLoading(false);
            }
        };
        if (userId) fetchSchedule();
    }, [userId]);

    // Group schedule by days
    const groupedSchedule = schedule.reduce((acc, slot) => {
        if (!acc[slot.day]) acc[slot.day] = [];
        acc[slot.day].push(slot);
        return acc;
    }, {});

    return (
        <><Nav
            minimal={true}
            authToken={true}
            setShowModel={() => { }}
            showModel={false}
        />
            <div>
                <h1>Schedule Page</h1>
                <ScheduleForm userId={userId} onSave={setSchedule} />

                <h2>Your Available Time Slots</h2>
                {loading ? (
                    <p>Loading schedule...</p>
                ) : error ? (
                    <p style={{ color: "red" }}>{error}</p>
                ) : Object.keys(groupedSchedule).length > 0 ? (
                    Object.keys(groupedSchedule).map((day) => (
                        <div key={day} style={{ marginBottom: "10px" }}>
                            <h3>{day}</h3>
                            <ul>
                                {groupedSchedule[day].map((slot, index) => (
                                    <li key={index}>
                                        {slot.start} - {slot.end}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))
                ) : (
                    <p>No schedule set yet.</p>
                )}
            </div>
        </>
    );
};

export default SchedulePage;
