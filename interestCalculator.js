const data = [
  { principal: 2500, time: 1.8 },
  { principal: 1000, time: 5 },
  { principal: 3000, time: 1 },
  { principal: 2000, time: 3 }
];

function interestCalculator() {
  let interestData = [];
  let result;
  for (let i = 0; i < data.length; i++) {
    const time = data[i].time;
    const principal = data[i].principal;
    let interest;

    let rate = 1;
    if (principal >= 2500 && time > 1 && time < 3) {
      rate = 3;
      // console.log(rate);
    } else if (principal >= 2500 && time >= 3) {
      rate = 4;
      // console.log(rate);
    } else if (principal < 2500 || time <= 1) {
      rate = 2;
      //console.log(rate);
    }
    interest = (principal * rate * time) / 100;
    result = {
      principal: principal,
      rate: rate,
      time: time,
      interest: interest
    };
    interestData.push(result);
  }
  console.log(interestData);
  return interestData;
}

interestCalculator(data);
