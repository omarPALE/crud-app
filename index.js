const express = require('express')
const mongoose = require('mongoose');
const app = express();
const productRoute = require("./route/product.route.js");
const Product = require('./models/product.model.js');

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended:false}));

//routes
app.use("/api/products", productRoute)

mongoose.connect("mongodb+srv://omar:om936286319@backenddb.ijtdf.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackEndDB")
.then(()=>{
    console.log("connected to db!");
    app.listen(3000, ()=>{
        console.log("Server is running on port 3000");
    });
})
.catch(()=>{
    console.log("failed to connect to db");
});
// check api
app.get('/',(req,res)=>{
res.send("running on port 3000 from API updated");
});


// // Get all products
// app.get('/api/products', async (req,res)=>{
//     try{
//     const products = await Product.find({});
//     res.status(200).json(products);
//     }catch(error){
//         res.status(500).json({message: error.message});
//     }
// })
// //Get Product By Id
// app.get('/api/product/:id', async (req,res)=>{
//     try{
//     const { id } = req.params ;  
//     const product = await Product.findById(id);
//     res.status(200).json(product);
//     }catch(error){
//         res.status(500).json({message: error.message});
//     }
// })

// //Post Product 
// app.post('/api/products', async (req,res)=>{
//     try{
//         const product = await Product.create(req.body);
//         res.status(200).json(product);

//     } catch (error){
//         res.status(500).json({message: error.message});
//     }
// });

// //Update a Product
// app.put('/api/product/:id', async (req,res)=>{
//     try{
//         const { id } = req.params ;
//         const product = await Product.findByIdAndUpdate(id, req.body, {new: true});
//         if(!product) 
//             return res.status(404).json({message: 'Product not found'});
        
//         const  updatedProduct = await Product.findById(id);
//         res.status(200).json(updatedProduct);

//     } catch (error){
//         res.status(500).json({message: error.message});
//     }
// });

// //  Delete a Product

// app.delete('/api/product/:id', async (req,res)=>{
//     try{
//         const { id } = req.params ;
//         const product = await Product.findByIdAndDelete(id);
//         if(!product) 
//             return res.status(404).json({message: 'Product not found'});
        
//         res.status(200).json("Product deleted successfully");

//     } catch (error){
//         res.status(500).json({message: error.message});
//     }
// });

