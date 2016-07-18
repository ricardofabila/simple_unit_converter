/**
 * This file contains the convertion functions for everyone of the units.
 * To make everything a little bit more efficient I will use a method
 * of converting everyting to the a base unit and then take it back
 * to the desire unit instead of making eveyr possible convination for
 * each type of unit (in the case of temperature this is not really a
 * good option though).
 *
 * For example:
 * To avoid making 49 function (7 * 7 49) for the length units,
 * I'll convert everything to cm and then cm to each other unit
 * (7 + 7 = 14) and minus the cm to cm function that's 13 functions only.
 *
 * I am aware that there is a better way to do it using dictionaries, but
 * this way a way easier to read and to debug. A little extra work goes a
 * long way. Code is read 1000 times more then it is written.
 *
 */

"use strict";

//<<<<<<<<<<<<<<<<<<<<<<  Area Functions >>>>>>>>>>>>>>>>>>>>>>

//––––––––––––––––––––––––––  toCMs Functions  ––––––––––––––––––––––––––

function squaremilimetersToCms(milimeters) {
    return milimeters * 0.01;
}

function squarecmsToCms(cms) {
    return cms;
}

function squaremetersToCms(meters) {
    return meters * 10000;
}

function squarekilometersToCms(kilometers) {
    return kilometers * 10000000000;
}

function hectareasToCms(hectareas) {
    return hectareas * 100000000;
}

function squareinchesToCms(inches) {
    return inches * 6.4516;
}

function squarefeetToCms(feet) {
    return 929.0304 * feet;
}

function squareyardsToCms(yard) {
    return 8361.2736 * yard;
}

function squaremilesToCms(miles) {
    return miles * 25899881103.36;
}

function acresToCms(acres) {
    return acres * 40468564.224;
}

//––––––––––––––––––––––––––  cmTo Functions  ––––––––––––––––––––––––––

function cmsToSquaremilimeters(cm) {
    return cm * 100;
}

function cmsToSquaremeters(cm) {
    return cm * 0.0001;
}

function cmsToSquarekilometers(cm) {
    return cm * 10.0e-11;
}

function cmsToHectareas(cm) {
    return cm * 1.0e-8;
}

function cmsToSquareinches(cm) {
    return cm * 0.15500031;
}

function cmsToSquarefeet(cm) {
    return cm * 0.00107639104;
}

function cmsToSquareyards(cm) {
    return cm * 0.000119599005;
}

function cmsToSquaremiles(cm) {
    return cm * 3.8610216e-11;
}

function cmsToAcres(cm) {
    return cm * 2.47e-8;
}

//<<<<<<<<<<<<<<<<<<<<<<<  Computer Storage Functions  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//––––––––––––––––––––––––––  toBits Functions  ––––––––––––––––––––––––––

function bitsToBits(bits) {
    return bits;
}

function bytesToBits(bytes) {
    return bytes * 8;
}

function kilobytesToBits(kilobytes) {
    return kilobytes * 1024 * 8;
}

function megabytesToBits(megabytes) {
    return megabytes * 1024 * 1024 * 8;
}

function gigabytesToBits(gigabytes) {
    return gigabytes * 1024 * 1024 * 1024 * 8;
}

function terabytesToBits(terabytes) {
    return terabytes * 1024 * 1024 * 1024 * 1024 * 8;
}

//––––––––––––––––––––––––––  bitsTo Functions  ––––––––––––––––––––––––––

function bitsToBytes(bits) {
    return bits / 8;
}

function bitsToKilobytes(bits) {
    return bits / (1024 * 8);
}

function bitsToMegabytes(bits) {
    return bits / (1024 * 1024 * 8);
}

function bitsToGigabytes(bits) {
    return bits / (1024 * 1024 * 1024 * 8);
}

function bitsToTerabytes(bits) {
    return bits / (1024 * 1024 * 1024 * 1024 * 8);
}

//<<<<<<<<<<<<<<<<<<<<<<<  Energy Functions  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//––––––––––––––––––––––––––  toCalories Functions  ––––––––––––––––––––––––––

function caloriesTocalories(calories) {
    return calories;
}

function btusTocalories(btus) {
    return btus * 251.995758;
}

function ergsTocalories(ergs) {
    return ergs * 2.39006e-13;
}

function footPoundsTocalories(footPounds) {
    return footPounds * 0.323832;
}

function joulesTocalories(joules) {
    return joules * 0.238846;
}

function kilogramCaloriesTocalories(kilogramCalories) {
    return kilogramCalories * 1000;
}

function kilogramMetersTocalories(kilogramMeters) {
    return kilogramMeters * 2.342278;
}

function kilowattHoursTocalories(kilowattHours) {
    return kilowattHours * 859845.25;
}

function newtonMetersTocalories(newtonMeters) {
    return newtonMeters * 0.238846;
}

function wattHoursTocalories(wattHours) {
    return wattHours * 859.845215;
}

//––––––––––––––––––––––––––  caloriesTo Functions  ––––––––––––––––––––––––––

function caloriesToBtus(calories) {
    return calories / 251.995758;
}

function caloriesToErgs(calories) {
    return calories / 2.39006e-13;
}

function caloriesToFootPounds(calories) {
    return calories / 0.323832;
}

function caloriesToJoules(calories) {
    return calories / 0.238846;
}

function caloriesToKilogramCalories(calories) {
    return calories / 1000;
}

function caloriesToKilogramMeters(calories) {
    return calories / 2.342278;
}

function caloriesKToilowattHours(calories) {
    return calories / 859845.25;
}

function caloriesToNewtonMeters(calories) {
    return calories / 0.238846;
}

function caloriesToWattHours(calories) {
    return calories / 859.845215;
}


//<<<<<<<<<<<<<<<<<<<<<<  Length Functions >>>>>>>>>>>>>>>>>>>>>>

//––––––––––––––––––––––––––  toCm Functions  ––––––––––––––––––––––––––

function mmToCm(mm) {
    return mm / 10;
}

function cmToCm(cm) {
    return cm;
}

function metersToCm(meters) {
    return meters * 100;
}

function kilometersToCm(kilometers) {
    return kilometers * 100000;
}

function inchesToCm(inches) {
    return 2.54 * inches;
}

function feetToCm(feet) {
    return 30.48 * feet;
}

function yardsToCm(yard) {
    return 91.440002 * yard;
}

function milesToCm(miles) {
    return 160934.406250 * miles;
}

//––––––––––––––––––––––––––  cmTo Functions  ––––––––––––––––––––––––––

function cmToMm(cm) {
    return cm * 10;
}

function cmToMeters(cm) {
    return cm / 100;
}

function cmToKilometers(cm) {
    return cm / 100000;
}

function cmToInches(cm) {
    return cm / 2.54;
}

function cmToFeet(cm) {
    return cm / 30.48;
}

function cmToYards(cm) {
    return cm / 91.440002;
}

function cmToMiles(cm) {
    return cm / 160934.406250;
}

//<<<<<<<<<<<<<<<<<<<<<<  Speed Functions >>>>>>>>>>>>>>>>>>>>>>

//––––––––––––––––––––––––––  toMeterPerSecond Functions  ––––––––––––––––––––––––––

function knotsToMeterPerSecond(knots) {
    return knots * 0.514444;
}

function milesPerHourToMeterPerSecond(milesPerHour) {
    return milesPerHour * 0.447040;
}

function milesPerMinuteToMeterPerSecond(milesPerMinute) {
    return milesPerMinute * 26.822399;
}

function feetPerMinuteToMeterPerSecond(feetPerMinute) {
    return feetPerMinute * 0.005080;
}

function feetPerSecondToMeterPerSecond(feetPerSecond) {
    return feetPerSecond * 0.304800;
}

function kilometersPerHourToMeterPerSecond(kilometersPerHour) {
    return kilometersPerHour * 0.277778;
}

function kilometersPerMinuteToMeterPerSecond(kilometersPerMinute) {
    return kilometersPerMinute * 16.666666;
}

function metersPerSecondToMeterPerSecond(metersPerSecond) {
    return metersPerSecond;
}

//––––––––––––––––––––––––––  metersPerSecondTo Functions  ––––––––––––––––––––––––––

function meterPerSecondKnots(metersPerSecond) {
    return metersPerSecond / 0.514444;
}

function meterPerSecondMilesPerHour(metersPerSecond) {
    return metersPerSecond / 0.447040;
}

function meterPerSecondMilesPerMinute(metersPerSecond) {
    return metersPerSecond / 26.822399;
}

function meterPerSecondFeetPerMinutes(metersPerSecond) {
    return metersPerSecond / 0.005080;
}

function meterPerSecondFeetPerSecond(metersPerSecond) {
    return metersPerSecond / 0.304800;
}

function meterPerSecondToKilometersPerHour(metersPerSecond) {
    return metersPerSecond / 0.277778;
}

function meterPerSecondToKilometersPerMinute(metersPerSecond) {
    return metersPerSecond / 16.666666;
}

//<<<<<<<<<<<<<<<<<<<<<<<  Time Functions  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//––––––––––––––––––––––––––  toNanoseconds Functions  ––––––––––––––––––––––––––

function yearsToNanoseconds(years) {
    return years * 3.154e+16;
}

function weeksToNanoseconds(weeks) {
    return weeks * 6.048e+14;
}

function daysToNanoseconds(days) {
    return days * 8.64e+13;
}

function hoursToNanoseconds(hours) {
    return hours * 3.6e+12;
}

function minutesToNanoseconds(minutes) {
    return minutes * 6e+10;
}

function secondsToNanoseconds(seconds) {
    return seconds * 1e+9;
}

function millisecondsToNanoseconds(milliseconds) {
    return milliseconds * 1e+6;
}

function microsecondsToNanoseconds(microseconds) {
    return microseconds * 1000;
}

function nanosecondsToNanoseconds(nanoseconds) {
    return nanoseconds;
}

//––––––––––––––––––––––––––  nanosecondsTo Functions  ––––––––––––––––––––––––––

function nanosecondsToYears(nanoseconds) {
    return nanoseconds / 3.154e+16;
}

function nanosecondsToWeeks(nanoseconds) {
    return nanoseconds / 6.048e+14;
}

function nanosecondsToDays(nanoseconds) {
    return nanoseconds / 8.64e+13;
}

function nanosecondsToHours(nanoseconds) {
    return nanoseconds / 3.6e+12;
}

function nanosecondsToMinutes(nanoseconds) {
    return nanoseconds / 6e+10;
}

function nanosecondsToSeconds(nanoseconds) {
    return nanoseconds / 1e+9;
}

function nanosecondsToMilliseconds(nanoseconds) {
    return nanoseconds / 1e+6;
}

function nanosecondsToMicroseconds(nanoseconds) {
    return nanoseconds / 1000;
}

//<<<<<<<<<<<<<<<<<<<<<<<  Temperature Functions  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function celciusToCelcius(celcius) {
    return celcius;
}

function celciusToFarenheit(celcius) {
    return (celcius * 9 / 5) + 32;
}

function celciusToKelvin(celcius) {
    return Number(celcius) + 273.15;
}

function farenheitToFarenheit(farenheit) {
    return farenheit;
}

function farenheitToCelcius(farenheit) {
    return (farenheit - 32) * 5 / 9;
}

function farenheitToKelvin(farenheit) {
    return (Number(farenheit) + 459.67) * (5 / 9);
}

function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}

function kelvinToKelvin(kelvin) {
    return kelvin;
}

function kelvinToFarenheit(kelvin) {
    return (kelvin * (9 / 5)) - 459.67;
}

//<<<<<<<<<<<<<<<<<<<<<<  Volume Functions >>>>>>>>>>>>>>>>>>>>>>

//––––––––––––––––––––––––––  toMililiters Functions  ––––––––––––––––––––––––––

function cubicFeetToMililiters(cubicFeet){
    return cubicFeet * 28316.8;
}

function gallonImperialToMililiters(gallonImperial){
    return gallonImperial * 4546.09;
}

function gallonUSToMililiters(gallonUS){
    return gallonUS * 3785.41;
}

function quartUSToMililiters(quartUS){
    return quartUS * 946.353;
}

function pintUSToMililiters(pintUS){
    return pintUS * 473.176;
}

function fluidOunceUSToMililiters(fluidOunceUS){
    return fluidOunceUS * 29.5735;
}

function cupToMililiters(cup){
    return cup * 240;
}

function tableSpoonToMililiters(tableSpoon){
    return tableSpoon * 14.7868;
}

function dramUSToMililiters(dramUS){
    return dramUS * 3.69669;
}

function cubicCentimeterToMililiters(cubicCentimeter){
    return cubicCentimeter;
}

function cubicMeterToMililiters(cubicMeter){
    return cubicMeter * 1e+6;
}

function literToMililiters(liter){
    return liter * 1000;
}

function mililiterstoMililiters(mililiters){
    return mililiters;
}

//––––––––––––––––––––––––––  mililitersTo Functions  ––––––––––––––––––––––––––

function mililitersToCubicFeet(mililiters){
    return mililiters / 28316.8;
}

function mililitersToGallonImperial(mililiters){
    return mililiters / 4546.09;
}

function mililitersToGallonUS(mililiters){
    return mililiters / 3785.41;
}

function mililitersToQuartUS(mililiters){
    return mililiters / 946.353;
}

function mililitersToPintUS(mililiters){
    return mililiters / 473.176;
}

function mililitersToFluidOunceUS(mililiters){
    return mililiters / 29.5735;
}

function mililitersToCup(mililiters){
    return mililiters / 240;
}

function mililitersToTablespoon(mililiters){
    return mililiters / 14.7868;
}

function mililitersToDramUS(mililiters){
    return mililiters / 3.69669;
}

function mililitersToCubicCentimeter(mililiters){
    return mililiters;
}

function mililitersToCubicMeter(mililiters){
    return mililiters / 1e+6;
}

function MililitersToLiter(liter){
    return liter / 1000;
}

//<<<<<<<<<<<<<<<<<<<<<<  Weight Functions >>>>>>>>>>>>>>>>>>>>>>

//––––––––––––––––––––––––––  toGrams Functions  ––––––––––––––––––––––––––

function shortTonstoGrams(shortTon) {
    return shortTon * 907184.75;
}

function poundstoGrams(pounds) {
    return pounds * 453.592377;
}

function ouncetoGrams(ounce) {
    return ounce * 28.349524;
}

function stonetoGrams(stone) {
    return stone * 6350.292969;
}

function longTontoGrams(longTon) {
    return longTon * 1016046.937500;
}

function metricTontoGrams(metricTon) {
    return metricTon * 1000000;
}

function kilogramtoGrams(kilogram) {
    return kilogram * 1000;
}

function gramstoGrams(grams) {
    return grams;
}

//––––––––––––––––––––––––––  gramsTo Functions  ––––––––––––––––––––––––––

function gramsToShortTons(grams) {
    return grams / 907184.75;
}

function gramsToPounds(grams) {
    return grams / 453.592377;
}

function gramsToOunce(grams) {
    return grams / 28.349524;
}

function gramsToStone(grams) {
    return grams / 6350.292969;
}

function gramsToLongTon(grams) {
    return grams / 1016046.937500;
}

function gramsToMetricTon(grams) {
    return grams / 1000000;
}

function gramsToKilogram(grams) {
    return grams / 1000;
}