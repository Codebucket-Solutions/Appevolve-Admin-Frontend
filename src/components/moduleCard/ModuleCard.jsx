import React from 'react';

const ModuleCard = ({ imageUrl, title, description, submenus, badgeColor, badgeText, onClickModule }) => {
    return (
        <div className="rounded-[4px] shadow-md border border-[#323338] max-h-fit bg-black" onClick={onClickModule}>
            <div className="relative">
                <img src={imageUrl} alt={title} className="w-full h-auto rounded-sm" />
                {/* {badgeText && (
                    <span className={`absolute top-2 left-2 ${badgeColor} text-white text-xs rounded-full px-2 py-1`}>{badgeText}</span>
                )} */}
            </div>

            <div className='divide-y-1 divide-border pb-4'>
                <div className='py-4 px-4 flex flex-col gap-1'>
                    <div className={` ${badgeColor} text-white text-sm rounded-[4px] px-3 py-2 h-[26px] flex justify-center items-center w-[26px]`}>{badgeText}</div>
                    <h3 className="font-semibold mt-2">{title}</h3>
                    <p className="text-white text-sm ">{description}</p>
                </div>
                <ul className="mt-2 px-4 text-gray-300 text-xs">
                    {submenus.map((item, index) => (
                        <li key={index} className="py-0.5">{item}</li>
                    ))}
                </ul>

            </div>

        </div>
    );
};

export default ModuleCard;