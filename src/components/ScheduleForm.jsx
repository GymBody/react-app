import { useState } from "react";

const ScheduleForm = ({ onSave }) => {
    const [timeSlots, setTimeSlots] = useState([{ start: "", end: "" }]);

    // Function to handle input changes
    const handleChange = (index, field, value) => {
        const updatedSlots = [...timeSlots];
        updatedSlots[index][field] = value;
        setTimeSlots(updatedSlots);
    };

    // Function to add a new time slot
    const addTimeSlot = () => {
        setTimeSlots([...timeSlots, { start: "", end: "" }]);
    };

    // Function to remove a time slot
    const removeTimeSlot = (index) => {
        const updatedSlots = timeSlots.filter((_, i) => i !== index);
        setTimeSlots(updatedSlots);
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(timeSlots); // Send data to parent component
    };

    return (
        <div>
            <h2>Set Your Available Time Slots</h2>
            <form onSubmit={handleSubmit}>
                {timeSlots.map((slot, index) => (
                    <div key={index} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <input
                            type="time"
                            value={slot.start}
                            onChange={(e) => handleChange(index, "start", e.target.value)}
                            required
                        />
                        <span>to</span>
                        <input
                            type="time"
                            value={slot.end}
                            onChange={(e) => handleChange(index, "end", e.target.value)}
                            required
                        />
                        {index > 0 && (
                            <button type="button" onClick={() => removeTimeSlot(index)} style={{ color: "red" }}>
                                ❌
                            </button>
                        )}
                    </div>
                ))}
                <button type="button" onClick={addTimeSlot} style={{ marginTop: "10px" }}>
                    ➕ Add Time Slot
                </button>
                <br />
                <button type="submit" style={{ marginTop: "10px" }}>Save Schedule</button>
            </form>
        </div>
    );
};

export default ScheduleForm;
