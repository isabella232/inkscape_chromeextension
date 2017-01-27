(function(){
  var apps_urls = {
    png: "http://www.offidocs.com/edit-inkscape.php?fileurl=newfileoriginal"
  };

 
  var filexxx = Math.floor(Math.random() * 2000000);
  for (var link_id in apps_urls){
        var url = apps_urls[link_id];
        document.getElementById(link_id).firstElementChild.href = url;
  }
  document.getElementById('status').innerText = `Using Inkscape editor for draws and graphics`;
    

  for (var link_id in apps_urls) {
    var localLabel = chrome.i18n.getMessage("new_" + link_id);
    document.querySelector(`#${link_id} .label`).innerText = localLabel;
  }
})();
