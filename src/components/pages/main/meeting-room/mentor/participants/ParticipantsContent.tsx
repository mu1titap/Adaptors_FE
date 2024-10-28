import MicOffIcon from '@/components/assets/icons/MicOff';
import MicOnIcon from '@/components/assets/icons/MicOn';
import VideoOffIcon from '@/components/assets/icons/VideoOff';
import VideoOnIcon from '@/components/assets/icons/VideoOn';
import { userType } from '@/components/types/main/meeting/meetingTypes';
import FitImage from '@/components/ui/image/fit-image';

function ParticipantsContent({
  participant,
  toggleMic,
  toggleVideo,
}: {
  participant: userType;
  toggleMic: (id: number) => void;
  toggleVideo: (id: number) => void;
}) {
  return (
    <div className="rounded-full bg-[#F5F5F5] p-[1px] grid grid-cols-6 items-center my-2">
      <FitImage
        src="/assets/images/dummy.jpg"
        alt={`${participant.username}'s profile`}
        className="w-5 h-5 ml-3 rounded-full flex items-center justify-center overflow-hidden"
      />
      <h4 className="text-sm col-span-3 ml-3">{participant.username}</h4>
      <button
        onClick={() => toggleMic(participant.id)}
        className={'p-2 rounded-full'}
      >
        {participant.micOn ? <MicOnIcon /> : <MicOffIcon />}
      </button>
      <button
        onClick={() => toggleVideo(participant.id)}
        className={'p-2 rounded-full'}
      >
        {participant.videoOn ? <VideoOnIcon /> : <VideoOffIcon />}
      </button>
    </div>
  );
}

export default ParticipantsContent;
