"use client"
import { Button } from '@/components/ui/button';
import { CldImage } from 'next-cloudinary';
import { CldUploadButton } from "next-cloudinary";
import Link from 'next/link';
import { useState } from 'react';
import TypeWriterComponent from "typewriter-effect"

export type UploadResult = {
  info: {
    public_id: string;
  };
  event: "success";
};

export default function Home() {
  const [imageId, setImageId] = useState("")
  return (
    <div className="flex flex-col justify-center items-center w-[90%]">
      <div className=" flex flex-col justify-center items-center h-[200px]">
      <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl space-y-5 font-extrabold">
      <h1 className='text-pink-500 pb-1'>PURE PIXELS</h1>
      </div>
     <div className='text-[16px] sm:text-2xl pb-1'>
     <h2>Discover the Essence of Pure Pixels</h2>
     </div>
      <div className="text-transparent bg-clip-text bg-gradient-to-r font-semibold from-purple-400 to-pink-500 text-[16px] sm:text-2xl">
                    <TypeWriterComponent options={{strings: [
                        "Generative Fill.",
                        "Blur Effect.",
                        "Pixelate Effect.",
                        "Convert To Gray Effect.",
                        ],
                        autoStart: true,
                        loop: true
                        }}/>
                    </div>
                     <div className='pt-3'>
                     <Button  
                     className="md:text-lg p-4 md:p-6 rounded-full font-semibold  bg-gradient-to-r from-purple-800 to-pink-500">
                          <Link href="/gallery">Start Now</Link>
                          </Button>
                     </div>
                </div>
                   
        <div className='pt-10'>
        <div className='flex px-5 sm:px-10 py-5 justify-end text-center text-[12px] md:text-[15px] border rounded-md border-gray-500 '>
          <p>Welcome to Pure Pixels. Where Every Image Tells a Story! Immerse yourself in a world of personalized photo editing, curated albums, and seamless organization. Craft your visual narrative by uploading, searching, and applying bespoke effects to your cherished memories. Favorite the moments that matter, and effortlessly shape your own photo story. With a platform designed for your creativity and expression, Pure Pixels invites you to explore the art of image editing. Your images, your way where every picture finds its perfect place.</p>
        </div>
        </div>
    </div>
   
  )
}

