import React, { useState } from 'react';
import { Home, ChevronDown, X, Calendar } from 'lucide-react';
import logo from "../assets/logo.svg"
import { useNavigate } from 'react-router-dom';
export default function Dashboard() {
  // State hooks for form fields
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [experienceLevel, setExperienceLevel] = useState('');
  const [candidates, setCandidates] = useState([]);
  const [candidateInput, setCandidateInput] = useState('');
  const [endDate, setEndDate] = useState('');

  // Add candidate to the list
  const addCandidate = (e) => {
    if (e.key === 'Enter' && candidateInput.trim() !== '') {
      setCandidates((prevCandidates) => [...prevCandidates, candidateInput.trim()]);
      setCandidateInput('');
    }
  };

  // Remove candidate from the list
  const removeCandidate = (index) => {
    setCandidates((prevCandidates) => prevCandidates.filter((_, i) => i !== index));
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-16 bg-white border-r border-gray-200">
        <button className="p-4">
          <Home className="text-gray-600" />
        </button>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 p-4 flex justify-between items-center">
        <img className="h-8 w-auto" src={logo} alt="Logo" />
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">Contact</span>
            <div className="relative">
              <button className="flex items-center space-x-2 bg-gray-100 rounded-md px-3 py-2">
                <span>Your Name</span>
                <ChevronDown size={16} />
              </button>
            </div>
          </div>
        </header>

        {/* Dashboard content */}
        <main className="flex-1 p-8">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="space-y-2">
              <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700">Job Title</label>
              <input
                type="text"
                id="jobTitle"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                placeholder="Enter Job Title"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="jobDescription" className="block text-sm font-medium text-gray-700">Job Description</label>
              <textarea
                id="jobDescription"
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                placeholder="Enter Job Description"
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="experienceLevel" className="block text-sm font-medium text-gray-700">Experience Level</label>
              <div className="relative">
                <select
                  id="experienceLevel"
                  value={experienceLevel}
                  onChange={(e) => setExperienceLevel(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md appearance-none"
                >
                  <option value="">Select Experience Level</option>
                  <option value="entry">Entry Level</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="senior">Senior</option>
                </select>
                <ChevronDown size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="addCandidate" className="block text-sm font-medium text-gray-700">Add Candidate</label>
              <div className="flex flex-wrap items-center border border-gray-300 rounded-md p-2">
                {candidates.map((candidate, index) => (
                  <div key={index} className="bg-gray-100 rounded-full px-3 py-1 m-1 flex items-center">
                    <span>{candidate}</span>
                    <button onClick={() => removeCandidate(index)} className="ml-2 text-gray-500 hover:text-gray-700">
                      <X size={14} />
                    </button>
                  </div>
                ))}
                <input
                  type="text"
                  id="addCandidate"
                  value={candidateInput}
                  onChange={(e) => setCandidateInput(e.target.value)}
                  onKeyPress={addCandidate}
                  placeholder="xyz@gmail.com"
                  className="flex-1 px-2 py-1 outline-none"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">End Date</label>
              <div className="relative">
                <input
                  type="text"
                  id="endDate"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  placeholder="Select a Date"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
                <Calendar size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            <div>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
                Send
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
