# A Simple DAPP Counter

## Preparación del ambiente

En el ambiente es requerido, tener instalado:

* [Git](https://nodejs.org/en/)
* [nodeJs](https://nodejs.org/en/)
* [Ganache](https://truffleframework.com/ganache)
* [Truffle](https://truffleframework.com/)
* [Metamask](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=es)
* [Python](https://www.python.org/downloads/)

Versiones específicas en las que el proyecto funciona bien:
* node +v14
* npm +v6.14.4 o yarn +v1.22.10
* Truffle +v5.3.2 (core: 5.3.2)
* Web3.js +v1.3.5 (npm install web3 - install local)
* solcjs +v0.8.3 (npm install -g solc / solcjs --version)
* ganache +v6.12.2 (npm install -g ganache-cli)

## Ejecución del proyecto

### PASO 1: Clonación

Descargar el proyecto con git

```
git clone <url repo>
```

### PASO 2: Iniciar Ganache

Iniciar el cliente ganache que se haya descargado. 
Configurarlo en el puerto 8545.
Se puede usar el cliente desktop (en windows) o instalar con npm:

```
npm i -g ganache-cli
```

Luego, ejecutar y cargar cuentas, con el siguiente comando:

(tener en cuenta, que tiene configurado el directorio ~/gancahe, con nomenclatura de Linux, cambiarlo según el sistema operativo y/o path deseado en donde se guardarán los archivos que genere gancahe)

```
ganache-cli --defaultBalanceEther 199999999000000000000 --mem --host 0.0.0.0 --port 8545 --db ~/ganache --account="0x52574e78caa222e1277a85f3abab9892cb1445037c8b77bb54b7471204de3bee, 199999999000000000000" --account="0x939159cb0efa606094628c7c399892b04a8ef84f3930f1c80f89135cff4b3015, 199999999000000000000" --account="0xbfcc6503da34fe32b2f40a6f6907665c16563a65cd079d0c880d314da71a8195, 199999999000000000000" --account="0x35c7e3217452136e2f5897fe47808b5d56d73a0069d8c6dd7a6eb252a9fdbad9, 199999999000000000000" --account="0x17340cb3e0844b71f2af7ced064a9c12757534e32df12849b6ca04e9010e678a, 199999999000000000000" --account="0x53a5bfb2ad9db755570d419d423e924b9c1de41fb5d5a6f78bdfbd4f18ed4f60, 199999999000000000000" --account="0xf023b7315ac0f0404c6c7dc568dccfae5b15deec10b7e9c2385963fe3912e97b, 199999999000000000000" --account="0xffbf73879efbc872b55977ac5e4bc1bb1acc147e6f1dab4319449f56fb8e3361, 199999999000000000000"

```

### PASO 3: Configurar variables de entorno

Configurar las variables de entorno, como indica el archivo de ejemplo [app/sample_env](app/sample_env) para la aplicación de UI y el archivo [blk/sample_env](blk/sample_env) para la parte de Blockchain. Éste último, no hace falta configurar, si se usará ganache en ambiente local.

```
# Configuración de archivo .env para la UI (/app)

BLKPROVIDER='"http://127.0.0.1:8545"'
METAMASK=false
```

```
# Configuración de archivo .env para Blockchain (necesario si no se usa ganache)
#(poner los valores de la cuenta de infura o otro proveedor de nodos de red de ethereum)

export INFURA_KEY=""
export MNEMONIC=""
```


### PASO 4: Configurar metaMask

El proyecto puede o no usar metamask, según la configuración de una variable de entorno (METAMASK=true o METAMASK=false). En caso de usar metamask, hay que conectarlo a la blockchain e importar las cuentas que tiene fijas el proyecto. Para ello:

* Instalar la extensión de metamask en el navegador
* Desbloquearlo (si está protegido con una contraseña)
* Conectarse a la blockchain local de ganache (por defecto http://localhost:8545)
* Importar una cuenta de ganache que nos permitirá tener una cuenta local, con ethers 
* Importar las cuentas de la aplicación. Al tratarse de una POC, las cuentas de usuarios están fijas. Son las indicadas en el archivo [app\testAccounts.txt](app\testAccounts.txt). Dichas cuentas se tienen que importar en MetaMask y fondear con etheres de alguna de las cuentas de Ganache.


### PASO 5: Compilar, testear, publicar y desplegar el contrato inteligente

#### Compilación los contratos

Para realizar la compilación del contrato, se tiene que ejecutar el siguiente comando:

```
truffle compile
```

#### Testear del contrato

Para realizar las pruebas del contrato, se tiene que ejecutar el siguiente comando:

```
truffle test
```

#### Migración del contrato a una blockchain

Teniendo los contratos compilados e iniciado _Ganache_, se pueden migrar a la blockchain con el siguiente comando:

```
truffle migrate --reset
```

Si se desea desplegar en otra red, diferente a la local, se tiene que usar el parámetro _network_ y tener configurada la red en el archivo _truffle.js_.

```
# Depliegue en Rinkeby
truffle migrate --reset --network rinkeby

# Despliegue en Ropsten
truffle migrate --reset --network ropsten
```

### PASO 6: Iniciar la interfaz Web

Se puede iniciar la interfaz web con el siguiente comando 

```
yarn start
```

Luego, ir a la url: http://localhost:3000

## Comandos útiles

# Compile with solc / solcjs

```
solcjs --pretty-json --combined-json=abi,bin --abi --overwrite \ -o ./build/contracts ./src/contracts/counter.sol
```
