/*
LeetCode > Design Underground System

Tags: hash table

Approach:
  init two hash tables
    one stores the k-v pair of current check-in info of a customer
    one stores the k-v pairs of route and its accumulated total time
*/

var UndergroundSystem = function () {
  this.checkInMap = new Map();
  this.routeTotalTimeMap = new Map();
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function (id, stationName, t) {
  this.checkInMap.set(id, { stationName, t });
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function (id, stationName, t) {
  const route = `${this.checkInMap.get(id).stationName} - ${stationName}`;
  if (!this.routeTotalTimeMap.has(route)) {
    this.routeTotalTimeMap.set(route, {
      total: 0,
      count: 0,
    });
  }
  const routeTotalTime = this.routeTotalTimeMap.get(route);
  this.routeTotalTimeMap.set(route, {
    total: routeTotalTime.total + (t - this.checkInMap.get(id).t),
    count: routeTotalTime.count + 1,
  });
  this.checkInMap.delete(id);
};

/**
 * @param {string} startStation
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function (
  startStation,
  endStation
) {
  const route = `${startStation} - ${endStation}`;
  const routeTotalTime = this.routeTotalTimeMap.get(route);
  return routeTotalTime.total / routeTotalTime.count;
};

/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */
