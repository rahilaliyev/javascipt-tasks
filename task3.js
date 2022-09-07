const obj = [
  { type: "A", value: "Tesla" },
  { type: "A", value: "GMC" },
  { type: "B", value: "KIA" },
  { type: "C", value: "Dodge" },
  { type: "C", value: "Ford" },
];

const result = obj.reduce((acc, val) => {
  if (acc[val.type]) {
    //  obyekt keylerinin typelari eynidirse vergulle ayirmaqla bir array icinde yigmaq ucun kod
    acc[val.type].value = [acc[val.type].value, val.value].join(",");
  } else {
    // typelar eyni olmayan varsa sadece ozunu qaytarmaq ucun kod
    acc[val.type] = val;
  }
  return acc;
}, {});

console.log(Object.values(result));
