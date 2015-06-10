document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('checkPage');
  checkPageButton.addEventListener('click', function() {
    var elem = document.getElementById('sfId');
    var id = elem.value;
    if(id && (id.length == (15) || (id.length == 18))){
      var orgs = document.getElementsByName('org');
      var org;
      var str;
      for(var i = 0; i < orgs.length; i++){
          if(orgs[i].checked){
              org = orgs[i].value;
              str = orgs[i].id;
              break;
          }
      }
      if(localStorage['orgMap']){
        var storage = JSON.parse(localStorage['orgMap']);
        if(storage[str]){
          org = storage[str];
        }
      }
      chrome.tabs.query( {active:true} , function(tabs) {  
        chrome.tabs.update(tabs[0].id, {
          url: 'https://' + org + '.salesforce.com/' + id
        });
      });
    }else{
      alert("You must enter a valid SalesForce ID...");
    }
  }, false);
}, false);