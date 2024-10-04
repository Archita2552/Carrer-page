import React from 'react';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import JobCard from './components/JobCard';
import About from './components/About';

function App() {
  const jobData = Array(9).fill({
    title: 'Senior Manager - Strategy Planning & Execution',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed...',
  });

  return (
    <div className="App">
      <Header />
      <SearchBar />
      <div className="job-card-section">
        {jobData.map((job, index) => (
           <JobCard key={index} title={job.title} description={job.description} /> 
        ))} 
       </div> 
       <About /> 
    </div>
  );
}

export default App;
