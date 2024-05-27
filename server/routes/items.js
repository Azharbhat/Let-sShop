const express = require("express")
const router = express.Router()
const cors = require("cors")
const uploadPhoto = require("../middlewares/upload")
const { getItem, additem, updateItem, deleteItem } = require("../controllers/itemsController")

router.get('/', cors(), getItem)

/* The post request must have a body elemnt with name images */
router.post('/additem', additem)

router.put('/:id', updateItem)

router.delete('/:id', deleteItem)

module.exports = router