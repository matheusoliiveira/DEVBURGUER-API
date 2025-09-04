module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'devuser',
  password: 'devpass',
  database: 'devdb',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  }
};
