import { useState } from "react"
import { Paper, Typography } from "@mui/material"//"@material-ui/core";
import AvailabilityForm from "../components/AvailabilityForm"
import AvailabilitySchedule from "../components/AvailabilitySchedule"
//import dayjs from "dayjs";


const AvailabilityPage = () => {
    const [availability, setAvailability] = useState({});

    // Handle form submission
    const handleFormSubmit = (data) => {
        const updatedAvailability = { ...availability };
        const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        daysOfWeek.forEach((day) => {
            if (data[`${day}-start`] && data[`${day}-end`]) {
                updatedAvailability[day] = {
                    start: dayjs(data[`${day}-start`]).format("HH:mm"),
                    end: dayjs(data[`${day}-end`]).format("HH:mm"),
                };
            }
        });
        setAvailability(updatedAvailability);
        console.log("Updated Availability:", updatedAvailability);
    };

    return (
        <Paper style={{ padding: "20px", margin: "20px" }}>
            <Typography variant="h4" gutterBottom>
                Set Your Availability
            </Typography>
            <AvailabilityForm onSubmit={handleFormSubmit} />
            <AvailabilitySchedule availability={availability} />
        </Paper>
    );
};

export default AvailabilityPage;