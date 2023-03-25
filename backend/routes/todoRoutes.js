const router = require("express").Router();
const Todo = require("../models/todo");


router.get("/", (req, res) => {
Todo.find((err, result) => {
if(err) throw new Error(err);
res.json(result);
 });
 });

router.post("/new", (req, res) => {
Todo.create(req.body, (err, result) => {
if(err) throw new Error(err);
res.json(result);

if (unsupportedOptions.has(option)) {
    throw new error_1.MongoParseError(`${optionWord} ${Array.from(unsupportedOptions).join(', ')} ${isOrAre} not supported`);
  }

});
});

 router.delete("/:id", (req, res) => {
 Todo.findOneAndRemove({ _id: req.body.id }, (err, result) => {
 if(err) throw new Error(err);
 console.log(result);

 });
 });
module.exports = router;