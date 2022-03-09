const removeFromArray = function(list, owned) {
    //create an empty array for list items needed
    //create a for loop that goes through the list
    //if the item is owned then skip it and do not add it to the empty array
    //if the item is not owned the add it to the empty array
    //return the empty array
    let itemNeeded = [];
    for (let i = 0; i < list.length; i++) {
        if (owned == list[i]) {
            continue;
        } else {
            itemNeeded.push(list[i]);
        }
    };
    return itemNeeded;
};

// Do not edit below this line
module.exports = removeFromArray;