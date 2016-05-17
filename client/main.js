// import { Template } from 'meteor/templating';
// import { ReactiveVar } from 'meteor/reactive-var';
//
// import './main.html';

Template.timer.onCreated(()=> {
  // counter starts at 0
  self = Template.instance();
  self.timer = new ReactiveVar(0);
  Meteor.setInterval(function() {
    let currValue = self.timer.get() + 1;
    console.log("curr> ", currValue);
    self.timer.set(currValue);
  }, 1000);
});

Template.timer.helpers({
  time:()=> {
    return Template.instance().timer.get();
  },
});

Template.timer.events({


});
