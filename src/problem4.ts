function mainf(fn: () => void) {
  setTimeout(fn, 1000);
}

mainf(function () {
  console.log("hello from another function");
});
