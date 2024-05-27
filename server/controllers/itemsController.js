// Import any dependencies needed
// Import any models or services needed to interact with your data
const item = require('../models/itemsModel');

// Define controller functions
const getItem = async (req, res) => {
    try {
        const data = await item.find({});
        res.send(data);
 // Sending the data retrieved from the database as response
    } catch (err) {
        res.status(500).send({ error: err.message }); // Handling error if any occurs
    }
};

const additem = async (req, res) => {
   
    try {
        // Extracting item data from the request body
        const {
            name,
            category,
            color,
            type,
            description,
            price,
            size,
            highlights,
            detail,
            image
        } = req.body.formData;

        // Creating a new item instance
        const sizeArray = size.split(" "); // Split size by full stops
        const highlightsArray = highlights.split(','); // Split highlights by full stops

        // Creating a new item instance
        const newItem = new item({
            name,
            category,
            color,
            type,
            description,
            price,
            size: sizeArray, // Assigning the size array
            highlights: highlightsArray, // Assigning the highlights array
            detail,
            image
        });

        // Saving the new item to the database
        await newItem.save();

        res.status(201).json({ message: 'Item added successfully', item: newItem });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
};


const updateItem = (req, res) => {
    // Implement logic to update an item
    // Example: Item.findByIdAndUpdate(req.params.id, req.body, (err, updatedItem) => { ... });
    res.send('PUT request to update an item');
};

const deleteItem = (req, res) => {
    // Implement logic to delete an item
    // Example: Item.findByIdAndDelete(req.params.id, (err) => { ... });
    res.send('DELETE request to delete an item');
};

// Export controller functions
module.exports = {
    getItem,
    additem: additem, // Corrected export statement for additem
    updateItem,
    deleteItem
};
