import { ManagementNavbar } from "./navlayout";

interface IProps {
    children: React.ReactNode;
}

export default function ManagementLayout({ children }: IProps) {
    return (
        <div>
            <ManagementNavbar />

            <div className=' '>
                {children}

            </div>
        </div>
    );
}
