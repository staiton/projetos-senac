import { Conta } from "./modules/conta";

const contaTiago = new Conta(123, 123456, "Tiago");
console.log(contaTiago);

contaTiago.depositar(1000);

console.log(contaTiago);
