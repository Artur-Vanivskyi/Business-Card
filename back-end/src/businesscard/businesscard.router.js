const router = require("express").Router();
const controller = require("./businesscard.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router
.route("/:businesscard_id")
.get(controller.read)
.put(controller.update)
.delete(controller.delete)
.all(methodNotAllowed);


router
.route("/")
.get(controller.list)
//.get(controller.listByFirstName)
.post(controller.create)
.all(methodNotAllowed);


module.exports = router;