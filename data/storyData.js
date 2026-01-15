export const storyData = {
  Romance: {
    start: {
      text: "You see someone special across the park. What do you do?",
      choices: [
        { text: "Smile and wave", next: "wave" },
        { text: "Walk closer quietly", next: "approach" },
        { text: "Ignore and sit on the bench", next: "ignore" },
      ],
    },
    wave: {
      text: "They smile back and your heart skips a beat.",
      choices: [
        { text: "Say hi", next: "sayHi" },
        { text: "Keep watching", next: "keepWatching" },
        { text: "Leave", next: "leave" },
      ],
    },
    approach: {
      text: "You walk closer, and they notice you.",
      choices: [
        { text: "Introduce yourself", next: "sayHi" },
        { text: "Stay quiet", next: "awkward" },
        { text: "Run away", next: "leave" },
      ],
    },
    ignore: { text: "You sit on the bench, missing a chance.", choices: [] },
    sayHi: { text: "You start talking and hit it off. Romance blooms!", choices: [] },
    keepWatching: { text: "They walk away, leaving you wondering.", choices: [] },
    leave: { text: "You leave, story ends quietly.", choices: [] },
    awkward: { text: "It's awkward… maybe next time.", choices: [] },
  },

  Thriller: {
    start: {
      text: "You hear a strange noise in your apartment at night.",
      choices: [
        { text: "Investigate the noise", next: "investigate" },
        { text: "Call the police", next: "callPolice" },
        { text: "Hide under the bed", next: "hide" },
      ],
    },
    investigate: {
      text: "You find a shadow moving in the hallway.",
      choices: [
        { text: "Confront it", next: "confront" },
        { text: "Run outside", next: "run" },
        { text: "Lock yourself in room", next: "lockRoom" },
      ],
    },
    callPolice: { text: "The police arrive but find nothing. Strange.", choices: [] },
    hide: { text: "You wait under the bed. Time passes slowly.", choices: [] },
    confront: { text: "The shadow turns out to be a friend playing a prank!", choices: [] },
    run: { text: "You run outside, heart racing. Safe for now.", choices: [] },
    lockRoom: { text: "You lock the door and wait… nothing happens.", choices: [] },
  },

  Horror: {
    start: {
      text: "You wake up in an abandoned house with flickering lights.",
      choices: [
        { text: "Look around", next: "lookAround" },
        { text: "Scream for help", next: "scream" },
        { text: "Hide in a corner", next: "hide" },
      ],
    },
    lookAround: {
      text: "You see shadows moving across the walls.",
      choices: [
        { text: "Follow the shadows", next: "follow" },
        { text: "Run outside", next: "run" },
        { text: "Stay still", next: "stay" },
      ],
    },
    scream: { text: "Your scream echoes… nothing responds. Fear grows.", choices: [] },
    hide: { text: "You hide, trying not to breathe. Time stretches.", choices: [] },
    follow: { text: "The shadows surround you… you feel a cold hand.", choices: [] },
    run: { text: "You escape into the dark night. Safe… for now.", choices: [] },
    stay: { text: "You stay frozen. Something watches silently.", choices: [] },
  },
};
