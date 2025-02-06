import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HeightWeightForm = ({ userId }) => {
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Height & Weight submitted:", { userId, height, weight });

        // Example API call
        try {
            const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/user/physical-info`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ userId, height, weight }),
            });

            if (!response.ok) throw new Error("Failed to save data");

            console.log("Success:", await response.json());
            navigate("/dashboard"); // Redirect to another page after submission
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div>
            <h2>Enter Your Height and Weight</h2>
            <form onSubmit={handleSubmit}>
                <label>Height (cm):</label>
                <input
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    required
                />
                <label>Weight (kg):</label>
                <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    required
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default HeightWeightForm;
