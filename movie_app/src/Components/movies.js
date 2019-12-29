var movies = [
		{
            movie_id: 0,
			title: "Harry Potter 7",  //Fantasy
			release_date: "2011/01/12",
			director_id: 0,
			actors: [
				19, // These are user_id's
				20,
				21,
				22
			],
			avg_rating: "3.5",  //240x356
			image: "https://warnerbrosuk.azureedge.net/~/media/images/warner-bro/franchises/harry-potter/digital-key-art/hp-1.jpg?mw=165",
			description: "Harry Potter and the Deathly Hallows – Part 1 is a 2010 fantasy film directed by David Yates and distributed by Warner Bros. Pictures.[4] It is the first of two cinematic parts based on J. K. Rowling's 2007 novel of the same name and features an ensemble cast.[5] The film, which is the seventh and penultimate instalment in the Harry Potter film series, was written by Steve Kloves and produced by David Heyman, David Barron, and Rowling.The film stars Daniel Radcliffe as Harry Potter, with Rupert Grint and Emma Watson, respectively, reprising roles as Harry's best friends Ron Weasley and Hermione Granger. It is the sequel to Harry Potter and the Half-Blood Prince and is followed by the concluding entry, Harry Potter and the Deathly Hallows – Part 2.",
			//image: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiGxPe6zebiAhUj8XMBHcKyCqsQjRx6BAgBEAU&url=https%3A%2F%2Fwww.warnerbros.co.uk%2Fbrands%2Fwizarding-world&psig=AOvVaw1jUGCS6Yym1if_OHS0krt6&ust=1560520349151901",
		},
		{
            movie_id: 1,
			title: "The GodFather",   //drama
			release_date: "1973/04/10",
			director_id: 1,
			actors: [
				17, // These are user_id's
				18,
			],
			avg_rating: "4.6",
			image: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
			description: "The Godfather is a 1972 American crime film directed by Francis Ford Coppola and produced by Albert S. Ruddy, based on Mario Puzo's best-selling novel of the same name. It stars Marlon Brando and Al Pacino as the leaders of a fictional New York crime family. The story, spanning 1945 to 1955, chronicles the family under the patriarch Vito Corleone (Brando), focusing on the transformation of Michael Corleone (Pacino) from reluctant family outsider to ruthless mafia boss.",
			//image: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiGxPe6zebiAhUj8XMBHcKyCqsQjRx6BAgBEAU&url=https%3A%2F%2Fwww.warnerbros.co.uk%2Fbrands%2Fwizarding-world&psig=AOvVaw1jUGCS6Yym1if_OHS0krt6&ust=1560520349151901",
		},
		{
            movie_id: 2,
			title: "Silence Of The Lambs",   //drama
			release_date: "1991/11/01",
			director_id: 2,
			actors: [
				14, // These are user_id's
				15,
				16
			],
			avg_rating: "4.4",
			image: "https://sites.tufts.edu/tomecekenglish181/files/2017/11/71Hx1kJa5vL._RI_.jpg",
			//image: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiGxPe6zebiAhUj8XMBHcKyCqsQjRx6BAgBEAU&url=https%3A%2F%2Fwww.warnerbros.co.uk%2Fbrands%2Fwizarding-world&psig=AOvVaw1jUGCS6Yym1if_OHS0krt6&ust=1560520349151901",
			description: "The Silence of the Lambs is a 1991 American psychological horror thriller film[3] directed by Jonathan Demme from a screenplay written by Ted Tally, adapted from Thomas Harris's 1988 novel of the same name. The film stars Jodie Foster, Anthony Hopkins, Scott Glenn, Ted Levine, and Anthony Heald.[4] In the film, Clarice Starling, a young FBI trainee, seeks the advice of the imprisoned Dr. Hannibal Lecter, a brilliant psychiatrist and cannibalistic serial killer to apprehend another serial killer, known only as Buffalo Bill, who skins his female victims' corpses. The novel was Harris's first and second respectively to feature the characters of Starling and Lecter, and was the second adaptation of a Harris novel to feature Lecter, preceded by the Michael Mann-directed Manhunter (1986)"
		},
		{
            movie_id: 3,
			title: "The Chronicles Of Narnia",  // Adventure and Fantasy
			release_date: "1973/04/10",
			director_id: 3,
			actors: [
				12,
				13
			],
			avg_rating: "4.0", //3.45
			image: "https://upload.wikimedia.org/wikipedia/en/thumb/1/10/The_Chronicles_of_Narnia_-_The_Lion%2C_the_Witch_and_the_Wardrobe.jpg/220px-The_Chronicles_of_Narnia_-_The_Lion%2C_the_Witch_and_the_Wardrobe.jpg",
			//image: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiGxPe6zebiAhUj8XMBHcKyCqsQjRx6BAgBEAU&url=https%3A%2F%2Fwww.warnerbros.co.uk%2Fbrands%2Fwizarding-world&psig=AOvVaw1jUGCS6Yym1if_OHS0krt6&ust=1560520349151901",
			description: "The Chronicles of Narnia series of films is based on The Chronicles of Narnia, a series of novels by C. S. Lewis. From the seven books, the first three were adapted —The Lion, the Witch and the Wardrobe (2005), Prince Caspian (2008) and The Voyage of the Dawn Treader (2010)—which grossed over $1.5 billion worldwide among them.The series revolves around the adventures of children in the world of Narnia, guided by Aslan, a wise and powerful lion that can speak and is the true king of Narnia. The children heavily featured in the films are the Pevensie siblings, and a prominent antagonist is the White Witch (also known as Jadis)."
		},
		{
            movie_id: 4, 
			title: "2012",  //
			release_date: "1991/11/01",
			director_id: 4,
			actors: [
				10,
				11
			],
			avg_rating: "3.5",
			image: "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/2012_Poster.jpg/250px-2012_Poster.jpg",
			//image: "https://warnerbrosuk.azureedge.net/~/media/images/warner-bro/franchises/harry-potter/digital-key-art/hp-1.jpg?mw=165",
			description: "2012 is a 2009 American epic science fiction disaster film co-written and directed by Roland Emmerich. The film was produced by Harald Kloser, Mark Gordon and Larry J. Franco. Kloser wrote the screenplay with Emmerich, and, the film was distributed by Columbia Pictures and produced by Emmerich's Centropolis Entertainment[4]. The plot follows novelist Jackson Curtis as he attempts to bring his family to safety as the world is destroyed by a series of extreme natural disasters. The film refers to Mayanism and the 2012 phenomenon in its portrayal of cataclysmic events. Filming, originally planned for Los Angeles, began in Vancouver in August 2008.[5]"
		},
		{
            movie_id: 5, 
			title: "Avengers: End Game",  //action
			release_date: "1991/11/01",
			director_id: 5,
			actors: [
				7,
				8,
				9
			],
			avg_rating: "4.4",
			image: "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg",
			//image: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiGxPe6zebiAhUj8XMBHcKyCqsQjRx6BAgBEAU&url=https%3A%2F%2Fwww.warnerbros.co.uk%2Fbrands%2Fwizarding-world&psig=AOvVaw1jUGCS6Yym1if_OHS0krt6&ust=1560520349151901",
			description: "Avengers: Endgame is a 2019 American superhero film based on the Marvel Comics superhero team the Avengers, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures. It is the sequel to 2012's The Avengers, 2015's Avengers: Age of Ultron, and 2018's Avengers: Infinity War, and the twenty-second film in the Marvel Cinematic Universe (MCU). It was directed by Anthony and Joe Russo, written by Christopher Markus and Stephen McFeely and features an ensemble cast including Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth, Scarlett Johansson, Jeremy Renner, Don Cheadle, Paul Rudd, Brie Larson, Karen Gillan, Danai Gurira, Bradley Cooper, and Josh Brolin. In the film, the surviving members of the Avengers and their allies work together to reverse the damage caused by Thanos in Infinity War."
		},
		{
            movie_id: 6, 
			title: "Avengers: Infinity War",  //action
			release_date: "1991/11/01",
			director_id: 5,
			actors: [
				7,
				8,
				9
			],
			avg_rating: "4.25",
			image: "https://cdn.vox-cdn.com/thumbor/TAzotU1RnNkUJ7RwFtu7Rn1Ntcw=/0x0:1688x2500/1200x0/filters:focal(0x0:1688x2500):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/11614195/InfinityWar5aabd55fed5fa.jpg",
			//image: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiGxPe6zebiAhUj8XMBHcKyCqsQjRx6BAgBEAU&url=https%3A%2F%2Fwww.warnerbros.co.uk%2Fbrands%2Fwizarding-world&psig=AOvVaw1jUGCS6Yym1if_OHS0krt6&ust=1560520349151901",
			description: "Avengers: Infinity War is a 2018 American superhero film based on the Marvel Comics superhero team the Avengers, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures. It is the sequel to 2012's The Avengers and 2015's Avengers: Age of Ultron, and the nineteenth film in the Marvel Cinematic Universe (MCU). It was directed by Anthony and Joe Russo, written by Christopher Markus and Stephen McFeely, and features an ensemble cast including Robert Downey Jr., Chris Hemsworth, Mark Ruffalo, Chris Evans, Scarlett Johansson, Benedict Cumberbatch, Don Cheadle, Tom Holland, Chadwick Boseman, Paul Bettany, Elizabeth Olsen, Anthony Mackie, Sebastian Stan, Danai Gurira, Letitia Wright, Dave Bautista, Zoe Saldana, Josh Brolin, and Chris Pratt. In the film, the Avengers and the Guardians of the Galaxy attempt to stop Thanos from collecting the all-powerful Infinity Stones."
		},
		{
            movie_id: 7, 
			title: "Toy story" ,    //comedy
			release_date: "1991/11/01",
			director_id: 6,
			actors: [
				23,
				24
			],
			avg_rating: "4.2",
			image: "https://upload.wikimedia.org/wikipedia/en/1/13/Toy_Story.jpg",
			//image: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiGxPe6zebiAhUj8XMBHcKyCqsQjRx6BAgBEAU&url=https%3A%2F%2Fwww.warnerbros.co.uk%2Fbrands%2Fwizarding-world&psig=AOvVaw1jUGCS6Yym1if_OHS0krt6&ust=1560520349151901",
			description: "Toy Story is a computer animated film series and Disney media franchise that began with the 1995 film of the same name, produced by Pixar Animation Studios and released by Walt Disney Pictures. The franchise is based on the anthropomorphic concept that all toys, unknown to humans, are secretly alive, and the films focus on a diverse group of toys that feature a classic cowboy named Sheriff Woody and a modern spaceman named Buzz Lightyear, principally voiced by Tom Hanks and Tim Allen, respectively. The group unexpectedly embark on adventures that challenge and change them."
		}
	]

	export default movies
