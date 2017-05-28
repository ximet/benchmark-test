import { reactBenchmark } from './benchmarkReactCommand.js'

window.benchmark = (count=10) => {
  console.log(`Running %c${count} %ctimes ...`;
  reactBenchmark(count)
};
