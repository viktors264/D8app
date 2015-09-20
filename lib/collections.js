PersonsList = new Mongo.Collection("persons");

var Schemas = {};

Schemas.Person = new SimpleSchema({
    name: {
        type: String,
        label: "Name",
        min: 0,
        max: 40
    },
    age: {
        type: Number,
        label: "Age",
        min: 0,
        max: 130
    },
    isActive: {
      type: Boolean
    }
});

PersonsList.attachSchema(Schemas.Person);
