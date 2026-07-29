const removeFromArray = function(arr, ...removal) {
    let filtered=arr.slice('');
    removal.forEach(element => {
        filtered=filtered.filter(item => !(item == element && typeof item == typeof element));
    });
        return filtered;
};

// Do not edit below this line
module.exports = removeFromArray;
