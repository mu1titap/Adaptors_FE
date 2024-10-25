import { useEffect, useRef, useState } from 'react';
import ChatHeader from './ChatHeader';
import ChatSender from './ChatSender';
import ChatView from './ChatView';
import MyCourseIcon from '@/components/assets/icons/MyCourse';
import ImageIcon from '@/components/assets/icons/ImageIcon';
import FileIcon from '@/components/assets/icons/FileIcon';
import SendIcon from '@/components/assets/icons/SendIcon';

export interface ChatRoomProps {
  rommId: string;
}

export interface ChatMessage {
  messageType: string;
  message: string;
  roomId: string;
  senderId: string;
  time: string;
}

function Chatting() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      messageType: 'text',
      message: '안녕하세요!',
      roomId: 'room1',
      senderId: 'user1',
      time: '10:11',
    },
    {
      messageType: 'text',
      message: '채팅방에 오신 것을 환영합니다.',
      roomId: 'room1',
      senderId: 'user2',
      time: '10:22',
    },
  ]);
  const [newMessage, setNewMessage] = useState<string>('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [participants, setParticipants] = useState<number>(2);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const currentTime = new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });

    if (newMessage.trim() || selectedFile) {
      if (selectedFile) {
        const fileChatMessage: ChatMessage = {
          messageType: 'file',
          message: `File: ${selectedFile.name}`,
          roomId: 'room1',
          senderId: 'currentUser',
          time: currentTime,
        };
        setMessages([...messages, fileChatMessage]);
        setSelectedFile(null);
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      }

      if (newMessage.trim()) {
        const textChatMessage: ChatMessage = {
          messageType: 'text',
          message: newMessage,
          roomId: 'room1',
          senderId: 'currentUser',
          time: currentTime,
        };
        setMessages([...messages, textChatMessage]);
      }

      setNewMessage('');
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  return (
    <div className="flex flex-col w-full h-full ">
      <div className="p-4 flex justify-between items-center">
        <h1 className="text-md font-bold">채팅방 제목</h1>
        <div className="flex items-center text-sm">
          <MyCourseIcon color="white" size="20" />
          <span>{participants} 명 참여 중</span>
        </div>
      </div>

      <div
        className="flex-grow p-2 overflow-y-auto text-xs"
        onDragOver={(e: React.DragEvent<HTMLDivElement>) => e.preventDefault()}
        onDrop={handleDrop}
      >
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-2 text-xs ${message.senderId === 'currentUser' ? 'text-right' : 'text-left'}`}
          >
            <div
              className={`inline-block p-2 rounded-lg ${message.senderId === 'currentUser' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800'}`}
            >
              {message.message}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSendMessage} className="p-1 w-full bg-white">
        <button
          type="button"
          className="p-2 rounded-full hover:bg-gray-200 transition-colors"
          onClick={() => fileInputRef.current?.click()}
        >
          <ImageIcon size="20" color="#ACACAC" />
        </button>
        <button
          type="button"
          className="p-2 rounded-full hover:bg-gray-200 transition-colors"
          onClick={() => fileInputRef.current?.click()}
        >
          <FileIcon size="20" color="#ACACAC" />
        </button>
        <div className="flex m-auto items-center text-sm rounded-xl bg-[#F5F5F5] text-[#8C8C8C]">
          {selectedFile ? (
            <div className="flex-grow p-1 ml-2">
              Selected file: {selectedFile.name}
            </div>
          ) : (
            <input
              type="text"
              placeholder="메시지를 입력하세요..."
              value={newMessage}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setNewMessage(e.target.value)
              }
              className="flex-grow p-1 ml-2 bg-[#F5F5F5] border-none rounded-md focus:outline-none focus:ring-2"
            />
          )}
          <button
            type="submit"
            className="p-2 rounded-xl hover:bg-white transition-colors"
          >
            <SendIcon color="#8C8C8C" />
          </button>
        </div>
      </form>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileSelect}
        className="hidden"
      />
    </div>
  );
}

export default Chatting;
