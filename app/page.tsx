"use client";

import { useState, useEffect } from 'react';
import { Room, TimeSlot, Booking } from '../types/booking';
import { rooms, timeSlots } from '../data/roomData';
import { RoomCard } from '../components/RoomCard';
import { TimeSlotButton } from '../components/TimeSlotButton';
import { BookingModal } from '../components/BookingModal';
import { Calendar } from 'lucide-react';

export default function Home() {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [bookings, setBookings] = useState<Booking[]>([]);

  const [today, setToday] = useState('Loading...');

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setToday(new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }));
  }, []);

  useEffect(() => {
    if (today !== 'Loading...') {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setBookings([
        { roomId: 'room-c', slotId: 'slot-1', userName: 'abhijeet', date: today }
      ]);
    }
  }, [today]);

  const handleSlotClick = (slot: TimeSlot) => {
    setSelectedSlot(slot);
    setShowModal(true);
  };

  return (
    <main className="min-h-screen bg-white p-6 font-sans text-gray-900">
      <div className="max-w-6xl mx-auto mt-8">
        
      
        <div className="mb-10">
          <h1 className="text-4xl font-semibold mb-3">Study Room Booking System</h1>
          <div className="flex items-center gap-2 text-gray-500">
            <Calendar className="w-5 h-5" />
            <span className="text-lg">{today}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12">
          
         
          <div>
            <h2 className="text-2xl font-medium mb-6">Select a Room</h2>
            <div className="space-y-5">
              {rooms.map((room) => (
                <RoomCard
                  key={room.id}
                  room={room}
                  isSelected={selectedRoom?.id === room.id}
                  onSelect={setSelectedRoom}
                />
              ))}
            </div>
          </div>

         
          <div>
            <h2 className="text-2xl font-medium mb-6">
              {selectedRoom ? `Available Slots - ${selectedRoom.name}` : 'Select a room to view slots'}
            </h2>
            
            {selectedRoom ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {timeSlots.map((slot) => {
                  const booking = bookings.find(
                    (b) => b.roomId === selectedRoom.id && b.slotId === slot.id && b.date === today
                  );
                  
                  return (
                    <TimeSlotButton
                      key={slot.id}
                      slot={slot}
                      isBooked={!!booking}
                      booking={booking}
                      onBook={handleSlotClick}
                    />
                  );
                })}
              </div>
            ) : (
              <div className="h-64 border-2 border-dashed border-gray-200 rounded-xl flex items-center justify-center text-gray-500 bg-gray-50">
                Please select a room from the list to view available time slots
              </div>
            )}
          </div>
        </div>

       
        <div className="mt-12 p-6 bg-white rounded-xl border border-gray-100 shadow-sm flex items-center gap-8">
          <h3 className="text-lg font-medium text-gray-900">Legend</h3>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-green-50 border-2 border-green-400 rounded-md"></div>
              <span className="text-sm text-gray-600">Available</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-red-50 border-2 border-red-200 rounded-md"></div>
              <span className="text-sm text-gray-600">Booked</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-blue-50 border-2 border-blue-500 rounded-md"></div>
              <span className="text-sm text-gray-600">Selected Room</span>
            </div>
          </div>
        </div>

        {showModal && selectedRoom && selectedSlot && (
          <BookingModal
            room={selectedRoom}
            slot={selectedSlot}
            date={today}
            onConfirm={(userName) => {
              setBookings([...bookings, {
                roomId: selectedRoom.id,
                slotId: selectedSlot.id,
                userName,
                date: today
              }]);
              setShowModal(false);
              setSelectedSlot(null);
            }}
            onCancel={() => {
              setShowModal(false);
              setSelectedSlot(null);
            }}
          />
        )}
        
      </div>
    </main>
  );
}