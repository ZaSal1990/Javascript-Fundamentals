/* Output:
December 2nd, 2017
November 11th, 2007
August 24th, 1987
*/


const talkingCalendar = function(date) {
 let splittedDate = date.split("/");
 let day = Number.parseInt(splittedDate[2]);
 let month = Number.parseInt(splittedDate[1]);
 let year = Number.parseInt(splittedDate[0]);

 return `${dayFormat(day)} ${monthFormat(month)}, ${year}`;

 

};

const dayFormat = function (day) 
{
  if (day === 01 || day === 21 || day === 31 )
  {return day + 'st';}
  else if (day === 02 || day === 22)
  {return day + 'nd';}
  else if (day === 03 || day === 23)
  {return day + 'rd';}
  else if (day > 03 && day < 31)
  {return day + 'th';}
};

const monthFormat = function (month) 
{
  if (month === 01)
  return 'January';
  else if (month === 02)
  return 'February';
  else if (month === 03)
  return 'March';
  else if (month === 04)
  return 'April';
  else if (month === 05)
  return 'May';
  else if (month === 06)
  return 'June';
  else if (month === 07)
  return 'July';
  else if (month === 08)
  return 'August';
  else if (month === 09)
  return 'September';
  else if (month === 10)
  return 'October';
  else if (month === 11)
  return 'November';
  else if (month === 12)
  return 'December';
};

console.log(monthFormat(02));

console.log(talkingCalendar("2017/02/24"));
//console.log(talkingCalendar("2007/11/11"));
//console.log(talkingCalendar("1987/08/24"));