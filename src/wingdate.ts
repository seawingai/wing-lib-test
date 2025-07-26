import { WingDate, Recurrence } from '@seawingai/wingdate';

export function wingdate(): void {
  // Create a date instance
  const date = new WingDate('2024-01-15T10:30:00Z');

  console.log(date.ISO);

  // Create recurring events
  const teamMeeting = new Recurrence({
    frequency: 'weekly',
    interval: 1,
    byDay: ['MO', 'WE', 'FR']
  });

  const startDate = new WingDate('2024-01-15T09:00:00Z');

  // Get all meetings for the month
  const meetings = startDate.within(teamMeeting, 'month');

  // Check if today has a meeting
  const today = WingDate.now();
  const hasMeetingToday = startDate.due(teamMeeting, today);

  console.log(meetings);
  console.log(hasMeetingToday);
}