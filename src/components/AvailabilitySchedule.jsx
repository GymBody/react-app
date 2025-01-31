//import React from "react";
import { Typography, Grid, Paper } from "@mui/material"//"@material-ui/core";

const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const AvailabilitySchedule = ({ availability }) => {
    return (
        <Paper style={{ padding: "20px", marginTop: "40px" }}>
            <Typography variant="h4" gutterBottom>
                Your Availability Schedule
            </Typography>
            <Grid container spacing={3}>
                {daysOfWeek.map((day) => (
                    <Grid item xs={12} sm={6} key={day}>
                        <Typography variant="h6">{day}</Typography>
                        {availability[day] ? (
                            <Typography>
                                {availability[day].start} - {availability[day].end}
                            </Typography>
                        ) : (
                            <Typography color="textSecondary">Not available</Typography>
                        )}
                    </Grid>
                ))}
            </Grid>
        </Paper>
    );
};

export default AvailabilitySchedule;