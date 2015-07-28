module.exports = function (vantage, options) {

  vantage
    .mode('sql')
    .delimiter('sql:')
    .init(function (args, callback){
      this.log('Welcome to SQL mode.\nYou can now directly enter arbitrary SQL commands. To exit, type `exit`.');
      callback();
    })
    .action(function (command, callback) {
      var self = this;

      sequelize.query(command).then(function (results) {
      	self.log(results);
      });

    });

}