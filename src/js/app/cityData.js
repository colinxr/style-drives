const cityData = {
	toronto: {
		id: 1,
		hed: 'Toronto',
		dek: 'Urban Renewal',
		desc: 'Start your drive at the <strong>Evergreen Brickworks</strong>, an urban nature preserve and event space hidden within Toronto\'s Don River valley. Grab a latte at <strong>Café Belong</strong> and stroll on the boardwalk, or if it’s a Sunday, browse the local offerings at the weekly farmer’s market. Head back downtown along the Bayview extension and Rosedale Valley Road, which winds through a leafy ravine. Thanks to Torque Vectoring Control, you\'ll enjoy the the Stinger\'s race-inspired handling, cornering and stability in the turns before exiting towards Bloor Street\'s Mink Mile.</p><p>Past the <strong>Royal Ontario Museum</strong>, the <strong>Gardiner Museum</strong> and the <strong>Bata Shoe Museum</strong>, continue along to Sterling Road, a former industrial area now home to the citys newest art institution. The <strong>Museum of Contemporary Art (MOCA)</strong> opened this spring in the historic Tower Automotive Building and focuses on work by Canadian artists, with an ever-changing schedule of temporary exhibits. Afterwards, head down the block to the <strong>Drake Commissary</strong>, a restaurant, bar and bakery, for a lunch of internationally influenced, locally sourced cuisine like Swedish smorrebrod with prawns and avocado or pizza bianca with lamb and Quebecois Sauvagine cheese. </p><p>Fortified by art and food, drive south to the Lakeshore and back across the city, for your last stop of the day. Located in the heart of the financial district, <strong>Garrison Bespoke</strong> is a custom tailor specializing in performance tailoring. Thanks to owner Michael Nguyen\'s love of old-school craftsmanship and innovative fabrics, it\'s the perfect balance of classic and modern.',
		map: {
			url: 'https://drive.google.com/open?id=1sG1U-MvR_0XGg5DmmZBR3YXa7A0GCOTo&usp=sharing',
			center: {
				lat: 43.6572737,
				lng: -79.433196
			},
			markers: [{
				position: {
					lat: 43.685599,
					lng: -79.365159
				},
				infoText: 'Evergreen Brickworks'
				}, {
					position: {
						lat: 43.684737,
						lng: -79.365078,
					},
					infoText: 'Cafe Belong'
				}, {
					position: {
						lat: 43.667950,
						lng: -79.394777,
					},
					infoText: 'Royal Ontario Museum'
				}, {
		 			position: {
		 				lat: 43.667514,
		 				lng: -79.400155
		 			},
		 			infoText: 'Bata Shoe Museum'
		 		}, {
				position: {
					lat: 43.654840,
					lng: -79.445196
				},
				infoText: 'Museum of Contemporary Art'
				}, {
					position: {
						lat: 43.653814,
						lng: -79.445220
					},
					infoText: 'Drake Commissary'
				}, {
					position: {
						lat: 43.648717,
						lng: -79.375790
					},
					infoText: 'Garrison Bespoke'
			}],
		},
		imgSrc: 'http://www.contempomedia.com/kia-stinger/public/imgs/toronto.jpg',
	},
	vancouver: {
		id: 2,
		hed: 'Vancouver',
		dek: 'Art and Craft',
		desc: 'Save the hiking and single-track riding for tomorrow; today is all about Vancouver’s culture. Caffeinate at <strong>Platform 7</strong>, a Hastings-Sunrise coffee bar styled after a Belle Epoque train station and serving Stumptown beans, then head to an industrial building on nearby Triumph street, which is the home of <strong>Love Jules Leather</strong>. Make an appointment and owners Josh and Jules will show you how they create handmade custom shoes from the ground up, and even help you design your own. </p><p> Drive along Powell street, past the docked container ships, to Gastown for your next stop, <strong>Neighbour</strong>. A destination for men’s fashion, this shop boasts an impressive selection of contemporary brands like Our Legacy and Gosha Rubchinskiy. </p><p>Follow the GPS directions on the Stinger’s Heads-Up Display system across the bridge over False Creek towards South Granville, home to one of Vancouver’s most longstanding art institutions. In operation since 1965, the <strong>Bau Xi Gallery</strong> has earned a reputation as a reliable source for compelling contemporary photography, painting and sculpture. The exhibits change regularly, so there’s always something new to discover.</p><p>A few neighbourhoods away in Kitsilano, the lines outside <strong>Raisu</strong> start ahead of their 5pm opening, so there’s no shame in opting for an early dinner at this authentic Japanese Izakaya. Arriving early will also help you score a Sho Ka Do Bento, their limited quantity tasting menu. After all, you need to be up in time for your morning hike.',
		map: {
			url: 'https://drive.google.com/open?id=1JMClD5C4sWBz47qQhkroShCeDwgReo3N&usp=sharing',
			center: {
				lat: 49.267900,
				lng: -123.138838
			},
			markers: [{
				position: {
					lat: 49.281500,
					lng:  -123.057393
				},
				infoText: 'Platform 7'
			}, {
				position: {
					lat: 49.284260,
					lng: -123.065194
				},
				infoText: 'Love Jules Leather'
			}, {
				position: {
					lat: 49.283617,
					lng: -123.104838
				},
				infoText: 'Neighbour'
			}, {
				position: {
					lat: 49.258696,
					lng: -123.139217
				},
				infoText: 'Bau Xi Gallery'
			}, {
				position: {
					lat: 49.268280,
					lng: -123.158328
				},
				infoText: 'Raisu'
			}],
		},
		imgSrc: 'http://www.contempomedia.com/kia-stinger/public/imgs/vancouver.jpg',
	},
	halifax: {
		id: 3,
		hed: 'Halifax',
		dek: 'Culture by the sea',
		desc: 'With a burgeoning food scene, plus more spectacular maritime scenery than you can shake an oar at, Canada’s Ocean Playground is on the rise. At the centre of it all is Halifax, where your journey begins at <strong>RCHMND</strong>, a minimalist clothing boutique specializing in contemporary brands like Commes des Garçons and Adidas x Raf Simons. Situated in an Omar Gandhi-designed storefront on Granville street, there’s no better place to launch a culture- lled afternoon. <p>A short hop away is the <strong>Art Gallery of Nova Scotia</strong>, whose permanent collection includes the reconstructed home of legendary Nova Scotia painter Maude Lewis. Linger on and peruse the exhibition of iconic Japanese woodblock printer Utagawa Hiroshige, which is on display through 2019. <p>If traffic is light, put the Stinger’s Nurburgring-tested 365-hp twin-turbo V6 to work as you cross the Angus L. Macdonald bridge on your way to dinner at <strong>The Canteen</strong> on Portland. A standout among the Maritimes-inspired comfort food on o er is their “Crobster Roll,” a seasonal specialty featuring crab and lobster on a toasted bun. <p>Retrace your route across the bridge then turn onto Gottingen Street towards the historic Citadel to arrive at the <strong>Seahorse Tavern</strong>, Halifax’s favourite live music venue. As the centre of the city’s music scene, the Seahorse hosts local talent like Joel Plaskett, Wintersleep and the Trews, as well as a wide range of DJ nights, tribute bands and dance parties.',
		map: {
			url: 'https://drive.google.com/open?id=13-jycTujAk2KxZVBfPie0xvO2lqGXpO7&usp=sharing',
			center: {
				lat: 44.6488,
				lng: -63.5752
			},
			markers: [{
				position: {
					lat: 44.649921,
					lng: -63.574568
				},
				infoText: 'RCHMND'
			}, {
				position: {
					lat: 44.648657,
					lng: -63.572625
				},
				infoText: 'Art Gallery of Nova Scotia'
			}, {
				position: {
					lat: 44.664835,
					lng: -63.567518
				},
				infoText: 'The Canteen'
			}, {
				position: {
					lat: 44.651592,
					lng: -63.581884
				},
				infoText: 'Seahorse Tavern'
			}],
		},
		imgSrc: 'http://www.contempomedia.com/kia-stinger/public/imgs/halifax.jpg',
	},
	montreal: {
		id: 4,
		hed: 'Montreal',
		dek: 'Expo and Beyond',
		desc: 'Begin your day in <strong>Cité du Havre</strong> at Habitat ’67. Designed by legendary Canadian architect Moshe Safdie for the 1967 Expo, this spectacular apartment building remains one of the world’s finest remaining examples of brutalist design. From there drive along the Lachine Canal towards Saint Henri, one of Montreal’s hippest new quarters, for brunch. <strong>Elena’s</strong>, created by the owners of nearby Nora Gray, offers innovative Italian cooking with a modern touch (think carbonara pizza and cheese and prosciutto crepes).</p><p>After brunch, drive past the antiques shops of Rue Notre Dame and into the quaint cobblestoned streets of old Montreal to find one of the city’s newest cultural additions. <strong>SSENSE</strong>’s multi-story flagship store is a revolutionary retail concept, bringing over 20,000 products from the world’s top fashion brands to customers in-store and online. Designed by David Chipperfield and sprawling over 13,000 square feet, it’s a place anyone who appreciates design—fashion or otherwise—can easily spend an hour or two.</p><p>Stow your purchases beneath the Stinger’s power rear hatch and head downtown to the <strong>Musee d’Art Contemporain</strong>, where “A Crack in Everything,” the museum’s multimedia tribute to Leonard Cohen is ongoing. Afterwards, you’ll surely want to tune the Stinger’s 720-watt Harman Kardon audio system to “Hallelujah,” or “Tower of Song” for an immersive listening experience. If you never got to see Montreal’s favourite son live in concert, this is surely the next best thing.',
		map: {
			url: 'https://drive.google.com/open?id=1GisdZglDd_U_vyMS40VjEPfIz0lFl8gM&usp=sharing',
			center: {
				lat: 45.5017,
				lng: -73.5673
			},
			markers: [{
				position: {
					lat: 45.493209,
					lng: -73.543698
				},
				infoText: 'Cité du Havre'
			}, {
				position: {
					lat: 45.470033,
					lng: -73.591722
				},
				infoText: 'Elena\'s'
			}, {
				position: {
					lat: 45.504719,
					lng: -73.555149
				},
				infoText: 'SSENSE'
			}, {
				position: {
					lat: 45.507902,
					lng: -73.566263
				},
				infoText: 'Musee d\'Art Contemporain'
			}],
		},
		imgSrc: 'http://www.contempomedia.com/kia-stinger/public/imgs/montreal.jpg',
	},
	calgary: {
		id: 5,
		hed: 'Calgary',
		dek: 'The West and the World',
		desc: 'Home to cowboys, roughnecks and emigres from all corners of the world, Calgary is a young city with a lot going on. </p> <p>Start your day at the <strong>Kensington Riverside Inn</strong>, a stately new Relais & Chateaux boutique hotel steps away from the Bow river. A leisurely drive away via Memorial Parkway, make your  rst stop <strong>OEB</strong>, a local brunch favourite known for its eggs benny and breakfast poutine. While you settle the tab, start up your Stinger and adjust the climate controls from the table with the UVO Intelligence smartphone app. By the time you’re ready to head out, the car will be running, pre-cooled and waiting to ferry you across town in style.</p> <p> A short jaunt across the river via the 12th St. bridge is <strong>The Livery Shop</strong>, a destination for locally made clothes and jewelry. Camp, a Calgary brand specializing in graphic tees, sweatshirts and patches, and CoutuKitsch a local jeweler, share this old stable-turned store, which is also stocked with a selection of books, gifts and accessories.</p> <p> Whenever you’re ready to eat again, or just in need of a change of scenery, head across town along 9th Ave, past Fort Calgary and the Calgary Tower to one of the city’s newest hot spots. With a pastel-hued dining room straight out of a Wes Anderson movie, the <strong>Calcutta Cricket Club</strong> boasts an innovative menu of contemporary Indian food. It’s east-meets-west in the best possible way.',
		map: {
			url: 'https://drive.google.com/open?id=1cVOxqkJsFlWWzC5CIdRODAGOBf9C_Wd-&usp=sharing',
			center: {
				lat: 51.0486,
				lng: -114.0708
			},
			markers: [{
				position: {
					lat: 51.052004,
					lng: -114.087353
				},
				infoText: 'Kensington Riverside Inn'
			}, {
				position: {
					lat: 51.048950,
					lng: -114.066047
				},
				infoText: 'OEB'
			}, {
				position: {
					lat: 51.041749,
					lng: -114.037625
				},
				infoText: 'The Livery Shop'
			}, {
				position: {
					lat: 51.038233,
					lng: -114.070815
				},
				infoText: 'Calcutta Cricket Club'
			}],
		},
		imgSrc: 'http://www.contempomedia.com/kia-stinger/public/imgs/calgary.jpg',
	},
};

export default cityData;
