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
    data: [{hour: '12am', duration: '1h', title: 'First Yoga'}, {hour: '9am', duration: '1h', title: 'Long Yoga', itemCustomHeightType: 'LongEvent'}],
   },
  {
    title: dates[1],
    data: [
    {hour: '4pm', duration: '1h', title: 'Pilates ABC'},
      {hour: '5pm', duration: '1h', title: 'Vinyasa Yoga'}
    ]
 },
  // {
  //   title: dates[2],
  //   data: [
  //     {hour: '1pm', duration: '1h', title: 'Long run'},
  //     {hour: '2pm', duration: '1h', title: 'Deep Stretches'},
  //     {hour: '3pm', duration: '1h', title: 'Private Yoga'}
  //   ]
  // },
  // {
  //   title: dates[3],
  //   data: [{hour: '12am', duration: '1h', title: 'Long run'}]
  // },
  // {
  //   title: dates[4],
  //   data: [{}]
  // },
  // {
  //   title: dates[5],
  //   data: [
  //     {hour: '9pm', duration: '1h', title: 'Middle Yoga'},
  //     {hour: '10pm', duration: '1h', title: 'Ashtanga'},
  //     {hour: '11pm', duration: '1h', title: 'TRX'},
  //     {hour: '12pm', duration: '1h', title: 'Running Group'}
  //   ]
  // },
  // {
  //   title: dates[6],
  //   data: [
  //     {hour: '12am', duration: '1h', title: 'Long run'}
  //   ]
  // },
  // {
  //   title: dates[7],
  //   data: [{}]
  // },
  // {
  //   title: dates[8],
  //   data: [
  //     {hour: '9pm', duration: '1h', title: 'Pilates Reformer'},
  //     {hour: '10pm', duration: '1h', title: 'Ashtanga'},
  //     {hour: '11pm', duration: '1h', title: 'TRX'},
  //     {hour: '12pm', duration: '1h', title: 'Running xc Group'}
  //   ]
  // },
  // {
  //   title: dates[9],
  //   data: [
  //     {hour: '1pm', duration: '1h', title: 'Long run'},
  //     {hour: '2pm', duration: '1h', title: 'Deep Stretches'},
  //     {hour: '3pm', duration: '1h', title: 'Private Yoga'}
  //   ]
  // },
  // {
  //   title: dates[10],
  //   data: [
  //     {hour: '12am', duration: '1h', title: 'Last Yoga'}
  //   ]
  // },
  // {
  //   title: dates[11],
  //   data: [
  //     {hour: '1pm', duration: '1h', title: 'Long run'},
  //     {hour: '2pm', duration: '1h', title: 'Deep Stretches'},
  //     {hour: '3pm', duration: '1h', title: 'xc practice'}
  //   ]
  // },
  // {
  //   title: dates[12],
  //   data: [
  //     {hour: '12am', duration: '1h', title: 'Last Yoga'}
  //   ]
  // },
  // {
  //   title: dates[13],
  //   data: [
  //     {hour: '12am', duration: '1h', title: 'Morning Practice'},
  //     {hour:'4am', duration: '2h', title: 'xc practice'}
  //   ]
  // },
  // {
  //   title: dates[14],
  //   data: [
  //     {hour: '12am', duration: '1h', title: 'Morning Practice'},
  //     {hour:'4am', duration: '2h', title: 'xc practice'}
  //   ]
  // },
  // {
  //   title: dates[15],
  //   data: [
  //     {hour: '9pm', duration: '1h', title: 'Pilates Reformer'},
  //     {hour: '10pm', duration: '1h', title: 'Ashtanga'},
  //     {hour: '11pm', duration: '1h', title: 'TRX'},
  //     {hour: '12pm', duration: '1h', title: 'Running xc Group'}
  //   ]
  // },
  // {
  //   title: dates[16],
  //   data: [
  //     {hour: '1pm', duration: '1h', title: 'Long run'},
  //     {hour: '2pm', duration: '1h', title: 'Deep Stretches'},
  //     {hour: '3pm', duration: '1h', title: 'Private Yoga'}
  //   ]
  // },
  // {
  //   title: dates[17],
  //   data: [
  //     {hour: '12am', duration: '1h', title: 'Last Yoga'}
  //   ]
  // },
  // {
  //   title: dates[18],
  //   data: [
  //     {hour: '1pm', duration: '1h', title: 'Long run'},
  //     {hour: '2pm', duration: '1h', title: 'Deep Stretches'},
  //     {hour: '3pm', duration: '1h', title: 'xc practice'}
  //   ]
  // },
  // {
  //   title: dates[19],
  //   data: [
  //     {hour: '12am', duration: '1h', title: 'Last Yoga'}
  //   ]
  // },
  // {
  //   title: dates[20],
  //   data: [
  //     {hour: '12am', duration: '1h', title: 'Morning Practice'},
  //     {hour:'4am', duration: '2h', title: 'xc practice'}
  //   ]
  // },
  // {
  //   title: dates[21],
  //   data: [
  //     {hour: '12am', duration: '1h', title: 'Morning Practice'},
  //     {hour:'4am', duration: '2h', title: 'xc practice'}
  //   ]
  // },
  // {
  //   title: dates[22],
  //   data: [
  //     {hour: '12am', duration: '1h', title: 'Morning Practice'},
  //     {hour:'4am', duration: '2h', title: 'xc practice'}
  //   ]
  // },
  // {
  //   title: dates[23],
  //   data: [
  //     {hour: '12am', duration: '1h', title: 'Morning Practice'},
  //     {hour:'4am', duration: '2h', title: 'xc practice'}
  //   ]
  // },
  // {
  //   title: dates[24],
  //   data: [
  //     {hour: '9pm', duration: '1h', title: 'Pilates Reformer'},
  //     {hour: '10pm', duration: '1h', title: 'Ashtanga'},
  //     {hour: '11pm', duration: '1h', title: 'TRX'},
  //     {hour: '12pm', duration: '1h', title: 'Running xc Group'}
  //   ]
  // },
  // {
  //   title: dates[25],
  //   data: [
  //     {hour: '1pm', duration: '1h', title: 'Long run'},
  //     {hour: '2pm', duration: '1h', title: 'Deep Stretches'},
  //     {hour: '3pm', duration: '1h', title: 'Private Yoga'}
  //   ]
  // },
  // {
  //   title: dates[26],
  //   data: [
  //     {hour: '12am', duration: '1h', title: 'Last Yoga'}
  //   ]
  // },
  // {
  //   title: dates[27],
  //   data: [
  //     {hour: '1pm', duration: '1h', title: 'Long run'},
  //     {hour: '2pm', duration: '1h', title: 'Deep Stretches'},
  //     {hour: '3pm', duration: '1h', title: 'xc practice'}
  //   ]
  // },
  // {
  //   title: dates[28],
  //   data: [
  //     {hour: '12am', duration: '1h', title: 'Last Yoga'}
  //   ]
  // },
  // {
  //   title: dates[29],
  //   data: [
  //     {hour: '12am', duration: '1h', title: 'Morning Practice'},
  //     {hour:'4am', duration: '2h', title: 'xc practice'}
  //   ]
  // },
  // {
  //   title: dates[30],
  //   data: [
  //     {hour: '12am', duration: '1h', title: 'Morning Practice'},
  //     {hour:'4am', duration: '2h', title: 'xc practice'}
  //   ]
  // },
  // {
  //   title: dates[31],
  //   data: [
  //     {hour: '12am', duration: '1h', title: 'Morning Practice'},
  //     {hour:'4am', duration: '2h', title: 'Meet'}
  //   ]
  // },
  // {
  //   title: dates[32],
  //   data: [
  //     {hour: '12am', duration: '1h', title: 'Morning Practice'},
  //     {hour:'4am', duration: '2h', title: 'Meet'}
  //   ]
  // },
  // {
  //   title: dates[33],
  //   data: [
  //     {hour: '12am', duration: '1h', title: 'Morning Practice'},
  //     {hour:'4am', duration: '2h', title: 'Meet'}
  //   ]
  // },
  // {
  //   title: dates[34],
  //   data: [
  //     {hour: '12am', duration: '1h', title: 'Morning Practice'},
  //     {hour:'4am', duration: '2h', title: 'Meet'}
  //   ]
  // },

  
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
