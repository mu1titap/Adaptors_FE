'use client';

import MeetingRoomNav from '@/components/aside/metting-room/MeetingRoomNav';
import Funnel from '@/components/common/Funnel/Funnel';
import useFunnel from '@/components/common/Funnel/useFunnel';
import Meeting from './meeting/Meeting';
import { participantType } from '@/components/types/main/meeting/meetingTypes';

const steps = [
  'Overview',
  'Meeting',
  'Messages',
  'My Course',
  'Setting',
  'Help',
  'Log Out',
];

function MeetingRoomLayOut({
  participants,
}: {
  participants: participantType[];
}) {
  const { level, step, onSelectStep } = useFunnel({ steps });
  return (
    <main className="grid grid-cols-7 w-full h-screen min-w-[1248px]">
      <MeetingRoomNav level={level} onSelectStep={onSelectStep} />
      <div className="col-span-6">
        <Funnel step={step}>
          <Funnel.Step name="Overview">
            <div>1</div>
          </Funnel.Step>
          <Funnel.Step name="Meeting">
            <Meeting participants={participants} />
          </Funnel.Step>
          <Funnel.Step name="Messages">
            <div>3</div>
          </Funnel.Step>
          <Funnel.Step name="My Course">
            <div>4</div>
          </Funnel.Step>
          <Funnel.Step name="Setting">
            <div>5</div>
          </Funnel.Step>
          <Funnel.Step name="Help">
            <div>6</div>
          </Funnel.Step>
          <Funnel.Step name="Log Out">
            <div>7</div>
          </Funnel.Step>
        </Funnel>
      </div>
    </main>
  );
}

export default MeetingRoomLayOut;
