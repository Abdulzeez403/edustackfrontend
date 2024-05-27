import { MenubarComponent } from "./components/menus";

interface IProps {
    children: React.ReactNode;
}

export default function AdminUserLayout({ children }: IProps) {
    return (
        <div>
            <MenubarComponent />

            <div className=' '>
                {children}

            </div>
        </div>
    );
}
