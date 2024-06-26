var retVector = Module['returnVectorData']();

// vector size
var vectorSize = retVector.size();

// reset vector value
retVector.set(vectorSize - 1, 11);

// push value into vector
retVector.push_back(12);

// retrieve value from the vector
for (var i = 0; i < retVector.size(); i++) {
    console.log("Vector Value: ", retVector.get(i));
}

// expand vector size
retVector.resize(20, 1);

var retMap = Module['returnMapData']();

// map size
var mapSize = retMap.size();

// retrieve value from map
console.log("Map Value: ", retMap.get(10));

// figure out which map keys are available
// NB! You must call `register_vector<key_type>`
// to make vectors available
var mapKeys = retMap.keys();
for (var i = 0; i < mapKeys.size(); i++) {
    var key = mapKeys.get(i);
    console.log("Map key/value: ", key, retMap.get(key));
}

// reset the value at the given index position
retMap.set(10, "OtherValue");

// Optional values will return undefined if there is no value.
var optional = Module['returnOptionalData']();
if (optional !== undefined) {
    console.log(optional);
}
