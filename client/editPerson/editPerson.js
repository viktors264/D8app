Template.editPerson.events({
  'submit .editPersonForm': function(event){
    event.preventDefault();
    var currentPerson = this._id;
    var nameVar = event.target.personName.value;
    var ageVar = event.target.personAge.value;

    if ($('.personIsActive').is(':checked')) {
        var personIsActive = true;
    } else personIsActive = false;

    Meteor.call("editPerson", currentPerson, nameVar, ageVar, personIsActive);
    Router.go('/');
  }
});
