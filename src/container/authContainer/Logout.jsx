"use client"

import { useState } from "react"
import { LogOut } from "lucide-react"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

export default function LogoutButton({ handleLogout }) {
    const [open, setOpen] = useState(false)



    return (
        <AlertDialog open={open} onOpenChange={setOpen}>
            {/* 🔘 Logout trigger */}
            <AlertDialogTrigger asChild>
                <Button
                    variant="ghost"
                    size="icon"
                    className="text-gray-300 hover:text-red-500"
                >
                    <LogOut className="h-5 w-5" />
                </Button>
            </AlertDialogTrigger>

            {/* 📌 Confirmation Modal */}
            <AlertDialogContent className="rounded-[8px] border border-gray-700 bg-[#1E1E1E] text-white shadow-xl p-0">
                {/* Full-width header */}
                <AlertDialogHeader className="bg-[#323338] px-8 py-4 rounded-t-[8px] m-0">
                    <AlertDialogTitle className="text-2xl  text-white font-semibold">
                        Logout
                    </AlertDialogTitle>
                </AlertDialogHeader>

                {/* Body */}
                <div className="m-0">
                    <AlertDialogDescription className="text-white text-md  px-8 py-2">
                        Are you sure you want to log out?
                    </AlertDialogDescription>
                </div>

                {/* Footer */}
                <AlertDialogFooter className="m-0 pb-4 pr-4 border-gray-700">
                    <AlertDialogCancel className="rounded-none bg-gray-800 text-gray-300 hover:bg-gray-700">
                        Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction
                        onClick={handleLogout}
                        className="rounded-none bg-red-600 hover:bg-red-700 text-white"
                    >
                        Logout
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
