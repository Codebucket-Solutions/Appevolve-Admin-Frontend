import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import AnimatedTabs from "./AnimatedTabs"

export default function AddProfileDrawer({ open, setOpen, title }) {
    const [tags, setTags] = useState([])
    const [domain, setDomain] = useState("")
    const [topic, setTopic] = useState("")
    const [activeTab, setActiveTab] = useState("basic")
    const tabs = ["basic", "questions", "additional"]

    const handleKeyDown = (e, type) => {
        if (e.key === "Enter" && e.target.value.trim() !== "") {
            if (type === "domain") {
                setTags([...tags, { type: "Domain", value: e.target.value }])
                setDomain("")
            } else if (type === "topic") {
                setTags([...tags, { type: "Topic", value: e.target.value }])
                setTopic("")
            }
        }
    }

    return (
        <div
            className={`fixed top-[3.8rem] right-0 transform transition-all duration-300 border-[#D5D5D5] dark:border-[#323338] border-l
                ${open
                    ? "translate-x-0 w-[400px] md:w-[500px] lg:w-[520px] h-[calc(100vh-3.5rem)] px-8 pt-8"
                    : "translate-x-full w-0 h-0 p-0 border-0 overflow-hidden"
                } bg-white text-black dark:bg-[#111111] dark:text-white shadow-xl`}
        >
            <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex justify-between items-center border-neutral-300 dark:border-neutral-800 pb-4 mb-4">
                    <div>
                        <h2 className="text-lg font-semibold">{title}</h2>
                        <p className="text-sm text-neutral-700 dark:text-white">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-auto">
                    <AnimatedTabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

                    <div className="mt-4 space-y-4">
                        {activeTab === "basic" && (
                            <>
                                {/* Tag */}
                                <div className="flex flex-col gap-1">
                                    <label className="text-sm font-medium">
                                        Tag <span className="text-red-500">*</span>
                                    </label>
                                    <Input placeholder="Enter Tag" className="bg-neutral-100 rounded-[4px] text-black placeholder:text-neutral-500 dark:bg-[#151515] dark:text-white dark:placeholder:text-[#676879]" />
                                </div>

                                {/* APH Criteria */}
                                <div className="flex flex-col gap-1">
                                    <label className="text-sm font-medium">
                                        APH Criteria Level 1 <span className="text-red-500">*</span>
                                    </label>
                                    <Select className="w-full">
                                        <SelectTrigger className="w-full bg-neutral-100 text-black dark:bg-[#151515] dark:text-white dark:placeholder:text-[#676879]">
                                            <SelectValue placeholder="Select" />
                                        </SelectTrigger>
                                        <SelectContent className="w-full bg-neutral-100 text-black dark:bg-[#151515] dark:text-white dark:placeholder:text-[#676879]">
                                            <SelectItem value="beginner">Beginner</SelectItem>
                                            <SelectItem value="intermediate">Intermediate</SelectItem>
                                            <SelectItem value="advanced">Advanced</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                {/* Domain */}
                                <div className="flex flex-col gap-1">
                                    <label className="text-sm font-medium">
                                        Domain <span className="text-red-500">*</span>
                                    </label>
                                    <Input
                                        placeholder="Enter Domain"
                                        value={domain}
                                        onChange={(e) => setDomain(e.target.value)}
                                        onKeyDown={(e) => handleKeyDown(e, "domain")}
                                        className="bg-neutral-100 text-black placeholder:text-neutral-500 dark:bg-[#151515] dark:text-white dark:placeholder:text-[#676879]"
                                    />
                                </div>

                                {/* Topic */}
                                <div className="flex flex-col gap-1">
                                    <label className="text-sm font-medium">
                                        Topic <span className="text-red-500">*</span>
                                    </label>
                                    <Input
                                        placeholder="Enter Topic"
                                        value={topic}
                                        onChange={(e) => setTopic(e.target.value)}
                                        onKeyDown={(e) => handleKeyDown(e, "topic")}
                                        className="bg-neutral-100 text-black placeholder:text-neutral-500 dark:bg-[#151515] dark:text-white dark:placeholder:text-[#676879]"
                                    />
                                </div>

                                {/* Tags list */}
                                {tags.length > 0 && (
                                    <div className="mt-4">
                                        <p className="text-sm text-neutral-500 dark:text-white mb-2">Selected:</p>
                                        <div className="flex flex-wrap gap-2">
                                            {tags.map((tag, index) => (
                                                <span
                                                    key={index}
                                                    className="flex items-center gap-1 px-3 py-1 rounded-[4px] text-sm border border-neutral-300 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-800"
                                                >
                                                    {tag.type}: {tag.value}
                                                    <button
                                                        onClick={() => setTags(tags.filter((_, i) => i !== index))}
                                                        className="ml-2 text-black hover:text-red-600 dark:text-white dark:hover:text-red-400"
                                                    >
                                                        ✕
                                                    </button>
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </>
                        )}

                        {activeTab === "questions" && (
                            <>
                                {/* Question */}
                                <div className="flex flex-col gap-1">
                                    <label className="text-sm font-medium">
                                        Question <span className="text-red-500">*</span>
                                    </label>
                                    <Input placeholder="Enter Question" className="bg-neutral-100 text-black placeholder:text-neutral-500 dark:bg-[#151515] dark:text-white dark:placeholder:text-[#676879]" />
                                </div>

                                {/* Answer */}
                                <div className="flex flex-col gap-1">
                                    <label className="text-sm font-medium">
                                        Answer <span className="text-red-500">*</span>
                                    </label>
                                    <Input placeholder="Enter Answer" className="bg-neutral-100 text-black placeholder:text-neutral-500 dark:bg-[#151515] dark:text-white dark:placeholder:text-[#676879]" />
                                </div>
                            </>
                        )}

                        {activeTab === "additional" && (
                            <div className="flex flex-col gap-1">
                                <label className="text-sm font-medium">Notes</label>
                                <Input placeholder="Optional notes" className="bg-neutral-100 text-black placeholder:text-neutral-500 dark:bg-[#151515] dark:text-white dark:placeholder:text-[#676879]" />
                            </div>
                        )}
                    </div>
                </div>

                {/* Footer */}
                {open && (
                    <div className="flex justify-end gap-2 border-t border-neutral-300 dark:border-neutral-800 p-4">
                        <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
                        <Button className="bg-blue-600 text-white hover:bg-blue-700">Submit</Button>
                    </div>
                )}
            </div>
        </div>
    )
}
