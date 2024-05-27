"use client"
import MlButton from './components/button';
import { MdLogin } from "react-icons/md";
import { DrawerDialogDemo } from './home/modal';
import { useState } from 'react';
import SignIn from './(auth)/signin';
import Button from './components/button';
import Link from 'next/link';
import { DropdownComponents } from './components/dropdown';
import { MenubarComponent } from './components/menubar';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@radix-ui/react-dropdown-menu';

const HomeLayout = () => {
    const [open, setOpen] = useState(false);

    const handleModal = () => {
        setOpen(false)
    }

    return (
        <div className='bg-white-300 shadow-lg py-5'>
            <div className="flex justify-between px-10  items-center">
                <h3 className='text-gradient font-bold text-[1.3rem]'>EduStack</h3>

                <div>
                    <MenubarComponent />
                </div>


                <div className="flex gap-x-4">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button className='text-black border-blue-500'>Login</Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-36">

                            <DropdownMenuItem className="text-center">
                                <Link href="/" className="text-center">Home</Link>
                            </DropdownMenuItem>

                        </DropdownMenuContent>
                    </DropdownMenu>

                    <Button className='text-white bg-blue-500'>Register</Button>
                </div>


            </div>
            {/* <DrawerDialogDemo
                open={open}
                title="Sign Up"
                onClose={handleModal}>
                <SignIn />
            </DrawerDialogDemo> */}
        </div>
    );
};

export default HomeLayout;
