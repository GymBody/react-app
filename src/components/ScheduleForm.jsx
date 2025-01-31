import { useState } from "react";

const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const ScheduleForm = ({ onSave }) => {
    const [timeSlots, setTimeSlots] = useState([{ day: "", start: "", end: "" }]);

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
        const updatedSlots = timeSlots.filter((_, i) => i !== index);
        setTimeSlots(updatedSlots);
    };

    // Submit the schedule
    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(timeSlots);
    };

    return (
        <div>
            <h2>Set Your Available Time Slots</h2>
            <form onSubmit={handleSubmit}>
                {timeSlots.map((slot, index) => (
                    <div key={index} style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                        {/* Select Day */}
                        <select value={slot.day} onChange={(e) => handleChange(index, "day", e.target.value)} required>
                            <option value="">Select Day</option>
                            {weekdays.map((day) => (
                                <option key={day} value={day}>{day}</option>
                            ))}
                        </select>

                        {/* Select Time */}
                        <input type="time" value={slot.start} onChange={(e) => handleChange(index, "start", e.target.value)} required />
                        <span>to</span>
                        <input type="time" value={slot.end} onChange={(e) => handleChange(index, "end", e.target.value)} required />

                        {/* Remove Button */}
                        {index > 0 && (
                            <button type="button" onClick={() => removeTimeSlot(index)} style={{ color: "red" }}>
                                ❌
                            </button>
                        )}
                    </div>
                ))}

                {/* Add Time Slot Button */}
                <button type="button" onClick={addTimeSlot} style={{ marginTop: "10px" }}>
                    ➕ Add Time Slot
                </button>

                <br />
                {/* Save Button */}
                <button type="submit" style={{ marginTop: "10px" }}>Save Schedule</button>
            </form>
        </div>
    );
};

export default ScheduleForm;
