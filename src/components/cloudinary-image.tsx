"use client"

import { Heart } from "lucide-react"
import { CldImage, CldImageProps } from "next-cloudinary"
import { useState, useTransition } from "react"
import { FullHeart } from "@/components/icons/full-heart"
import { SearchResult } from "@/app/gallery/page"
import { SetAsFavoriteAction } from "@/app/gallery/actions"
import { ImageMenu } from "./image-menu"

export function CloudinaryImage(
    props: {
        imageData:SearchResult; 
        onUnheart?: (unheartedResource: SearchResult) => void
    } & Omit<CldImageProps, "src">) {
    const [transition, startTransition] = useTransition()
    const {imageData, onUnheart} = props
    // const isFavorited = imageData.tags.includes("favorite")

    const [isFavorited, setIsFavorited] = useState(
        imageData.tags && imageData.tags.includes("favorite")
        )
 

    return (
        <div className="relative">
            <CldImage {...props} src={imageData.public_id} />
            {isFavorited ? (
                <FullHeart 
                    onClick={() => {
                        onUnheart?.(imageData)
                    setIsFavorited(false)
                    startTransition(() => {
                        SetAsFavoriteAction(imageData.public_id, false)


                    })
                }}
                
                    className="absolute top-2 left-2 hover:text-white    text-red-500 cursor-pointer" />

     ) : (<Heart onClick={() => {
                    setIsFavorited(true)
                    startTransition(() => {
                        SetAsFavoriteAction(imageData.public_id, true)

                    })
                }}
                    className="absolute top-2 left-2 hover:text-red-500 cursor-pointer" />
           )}
           <ImageMenu image={imageData}/>
        </div>
    )
}



