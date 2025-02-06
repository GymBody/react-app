import { useState } from 'react';

function BMICalculator() {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBmi] = useState(null);
    const [message, setMessage] = useState('');

    const calculateBMI = () => {
        if (weight > 0 && height > 0) {
            const bmiValue = (weight / (height * height)) * 703;
            setBmi(bmiValue.toFixed(1));

            if (bmiValue < 18.5) {
                setMessage('Underweight');
            } else if (bmiValue >= 18.5 && bmiValue < 25) {
                setMessage('Normal weight');
            } else if (bmiValue >= 25 && bmiValue < 30) {
                setMessage('Overweight');
            } else {
                setMessage('Obese');
            }
        } else {
            setMessage('Please enter valid weight and height.');
        }
    };

    return (
        <div>
            <h1>BMI Calculator</h1>
            <div>
                <label>Weight (lbs): </label>
                <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                />
            </div>
            <div>
                <label>Height (in): </label>
                <input
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                />
            </div>
            <button onClick={calculateBMI}>Calculate</button>

            {bmi && (
                <div>
                    <p>Your BMI is: {bmi}</p>
                    <p>Category: {message}</p>
                </div>
            )}
        </div>
    );
}

export default BMICalculator;