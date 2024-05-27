import {
    Menubar,
    MenubarCheckboxItem,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
} from "@/components/ui/menubar"
import Link from "next/link"

export function ManagementNavbar() {
    return (
        <Menubar className="">
            <MenubarMenu>
                <MenubarTrigger>
                    <Link href="/dashboard/management">Classes</Link>

                </MenubarTrigger>

            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger>
                    <Link href="/dashboard/management/session">Session</Link>

                </MenubarTrigger>
            </MenubarMenu>




        </Menubar>
    )
}
