'use client';
import React, { useCallback, useContext, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import * as pdfjsLib from 'pdfjs-dist/webpack';
import { ThemeContext } from '@/Context';

function PdfDropzone() {
    const {pdfData,setPdfData}=useContext(ThemeContext);
    const onDrop = useCallback((acceptedFiles) => {
        acceptedFiles.forEach((file) => {
            const reader = new FileReader();

            reader.onabort = () => console.log('File reading was aborted');
            reader.onerror = () => console.log('File reading has failed');
            reader.onload = async () => {
                const arrayBuffer = reader.result;
                // Configure pdfjs-dist worker
                pdfjsLib.GlobalWorkerOptions.workerSrc = 
                    `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

                try {
                    // Use pdfjs-dist to extract the content
                    const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
                    const page = await pdf.getPage(1);
                    const textContent = await page.getTextContent();
                    const text = textContent.items.map(item => item.str).join(' ');

                    console.log('Extracted Text:', text);
                    setPdfData(text)
                } catch (error) {
                    console.error('Error parsing PDF:', error);
                }
            };

            reader.readAsArrayBuffer(file);
        });
    }, [setPdfData]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: 'application/pdf', // Accept only PDF files
        multiple: false, // Accept only one file at a time
    });

    return (
        <div {...getRootProps()} style={styles.dropzone}>
            <input {...getInputProps()} />
            {isDragActive ? (
                <p>Drop the files here ...</p>
            ) : (
                <p>Drag 'n' drop a PDF file here, or click to select one</p>
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
