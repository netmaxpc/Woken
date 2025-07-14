import type { StoryTree } from './types';

export const storyTree: StoryTree = {
  // --- CORE STARTING PATHS ---
  start: {
    text: "You wake up in a car parked on a quiet suburban street. The dashboard clock reads 3:47 AM. A half-finished, cold coffee sits in the cupholder, your name misspelled on the cup as 'Kevin'. A heavy wedding ring, which you don't recognize, feels cold on your finger.",
    choices: [
      { text: "Check the glove compartment", next: 'glovebox' },
      { text: "Read the note on the passenger seat", next: 'note' },
      { text: "Try the car key in your pocket on the nearest house", next: 'houseKey' }
    ]
  },
  glovebox: {
    text: "Inside: a half-empty bottle of beta-blockers prescribed to a 'David M.', a crumpled map to a rehabilitation center circled in red, and a family photo where your face has been meticulously scratched out with a sharp object.",
    choices: [
      { text: "Take the beta-blockers", next: 'takePills', item: 'Beta-blockers' },
      { text: "Examine the map more closely", next: 'examineMap' },
      { text: "Try to remember the faces in the photo", next: 'rememberPhoto' }
    ]
  },
  note: {
    text: "The note is written on a cocktail napkin in elegant handwriting. It reads: 'They know you're remembering. The key is for the locker, not the house. Ditch the car. Don't be late again.' There's a lipstick print at the bottom.",
    choices: [
      { text: "Look for a locker key", next: 'findKey', item: 'Mysterious Note' },
      { text: "Try to start the car", next: 'startCar' },
      { text: "Get out and run", next: 'run' }
    ]
  },
  houseKey: {
    text: "You approach the quaint, dark house. The key slides into the lock and turns with a satisfying click. The door opens into a silent, sterile hallway. It feels... wrong. Like a model home. A single photograph hangs on the wall.",
    choices: [
      { text: "Examine the photograph", next: 'examineHousePhoto' },
      { text: "Call out to see if anyone is home", next: 'callOut' },
      { text: "Quietly retreat and go back to the car", next: 'retreatToCar' }
    ]
  },

  // --- BRANCHES FROM CORE PATHS ---
  takePills: {
    text: "You dry-swallow one of the pills. Your racing heart begins to slow to a steady, heavy rhythm. The panic recedes, replaced by a strange, detached calm. The world seems clearer, but also more distant.",
    choices: [
        { text: "Examine the map now", next: 'examineMap' },
        { text: "Try to remember the photo again", next: 'rememberPhoto' },
        { text: "Just sit and enjoy the quiet", next: 'sitQuietly' }
    ]
  },
  examineMap: {
      text: "The rehab center is called 'Clarity Springs'. It's located two states over. On the back, a series of dates are written down. The last one is circled: yesterday's date. Next to it, in different, shakier handwriting: 'He's out.'",
      choices: [
          { text: "Go back to the glovebox photo", next: 'rememberPhoto' },
          { text: "Try to start the car and drive", next: 'startCar' },
          { text: "This is too much. Go back to the car", next: 'retreatToCar' }
      ]
  },
  rememberPhoto: {
      text: "You stare at the scratched-out face, trying to force a memory. A flash of a child's laughter, the smell of cut grass, a woman's smile. Then a sharp, blinding headache. A nosebleed starts, slow and thick. The memories are there, but they're behind a wall of pain.",
      choices: [
          { text: "Wipe the blood and take a pill", next: 'takePills', item: 'Beta-blockers' },
          { text: "Give up trying to remember", next: 'examineMap' },
          { text: "Retreat to the car", next: 'retreatToCar' }
      ]
  },
  findKey: {
      text: "You frantically search the car. Tucked into the sun visor, you find a small, silver key with a number tag: 42. It looks like a key for a gym or bus station locker.",
      choices: [
        { text: "Take key and look for a bus station", next: 'lookForStation', item: 'Locker Key 42'},
        { text: "This is a trap. Throw the key away", next: 'throwKey' },
        { text: "Go back to the house", next: 'houseKey' }
      ]
  },
  startCar: {
      text: "You put the key in the ignition and turn. The engine sputters, whirs, then dies. You try again. Nothing. The battery is dead. The headlights, which were on when you woke up, now fade to a dim orange glow, then nothing.",
      choices: [
          { text: "Get out of the car", next: 'getOut' },
          { text: "Reread the note", next: 'note' },
          { text: "Honk the horn in frustration", next: 'honkHorn' }
      ]
  },
  run: {
      text: "You burst out of the car and run down the silent street. Your lungs burn. After a block, you slow down, gasping for air. You're in the middle of a perfectly manicured, soulless suburbia. Every house looks the same. You're completely lost.",
      choices: [
          { text: "Try to find your way back to the car", next: 'retreatToCar' },
          { text: "Keep running", next: 'keepRunning' },
          { text: "Check your pockets for anything useful", next: 'checkPockets' }
      ]
  },
  examineHousePhoto: {
    text: "It's the family from the photo in the car. A smiling woman, a laughing child... and you. Your face is clear, happy. You're holding the child. As you lean closer, you see a faint reflection in the glass: a tall, gaunt figure standing behind you in the hallway. You whip around. Nothing.",
    choices: [
      { text: "Bolt out of the house", next: 'run' },
      { text: "Go upstairs, towards the creaking sound", next: 'upstairs' },
      { text: "Take the photo off the wall", next: 'takePhoto', item: 'Untampered Family Photo' }
    ]
  },
  callOut: {
    text: "You call out, 'Hello?'. Your voice is swallowed by the silence. A moment passes. Then, from upstairs, a single, distinct floorboard creak. You are not alone.",
    choices: [
      { text: "Go upstairs to investigate", next: 'upstairs' },
      { text: "Shout again, more aggressively", next: 'shoutAgain' },
      { text: "Get out of the house. Now.", next: 'run' }
    ]
  },
  retreatToCar: {
    text: "You make it back to the cold, silent car. It feels both like a tomb and a sanctuary. The street is unchanged. What now?",
    choices: [
      { text: "Check glove compartment again", next: 'glovebox' },
      { text: "Reread the mysterious note", next: 'note' },
      { text: "Just wait here for something to happen", next: 'sitQuietly' }
    ]
  },
  sitQuietly: {
    text: "You sit in the oppressive silence of the car. The calm is unnerving. After what feels like an eternity, you hear the distant wail of a single siren. Is it getting closer?",
    choices: [
      { text: "Get out and hide", next: 'hide' },
      { text: "Stay in the car and wait", next: 'waitInCar' },
      { text: "It's for me. Time to run.", next: 'run' }
    ]
  },
  lookForStation: {
    text: "You walk towards a faint, distant blinking light. The suburban maze gives way to a commercial strip. Ahead, the words 'BUS STATION' glow in sickly neon. A single bus is idling, its doors open.",
    choices: [
      { text: "Board the bus", next: 'boardBus' },
      { text: "Look for locker #42 inside the station", next: 'findLocker' },
      { text: "This feels too easy. It's a trap. Turn back.", next: 'retreatToCar' }
    ]
  },
  throwKey: {
    text: "You toss the small silver key. It lands with a faint clatter in a storm drain and vanishes into the dark. A wave of relief washes over you, but it's immediately soured by the sickening feeling you just threw away your only lifeline.",
    choices: [
      { text: "Try to fish it out", next: 'fishKey' },
      { text: "Forget it. Go back to the house", next: 'houseKey' },
      { text: "Just start walking", next: 'run' }
    ]
  },
  getOut: {
    text: "You step out of the dead car into the cold, damp air. The street is utterly silent, the houses like sleeping giants with closed eyes. A profound sense of being watched prickles your skin.",
    choices: [
      { text: "Walk down the street", next: 'run' },
      { text: "Go back to the house", next: 'houseKey' },
      { text: "Check the trunk", next: 'checkTrunk' }
    ]
  },
  honkHorn: {
    text: "You slam the center of the steering wheel. A weak, pathetic 'meep' is all that comes out before the horn dies completely. The silence that follows is even louder than before.",
    choices: [
      { text: "Get out of the car", next: 'getOut' },
      { text: "Scream in frustration", next: 'screamFrustration' },
      { text: "Give up and wait", next: 'sitQuietly' }
    ]
  },
  keepRunning: {
    text: "You push yourself, running blindly through the labyrinth of identical streets. Your vision starts to blur, your legs feel like lead. You collapse, gasping, on a perfectly manicured lawn, the sprinklers turning on and soaking you in cold water.",
    choices: [
      { text: "Lie there and catch your breath", next: 'lieOnLawn' },
      { text: "Try to find the main road", next: 'lookForStation' },
      { text: "Check your pockets", next: 'checkPockets' }
    ]
  },
  checkPockets: {
    text: "You frantically pat yourself down. In your trouser pocket, you find nothing but lint and a single, heavy, unfamiliar coin.",
    choices: [
      { text: "Examine the coin", next: 'examineCoin', item: 'Strange Coin' },
      { text: "Keep it for later", next: 'keepRunning' },
      { text: "This is useless. Go back to the car", next: 'retreatToCar' }
    ]
  },
  upstairs: {
    text: "You quietly climb the stairs, your hand gripping the railing. The creaking came from the end of the hall. A door is slightly ajar, a sliver of light escaping from within.",
    choices: [
      { text: "Push the door open", next: 'openUpstairsDoor' },
      { text: "Listen at the door", next: 'listenAtDoor' },
      { text: "This is a bad idea. Go back down", next: 'retreatToCar' }
    ]
  },
  takePhoto: {
    text: "You lift the photo off the wall. It feels heavy, real. On the back is a handwritten message: 'Our perfect family. Don't let him ruin this, David.' The name makes your head spin.",
    choices: [
      { text: "Go upstairs", next: 'upstairs' },
      { text: "Leave the house with the photo", next: 'run' },
      { text: "Put the photo back", next: 'examineHousePhoto' }
    ]
  },
  shoutAgain: {
    text: "'WHO'S THERE?' you yell, your voice cracking. A new sound answers you: the soft, slow click of a deadbolt locking on the front door behind you. You're trapped.",
    choices: [
      { text: "Charge the front door", next: 'chargeDoor' },
      { text: "Run upstairs", next: 'upstairs' },
      { text: "Find another way out", next: 'findExit' }
    ]
  },
  hide: {
    text: "You dive into a thick, overgrown bush next to the house. The siren gets louder, closer. A police car cruises slowly down the street, its spotlight sweeping across the houses, across your car... and passes.",
    choices: [
      { text: "Wait until it's gone, then go to the bus station", next: 'lookForStation' },
      { text: "The police are here. Go into the house", next: 'houseKey' },
      { text: "Make a run for it", next: 'run' }
    ]
  },
  waitInCar: {
    text: "You duck down in the driver's seat. The siren screams as it approaches. Red and blue lights flash, painting the car's interior in a chaotic strobe. The police car stops right behind you. Two doors slam shut.",
    choices: [
      { text: "Game over. Restart", next: 'start' }
    ]
  },
  boardBus: {
    text: "You step onto the bus. The driver is a silhouette. He doesn't look at you. The doors hiss shut behind you. The bus pulls away, leaving the silent suburb behind. Where is it going?",
    choices: [
      { text: "Ask the driver where you're going", next: 'askDriver' },
      { text: "Look for other passengers", next: 'checkPassengers' },
      { text: "Sit down and wait", next: 'busRide' }
    ]
  },
  findLocker: {
    text: "The bus station is eerily empty. A bank of metal lockers stands against one wall. You find #42. The key fits. Inside is a worn leather wallet and a single, unlabelled cassette tape.",
    choices: [
      { text: "Examine the wallet", next: 'examineWallet' },
      { text: "Take the tape and leave", next: 'takeTape', item: 'Cassette Tape' },
      { text: "Board the waiting bus", next: 'boardBus' }
    ]
  },
  fishKey: {
    text: "You kneel, peering into the storm drain. The key is gone, swallowed by the darkness. Your reflection stares back at you from a puddle of murky water. It's not your face.",
    choices: [
      { text: "Get up and run", next: 'run' },
      { text: "Stay and stare at the reflection", next: 'stareReflection' },
      { text: "Give up and go to the house", next: 'houseKey' }
    ]
  },
  checkTrunk: {
    text: "The trunk pops open with a groan. It's empty, except for a spare tire and a single, pristine white feather.",
    choices: [
      { text: "Take the feather", next: 'takeFeather', item: 'White Feather' },
      { text: "Close the trunk and walk away", next: 'run' },
      { text: "Look closer at the tire well", next: 'lookTireWell' }
    ]
  },
  screamFrustration: {
    text: "You let out a raw, guttural scream. The sound is shockingly loud in the stillness. A light flicks on in an upstairs window of the house across the street.",
    choices: [
      { text: "Run", next: 'run' },
      { text: "Duck and hide in the car", next: 'waitInCar' },
      { text: "Go to that house", next: 'approachLight' }
    ]
  },
  lieOnLawn: {
    text: "You lie on the wet grass, chest heaving. The suburban sky is starless, a flat, dark grey. You feel a strange sense of peace in the surrender. It's broken by the sound of a dog barking nearby.",
    choices: [
      { text: "Get up and move away from the sound", next: 'keepRunning' },
      { text: "Stay put. A dog is just a dog.", next: 'stayPutDog' },
    ]
  },
  examineCoin: {
    text: "The coin is heavy, cold, and made of a dark, unfamiliar metal. On one side, a labyrinth. On the other, a stylized eye, wide and unblinking. It feels important. And dangerous.",
    choices: [
      { text: "Put it away", next: 'keepRunning' },
      { text: "Flip the coin", next: 'flipCoin' },
      { text: "Throw it away", next: 'throwCoin' }
    ]
  },

  // --- EXPANDED STORY - REPLACING PLACEHOLDERS ---

  openUpstairsDoor: {
    text: "You push the door open. Inside is a child's bedroom, impeccably neat. A small figure is sitting on the bed, back to you, humming a nursery rhyme. They slowly turn. It's the child from the photo, but their eyes are wide, black, and depthless.",
    choices: [
      { text: "'Who are you?'", next: 'askChildIdentity' },
      { text: "Back away slowly", next: 'backAwayFromChild' },
      { text: "Check on the child", next: 'checkOnChild' }
    ]
  },
  listenAtDoor: {
    text: "You press your ear to the cold wood. You hear soft, rhythmic humming. It's a children's nursery rhyme, but it's slightly off-key, distorted. It makes the hairs on your arm stand up.",
    choices: [
      { text: "Push the door open", next: 'openUpstairsDoor' },
      { text: "Call out", next: 'callOutAgainFromDoor' },
      { text: "Forget this. Get out.", next: 'chargeDoor' }
    ]
  },
  chargeDoor: {
    text: "You slam your shoulder into the front door. It shudders but holds firm. You hit it again. A crack appears. A third, desperate time, and the lock splinters. You stumble outside, gasping for air, free.",
    choices: [
      { text: "Just run", next: 'run' },
      { text: "Look back at the house", next: 'lookBackAtHouse' },
      { text: "Head for the bus station", next: 'lookForStation' }
    ]
  },
  findExit: {
    text: "You frantically search for another way out. You find a window in the kitchen overlooking the backyard. It's painted shut. You see a heavy skillet on the counter.",
    choices: [
      { text: "Use the skillet to break the window", next: 'breakWindow', item: 'Cut Hand' },
      { text: "Keep looking for an unlocked door", next: 'keepSearchingExit' },
      { text: "Go upstairs and face whatever is there", next: 'upstairs' }
    ]
  },
  askDriver: {
    text: "You clear your throat. 'Excuse me? Where is this bus going?' The driver doesn't turn. His voice is a synthesized, robotic monotone. 'To the next stop.' The ambiguity is chilling.",
    choices: [
      { text: "Press him for a real answer", next: 'pressDriver' },
      { text: "Look at the other passengers", next: 'checkPassengers' },
      { text: "Accept the answer and sit", next: 'busRide' }
    ]
  },
  busRide: {
    text: "You sit on the worn, vinyl seat. The bus trundles through an endless, repeating landscape of identical suburban streets. You realize you've been on this bus for a very, very long time. The scenery isn't changing. It's looping.",
    choices: [
      { text: "Demand the driver stop the bus", next: 'demandStop' },
      { text: "Try to open a window", next: 'openBusWindow' },
      { text: "Close your eyes and try to wake up", next: 'tryToWake' }
    ]
  },
  examineWallet: {
    text: "The wallet is old and cracked. Inside, a driver's license for 'David M.' The photo is of you, but you look tired, haunted. There's also a single credit card and a business card for a P.I. named 'Arthur Lusk'.",
    choices: [
      { text: "Take the wallet", next: 'takeWallet', item: 'David M. Wallet' },
      { text: "Put it back in the locker", next: 'putWalletBack' },
      { text: "Take only the P.I. card", next: 'takePICard', item: 'P.I. Card' }
    ]
  },
  takeTape: {
    text: "You grab the cassette tape. It feels significant. Now what? The empty station feels oppressive. The idling bus outside seems like the only way forward.",
    choices: [
      { text: "Board the bus", next: 'boardBus' },
      { text: "Leave the station and walk", next: 'run' },
      { text: "Examine the wallet in the locker", next: 'examineWallet' }
    ]
  },
  stareReflection: {
    text: "The face in the water isn't yours. It's gaunt, pale, with hollow eyes. It smiles a slow, cruel smile, then mouths a single word: 'Soon.' The reflection ripples and your own panicked face returns.",
    choices: [
      { text: "Jump back in horror", next: 'jumpBack' },
      { text: "Reach into the water", next: 'reachInWater' },
      { text: "Assume you're hallucinating", next: 'dismissHallucination' }
    ]
  },
  takeFeather: {
    text: "You pick up the single white feather. It's impossibly soft and clean. As you hold it, you feel a fleeting sense of peace, a memory of floating in a quiet, white space. It's gone as quickly as it came.",
    choices: [
      { text: "Keep the feather", next: 'run' },
      { text: "Let it go, watch it drift away", next: 'letFeatherGo' },
      { text: "This is weird. Look closer in the trunk", next: 'lookTireWell' }
    ]
  },
  lookTireWell: {
    text: "You lift the cover for the spare tire. Underneath, tucked away, is a shoebox. You open it. It's full of photographs, hundreds of them, all of the same woman. The woman from the family photo. In some she's smiling, in others, she's sleeping. In the last one, she's terrified.",
    choices: [
      { text: "Take the box and run", next: 'takeShoebox', item: 'Box of Photos' },
      { text: "Slam the trunk and get away", next: 'run' },
      { text: "Look through more photos", next: 'lookThroughMorePhotos' }
    ]
  },
  approachLight: {
    text: "You cross the street to the house with the light on. As you step onto the lawn, the light goes out. A porch swing creaks rhythmically in the dark. You feel you are not welcome here.",
    choices: [
      { text: "Knock on the door anyway", next: 'knockOnDoor' },
      { text: "Turn back and run", next: 'run' },
      { text: "Hide and see who comes out", next: 'hideAndWatch' }
    ]
  },
  stayPutDog: {
    text: "The barking gets closer, more frantic. A large, dark shape bursts from between two houses and charges at you. It's not a dog. It's too big, its movements too jerky. It's on you before you can scream.",
    choices: [
      { text: "Game Over. Restart.", next: 'start' }
    ]
  },
  flipCoin: {
    text: "You flick the strange coin into the air. It seems to hang at its apex for too long. You catch it, slapping it on your wrist. You lift your hand. The unblinking eye stares up at you. The world tilts.",
    choices: [
      { text: "A wave of nausea hits you. You are somewhere else.", next: 'somewhereElse' },
      { text: "Nothing happens. It's just a coin.", next: 'nothingHappensCoin' }
    ]
  },
  throwCoin: {
    text: "You hurl the coin as far as you can. It makes no sound as it disappears into the darkness. You feel you've made a grave mistake. A cold wind picks up, whispering a name you almost recognize.",
    choices: [
      { text: "Try to find it", next: 'findThrownCoin' },
      { text: "Ignore it and keep moving", next: 'run' }
    ]
  },

  // --- TIER 2 - NEW NODES ---
  askChildIdentity: {
    text: "'Who are you?' you ask, your voice trembling. The child smiles, a slow, unnatural stretching of lips. 'I'm the part you've been trying to forget,' it says in a voice that is both a child's and an old man's.",
    choices: [
      { text: "Attack it", next: 'attackChild' },
      { text: "Ask 'What do you mean?'", next: 'askWhatYouMean' },
      { text: "Flee the room", next: 'fleeChildRoom' }
    ]
  },
  backAwayFromChild: {
    text: "You take a slow step back, trying not to make any sudden moves. The child's head tilts at an impossible angle. 'Leaving so soon, creator?' it asks. The door to the room slams shut.",
    choices: [
      { text: "Try to open the door", next: 'tryOpenChildRoomDoor' },
      { text: "Confront the child", next: 'confrontChild' }
    ]
  },
  checkOnChild: {
    text: "You move closer, a strange paternal instinct overriding your fear. 'Are you okay?' you ask. As you reach out a hand, the child dissolves into a swarm of black moths that fill the room, choking you.",
    choices: [
      { text: "Game Over. Restart.", next: 'start' }
    ]
  },
  callOutAgainFromDoor: {
    text: "You call out again, 'Is anyone in there?' The humming stops. A long, drawn-out scratching sound begins from inside, like nails dragging across a wooden floor, coming closer to the door.",
    choices: [
      { text: "Kick the door in", next: 'kickDoorIn' },
      { text: "Brace the door shut", next: 'braceDoor' },
      { text: "Run downstairs and out of the house", next: 'chargeDoor' }
    ]
  },
  lookBackAtHouse: {
    text: "You glance back over your shoulder. In the upstairs window, where the child's bedroom was, you see a tall, gaunt figure watching you. The same figure from the reflection in the photograph.",
    choices: [
      { text: "Keep running, don't look back again", next: 'run' },
      { text: "Yell at the figure", next: 'yellAtFigure' },
      { text: "Hide and observe", next: 'hideAndWatch' }
    ]
  },
  breakWindow: {
    text: "You grab the heavy cast-iron skillet and swing it at the window. The glass shatters outwards. You clear the jagged edges with the pan and clumsily climb out, cutting your hand on a shard you missed. You're in a dark, overgrown backyard.",
    choices: [
      { text: "Find the front of the house", next: 'frontOfHouse' },
      { text: "Climb the fence into the neighbor's yard", next: 'climbFence' },
      { text: "Tend to your bleeding hand", next: 'tendHand' }
    ]
  },
  keepSearchingExit: {
    text: "You ignore the window and continue your search. You find a door to the basement. It's unlocked. A wave of cold, musty air hits you as you open it. You hear a faint dripping sound from the darkness below.",
    choices: [
      { text: "Go into the basement", next: 'enterBasement' },
      { text: "Forget it, break the kitchen window", next: 'breakWindow', item: 'Cut Hand' },
      { text: "Go back upstairs", next: 'upstairs' }
    ]
  },
  pressDriver: {
    text: "'That's not an answer,' you say, stepping closer. The driver's head swivels 180 degrees to face you. It has no face, just a smooth, polished surface of chrome that reflects your own terrified expression.",
    choices: [
      { text: "Attack the driver", next: 'attackDriver' },
      { text: "Stumble back in horror", next: 'stumbleBackBus' },
      { text: "Try to take control of the bus", next: 'hijackBus' }
    ]
  },
  checkPassengers: {
    text: "You turn your attention to the other passengers. There are three of them, all sitting perfectly still. As you look closer, you realize they aren't people. They're mannequins, dressed in outdated clothes, their painted eyes staring blankly ahead.",
    choices: [
      { text: "Examine a mannequin", next: 'examineMannequin' },
      { text: "Question the driver about them", next: 'askDriver' },
      { text: "This is a nightmare. Try to get off the bus", next: 'demandStop' }
    ]
  },
  demandStop: {
    text: "'Stop the bus! Let me off!' you scream. The synthesized voice replies, 'The ride is not over.' The bus accelerates, the looping scenery outside becoming a dizzying, nauseating blur.",
    choices: [
      { text: "Try to force the door open", next: 'forceBusDoor' },
      { text: "Try to break a window", next: 'breakBusWindow' },
      { text: "Collapse into a seat, defeated", next: 'defeatedOnBus' }
    ]
  },
  openBusWindow: {
    text: "You struggle with the window latch. It's rusted shut. You pull with all your might, and it finally gives way with a loud crack. The window slides open. The air outside is stale, metallic, and smells of ozone. There is no sound.",
    choices: [
      { text: "Yell for help out the window", next: 'yellFromBus' },
      { text: "Try to climb out", next: 'climbOutOfBus' },
      { text: "Stick your head out and look around", next: 'lookOutOfBus' }
    ]
  },
  tryToWake: {
    text: "This has to be a dream. You close your eyes, focusing all your will on waking up. You imagine your own bed, your own room. You open your eyes. Nothing has changed. A quiet, synthesized chuckle comes from the front of the bus.",
    choices: [
      { text: "Confront the driver", next: 'pressDriver' },
      { text: "Accept your fate", next: 'defeatedOnBus' },
      { text: "Try again, harder", next: 'tryToWakeHarder' }
    ]
  },
  takeWallet: {
    text: "You take the wallet. Holding the ID feels strangely validating, even if the name 'David M.' feels foreign. You now have an identity, for better or worse.",
    choices: [
      { text: "Head to the bus", next: 'boardBus' },
      { text: "Leave the station and find the P.I.'s office", next: 'findPI' },
      { text: "Go back to the car", next: 'retreatToCar' }
    ]
  },
  putWalletBack: {
    text: "This isn't you. You place the wallet back in the locker and shut the door. You feel a sense of rejection, of denying a truth presented to you. You are 'Kevin', the name on the cup. Or you are no one.",
    choices: [
      { text: "Board the bus as 'no one'", next: 'boardBus' },
      { text: "Take the cassette tape instead", next: 'takeTape', item: 'Cassette Tape' },
      { text: "Leave the station", next: 'run' }
    ]
  },
  takePICard: {
    text: "You pocket the private investigator's card. It feels like a clue, a thread to pull on. 'Arthur Lusk, P.I. - For Truths Best Left Buried.' The address is local.",
    choices: [
      { text: "Forget the bus, find the P.I.", next: 'findPI' },
      { text: "Take the wallet too", next: 'takeWallet', item: 'David M. Wallet' },
      { text: "Board the bus", next: 'boardBus' }
    ]
  },
  jumpBack: {
    text: "You scramble backwards, away from the storm drain, your heart hammering against your ribs. The world rights itself. It was just a trick of the light, the water, the stress. It had to be.",
    choices: [
      { text: "Get as far away from here as possible", next: 'run' },
      { text: "Take deep breaths to calm down", next: 'sitQuietly' },
      { text: "Go back and look again, cautiously", next: 'lookAgainDrain' }
    ]
  },
  reachInWater: {
    text: "You plunge your hand into the icy, murky water of the puddle. You feel nothing but mud and gravel. When you pull your hand out, the heavy wedding ring is gone.",
    choices: [
      { text: "Panic and search for the ring", next: 'searchForRing' },
      { text: "Feel a sense of relief", next: 'ringGoneRelief' },
      { text: "Look at your reflection again", next: 'stareReflection' }
    ]
  },
  dismissHallucination: {
    text: "You shake your head, trying to clear it. Lack of sleep, stress... that's all it is. A waking nightmare. You decide to ignore it and focus on what's real.",
    choices: [
      { text: "Focus on the house", next: 'houseKey' },
      { text: "Focus on the car", next: 'retreatToCar' },
      { text: "Focus on finding the bus station", next: 'lookForStation' }
    ]
  },
  letFeatherGo: {
    text: "You open your hand and let the feather go. It doesn't fall. It hovers in the air for a moment before drifting upwards, against gravity, and disappearing into the starless sky.",
    choices: [
      { text: "Stare in disbelief", next: 'stareDisbelief' },
      { text: "Decide you're definitely losing your mind", next: 'dismissHallucination' },
      { text: "Forget it and keep moving", next: 'run' }
    ]
  },
  takeShoebox: {
    text: "You grab the box of photos. It feels heavy, like a box of secrets. You slam the trunk shut and clutching the box, you start walking, not knowing where you're going, just that you have to get away from this car.",
    choices: [
      { text: "Find somewhere safe to look at the photos", next: 'findSafePlace' },
      { text: "Head for the bus station", next: 'lookForStation' },
      { text: "Go to the house with the light", next: 'approachLight' }
    ]
  },
  lookThroughMorePhotos: {
    text: "You rummage through the photos. Smiling, laughing, vacationing... then the mood shifts. The woman looks worried, then scared. The last few photos aren't of her at all. They're photos of you, sleeping in this very car, taken from the outside.",
    choices: [
      { text: "Drop the box and run", next: 'run' },
      { text: "Take the box", next: 'takeShoebox', item: 'Box of Photos' },
      { text: "Who took these? Hide and watch the car", next: 'hideAndWatchCar' }
    ]
  },
  knockOnDoor: {
    text: "You walk up the porch steps and knock firmly. The sound echoes. Silence. You knock again, harder. You hear the sound of multiple deadbolts being unlocked, one after another. The door creaks open a few inches.",
    choices: [
      { text: "Push the door open", next: 'pushOpenNeighborDoor' },
      { text: "Announce yourself", next: 'announceNeighbor' },
      { text: "This was a bad idea. Back away.", next: 'backAwayNeighbor' }
    ]
  },
  hideAndWatch: {
    text: "You conceal yourself in the shadows of a large oak tree across the street, watching the house. After several minutes, the front door opens. A man in a bathrobe steps out to get the morning paper. He looks exactly like you.",
    choices: [
      { text: "Confront him", next: 'confrontDoppelganger' },
      { text: "Follow him", next: 'followDoppelganger' },
      { text: "This is impossible. Run away.", next: 'run' }
    ]
  },
  somewhereElse: {
    text: "The world dissolves into a nauseating swirl of color and sound, then snaps back into focus. You're no longer on the street. You're in a stark white room with no doors or windows. In the center of the room is a single metal chair.",
    choices: [
      { text: "Sit in the chair", next: 'sitInWhiteRoom' },
      { text: "Pound on the walls", next: 'poundOnWhiteWalls' },
      { text: "Scream", next: 'screamInWhiteRoom' }
    ]
  },
  nothingHappensCoin: {
    text: "You stare at the coin. Nothing happens. It's just a weird, old coin. The feeling of significance fades, leaving you feeling a bit foolish. The world is still the same cold, dark, silent street.",
    choices: [
      { text: "Try flipping it again", next: 'flipCoin' },
      { text: "Put it in your pocket and move on", next: 'run' },
      { text: "Go back to the car", next: 'retreatToCar' }
    ]
  },
  findThrownCoin: {
    text: "You get on your hands and knees, frantically searching the damp grass and pavement. It's hopeless. The coin is gone. As you search, you feel it. A cold presence right behind you. You don't dare turn around.",
    choices: [
      { text: "Spring up and run without looking back", next: 'run' },
      { text: "Turn around slowly", next: 'turnToPresence' },
      { text: "Freeze and don't move", next: 'freezeInFear' }
    ]
  },

  // --- TIER 3 - LEAF NODES ---
  attackChild: {
    text: "You lash out, a desperate surge of adrenaline. The world seems to warp around the small figure, and the last thing you see is its unnervingly calm face as darkness consumes you.",
    choices: [{ text: "Continue...", next: 'storyEnd'}]
  },
  askWhatYouMean: {
      text: "'What does that mean?' you plead. The child's smile widens. 'It means we are one. And we are broken.' A wave of vertigo hits you, and the room dissolves.",
      choices: [{ text: "Continue...", next: 'storyEnd' }]
  },
  fleeChildRoom: {
    text: "You turn and run, not daring to look back. The sound of a child's laughter, cold and ancient, follows you down the stairs and out into the disorienting night.",
    choices: [{ text: "Continue...", next: 'storyEnd'}]
  },
  tryOpenChildRoomDoor: {
    text: "You rattle the doorknob, slam your body against the wood. It's solid, unmoving. A quiet whisper from behind you says, 'There is no escape.'",
    choices: [{ text: "Continue...", next: 'storyEnd'}]
  },
  confrontChild: {
    text: "You turn back to face the entity on the bed. 'What are you?' you demand. It stands up, growing taller, its form shifting into the gaunt figure from the reflection.",
    choices: [{ text: "Continue...", next: 'storyEnd'}]
  },
  kickDoorIn: {
    text: "With a splintering crash, the door flies open. A wave of dust and the smell of old paper washes over you. The room beyond is not a bedroom, but an old, forgotten study, papers scattered everywhere.",
    choices: [{ text: "Continue...", next: 'storyEnd'}]
  },
  braceDoor: {
    text: "You throw your weight against the door just as something heavy thuds against it from the other side. The wood groans. You're in a contest of strength with something you can't see.",
    choices: [{ text: "Continue...", next: 'storyEnd'}]
  },
  yellAtFigure: {
    text: "You scream at the silhouette in the window, a wordless cry of rage and fear. It doesn't react, simply continues to watch, a silent, patient observer of your breakdown.",
    choices: [{ text: "Continue...", next: 'storyEnd'}]
  },
  frontOfHouse: {
    text: "You stumble around the side of the house, thorns and branches tearing at your clothes. You find the front porch. The door you entered is closed, looking as if it hasn't been opened in years.",
    choices: [{ text: "Continue...", next: 'storyEnd'}]
  },
  climbFence: {
    text: "You hoist yourself over the tall wooden fence, landing with a thud in the neighbor's perfectly manicured yard. A motion-sensor floodlight snaps on, bathing you in sterile, white light.",
    choices: [{ text: "Continue...", next: 'storyEnd'}]
  },
  tendHand: {
    text: "You look down at your hand. Blood wells from a deep gash on your palm. The sight of it makes you dizzy. The pain is a sharp, grounding reminder that this is all too real.",
    choices: [{ text: "Continue...", next: 'storyEnd'}]
  },
  enterBasement: {
    text: "Taking a deep breath, you descend into the musty darkness of the basement. The wooden stairs creak under your weight. The only sound is the rhythmic drip, drip, drip of water somewhere in the shadows.",
    choices: [{ text: "Continue...", next: 'storyEnd'}]
  },
  attackDriver: {
    text: "You lunge at the faceless driver. Your hands pass right through it as if it's smoke. The bus swerves violently, and the synthesized laughter echoes in the small space.",
    choices: [{ text: "Continue...", next: 'storyEnd'}]
  },
  stumbleBackBus: {
    text: "You fall backwards, scrambling away from the chrome monstrosity. It swivels its head back to the front. The bus continues its serene, impossible journey.",
    choices: [{ text: "Continue...", next: 'storyEnd'}]
  },
  hijackBus: {
    text: "You shove the driver-thing aside and grab the wheel. It feels cold and inert. The bus does not respond. You are not in control here.",
    choices: [{ text: "Continue...", next: 'storyEnd'}]
  },
  examineMannequin: {
    text: "You touch one of the mannequins. Its plastic skin is cold and smooth. As you pull your hand away, its head slowly turns to look at you, painted eyes full of vacant accusation.",
    choices: [{ text: "Continue...", next: 'storyEnd'}]
  },
  forceBusDoor: {
    text: "You throw yourself against the bus doors. They don't budge. Through the glass, you see the same looping street corner pass by for the tenth time. You are on a carousel from hell.",
    choices: [{ text: "Continue...", next: 'storyEnd'}]
  },
  breakBusWindow: {
    text: "You slam your elbow against the window, again and again. It cracks, then shatters, but there's no rush of wind. Outside is not the suburban night, but a swirling, silent void.",
    choices: [{ text: "Continue...", next: 'storyEnd'}]
  },
  defeatedOnBus: {
    text: "You sink into a seat, the fight draining out of you. There's nothing to be done. You close your eyes, letting the gentle, constant motion of the bus lull you into a state of resignation.",
    choices: [{ text: "Continue...", next: 'storyEnd'}]
  },
  yellFromBus: {
    text: "You scream for help out the open window. The sound is swallowed by the unnatural silence. No one is out there to hear you.",
    choices: [{ text: "Continue...", next: 'storyEnd'}]
  },
  climbOutOfBus: {
    text: "You hoist yourself up and through the window, tumbling onto pavement. You stand up, brushing yourself off. The bus is gone. You are standing in the middle of the street, right next to your dead car.",
    choices: [{ text: "Continue...", next: 'storyEnd'}]
  },
  lookOutOfBus: {
    text: "You stick your head out the window. The world is a blur of repeating shapes and colors, a landscape of pure data. It's not real. None of it.",
    choices: [{ text: "Continue...", next: 'storyEnd'}]
  },
  tryToWakeHarder: {
    text: "You squeeze your eyes shut, pinching your arm, screaming inside your own head to WAKE UP. The effort is immense. You feel a tearing sensation, and a new pain, sharp and electric.",
    choices: [{ text: "Continue...", next: 'storyEnd'}]
  },
  findPI: {
    text: "You leave the station and wander the deserted streets, using the address on the card. You find a darkened office building. A single light is on in a third-floor window, with the name 'A. Lusk' stenciled on the glass.",
    choices: [{ text: "Continue...", next: 'storyEnd'}]
  },
  lookAgainDrain: {
    text: "Heart pounding, you force yourself to look back into the storm drain. Just murky water. Your own face, pale and scared, stares back. The wedding ring is still on your finger. It must have been a trick of the light.",
    choices: [{ text: "Continue...", next: 'storyEnd'}]
  },
  searchForRing: {
    text: "You frantically run your fingers through the silt and grime at the bottom of the puddle. Nothing. The ring is gone. You feel naked without it, but also... lighter.",
    choices: [{ text: "Continue...", next: 'storyEnd'}]
  },
  ringGoneRelief: {
    text: "The ring is gone. A profound, unexplainable wave of relief washes over you. You didn't even realize how much it felt like a manacle until it was gone.",
    choices: [{ text: "Continue...", next: 'storyEnd'}]
  },
  stareDisbelief: {
    text: "You stare at the spot where the feather vanished, your mind struggling to process what it just saw. Gravity is a rule, not a suggestion. Isn't it?",
    choices: [{ text: "Continue...", next: 'storyEnd'}]
  },
  findSafePlace: {
    text: "You need to think. You find a darkened alleyway between two buildings, out of sight. You sit down, your back against the cold brick, and place the shoebox on your lap.",
    choices: [{ text: "Continue...", next: 'storyEnd'}]
  },
  hideAndWatchCar: {
    text: "You duck back into the shadows, your heart racing. Someone was watching you. Stalking you. Photographing you. You watch the car, waiting for them to return.",
    choices: [{ text: "Continue...", next: 'storyEnd'}]
  },
  pushOpenNeighborDoor: {
    text: "You push the door. It swings open into a living room. A man who looks exactly like you sits in an armchair, reading a newspaper. He looks up, and his eyes widen in terror.",
    choices: [{ text: "Continue...", next: 'storyEnd'}]
  },
  announceNeighbor: {
    text: "'Hello?' you call into the dark opening. A voice, identical to your own, replies from within. 'You shouldn't have come here.'",
    choices: [{ text: "Continue...", next: 'storyEnd'}]
  },
  backAwayNeighbor: {
    text: "A primal fear takes over. You back away from the door, off the porch, and don't stop until the house is just another dark shape on a street of dark shapes.",
    choices: [{ text: "Continue...", next: 'storyEnd'}]
  },
  confrontDoppelganger: {
    text: "You step out from the shadows. 'Who are you?' you ask. He drops the newspaper, his face a mask of shock and fear. 'I could ask you the same thing,' he stammers.",
    choices: [{ text: "Continue...", next: 'storyEnd'}]
  },
  followDoppelganger: {
    text: "He goes back inside. You creep to a window, peering in. You watch him talk to the woman from the photograph. They look happy. A family. Your family.",
    choices: [{ text: "Continue...", next: 'storyEnd'}]
  },
  sitInWhiteRoom: {
    text: "You walk to the metal chair and sit. It's cold. As soon as you are seated, the walls begin to flicker, showing images: the car, the house, the bus, the child's face.",
    choices: [{ text: "Continue...", next: 'storyEnd'}]
  },
  poundOnWhiteWalls: {
    text: "You beat your fists against the smooth, seamless walls. They don't make a sound. It's like punching a dream. You are utterly trapped.",
    choices: [{ text: "Continue...", next: 'storyEnd'}]
  },
  screamInWhiteRoom: {
    text: "You scream until your throat is raw. The white room absorbs the sound completely. There is no echo. Your panic is a vacuum.",
    choices: [{ text: "Continue...", next: 'storyEnd'}]
  },
  turnToPresence: {
    text: "You take a shuddering breath and slowly, deliberately, turn around. There is nothing there. Just the empty street. But the feeling of being watched is stronger than ever.",
    choices: [{ text: "Continue...", next: 'storyEnd'}]
  },
  freezeInFear: {
    text: "You remain frozen, every muscle tensed. You can hear faint, shallow breathing right behind your ear. A cold hand rests on your shoulder.",
    choices: [{ text: "Continue...", next: 'storyEnd'}]
  },
  storyEnd: {
    text: "The thread of memory fades here, for now. The world waits to be remembered.",
    choices: [{ text: "Restart", next: 'start' }]
  },
};
