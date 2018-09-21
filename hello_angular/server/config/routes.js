
const taskController = require('../controllers/task');
module.exports = function(app) {
  app.get('/', taskController.index);
  app.post('/', taskController.create);
  app.get('/:id', taskController.show);
  app.delete('/:id/delete', taskController.delete)
  app.put('/:id/update', taskController.update);
};
