const checkoutModel = require('../Models/checkoutModel');






exports.createCheckout = async (req, res, next) => {
    console.log('creating.. ', req.body);
    const product = await checkoutModel.create(req.body);

    res.status(200).json({
        success: true,
        data: product
    })

}

exports.getCheckout = async (req, res, next) => {
    console.log('Fetch.. ');
    const product = await checkoutModel.find();

    res.status(200).json({
        success: true,
        data: product
    })

}
