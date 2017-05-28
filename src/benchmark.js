import { reactBenchmark } from './benchmarkReactCommand.js'

window.benchmark = (count=10) => {
    console.log(`Running ${count} times ...`);
    reactBenchmark(count)
};
