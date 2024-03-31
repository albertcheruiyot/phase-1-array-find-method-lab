// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]

  function superbowlWin(record){
    // I used find() method to find a winning entry in the record
    var year = record.find(function(entry){
        // I checked if the result property of the current entry is strictly "W"
        return entry.result === "W"
    })
    // if win eturns year property otherwise return undefined
    return year ? year.year : undefined;
  }