window.onload = function(){
 
    var story = {
     
    opener: {
        text: 'Jack Grugg is an ex-marine who served the United States for 8 years. After he returns back home from his nearly decade-long service, he finds that he and his wife Stacy Grugg are in massive amounts of debt, and also have no money. Jack needs to find a job soon if he hopes to maintain the roof over his head. One day, Jack gets an envelope in the mail that has details about a job in New York City(the dead center of the zombie epidemic)that will reward him with a more than generous sum of money that would propel his family out of debt. As he inspects the envelope a little closer, he notices that there is contact information and a website name at the top of the envelope. He and his wife have a discussion about the letter, and she tells him that it is too dangerous.',
        options:[["Accept", "Accept the mission"], ["initiallyDecline", "Decline the mission"], ["Ignore", "Ignore the mission request"]]
    },
     
    Accept: {
        text: "Jack realizes that he doesn\'t know anything about the situation in New York City, all he knows is that it is where the zombie epidemic began. Despite this, he knows that the money from this mission will set him up for the rest of his life, it's the kind of money that will make it so he won’t have to work another day in his life, let alone even worry about money. He makes the decision to send an email to the given address.",
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
      text: "He knows that if he has any chances at successfully completing this task within NYC, he's gonna need to learn a lot about what it looks like over there. He decides to give Brian, an old friend from his time back in the Marines, a call. The two speak on the phone for hours, catching up and bringing up old memories. “Remember when we had to ambush that convoy and take their supplies?” asks Brian “Yea, Remember how we had to drag Andrew out of a ditch he got stuck in?” says Jack. They continue to reminisce about how without them, their battalion wouldn’t have lasted a week. Eventually Jack asks Brian “So, do you know anything about this zombie thing in NYC?” Brian replies “Oh yea man, there's enough zombies in that place to cover the street 3 times over.”",
      options: [['fullyCommit', 'Fully commit to the mission'], ['seeImp','See whats so important in NYC']]
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
    }
     
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
      location.reload();
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
     
    }