const express = require('express');
const app = express();

let moviesData = [
{
Title: 'Jason Bourne',
Description: 'Jason Bourne is a 2016 American action-thriller film directed by Paul Greengrass and written by Greengrass and Christopher Rouse. It is the fifth installment of the Bourne film series and a direct sequel to The Bourne Ultimatum (2007). Matt Damon reprises his role as the main character, former CIA assassin Jason Bourne.',
Director: 'Paul Greengrass',
Genre: 'Action Thriller',
Featured: 'Yes'
},
{
Title: 'A Star Is Born',
Description: 'A Star Is Born is a 2018 American musical romantic drama film produced and directed by Bradley Cooper (in his directorial debut) and written by Cooper, Eric Roth and Will Fetters. It stars Cooper, Lady Gaga, Dave Chappelle, Andrew Dice Clay, and Sam Elliott, and follows a hard-drinking musician (Cooper) who discovers and falls in love with a young singer (Gaga). It is the fourth filmed version of the 1937 film, after the 1954 musical and the 1976 musical.',
Director: 'Bradley Cooper',
Genre: 'Romantic Drama',
Featured: 'Yes'
},
{
Title: 'The Martian',
Description: 'The Martian is a 2015 British-American science fiction film directed by Ridley Scott and starring Matt Damon. Drew Goddard adapted the screenplay from The Martian, a 2011 novel by Andy Weir. The film depicts an astronaut\'s lone struggle to survive on Mars after being left behind, and the efforts of NASA to rescue him and bring him home to Earth. It also stars Jessica Chastain, Jeff Daniels, Kristen Wiig, Chiwetel Ejiofor, Sean Bean, Michael Peña, Kate Mara, Sebastian Stan, Aksel Hennie, Mackenzie Davis, Donald Glover, and Benedict Wong.',
Director: 'Ridley Scott',
Genre: 'Science Fiction',
Featured: 'Yes'
},
{
Title: 'Transformers - The Last Knight',
Description: 'Transformers: The Last Knight is a 2017 American science fiction action film based on the Transformers toy line. It is the fifth installment of the live-action Transformers film series and the sequel to Age of Extinction (2014). Like its predecessors, the film is directed by Michael Bay and features Mark Wahlberg reprising his role from Age of Extinction, while Josh Duhamel, John Turturro, and Glenn Morshower reprise their roles from the first three films, as well as Laura Haddock, Isabela Moner, Jerrod Carmichael, Santiago Cabrera, and Anthony Hopkins all joining the cast. Returning Transformers include Optimus Prime, Bumblebee, Hound, Drift, Crosshairs, Wheelie, Megatron, and Barricade.',
Director: 'Michael Bay',
Genre: 'Science Fiction Action',
Featured: 'Yes'
},
{
Title: 'Mission Impossible – Fallout',
Description: 'Mission: Impossible – Fallout is a 2018 American action spy film written, produced, and directed by Christopher McQuarrie. It is the sixth installment in the Mission: Impossible film series, and the second film to be directed by McQuarrie following the 2015 film Rogue Nation, making him the first director to direct more than one film in the franchise. The cast includes Tom Cruise, Ving Rhames, Simon Pegg, Rebecca Ferguson, Sean Harris, Michelle Monaghan, and Alec Baldwin all of whom reprise their roles from the previous films, along with Henry Cavill, Vanessa Kirby, and Angela Bassett, who join the franchise. In the film, Ethan Hunt and his team must track down missing plutonium while being monitored by a CIA agent after a mission goes wrong.',
Director: 'Christopher McQuarrie',
Genre: 'Action Spy',
Featured: 'Yes'
},
{
Title: 'Spectre',
Description: 'Spectre is a 2015 British spy film and the twenty-fourth in the James Bond series produced by Eon Productions for Metro-Goldwyn-Mayer and Columbia Pictures. It is the fourth film to feature Daniel Craig as the fictional MI6 agent James Bond, and the second film in the series directed by Sam Mendes following Skyfall. It was written by John Logan, Neal Purvis, Robert Wade, and Jez Butterworth.',
Director: 'Sam Mendes',
Genre: 'Action Spy',
Featured: 'Yes'
},
{
Title: 'The Revenant',
Description: 'The Revenant is a 2015 American epic Revisionist Western film directed by Alejandro González Iñárritu. The screenplay by Mark L. Smith and Iñárritu is based in part on Michael Punke\'s 2002 novel of the same name, which describes frontiersman Hugh Glass\'s experiences in 1823; that novel is, in turn, based on the 1915 poem The Song of Hugh Glass. The film stars Leonardo DiCaprio, Tom Hardy, Domhnall Gleeson and Will Poulter.',
Director: 'Alejandro González Iñárritu',
Genre:'Western Adventure',
Featured: 'Yes'
},
{
Title: 'Jurassic World',
Description: 'Jurassic World is a 2015 American science fiction action film. It is the fourth installment of the Jurassic Park franchise and the first in the Jurassic World trilogy. Directed by Colin Trevorrow, written by Rick Jaffa and Amanda Silver, alongside Derek Connolly and Trevorrow from a story by Jaffa and Silver, and produced by Frank Marshall and Patrick Crowley, the film stars Chris Pratt, Bryce Dallas Howard, Vincent D\'Onofrio, Ty Simpkins, Nick Robinson, Omar Sy, BD Wong, and Irrfan Khan. Set 22 years after the events of Jurassic Park, Jurassic World takes place on the same fictional island of Isla Nublar, located off the Pacific coast of Costa Rica. A successful theme park of cloned dinosaurs, dubbed Jurassic World, has operated on the island for years, bringing John Hammond\'s dream to fruition. The park plunges into chaos when a transgenic dinosaur escapes from its enclosure and goes on a rampage, while a group of trained Velociraptors are utilized in neutralizing it.',
Director: 'Colin Trevorrow',
Genre: 'Science Fiction Action',
Featured: 'Yes'
},
{
Title: 'Night at the Museum - Secret of the Tomb',
Description: 'Night at the Museum: Secret of the Tomb is a 2014 American adventure comedy film directed by Shawn Levy and written by David Guion and Michael Handelman. It is the third and final installment in the Night at the Museum film series, and a sequel to Battle of the Smithsonian. The film stars Ben Stiller, Robin Williams, Owen Wilson, Dan Stevens, and Ben Kingsley.[3] In Secret of the Tomb, security guard Larry Daley must travel to London to return the tablet of Ahkmenrah, an Egyptian artifact which causes the exhibits to come to life, before the magic disappears.',
Director: 'Shawn Levy',
Genre: 'Adventure Comedy',
Featured: 'Yes'
},
{
Title: 'Bohemian Rhapsody',
Description: 'Bohemian Rhapsody is a 2018 biographical musical drama film directed by Bryan Singer from a screenplay by Anthony McCarten, and produced by Graham King and Queen manager Jim Beach. The film tells the story of the life of Freddie Mercury, the lead singer of the British rock musical band Queen, from the formation of the band up to their 1985 Live Aid performance at the original Wembley Stadium. The film stars Rami Malek as Mercury, with Lucy Boynton, Gwilym Lee, Ben Hardy, Joe Mazzello, Aidan Gillen, Tom Hollander, Allen Leech and Mike Myers in supporting roles. Queen members Brian May and Roger Taylor also served as consultants on the film. A British-American venture, the film was produced by Regency Enterprises, GK Films and Queen Films, with 20th Century Fox serving as distributor.',
Director: 'Bryan Singer',
Genre: 'Biographical Musical Drama',
Featured: 'Yes'
}
];

//use myLogger to log requests
let myLogger = (req, res, next) => {
    console.log(req.url);
    next();
};
app.use(myLogger);

//Get requests
app.get('/', (req, res) => {
   res.send('Welcome to my Favourite Movies!');
});

app.get('/movies', (req, res) => {
   res.json(moviesData);
});

//use requests
app.use('/', express.static('public'));

// listen for requests
app.listen(8080, () =>{
  console.log('Your app is listening on port 8080.');
});

//error handling
app.use((err, req, res, next) => {
   console.error(err.stack);
   res.status(500).send('Error!');
});
