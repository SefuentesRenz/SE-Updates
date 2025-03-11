import React from "react";
import Navbar from "../components/Navbar"; // ✅ Import the Navbar component
import "../styles/home.css"; // ✅ Import the separate CSS file

const HomePage = () => {
  return (
    <div className="homebox">
      <Navbar /> {/* ✅ Navbar at the top */}
      
      <div className="welcome-section">
        <h1>Welcome to Alumni Portal</h1>
      </div>
      
      <footer className="footer">
        <p>© 2025 Alumni Portal. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;


// import React, { useState } from 'react';
// import '../styles/home.css';

// const Home = () => {
//     const [searchTerm, setSearchTerm] = useState('');
//     const [filteredJobs, setFilteredJobs] = useState([]);

//     const jobs = [
//         'Software Engineer',
//         'Cloud Developer',
//         'Project Manager',
//         'Data Analyst',
//         'UI/UX Designer',
//         'Network Administrator'
//     ];

//     const handleSearch = () => {
//         const filtered = jobs.filter(job =>
//             job.toLowerCase().includes(searchTerm.toLowerCase())
//         );
//         setFilteredJobs(filtered);
//     };

//     return (
//         <div className="home-container">
//             <header className="header">
//                 <h1>ALUMNI PORTAL</h1>
//                 <nav>
//                     <a href="#">Home</a> | <a href="#">Account</a> | <a href="#">Alumni Updates</a> |
//                     <a href="#">Reports</a> | <a href="#">Chats</a> | <a href="#">Job Posting</a>
//                 </nav>
//                 <button className="logout-btn">LOG OUT</button>
//             </header>

//             <div className="banner">
//                 <img src="/assets/uic.jpg" alt="UIC Building" className="banner-image" />
//             </div>

//             <div className="search-section">
//                 <h2>SEARCH</h2>
//                 <div className="search-box">
//                     <input
//                         type="text"
//                         placeholder="Search something..."
//                         value={searchTerm}
//                         onChange={(e) => setSearchTerm(e.target.value)}
//                     />
//                     <button onClick={handleSearch} className="search-btn">🔍</button>
//                 </div>

//                 {filteredJobs.length > 0 && (
//                     <div className="search-results">
//                         {filteredJobs.map((job, index) => (
//                             <p key={index}>{job}</p>
//                         ))}
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Home;













// import React, { useState } from "react";
// import Navbar from "../components/Navbar"; // ✅ Import the Navbar component
// import "../styles/home.css"; // ✅ Import the separate CSS file

// const HomePage = () => {
//     const [searchTerm, setSearchTerm] = useState('');
//     const [filteredJobs, setFilteredJobs] = useState([]);

//     const jobs = [
//         'Software Engineer',
//         'Cloud Developer',
//         'Project Manager',
//         'Data Analyst',
//         'UI/UX Designer',
//         'Network Administrator'
//     ];

//     const handleSearch = () => {
//         const filtered = jobs.filter(job =>
//             job.toLowerCase().includes(searchTerm.toLowerCase())
//         );
//         setFilteredJobs(filtered);
//     };

//     return (
//         <div className="homebox">
//             <Navbar /> {/* ✅ Navbar at the top */}

//             <div className="welcome-section">
//                 <h1>Welcome to Alumni Portal</h1>
//             </div>

//             <div className="search-section">
//                 <h2>SEARCH</h2>
//                 <div className="search-box">
//                     <input
//                         type="text"
//                         placeholder="Search something..."
//                         value={searchTerm}
//                         onChange={(e) => setSearchTerm(e.target.value)}
//                     />
//                     <button onClick={handleSearch} className="search-btn">🔍</button>
//                 </div>

//                 {filteredJobs.length > 0 && (
//                     <div className="search-results">
//                         {filteredJobs.map((job, index) => (
//                             <p key={index}>{job}</p>
//                         ))}
//                     </div>
//                 )}
//             </div>

//             <footer className="footer">
//                 <p>© 2025 Alumni Portal. All rights reserved.</p>
//             </footer>
//         </div>
//     );
// };

// export default HomePage;