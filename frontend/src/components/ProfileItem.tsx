import React from "react";

interface ProfileItemProps {
  id: number;
  name: string;
  selected: boolean;
  onClick?: (id: number) => void;
}

const ProfileItem: React.FC<ProfileItemProps> = ({ id, name, selected, onClick }) => {
  return (
    <div
      className={`flex items-center p-2 mb-2 rounded-full cursor-pointer transition-colors duration-200 ${
        selected ? "bg-green-500" : "bg-gray-500"
      }`}
      onClick={() => onClick && onClick(id)}
    >
      <div className="w-8 h-8 rounded-full bg-blue-400 mr-2"></div>
      <span className="text-white">{name}</span>
    </div>
  );
};

export default ProfileItem;
