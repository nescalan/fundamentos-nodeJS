const soyAsincrona = (miCallback) => {
  setTimeout(() => {
    console.log("Estoy siendo asincrono");
    miCallback();
  }, 1000);
};

console.log("Iniciando proceso ...");
soyAsincrona(() => {
  console.log("Terminando el proceso...");
});
