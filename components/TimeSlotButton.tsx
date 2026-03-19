import { TimeSlot, Booking } from '../types/booking';
import { Check, Lock } from 'lucide-react';

interface TimeSlotButtonProps {
  slot: TimeSlot;
  isBooked: boolean;
  booking?: Booking;
  onBook: (slot: TimeSlot) => void;
}

export function TimeSlotButton({ slot, isBooked, booking, onBook }: TimeSlotButtonProps) {
  return (
    <button
      onClick={() => !isBooked && onBook(slot)}
      disabled={isBooked}
      className={`w-full p-4 rounded-xl border-2 flex flex-col justify-between h-28 text-left transition-all ${
        isBooked
          ? 'bg-red-50 border-red-200 cursor-not-allowed'
          : 'bg-green-50 border-green-400 hover:bg-green-100 cursor-pointer'
      }`}
    >
      <div className="flex justify-between w-full items-start">
        <span className={`font-medium ${isBooked ? 'text-gray-700' : 'text-gray-900'}`}>
          {slot.time}
        </span>
        {isBooked ? (
          <Lock className="w-4 h-4 text-red-400" />
        ) : (
          <Check className="w-4 h-4 text-green-600" />
        )}
      </div>
      <div
        className={`text-sm self-end mt-auto ${
          isBooked ? 'text-red-500' : 'text-green-700'
        }`}
      >
        {isBooked ? `Booked by: ${booking?.userName || 'User'}` : 'Available'}
      </div>
    </button>
  );
}