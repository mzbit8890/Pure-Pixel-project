"use client"
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { CldUploadButton, CldUploadWidgetResults } from "next-cloudinary";
import { useRouter } from "next/navigation";
import { UploadResult } from "../page";


export default function UploadButton() {
    const router = useRouter()
    return (
        <div>
            <Button asChild> 
                <CldUploadButton
                    onUpload={(result: CldUploadWidgetResults) => {
                       
                        console.log("refresh")
                        setTimeout(() => {
                        router.refresh()
                        }, 1000)


                    }}
                    uploadPreset="nzybjbip" >
                        <div className="flex gap-2 items-center">
                    <Upload /> 
                    Upload
                    </div>
                </CldUploadButton>
        </Button>
        </div>
    )
}


