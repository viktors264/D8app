Template.createPerson.events({
  'submit .addPersonForm': function(event){
    event.preventDefault();
    var personNameVar = event.target.personName.value;
    var personAgeVar = event.target.personAge.value;

    if ($('.personIsActive').is(':checked')) {
        var personIsActive = true;
    } else personIsActive = false;

    Meteor.call('insertPersonData', personNameVar, personAgeVar, personIsActive);
    Router.go('/');
  },
})
