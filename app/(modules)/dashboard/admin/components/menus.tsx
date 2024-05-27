"use client"
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarTrigger,
} from "@/components/ui/menubar"
import Link from "next/link"
import { usePathname } from "next/navigation";
import { TopMenuItem } from "../../components/menu/topMenu";



export function MenubarComponent() {
    const urlPath = usePathname();
    const isActive = (path: any) => urlPath === path;



    return (
        <Menubar className="">
            <TopMenuItem
                link="/dashboard/admin"
                title="Admin"
                className={isActive('/dashboard/admin/staff') ? 'bg-blue-300 text-white' : ''}
            />

            <MenubarMenu>
                <MenubarTrigger className={isActive('/dashboard/admin/staff') ? 'bg-blue-300 text-white' : ''}>
                    <Link href="/dashboard/admin/staff">Staff</Link>
                </MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>
                        <Link href="/dashboard/admin/staff">Staff</Link>
                    </MenubarItem>

                    <MenubarItem>
                        <Link href="/dashboard/admin/staff/staffleave">Staff Leave</Link>
                    </MenubarItem>

                    <MenubarSeparator />
                    <MenubarItem>
                        <Link href="/dashboard/admin/staff/staffattendance">Staff Attendance</Link>
                    </MenubarItem>


                </MenubarContent>
            </MenubarMenu>


            <TopMenuItem
                link="/dashboard/admin/accountant"
                title="Role"
                className={isActive('/dashboard/admin/staff') ? 'bg-blue-300 text-white' : ''}
            />
        </Menubar>
    )
}
