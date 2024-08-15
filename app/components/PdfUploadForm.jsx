import { ThemeContext } from '@/Context';
import React, { useContext, useState } from 'react';
import { Circles } from 'react-loader-spinner';

function PdfUploadForm() {
  const [file, setFile] = useState(null);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
    const [buffering,setBuffering]=useState(false);
  const { pdfData, setPdfData } = useContext(ThemeContext);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setFile(event.dataTransfer.files[0]);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setBuffering(true)
    if (!file) {
      setError('Please select a PDF file');
      setBuffering(false)
      return;
    }

    const formData = new FormData();
    formData.append('pdfFile', file);

    try {
      const res = await fetch('/api/pdf-parser', {
        method: 'POST',
        body: formData,
      });

      const result = await res.json();

      if (res.ok) {
        setResponse(result.text);
        setPdfData(result.text);
        setError(null);
        setBuffering(false)
      } else {
        setBuffering(false)
        setResponse(null);
        setError(result.error);
      }
    } catch (err) {
        setBuffering(false)
      console.error('Error submitting form:', err);
      alert('Error submitting form');
    }
  };

  return (
    <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-8">
      <div>
        <h1 className="text-center text-3xl font-extrabold text-white">Upload PDF</h1>
      </div>
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div
          className="flex items-center justify-center w-full p-6 border-2 border-dashed border-gray-300 rounded-md cursor-pointer hover:border-indigo-500 focus:outline-none"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <label
            htmlFor="file-upload"
            className="text-center text-white"
          >
            {file ? (
              <span>{file.name}</span>
            ) : (
              <span>Drag and drop a PDF file here or click to upload</span>
            )}
          </label>
          <input
            id="file-upload"
            type="file"
            accept="application/pdf"
            onChange={handleFileChange}
            className="hidden"
          />
        </div>

        <div>
          <button
            disabled={buffering}
            type="submit"
            className="group relative w-full flex items-center justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <div className={`inline-block ${buffering==true ?'me-2':'hidden me-2'}`}>
              <Circles
                height="20"
                width="20"
                color="#ffffff"
                ariaLabel="loading"
              /> 
            </div>
            <p>
                Submit PDF
            </p>
          </button>
        </div>
      </form>
      
    </div>
  </div>
  );
}

export default PdfUploadForm;
