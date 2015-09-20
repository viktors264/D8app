Router.configure({
  layoutTemplate:'layout'
});

Router.map(function(){
  this.route('personsList', {path:'/'});
  this.route('createPerson', {path:'/createPerson'});
});

Router.route('/personDetails/:_id', {
    template: 'personDetails',
    data: function(){
        var currentPerson = this.params._id;
        return PersonsList.findOne({_id: currentPerson });
    }
});

Router.route('/personEdit/:_id', {
    template: 'editPerson',
    data: function(){
        var currentPerson = this.params._id;
        return PersonsList.findOne({_id: currentPerson });
    }
});
