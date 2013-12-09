function $$(f) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.textContent = "(" + f.toString() + ")(jQuery)";
    document.body.appendChild(script).parentNode.removeChild(script);
};

//Hover TopBar Icons
$$(function($){
 var btns = [];
 var achieve = { btn: '.topbar-icon.icon-achievements.js-achievements-button', mod: '.topbar-dialog.achievements-dialog' };
 btns.push(achieve);
 var inbox = { btn: '.topbar-icon.icon-inbox.js-inbox-button', mod: '.topbar-dialog.inbox-dialog' };
 btns.push(inbox);
 var se = { btn: '.topbar-icon.icon-site-switcher.js-site-switcher-button.js-gps-track', mod: '.topbar-dialog.siteSwitcher-dialog' };
 btns.push(se);
 for( var ind in btns ){
  var tar = btns[ind].btn;
  var mod = btns[ind].mod;
  var $ach = $(tar);
  (function($ach,mod){
   var d = StackExchange.helpers.DelayedReaction(function () {
    if( $(mod).is(':visible') )return;
    $ach.click();
    }, 450, { always: function () {
    j.cancel() }
   });
   var j = StackExchange.helpers.DelayedReaction(function () {
    if( !$(mod).is(':visible') )return;
    $ach.click();
    }, 1E3, { always: function () {
    d.cancel() }
   });
   var a = StackExchange.helpers.DelayedReaction(function () {
    }, 450, { always: function () {
    j.cancel(); d.cancel(); }
   });
   var b = StackExchange.helpers.DelayedReaction(function () {
    if( !$(mod).is(':visible') )return;
    $ach.click();
    }, 450, { always: function () {
    j.cancel(); a.cancel(); }
   });
   $ach.mouseenter(d.trigger);
   $ach.mouseleave(j.trigger);
   $ach.click(function(){
    a.cancel();
    d.cancel();
   });
   $('body').on('mouseenter',mod,a.trigger);
   $('body').on('mouseleave',mod,b.trigger);
  })($ach,mod)
 }
});
