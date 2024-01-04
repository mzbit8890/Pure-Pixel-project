"use client"

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export function ForceRefresh () {
    const router = useRouter()
    useEffect(() => {
       router.refresh()
    }, [])

    return <></>
}