import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const slideshowDir = path.join(process.cwd(), 'public', 'slideshow');
    
    // Check if directory exists
    if (!fs.existsSync(slideshowDir)) {
      return NextResponse.json([]);
    }

    const files = fs.readdirSync(slideshowDir);
    
    // Filter for image files
    const images = files
      .filter(file => /\.(jpg|jpeg|png|webp|avif)$/i.test(file))
      .map(file => `/slideshow/${file}`);

    return NextResponse.json(images);
  } catch (error) {
    console.error('Error reading slideshow directory:', error);
    return NextResponse.json({ error: 'Failed to read images' }, { status: 500 });
  }
}
