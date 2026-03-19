import { Room } from '../types/booking';
import { Users, MapPin } from 'lucide-react';

interface RoomCardProps {
  room: Room;
  isSelected: boolean;
  onSelect: (room: Room) => void;
}

export function RoomCard({ room, isSelected, onSelect }: RoomCardProps) {
  return (
    <div
      onClick={() => onSelect(room)}
      className={`p-6 rounded-xl border-2 cursor-pointer transition-all ${
        isSelected
          ? 'border-blue-500 bg-blue-50 shadow-sm'
          : 'border-gray-200 bg-white hover:border-blue-300'
      }`}
    >
      <h3 className="text-xl font-medium mb-3 text-gray-900">{room.name}</h3>
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Users className="w-4 h-4" />
          <span>Capacity: {room.capacity} people</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <MapPin className="w-4 h-4" />
          <span>{room.location}</span>
        </div>
      </div>
    </div>
  );
}