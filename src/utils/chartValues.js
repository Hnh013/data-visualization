import data from '../data/Wine-Data.json';
import { getAttrFilterArray, arrMerger, getAvgValue, createChartTitle, createChartAxis, createChartGrid, createChartSeries } from "./methods";

// get wine data in json format
const wineData = data;

// get alcohol classes via utility method and filtering out duplicate classes to get distinct values
let alcoholClassData = getAttrFilterArray(wineData, 'Alcohol');
let alcoholClasses = [...new Set(alcoholClassData)];

// get average value of Malic Acid content in each class of Alcohol from wine data
const alcoholClassAvg = alcoholClasses.map(x => (getAvgValue(getAttrFilterArray(wineData, 'Alcohol', x), 'Malic Acid')));

// get only hue and color intensity values for each wine from wine data array
const hueData = getAttrFilterArray(wineData, 'Hue');
const colorIntensityData = getAttrFilterArray(wineData, 'Color intensity');

// creating 2-D array of color intensity data vaalues and hue data values
const colrIntVSHue = arrMerger(colorIntensityData, hueData);

// combining all data variables to prepare charts
export const chart1 = {
    title: createChartTitle("Basic Bar Chart", "Alcohol v/s Average Malic Acid"),
    xAxis: createChartAxis('Alcohol', alcoholClasses, 'category', 35),
    yAxis: createChartAxis('Average Malic Acid', [], 'value', 30, 90),
    series: createChartSeries('bar', alcoholClassAvg),
    grid: createChartGrid(),
    color: '#fc8452'
};

export const chart2 = {
    title: createChartTitle("Basic Scatter Chart", "Color Intensity v/s Hue"),
    xAxis: createChartAxis("Color Intensity", [], "NA", 35),
    yAxis: createChartAxis('Hue', [], 'NA', 30, 90),
    series: createChartSeries('scatter', colrIntVSHue, 10),
    grid: createChartGrid(),
    color: '#9a60b4'
};