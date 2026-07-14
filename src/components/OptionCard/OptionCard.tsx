import { type LucideIcon } from "lucide-react";

type OptionCardProps = {
    icon: LucideIcon;
    title: string;
    selected: boolean;
    onClick: () => void;
};

const OptionCard = ({
    icon: Icon,
    title,
    selected,
    onClick,
}: OptionCardProps) => {

    return (
        <button
            onClick={onClick}
            className={`
                flex w-full cursor-pointer items-center rounded-2xl px-5 py-4 text-left transition-all duration-300
                ${
                    selected
                        ? "border border-[#7554F7] bg-[#7554F7]/10"
                        : "border border-white/10 hover:border-[#7554F7]/60 hover:bg-white/5"
                }
            `}
        >
            <Icon className="mr-4 h-5 w-5 text-[#7554F7]" />

            <span className="font-medium">
                {title}
            </span>
        </button>
    );
};

export default OptionCard;