'use client'
import React, { useContext, useState } from 'react'
import Flashcard from '../components/Flashcard'
import { Circles } from 'react-loader-spinner'
import { ThemeContext } from '@/Context'
import PdfUploadForm from '../components/PdfUploadForm'
import TextInput from '../components/TextInput'

const Page = () => {
  const {pdfData,setPdfData}=useContext(ThemeContext);
  const [cardData,setCardData]=useState(null) 
  const [loading,setLoading]=useState(false) 
  const systemPrompt = `
You are a flashcard creator, you take in text and create multiple flashcards from it. Make sure to create exactly 5 flashcards.
Both front and back should be one sentence long.front contains a question and back contains answer of that question
I don not want any string line or text.You should return in the following JSON format only:
{
  "flashcards": [
    {
      "front": "Front of the card",
      "back": "Back of the card"
    }
  ]
}`;
  const handleFlashCardGeneration = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "model":"meta-llama/llama-3.1-8b-instruct:free",
          // "model": "meta-llama/llama-3.1-405b",
          "messages": [
            { "role": "system", "content": systemPrompt },
            {"role": "user", "content": `${JSON.stringify(pdfData)}`},
          ],
          response_format: { type: 'json_object' },
        })
      });
      if (!response.ok) {
        const errorText = await response.text(); // Get error details
        setLoading(false);
        throw new Error(`Network response was not ok: ${errorText}`);
      }
      const data = await response.json();
      console.log(data)
      const content = data.choices[0].message.content;
      console.log(content)

      const jsonStartIndex = content.indexOf('{');
      const jsonEndIndex = content.lastIndexOf('}') + 1;
      const jsonString = content.slice(jsonStartIndex, jsonEndIndex);
  
      const parsedData = JSON.parse(jsonString);
      setCardData(parsedData.flashcards);
      console.log(cardData.flashcards)

      setLoading(false);
      // setLoading(false)
    } 
    catch (error) {
      setLoading(false);
      console.log(error.message)
    }
  };

  return (
    <section className='text-center text-3xl text-white'>
      <h1 className='text-5xl font-black'>Your Flash Cards</h1>
      {/* <PdfUploadForm/> */}
      <TextInput/>
      {
        pdfData &&
        <div className="flex items-center justify-center">
          <button
            disabled={loading}
            onClick={handleFlashCardGeneration}
            className={`group relative flex items-center justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-indigo-950 bg-white hover:bg-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-transform duration-150 ${loading ? 'cursor-not-allowed' : ''}`}
          >
            <div className={`inline-block text-center ${loading ? 'me-2' : 'hidden me-2'}`}>
              <Circles
                height="20"
                width="20"
                color="#ddddd"
                ariaLabel="loading"
              /> 
            </div>
            <p className={`text-lg ${!loading ? 'me-2' : 'hidden me-2'}`}> <i className='bi bi-magic'></i> We are ready to Generate your FlashCard</p>
          </button>
        </div>

       }
      {
        cardData
        ?
          <>
          <h1 className='mt-10'>Your Flash Cards</h1>
          <section className='flex  flex-wrap items-center justify-center text-center'>
            {
              cardData.map((data)=>(
                <Flashcard data={data} key={data.front} />
              ))
            }
          </section>
          </>

        :
        <></>
      }
    </section>
  )
}

export default Page