// Calcular quanto tempo passou desde que a pessoa fez chek in e check out

//pegar o dia/hora de entrada
const dayHourIn = '28/01/2022 10:01:00';

// pegar o dia/hora de saida
const dayHourOut = '28/01/2022 14:34:00';

function convertDateHourToMs(dateHour) {
  // capturar date - hour
  const [date, hours] = dateHour.split('');
  const [day, month, year] = date.split('/');
  const [hour, min, sec] = hours.split(':');

  const newDate = new Date(year, month - 1, day, hour, min, sec);

  return newDate.getTime();
}

const stayedTimeInSeconds =
  convertDateHourToMs(dateHourOut) - convertDateHourToMs(dateHourIn) / 1000;

//formatar meu tempo de estadia
const dayInSeconds = 24 * 60 * 60; //horas em minutos, minutos em segundos
const hourInSecond = 60 * 60; // hora em segundos
const minutesInSeconds = 60; //minutos em segundos
const days = Math.floor(stayedTimeInSeconds / dayInSeconds);
const hours = Math.floor(stayedTimeInSeconds / hourInSecond) % 24;

const minutes = Math.floor(stayedTimeInSeconds / minutesInSeconds) % 60;
const seconds = stayedTimeInSeconds % 60;

console.log(days, hours, minutes, seconds);
