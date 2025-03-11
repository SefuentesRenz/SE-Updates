import React, { useState } from 'react';
import '../styles/jobpost.css';
import Navbar from "../components/Navbar"; // ✅ Import the Navbar component

const JobPost = () => {
    const [jobDetails, setJobDetails] = useState('');
    const [skills, setSkills] = useState([]);
    const [tags, setTags] = useState([]);
    const [inputJobDetail, setInputJobDetail] = useState('');
    const [inputSkill, setInputSkill] = useState('');
    const [inputTag, setInputTag] = useState('');
    const [inputJobType, setInputJobType] = useState('');
    const [jobType, setJobType] = useState('');

    const handleAddJobDetails = () => {
        if (inputJobDetail.trim()) {
            setJobDetails(inputJobDetail);
            setInputJobDetail('');
        }
    };

    const handleAddSkill = () => {
        if (inputSkill.trim()) {
            setSkills([...skills, inputSkill]);
            setInputSkill('');
        }
    };

    const handleAddJobType = () => {
        if (inputJobType.trim()) {
            setJobType(inputJobType);
            setInputJobType('');
        }
    };

    const handleAddTag = () => {
        if (inputTag.trim()) {
            setTags([...tags, inputTag]);
            setInputTag('');
        }
    };

    return (

        <div className="homebox">
      <Navbar /> {/* ✅ Navbar at the top */}

        <div className="job-post-container">
            <h1>Create a Job Post</h1>
            <div className="job-form">
                <div className="form-content">

                <div className="JobDetails-section">
                        <h3>Job Details</h3>
                        <p>Add job details for the job position.</p>
                        <div className="input-group">
                            <input
                                type="text"
                                placeholder="Add job details"
                                value={inputJobDetail}
                                onChange={(e) => setInputJobDetail(e.target.value)}
                            />
                            <button onClick={handleAddJobDetails}>Add details</button>
                        </div>
                        <div className="skill-list">
                            {jobDetails && <span className="skill-item">{jobDetails}</span>}
                        </div>
                    </div>

                    <div className="skills-section">
                        <h3>Location</h3>
                        <p>Add job location.</p>
                        <div className="input-group">
                            <input
                                type="text"
                                placeholder="Enter the location"
                                value={inputSkill}
                                onChange={(e) => setInputSkill(e.target.value)}
                            />
                            <button onClick={handleAddSkill}>Add location</button>
                        </div>
                        <div className="skill-list">
                            {skills.map((skill, index) => (
                                <span key={index} className="skill-item">{skill}</span>
                            ))}
                        </div>
                    </div>

                    <div className="JobType-section">
                        <h3>Job Type</h3>
                        <p>Choose job type.</p>
                        <div className="input-group">
                            <input
                                type="text"
                                placeholder="e.g Full-time, Part-time, Contract"
                                value={inputJobType}
                                onChange={(e) => setInputJobType(e.target.value)}
                            />
                            <button onClick={handleAddJobType}>Add job type</button>
                        </div>
                        <div className="skill-list">
                            {jobType && <span className="skill-item">{jobType}</span>}
                        </div>
                    </div>

                    <div className="tags-section">
                        <h3>Salary</h3>
                        <p>Add average salary</p>
                        <div className="input-group">
                            <input
                                type="text"
                                placeholder="Enter Salary"
                                value={inputTag}
                                onChange={(e) => setInputTag(e.target.value)}
                            />
                            <button onClick={handleAddTag}>Add salary</button>
                        </div>
                        <div className="tag-list">
                            {tags.map((tag, index) => (
                                <span key={index} className="tag-item">{tag}</span>
                            ))}
                        </div>
                    </div>

                    <div className="next-section">
                        <button className="next-btn">Post Job</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default JobPost;