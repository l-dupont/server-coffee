module.exports = function(app) {
  app.dataSources.postgres.automigrate('User', function(err) {
    if (err) throw err;
  });
  app.dataSources.postgres.automigrate('Coffee', function(err) {
    if (err) throw err;
  });
};