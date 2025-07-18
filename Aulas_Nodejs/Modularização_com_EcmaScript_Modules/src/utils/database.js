const datatypr = {
    userType: "Admin",
    typedata:"Mysql"
}

async function ConnectToDadaBase(dataName) {
    console.log(`Conectado ao banco ${dataName}`)
}

async function disconnetDataBase(dataName) {
    console.log(`Desligando do banco ${dataName}`)
}

export {
    ConnectToDadaBase,
    disconnetDataBase,
    datatypr
}
