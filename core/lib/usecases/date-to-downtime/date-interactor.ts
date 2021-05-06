export class DateInteractor {
  constructor(readonly date: Date) {}

  downtime(): string {
    const today = new Date();
    const daysSince = today.getDate() - this.date.getDate();
    const days = daysSince < 1 ? 0 : daysSince;

    const hoursSince = today.getHours() - this.date.getHours() - days * 24;
    const hours = hoursSince < 1 ? 0 : hoursSince;

    const minutesSince =
      today.getMinutes() - this.date.getMinutes() - hours * 60;

    // If hours is less than 1, dont show it.

    let result = "";
    result += days === 0 ? "" : days + "d";
    result += hours === 0 ? "" : hours + "h";
    result += minutesSince < 1 ? "<1m" : minutesSince + "m";
    const spacedResult = result.replace(/d|h|m/g, (char) => char + " ");

    return spacedResult;
  }
}
