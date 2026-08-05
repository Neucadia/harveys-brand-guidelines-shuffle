import { Calendar } from 'app';

// Square cells; selected day fills forest, today is wheat.
export const DeliveryCalendar = () => (
  <div className="bg-white p-8">
    <Calendar
      mode="single"
      selected={new Date(2026, 7, 14)}
      defaultMonth={new Date(2026, 7)}
      className="inline-block border border-gray-200"
    />
  </div>
);
