import { FolderPlus, Pencil, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { AddToAlbumDialog } from "@/components/add-to-album-dialog"
import { Menu } from "lucide-react"
import { SearchResult } from "@/app/gallery/page"
import { useState } from "react"
import Link from "next/link"

export function ImageMenu({ image }: { image: SearchResult }) {

    const [open, setOpen] = useState(false)

    return (
        <div className="absolute top-2 right-2">
            <DropdownMenu open={open} onOpenChange={setOpen}>
                <DropdownMenuTrigger asChild>
                    <Button variant="secondary" className="w-4 h-4 p-0 sm:w-8 sm:h-8 sm:p-0">
                        <Menu />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-36 sm:w-40">
                    <DropdownMenuItem asChild >
                        <AddToAlbumDialog image={image} onClose={() => setOpen(false)} />
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild >
                    <Button className="cursor-pointer flex justify-start pl-4"
                    variant="ghost" 
                    asChild>
                        <Link 
                        href={`/edit?publicId=${encodeURIComponent(image.public_id)}`}>
                            <Pencil className="mr-2 w-4 h-4"/>
                            Edit
                        </Link>
                        </Button>
                    </DropdownMenuItem>

                </DropdownMenuContent>
            </DropdownMenu>
        </div>

    )
}
