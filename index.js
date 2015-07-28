module.exports = function (vantage, options) {

	var _ = require('underscore');

	vantage
		.mode('sql')
		.delimiter('sql:')
		.init(function (args, callback){
			this.log('Welcome to SQL mode.\nYou can now directly enter arbitrary SQL commands. To exit, type `exit`.');
			callback();
		})
		.action(function (command, callback) {

			var self = this;

			pg.query(command).spread(function (response, meta) {
				self.log(response);
				cb();
			});

		});

}