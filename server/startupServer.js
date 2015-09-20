Meteor.startup(function () {
  if(PersonsList.find().count() === 0){
    console.log("Importing default 5 persons to db");

    PersonsList.insert({
        'name': "Modris",
        'age': 25,
        'isActive': true
      });
      PersonsList.insert({
        'name': "Alvis",
        'age': 18,
        'isActive': true
      });
      PersonsList.insert({
        'name': "Alise",
        'age': 23,
        'isActive': false
      });
      PersonsList.insert({
        'name': "Ilgvars",
        'age': 38,
        'isActive': false
      });
      PersonsList.insert({
        'name': "Elizabete",
        'age': 65,
        'isActive': true
      });
  }
});

Meteor.publish("personsList", function () {
  return PersonsList.find();
  });
