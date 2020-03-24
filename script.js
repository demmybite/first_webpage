const myName = "Ademola Adeagbo";
const myCourses = ["Python", "C#", "Node.js", "Html-Css-Javascript"];

if (myCourses.length % 2 === 0) {
  console.log(`${myName}: ${myCourses}`);
  for (let i = 1; i <= 200; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
} else {
  console.log(`${myName}: ${myCourses}`);
  for (let i = 1; i <= 200; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}
