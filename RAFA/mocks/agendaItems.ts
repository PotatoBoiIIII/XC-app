import isEmpty from 'lodash/isEmpty';
import {MarkedDates} from '../assets/types';

const today = new Date().toISOString().split('T')[0];
const fastDate = getPastDate(4);
const futureDates = getFutureDates(990);
export const dates = [fastDate, today].concat(futureDates);

function getFutureDates(numberOfDays: number) {
  const array: string[] = [];
  for (let index = 1; index <= numberOfDays; index++) {
    let d = Date.now();
    if (index > 31) {
      // set dates on the next month
      const newMonth = new Date(d).getMonth() + 1;
      d = new Date(d).setMonth(newMonth);
    }
    const date = new Date(d + 864e5 * index); // 864e5 == 86400000 == 24*60*60*1000
    const dateString = date.toISOString().split('T')[0];
    array.push(dateString);
  }
  return array;
}
function getPastDate(numberOfDays: number) {
  return new Date(Date.now() - 864e5 * numberOfDays).toISOString().split('T')[0];
}

export const agendaItems = [
 {
   title: dates[0],
    data: [{hour: '12am', duration: '1h', title: 'morning practice', info: 'Pleas be on time, we will run around 4 mile plus hurdles'}, {hour: '9am', duration: '1h', title: 'Long Run', itemCustomHeightType: 'LongEvent'}],
   },
  {
    title: dates[1],
    data: [
    {hour: '7am', duration: '1h', title: 'mile repeats'},
      {hour: '2:30', duration: '1h', title: 'afternoon double'}
    ]
 },
  

  
];

export function getMarkedDates() {
  const marked: MarkedDates = {};

  agendaItems.forEach(item => {
    // NOTE: only mark dates with data
    if (item.data && item.data.length > 0 && !isEmpty(item.data[0])) {
      marked[item.title] = {marked: true};
    } else {
      marked[item.title] = {disabled: true};
    }
  });
  return marked;
}
