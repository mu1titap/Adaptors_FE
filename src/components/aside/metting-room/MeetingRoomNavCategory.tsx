import React, { ReactElement } from 'react';

interface NavItemProps {
  isActive: boolean;
  onClick: () => void;
  icon: ReactElement;
  label: string;
}

function MeetingRoomNavCategory({
  isActive,
  onClick,
  icon,
  label,
}: NavItemProps) {
  return (
    <li
      onClick={onClick}
      className={`w-full grid grid-cols-6 gap-x-2 hover:border-2 hover:border-[#0060FF] py-4 px-2 ${isActive ? 'text-[#0060FF] border-l-4 border-[#0060FF]' : 'text-[#ACACAC]'}`}
    >
      <span></span>
      {React.cloneElement(icon)}
      <span className="col-span-3 whitespace-nowrap">{label}</span>
    </li>
  );
}

export default MeetingRoomNavCategory;
