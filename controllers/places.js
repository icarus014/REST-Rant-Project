const router = require('express').Router()
const place = require('../models/places')

router.get('/',(req, res) => {
    res.render('places/index', {places})
})

router.get ('/new', (req, res)=> {
    res.render('places/new')
})

module.exports = router