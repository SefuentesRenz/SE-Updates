import React from 'react';
import '../styles/lookforajob.css';
import Navbar from "../components/Navbar"; // ✅ Import the Navbar component

const jobs = [
    {
        id: 1,
        title: "Software Engineer",
        company: "Tech Innovators Inc.",
        location: "Davao City",
        type: "Full-time",
        salary: "₱50,000 - ₱70,000",
        description: "Responsible for developing web applications using modern technologies."
    },
    {
        id: 2,
        title: "UI/UX Designer",
        company: "Creative Minds Co.",
        location: "Cebu City",
        type: "Part-time",
        salary: "₱30,000 - ₱40,000",
        description: "Design user-friendly interfaces with focus on user experience."
    },
    {
        id: 3,
        title: "Data Analyst",
        company: "Data Solutions PH",
        location: "Manila",
        type: "Full-time",
        salary: "₱40,000 - ₱60,000",
        description: "Analyze data trends and provide insights for decision making."
    }
];

const LookForJob = () => {
    return (
        <div className="homebox">
      <Navbar /> {/* ✅ Navbar at the top */}

        <div className="job-list-container">
            <h1>Available Jobs</h1>
            <div className="job-list">
                {jobs.map((job) => (
                    <div key={job.id} className="job-card">
                        <h2>{job.title}</h2>
                        <p><strong>Company:</strong> {job.company}</p>
                        <p><strong>Location:</strong> {job.location}</p>
                        <p><strong>Type:</strong> {job.type}</p>
                        <p><strong>Salary:</strong> {job.salary}</p>
                        <p className="description">{job.description}</p>
                        <button className="apply-btn">Apply Now</button>
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
};

export default LookForJob;