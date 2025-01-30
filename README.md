# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


## Debug the Weather object

```
    <div>
      <h1>Raw Weather Data</h1>
      <pre>{JSON.stringify(weatherData, null, 2)}</pre>
    </div>
```

https://openweathermap.org/forecast5


### **Availability Explanation of the Refactor**

1. **Separation of Concerns**:
   - `AvailabilityForm`: Handles the form logic and time pickers.
   - `AvailabilitySchedule`: Displays the current availability schedule.
   - `AvailabilityPage`: Combines the form and schedule components and manages the state.

2. **Reusability**:
   - The `AvailabilityForm` and `AvailabilitySchedule` components can be reused in other parts of the application.

3. **State Management**:
   - The `availability` state is managed in the `AvailabilityPage` component and passed down to `AvailabilitySchedule` as a prop.

4. **Props**:
   - `AvailabilityForm` receives an `onSubmit` prop to handle form submission.
   - `AvailabilitySchedule` receives the `availability` prop to display the schedule.

---

## Use Material-UI v5 (MUI)

Material-UI v5 (now called MUI) is fully compatible with Vite. You should migrate to MUI v5, as it is the latest version and has better support for modern tools like Vite.

Steps to Migrate to MUI v5:
Install MUI v5 Packages:

Replace @material-ui/core and @material-ui/pickers with MUI v5 packages:
```
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/lab @mui/x-date-pickers
```