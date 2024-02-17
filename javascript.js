const froyoOrder = prompt(
    "Please input list of froyo"
);

console.log("froyoOrder-->", froyoOrder)

const froyoFlavors = froyoOrder.split(",");

console.log("froyoFlavors--->",froyoFlavors);

function orderArray(array) {
    const flavorCounter = {};
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if(element in flavorCounter) {
            flavorCounter[element] += 1;
        } else {
            flavorCounter[element] = 1;
        }
        

    }
    return flavorCounter;
}

const flavorCount = orderArray(froyoFlavors);
console.table(flavorCount);