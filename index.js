const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// const muppet = {
//   muppetName: 'Miss Piggy',
//   color: 'pink',
//   song: 'Never Before, Never Again',
//   job: 'Cast member of The Muppet Show',
//   partner: 'Kermit'
// };

// const nestedMuppet = {
//   nestedName: 'Kermit',
//   nestedColor: 'green',
//   album: {
//     theMuppetMovie: {
//       song1: 'Rainbow Connection',
//       song2: 'Moving Right Along',
//       song3: 'Never Before, Never Again',
//       song4: 'I Hope That Something Better Comes Along',
//     },
//   },
//   nestedJob: 'Host of The Muppet Show',
//   nestedPartner: 'Miss Piggy'
// };

const farmAnimalSounds = farmAnimals.split(' ');
const [moo, neigh, baa, oink, cluck] = farmAnimalSounds;

const farmAnimalsNames = 'cow sheep pig chicken';
const [bessie, dolly, babe, little] = farmAnimalsNames.split(' ');

const farmAnimalsColors = 'cow sheep pig';
const [blackAndWhite, black, pink] = farmAnimalsColors.split(' ');

const [red, orange, yellow, green, blue, indigo, violet] = colors;

const [r, o, y, g, b, indg, v] = colors;


const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// 7. Use destructuring to assign all variables using the keys as the variable names
const {muppetName, color, song, job, partner} = muppet;

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner


const { song2, song4 } = nestedMuppet.album.theMuppetMovie;
const { nestedJob } = nestedMuppet;
const { nestedPartner } = nestedMuppet;