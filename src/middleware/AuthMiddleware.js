const jwt = require('jsonwebtoken');
module.exports = (req, res, next) => {
    let token = req.headers['token'];
    console.log('token', token);
    jwt.verify(token, "123-xyz", function(err, decodedData) {
        if(err){
            console.log('err', err);
            res.status(401).json({status : "unauthorize"})
        }else{
            let email = decodedData['data'];
            req.headers.email = email;
            next();
        }
    });
}