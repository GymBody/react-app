import { useState } from "react";
import axios from "axios";
import { useCookies } from 'react-cookie'

const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const ScheduleForm = ({ onSave }) => {
    const [timeSlots, setTimeSlots] = useState([{ day: "", start: "", end: "" }]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [cookies, setCookie, removeCookie] = useCookies(['user'])
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; // Get API base URL from .env
    const userId = cookies.UserId
    // Handle input change
    const handleChange = (index, field, value) => {
        const updatedSlots = [...timeSlots];
        updatedSlots[index][field] = value;
        setTimeSlots(updatedSlots);
    };

    // Add new time slot
    const addTimeSlot = () => {
        setTimeSlots([...timeSlots, { day: "", start: "", end: "" }]);
    };

    // Remove a time slot
    const removeTimeSlot = (index) => {
        setTimeSlots(timeSlots.filter((_, i) => i !== index));
    };

    // Submit schedule to API with userId
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            // const response = await axios.post(`${API_BASE_URL}/schedule`, scheduleData);
            const response = await axios.post(`${API_BASE_URL}/schedule`, {
                userId,  // Include user ID
                schedule: timeSlots
            });

            console.log("Schedule saved:", response.data);
            onSave(timeSlots); // Update UI after saving
            setTimeSlots([{ day: "", start: "", end: "" }]); // Reset form
        } catch (err) {
            console.error("Error saving schedule:", err);
            setError("Failed to save schedule. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>Set Your Available Time Slots</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                {timeSlots.map((slot, index) => (
                    <div key={index} >
                        <select value={slot.day} onChange={(e) => handleChange(index, "day", e.target.value)} required>
                            <option value="">Select Day</option>
                            {weekdays.map((day) => (
                                <option key={day} value={day}>{day}</option>
                            ))}
                        </select>
                        <input type="time" value={slot.start} onChange={(e) => handleChange(index, "start", e.target.value)} required />
                        <span>to</span>
                        <input type="time" value={slot.end} onChange={(e) => handleChange(index, "end", e.target.value)} required />
                        {index > 0 && <button type="button" onClick={() => removeTimeSlot(index)} style={{ color: "red" }}>❌</button>}
                    </div>
                ))}
                <button type="button" onClick={addTimeSlot} style={{ marginTop: "10px" }}>➕ Add Time Slot</button>
                <br />
                <button type="submit" style={{ marginTop: "10px" }} disabled={loading}>{loading ? "Saving..." : "Save Schedule"}</button>
            </form>
        </div>
    );
};

export default ScheduleForm;
