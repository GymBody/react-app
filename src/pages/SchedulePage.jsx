// src/pages/SchedulePage.js
import React, { useState } from "react";
import ScheduleForm from "../components/ScheduleForm";

const SchedulePage = () => {
    const [schedule, setSchedule] = useState({});

    return (
        <div>
            <h1>Manage Your Schedule</h1>
            <ScheduleForm schedule={schedule} setSchedule={setSchedule} />
        </div>
    );
};

export default SchedulePage;
