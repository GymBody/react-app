import { useState } from "react";
import ScheduleForm from "../components/ScheduleForm";

const SchedulePage = () => {
    const [schedule, setSchedule] = useState([]);

    // Save new schedule
    const handleSave = (newSchedule) => {
        setSchedule(newSchedule);
    };

    // Group schedule by days
    const groupedSchedule = schedule.reduce((acc, slot) => {
        if (!acc[slot.day]) acc[slot.day] = [];
        acc[slot.day].push(slot);
        return acc;
    }, {});

    return (
        <div>
            <h1>Schedule Page</h1>
            <ScheduleForm onSave={handleSave} />

            <h2>Your Available Time Slots</h2>
            {Object.keys(groupedSchedule).length > 0 ? (
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
    );
};

export default SchedulePage;
