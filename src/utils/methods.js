// utility methods to calculate average, filter and reduce arrays

// get filtered values from an array based on attribute value OR map to modify an array into an array of a specifc attribute
export function getAttrFilterArray(arrayOfValues, attribute, attrValue = -1) {
    let result = [];
    let valuesArray = arrayOfValues;
    //null checks using &&
    valuesArray && valuesArray.length && (attrValue === -1 ? (result = valuesArray.map(value => value[attribute])) : (result = valuesArray.filter(x => x[attribute] === attrValue)));
    return result;
}

//get average value from a array of values via reduce
export function getAvgValue(arrayOfValues, attribute) {
    let result;
    let valuesArray = arrayOfValues;
    //null checks using &&
    valuesArray && valuesArray.length && (result = valuesArray.reduce((accu, curr) => accu + curr[attribute], 0) / valuesArray.length)
    return result;
}

//merge two 1-D arrays into a single array of arrays 2-D array, used in scatter plot
export function arrMerger(firstArray, secondArray) {
    let result = [];
    let [arrayOne, arrayTwo] = [firstArray, secondArray];
    //null checks using &&
    if (arrayOne && arrayOne.length && secondArray && secondArray.length) {
        let i = 0;
        while (i < firstArray.length) {
            result[i] = [arrayOne[i], arrayTwo[i]]
            i++;
        }
    }
    return result;
}

//generate title object for chart from set of values, some values are kept optional
export function createChartTitle(text, subtext, left = "center", top = "top", textStyle = { fontSize: 20 }, subtextStyle = { fontSize: 15 }) {
    return {
        text: text,
        subtext: subtext,
        left: left,
        top: top,
        textStyle: textStyle,
        subtextStyle: subtextStyle
    }
}

//generate axis object for chart form set of values, some values are kept optional
export function createChartAxis(name, data = [], type = "NA", nameGap = 30, nameRotate = 0, nameLocation = "middle", nameTextStyle = { align: 'center', verticalAlign: 'bottom', fontWeight: 'bold' }) {
    let myObject = { name: name, data: data, type: type, nameGap: nameGap, nameLocation: nameLocation, nameRotate: nameRotate, nameTextStyle: nameTextStyle };
    if (type === 'NA') {
        ({ type, ...myObject } = myObject);
    }
    if (data.length < 1) {
        ({ data, ...myObject } = myObject);
    }
    console.log(myObject);
    return myObject;
}

//generate grid object for chart from set of value(s)
export function createChartGrid(containLabel = true) {
    return { containLabel: containLabel };
}

//generate series ibject for chart from set of values, some values are kept optional
export function createChartSeries(type, data, symbolSize = 10) {
    let chartSeriesObject = { type: type, data: data };
    switch (type) {
        case 'bar':
            return chartSeriesObject;
        case 'scatter':
            return { ...chartSeriesObject, symbolSize: symbolSize };
        default:
            return chartSeriesObject;
    }
};