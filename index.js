const express = require('express');

const app = express();

  let movies = [
  'Jason Bourne',
  'A Star Is Born',
  'The Martian',
  'Transformers - The Last Knight',
  'Mission Impossible – Fallout',
  'Spectre',
  'The Revenant',
  'Jurassic World',
  'Night at the Museum - Secret of the Tomb',
  'Bohemian Rhapsody'
  ];

  let directorsData =
 [{Name: 'Paul Greengrass', Bio: 'A British film director, film producer, screenwriter, and former journalist. He specialises in dramatisations of historic events and is known for his signature use of hand-held cameras', Birth_Year: 1955, Death_Year:''},
{Name: 'Bradley Cooper', Bio:'An American actor and filmmaker. He has been nominated for various awards, including eight Academy Awards and a Tony Award, and has won two Grammy Awards and a BAFTA Award. Cooper appeared on the Forbes Celebrity 100 three times and on Time\'s list of the 100 most influential people in the world in 2015. His films have grossed $11 billion worldwide and he has placed four times in annual rankings of the world\'s highest-paid actors.', Birth_Year: 1975, Death_Year:''},
{Name: 'Ridley Scott', Bio: 'A British film director and producer. He has directed the science fiction horror film Alien (1979), the neo-noir dystopian film Blade Runner (1982), the road adventure film Thelma & Louise (1991), the historical drama film Gladiator (2000), the war film Black Hawk Down (2001), and the science fiction film The Martian (2015).', Birth_Year: 1937, Death_Year:''},
{Name: 'Michael Bay', Bio: 'An American film director and producer. He is best known for making big-budget, high-concept action films characterized by fast cutting, stylistic cinematography and visuals, and extensive use of special effects, including frequent depictions of explosions. The films he has produced and directed, which include Armageddon (1998), Pearl Harbor (2001) and the Transformers film series (2007–present), have grossed over US$7.8 billion worldwide, making him one of the most commercially successful directors in history.', Birth_Year: 1965, Death_Year:''},
{Name: 'Christopher McQuarrie', Bio: 'An American screenwriter, film director and producer. He received the BAFTA Award, Independent Spirit Award, and Academy Award for Best Original Screenplay for the neo-noir mystery film The Usual Suspects (1995).', Birth_Year: 1968, Death_Year:''},
{Name: 'Sam Mendes', Bio: 'Sir Samuel Alexander Mendes CBE is an English film and stage director, producer, and screenwriter. In theatre, he is known for his dark re-inventions of the stage musicals Cabaret (1993), Oliver! (1994), Company (1995), and Gypsy (2003). He directed an original West End stage musical for the first time with Charlie and the Chocolate Factory (2013). For directing the play The Ferryman, Mendes was awarded the Tony Award for Best Direction of a Play in 2019.', Birth_Year: 1965, Death_Year:''},
{Name: 'Alejandro González Iñárritu', Bio: 'A Mexican film director, producer, and screenwriter. He is known for making films about the human condition, and his projects have garnered critical acclaim and numerous accolades. His most notable films include Amores perros (2000), 21 Grams (2003), Babel (2006), Biutiful (2010), Birdman (2014), and The Revenant (2015).', Birth_Year: 1963, Death_Year:''},
{Name: 'Colin Trevorrow', Bio: 'An American film director, screenwriter, and film producer. He made his feature directorial debut with the science fiction comedy Safety Not Guaranteed (2012) to critical and commercial success. Trevorrow achieved mainstream recognition for his work on the Jurassic World entries of the Jurassic Park franchise, which began when he co-wrote and directed the eponymous first film in 2015. After the film grossed over $1 billion, Trevorrow co-wrote the 2018 sequel and co-wrote and directed the upcoming third installment, Jurassic World: Dominion (2022). He was also the original writer and director of Star Wars: The Rise of Skywalker (2019) until his departure from the project, although he retained story credit.', Birth_Year: 1976, Death_Year:''},
{Name: 'Shawn Levy', Bio: 'A Canadian film director, producer, and actor. His directing credits include Big Fat Liar, Cheaper by the Dozen, the Night at the Museum series, and Stranger Things. Levy was a producer on the 2016 sci-fi film Arrival, which earned him an Academy Award nomination for Best Picture. Since 2016, Levy has been an executive producer on the Netflix original series Stranger Things. He has directed two episodes in each of the show\'s three seasons.', Birth_Year: 1968, Death_Year:''},
{Name: 'Bryan Singer', Bio: 'An American film director, producer and screenwriter. He is the founder of Bad Hat Harry Productions and has produced or co-produced almost all of the films he has directed. After graduating from the University of Southern California, Singer directed his first short film, Lion\'s Den (1988). On the basis of that film, he received financing for his next film, Public Access (1993), which was a co-winner of the Grand Jury Prize at the 1993 Sundance Film Festival. In the mid-1990s, Singer received critical acclaim for directing the neo-noir crime thriller The Usual Suspects (1995). He followed this with another thriller, Apt Pupil (1998), an adaptation of a Stephen King novella about a boy\'s fascination with a Nazi war criminal. In the 2000s, he became known for big budget superhero films such as X-Men (2000), for which Singer won the 2000 Saturn Award for Best Direction, its sequel X2 (2003), and Superman Returns (2006). He then directed the World War II historical thriller Valkyrie (2008), co-wrote/co-produced X-Men: First Class (2011), and directed the fantasy adventure film Jack the Giant Slayer (2013), as well as two more X-Men films, X-Men: Days of Future Past (2014) and X-Men: Apocalypse (2016). Singer also directed the Queen biographical film Bohemian Rhapsody (2018), although he was fired from the film shortly before its completion.', Birth_Year: 1965, Death_Year:''}];

let moviesData = [
{
Title: 'Jason Bourne',
Image_URL: 'https://en.wikipedia.org/wiki/Jason_Bourne_(film)#/media/File:Jason_Bourne_(film).jpg',
Description: 'Jason Bourne is a 2016 American action-thriller film directed by Paul Greengrass and written by Greengrass and Christopher Rouse. It is the fifth installment of the Bourne film series and a direct sequel to The Bourne Ultimatum (2007). Matt Damon reprises his role as the main character, former CIA assassin Jason Bourne.',
Director: 'Paul Greengrass',
genre: 'Action Thriller',
Featured: 'Yes'
},
{
Title: 'A Star Is Born',
Image_URL: 'https://en.wikipedia.org/wiki/A_Star_Is_Born_(2018_film)#/media/File:A_Star_is_Born.png',
Description: 'A Star Is Born is a 2018 American musical romantic drama film produced and directed by Bradley Cooper (in his directorial debut) and written by Cooper, Eric Roth and Will Fetters. It stars Cooper, Lady Gaga, Dave Chappelle, Andrew Dice Clay, and Sam Elliott, and follows a hard-drinking musician (Cooper) who discovers and falls in love with a young singer (Gaga). It is the fourth filmed version of the 1937 film, after the 1954 musical and the 1976 musical.',
Director: 'Bradley Cooper',
Genre: 'Romantic Drama',
Featured: 'Yes'
},
{
Title: 'The Martian',
Image_URL: 'https://en.wikipedia.org/wiki/The_Martian_(film)#/media/File:The_Martian_film_poster.jpg',
Description: 'The Martian is a 2015 British-American science fiction film directed by Ridley Scott and starring Matt Damon. Drew Goddard adapted the screenplay from The Martian, a 2011 novel by Andy Weir. The film depicts an astronaut\'s lone struggle to survive on Mars after being left behind, and the efforts of NASA to rescue him and bring him home to Earth. It also stars Jessica Chastain, Jeff Daniels, Kristen Wiig, Chiwetel Ejiofor, Sean Bean, Michael Peña, Kate Mara, Sebastian Stan, Aksel Hennie, Mackenzie Davis, Donald Glover, and Benedict Wong.',
Director: 'Ridley Scott',
Genre: 'Science Fiction',
Featured: 'Yes'
},
{
Title: 'Transformers - The Last Knight',
Image_URL: 'https://en.wikipedia.org/wiki/Transformers:_The_Last_Knight#/media/File:Transformers_The_Last_Knight_poster.jpg',
Description: 'Transformers: The Last Knight is a 2017 American science fiction action film based on the Transformers toy line. It is the fifth installment of the live-action Transformers film series and the sequel to Age of Extinction (2014). Like its predecessors, the film is directed by Michael Bay and features Mark Wahlberg reprising his role from Age of Extinction, while Josh Duhamel, John Turturro, and Glenn Morshower reprise their roles from the first three films, as well as Laura Haddock, Isabela Moner, Jerrod Carmichael, Santiago Cabrera, and Anthony Hopkins all joining the cast. Returning Transformers include Optimus Prime, Bumblebee, Hound, Drift, Crosshairs, Wheelie, Megatron, and Barricade.',
Director: 'Michael Bay',
Genre: 'Science Fiction Action',
Featured: 'Yes'
},
{
Title: 'Mission Impossible – Fallout',
Image_URL: 'https://en.wikipedia.org/wiki/Mission:_Impossible_%E2%80%93_Fallout#/media/File:MI_%E2%80%93_Fallout.jpg',
Description: 'Mission: Impossible – Fallout is a 2018 American action spy film written, produced, and directed by Christopher McQuarrie. It is the sixth installment in the Mission: Impossible film series, and the second film to be directed by McQuarrie following the 2015 film Rogue Nation, making him the first director to direct more than one film in the franchise. The cast includes Tom Cruise, Ving Rhames, Simon Pegg, Rebecca Ferguson, Sean Harris, Michelle Monaghan, and Alec Baldwin all of whom reprise their roles from the previous films, along with Henry Cavill, Vanessa Kirby, and Angela Bassett, who join the franchise. In the film, Ethan Hunt and his team must track down missing plutonium while being monitored by a CIA agent after a mission goes wrong.',
Director: 'Christopher McQuarrie',
Genre: 'Action Spy',
Featured: 'Yes'
},
{
Title: 'Spectre',
Image_URL: 'https://en.wikipedia.org/wiki/Spectre_(2015_film)#/media/File:Spectre_poster.jpg',
Description: 'Spectre is a 2015 British spy film and the twenty-fourth in the James Bond series produced by Eon Productions for Metro-Goldwyn-Mayer and Columbia Pictures. It is the fourth film to feature Daniel Craig as the fictional MI6 agent James Bond, and the second film in the series directed by Sam Mendes following Skyfall. It was written by John Logan, Neal Purvis, Robert Wade, and Jez Butterworth.',
Director: 'Sam Mendes',
Genre: 'Action Spy',
Featured: 'Yes'
},
{
Title: 'The Revenant',
Image_URL: 'https://en.wikipedia.org/wiki/The_Revenant_(2015_film)#/media/File:The_Revenant_2015_film_poster.jpg',
Description: 'The Revenant is a 2015 American epic Revisionist Western film directed by Alejandro González Iñárritu. The screenplay by Mark L. Smith and Iñárritu is based in part on Michael Punke\'s 2002 novel of the same name, which describes frontiersman Hugh Glass\'s experiences in 1823; that novel is, in turn, based on the 1915 poem The Song of Hugh Glass. The film stars Leonardo DiCaprio, Tom Hardy, Domhnall Gleeson and Will Poulter.',
Director: 'Alejandro González Iñárritu',
Genre:'Western Adventure',
Featured: 'Yes'
},
{
Title: 'Jurassic World',
Image_URL: 'https://en.wikipedia.org/wiki/Jurassic_World#/media/File:Jurassic_World_poster.jpg',
Description: 'Jurassic World is a 2015 American science fiction action film. It is the fourth installment of the Jurassic Park franchise and the first in the Jurassic World trilogy. Directed by Colin Trevorrow, written by Rick Jaffa and Amanda Silver, alongside Derek Connolly and Trevorrow from a story by Jaffa and Silver, and produced by Frank Marshall and Patrick Crowley, the film stars Chris Pratt, Bryce Dallas Howard, Vincent D\'Onofrio, Ty Simpkins, Nick Robinson, Omar Sy, BD Wong, and Irrfan Khan. Set 22 years after the events of Jurassic Park, Jurassic World takes place on the same fictional island of Isla Nublar, located off the Pacific coast of Costa Rica. A successful theme park of cloned dinosaurs, dubbed Jurassic World, has operated on the island for years, bringing John Hammond\'s dream to fruition. The park plunges into chaos when a transgenic dinosaur escapes from its enclosure and goes on a rampage, while a group of trained Velociraptors are utilized in neutralizing it.',
Director: 'Colin Trevorrow',
Genre: 'Science Fiction Action',
Featured: 'Yes'
},
{
Title: 'Night at the Museum - Secret of the Tomb',
Image_URL: 'https://en.wikipedia.org/wiki/Night_at_the_Museum:_Secret_of_the_Tomb#/media/File:Night_at_the_Museum_Secret_of_the_Tomb_poster.jpg',
Description: 'Night at the Museum: Secret of the Tomb is a 2014 American adventure comedy film directed by Shawn Levy and written by David Guion and Michael Handelman. It is the third and final installment in the Night at the Museum film series, and a sequel to Battle of the Smithsonian. The film stars Ben Stiller, Robin Williams, Owen Wilson, Dan Stevens, and Ben Kingsley.[3] In Secret of the Tomb, security guard Larry Daley must travel to London to return the tablet of Ahkmenrah, an Egyptian artifact which causes the exhibits to come to life, before the magic disappears.',
Director: 'Shawn Levy',
Genre: 'Adventure Comedy',
Featured: 'Yes'
},
{
Title: 'Bohemian Rhapsody',
Image_URL: 'https://en.wikipedia.org/wiki/Bohemian_Rhapsody_(film)#/media/File:Bohemian_Rhapsody_poster.png',
Description: 'Bohemian Rhapsody is a 2018 biographical musical drama film directed by Bryan Singer from a screenplay by Anthony McCarten, and produced by Graham King and Queen manager Jim Beach. The film tells the story of the life of Freddie Mercury, the lead singer of the British rock musical band Queen, from the formation of the band up to their 1985 Live Aid performance at the original Wembley Stadium. The film stars Rami Malek as Mercury, with Lucy Boynton, Gwilym Lee, Ben Hardy, Joe Mazzello, Aidan Gillen, Tom Hollander, Allen Leech and Mike Myers in supporting roles. Queen members Brian May and Roger Taylor also served as consultants on the film. A British-American venture, the film was produced by Regency Enterprises, GK Films and Queen Films, with 20th Century Fox serving as distributor.',
Director: 'Bryan Singer',
Genre: 'Biographical Musical Drama',
Featured: 'Yes'
}
];

let genreData = [
{ Title: 'Jason Bourne', Genre: ['Action Thriller'] },
{ Title: 'A Star Is Born', Genre: ['Romantic Drama'] },
{ Title: 'The Martian', Genre: ['Science Fiction'] },
{ Title: 'Transformers - The Last Knight', Genre: ['Science Fiction Action'] },
{ Title: 'Mission Impossible – Fallout', Genre: ['Action Spy'] },
{ Title: 'Spectre', Genre: ['Action Spy'] },
{ Title: 'The Revenant', Genre: ['Western Adventure'] },
{ Title: 'Jurassic World', Genre: ['Science Fiction Action'] },
{ Title: 'Night at the Museum - Secret of the Tomb', Genre: ['Adventure Comedy'] },
{ Title: 'Bohemian Rhapsody', Genre: ['Biographical Musical Drama'] },
];


//use myLogger to log requests
let myLogger = (req, res, next) => {
    console.log(req.url);
    next();
};
app.use(myLogger);

//Get requests
app.get('/', (req, res) => {
   res.send('Welcome to my Favorite Movies!');
});

app.get('/movies', (req, res) => {
   res.json(movies);
});

// Gets the data about a single movie, by title
app.get('/movies/:title', (req, res) => {
  res.send('return data on a single movie by title');
});

// Gets the data about genre, by title
app.get('/movies/genre/:title', (req, res) => {
  res.send('return data on genre by title');
});

// Gets the data about director, by name
app.get('/director/:name', (req, res) => {
  res.send('return data on director by name');
});

// Update their user info, by username
app.put('/users/:username', (req, res) => {
  res.send('update user info by username');
});

// Add a movie to users list of favorite movies by username
app.post('/users/[username]/movies/:moviesID', (req, res) => {
  res.send('add a movie to users list of favorite movies by username');
});

// Remove a movie to users list of favorite movies by username
app.delete('/users/[username]/movies/:moviesID', (req, res) => {
  res.send('remove a movie to users list of favorite movies by username');
});

// Remove data from a user to degister by username
app.delete('/users/:username', (req, res) => {
  res.send('remove data from a user to degister by username');
});


//use requests
app.use('/', express.static('public'));

// listen for requests
app.listen(8080, () =>{
  console.log('Your app is listening on port 8080.');
});

//error handling
app.use((err, req, res) => {
   console.error(err.stack);
   res.status(500).send('Error!');
});
