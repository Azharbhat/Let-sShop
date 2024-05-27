import React, { useState } from 'react';
import './Additem.css';
import axios from 'axios';

function AddItemForm() {
    const [formData, setFormData] = useState({
        name: '',
        category: '',
        color: '',
        type: '',
        description: '',
        price: '',
        size: '',
        highlights: '',
        detail: '',
        image: [] // Initialize images as an empty array
    });
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const handleFileChange = (event) => {
        const files = event.target.files; // Get the selected files
        const newImages = []; // Array to store new image data
    
        // Loop through each selected file
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const reader = new FileReader();
    
            // Closure to capture the current file in the FileReader.onload callback
            reader.onload = (e) => {
                newImages.push(e.target.result); // Push the result (base64 string) into the newImages array
    
                // If all images have been read, update the state with new image data
                if (newImages.length === files.length) {
                    setFormData((prevValue) => ({
                        ...prevValue,
                        image: [...prevValue.image, ...newImages], // Concatenate new images with previous ones
                    }));
                }
            };
    
            reader.readAsDataURL(file); // Read the file content as Data URL
        }
    };
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here, you can send formData to your server
        console.log(formData);
        axios.post("http://localhost:3000/api/items/additem", { formData })
            .then(res => {
                if(res.data.message=="Item added successfully"){
                    alert("item Added");
                    setFormData({
                        name: '',
                        category: '',
                        color: '',
                        type: '',
                        description: '',
                        price: '',
                        size: '',
                        highlights: '',
                        detail: '',
                        image: [] // Reset images to an empty array
                    });
                }
            })
            .catch(error => {
                console.error('Error posting data:', error);
            });
    };

    return (
        <div className="add-item-form">
            <h1>Add New Item</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder='eg: Clarks Originals' />
                </div>

                <div className="form-group">
                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" name="category" value={formData.category} onChange={handleChange} placeholder='men' />
                </div>

                <div className="form-group">
                    <label htmlFor="color">Color:</label>
                    <input type="text" id="color" name="color" value={formData.color} onChange={handleChange} placeholder='black' />
                </div>

                <div className="form-group">
                    <label htmlFor="type">Type:</label>
                    <input type="text" id="type" name="type" value={formData.type} onChange={handleChange} placeholder='shoes' />
                </div>

                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <textarea id="description" name="description" value={formData.description} onChange={handleChange} placeholder='Front lace-up derby shoes'></textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="price">Price:</label>
                    <input type="number" id="price" name="price" value={formData.price} onChange={handleChange} placeholder='163' />
                </div>

                <div className="form-group">
                    <label htmlFor="size">Size:</label>
                    <input type="text" id="size" name="size" value={formData.size} onChange={handleChange} placeholder='36 38 40' />
                </div>

                <div className="form-group">
                    <label htmlFor="highlights">Highlights:</label>
                    <input type="text" id="highlights" name="highlights" value={formData.highlights} onChange={handleChange} placeholder='"use comma","dark brown"," calf leather"," round toe"," branded insole"," flat rubber sole"' />
                </div>
                <div className="form-group">
                    <label htmlFor="detail">Details:</label>
                    <input type="text" id="detail" name="detail" value={formData.detail} onChange={handleChange} placeholder='"details"' />
                </div>

                <div className="form-group">
                    <label htmlFor="image">Image:</label>
                    <input type="file" id="image" name="image" onChange={handleFileChange} multiple />
                </div>

                <button className='bttn' type="submit">Add Item</button>
            </form>
        </div>
    );
}

export default AddItemForm;
