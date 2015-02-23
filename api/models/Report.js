/**
* Report.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/
var geocoderProvider = 'google';
var httpAdapter = 'http';
var geocoder = require('node-geocoder').getGeocoder(geocoderProvider, httpAdapter);


module.exports = {

  attributes: {
    title:{
      type:'string',
      required:true
    },
    description:{
      type:'string'
    },
    type:{
      type:'string',
      enum:['Workers Rights Abuse','Sexual Abuse/Human Trafficing','Displacement','Anti-LGBT Violence','Womens Rights Abuse','Religious Violence','Ethnic Violence','Environmental Degridation','Privacy Violations','Other']
    },
    street:{
      type:'string'
    },
    city:{
      type:'string'
    },
    province:{
      type:'string'
    },
    postalCode:{
      type:'string'
    },
    country:{
      type:'string'
    },
    latitude: {
      type: 'string'
    },
    longitude: {
      type:'string'
    },
  },
    beforeCreate: function(values, cb) {
      var address = values.street + " " + values.city + " " + values.province + " " + values.postalCode + " " + values.country;
      console.log("address", address)
      geocoder.geocode(address, function(err, res) {
        console.log(res);
        if(err) return cb(err);
        values.latitude = res[0].latitude;
        values.longitude = res[0].longitude;
        cb()
      });
    }
};

