//import React from "react";
import PropTypes from "prop-types";

const LanguageSelector = ({ onLanguageChange }) => {
    const languages = [
        { code: "sq", name: "Albanian" },
        { code: "af", name: "Afrikaans" },
        { code: "ar", name: "Arabic" },
        { code: "az", name: "Azerbaijani" },
        { code: "eu", name: "Basque" },
        { code: "be", name: "Belarusian" },
        { code: "bg", name: "Bulgarian" },
        { code: "ca", name: "Catalan" },
        { code: "zh_cn", name: "Chinese Simplified" },
        { code: "zh_tw", name: "Chinese Traditional" },
        { code: "hr", name: "Croatian" },
        { code: "cz", name: "Czech" },
        { code: "da", name: "Danish" },
        { code: "nl", name: "Dutch" },
        { code: "en", name: "English" },
        { code: "fi", name: "Finnish" },
        { code: "fr", name: "French" },
        { code: "gl", name: "Galician" },
        { code: "de", name: "German" },
        { code: "el", name: "Greek" },
        { code: "he", name: "Hebrew" },
        { code: "hi", name: "Hindi" },
        { code: "hu", name: "Hungarian" },
        { code: "is", name: "Icelandic" },
        { code: "id", name: "Indonesian" },
        { code: "it", name: "Italian" },
        { code: "ja", name: "Japanese" },
        { code: "kr", name: "Korean" },
        { code: "ku", name: "Kurmanji (Kurdish)" },
        { code: "la", name: "Latvian" },
        { code: "lt", name: "Lithuanian" },
        { code: "mk", name: "Macedonian" },
        { code: "no", name: "Norwegian" },
        { code: "fa", name: "Persian (Farsi)" },
        { code: "pl", name: "Polish" },
        { code: "pt", name: "Portuguese" },
        { code: "pt_br", name: "Português Brasil" },
        { code: "ro", name: "Romanian" },
        { code: "ru", name: "Russian" },
        { code: "sr", name: "Serbian" },
        { code: "sk", name: "Slovak" },
        { code: "sl", name: "Slovenian" },
        { code: "sp", name: "Spanish" },
        { code: "sv", name: "Swedish" },
        { code: "th", name: "Thai" },
        { code: "tr", name: "Turkish" },
        { code: "ua", name: "Ukrainian" },
        { code: "vi", name: "Vietnamese" },
        { code: "zu", name: "Zulu" },
    ];

    const handleChange = (event) => {
        onLanguageChange(event.target.value);
    };

    return (
        <div>
            <label htmlFor="language-selector">Choose a language:</label>
            <select id="language-selector" onChange={handleChange}>
                {languages.map((lang) => (
                    <option key={lang.code} value={lang.code}>
                        {lang.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

LanguageSelector.propTypes = {
    onLanguageChange: PropTypes.func.isRequired,
};

export default LanguageSelector;
