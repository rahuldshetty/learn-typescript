// I personally think this type defeats the complete purpose of "Type"Script.

const json = `{"latitude": 10.11, "longitude":12.12}`
console.log(typeof json)

const current_location = JSON.parse(json)
console.log(current_location, typeof current_location)

// This works for some reason
// Back to JavaScript :)
console.log(current_location.x)
