import React from "react";

interface SkillBarProps {
    label: string;
    value?: number; // default 100
}

const SkillBar: React.FC<SkillBarProps> = ({ label, value = 100 }) => {
    return (
        <div className="group">
            <div className="flex items-center justify-between mb-2">
                <span className="text-gray-900 font-semibold text-sm tracking-wide">
                    {label}
                </span>
                <span className="text-blue-600 font-bold text-sm">
                    {value}%
                </span>
            </div>

            <div className="relative w-full h-4 bg-gray-100 rounded-full overflow-hidden">
                {/* Background glow */}
                <div className="absolute inset-0 bg-blue-100 rounded-full" />

                {/* Filled bar */}
                <div
                    className="relative h-full bg-gradient-to-r from-blue-500 to-blue-700 rounded-full
          transition-all duration-1000 ease-out group-hover:brightness-110"
                    style={{ width: `${value}%` }}
                />

                {/* Shine effect */}
                <div className="absolute inset-y-0 left-0 w-20 bg-white/30 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
        </div>
    );
};

export default SkillBar;
