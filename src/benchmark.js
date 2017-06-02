import { initialState, reactBenchmark } from './benchmarkReactCommand.js'

window.benchmark = (count=10) => {
    console.log(`Running ${count} times ...`);
    initialState();
    reactBenchmark(count);
};
