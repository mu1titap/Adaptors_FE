import { participantType } from '@/components/types/main/meeting/meetingTypes';
import MeetingTitle from './MeetingTitle';
import MeetingParticipants from './MeetingParticipants';
import MeetingProfile from './MeetingProfile';

function MeetingHeader({ participants }: { participants: participantType[] }) {
  return (
    <div className="mx-4 mt-2 my-4 grid grid-cols-2 h-[54px]">
      <MeetingTitle />
      <div className="grid grid-cols-2 items-center">
        <MeetingParticipants participants={participants} />
        <MeetingProfile />
      </div>
    </div>
  );
}

export default MeetingHeader;
