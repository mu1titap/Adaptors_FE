import { getParticipantsData } from '@/actions/meeting/meetingAction';
import MoreIcon from '@/components/assets/icons/More';
import { participantType } from '@/components/types/main/meeting/meetingTypes';
import FitImage from '@/components/ui/image/fit-image';
import React, { useEffect, useState } from 'react';

const fetchParticipants = async () => {
  const participants = await getParticipantsData();
  return participants;
};

function Meeting() {
  const [participants, setParticipants] = useState<participantType[]>([]);

  useEffect(() => {
    const getParticipants = async () => {
      const participantsData = await fetchParticipants();
      setParticipants(participantsData);
    };
    getParticipants();
  }, []);

  return (
    <div className="m-4">
      <div className="grid grid-cols-2 h-[74px]">
        <header className="flex flex-col justify-center">
          <h3 className="text-lg text-black">
            [취업멘토] 아이돌 취업을 위한 첫걸음 멘토링
          </h3>
          <p className="text-xs text-[#ACACAC]">Jun 12th, 2022 | 11:00 AM</p>
        </header>
        <div className="grid grid-cols-2 items-center">
          <div className="flex space-x-[-15px]">
            {participants.slice(0, 4).map((participant, idx) => (
              <div key={idx} className="w-[40px] h-[40px]">
                <FitImage
                  className="rounded-full border-4 border-white"
                  src="/assets/images/dummy.jpg"
                  alt="dummy"
                />
              </div>
            ))}
            {participants.length > 4 && (
              <div className="flex items-center justify-center w-[40px] h-[40px] text-center font-bold text-[#0060FF] bg-[#DFEBFF] rounded-full border-4 border-white">
                +{participants.length - 4}
              </div>
            )}
          </div>
          <div className="w-10/12 grid grid-cols-8 items-center rounded-full h-[60px] bg-[#F5F5F5]">
            <div className="col-span-2 w-[40px] h-[40px] ml-[10px]">
              <FitImage
                className="rounded-full border-4 border-[#F5F5F5]"
                src="/assets/images/dummy.jpg"
                alt="dummy"
              />
            </div>
            <div className="col-span-5">
              <p className="text-sm">BTS 진</p>
              <p className="text-xs text-[#9E9E9E]">Moderator</p>
            </div>
            <MoreIcon />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-7 col-span-2 h-[calc(100vh-106px)]">
        <div className="col-span-5">여기에 영상</div>
        <div className="col-span-2">
          <div className="h-2/5">여기에 참가자 관리</div>
          <div>여기에 채팅</div>
        </div>
      </div>
    </div>
  );
}

export default Meeting;
