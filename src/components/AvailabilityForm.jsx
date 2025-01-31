//import React from "react";
import { useForm, Controller } from "react-hook-form"
import { /* TextField, */ Button, Typography, Grid } from "@mui/material"// "@material-ui/core";
import { TimePicker } from "@mui/x-date-pickers"//"@material-ui/pickers";
//import dayjs from "dayjs";

const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const AvailabilityForm = ({ onSubmit }) => {
    const { control, handleSubmit } = useForm();

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3}>
                {daysOfWeek.map((day) => (
                    <Grid item xs={12} sm={6} key={day}>
                        <Typography variant="h6">{day}</Typography>
                        <Controller
                            name={`${day}-start`}
                            control={control}
                            defaultValue={null}
                            render={({ field }) => (
                                <TimePicker
                                    {...field}
                                    label="Start Time"
                                    value={field.value || null}
                                    onChange={(time) => field.onChange(time)}
                                //  fullWidth
                                />
                            )}
                        />
                        <Controller
                            name={`${day}-end`}
                            control={control}
                            defaultValue={null}
                            render={({ field }) => (
                                <TimePicker
                                    {...field}
                                    label="End Time"
                                    value={field.value || null}
                                    onChange={(time) => field.onChange(time)}
                                // fullWidth
                                />
                            )}
                        />
                    </Grid>
                ))}
            </Grid>
            <Button type="submit" variant="contained" color="primary" style={{ marginTop: "20px" }}>
                Save Availability
            </Button>
        </form>
    );
};

export default AvailabilityForm;