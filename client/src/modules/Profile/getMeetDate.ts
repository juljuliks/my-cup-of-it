export function getDate(date: string) {
  const meetDate = date ? date.split('T')[0].split('.')[0].split('-').reverse().join('.') : '';
  return meetDate;
}

export function getTime(date: string) {
  const fullMeetTime = date ? date.split('T')[1].split('.')[0].split(':') : [];
  fullMeetTime[0] = `${+fullMeetTime[0] + 4}`;
  if (fullMeetTime.length === 3) fullMeetTime.pop();
  const trimmedTime = fullMeetTime.join(':');
  return trimmedTime;
}
