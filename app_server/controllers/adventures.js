/* GET adventures page. */
exports.adventures = function(req, res) {
  res.render('adventures', { 
	header: 'Adventure Generator',
	adventureTypes: [ "Location-Based", "Event-Based"],
	adventureInfo: [
		{
			adventureType: "Location-Based",
			adventureComponents: [
				{
					title: "Location Type",
					value: "Wilderness"
				},
				{
					title: "Location Details",
					value: "Escort an NPC to a destination"
				},
				{
					title: "Other Goals",
					value: "Interfere with the operation of a business"
				},
				{
					title: "Adventure Villains",
					value: "Giant bent on plunder"
				},
				{
					title: "Adventure Allies",
					value: "Sage"
				},
				{
					title: "Adventure Patrons",
					value: "Deity or celestial"
				},
				{
					title: "Adventure Introduction",
					value: "A town or village needs volunteers to go to the adventure location"
				},
				{
					title: "Adventure Climax",
					value: "The adventurers must discover the main villain's secret weakness before they can hope to defeat that villain."
				}
		]
	}
	]
  });
};
