let benchmarkCount = 0;
let statefulTotalTime = 0;
let statelessTotalTime = 0;
let pureTotalTime = 0;

window.benchmark = (count=10) => {
  console.log(`Running %c${count} %ctimes ...`;
  Array(count).fill(0).forEach(x => benchmarkCommand())
  console.log(`Stateful took ${statefulTotalTime}ms`);
  console.log(`Stateless took ${statelessTotalTime}ms`);
  console.log(`Stateless took ${pureTotalTime}ms`);
}
