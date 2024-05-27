"use client"
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import React, { useState } from 'react';
import Image from "next/image"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LuLayoutDashboard } from "react-icons/lu";
import { FaUserTie } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { MdAccountBalance } from "react-icons/md";
import { MdMenuOpen } from "react-icons/md";
import { PiExam } from "react-icons/pi";
import { GrUserManager } from "react-icons/gr";
import { SiGoogleclassroom } from "react-icons/si";
import { PiChalkboardTeacher } from "react-icons/pi";


interface IProps {
    children: React.ReactNode;
}
interface MenuItemIProps {
    title: string;
    icon?: React.ReactNode;
    onClick?: () => void;
    suffix: React.ReactNode;
    link: string
}

interface SubMenuIProps {
    title: any
    prefix: any
}

export const SidebarComponent = ({ children }: IProps) => {

    const [collapsed, setCollapsed] = useState(false);
    const urlPath = usePathname();
    const courseId = urlPath.split('/')[2];

    const CustomMenuItem = ({ title, icon, onClick, suffix, link }:
        MenuItemIProps) => {
        const isActive = urlPath === link;
        return (
            <Link href={link} legacyBehavior >
                <MenuItem icon={icon}
                    className={`py-[-1rem] ${isActive ? ' bg-white text-blue-400' : 'text-white'}`} >
                    <span className='text-semibold '>{title}</span>
                    {suffix && <span style={{ marginLeft: 'auto', color: "red", backgroundColor: "red" }}>{suffix}</span>}
                </MenuItem>

            </Link>


        )
    }

    const CustomSubMenuItem = ({ title, prefix }: SubMenuIProps) => {
        return (
            <div style={{ display: 'flex', height: "100" }}>
                <Menu>
                    <SubMenu prefix={prefix} label={title} component="div">
                        <MenuItem> Pie charts</MenuItem>
                        <MenuItem> Line charts</MenuItem>
                        <MenuItem> Bar charts</MenuItem>
                    </SubMenu>
                </Menu>
            </div>
        )

    }



    return (
        <div style={{ display: 'flex', height: "100vh", overflow: 'hidden' }}>


            <Sidebar
                collapsed={collapsed}
                backgroundColor="skyblue"
                transitionDuration={1000}
                rootStyles={{
                    background:
                        'linear-gradient(180deg, rgba(166,240,255,1) 0%, rgba(220,250,255,1) 49%, rgba(230,252,255,1) 100%)',
                }}
            >
                <div className='flex justify-between align-center p-2 pb-3'>
                    <div>
                        {/* <Image src={Logo} alt="Logo" width={50} height={50} className='rounded-md' /> */}

                        {/* <h4 className='text-white'>SMS</h4> */}
                    </div>

                    <MdMenuOpen onClick={() => setCollapsed(!collapsed)} size={30} />
                </div>


                <Menu>
                    <CustomMenuItem
                        link={"/dashboard"}
                        title="Dashboard"
                        suffix
                        icon={<LuLayoutDashboard color="primary" />}
                    />
                    <CustomMenuItem
                        link={"/dashboard/management"}
                        title="Management"
                        suffix
                        icon={<GrUserManager color="primary" />}
                    />
                    <CustomMenuItem
                        link={"/dashboard/admin"}
                        title="Admintrators"
                        suffix
                        icon={<FaUserTie color="primary" />}
                    />

                    <CustomMenuItem
                        link={"/dashboard/accountant"}
                        title="Accountants"
                        suffix
                        icon={<MdAccountBalance color="primary" />}
                    />

                    <CustomMenuItem
                        link={"/dashboard/accountant"}
                        title="Academic"
                        suffix
                        icon={<MdAccountBalance color="primary" />}
                    />

                    <CustomMenuItem
                        link={"/dashboard/exam"}
                        title="Examination"
                        suffix
                        icon={<PiExam color="primary" />}
                    />
                    <CustomMenuItem
                        link={"/dashboard/staff"}
                        title="Staff"
                        suffix
                        icon={<PiChalkboardTeacher color="primary" />}
                    />
                    <CustomMenuItem
                        link={"/dashboard/accountant"}
                        title="Student"
                        suffix
                        icon={<MdAccountBalance color="primary" />}
                    />
                    <CustomMenuItem
                        link={"/dashboard/exam"}
                        title="Classes"
                        suffix
                        icon={<SiGoogleclassroom color="primary" />}
                    />
                    {/* 
                    <CustomSubMenuItem title="Examination"
                        prefix={<PiExam color="primary" />}
                    /> */}



                    <div className='block pt-[60px]'>
                        <CustomMenuItem
                            link={"/courses"}
                            title="Profile"
                            suffix
                            icon={<CgProfile color="primary" />}
                        />
                        <CustomMenuItem
                            link={"/courses"}
                            title="Setting"
                            suffix
                            icon={<IoSettingsOutline color="primary" />}
                        />
                        <CustomMenuItem
                            link={"/courses"}
                            title="Logs"
                            suffix
                            icon={<LuLayoutDashboard color="primary" />}
                        />

                    </div>
                </Menu>


            </Sidebar>

            <div style={{ display: "block", width: "100%", overflow: "auto" }}>
                <div className="p-5">
                    {children}
                </div>
            </div>

        </div>
    );
}
