import { useState } from "react";
import ScheduleForm from "../components/ScheduleForm";

const SchedulePage = () => {
    const [schedule, setSchedule] = useState([]);

    // Save the schedule from the form
    const handleSave = (newSchedule) => {
        setSchedule(newSchedule);
    };

    return (
        <div>
            <h1>Schedule Page</h1>
            <ScheduleForm onSave={handleSave} />

            <h2>Your Available Time Slots</h2>
            <ul>
                {schedule.map((slot, index) => (
                    <li key={index}>
                        {slot.start} - {slot.end}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SchedulePage;
