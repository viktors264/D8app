Meteor.subscribe("personsList");

Template.personsList.helpers({
  'person':function () {
    return PersonsList.find();
  },

  'totalPersons':function(){
    return PersonsList.find().count();
  }
});

Template.personsList.events({
  'click .viewButton': function(){
    var currentPerson = this._id;
    var route = "/personDetails/" + currentPerson;
    Router.go(route);
  },

  'click .isActiveCheckbox':function(){
    var currentPerson = this._id;
    var activityStatus = this.isActive;

    Meteor.call("isActiveUpdate", currentPerson, activityStatus)
  },

  'click .editButton': function(){
    var currentPerson = this._id;
    var route = "/personEdit/" + currentPerson;
    Router.go(route);
  },

  'click .removeButton': function(){
    var currentPerson = this._id;
    Meteor.call("deletePerson", currentPerson);
  },
  'click .createPersonButton': function(){
    event.preventDefault();
    Router.go('createPerson');
  }
});
