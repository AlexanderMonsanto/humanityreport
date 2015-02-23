/**
 * SiteController
 *
 * @description :: Server-side logic for managing sites
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  index:function(req,res){
    // req.setLocale('en');
  res.view('site/index',{person:'Monsanto'});
  },


  find:function(req,res){
    Report.find().exec(function(err,data){
      var data = data
      console.log(data);
      res.view('site/find',{data:data});
    })

  },

  about:function(req,res){
  // req.setLocale('en');
  res.view('site/about',{person:'Monsanto'});
  }

};

