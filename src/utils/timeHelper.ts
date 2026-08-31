export interface BusinessStatus {
  isOpen: boolean;
  statusText: string;
  subText: string;
  currentDayName: string;
  currentDubaiTime: string;
}

export function getDubaiBusinessStatus(): BusinessStatus {
  try {
    // Dubai is UTC+4 without daylight saving time
    const now = new Date();
    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Asia/Dubai',
      hour: 'numeric',
      minute: 'numeric',
      hour12: false,
      weekday: 'long'
    });

    const parts = formatter.formatToParts(now);
    let hour = 12;
    let minute = 0;
    let weekday = 'Monday';

    for (const part of parts) {
      if (part.type === 'hour') hour = parseInt(part.value, 10);
      if (part.type === 'minute') minute = parseInt(part.value, 10);
      if (part.type === 'weekday') weekday = part.value;
    }

    const currentTotalMinutes = hour * 60 + minute;
    const openMinutes = 9 * 60; // 09:00 AM
    const closeMinutes = 22 * 60; // 10:00 PM

    const isOpen = currentTotalMinutes >= openMinutes && currentTotalMinutes < closeMinutes;
    
    // Format display time in 12h format
    const timeDisplayFormatter = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Asia/Dubai',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
    const currentDubaiTime = timeDisplayFormatter.format(now);

    if (isOpen) {
      return {
        isOpen: true,
        statusText: "Open Now",
        subText: "Closes tonight at 10:00 PM GST",
        currentDayName: weekday,
        currentDubaiTime
      };
    } else {
      return {
        isOpen: false,
        statusText: "Closed Now",
        subText: "Opens tomorrow at 9:00 AM GST",
        currentDayName: weekday,
        currentDubaiTime
      };
    }
  } catch {
    return {
      isOpen: true,
      statusText: "Open Today",
      subText: "9:00 AM – 10:00 PM GST",
      currentDayName: "Today",
      currentDubaiTime: "Dubai, UAE"
    };
  }
}
