window.onload = function(){
 
    var story = {
     
    opener: {
        text: 'Jack Grugg is an ex-marine who served the United States for 8 years. After he returns back home from his nearly decade-long service, he finds that he and his wife Stacy Grugg are in massive amounts of debt, and also have no money. Jack needs to find a job soon if he hopes to maintain the roof over his head. One day, Jack gets an envelope in the mail that has details about a job in New York City(the dead center of the zombie epidemic)that will reward him with a more than generous sum of money that would propel his family out of debt. As he inspects the envelope a little closer, he notices that there is contact information and a website name at the top of the envelope. He and his wife have a discussion about the letter, and she tells him that it is too dangerous.',
        options:[["Accept", "Accept the mission request"], ["initiallyDecline", "Decline the mission request"], ["Ignore", "Ignore the mission request"]]
    },
     
    Accept: {
        text: "Jack realizes that he doesn\'t know anything about the situation in New York City, all he knows is that it is where the zombie epidemic began. Despite this, he knows that the money from this mission will set him up for the rest of his life, it's the kind of money that will make it so he won\'t have to work another day in his life, let alone even worry about money. He makes the decision to send an email to the given address.",
        options:[["goThrough","Fully go through with the mission"], ["stillDecline", "Decline the mission "]]
    },
     
    initiallyDecline: {
      text: 'Jack decides to take his wife\'s words and end\'s up declining the mission. 5 days later Jack finds himself  buying dinner for him and his wife. He looks at his clock and sees that  the soccer game he wanted to watch, USA vs Mexico, is almost going to start. Once he finished getting dinner he rushed into his truck. He gets home opens the door and sees the TV on but there is no one in the room, so Jack begins to go to the kitchen to put the dinner he bought on the table, he begins to wonder why the house is so quiet and decides to say: Stacy, I am here love where are you?", 4 seconds passed and now he says "love?", seeing that his wife is not at home he decides to check the outside but does not see her. Jack returns home distressed at not finding his wife, goes up to the second floor, checks his room and notices that there are broken things on the floor as if there had been a fight. Jack is now more worried and even scared, he receives a call from an unknown number. Jack answers the phone, and the other person says "we have your wife, you have 24 hours to accept the mission. If you don\'t accept the mission, believe me you will never see your wife again."',
      options: [['confront','Decide to confront Jebediah']]
    },
     
    stillDecline: {
      text: 'After some thought he decides its not worth the risk',
    },
     
    goThrough : {
      text: "He knows that if he has any chances at successfully completing this task within NYC, he's gonna need to learn a lot about what it looks like over there. He decides to give Brian, an old friend from his time back in the Marines, a call. The two speak on the phone for hours, catching up and bringing up old memories. “Remember when we had to ambush that convoy and take their supplies?” asks Brian “Yea, Remember how we had to drag Andrew out of a ditch he got stuck in?” says Jack. They continue to reminisce about how without them, their battalion wouldn\'t have lasted a week. Eventually Jack asks Brian “So, do you know anything about this zombie thing in NYC?” Brian replies “Oh yea man, there's enough zombies in that place to cover the street 3 times over.”",
      options: [['fullyCommit', 'Go to New York'], ['seeImp','See whats so important in NYC']]
    },
     
    seeImp: {
      text: "Jack goes to see Jebediah to see what is so important about this thing in NYC. Jack arrives at the main building of the company, and is able to get into a meeting with Jebediah. They exchange pleasantries, and finally Jack asks him “So, what can you tell me about this thing in NYC?” from his time in the marines, he has learned that the more he knows the better. “It is an item of high importance, that is all you need to know”, quietly utters Jebediah. Jack to say the least is frustrated by this response, but he senses that Jebediah is not going to budge on any of the details. Jebediah, seeing the facial expressions on Jack's face says “It can lead to the reversal of the zombie epidemic”. Jack is thankful for what he managed to get from him, and thanks him for his time.",
      options: [['fComt', 'Finally commit to the mission']]
    },
     
    fComt: {
      text: "Jack fully commits to the mission in NYC. Jack travels to the city by car, around a 4 day long trip from his home in California. On the road he has time to relax and clear his mind before the plethora of challenges that are going to be presented in front of him.",
      options: [['trySave', "Try to save some civilians"]]
    },
     
    fullyCommit: {
      text: 'Jack fully commits to the mission in NYC. Jack travels to the city by car, around a 4 day long trip from his home in California. On the road he has time to relax and clear his mind before the plethora of challenges that are going to be presented in front of him.',
      options: [['trySave', "Try to save some civilians"]]
    },
     
    trySave: {
      text: "When Jack arrives in NYC, he sees that there are some people who have been cornered by zombies, but he took too long to get there - they end up killing the survivors. Jack begins to feel guilty for the lives of those he couldn\'t save. But he continues, keep on moving towards the objective, until he hears gunshots.",
      options: [['invGun', 'Jack decides to investigate the gunshots'], ['ignGun', 'Jack decides to ignore the gunshots']]
    },
     
    ignGun: {
      text: "Jack ignores the gunshot, staying on the path of the mission. He has no intention of staying here any longer than necessary, and he doesn't want to risk getting anyone else killed. He believes he could have saved the other survivors - he wouldn't be able to live with himself if it happened again. “I don\'t wanna have to be responsible for other people.",
      options: [['ignMov', 'Keep on moving']]
    },
     
    ignMov: {
      text: "Jack keeps on moving through New York City, all he wants to do is complete the mission and move on. The last thing he wants right now is to stay any longer than he needs to be. As he is walking through the city, he begins to notice the effect that this epidemic has had on the environment. The city is a remnant of what it once was. As time goes on, he reaches the building that the item is in.",
      options: [['ignEnter', 'Enter the building']]
    },
     
    ignEnter: {
      text: "Jack enters the building, and works his way to reach the item. He is attacked by countless zombies, and his ammo reserves become very low, but he manages to reach the mission objective. When he finally reaches it, he inspects it closer and begins to question just what exactly he is retrieving for Jebediah.",
      options: [['ignDispose', 'Dispose of the item'], ['ignKeep', 'Stay on the mission']]
    },
     
    ignDispose: {
      text: "Jack decides to get rid of the virus that he just picked up, he doesn\'t fully understand what it is, but he knows what it is capable of doing, and he doesn\'t fully trust Jebediah\'s intentions with it. He knows that the money being offered to him is enough to set him up for life, he would never have to work, or worry about money ever again. “But there are so many horrible things he could do with this” he says to himself aloud. Jack makes the decision to get rid of it, he doesn\'t think $50 million dollars is worth this risk. After getting rid of it, he heads back out of NYC, when he closes in on the edge of the city, he sees a giant horde. ",
      options: [['ignDispDistAlone', 'Distract the horde']]
    },
     
    ignDispDistAlone: {
      text: "Jack, with the help of his near decade long experience in the military decides to create a distraction using flares and car alarms. The horde gets distracted by the loud noises and they all swarm the cars and the flares, piling into one giant horde of undead flesh. But eventually they become bored with the cars and the flares, and notice that Jack has nearly escaped. The group runs at full speed after Jack, and nearly manages to catch him, but he gets on top of a building by using a ladder. The zombies are able to climb on top of one another to scale the building, but it is very slow. As they get closer to reaching the roof, a sound off in the distance starts to get louder and louder, and Jack knows exactly what it is. An attack helicopter saw the flares and headed towards them, the gunners in the heli mow down the horde and help Jack get back to safety.",
      options: [['ignDispGoHome', 'Go home']]
    },
     
    ignDispGoHome: {
      text: "The helicopter brings Jack back to his car outside of the city, where he calls Jebediah and gives him the news. Unlike his Amish brethren, Jebediah screams, “ARE YOU KIDDING ME?” - Jack, stunned by how loud an Amish man can be, stays quiet for a second, contemplating how to respond. He finally says “No, I am not kidding you”. Jebediah in response hung up the phone and practiced the Amish tradition of \'quiet hour\' to calm the soul and keep a level head so that he can run his company effectively. After their conversation, Jack hits the road and goes back home to Stacy. When he finally gets back home, Stacy can tell that something went wrong in NYC just by looking at his face “What happened over there?” she asks, “that thing he wanted me to get, I couldn\'t do it, Stacy, I just couldn\'t.” Stacy, unsure how to respond, just sat there trying to comfort her husband, “It was a vial named \'Zombie virus\', why would he want to get the thing that started this disaster in the first place?” “Whatever the reasoning, I\'m sure it wasn't for a good reason.” Jack, to say the least, was exhausted, when he got to their bedroom he jumped on the bed and fell into a well needed slumber. "
    },
     
    ignKeep:{
      text: 'Jack inspects the item much closer and begins to think of the possible repercussions that might ensue if he decidees to keep the it and deliver it to Jebediah. "Its the virus that started this thing in the first place" he says to himself. Jack, realizes that if this thing gets into the wrong hands, then the world that he knows so well might be destroyed. But, at the same time, it\'s possiblke that Jebediah won\'t do anything irrational. After a lot of thought, he makes the final decision to keep the virus and stay on the mission.',
      options:[['ignKeepDistAlone', 'Distract the horde']]
    },
     
    ignKeepDistAlone:{
      text: "Jack, with the help of his near decade long experience in the military decides to create a distraction using flares and car alarms. The horde gets distracted by the loud noises and they all swarm the cars and the flares, piling into one giant horde of undead flesh. But eventually they become bored with the cars and the flares, and notice that Jack has nearly escaped. The group runs at full speed after Jack, and nearly manages to catch him, but he gets on top of a building by using a ladder. The zombies are able to climb on top of one another to scale the building, but it is very slow. As they get closer to reaching the roof, a sound off in the distance starts to get louder and louder, and Jack knows exactly what it is. An attack helicopter saw the flares and headed towards them, the gunners in the heli mow down the horde and help Jack get back to safety.",
      options: [['ignKeepGoHome', 'Go home']]
    },
     
    ignKeepGoHome: {
      text:"Jack reaches safety, crossing through the city lines and reaching human civilization once again. “Alright, I gotta get this thing to Jebediah, and then get home to Stacy.” he says aloud speaking to himself. Jack gets in his car and gets on the road, headed to Jebediah. When he reaches Jebediah, he hands it to him, “Here it is boss” he says, “Thank you, Jack” Jebediah says, as he remains in his chair unchanged. “Right. Alright, the money is in your account. Good work, boy.” Jack says nothing in response, staring Jebediah in the eyes, and then promptly leaves. “Time to go home” he tells himself. After countless hours on the road, he finally gets back home, and is overjoyed to see Stacy again “Welcome back!” she says happily. “So, how was it?” “It was a hellhole, everything that used to be there is just rubble now, and the zombies. Seeing those people\'s bodies become a soulless body walking around is the worst feeling I've ever had.” “Jesus” She says shocked in response. They continue to converse about his experience, and then Jack walks upstairs, jumps on the bed and enjoys a well earned rest."
    },

    invGun: {
      text: "Jack decides that he should move in the direction of the gunshots, “gunshots mean survivors*/s he says to himself. The idea of there being people who have been hiding in this hell hole for however long it's been since the virus broke out in NYC. As Jack is moving in the direction of the shots, the time in between shots keeps getting smaller and smaller. “Somethings happening” Jack mutters through his lips. Jack finally reaches the area the shots are coming from and realizes something, those people are at the top of the empire state building. Ascending this building is going to take a long time, and he doesn\'t know how many of the undead could be inside the building, or if the staircase is intact anymore; Jack would essentially be heading in completely blind. ",
      options: [['Ascend', 'Ascend the building'], ['noAscend', "Don't ascend the building"]]
    },

    noAscend: {
      text: "Jack decides that he will not ascend the building, as he doesn\'t know anything about the situation inside the building, and going up the 102 story building could take a full day. Grugg decides to divert his focus back to the mission. ",
      options: [['ignMov', 'Enter the building']]
    },
    
    Ascend: {
      text: "Jack decides to ascend the behemoth of a building even though it is a huge risk to the mission and his life. Making this decision jeopardizes the objective of the mission, but the thought of there being survivors is more than enough to motivate him. To his surprise, the building is completely clear, every floor Jack has reached has been completely clear of any threats. This, however, is not the case when he reaches the last 2 floors of the building. He could see from below on the stairwell dozens of zombies on the stairs above him trying to breach a door, but to no avail as the door was made of a thick titanium material. Jack sneaks up behind them, lines up the undead brain munchers and slaughters them. Every. Single. One. They all fall down the stairs, laying at Jack's feet.",
      options:[['talkToSrvrs','Talk to the survivors']]
    },

    talkToSrvrs: {
      text:"He climbs the stairwell, avoiding stepping on top of the corpses and knocks on the 2 inch thick titanium door. After a few minutes, there was no response from the other side, “Hello, is anyone alive in there?” asks Jack, again no response. “I don\'t want to hurt you, I just wanna see if you\'re alright” Jack says honestly “Alright, I\'m gonna open this door, if you try anything I\'ll blow your brains sky high!” says a stranger who sounds hostile, but also desperate. As the door opens, he sees three people huddled together with their guns aimed at Jack's face “Who are you and why are you here?” asks the same man, “I heard gunshots when I was walking through the street and came over here to check for survivors” \'No, why are you in NYC? It's infested with those walkers” ''Walkers?” “Yea, those undead scoundrels walking around like they own the place.” “Well they do own the place.” Jack looks from one side of the room to another, scanning his environment, he sees that they are running low on ammo, based on how empty the ammo boxes look. They\'re also extremely low on food, Jack deduces after looking at the few cans of cut up fruit they have left. “I\'m on a mission to retrieve an item from the Morgan Library” The group to say the least was confused, but they started whispering to each other about the situation and said to Jack, 'We want to come with you'",
      options:[['bringGroup','Bring the group with you']]
    },

    bringGroup: {
      text: "Jack agrees to bring them with him on the mission, “Alright, i\'ll bring you guys along, but in that case we should know each other's names” “Good Idea” replies the man. “I\'m Jack, it's nice to meet you guys” “I\'m Rick, this is Diane, and that's Jimbob” “Alright, we should gather all the supplies we have and get moving”. The group descends the ginormous building slowly, making sure to clear each floor and gather as much supplies as they can possibly find. After about an hour they finally exit the building, and begin moving towards the Morgan building. Along the path, they see absolutely no zombies, none anywhere. “Where are all the walkers?” “I don\'t know man, but to tell you the truth i\'m not liking this.” “Maybe they got distracted by something” it turns out something must have happened, because when they were closing in on the library, it seemed like every zombie was there. “Alright, we need a plan. Without a plan, we aren\'t getting in that building” Jack tells the group. “Do you guys have any combat experience prior to NYC?” “We were all in the same division within the army” Using their combined experience with combat, they manage to form a strategy to execute the massive public zombie gathering. After clearing the undead, they enter the building and make their way towards the objective.",
      options:[['pickup','Pick up the item']]
    },

    pickup: {
      text:"Jack picks up the item, and the group slowly realizes what it is. “Just exactly who are you working for pal?” asks Jim Bob, “a very powerful Amish man” replies Jack. “Amish? Do you have any idea what an Amish person is?” “This Amish man wants you to retrieve this? What the hell for?” The group stood silent for a while, and then Jack decided that he needed to make a decision. Does he get rid of this item or keep it and continue with the mission? It's the virus that started the zombie virus in the first place - it could do a lot of damage, but there is also the chance that it could cure the infected. ",
      options:[['invKeep',"Keep the item"],['invDisp',"Dispose of the item"]]
    },

    invKeep: {
      text:"Jack makes the decision to keep the virus and put it in his backpack. They make their way out of the building, walking through the mess left by their previous battle. “What now” “Now we leave this godforsaken city and live our lives” says Jack “but i\'ve never left this city, its all ive ever known” Diane replies sadly “anything is better than this shithole we\'re currently in, even if you feel alienated.” Jimbob responds “Alright, we need to go through the Lincoln tunnel, it's our fastest way out of here” commands jack. They all agree with him, every other exit out of NYC is too far away, and they don't have enough supplies to go anywhere else. They make their way to the tunnel, keeping quiet to attract as little attention as possible, but as they get closer they realize something that they had all feared. A mob had formed just before the tunnel entrance, effectively forming a barrice, preventing anyone or anything getting through to the other side. Unfortunately they all knew the same thing - they do not have enough ammo to eliminate this huge throng of zombies, someone needs to do something.",
      options: [['invDistAlone',"Distract the horde alone"], ['invGroupDist', 'The group distracts the horde']]
    },

    invDistAlone: {
      text:"“Alright, I'm gonna distract these zombies from you guys with flares. When they follow me, high tail it outta here and get to Jersey. Don't wait for me either, just go live your lives” Jack tells the group as they\'re all huddled together “But you have the item with you”  ''I know, i\'ll be fine, just go”. Jack moves towards the group and lights a flare, and then begins to scream random sounds to get their attention. “I don't know what the hell he\'s saying, but it\'s working,” says Jimbob. The 3 survivors run as fast as they can towards the entrance of the tunnel, and Jack continues to bring the hordes' attention to him and the flares he has lighted. But, as he is running he sees zombies from in front of him and both sides racing towards him, as he looks around he realizes there is nowhere for him to go. Jack decides to go into a nearby building and use what little ammo and supplies he has left to fend off the undead for as long as possible. Then, just as he is on his last magazine of ammunition he hears something, a sound he has not heard in a very long time. The sound is that of a helicopter, and just as the sound gets louder he hears the fire of multiple guns, and he sees the zombies standing right in front of him torn apart by a swarm of ammunition. After the onslaught is over, the helicopter lands and picks up Jack, “who sent you guys?” Jack asks the helicopter crew, the co-pilot responds with “We saw your flares when we were flying around the edge of Jersey and decided to check it out, then heard your shots and decided we\'d come help.” “Well I'll tell you this, I'm damn glad you guys came.”",
      options:[['invGiv', 'Give the item to Jebediah']]
    },

    invGiv: {
      text:"After Jack was dropped off at his car outside of NYC, he drives to meet Jebediah at his company's main office. As he arrives, he begins to think of all the things that he can possibly do with the $50 million he will be receiving. “I\'m gonna make us debt-free,” he says to himself. Jack enters Jebediah\'s office and hands him the virus vial, and says “Here she is boss” confidently, Jebediah skeptically says “yes, here \'she\' is, Jack”. Jebediah\'s face was as straight as it could be, causing Jack to be a little freaked out, and questioning if he should have really given him the virus. “The $50 million dollars has been transferred to your bank account, good riddance.” Jebediah swifty exclaimed. As Jack leaves the building and heads home, he continues to question Jebediah, internally imagining the worst outcomes, but he just keeps on going. Like he always has, just keep on moving with life. Jack finally returns home, and his wife can see that he is ecstatic, given the fact he is smiling from one cheek to the other. “I take it by that look, we have $50 million dollars?” she asks him. “We have $50 million dollars” Jack responds happily. Although Jack is now a wealthy man, he has also grown as a man, beginning to value the importance of human life a little more, the zombies he saw in NYC made him realize just how fragile people really are. One day, something could happen that puts an end to everything people have worked towards in an instant. ",
    },

    invGroupDist:{
      text:"“Ok Jack, we\'re gonna work to distract the zombies so you can get outta here back to your wife.” “Ok, remember the second you see an opening you take it, we don\'t know how many zombies there might be on their way here.” The group works to set off car alarms and make as much noise as they can, grabbing the attention of every zombie near them, meanwhile Jack is moving towards the tunnel. As Jack makes it to the other side of the tunnel, he makes it to Jersey and waits for the survivors, but they never show, after 3 days of waiting nobody comes, and Jack realizes they must have been caught, but at least they\'re not in that hell hole anymore. ",
      options:[['invFindCar','Find the car']]
    },
    
    invFindCar:{
      text:"Jack finds his car and makes it towards Jebediah\'s main company office. On his way there, Jack begins to feel guilty, telling himself that he should have gone back and looked for them “I just let them die.” Jack painfully screams out loud in his car. Jack\'s experience in NYC has completely tarnished his soul, and all he wants is just to go home to Stacy. “I can\'t go home yet though, I need that money more than anything right now.” Jack finally reaches the office and approaches Jebediah, “Here” he says filled with anger and frustration. “Thank you, Mr. Grugg,” Jebediah says smuggly. Jack doesn\'t say a word to Jebediah, it's obvious that he is not well and has some things he needs to say. This however is not the time nor the place to do such a thing. “The money is in your account” Jebediah relays to Jack. “Thank you,” he says.  Jack swifty leaves the building and makes his way to his car. As Jack is driving back to his home he can\'t stop thinking about how he got those 3 people killed. “They had family, they had lives to live, and I used them so that I wouldn't die” he cries aloud. As he gets home, Jack looks like he has seen the worst thing imaginable, “What\'s wrong” Stacy worryingly asks him, “I could have saved them Stacy, but instead I used them to get out of there.”. Jack doesn't say another word, heading to the bedroom and enjoys a well deserved rest.",
    },

    invDisp: {
      text:"After getting rid of it, they leave the building and move forwards to leave the unfortunate remnant of a city they find themselves in. They see that there is an absolutely astonishing amount of zombies on their path  out of the city. As they get closer to the tunnel, they see that a giant group of flesh-eaters are following them and realize there is no way they\'ll be able to outrun them. The group quickly makes a plan and makes use of a flare from Jack's backpack and a spare pipebomb from Rick\'s pack. Luckily, it works perfectly and they escape and keep moving towards the tunnel out of the city. As they get closer to the exit they hear undead screeching behind them and see that another horde is coming for them “Do we have enough supplies to take on this horde?” Diane asks worryingly “I\'m not sure, but we don\'t have much of a choice. We need to make a distraction, we don\'t have the supplies to fight them.” ",
      options:[['invDispJack','Distract the horde'],['invDispGroup','The group distracts the horde']]
    },
     
    invDispJack: {
      text:"“Alright, I'm gonna distract these zombies from you guys with flares. When they follow me, high tail it outta here and get to Jersey. Don't wait for me either, just go live your lives” Jack tells the group as they\'re all huddled together “But you have the item with you”  ''I know, i\'ll be fine, just go”. Jack moves towards the group and lights a flare, and then begins to scream random sounds to get their attention. “I don't know what the hell he\'s saying, but it\'s working,” says Jimbob. The 3 survivors run as fast as they can towards the entrance of the tunnel, and Jack continues to bring the hordes' attention to him and the flares he has lighted. But, as he is running he sees zombies from in front of him and both sides racing towards him, as he looks around he realizes there is nowhere for him to go. Jack decides to go into a nearby building and use what little ammo and supplies he has left to fend off the undead for as long as possible. Then, just as he is on his last magazine of ammunition he hears something, a sound he has not heard in a very long time. The sound is that of a helicopter, and just as the sound gets louder he hears the fire of multiple guns, and he sees the zombies standing right in front of him torn apart by a swarm of ammunition. After the onslaught is over, the helicopter lands and picks up Jack, “who sent you guys?” Jack asks the helicopter crew, the co-pilot responds with “We saw your flares when we were flying around the edge of Jersey and decided to check it out, then heard your shots and decided we\'d come help.” “Well I'll tell you this, I'm damn glad you guys came.”",
      options: [['invDispCar','Go the the car']]
    },

    invDispCar:{
      text:"Jack goes to his car and makes his way to his home in California. Whilst on his way, he calls Jebediah “Well, I went to the place you said and there wasn\'t anything there. No virus or vial like you said there would be” ''I swear to god, If ye\'re lying to me I will make you harvest my crops for the rest of eternity.” Jack, confused but also a little amused by his response tries to muffle a laugh but doesn\'t do a great job, “You better not be laughing at me you dirty peasant.” “Look Jebediah, I am telling you that there was nothing there” “Fine, whatever” Jebediah angrily responds and slams the phone on the table, ending the call. Jack considered telling him the truth, but he knew that if he did that he would be in some real trouble. Jack eventually returns home with no money, but he doesn\'t care too much, as he saved some people and possibly prevented another outbreak. “You didn\'t get any money, but do you seem happy?” “I saved people who were still in NYC who needed help.” “There were people still there?” “Yea a few people from the army were in the Empire State building for god knows how long.” “What?” she asks as she is extremely confused. “Look, Can we talk about this later? I\'m exhausted.”",
    },       //End of the 'Accept' branch of the story, following text will be for the 'Decline' branch.

    confront: {
      text:'Jack, after some though decides to go to the attic and grab some of his tactial gear, including an M16. While Jack is doing this, he decides to contact an old friend from the military who owes him a few favors to see if he can get the location of the unknown caller. After about 10 minutes, Jack\'s friend calls him back, "I\'ve got his location, I\'ll text it to you shortly". Jack goes to his truck, and starts traveling to the location. He enters the building, and takes the receptionist hostage, ordering him to take him to his boss. After eliminating a dozen security guards, Jack arrives at the office, finding his wife tied to a chair, and a man standing next to her. Jack asks him, "Who are you?. I already told you I don\'t want to do the mission."To which the boss replies, "My name is Jebediah, and I run this organization." A team of security guards arrives at the office, behind jack, shooting him in his shoulder and leg. Jack is forced to take cover while the security team takes their boss away, leaving Jack\'s wife in the office. Jack unties his wife, and then they go home after slowly exiting the building. ',
      options:[['stillDecline',"Decline the offer once again"],['giveIn','Accept Jebediah\'s offer']]
    },

    stillDecline:{
      text:"Jack decides to forget all about this and go live a normal life. Because of his decision to not retrieve the item, the world descends into chaos.",
    },

    giveIn:{
      text:"Jack arrives home, for his wife to remove the bullets from his body and start his recovery, Jack refuses to start his rehabilitation because he wants to look for Jebediah, he very much wants to finish Jebediah, Jack gets up from the chair, gave a few steps and his leg began to hurt too much for which he is forced to not continue with his idea, it has been 1 year since the day he faced Jebediah. Jack is in a very bad economic situation, he had to pay thousands of dollars to be able to walk again. He and his wife had to talk to find a solution, and they came to the conclusion that the best way to get out of debt is if he accepts the mission that Jebediah offered him. Jack contacts Jebediah and tells him that he accepts the mission.",
      options:[['call','Call up an old friend']]
    },

    call: {
      text:'Jack receives the information about the mission, he is informed that he has to go to a laboratory which is in the center of NYC and get the virus vial and bring it to the organization, he is also informed that despite many animals died when The outbreak of the virus began, but some of the animals became zombies and are larger than the average size of their species. With all the information received about the mission, Jack contacts an old friend to help him come up with a plan.Jack and his friend are in his living room talking about the mission. His friend informs him that the safest and fastest way to complete the mission would be to be dropped off at NYC Bay and picked up there, his friend also tells him "I heard rumors that there are zombies that run as a normal person. There\'s also zombies who are smarter than the others.” The two analyzed the plan, made calculations and the result they obtained was a 35% success rate.',
      options:[['keepGoing','Keep on going'],['backOff', "Go home"]]
    },

    backOff: {
      text:"Jack backs down and decides better not to continue with the mission since there is a very high probability that he will not return home alive.Because of his decision to not retrieve the item, the world descends into chaos"
    },

    keepGoing: {
      text:"3 days have passed since the day Jack saw his friend Brian to build a plan. Jack is now in the bay of NYC with his other 2 companions who were assigned to the mission, the first day Jack found zombie dogs that are 1.5 meters tall next to zombie bears with a height of 3 meters. Unfortunately, Jack's companions died on the 4th day of the mission, they died when they were cornered by 5 zombie wolves while one of them was doing surveillance, the other companion tried to help but was attacked by another wolf. Jack realizing that the two were dead, he decided better to hide in a room to wait for the wolves to leave. It's the sixth day and Jack now finds himself just 13 blocks away from the lab. Jack feels weird since he hasn't seen a zombie in over an 1 hour of walking through the streets. After he had been walking for an hour and a half, Jack looks into the distance, to see a horde of zombies in a circle as if they were huddled together.",
      options:[['invHorde','Jack decides to investigate the horde'],['ignHorde','Jack decides to ignore the horde']]
    },

    invHorde: {
      text:"Jack, after seeing the huge horde of zombies off in the distance decides to investigate the horde. As Jack got closer to the horde, he heard something behind him, and when he looked he saw a zombified dog chasing him. The main group of zombies heard Jack approaching them and started to chase him. Jack managed to survive for a while, using the ammo he had, but eventually he was overrun by the dogs and torn to shreds."
    },

    ignHorde: {
      text:"Jack decides to not investigate the horde he saw off in the distance, 'I need to focus' he says to himself. He resumes his path to find the item for Jebediah, but as he is getting closer to the building, he begins to see signs of human life. ",
      options:[['invLife','Investigate the signs of life']]
    },

    invLife: {
      text:"Jack decides to start heading towards the building, as he starts getting closer and closer he starts seeing dead bodies of zombies. Jack decides to go into the 10-meter-high house from which smoke was coming out of the chimney, and upon entering he finds 5 soldiers who apparently had been sent by the government to extract biological information from the zombie virus to try to generate vaccines. Jack asks them why they are still in town to which they reply that the day before their extraction chopper was shot down by zombie dogs, which killed 5 soldiers, 2 pilots, and 3 teammates, they also mentioned staying behind. Without communication with the military base, Jack decides to ask them for help with his mission, which they accept. Jack gets to the lab on the sixth day during night time, as he sees many zombies in the north side and the enormous size of the building he starts to doubt the ability to complete the mission when he sees the facility.",
      options:[['dontAbnd','Keep going'],['abndMission','Abandon the mission']]
    },

    abndMission: {
      text: "Jack decides to abandon the mission as he sees many zombies, and eventually finds it impossible to penetrate the zombies, and escapes to safety with his team members."
    },

    dontAbnd: {
      text: "Jack decides to form a plan using his experience gained from the special forces. He decides to form a plan to eliminate the zombies, and his companions decide to do another plan. They ended up having two plans. The first plan is to go through the South side and the second plan is to go through the West side. Now is the time for Jack to make a decision",
      options:[['west','The group decides to enter through the West entrance'],['south','The group decides to enter through the west entrance']]
    },

    west: {
      text: "Jack decides to go on the west side of the resort, upon arriving there he repents as he meets a pack of zombies. The group of zombies run straight towards them, but a group of zombies is behind them, attacking them from the flank. Combined, zombies over power them. Jack and his motley crew of people die a slow, painful death. "
    },

    south: {
      text: "Jack decides to enter the facility through the south side; they find only 20 zombies in the south side. Jack decides to form 2 teams, one will stay at the entrance to eliminate any zombies trying to enter the facility, and the other team will look at every room in the facility till they find the Vial Virus. After 43 minutes of looking into different rooms they finally were able to find the Virus.",
      options:[['leaveWest','the group decides to leave the building through the West side']]
    },

    leaveWest: {
      text:"They chose to escape from the facility using the west side, as they were approaching the exit, they started seeing a horde of zombies heading towards the west side, Jack decided to go get a car so they could escape, otherwise zombies would just keep coming due to the shooting noises.",
      options: [['stealth','Leave quietly'],['gunsBlaze','Leave the building guns blazing']]
    },

    gunsBlaze: {
      text:"Once Jack found a car that would be big enough for the group, he started hot-wiring the car. The group defended Jack, killing dozens of zombies whilst Jack was getting the car working.",
      options:[['leaveNYC','Drive to the edge of the city']]
    },

    leaveNYC: {
      options: "The group went as far as they could possibly go, 40 minutes passed until the car ran out of gas. They got out of the car and decided to find a building where they could spend the night. Two members of the group were taking care of the group, while the others were sleeping. One of the soldiers decided to smoke a cigarette outside the building, while he was talking with his partner, he decided to sit on the car\'s hood. When he sat down on the hood, the alarm started beeping. Instead of panicking, the two of them decided to wake up the rest of the group, so that they could leave the area before they would be swarmed. But, this was to no avail, as when the group left the building, they were greeted by seemingly hundreds of zombies. Despite their best efforts to fend off the zombies, they were overrun, and died a gruesome, slow death."
    },

    stealth: {
      text: "As they were seeing an incredible amount of zombies getting closer and closer to the west side, the 5 team members without Jack decided to put music in a room so that the zombies would not follow them but instead follow the music. This idea would allow them to escape through the roof using ropes so that the zombies would not follow them but instead follow the music. ",
      options: [['cont','Continue']]
    },

    cont: {
      text:"The team told Jack that it was not necessary to get a car anymore since they were not followed by the zombies, and they told him that getting a car would just make a lot of noise which could bring zombies to them. They decided to keep with the mission walking, they found a good building just 10 blocks away from the lab, they decided to spend the rest of the night in there. Now it is 7 in the morning on the 7th day, they started heading to the extraction point, as they started walking they started to see a horde of zombies coming in front of them.",
      options: [['hide', 'Find a spot and hide until the exit is clear'], ['pushThrough','Push through the horde of zombies']]
    },

    hide:{
      text:"The group decided that they would find a spot to hide, and wait for the line of zombies blocking the exit to dissipate. For the first few hours of hiding, everything was going smoothly, but eventually one of the group members began shouting after experiencing a nightmare. The horde heard these shouts, and found them, and then began to tear them to shreds and eat their organs. "
    },

    pushThrough:{
      text:"The group decided to face the enemy, they started shooting them, they saw 2 dogs coming at a fast speed, as they were shooting the dogs looked like they were not getting any damage, one of them grabbed a teammate and took him 10 meters away from them. The dog looked like he was trying to take him to the other zombies. The 5 soldiers decided to shoot him in the head simultaneously, that decision did work  and the dog died before causing any harm to their team mate.",
      options:[['pushLeave','Leave']]
    },

    pushLeave:{
      text:"The team was able to eliminate the horde and get to the extraction point, unfortunately one of their members died when a dog zombie came out of nowhere and attacked his throat. After fending off the rest of the zombies, Jack and the survivors found a few cars. The group all went their separate ways, and Jack headed to Jebediah",
      options:[['jeb','Go see Jebediah']]
    },

    jeb:{
      text:"Jack gets in his car and gets on the road, headed to Jebediah. When he reaches Jebediah, he hands it to him, “Here it is boss” he says, “Thank you, Jack” Jebediah says, as he remains in his chair unchanged. “What? Are you expecting a reward? Don\'t forget, you turned down my offer, you should be grateful I gave you a chance to right that wrong, boy.” Jack says nothing in response, staring Jebediah in the eyes, and then promptly leaves. “Time to go home” he tells himself. After countless hours on the road, he finally gets back home, and is overjoyed to see Stacy again “Welcome back!” she says happily. “So, how was it?” “It was a hellhole, everything that used to be there is just rubble now, and the zombies. Seeing those people\'s bodies become a soulless body walking around is the worst feeling I've ever had.” “Jesus” She says shocked in response. They continue to converse about his experience, and then Jack walks upstairs, jumps on the bed and enjoys a well earned rest."
    },      //^ END OF THE 'DECLINE' BRANCH, ALL FOLLOWING DIALOGUE WILL BE FOR THE 'IGNORE' BRANCH //
      
    Ignore:{
      text:"Jack decides that he is going to ignore the company's offer regarding the mission in NYC. But, he doesn\'t just see this as an odd offer, he senses something weird with this company, and decides to move his family to a different town with the intention of never being contacted by the company again. But, this only manages to work for a little bit, as the company manages to find him, it is unknown how - but Jack gets a knock on the door by some people he has never seen before, but he knows who they are.",
      options:[['runAway','Run through the backdoor'],['fightOff', 'Fight them off']]
    },
    
    runAway:{
      text:"Jack runs in the other direction, bolting through the back door out of the house, but they had the house surrounded with people - there was nowhere for him to go, he was trapped. They detain Jack, tying him to a chair, and then someone begins to ask him questions, “So, Jack, why did you move? Needed a change of scenery? Knowing your financial situation, that must\'ve hurt.” “What can I say? I didn\'t like the old neighborhood.” Jack responds, “mmhm” the man grunts “Look pal, you have two choices here, either you can make the right choice and accept this mission, or you can make the stupid choice again and refuse.” “Why do you want me to do this so badly?” Jack asks intently “That's not important. You\'d be saving the world, literally - saying no is like saying you don\'t want humanity to live on.” “So what\'s it gonna be?”",
      options:[['caveIn','Finally cave in and say yes'],['chadNo','Refuse to accept the offer']]
    },

    fightOff:{
      text:"Jack decides to fight the people at the front door, as he doesn\'t trust them and thinks they might be dangerous. But there were other people from the company just a few feet away, and although Jack manages to keep them at bay for a while, he is eventually overpowered by them and detained. “Well, you put up a good fight, I\'ll give you that” Says the man. “So, Jack, why did you move? Needed a change of scenery? Knowing your financial situation, that must've hurt.” “What can I say? I didn\'t like the old neighborhood.” Jack responds, “mmhm” the man grunts “Look pal, you have two choices here, either you can make the right choice and accept this mission, or you can make the stupid choice again and refuse.” “Why do you want me to do this so badly?” Jack asks intently “That's not important. You\'d be saving the world, literally - saying no is like saying you don\'t want humanity to live on.” “So what\'s it gonna be?”",
      options:[['caveIn','Finally cave in and say yes'],['chadNo','Refuse to accept the offer']]
    },

    caveIn: {
      text:"Jack replies to the man “Okay fine, I\'ll do it. I accept your mission.” Good choice, we will be in contact shortly about the details.” The men cut him free and leave his home. Jack goes to his wife and reassures her about the mission, “I know you don\'t want me doing this, but I don\'t really have a choice here.” “I know, just be safe, come back to me in one piece.” Jack prepares for the mission, gathering gear he\'s acquired over the years, but realizes he doesn\'t know anything about NYC or what's really happened there. Jack stumbles upon an article about the \'recent events in New York City\' that goes in depth regarding what really happened there and caused the current situation in the first place. ",
      options:[['drive2NYC','Drive to New York City'],['planeRide', 'Take a plane ride to New York City']]
    },

    chadNo:{
      text:"Jack replies to the man “There is not a chance in hell that I\'m going to accept this mission, EVER.” “Ok.” replies the man “well, just know, you\'re the reason that the zombie infection will spread to the rest of the world.” The man cuts Jack free, and all of the company employees leave him, and never contact him again. As time goes on, Jack doesn\'t hear anything about NYC or anything related to it for a while. But one day, news sources blow up with new information about how the infection has adapted and now travels by air, meaning the entire world could be affected by it one day. Then, a few days later he hears about cases of people being infected with the virus all over the country, even in California, and eventually his hometown. An antidote hasn\'t been created yet, because everyone who gets it is too dangerous to run tests on. Because of Jack's decision, the world is overrun by zombies, and the fate of humanity is simply on a timer."
    },

    drive2NYC:{
      text:"Jack decides that he will drive to NYC. “It\'s a long trip, but it\'ll be relaxing,” he says to himself. Jack sets out for the trip, playing his favorite tunes, and taking his time on his way there. The car ride goes smooth for a long while, but eventually out of nowhere, at an intersection a drunk driver in a semi-truck t-bones his car. The crash instantly kills Jack."
    },

    planeRide:{
      text:"Jack decides to take a plane ride to New York and drive the rest of the way into NYC. The plane ride goes smoothly, but at the car rental service, he has some problems getting the desk clerk to get him his car. After an excruciating hour of waiting, he finally gets the car and heads to NYC. Jack finally arrives in NYC and decides that he should get on some high ground to get a good idea of the best path he could take to his destination. After he ascends one of the many ruined buildings in the city, he realizes that he really only has two options, “I either go left or I go right. The left path is shorter, but it's also got a lot more zombie traffic. The right path is longer, but it's got a lot less traffic than the right.”",
      options:[['leftPath', 'Take the leftward path'], ['rightPath','Take the rightward path']]
    },

    leftPath:{
      text:"Jack decides that he is going to go on the left path, although it will be more dangerous, it will be a lot quicker. Jack starts his journey on the leftward path, encountering a lot of zombies in the short amount of time that he has been on it. As he gets farther and farther down the path, he eventually hears whispering coming from an alleyway. Jack decides to investigate the alleyway, and finds that there is a door that leads to what appears to be an old underground night club. He sees some people in there, “Hello, I\'m Jack.” he says “Go away” the strangers say in unison “leave us be, we want nothing to do with humanity any more, we want to die peacefully and on our terms.” “So you want to die here?” he asks them “Yes.” “why? Why wouldn't you want to die around other people?” “Because those \'other people\' abandoned us, including you. They could\'ve done something to help us, but they did nothing.” Jack, sensing that these people aren\'t going to change their minds, accepts the situation for what it is. ",
      options:[['keepOnMoving','Keep on Moving']]
    },

    rightPath:{
      text:"Jack decides that he is going to pick the rightward path, finding very few zombies on the path. As he gets farther and farther down the path, he eventually hears whispering coming from an alleyway. Jack decides to investigate the alleyway, and finds that there is a door that leads to what appears to be an old underground night club. He sees some people in there, “Hello, I\'m Jack.” he says “Go away” the strangers say in unison “leave us be, we want nothing to do with humanity any more, we want to die peacefully and on our terms.” “So you want to die here?” he asks them “Yes.” “why? Why wouldn't you want to die around other people?” “Because those \'other people\' abandoned us, including you. They could\'ve done something to help us, but they did nothing.” Jack, sensing that these people aren\'t going to change their minds, accepts the situation for what it is.",
      options:[['keepOnMoving','Keep on Moving']]
    },
    
    keepOnMoving:{
      text:"Jack, after returning to the path, keeps moving towards his destination. The usual tendencies on the path resume, Jack sees zombies and shoots them in their face, spreading their brains across the pavement, and getting closer and closer to the item he is on a mission to retrieve. As the time passes, he begins to get a deeper understanding of his surroundings, and a better idea of what happened here. “Everything has gone to crap” he tells himself. At one point it was the world\'s most prominent city, booming with businesses, entertainment, and the people. After four long arduous hours, Jack finally manages to reach the building, but as he closes in on it he begins to realize that he has no idea what is really in there, how many zombies are in there, the layout, where this item is, etc. ",
      options:[['buildingEnter','Enter the building']]
    },

    buildingEnter:{
      text:"Jack, after returning to the path, keeps moving towards his destination. The usual tendencies on the path resume, Jack sees zombies and shoots them in their face, spreading their brains across the pavement, and getting closer and closer to the item he is on a mission to retrieve. As the time passes, he begins to get a deeper understanding of his surroundings, and a better idea of what happened here. “Everything has gone to crap” he tells himself. At one point it was the world\'s most prominent city, booming with businesses, entertainment, and the people. After four long arduous hours, Jack finally manages to reach the building, but as he closes in on it he begins to realize that he has no idea what is really in there, how many zombies are in there, the layout, where this item is, etc. ",
      options:[['samePath','Leave using the same path he took'],['diffPath','Leave using the other path']]
    },

    samePath:{
      text:"Jack leaves the building and heads towards the exit of the city using the same path that he took in the first place to get there. As he is traveling down the road he sees that there are a lot of zombies that have piled upon the road. “They must have heard my gunshots, or caught wind of my scent.” He says to himself, trying to reason together how they could\'ve all been attracted to the same area. He looks behind him, trying to see if he could possibly escape and go the other way, but he is pleasantly surprised by more zombies behind him. He uses the little amount of ammo he has left after his raid of the building. He takes down a few of the brain-munchers, but they overrun him and he dies. "
    },

    diffPath:{
      text:"Jack decides that he is going to leave New York City using the other path that he didn\'t initially take. He sees that the streets are completely empty, there is not a single zombie in his sight. He walks down the street slowly, trying to attract no attention to himself so that he can get home safe. But, through an alleyway between buildings a zombie sees Jack walking down the street and runs after some, other zombies decide that they\'ll follow and chase Jack.",
      options:[['flare','Distract them with flares'],['outrun','Try to outrun the zombies']]
    },

    flare:{
      text:"Jack decides to use a flare to distract the zombies so that he can get away. He realizes that there is no way he will be able to actually outrun the zombies, especially not keep the pace for long enough to live. He lights a flare and throws it into the middle of the street. It works perfectly, as the zombies all surround it, “like a moth to a flame” he says as they swarm the flare. This gives Jack ample time to escape and reach safety.",
      options:[['mov','Keep moving']]
    },

    outrun:{
      text:"Jack tries to outrun the zombies chasing him. He manages to stay ahead of them for a while, but he can\'t maintain the speed for long enough, especially with all the gear he's carrying. The zombies swarm him, and enclose him, devouring his flesh, slowly killing him, Jack utters a phrase just before he perishes, “I\'m sorry stacy”."
    },

    mov:{
      text:"Jack reaches safety, crossing through the city lines and reaching human civilization once again. “Alright, I gotta get this thing to Jebediah, and then get home to Stacy.” he says aloud speaking to himself. Jack gets in his car and gets on the road, headed to Jebediah. When he reaches Jebediah, he hands it to him, “Here it is boss” he says, “Thank you, Jack” Jebediah says, as he remains in his chair unchanged. “What? Are you expecting a reward? Don\'t forget, you turned down my offer, you should be grateful I gave you a chance to right that wrong, boy.” Jack says nothing in response, staring Jebediah in the eyes, and then promptly leaves. “Time to go home” he tells himself. After countless hours on the road, he finally gets back home, and is overjoyed to see Stacy again “Welcome back!” she says happily. “So, how was it?” “It was a hellhole, everything that used to be there is just rubble now, and the zombies. Seeing those people\'s bodies become a soulless body walking around is the worst feeling I've ever had.” “Jesus” She says shocked in response. They continue to converse about his experience, and then Jack walks upstairs, jumps on the bed and enjoys a well earned rest. ",
    }
      // ^ The 'Ignore' branch has been completed//
    };
     
    var userOptions = ["opener"];
     

    var startButton = document.getElementById("startButton");
    var restart = document.getElementById("restart");
    var textArea = document.getElementById("textArea");
    var btnArea = document.getElementById("btnArea");
    var repolink = document.getElementById("githubLink");
    var profile1 = document.getElementById("profile1");
    var profile2 = document.getElementById("profile2");
     
    function makeBTN(buttonText, option) {
      var button = document.createElement("button");
      button.innerHTML = buttonText;
      btnArea.appendChild(button);
     
      button.addEventListener("click", function(){
        userOptions.push(option);
        writeStory();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
     
    function addStory(text){
      textArea.innerHTML = text;
    }
     
    function writeStory(text){
      let pageNow = userOptions[userOptions.length - 1];
      textArea.innerHTML = "";
      btnArea.innerHTML = "";
      for(let idea of userOptions){
        addStory(story[idea].text)
      }
      for (let idea of story[pageNow].options){
        makeBTN(idea[1],idea[0]);
      }
     
    }
     
    restart.addEventListener("click", function(){
      location.reload()
    });
     
    restart.style.display = 'none';
     
    startButton.addEventListener("click", function(){
      writeStory(story.opener.text);
      restart.style.display = '';
    });
     
     
    repolink.addEventListener("click", function(){
        alert("You are leaving this site!")
    });
     
    profile1.addEventListener("click", function(){
      alert("You are leaving this site!")
    });
     
    profile2.addEventListener("click", function(){
      alert("You are leaving this site!")
    });
     
    if (localStorage) {
      var visits = localStorage.getItem('visits');
      if (visits == null) visits = 1;
    
      if (visits == 1) console.log("First visit")
      else console.log('Returning User')
    
      localStorage.setItem('visits', visits + 1);
    
    }

    }