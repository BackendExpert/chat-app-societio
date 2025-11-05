import React, { useState } from "react";
import DefaultInput from "./DefaultInput";
import DateInput from "./DateInput";
import Dropdown from "./Dropdown";
import FileInput from "./FileInput";
import TextAreaInput from "./TextAreaInput";
import DefaultButton from "../Buttons/DefaultButton";

const TestForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        dob: "",
        gender: "",
        message: "",
        file: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(JSON.stringify(formData, null, 2));
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 py-10">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 border border-blue-100"
                style={{
                    backgroundImage:
                        "url('data:image/svg+xml;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQIHWP4//8/AwAI/AL+hw8bUQAAAABJRU5ErkJggg==')",
                    backgroundBlendMode: "overlay",
                }}
            >
                <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">
                    Test Blue Theme Form
                </h2>

                <DefaultInput
                    label="Full Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                />

                <DefaultInput
                    label="Email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                />

                <DateInput
                    label="Date of Birth"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    required
                />

                <Dropdown
                    label="Gender"
                    name="gender"
                    onChange={handleChange}
                    options={[
                        { value: "male", label: "Male" },
                        { value: "female", label: "Female" },
                        { value: "other", label: "Other" },
                    ]}
                />

                <TextAreaInput
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                />

                <FileInput
                    label="Upload File"
                    name="file"
                    onChange={handleChange}
                    accept="image/*"
                />

                <DefaultButton label="Submit" type="submit" />
            </form>
        </div>
    );
};

export default TestForm;
