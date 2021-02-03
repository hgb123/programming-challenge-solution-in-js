/*
CodeWars > PaginationHelper
*/

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage) {
  this.collection = collection;
  this.itemsPerPage = itemsPerPage;
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function () {
  return this.collection.length;
};

// returns the number of pages
PaginationHelper.prototype.pageCount = function () {
  return Math.ceil(this.itemCount() / this.itemsPerPage);
};

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function (pageIndex) {
  if (pageIndex + 1 < this.pageCount()) {
    return this.itemsPerPage;
  } else if (pageIndex + 1 === this.pageCount()) {
    return this.itemCount() % this.itemsPerPage;
  }
  return -1;
};

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function (itemIndex) {
  const res = Math.floor(itemIndex / this.itemsPerPage);
  return 0 <= res && res < this.pageCount() ? res : -1;
};
