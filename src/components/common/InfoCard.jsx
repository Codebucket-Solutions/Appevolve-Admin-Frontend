import React from "react"
import { Button } from "@/components/ui/button"
import files_img from '../../assets/comman/files_image_bg.png'

const InfoCard = ({
    count,
    title,
    description,
    cta,
    actions = [],
}) => {
    return (
        <div className="bg-white relative dark:bg-[#151515] rounded-[4px] p-6 flex flex-col gap-6 border border-gray-300 dark:border-[#323338]">
            <img src={files_img} className="absolute top-0 right-20 h-full object-cover  overflow-hidden" alt="" srcset="" />
            {/* Top Section */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                {/* Title */}
                <div className="flex flex-col gap-2">
                    <h2 className="text-3xl font-bold">{count}</h2>
                    <h2 className="text-3xl">{title}</h2>
                    {description && (
                        <p className="text-sm text-gray-700 dark:text-gray-300 max-w-xl">
                            {description}
                        </p>
                    )}

                    {/* Actions group (multiple buttons) */}
                    {actions.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-2">
                            {actions.map((action, i) => (
                                <Button
                                    key={i}
                                    onClick={action.onClick}
                                    className={action.className}
                                >
                                    {action.label}
                                </Button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Single CTA button */}
                {cta && (
                    <div className="flex items-center gap-3 mt-2 lg:mt-0">
                        <Button onClick={cta.onClick} className={cta.className}>
                            {cta.label}
                        </Button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default InfoCard
