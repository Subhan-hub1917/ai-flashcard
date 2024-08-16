// app/api/pdf-parser/route.js

import { NextResponse } from 'next/server';
import pdf from 'pdf-parse';

export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get('pdfFile');

    if (!file) {
      return NextResponse.json({ error: 'PDF file is required' }, { status: 400 });
    }

    const buffer = await file.arrayBuffer();

    // Parse the PDF buffer to extract text
    const data = await pdf(buffer);
    const text = data.text;

    // Return the parsed text in JSON format
    return NextResponse.json({ text });
  } catch (error) {
    console.error('Error processing PDF:', error);
    return NextResponse.json({ error: 'Error processing PDF' }, { status: 500 });
  }
}
