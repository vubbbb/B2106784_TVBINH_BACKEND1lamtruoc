const express = require("express");
const contacts = require("../controllers/contact.controller");

const router = express.Router();

/** khi có yêu cầu http.. đến đường dẫn "/", các hàm
từ module contact sẽ được gọi để thực thi theo yêu cầu
 tương ứng*/ 
router.route("/")
    .get(contacts.findAll)
    .post(contacts.create)
    .delete(contacts.deleteAll);

router.route("/favorite")
    .get(contacts.findAllFavorite);

router.route("/:id")
    .get(contacts.findOne)
    .put(contacts.update)
    .delete(contacts.delete);

module.exports = router;