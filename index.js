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

      sequelize.query(command).then(function (response) {
      	console.log('response');
      	console.log(response);
      	self.log(response);
      }).catch(function (error) {
      	console.error(error);
      	self.error(response);
      });

    });

}