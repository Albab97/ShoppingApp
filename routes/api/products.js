const Product = require('../../db').Product;
const route = require('express').Router();

route.get('/', (req,res) => {
    // To get all Products
    Product.findAll()
        .then((products) => {
            res.status(200).send(products)
        })
        .catch((err) => {
            res.status(500).send("Could not retrieve products")
        })
})

route.post('/', (req,res) => {
    //Validate the values
    /*if(isNaN(req.body.price)){
        return res.status(403).send({
           error :"Price is not a valid number"
        })
    }*/
    // To add new Products
    Product.create({
        name: req.body.name,
        manufacturer : req.body.manufacturer,
        price: parseFloat(req.body.price)
    }).then((product) => {
        res.status(201).send(product)
    }).catch((err) => {
        res.status(501).send({
            error: "Could not add new product"
        })
    })
})

exports = module.exports = route 