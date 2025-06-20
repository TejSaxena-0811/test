// not using this file rn.

import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

const ArchitectureUpload = () => {
  const navigate = useNavigate();
  const [plantUMLFile, setPlantUMLFile] = useState(null);
  const [xmlFile, setXMLFile] = useState(null);

  const handlePrev = () => {
    navigate('/product-spec');
  };

  const handleNext = () => {
    // Placeholder for next step
    console.log("Next Step Clicked");
  };

  const handlePlantUMLChange = (e) => {
    setPlantUMLFile(e.target.files[0]);
  };

  const handleXMLChange = (e) => {
    setXMLFile(e.target.files[0]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-100 via-amber-100 to-teal-200 flex flex-col justify-between text-gray-800 p-6 space-y-12">
      <div className="max-w-4xl mx-auto bg-white/30 backdrop-blur-md rounded-3xl p-8 shadow-xl space-y-8 transition transform hover:scale-[1.01]">

        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Upload System Architecture Diagram</h2>
          {/* You can add InfoModal here if needed */}
        </div>

        {/* Instructions */}
        <p className="text-gray-400">Provide your system’s architecture diagram in one of the supported formats below.</p>

        {/* Upload Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* PlantUML Upload */}
          <div className="border-2 border-dashed border-gray-600 rounded-xl p-6 text-center space-y-4 bg-white/40">
            <p>Upload PlantUML File (.puml)</p>
            <input
              type="file"
              accept=".puml"
              onChange={handlePlantUMLChange}
              className="hidden"
              id="plantUML-upload"
            />
            <label htmlFor="plantUML-upload" className="cursor-pointer inline-block px-6 py-2 bg-teal-400 rounded-full hover:bg-blue-700">
              {plantUMLFile ? plantUMLFile.name : "Browse PlantUML File"}
            </label>
          </div>

          {/* XML Upload */}
          <div className="border-2 border-dashed border-gray-600 rounded-xl p-6 text-center space-y-4 bg-white/40">
            <p>Upload Draw.io XML File (.xml)</p>
            <input
              type="file"
              accept=".xml"
              onChange={handleXMLChange}
              className="hidden"
              id="xml-upload"
            />
            <label htmlFor="xml-upload" className="cursor-pointer inline-block px-6 py-2 bg-teal-400 rounded-full hover:bg-blue-700">
              {xmlFile ? xmlFile.name : "Browse XML File"}
            </label>
          </div>
        </div>

        {/* Other Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="text-sm text-black-300 bg-white/40 p-4 rounded-md">
            Don’t have a PlantUML file? Upload a `.dot` file and we’ll convert it for you.
            <span className="block mt-2 text-blue-400 underline cursor-pointer hover:text-blue-300">
              Generate PlantUML
            </span>
          </div>
          <div className="text-sm text-black-300 bg-white/40 p-4 rounded-md">
            Need to create an XML? Start fresh with draw.io.
            <span className="block mt-2 text-blue-400 underline cursor-pointer hover:text-blue-300">
              Open draw.io
            </span>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <button 
            onClick={handlePrev}
            className="flex items-center px-4 py-2 bg-amber-400 rounded-full hover:bg-amber-600">
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Back
          </button>

          <button 
            onClick={handleNext}
            className="flex items-center px-4 py-2 bg-teal-400 rounded-full hover:bg-teal-700">
            Next
            <ArrowRightIcon className="h-5 w-5 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArchitectureUpload;
