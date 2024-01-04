"use client"
import { ImageGrid } from "@/components/image-grid";

import { CloudinaryImage } from "@/components/cloudinary-image";
import { SearchResult } from "@/app/gallery/page";



export default function GalleryGrid({images}:{images:SearchResult[]}) {
    return (
                <ImageGrid
                    images={images}
                    getImage={(imageData:SearchResult) => {
                        return (
                            <CloudinaryImage
                                key={imageData.public_id}
                                width="400"
                                height="300"
                                imageData={imageData}
                                alt="an image of something"
                            />
                        )
                    }} 
                    />
    )
}
