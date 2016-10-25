var app = module.exports = require('express').Router();
var $fh = require('fh-mbaas-api');
var parser = require('body-parser');

app.use(parser.json());

app.get('/', (req, res) => {
  //var username = req.query.username;
  var opts = {act: 'list', type: 'todo'};

  $fh.db(opts, (err, data) => { 
    if (err) { console.error(err); }
    else {
      res.json(data);
      //res.end(JSON.stringify(data));
      console.log('READ: ' + JSON.stringify(data));
    }
  });
});

app.get('/:id', (req, res) => {
  var id = req.params.id;
  var opts = {act: 'read', type: 'todo', guid: id};
  $fh.db(opts, (err, data) => { 
    if (err) { console.error(err); }
    else {
      res.json(data);
      //res.end(JSON.stringify(data));
      console.log('READ: ' + JSON.stringify(data));
    }
  });
});

app.post('/', (req, res) => {
  var todo = req.body;
  console.log(JSON.stringify(todo));

  var opts = {  act: 'create', type: 'todo', 
                fields: {
                        'username': todo.username,
                        'what': todo.what, 
                        'when': todo.when
                      }
              };
   
  $fh.db(opts, (err, data) => { 
    if (err) { console.error(err); }
    else {
      console.log('CREATE: ' + JSON.stringify(data));
      res.json(data);
    }
  });
});

app.put('/:id', (req, res) => {
  var id = req.params.id;
  var todo = req.body;
  console.log("UPDATE: %s %s", id, JSON.stringify(todo)); 
  
  var opts = {  act: 'update', 
                type: 'todo', 
                guid: id,
                fields: {
                        'username': todo.username,
                        'what': todo.what, 
                        'when': todo.when
                      }
              };
   
  $fh.db(opts, (err, data) => { 
    if (err) { console.error(err); }
    else {
      console.log('UPDATE: ' + JSON.stringify(data));
      res.json(data);
    }
  });
});

app.delete('/:id', (req, res) => {
  var id = req.params.id;
  var opts = { act: 'delete', type: 'todo', guid: id };
  $fh.db(opts, (err, data) => { 
    if (err) { console.error(err); }
    else {
      console.log('DELETE: ' + JSON.stringify(data));
      res.json(data);
    }
  });
});
