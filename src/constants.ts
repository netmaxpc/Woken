import type { StoryTree } from './types';

export const storyTree: StoryTree = {
  start: {
    text: "I woke up. The smell of perfume in the air. The essence of someone in the next room... a feeling of no familiarity, yet it feels like where I belong. But not.\n\nI look around. Porcelain pictures, tile floor. I'm in a bathroom, dark, with just enough light to see the outline of my clothes on the floor. Hopefully they're mine.\n\nI try to move. A stabbing pain from my back shoots down my spine.",
    videoUrl: "https://static.videezy.com/system/resources/previews/000/041/332/original/DSC_2692.mp4",
    choices: [
      { text: "Try to stand up, despite the pain.", next: 'standUp' },
      { text: "Reach for the clothes on the floor first.", next: 'reachForClothes' },
      { text: "Stay still and listen.", next: 'listen' }
    ]
  },
  reachForClothes: {
    text: "I manage to grab the clothes. They look like they would fit. They must be mine, right?",
    videoUrl: "https://static.videezy.com/system/resources/previews/000/041/956/original/20191024_02_DSLR_01_009.mp4",
    choices: [
      { text: "Check the pockets.", next: 'checkPockets' },
      { text: "Just put the pants on.", next: 'standUp' },
      { text: "Forget the clothes for now. The pain is too much.", next: 'painFocus' }
    ]
  },
  checkPockets: {
    text: "Right pocket: a silver Zippo lighter with 'GH' etched on it. Left pocket: a pack of cigarettes. Do I smoke?\n\nBack pocket: not an ID, but a folded piece of paper. On it, one word: 'run'.",
    videoUrl: "https://static.videezy.com/system/resources/previews/000/047/525/original/200424_2_V2_4K_005.mp4",
    choices: [
      { text: "Take the items.", next: 'takeItems', item: 'Zippo (GH)' },
      { text: "Now, try to stand.", next: 'standUp' },
      { text: "Who is GH?", next: 'wonderGH' }
    ]
  },
  takeItems: {
    text: "You pocket the lighter, the cigarettes, and the ominous note. They feel heavy with unasked questions.",
    videoUrl: "https://static.videezy.com/system/resources/previews/000/044/149/original/201015_02_V2_4K_012.mp4",
    choices: [
        { text: "Now, I have to stand up.", next: 'standUp' },
        { text: "Examine the 'run' note again.", next: 'examineRunNote' }
    ]
  },
  standUp: {
    text: "With a grunt, I pull myself up to my knees, then my feet. I'm in the tub. Why?\n\nAs I fumble for a light switch I can't find, I stub my toe on the toilet. A lot louder than I wanted to. '****!'\n\nThe sound gets the attention of whoever was in the next room. I hear them approaching.",
    videoUrl: "https://static.videezy.com/system/resources/previews/000/039/264/original/running_in_a_dark_corridor.mp4",
    choices: [
      { text: "Quick! Hide behind the door.", next: 'hide' },
      { text: "Brace myself and face them.", next: 'faceThem' },
      { text: "Yell 'I'm fine!'", next: 'yellFine' }
    ]
  },
  hide: {
    text: "It's a terrible hiding spot, but it's all I have time for. The figure enters, a quick gate to their footsteps. They immediately look behind the door and scream.\n\nA moment later, the light comes on. In an outburst of laughter, the woman hugs me tightly. The smell of her perfume, familiar. Her touch, warming, like a memory.",
    videoUrl: "https://static.videezy.com/system/resources/previews/000/038/473/original/running_girl_in_the_dark_and_light_from_the_door.mp4",
    choices: [
      { text: "Let the hug happen.", next: 'hugScene' },
      { text: "Push her away.", next: 'pushAway' }
    ]
  },
  faceThem: {
    text: "The door swings open, flooding the room with light. A woman stands there, her initial shock melting into a relieved, if manic, laugh. 'There you are!' she says, and pulls me into a tight hug. Her perfume is intoxicatingly familiar.",
    videoUrl: "https://static.videezy.com/system/resources/previews/000/038/473/original/running_girl_in_the_dark_and_light_from_the_door.mp4",
    choices: [
      { text: "Embrace the hug.", next: 'hugScene' },
      { text: "Stiffen and ask who she is.", next: 'pushAway' }
    ]
  },
  hugScene: {
    text: "As she loosens her grip, I notice the bloodstain on her right arm from where she hugged my wound. She doesn't seem to notice it. Doesn't she feel it? Smell it? Am I crazy?\n\n'Come on,' she says, 'I got some food for you.'",
    videoUrl: "https://static.videezy.com/system/resources/previews/000/044/928/original/200305_4k_hong_kong_01.mp4",
    choices: [
      { text: "Follow her, bewildered.", next: 'eatBurgers' },
      { text: "Point to the blood on her arm.", next: 'pointToBlood' },
      { text: "Ask the big question: 'Who am I?'", next: 'whoAmI' }
    ]
  },
  eatBurgers: {
    text: "We sit there, eating cold burgers and drinking lukewarm cola. I stare at her, trying to place a single detail. Deep green eyes, a hint of gold. Beautiful.\n\nA sharp pain shoots from my shoulder to my chest, taking my breath away. I struggle to keep composure, but she notices. 'You okay?' she asks.",
    videoUrl: "https://static.videezy.com/system/resources/previews/000/022/256/original/diner-scene.mp4",
    choices: [
      { text: "Sarcastic response: 'Yeah, I'm fine. Just feel like somebody stabbed me in the back.'", next: 'sarcasticRemark' },
      { text: "Be honest: 'No. My back is in agony.'", next: 'honestPain' },
      { text: "Play it cool: 'Just a muscle cramp. I'm okay.'", next: 'playItCool' }
    ]
  },
  sarcasticRemark: {
    text: "She's up on her feet, pacing. Very, very upset. She looks at me, tears in her eyes, mascara already running. 'I'm sorry,' she whispers.",
    videoUrl: "https://static.videezy.com/system/resources/previews/000/039/499/original/4K_14.mp4",
    choices: [
      { text: "Instinctive response: 'It's okay. It's not a big deal.'", next: 'wrongResponse' },
      { text: "Ask 'What's wrong? What did I do?'", next: 'whatDidIDo' }
    ]
  },
  wrongResponse: {
    text: "Confusion hits her face like a brick. I guess that was the wrong response. I have to get things straight. I have to tell her.",
    videoUrl: "https://static.videezy.com/system/resources/previews/000/039/501/original/4K_16.mp4",
    choices: [
      { text: "Stand up and tell her everything.", next: 'tellHerEverything' }
    ]
  },
  tellHerEverything: {
    text: "I take her by the hands and tell her everything: the last 25 minutes, the amnesia, the pain. She smiles at some points, frowns at others, but her confusion dissipates. The more at ease she feels, the more at ease I feel.\n\nAfter a long silence, she tells me my name is Max Marshal. Her name is Chastity Gordon. We met three days ago at this small hotel in Nevada. I'm a 'designer of some sort'.",
    videoUrl: "https://static.videezy.com/system/resources/previews/000/045/144/original/200508_01_V2_4K_019.mp4",
    choices: [
      { text: "Ask about the wound on my back.", next: 'askAboutWound' },
      { text: "Let's go outside and check out this hotel.", next: 'goToOffice' }
    ]
  },
  askAboutWound: {
    text: "I ask her about my wound and point out the blood on her arm. 'That's blood?' she says, looking down. Apparently, she's colorblind and thought it was dirt. She runs to grab a first-aid kit. The wound is real.",
    videoUrl: "https://static.videezy.com/system/resources/previews/000/041/395/original/DSC_2853.mp4",
    choices: [
        { text: "Let her patch me up.", next: 'patchedUp', item: 'Bandaged Wound' },
        { text: "No time for that. I need to see where we are.", next: 'goToOffice' }
    ]
  },
  patchedUp: {
      text: "She cleans and bandages the wound as best she can. It's a crude but comforting fix. The sharp pain dulls to a persistent throb.",
      videoUrl: "https://static.videezy.com/system/resources/previews/000/041/394/original/DSC_2852.mp4",
      choices: [
          { text: "Thank her.", next: 'thankHer' },
          { text: "Now, let's check out this hotel.", next: 'goToOffice' }
      ]
  },
  goToOffice: {
    text: "Outside, the desert air is cool. A neon sign glows red: 'EXIT'. The hotel office is lit, but empty. Dated furniture, old magazines. A bell on the counter says 'Don't ring me'.",
    videoUrl: "https://static.videezy.com/system/resources/previews/000/052/367/original/Videezy_2020_12_21_21_04_02.mp4",
    choices: [
      { text: "Ring the bell obnoxiously.", next: 'ringBell' },
      { text: "Go behind the counter.", next: 'behindCounter' },
      { text: "Go back to the room. This is creepy.", next: 'goBackToRoom' }
    ]
  },
  behindCounter: {
    text: "No one's back here. A coffee pot is still on. I see a door leading to a small kitchen. I walk through it, and my foot slips out from under me. I crack my knee violently on the ground.\n\nAs I lay there, laughing at my own misfortune, I see what I slipped on. A streak of blood, coming from the refrigerator.",
    videoUrl: "https://static.videezy.com/system/resources/previews/000/039/264/original/running_in_a_dark_corridor.mp4",
    choices: [
      { text: "Open the fridge. I have to know.", next: 'openFridge' },
      { text: "Get out of there. Now.", next: 'fleeKitchen' },
    ]
  },
  openFridge: {
      text: "My hand shakes as I reach for the handle. My heart's racing. I grab it, ready to pull... just as the bell on the front counter rings.",
      videoUrl: "https://static.videezy.com/system/resources/previews/000/044/149/original/201015_02_V2_4K_012.mp4",
      choices: [
        { text: "Yank the fridge open anyway.", next: 'bodyInFridge' },
        { text: "Forget the fridge. See who's at the counter.", next: 'seeWhoRang' }
      ]
  },
  bodyInFridge: {
      text: "I pull the handle. The body of an elderly lady, crumpled and face contorted, sits inside. The blood streaks from her sundress to the floor. I quickly shut the door, my mind reeling, and turn to see who is at the front counter.\n\nIt's a sheriff.",
      videoUrl: "https://static.videezy.com/system/resources/previews/000/041/141/original/spooky_refrigerator.mp4",
      choices: [
        { text: "Try to act casual.", next: 'meetSheriff' },
        { text: "Run out the back.", next: 'fleeKitchen' }
      ]
  },
  seeWhoRang: {
    text: "I leave the fridge and rush to the front. A tall sheriff with an 'I don't play around' gaze stares me up and down. 'Is there any problem here tonight?' he asks.",
    videoUrl: "https://static.videezy.com/system/resources/previews/000/041/332/original/DSC_2692.mp4",
    choices: [
      { text: "Try to bluff my way through it.", next: 'meetSheriff' },
      { text: "Panic and run.", next: 'fleeKitchen' }
    ]
  },
  meetSheriff: {
      text: "'No problems here, officer, besides being out of donuts.' I say. He gives a slight smirk. 'I'm just doing my check-in. I'll be available if you need me.' He turns and walks out. I can finally breathe.",
      videoUrl: "https://static.videezy.com/system/resources/previews/000/045/144/original/200508_01_V2_4K_019.mp4",
      choices: [
        { text: "Go back to the kitchen.", next: 'backToKitchen' },
        { text: "Grab the master key and get out.", next: 'grabMasterKey' }
      ]
  },
  grabMasterKey: {
    text: "I grab the master key hanging on a hook and head out the office door. The exit sign makes sense now. The sheriff is driving off in the distance. I walk down the dusty sidewalk back towards my room.",
    videoUrl: "https://static.videezy.com/system/resources/previews/000/039/264/original/running_in_a_dark_corridor.mp4",
    choices: [
        { text: "Go back to Chastity.", next: 'backToChastity' },
    ]
  },
  backToChastity: {
      text: "I open the door. She's sitting on the bed, staring at the wall. She looks up, sees the fresh blood on my back. 'Did the wound open up?' she asks. 'No,' I say, 'somebody else's did.'\n\nI grab her by the arm and race out of the room.",
      videoUrl: "https://static.videezy.com/system/resources/previews/000/038/473/original/running_girl_in_the_dark_and_light_from_the_door.mp4",
      choices: [
        { text: "Try the cars on the lot.", next: 'tryCars' },
        { text: "There's a barn out back. Head there.", next: 'goToBarn' }
      ]
  },
  goToBarn: {
    text: "We jog to the barn. There's a lock on the door, but the hinge isn't attached to anything. Genius. I swing the door open. Inside sits the most beautiful red '68 Chevelle I have ever seen. Not a spot of dust on it. Why is this car here? No time for that.",
    videoUrl: "https://static.videezy.com/system/resources/previews/000/052/367/original/Videezy_2020_12_21_21_04_02.mp4",
    choices: [
        { text: "Get in the car, pray for keys.", next: 'getInChevelle' },
    ]
  },
  getInChevelle: {
    text: "We get in. No keys. None at all. 'Wait here,' I tell her. I run back to the office, my heart not pounding this time. I go right to the kitchen, open the fridge. She's still there.",
    videoUrl: "https://static.videezy.com/system/resources/previews/000/039/264/original/running_in_a_dark_corridor.mp4",
    choices: [
        { text: "Check the dead woman's pockets for the keys.", next: 'checkDeadPockets', item: 'Chevelle Keys' },
        { text: "This is insane. Give up and leave.", next: 'giveUp' }
    ]
  },
  checkDeadPockets: {
    text: "Feeling guilty, I check her pockets. Jingle jingle. I feel keys. As I fish them out, her arm falls and hits mine, making me scream like a little girl. I grab the keys and run.",
    videoUrl: "https://static.videezy.com/system/resources/previews/000/041/141/original/spooky_refrigerator.mp4",
    choices: [
        { text: "Get back to the Chevelle and start it.", next: 'startChevelle' }
    ]
  },
  startChevelle: {
    text: "I get in the car. It starts. A full tank of gas. 'We're out of here,' I say. I turn the headlights on and pull out, heading for the road. Left or right? Chastity shrugs. '**** it,' I say, 'we're going left. I'm never right.'\n\nI hit the gas. The desert is empty. I push it to 120. I approach an intersection, a stop sign I have no intention of stopping for.",
    videoUrl: "https://static.videezy.com/system/resources/previews/000/047/525/original/200424_2_V2_4K_005.mp4",
    choices: [
        { text: "Blow through the stop sign.", next: 'crash' },
        { text: "Stop and check for traffic.", next: 'stopAtSign' }
    ]
  },
  crash: {
    text: "The second I enter the intersection, headlights come from the right. She screams. Smash...\n\nI woke up.",
    videoUrl: "https://static.videezy.com/system/resources/previews/000/004/053/original/car_crash_shot_from_inside.mp4",
    choices: [
        { text: "Begin again?", next: 'start' }
    ]
  },
  // Stubs for other branches
  listen: { text: "You hear a faint shuffling from the other room, like someone pacing.", choices: [{ text: "Try to stand now", next: 'standUp' }] },
  painFocus: { text: "The pain is a white-hot fire on your back. It's hard to think about anything else.", choices: [{ text: "Try to stand now", next: 'standUp' }] },
  wonderGH: { text: "GH... The letters mean nothing to you. A gift? Initials? A forgotten promise?", choices: [{ text: "Take the items.", next: 'takeItems', item: 'Zippo (GH)' },] },
  examineRunNote: { text: "Just one word. A command or a warning? The handwriting is sharp, urgent.", choices: [{ text: "Now, I have to stand up.", next: 'standUp' }] },
  yellFine: { text: "You yell 'I'm fine!'. The footsteps stop for a moment, then continue, faster. The door opens.", choices: [{ text: "Face them", next: 'faceThem' }] },
  pushAway: { text: "You push her back gently. 'Who are you?' you ask. Her smile falters. 'Max, it's me. Chastity. Don't you remember?'", choices: [{ text: "Follow her.", next: 'eatBurgers' }] },
  pointToBlood: { text: "You point to her arm. 'That's... that's blood.' She looks down, confused. 'Oh! I thought it was dirt. I'm colorblind.'", choices: [{ text: "This is too weird. Ask who you are.", next: 'whoAmI' }] },
  whoAmI: { text: "I look at her, my head swimming. 'I'm sorry... I don't know who I am.' Her expression softens from confusion to deep concern. 'Oh, Max...' She takes your hand.", choices: [{ text: "Tell her everything.", next: 'tellHerEverything' }] },
  honestPain: { text: "Her face fills with concern. 'Your wound must have opened up. Let me see.' She seems to genuinely care, but there's a flicker of something else in her eyes... guilt?", choices: [{ text: "Let her check the wound.", next: 'askAboutWound' }] },
  playItCool: { text: "She doesn't look convinced, but lets it go. 'Okay... well, eat up.' The silence that follows is heavy with unspoken questions.", choices: [{ text: "Break the silence: 'So, where are we?'", next: 'tellHerEverything' }] },
  whatDidIDo: { text: "She stops pacing and looks at you, her expression a mix of pain and frustration. 'It's not what you did... It's what *I* did.'", choices: [{ text: "Wait for her to explain.", next: 'wrongResponse' }] },
  thankHer: { text: "A small smile touches her lips. 'Just try not to get into any more trouble, okay?'", choices: [{ text: "Go check out the hotel.", next: 'goToOffice' }] },
  ringBell: { text: "You ring it six times, obnoxiously. The sound echoes in the empty office. Nothing happens. Either this is really bad customer service, or no one is here.", choices: [{ text: "Go behind the counter.", next: 'behindCounter' }] },
  goBackToRoom: { text: "You decide this is a bad idea and head back to the relative safety of the room with Chastity.", choices: [{ text: "Tell her the office is empty.", next: 'backToChastity' }] },
  fleeKitchen: { text: "You scramble out of the kitchen, back through the office, and burst out into the desert night, your heart hammering against your ribs. You run back to the room.", choices: [{ text: "Go back to Chastity.", next: 'backToChastity' }] },
  tryCars: { text: "You frantically try the handles of the six dusty cars on the lot. All of them are locked.", choices: [{ text: "Head to the barn.", next: 'goToBarn' }] },
  giveUp: { text: "This is a nightmare. Robbing the dead for a car? You turn and walk away from the office, from the barn, into the desert night.", choices: [{ text: "Game Over. You wander into the desert, lost.", next: 'start' }] },
  stopAtSign: { text: "You slam on the brakes, the Chevelle skidding to a halt just before the white line. You look left, then right. Nothing. The road is clear. It feels... too clear.", choices: [{ text: "Punch it and cross the intersection.", next: 'crash' }] }
};
