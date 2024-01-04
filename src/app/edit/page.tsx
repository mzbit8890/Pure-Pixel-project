"use client"


import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CldImage } from "next-cloudinary";
import { useState } from "react";

export default function EditPage({
  searchParams: { publicId }
}: {
  searchParams: {
    publicId: string;
  };
}) {
  const [transformation, setTransformation] = useState<
    undefined | "generative-fill" | "blur" | "grayscale" | "pixelate"
  >();

  const [pendingPrompt, setPendingPrompt] = useState("");
  const [prompt, setPrompt] = useState("");

  // Original image properties
  const originalImageProps = {
    src: publicId,
    width: 300,
    height: 200,
    alt: "Original Image"
  };

  // Transformed image properties
  const transformedImageProps =
    transformation &&
    (transformation === "generative-fill"
      ? {
          width: 1800,
          height: 1200,
          crop: "pad",
          fillBackground: { prompt }
        }
      : transformation === "blur"
      ? { blur: "800" }
      : transformation === "grayscale"
      ? { grayscale: true }
      : transformation === "pixelate"
      ? { pixelate: true }
      : {});

  return (
    <section>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">Edit</h1>
        </div>

        <div className="flex gap-4 flex-wrap ">
          <Button variant="ghost" onClick={() => setTransformation(undefined)}>
            Clear All
          </Button>
          <div className="flex flex-col gap-4">
            <Button
              onClick={() => {
                setTransformation("generative-fill");
                setPrompt(pendingPrompt);
              }}
            >
              Apply Generative Fill
            </Button>
            <Label>Prompt</Label>
            <Input
              value={pendingPrompt}
              onChange={(e) => setPendingPrompt(e.currentTarget.value)}
            />
          </div>
          <Button onClick={() => setTransformation("blur")}>Apply Blur</Button>
          <Button onClick={() => setTransformation("grayscale")}>
            Convert to Gray
          </Button>
          <Button onClick={() => setTransformation("pixelate")}>
            Convert to Pixels
          </Button>
         
        </div>

        <div className="grid grid-cols-2 gap-12">
          {/* Original Image */}
          <CldImage {...originalImageProps} />

          {/* Transformed Image */}
          {transformedImageProps && (
            <CldImage
              {...originalImageProps}
              {...transformedImageProps}
              alt="Transformed Image"
            />
          )}
        </div>
      </div>
    </section>
  );
}


  