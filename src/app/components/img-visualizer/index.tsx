'use client';

// Modules
import { useState } from "react"

type Props = {
  imgs:string[];
  isMobile?:boolean;
}

export default function ImgVisualizer (props:Props) {

  // Props
  const { imgs, isMobile } = props;

  // Vars
  const [ selectedImg, setSelectedImg ] = useState(0);

  return (

    <div className="flex flex-col gap-4 w-full items-center">

      <img 
        src={imgs[selectedImg]} 
        alt="img1" 
        className={`rounded border border-gray-600 ${isMobile ? 'h-64' : ''}`} 
      />

      {imgs.length > 1 && <div className="flex gap-4 w-full flex-wrap justify-center">

        {imgs.map((img, index) => (
          <img
            src={img}
            alt={`img${index}`}
            key={index}
            className={`cursor-pointer rounded border border-gray-600 h-24`}
            onClick={() => setSelectedImg(index)}
          />
        ))}

      </div>}

    </div>

  )


}
