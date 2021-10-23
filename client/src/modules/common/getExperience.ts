import moment from 'moment';

export type GetExperienceType = (careerStart: string) => void

export const getExperience: GetExperienceType = (careerStart) => {
  const start = moment(careerStart, 'DD.MM.YYYY');
  const experience = start.toNow(true).split(' ');
  if (experience[1].match(/days$/) || experience[1].match(/hours$/)) return 'меньше месяца';

  if (experience[0].match(/1[2-4]$/)) {
    if (experience[1].match(/month$/)) return `${experience[0]} месяцев`;
    return `${experience[0]} лет`;
  }
  if (experience[0].match(/[a]$/)) {
    if (experience[1].match(/month$/)) return '1 месяц';
    return '1 год';
  }
  if (experience[0].match(/[1]$/)) {
    if (experience[1].match(/month$/)) return `${experience[0]} месяц`;
    return `${experience[0]} год`;
  }
  if (experience[0].match(/[2-4]$/)) {
    if (experience[1].match(/months$/)) return `${experience[0]} месяца`;
    return `${experience[0]} года`;
  }
  if (experience[0].match(/[5-9]$/)) {
    if (experience[1].match(/months$/)) return `${experience[0]} месяцев`;
    return `${experience[0]} лет`;
  }
  return `${experience[0]} лет`;
};
