import React from "react";
import {render} from 'react-dom';
import RenderComponent from './react/app.js';


let prevBenchmarkTime = null;
let benchmarkCount = null;
let statefulTotalTime = null;
let statelessTotalTime = null;
let statelessElementTotalTime = null;
let pureTotalTime = null;

export const initialState = () => {
    prevBenchmarkTime = null;
    benchmarkCount = 0;
    statefulTotalTime = 0;
    statelessTotalTime = 0;
    statelessElementTotalTime = 0;
    pureTotalTime = 0;
}

export const reactBenchmark = (count) => {
    Array(count).fill(0).forEach(x => benchmarkCommand());
    console.log(`Stateful took ${statefulTotalTime}ms`);
    console.log(`Stateless took ${statelessTotalTime}ms`);
    console.log(`Stateless-element took ${statelessElementTotalTime}ms`);
    console.log(`Pure Component took ${pureTotalTime}ms`);
};

const benchmarkCommand = () => {
    ['stateful', 'stateless', 'stateless-element', 'pure'].forEach(kind => {
        const items = [];
        const length = 20;
        for (let i = 0; i < length; i++) {
            items.push(i);
        }
        const prevTime = performance.now();

        //func for render component (example: items.forEach(render))
        items.forEach(i => {
            render((
                <RenderComponent kind={kind}/>
            ), document.getElementById(kind));
        });

        const time = Math.round(performance.now() - prevTime);
        switch (kind) {
            case 'stateless': {
                statelessTotalTime = statelessTotalTime + time;
                break;
            }
            case 'stateless-element': {
                statelessElementTotalTime = statelessElementTotalTime + time;
                break;
            }
            case 'stateful': {
                statefulTotalTime = statefulTotalTime + time;
                break;
            }
            case 'pure': {
                pureTotalTime = pureTotalTime + time;
                break;
            }
            default:
                break;
        }

        prevBenchmarkTime = time;
    });

    prevBenchmarkTime = null;
    benchmarkCount = benchmarkCount + 1;
    console.log('.');
    return;
};
