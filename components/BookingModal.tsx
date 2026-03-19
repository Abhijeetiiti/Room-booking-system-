import { useState } from 'react';
import { Room, TimeSlot } from '../types/booking';
import { X } from 'lucide-react';

interface BookingModalProps {
  room: Room;
  slot: TimeSlot;
  date: string;
  onConfirm: (userName: string) => void;
  onCancel: () => void;
}

export function BookingModal({ room, slot, date, onConfirm, onCancel }: BookingModalProps) {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onConfirm(name.trim());
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-md overflow-hidden shadow-2xl">
        
        {/* Modal Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-100">
          <h2 className="text-xl font-semibold text-gray-900">Confirm Booking</h2>
          <button onClick={onCancel} className="text-gray-400 hover:text-gray-600 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        {/* Modal Body */}
        <form onSubmit={handleSubmit} className="p-6">
          <div className="mb-6 space-y-3 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl border border-gray-100">
            <p><span className="font-medium text-gray-900">Room:</span> {room.name} ({room.location})</p>
            <p><span className="font-medium text-gray-900">Date:</span> {date}</p>
            <p><span className="font-medium text-gray-900">Time:</span> {slot.time}</p>
          </div>

          <div className="mb-8">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              placeholder="e.g. Abhijeet"
              required
              autoFocus
            />
          </div>

          {/* Modal Actions */}
          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onCancel}
              className="px-5 py-2.5 rounded-xl border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!name.trim()}
              className="px-5 py-2.5 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Confirm
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}