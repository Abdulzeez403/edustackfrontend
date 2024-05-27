// components/DrawerComponent.tsx
import React from 'react';
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";

interface DrawerComponentProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    description: string;
    children: React.ReactNode;
}

export const DrawerComponent: React.FC<DrawerComponentProps> = ({ isOpen, onClose, title, description, children }) => {
    return (
        <Sheet open={isOpen} onOpenChange={onClose}  >
            <SheetContent className='w-[800px]'>
                <SheetHeader>
                    <SheetTitle>{title}</SheetTitle>
                    <SheetDescription>{description}</SheetDescription>
                </SheetHeader>
                <div className="p-4">
                    {children}
                </div>
                <SheetFooter>
                    {/* <SheetClose asChild>
                        <Button type="submit">Save changes</Button>
                    </SheetClose> */}
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
};
