import {Cliente} from './Cliente.js'
import { Director } from './Empleados/Director.js';
import { Empleado } from './Empleados/Empleado.js';
import { Gerente } from './Empleados/Gerente.js';
import { SistemaAutenticacion } from './SistemaAutenticacion.js';



// const cliente2 = new Cliente('María','16979808','8989');

const empleado = new Empleado('Juan','123',10000);
empleado.asignarClave('123');
const gerente = new Gerente('Jorge','12367856',12000);

// const director = new Director('Juana','12356',15000);

const cliente = new Cliente('Leonardo','13804050','123224');
cliente.asignarClave('11');
// console.log(empleado.verBonificacion());
// console.log(gerente.verBonificacion());
// console.log(director.verBonificacion());

console.log(SistemaAutenticacion.login(empleado, '123'));
console.log(SistemaAutenticacion.login(cliente, '11'));



// const cuentaDeLeonardo = new CuentaCorriente(cliente, '1', '001');
// const cuentaDeMaria = new CuentaCorriente(cliente2,'2','002');

// const cuentaAhorroLeonardo = new CuentaAhorro(cliente,'9985','001',0);

// const cuentaNominaLeonardo = new CuentaNomina(cliente,'9854','001',100);
// cuentaNominaLeonardo.depositoEnCuenta(150);
// console.log(cuentaNominaLeonardo.verSaldo());

// cuentaNominaLeonardo.retirarDeCuenta(50);
// console.log(cuentaNominaLeonardo.verSaldo());






