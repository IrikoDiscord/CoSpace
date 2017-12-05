var cubeo = Scene.getItem('9tFLnbieUK');

cubeo.say('Click me to delete me from the scene.');

cubeo.onActivate(function() {
    cubeo.deleteFromScene();
});
