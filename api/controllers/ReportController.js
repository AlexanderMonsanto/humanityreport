/**
 * ReportController
 *
 * @description :: Server-side logic for managing reports
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  show:function(req,res){
    var id = req.params.id
    Report.find({where:{id: req.params.id}}).exec(function(err,data){
      console.log(data)
      res.view('report/show',{data:data});
    })
  },
  new:function(req,res){

    res.view('report/new',{person:'Monsanto'});

  },
  create:function(req,res){
    var humanRightsReport = {
      title: req.body.title,
      description: req.body.description,
      type: req.body.type,
      street: req.body.street,
      city: req.body.city,
      province: req.body.province,
      postalCode: req.body.postalCode,
      country: req.body.country
    }

    // res.send(humanRightsReport);
    console.log(humanRightsReport);


    Report.create(humanRightsReport).then(function(data){
      //
      res.redirect('/');
    }).catch(function(err){
      //do something with err (tell the user somehow)
      sails.log.error(err);
      //sails.log.info .. .error  .debug
      res.redirect('/')
    })



    //redirect to thankyou
    //

  }
};

