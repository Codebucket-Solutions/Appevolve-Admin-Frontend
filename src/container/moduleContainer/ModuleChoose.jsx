import ModuleCard from '@/components/moduleCard/ModuleCard';
import React from 'react';
import rectangle_image from '../../assets/modulechoose/module_choose_rectangle.png'


const ModuleChooseContainer = (props) => {

    const modules = [
        {
            // imageUrl: "https://via.placeholder.com/350x150/007bff/FFFFFF?Text=Module%20Image",
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
            // imageUrl: "https://via.placeholder.com/350x150/6610f2/FFFFFF?Text=Module%20Image",
            imageUrl: rectangle_image,
            title: "Module 3",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
            submenus: ["Submenu 1", "Submenu 1", "Submenu 1", "Submenu 1"],
            badgeColor: "bg-blue-500",
            badgeText: "S"
        },
        {
            // imageUrl: "https://via.placeholder.com/350x150/d63384/FFFFFF?Text=Module%20Image",
            imageUrl: rectangle_image,
            title: "Module 4",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
            submenus: ["Submenu 1", "Submenu 1", "Submenu 1", "Submenu 1"],
            badgeColor: "bg-purple-500",
            badgeText: "S"
        }]
    return (
        <div className='bg-black text-white min-h-screen font-sans w-full md:flex font-figtree'>
            <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAa4MLqcWuGKDmACc-4Ghk-_4ytQ9IN77J7LfKWCfYKZV6E_IPmuwXYh0If_GAJZHm5-I&usqp=CAU"} alt="User Avatar" className="rounded-full w-10 h-10 m-4" />
            <div className=" md:p-4 grid md:grid-cols-2 w-full">
                <div className="p-8 flex flex-col items-left justify-center">
                    <div className="text-5xl font-bold mb-4 font-poppins">LOGO</div>
                    <div className="flex items-center mb-2">
                        <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAa4MLqcWuGKDmACc-4Ghk-_4ytQ9IN77J7LfKWCfYKZV6E_IPmuwXYh0If_GAJZHm5-I&usqp=CAU"} alt="User Avatar" className="rounded-full w-10 h-10 mr-2" />
                        <div className="text-lg">Welcome Amrit</div>
                    </div>
                    <p className="text-gray-400 text-sm mb-8  font-figtree">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="p-8 grid grid-cols-2 gap-4 flex-1">
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