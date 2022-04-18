const checkoutModel = require('../Models/checkoutModel');






exports.createcheckout = async (req, res, next) => {
    console.log('creating.. ', req.body);
    const product = await checkoutModel.create(req.body);

    res.status(200).json({
        success: true,
        data: product
    })

}

exports.getcheckout = async (req, res, next) => {
    console.log('creating.. ', req.body);
    const product = await checkoutModel.find();

    res.status(200).json({
        success: true,
        data: product
    })

}
