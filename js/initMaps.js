<<<<<<< HEAD
 function init_map() {
        //initialize the element that will track which map is the active map and set its default value
        var active_map_holder = document.getElementById("active_map_holder");
        activateMap(1);

        //initialize and set up maps for the page
        var var_location = new google.maps.LatLng(33.957,-84.282);

        var var_mapoptions = {
          center:var_location,
          zoom: 11,
          scrollwheel: false
        }

        var map1 = new google.maps.Map(document.getElementById("map1"), var_mapoptions);
        var map2 = new google.maps.Map(document.getElementById("map2"), var_mapoptions);
        var map3 = new google.maps.Map(document.getElementById("map3"), var_mapoptions);
        var map4 = new google.maps.Map(document.getElementById("map4"), var_mapoptions);

        map1.data.setStyle({
            fillColor: 'blue'
          });

        //make sure maps dynamically resize to fit windows whenever they are in an idle state
        google.maps.event.addDomListener(map1, 'idle', function() {
          google.maps.event.trigger(map1, 'resize');
        });
        google.maps.event.addDomListener(map2, 'idle', function() {
          google.maps.event.trigger(map2, 'resize');
        });
        google.maps.event.addDomListener(map3, 'idle', function() {
          google.maps.event.trigger(map3, 'resize');
        });
        google.maps.event.addDomListener(map4, 'idle', function() {
          google.maps.event.trigger(map4, 'resize');
        });

        google.maps.event.addListener(map1, 'mousedown', function() {activateMap(1)});
        google.maps.event.addListener(map2, 'mousedown', function() {activateMap(2)});
        google.maps.event.addListener(map3, 'mousedown', function() {activateMap(3)});
        google.maps.event.addListener(map4, 'mousedown', function() {activateMap(4)});

        //add listener so that whenever maps are idle, they resize to fit the current winow
        google.maps.event.trigger(map1, 'resize');
        google.maps.event.trigger(map2, 'resize');
        google.maps.event.trigger(map3, 'resize');
        google.maps.event.trigger(map4, 'resize');

        //marker.addListener('click', function() 
      }

      google.maps.event.addDomListener(window, 'load', init_map);/*creates a listener to where it loads the maps when the page finishes loading*/

=======
// function init_map() {
//       var var_location = new google.maps.LatLng(33.957,-84.282);

//       var var_mapoptions = {
//         center:var_location,
//         zoom: 11
//       }

//       var map1 = new google.maps.Map(document.getElementById("map1"), var_mapoptions);
//       //The below maps, html code, has been pulled for the time being.
//       // var map2 = new google.maps.Map(document.getElementById("map2"), var_mapoptions);
//       // var map3 = new google.maps.Map(document.getElementById("map3"), var_mapoptions);
//       // var map4 = new google.maps.Map(document.getElementById("map4"), var_mapoptions);

//       map1.data.setStyle({
//           fillColor: 'blue'
//         });
//     }

//     google.maps.event.addDomListener(window, 'load', init_map);/*creates a listener to where it loads the maps when the page finishes loading*/
>>>>>>> mikebranch
