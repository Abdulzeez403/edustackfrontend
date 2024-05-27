import { MenubarMenu, MenubarTrigger } from '@/components/ui/menubar'
import { Link } from 'lucide-react'
import React from 'react'


interface ITopMenuProps {
    link: string,
    title: string,
    className: any

}



export const TopMenuItem = ({ link, title, className }: ITopMenuProps) => {
    return (
        <MenubarMenu>
            <MenubarTrigger className={`${className}`}>
                <Link href={link}>{title}</Link>
            </MenubarTrigger>
        </MenubarMenu>
    )

}


