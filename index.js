function add(a, b) {
  return a + b;
}

module.exports = { add };

if (require.main === module) {
  console.log("App running. 2 + 3 =", add(2, 3));
}
