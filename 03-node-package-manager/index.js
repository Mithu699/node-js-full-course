const lodash = require("lodash");

const names = ["sudhanshu", "saggy ", "john", "bucther", "mia"];

const capitalize = lodash.map(names, lodash.upperCase);
console.log(capitalize);
