module.exports = {
  db: {
    database: 'yomi',
    username: 'wmd',
    password: '123456',
    connect: {
      host: "127.0.0.1",
      dialect: 'mongodb',
      port: 20717,
      pool: {
        max: 5,
        min: 0,
        idle: 10000
      },
      define: {
        freezeTableName: true,
        underscored: true
      }
    }
  },
  cas: {
    local: 'http://127.0.0.1/cas/login',
    validate: '',
    logout: ''
  },
  whitelist: []
}
