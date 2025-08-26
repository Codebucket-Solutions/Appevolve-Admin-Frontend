import React from 'react';

const ModuleCard = ({ imageUrl, title, description, submenus, badgeColor, badgeText, onClickModule }) => {
    return (
        <div className="rounded-md shadow-md p-4" onClick={onClickModule}>
            <div className="relative">
                <img src={imageUrl} alt={title} className="w-full h-auto rounded-md" />
                {/* {badgeText && (
                    <span className={`absolute top-2 left-2 ${badgeColor} text-white text-xs rounded-full px-2 py-1`}>{badgeText}</span>
                )} */}
            </div>

            <div className='divide-y-2'>
                <div className='pl-8 py-4'>
                    <span className={` ${badgeColor} text-white text-xs rounded-full px-2 py-1`}>{badgeText}</span>
                    <h3 className="font-semibold mt-2">{title}</h3>
                    <p className="text-gray-400 text-sm ">{description}</p>
                </div>
                <ul className="mt-2 text-gray-300 pl-12 text-xs">
                    {submenus.map((item, index) => (
                        <li key={index} className="py-0.5">{item}</li>
                    ))}
                </ul>

            </div>

        </div>
    );
};

export default ModuleCard;