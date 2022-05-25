user = {
  id: 6,
  name: "Hossein",
  lastName: "Zenderoh",
  roles: ["student", "admin"],
  age: 19,
  scores: { english: 10, math: 19.5, physics: 14 },
};
let convert = Object.entries(user);
convert.push(["fatherName", "ali"]);
let newObj = Object.fromEntries(convert);
console.log(newObj);





 
