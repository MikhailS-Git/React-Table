const express = require('express')

// cors is used to be able to send requests on localhost (it manages URL correctly)
const cors = require('cors')
const port = 3001
const api = express()

api.use(cors())

// set server's behavior for GET requests
api.get('/data', (req, res) => {
    const date = new Date().toLocaleString()
    res.send([
        {date, name: 'ball', quantity: 10, distance: 25},
        {date, name: 'gun', quantity: 2, distance: 120},
        {date, name: 'toy', quantity: 34, distance: 12},
        {date, name: 'chair', quantity: 13, distance: 5},
        {date, name: 'table', quantity: 6, distance: 5},
        {date, name: 'cup', quantity: 123, distance: 14},
        {date, name: 'box', quantity: 11, distance: 32},
        {date, name: 'umbrella', quantity: 5, distance: 32},
        {date, name: 'sofa', quantity: 21, distance: 10},
        {date, name: 'shoes', quantity: 23, distance: 7},
        {date, name: 'dress', quantity: 11, distance: 11},
        {date, name: 'hat', quantity: 50, distance: 17}
      ])
})

// start our server api
const server = api.listen(port, (error) => {
    if (error) {
        console.log("Error", error)
    }
    console.log("Server listening on port ", server.address().port)
})