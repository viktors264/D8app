Meteor.methods({
  'insertPersonData':function(personNameVar, personAgeVar, currentPerson){
     PersonsList.insert({
       name: personNameVar,
       age: personAgeVar,
       isActive: currentPerson
     });
  },
  'deletePerson': function(currentPerson){
    PersonsList.remove({_id: currentPerson});
  },
  'displayPerson': function(currentPerson){
    return PersonsList.findOne({_id:currentPerson});
  },
  'editPerson': function(currentPerson, nameVar, ageVar, personIsActive){
    PersonsList.update(currentPerson, {$set: {name:nameVar, age:ageVar, isActive:personIsActive} });
  },
  'isActiveUpdate': function(currentPerson, activityStatus){
    PersonsList.update(currentPerson, {$set: {isActive: ! activityStatus} });
  }
});
