import { Room, TimeSlot } from '../types/booking';

export const rooms: Room[] = [
  { id: 'room-a', name: 'Room A', capacity: 4, location: 'First Floor, North Wing' },
  { id: 'room-b', name: 'Room B', capacity: 6, location: 'Second Floor, East Wing' },
  { id: 'room-c', name: 'Room C', capacity: 8, location: 'First Floor, South Wing' },
];

export const timeSlots: TimeSlot[] = [
  { id: 'slot-1', time: '9:00–10:00' },
  { id: 'slot-2', time: '10:00–11:00' },
  { id: 'slot-3', time: '11:00–12:00' },
  { id: 'slot-4', time: '12:00–1:00' },
  { id: 'slot-5', time: '2:00–3:00' },
  { id: 'slot-6', time: '3:00–4:00' },
  { id: 'slot-7', time: '4:00–5:00' },
];