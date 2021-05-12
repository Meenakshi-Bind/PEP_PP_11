function rainDance(rainfallobj) {
    myObj = []
    for (let i = 0; i < rainfallobj.length; i++) {
        let newobj = {};
        newobj["name"] = rainfallobj[i]["name"];
        let avgRainfall = 0;
        let arr = rainfallobj[i]["rainfall"];
        for (let j = 0; j < arr.length; j++) {
            avgRainfall += arr[j]
        }
        avgRainfall = avgRainfall / (arr.length);
        newobj["avgRainfall"] = avgRainfall;
        myObj.push(newobj);
    }
    return myObj;
}