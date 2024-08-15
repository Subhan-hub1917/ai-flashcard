'use client';
import React, { useContext } from 'react';
import { useDropzone } from 'react-dropzone';
import * as pdfjsLib from 'pdfjs-dist/webpack.mjs'; // Ensure you are using the webpack version
import { ThemeContext } from '@/Context'; // Assuming Context path

function PdfDropzone() {
  const { pdfData, setPdfData } = useContext(ThemeContext);

  const handleDrop = async (acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];

      if (file.type !== 'application/pdf') {
        console.error('Only PDF files are allowed.');
        return;
      }

      const reader = new FileReader();

      reader.onload = async () => {
        const arrayBuffer = reader.result;

        // Configure pdfjs-dist worker
        pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

        try {
          // Parse the PDF document
          const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
          const numPages = pdf.numPages;
          let text = '';

          // Extract text from each page
          for (let i = 1; i <= numPages; i++) {
            const page = await pdf.getPage(i);
            const textContent = await page.getTextContent();
            text += textContent.items.map(item => item.str).join(' ') + '\n';
          }

          setPdfData(text);
          console.log(pdfData)
        } 
        catch (error) {
          console.error('Error parsing PDF:', error);
        }
      };

      reader.onerror = () => {
        console.error('Error reading file:', error);
      };

      reader.readAsArrayBuffer(file);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleDrop,
    accept: 'application/pdf',
    multiple: false,
  });

  return (
    <div {...getRootProps()} style={styles.dropzone}>
      <input {...getInputProps()} />
      {isDragActive ? (
      <p>Drop the files here &apos;...</p>
  ) : (
      <p>Drag &apos;n&apos; drop a PDF file here, or click to select one</p>
)}

    </div>

  );
}

const styles = {
  dropzone: {
    border: '2px dashed #007bff',
    borderRadius: '5px',
    padding: '20px',
    textAlign: 'center',
    cursor: 'pointer',
    color: '#007bff',
    margin: '20px',
  },
};

export default PdfDropzone;
