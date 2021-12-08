const Month: { [i: number]: string } = {
  0: 'Jan',
  1: 'Feb',
  2: 'Mar',
  3: 'Apr',
  4: 'May',
  5: 'Jun',
  6: 'Jul',
  7: 'Aug',
  8: 'Sep',
  9: 'Oct',
  10: 'Nov',
  11: 'Dec',
};

export const generateDisplayDate = (dateString: string) => {
  const date = new Date(dateString);
  const today = new Date();
  if (date.toLocaleDateString() === today.toLocaleDateString()) {
    const timeArray = date.toLocaleTimeString().split(":");
    timeArray.pop()
    if (parseInt(timeArray[0]) > 12) {
      timeArray[0] = String(parseInt(timeArray[0]) - 12);
      timeArray.push('PM');
    } else {
      timeArray.push('AM');
    }
    return `${timeArray[0]}:${timeArray[1]} ${timeArray[2]}`;
  }
  return `${Month[date.getMonth()]} ${date.getDate()}`;
};
