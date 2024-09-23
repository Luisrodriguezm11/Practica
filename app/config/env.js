

const env = {
  database: 'practica_parcial',
  username: 'practica_parcial_user',
  password: 'P5lTpYiXNc7pyJDKJWDrG7ky08oIRzZV',
  host: 'dpg-crop7se8ii6s73bf074g-a.oregon-postgres.render.com',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

module.exports = env;