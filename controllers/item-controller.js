module.exports = function(app){

    app.post("/items/add", function(req,res){
        // Use sequelize gto create your model db. yourmodel 
        // .then(){res.rediect('')}
        console.log("REQ on back end: "+ req.body.input_name)

        var bodyWrap = req.body
        var myObject = {
            name: bodyWrap.input_name,
            description: bodyWrap.input_description,
            start: bodyWrap.input_start,
            end: bodyWrap.input_end,
            price: bodyWrap.input_price,
            price: bodyWrap.input_photo,
        }
        // res.red
            });


};