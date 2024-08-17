
import { ThemeContext } from '@/Context';
import React, { useContext } from 'react'

const TextInput = () => {
    
  const { pdfData, setPdfData } = useContext(ThemeContext);
  return (
    <section className="flex items-center justify-center">
    <div className=" p-8 rounded-lg w-full max-w-md">
        {/* <h2 className="text-2xl font-semibold mb-6 ">Enter Topic Name</h2> */}
        <form className="space-y-4">
            <div>
                {/* <label for="topic-name" className="block text-sm font-medium mb-2">Topic Name</label> */}
                <textarea type="text" id="topic-name" name="topic-name" placeholder="Enter Topic or Paragraph"
                    value={pdfData} onChange={(e)=>setPdfData(e.target.value)}
                    className="text-indigo-950 font-medium text-sm md:text-lg w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    required/>
            </div>
            {/* <button type="submit"
                className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
                Submit
            </button> */}
        </form>
    </div>
</section>
  )
}

export default TextInput