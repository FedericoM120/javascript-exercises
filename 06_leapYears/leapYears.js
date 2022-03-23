const leapYears = function(year) {
    //if year is divisble by 4 return true
    // else if year is divisble by 100 and 400 return true
    // else if year is divisble by 400 return true
    //else return false
    //1900 = false
    //1600 = true
    //700 = false


    if (year % 100 == 0 && year % 400 == 0) {
        return true;
    }else if (year % 4 == 0 && year % 100 == 0) {
        return false;
    }else if (year % 4 == 0) {
        return true;
    }else if (year % 400 == 0) {
        return true;
    } else {
        return false;
    };
};

// Do not edit below this line
module.exports = leapYears;
