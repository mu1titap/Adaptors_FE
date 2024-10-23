import AdaptorsLogoIcon from '@/components/assets/icons/AdaptorsLogo';
import MeetingRoomNavCategories from './MeetingRoomNavCategories';

function MeetingRoomNav({
  level,
  onSelectStep,
}: {
  level: number;
  onSelectStep: (num: number) => void;
}) {
  return (
    <aside className="flex flex-col items-center border-r-2 border-slate-200">
      <AdaptorsLogoIcon className="w-8/12 my-8" />
      <MeetingRoomNavCategories level={level} onSelectStep={onSelectStep} />
    </aside>
  );
}

export default MeetingRoomNav;
