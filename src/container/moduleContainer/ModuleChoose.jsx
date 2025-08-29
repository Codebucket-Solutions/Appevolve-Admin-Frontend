import ModuleCard from '@/components/moduleCard/ModuleCard';
import React from 'react';
import rectangle_image from '../../assets/modulechoose/module_choose_rectangle.png';
import logo from '../../assets/logos/rect_logo.png'
import square_logo from '../../assets/logos/square_logo.png'

const ModuleChooseContainer = (props) => {
    const modules = [
        {
            imageUrl: rectangle_image,
            title: "Assessment Engine",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
            submenus: ["Submenu 1", "Submenu 1", "Submenu 1", "Submenu 1"],
            badgeColor: "bg-orange-500",
            badgeText: "S"
        },
        {
            imageUrl: rectangle_image,
            title: "Design Engine",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
            submenus: ["Submenu 1", "Submenu 1", "Submenu 1", "Submenu 1"],
            badgeColor: "bg-green-500",
            badgeText: "S"
        },
        {
            imageUrl: rectangle_image,
            title: "Code Maestro",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
            submenus: ["Submenu 1", "Submenu 1", "Submenu 1", "Submenu 1"],
            badgeColor: "bg-blue-500",
            badgeText: "S"
        },
        {
            imageUrl: rectangle_image,
            title: "Network Automation Engine",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
            submenus: ["Submenu 1", "Submenu 1", "Submenu 1", "Submenu 1"],
            badgeColor: "bg-purple-500",
            badgeText: "S"
        }
    ];


    return (
        <div className='bg-black text-white min-h-screen font-sans w-full flex flex-col'>
            {/* Top Navbar */}
            <div className='bg-[#151515] h-[6vh] flex items-center'>
                <img
                    src={logo}
                    alt="User Avatar"
                    className=" h-6 m-4"
                />
            </div>

            <div className="flex flex-col flex-1">

                <div className="flex flex-col justify-center gap-4 items-start px-6 md:px-36 bg-[#0D1117] h-[40%]">

                    <img src={square_logo} alt="" className='h-12' />
                    <div className="flex items-center mb-2">
                        {/* <img
                            src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAa4MLqcWuGKDmACc-4Ghk-_4ytQ9IN77J7LfKWCfYKZV6E_IPmuwXYh0If_GAJZHm5-I&usqp=CAU"}
                            alt="User Avatar"
                            className="rounded-full w-10 h-10 mr-2"
                        /> */}
                        <h1 className="text-3xl font-bold ">Modernization Accelerator Platform</h1>
                    </div>
                    <p className="text-white text-md mb-8 ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>

                <div className="grid md:grid-cols-4  2xl:grid-cols-6 gap-4  bg-[#151515] px-6 md:px-32 py-6 flex-1 overflow-y-auto">
                    {modules.map((module, index) => (
                        <ModuleCard
                            key={index}
                            imageUrl={module.imageUrl}
                            title={module.title}
                            description={module.description}
                            submenus={module.submenus}
                            badgeColor={module.badgeColor}
                            badgeText={module.badgeText}
                            onClickModule={props.onClickModule}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ModuleChooseContainer;
