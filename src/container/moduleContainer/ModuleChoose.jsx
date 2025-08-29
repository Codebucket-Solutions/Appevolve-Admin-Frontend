import ModuleCard from '@/components/moduleCard/ModuleCard';
import React from 'react';
import rectangle_image from '../../assets/modulechoose/module_choose_rectangle.png';

const ModuleChooseContainer = (props) => {
    const modules = [
        {
            imageUrl: rectangle_image,
            title: "Module 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
            submenus: ["Submenu 1", "Submenu 1", "Submenu 1", "Submenu 1"],
            badgeColor: "bg-orange-500",
            badgeText: "S"
        },
        {
            imageUrl: rectangle_image,
            title: "Module 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
            submenus: ["Submenu 1", "Submenu 1", "Submenu 1", "Submenu 1"],
            badgeColor: "bg-green-500",
            badgeText: "S"
        },
        {
            imageUrl: rectangle_image,
            title: "Module 3",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
            submenus: ["Submenu 1", "Submenu 1", "Submenu 1", "Submenu 1"],
            badgeColor: "bg-blue-500",
            badgeText: "S"
        },
        {
            imageUrl: rectangle_image,
            title: "Module 4",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
            submenus: ["Submenu 1", "Submenu 1", "Submenu 1", "Submenu 1"],
            badgeColor: "bg-purple-500",
            badgeText: "S"
        }
    ];

    return (
        <div className='bg-black text-white min-h-screen font-sans w-full flex flex-col font-figtree'>
            {/* Top Navbar */}
            <div className='bg-[#151515] h-[6vh] flex items-center'>
                <img
                    src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAa4MLqcWuGKDmACc-4Ghk-_4ytQ9IN77J7LfKWCfYKZV6E_IPmuwXYh0If_GAJZHm5-I&usqp=CAU"}
                    alt="User Avatar"
                    className="rounded-full w-10 h-10 m-4"
                />
            </div>

            {/* Content divided into 50% + 50% */}
            <div className="flex flex-col flex-1">
                {/* Welcome Section (50%) */}
                <div className="flex flex-col justify-center items-start px-6 md:px-36 bg-[#0D1117] h-1/2">
                    <div className="text-5xl font-bold mb-4 font-poppins">LOGO</div>
                    <div className="flex items-center mb-2">
                        <img
                            src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAa4MLqcWuGKDmACc-4Ghk-_4ytQ9IN77J7LfKWCfYKZV6E_IPmuwXYh0If_GAJZHm5-I&usqp=CAU"}
                            alt="User Avatar"
                            className="rounded-full w-10 h-10 mr-2"
                        />
                        <div className="text-2xl font-semibold font-poppins">Welcome Amrit</div>
                    </div>
                    <p className="text-white text-sm mb-8 font-figtree">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>

                {/* Card Section (50%) */}
                <div className="grid md:grid-cols-4 gap-4  bg-[#151515] px-6 md:px-32 py-6 flex-1 overflow-y-auto">
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
