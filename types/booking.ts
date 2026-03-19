export interface Room {
  id: string;
  name: string;
  capacity: number;
  location: string;
}

export interface TimeSlot {
  id: string;
  time: string;
}

export interface Booking {
  roomId: string;
  slotId: string;
  userName: string;
  date: string;
}