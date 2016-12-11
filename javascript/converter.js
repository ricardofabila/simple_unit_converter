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
 * All code is compliant with google's JavaScript standards
 */

'use strict';

//<<<<<<<<<<<<<<<<<<<<<<  Area Functions >>>>>>>>>>>>>>>>>>>>>>

//––––––––––––––––––––––––––  toCMs Functions  ––––––––––––––––––––––––––

/**
 * squaremilimetersToCms - converts squaremilimeters to centimeters
 *
 * @param  {Number} milimeters - takes in milimiters
 * @return {Number}            - returns centimeters
 */
function squaremilimetersToCms(milimeters) {
  return milimeters * 0.01;
}

function squarecmsToCms(cms) {
  return cms;
}

function squaremetersToCms(meters) {
  let result = kilometers * 10000000000;
  return Math.round(result * 100000) / 100000;
}

function hectareasToCms(hectareas) {
  let result = hectareas * 100000000;
  return Math.round(result * 100000) / 100000;
}

function squareinchesToCms(inches) {
  let result = inches * 6.4516;
  return Math.round(result * 100000) / 100000;
}

function squarefeetToCms(feet) {
  let result = 929.0304 * feet;
  return Math.round(result * 100000) / 100000;
}

function squareyardsToCms(yard) {
  let result = 8361.2736 * yard;
  return Math.round(result * 100000) / 100000;
}

function squaremilesToCms(miles) {
  let result = miles * 25899880448;
  return Math.round(result * 100000) / 100000;
}

function acresToCms(acres) {
  let result = acres * 40468564.224;
  return Math.round(result * 100000) / 100000;
}

//––––––––––––––––––––––––––  cmTo Functions  ––––––––––––––––––––––––––

function cmsToSquaremilimeters(cm) {
  let result = cm * 100;
  return Math.round(result * 100000) / 100000;
}

function cmsToSquaremeters(cm) {
  let result = cm * 0.0001;
  return Math.round(result * 100000) / 100000;
}

function cmsToSquarekilometers(cm) {
  let result = cm * 10.0e-11;
  return Math.round(result * 100000) / 100000;
}

function cmsToHectareas(cm) {
  let result = cm * 1.0e-8;
  return Math.round(result * 100000) / 100000;
}

function cmsToSquareinches(cm) {
  let result = cm * 0.15500031;
  return Math.round(result * 100000) / 100000;
}

function cmsToSquarefeet(cm) {
  let result = cm * 0.00107639104;
  return Math.round(result * 100000) / 100000;
}

function cmsToSquareyards(cm) {
  let result = cm * 0.000119599005;
  return Math.round(result * 100000) / 100000;
}

function cmsToSquaremiles(cm) {
  let result = cm * 3.8610216e-11;
  return Math.round(result * 100000) / 100000;
}

function cmsToAcres(cm) {
  let result = cm * 2.47e-8;
  return Math.round(result * 100000) / 100000;
}

//<<<<<<<<<<<<<<<<<<<<<<<  Computer Storage Functions  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//––––––––––––––––––––––––––  toBits Functions  ––––––––––––––––––––––––––

function bitsToBits(bits) {
  return bits;
}

function bytesToBits(bytes) {
  let result = bytes * 8;
  return Math.round(result * 100000) / 100000;
}

function kilobytesToBits(kilobytes) {
  let result = kilobytes * 1024 * 8;
  return Math.round(result * 100000) / 100000;
}

function megabytesToBits(megabytes) {
  let result = megabytes * 1024 * 1024 * 8;
  return Math.round(result * 100000) / 100000;
}

function gigabytesToBits(gigabytes) {
  let result = gigabytes * 1024 * 1024 * 1024 * 8;
  return Math.round(result * 100000) / 100000;
}

function terabytesToBits(terabytes) {
  let result = terabytes * 1024 * 1024 * 1024 * 1024 * 8;
  return Math.round(result * 100000) / 100000;
}

//––––––––––––––––––––––––––  bitsTo Functions  ––––––––––––––––––––––––––

function bitsToBytes(bits) {
  let result = bits / 8;
  return Math.round(result * 100000) / 100000;
}

function bitsToKilobytes(bits) {
  let result = bits / (1024 * 8);
  return Math.round(result * 100000) / 100000;
}

function bitsToMegabytes(bits) {
  let result = bits / (1024 * 1024 * 8);
  return Math.round(result * 100000) / 100000;
}

function bitsToGigabytes(bits) {
  let result = bits / (1024 * 1024 * 1024 * 8);
  return Math.round(result * 100000) / 100000;
}

function bitsToTerabytes(bits) {
  let result = bits / (1024 * 1024 * 1024 * 1024 * 8);
  return Math.round(result * 100000) / 100000;
}

//<<<<<<<<<<<<<<<<<<<<<<<  Energy Functions  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//––––––––––––––––––––––––––  toCalories Functions  ––––––––––––––––––––––––––

function caloriesTocalories(calories) {
  return calories;
}

function btusTocalories(btus) {
  let result = btus * 251.995758;
  return Math.round(result * 100000) / 100000;
}

function ergsTocalories(ergs) {
  let result = ergs * 2.39006e-13;
  return Math.round(result * 100000) / 100000;
}

function footPoundsTocalories(footPounds) {
  let result = footPounds * 0.323832;
  return Math.round(result * 100000) / 100000;
}

function joulesTocalories(joules) {
  let result = joules * 0.238846;
  return Math.round(result * 100000) / 100000;
}

function kilogramCaloriesTocalories(kilogramCalories) {
  let result = kilogramCalories * 1000;
  return Math.round(result * 100000) / 100000;
}

function kilogramMetersTocalories(kilogramMeters) {
  let result = kilogramMeters * 2.342278;
  return Math.round(result * 100000) / 100000;
}

function kilowattHoursTocalories(kilowattHours) {
  let result = kilowattHours * 859845.25;
  return Math.round(result * 100000) / 100000;
}

function newtonMetersTocalories(newtonMeters) {
  let result = newtonMeters * 0.238846;
  return Math.round(result * 100000) / 100000;
}

function wattHoursTocalories(wattHours) {
  let result = wattHours * 859.845215;
  return Math.round(result * 100000) / 100000;
}

//––––––––––––––––––––––––––  caloriesTo Functions  ––––––––––––––––––––––––––

function caloriesToBtus(calories) {
  let result = calories / 251.995758;
  return Math.round(result * 100000) / 100000;
}

function caloriesToErgs(calories) {
  let result = calories / 2.39006e-13;
  return Math.round(result * 100000) / 100000;
}

function caloriesToFootPounds(calories) {
  let result = calories / 0.323832;
  return Math.round(result * 100000) / 100000;
}

function caloriesToJoules(calories) {
  let result = calories / 0.238846;
  return Math.round(result * 100000) / 100000;
}

function caloriesToKilogramCalories(calories) {
  let result = calories / 1000;
  return Math.round(result * 100000) / 100000;
}

function caloriesToKilogramMeters(calories) {
  let result = calories / 2.342278;
  return Math.round(result * 100000) / 100000;
}

function caloriesKToilowattHours(calories) {
  let result = calories / 859845.25;
  return Math.round(result * 100000) / 100000;
}

function caloriesToNewtonMeters(calories) {
  let result = calories / 0.238846;
  return Math.round(result * 100000) / 100000;
}

function caloriesToWattHours(calories) {
  let result = calories / 859.845215;
  return Math.round(result * 100000) / 100000;
}

//<<<<<<<<<<<<<<<<<<<<<<  Length Functions >>>>>>>>>>>>>>>>>>>>>>

//––––––––––––––––––––––––––  toCm Functions  ––––––––––––––––––––––––––

function mmToCm(mm) {
  let result = mm / 10;
  return Math.round(result * 100000) / 100000;
}

function cmToCm(cm) {
  let result = cm;
  return Math.round(result * 100000) / 100000;
}

function metersToCm(meters) {
  let result = meters * 100;
  return Math.round(result * 100000) / 100000;
}

function kilometersToCm(kilometers) {
  let result = kilometers * 100000;
  return Math.round(result * 100000) / 100000;
}

function inchesToCm(inches) {
  let result = 2.54 * inches;
  return Math.round(result * 100000) / 100000;
}

function feetToCm(feet) {
  let result = 30.48 * feet;
  return Math.round(result * 100000) / 100000;
}

function yardsToCm(yard) {
  let result = 91.440002 * yard;
  return Math.round(result * 100000) / 100000;
}

function milesToCm(miles) {
  let result = 160934.406250 * miles;
  return Math.round(result * 100000) / 100000;
}

//––––––––––––––––––––––––––  cmTo Functions  ––––––––––––––––––––––––––

function cmToMm(cm) {
  let result = cm * 10;
  return Math.round(result * 100000) / 100000;
}

function cmToMeters(cm) {
  let result = cm / 100;
  return Math.round(result * 100000) / 100000;
}

function cmToKilometers(cm) {
  let result = cm / 100000;
  return Math.round(result * 100000) / 100000;
}

function cmToInches(cm) {
  let result = cm / 2.54;
  return Math.round(result * 100000) / 100000;
}

function cmToFeet(cm) {
  let result = cm / 30.48;
  return Math.round(result * 100000) / 100000;
}

function cmToYards(cm) {
  let result = cm / 91.440002;
  return Math.round(result * 100000) / 100000;
}

function cmToMiles(cm) {
  let result = cm / 160934.406250;
  return Math.round(result * 100000) / 100000;
}

//<<<<<<<<<<<<<<<<<<<<<<  Speed Functions >>>>>>>>>>>>>>>>>>>>>>

//––––––––––––––––––––––––––  toMeterPerSecond Functions  ––––––––––––––––––––––––––

function knotsToMeterPerSecond(knots) {
  let result = knots * 0.514444;
  return Math.round(result * 100000) / 100000;
}

function milesPerHourToMeterPerSecond(milesPerHour) {
  let result = milesPerHour * 0.447040;
  return Math.round(result * 100000) / 100000;
}

function milesPerMinuteToMeterPerSecond(milesPerMinute) {
  let result = milesPerMinute * 26.822399;
  return Math.round(result * 100000) / 100000;
}

function feetPerMinuteToMeterPerSecond(feetPerMinute) {
  let result = feetPerMinute * 0.005080;
  return Math.round(result * 100000) / 100000;
}

function feetPerSecondToMeterPerSecond(feetPerSecond) {
  let result = feetPerSecond * 0.304800;
  return Math.round(result * 100000) / 100000;
}

function kilometersPerHourToMeterPerSecond(kilometersPerHour) {
  let result = kilometersPerHour * 0.277778;
  return Math.round(result * 100000) / 100000;
}

function kilometersPerMinuteToMeterPerSecond(kilometersPerMinute) {
  let result = kilometersPerMinute * 16.666666;
  return Math.round(result * 100000) / 100000;
}

function metersPerSecondToMeterPerSecond(metersPerSecond) {
  return metersPerSecond;
}

//––––––––––––––––––––––––––  metersPerSecondTo Functions  ––––––––––––––––––––––––––

function meterPerSecondKnots(metersPerSecond) {
  let result = metersPerSecond / 0.514444;
  return Math.round(result * 100000) / 100000;
}

function meterPerSecondMilesPerHour(metersPerSecond) {
  let result = metersPerSecond / 0.447040;
  return Math.round(result * 100000) / 100000;
}

function meterPerSecondMilesPerMinute(metersPerSecond) {
  let result = metersPerSecond / 26.822399;
  return Math.round(result * 100000) / 100000;
}

function meterPerSecondFeetPerMinutes(metersPerSecond) {
  let result = metersPerSecond / 0.005080;
  return Math.round(result * 100000) / 100000;
}

function meterPerSecondFeetPerSecond(metersPerSecond) {
  let result = metersPerSecond / 0.304800;
  return Math.round(result * 100000) / 100000;
}

function meterPerSecondToKilometersPerHour(metersPerSecond) {
  let result = metersPerSecond / 0.277778;
  return Math.round(result * 100000) / 100000;
}

function meterPerSecondToKilometersPerMinute(metersPerSecond) {
  let result = metersPerSecond / 16.666666;
  return Math.round(result * 100000) / 100000;
}

//<<<<<<<<<<<<<<<<<<<<<<<  Time Functions  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//––––––––––––––––––––––––––  toNanoseconds Functions  ––––––––––––––––––––––––––

function yearsToNanoseconds(years) {
  let result = years * 3.154e+16;
  return Math.round(result * 100000) / 100000;
}

function weeksToNanoseconds(weeks) {
  let result = weeks * 6.048e+14;
  return Math.round(result * 100000) / 100000;
}

function daysToNanoseconds(days) {
  let result = days * 8.64e+13;
  return Math.round(result * 100000) / 100000;
}

function hoursToNanoseconds(hours) {
  let result = hours * 3.6e+12;
  return Math.round(result * 100000) / 100000;
}

function minutesToNanoseconds(minutes) {
  let result = minutes * 6e+10;
  return Math.round(result * 100000) / 100000;
}

function secondsToNanoseconds(seconds) {
  let result = seconds * 1e+9;
  return Math.round(result * 100000) / 100000;
}

function millisecondsToNanoseconds(milliseconds) {
  let result = milliseconds * 1e+6;
  return Math.round(result * 100000) / 100000;
}

function microsecondsToNanoseconds(microseconds) {
  let result = microseconds * 1000;
  return Math.round(result * 100000) / 100000;
}

function nanosecondsToNanoseconds(nanoseconds) {
  return nanoseconds;
}

//––––––––––––––––––––––––––  nanosecondsTo Functions  ––––––––––––––––––––––––––

function nanosecondsToYears(nanoseconds) {
  let result = nanoseconds / 3.154e+16;
  return Math.round(result * 100000) / 100000;
}

function nanosecondsToWeeks(nanoseconds) {
  let result = nanoseconds / 6.048e+14;
  return Math.round(result * 100000) / 100000;
}

function nanosecondsToDays(nanoseconds) {
  let result = nanoseconds / 8.64e+13;
  return Math.round(result * 100000) / 100000;
}

function nanosecondsToHours(nanoseconds) {
  let result = nanoseconds / 3.6e+12;
  return Math.round(result * 100000) / 100000;
}

function nanosecondsToMinutes(nanoseconds) {
  let result = nanoseconds / 6e+10;
  return Math.round(result * 100000) / 100000;
}

function nanosecondsToSeconds(nanoseconds) {
  let result = nanoseconds / 1e+9;
  return Math.round(result * 100000) / 100000;
}

function nanosecondsToMilliseconds(nanoseconds) {
  let result = nanoseconds / 1e+6;
  return Math.round(result * 100000) / 100000;
}

function nanosecondsToMicroseconds(nanoseconds) {
  let result = nanoseconds / 1000;
  return Math.round(result * 100000) / 100000;
}

//<<<<<<<<<<<<<<<<<<<<<<<  Temperature Functions  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function celciusToCelcius(celcius) {
  return celcius;
}

function celciusToFarenheit(celcius) {
  let result = (celcius * 9 / 5) + 32;
  return Math.round(result * 100000) / 100000;
}

function celciusToKelvin(celcius) {
  let result = Number(celcius) + 273.15;
  return Math.round(result * 100000) / 100000;
}

function farenheitToFarenheit(farenheit) {
  return farenheit;
}

function farenheitToCelcius(farenheit) {
  let result = (farenheit - 32) * 5 / 9;
  return Math.round(result * 100000) / 100000;
}

function farenheitToKelvin(farenheit) {
  let result = (Number(farenheit) + 459.67) * (5 / 9);
  return Math.round(result * 100000) / 100000;
}

function kelvinToCelsius(kelvin) {
  let result = kelvin - 273.15;
  return Math.round(result * 100000) / 100000;
}

function kelvinToKelvin(kelvin) {
  return kelvin;
}

function kelvinToFarenheit(kelvin) {
  let result = (kelvin * (9 / 5)) - 459.67;
  return Math.round(result * 100000) / 100000;
}

//<<<<<<<<<<<<<<<<<<<<<<  Volume Functions >>>>>>>>>>>>>>>>>>>>>>

//––––––––––––––––––––––––––  toMililiters Functions  ––––––––––––––––––––––––––

function cubicFeetToMililiters(cubicFeet) {
  let result = cubicFeet * 28316.8;
  return Math.round(result * 100000) / 100000;
}

function gallonImperialToMililiters(gallonImperial) {
  let result = gallonImperial * 4546.09;
  return Math.round(result * 100000) / 100000;
}

function gallonUSToMililiters(gallonUS) {
  let result = gallonUS * 3785.41;
  return Math.round(result * 100000) / 100000;
}

function quartUSToMililiters(quartUS) {
  let result = quartUS * 946.353;
  return Math.round(result * 100000) / 100000;
}

function pintUSToMililiters(pintUS) {
  let result = pintUS * 473.176;
  return Math.round(result * 100000) / 100000;
}

function fluidOunceUSToMililiters(fluidOunceUS) {
  let result = fluidOunceUS * 29.5735;
  return Math.round(result * 100000) / 100000;
}

function cupToMililiters(cup) {
  let result = cup * 240;
  return Math.round(result * 100000) / 100000;
}

function tableSpoonToMililiters(tableSpoon) {
  let result = tableSpoon * 14.7868;
  return Math.round(result * 100000) / 100000;
}

function dramUSToMililiters(dramUS) {
  let result = dramUS * 3.69669;
  return Math.round(result * 100000) / 100000;
}

function cubicCentimeterToMililiters(cubicCentimeter) {
  return cubicCentimeter;
}

function cubicMeterToMililiters(cubicMeter) {
  let result = cubicMeter * 1e+6;
  return Math.round(result * 100000) / 100000;
}

function literToMililiters(liter) {
  let result = liter * 1000;
  return Math.round(result * 100000) / 100000;
}

function mililiterstoMililiters(mililiters) {
  return mililiters;
}

//––––––––––––––––––––––––––  mililitersTo Functions  ––––––––––––––––––––––––––

function mililitersToCubicFeet(mililiters) {
  let result = mililiters / 28316.8;
  return Math.round(result * 100000) / 100000;
}

function mililitersToGallonImperial(mililiters) {
  let result = mililiters / 4546.09;
  return Math.round(result * 100000) / 100000;
}

function mililitersToGallonUS(mililiters) {
  let result = mililiters / 3785.41;
  return Math.round(result * 100000) / 100000;
}

function mililitersToQuartUS(mililiters) {
  let result = mililiters / 946.353;
  return Math.round(result * 100000) / 100000;
}

function mililitersToPintUS(mililiters) {
  let result = mililiters / 473.176;
  return Math.round(result * 100000) / 100000;
}

function mililitersToFluidOunceUS(mililiters) {
  let result = mililiters / 29.5735;
  return Math.round(result * 100000) / 100000;
}

function mililitersToCup(mililiters) {
  let result = mililiters / 240;
  return Math.round(result * 100000) / 100000;
}

function mililitersToTablespoon(mililiters) {
  let result = mililiters / 14.7868;
  return Math.round(result * 100000) / 100000;
}

function mililitersToDramUS(mililiters) {
  let result = mililiters / 3.69669;
  return Math.round(result * 100000) / 100000;
}

function mililitersToCubicCentimeter(mililiters) {
  return mililiters;
}

function mililitersToCubicMeter(mililiters) {
  let result = mililiters / 1e+6;
  return Math.round(result * 100000) / 100000;
}

function MililitersToLiter(liter) {
  let result = liter / 1000;
  return Math.round(result * 100000) / 100000;
}

//<<<<<<<<<<<<<<<<<<<<<<  Weight Functions >>>>>>>>>>>>>>>>>>>>>>

//––––––––––––––––––––––––––  toGrams Functions  ––––––––––––––––––––––––––

function shortTonstoGrams(shortTon) {
  let result = shortTon * 907184.75;
  return Math.round(result * 100000) / 100000;
}

function poundstoGrams(pounds) {
  let result = pounds * 453.592377;
  return Math.round(result * 100000) / 100000;
}

function ouncetoGrams(ounce) {
  let result = ounce * 28.349524;
  return Math.round(result * 100000) / 100000;
}

function stonetoGrams(stone) {
  let result = stone * 6350.292969;
  return Math.round(result * 100000) / 100000;
}

function longTontoGrams(longTon) {
  let result = longTon * 1016046.937500;
  return Math.round(result * 100000) / 100000;
}

function metricTontoGrams(metricTon) {
  let result = metricTon * 1000000;
  return Math.round(result * 100000) / 100000;
}

function kilogramtoGrams(kilogram) {
  let result = kilogram * 1000;
  return Math.round(result * 100000) / 100000;
}

function gramstoGrams(grams) {
  return grams;
}

//––––––––––––––––––––––––––  gramsTo Functions  ––––––––––––––––––––––––––

function gramsToShortTons(grams) {
  let result = grams / 907184.75;
  return Math.round(result * 100000) / 100000;
}

function gramsToPounds(grams) {
  let result = grams / 453.592377;
  return Math.round(result * 100000) / 100000;
}

function gramsToOunce(grams) {
  let result = grams / 28.349524;
  return Math.round(result * 100000) / 100000;
}

function gramsToStone(grams) {
  let result = grams / 6350.292969;
  return Math.round(result * 100000) / 100000;
}

function gramsToLongTon(grams) {
  let result = grams / 1016046.937500;
  return Math.round(result * 100000) / 100000;
}

function gramsToMetricTon(grams) {
  let result = grams / 1000000;
  return Math.round(result * 100000) / 100000;
}

function gramsToKilogram(grams) {
  let result = grams / 1000;
  return Math.round(result * 100000) / 100000;
}
