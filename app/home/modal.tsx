import * as React from "react"

import { cn } from "@/lib/utils"
// import { useMediaQuery } from "@/hooks/use-media-query"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"



interface IProps {
    children: React.ReactNode;
    open: boolean;
    onClose: () => void;
    title: string
}

export function DrawerDialogDemo({ children, open, onClose, title }: IProps) {



    return (
        <Drawer open={open} onOpenChange={onClose}>
            <DrawerTrigger asChild>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader className="text-left">
                    {/* <DrawerTitle>Edit profile</DrawerTitle> */}
                    <DrawerDescription>
                        {title}
                    </DrawerDescription>
                </DrawerHeader>
                {children}
                <DrawerFooter className="pt-2">
                    <DrawerClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}


