Template.personDetails.helpers({
  'personDetails':function(personId){
    var currentPerson=this._id;
    Meteor.call('displayPerson', currentPerson);
  }

});
