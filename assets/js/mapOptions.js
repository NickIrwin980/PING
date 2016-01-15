var map;
			function initMap() 
			{
	
				var mapOptions = 
				{
	
					zoom: 8,
					center: {lat: 41.218334, lng: -82.185854},
					mapTypeControl: true,
					mapTypeControlOptions: {
						style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
						position: google.maps.ControlPosition.TOP_CENTER,
	
														}
	
				}
				
				//draw the map
				map = new google.maps.Map(document.getElementById('map'), mapOptions);
				
				//adjust street view controls.
				var thePanorama = map.getStreetView();
				google.maps.event.addListener(thePanorama, 'visible_changed', initPano);
				
				{
				
				function initPano(){
					if (thePanorama.getVisible())
							
						
						{
							thePanorama.setVisible(false);
							var panorama = new google.maps.StreetViewPanorama(
								  document.getElementById('map'), {
									position: thePanorama.getPosition(),
									addressControlOptions: {
									  position: google.maps.ControlPosition.BOTTOM_CENTER
									},
									linksControl: true,
									panControl: false,
									enableCloseButton: true
							  });
								
						}
						
						else 
	
						{
							// Display your original UI
						}
											}
					}
					
					initialize();
				}