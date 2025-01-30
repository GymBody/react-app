// src/components/ScheduleForm.js
import { useState } from "react";

const ScheduleForm = ({ schedule, setSchedule }) => {
    const [day, setDay] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");

    const handleAddTimeSlot = () => {
        if (!day || !startTime || !endTime) return alert("All fields are required!");

        const newSchedule = { ...schedule };
        if (!newSchedule[day]) newSchedule[day] = [];
        newSchedule[day].push({ startTime, endTime });

        setSchedule(newSchedule);
        setStartTime("");
        setEndTime("");
    };

    const handleDeleteSlot = (day, index) => {
        const newSchedule = { ...schedule };
        newSchedule[day].splice(index, 1);
        if (newSchedule[day].length === 0) delete newSchedule[day];
        setSchedule(newSchedule);
    };

    const handleDeleteDay = (day) => {
        const newSchedule = { ...schedule };
        delete newSchedule[day];
        setSchedule(newSchedule);
    };

    return (
        <div>
            <h2>Set Your Availability</h2>
            <label>Day:</label>
            <select value={day} onChange={(e) => setDay(e.target.value)}>
                <option value="">Select Day</option>
                {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((d) => (
                    <option key={d} value={d}>
                        {d}
                    </option>
                ))}
            </select>

            <label>Start Time:</label>
            <input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} />

            <label>End Time:</label>
            <input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} />

            <button onClick={handleAddTimeSlot}>Add Time Slot</button>

            <h2>Schedule</h2>
            {Object.keys(schedule).length === 0 ? (
                <p>No availability set.</p>
            ) : (
                <ul>
                    {Object.keys(schedule).map((day) => (
                        <li key={day}>
                            <strong>{day}</strong>
                            <button onClick={() => handleDeleteDay(day)}>Delete Day</button>
                            <ul>
                                {schedule[day].map((slot, index) => (
                                    <li key={index}>
                                        {slot.startTime} - {slot.endTime}{" "}
                                        <button onClick={() => handleDeleteSlot(day, index)}>Delete</button>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ScheduleForm;
