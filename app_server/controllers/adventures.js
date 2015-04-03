/* GET adventures page. */
exports.adventures = function(req, res) {
  res.render('adventures', { 
	header: 'Adventure Generator',
	locationAdventureData: {

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
	},
	eventAdventureData: {
		adventureComponents: [
			{
				"title": "Villain's Actions",
				"value": "Achieve godhood(?)"
			},
			{
				"title": "Event-Based Goals",
				"value": "Secure aid from a ruler or council"
			},
			{
				"title": "Framing Events",
				"value": "Lunar eclipse"
			},
			{
				"title": "Complications",
				"value": "Friend quandary"
			},
			{
				"title": "Twists",
				"value": "The adventurers must cooperate with a known enemy to achieve the goal."
			},
			{
				"title": "Side Quests",
				"value": "Discover the fate of a missing NPC."
			}
		]
	}
	
  });
};
