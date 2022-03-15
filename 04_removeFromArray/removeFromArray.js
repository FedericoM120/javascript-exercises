/*const removeFromArray = function(list, ...owned) {
    let itemNeeded = [];
    for (let i = 0; i < list.length; i++) {
       for (let j = 0; j < owned.length; j++) {
        if (owned[j] == list[i]) {
            continue;
        } else {
            itemNeeded.push(list[i]);
        };
      };
    };
    return itemNeeded;
};*/




const removeFromArray = function(list, ...owned) {
    let itemNeeded = [];
    if (list.includes(owned)) {
        continue
    } else {
        itemNeeded.push(list)
    };
    return itemNeeded;
};







// Do not edit below this line
module.exports = removeFromArray;