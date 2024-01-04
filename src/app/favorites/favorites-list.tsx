"use client"
import { CloudinaryImage } from "@/components/cloudinary-image";
import { SearchResult } from "../gallery/page";
import { useEffect, useState } from "react";
import { ImageGrid } from "@/components/image-grid";



export default function FavoritesList({
    InitialResources,
}: {
    InitialResources: SearchResult[]
}) {

    const [resources, setResources] = useState(InitialResources);

    useEffect(() => {
        setResources(InitialResources)
    }, [InitialResources])

    return (
        <ImageGrid images={resources}
        getImage={(imageData:SearchResult) => {
            return (
                <CloudinaryImage
                key={imageData.public_id}
                width="400"
                height="300"
                imageData={imageData}
                alt="an image of something"
                onUnheart={(unheartedResource) => {
                    setResources((currentResources) => 
                        currentResources.filter(
                            (resource) => resource.public_id !== unheartedResource.public_id
                        )
                    )
                }}
            />
            )
        }}
        />
    )
}