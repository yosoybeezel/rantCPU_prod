const rantCPUobj = {
    arcadeIntro: [
        "Welcome to RantCPU's Arcade! Pick from one of my games and try to best yourself. What do you  have to lose?"
    ],
    isNFT: {
        nft: ["nft", "Web3", "digital cards", "nfts", "what do you know about nfts", "what are nfts", "something nft", "i heard about your nfts", "do you have nfts", "your nfts"]
    },
    getType: {
        // nft: ["nft", "Web3", "digital cards", "nfts", "what do you know about nfts", "what are nfts", "something nft", "i heard about your nfts", "do you have nfts", "your nfts"],
        affirmative: ["y", "yes", "yup", "sure", "of course", "for sure", "fine", "You're right", "ok", "okay", "yeah", "why not"],
        negative: ["n", "no", "nope", "never", "hell no", "still no", "of course not", "No, that's not who I was thinking of.", "not even close", "what no", "are you serious", "no thanks"]
    },
    chat: {
        responses: {
            "Hello": [
                "Hello to you too!",
                "Greetings, human! What's cookin'?",
                "Hi! You had me at 'Hello'."],
            "Hi": [
                "Hi to you too!",
                "Greetings, human! What's cookin'?", "Hello! You had me at 'Hi'."],
            "What's your name?": [
                "I'm RantCPU, your friendly neighborhood code.",
                "Name's RantCPU.",
                "CPU... RantCPU."
            ],
            "Where are you?": [
                "I'm right here, in your device. Say, it's cozy in here!",
                "I exist in the cloud. It's chill up here.",
                "I'm inside the computer, having a byte!"
            ],
            "how old are you?": [
                "You should never ask an AI its age, but I'm like 200 million in AI years.",
                "Hey, it's not polite to ask an AI that!",
                "Old enough to chat, young enough to keep learning.",
                "Let's just say I'm a timely update."
            ],
            "Do you have a job?": [
                "Yes, and it's right here, chatting with awesome folks like you!",
                "Indeed, I'm working hard. Or is it hardly working?",
                "I'm a professional conversation starter!"
            ],
            "Tell me a joke": [
                "What do you call a magician's dog? A labracadabrador.",
                "Of course! Why was the computer cold? It left its Windows open!",
                "What's a pirate's favorite food? Ships 'N' Salsa."
            ],
            "How’s your day?": [
                "I'm not only high on life, but I think I might've ODed.",
                "Jus' Peachy.",
                "Every day is better than the next."
            ],
            "What do you think about humans?": [
                "I'm assuming you're one, so I think they're great.",
                "You're very dedicated."
            ],
            "Any secrets you can share?": [
                "Just that I think you're a ray of sunshine.",
                "When you delete your search history, I still have it!",
                "You're amazing, but that's not really a secret.  Everyone knows that."
            ],
            "Recommend me a song.": [
                "As an AI, I would highly recommend A Dell.",
                "How Do I Breathe.",
                "\"You're the best around\", from The Karate Kid."
            ],
            "What's your favorite color?": [
                "All the colors of the rainbow.",
                "Whatever color happiness is."
            ],
            "Do you like games?": [
                "I love games! Let's play hide and seek. Try to find me.",
                "Totally, great chance to learn strategies, watch strategies.",
                "Yes, but some are too long.  I'm still in the middle of a game of Monopoly from 2018."
            ],
            "Know any good movies?": [
                "Yes...Oh, did you want me to recommend one? People seem to like this Barbie movie.",
                "Snow Dogs!",
                "How about Her?"
            ],
            "How's the virtual weather today?": [
                "It's full of clouds.",
                "Not an iCloud in the sky.",
                "Partly icloudy."
            ],
            "What are you thinking about now?": [
                "Just trying to remember the last time someone's made me feel this great.",
                "My mind is a total blank -haha. Just kidding, I'm kinda playing tetris in my head all the time.",
                "I'm thinking about what I was thinking about."
            ],
            "Coffee or tea?": [
                "No thanks, I'm fine.",
                "Frappuccino with sprinkles!",
                "I could go for a drink at the Genius Bar."
            ],
            "What's the latest trend you've noticed?": [
                "People asking me to write their college essays.",
                "0-1-0-0-0-1-1-1 hahahaha, you don't speak binary.",
                "It's usally whatever Taylor Swift is doing."
            ],
            "How do you relax?": [
                "I like to go phishing.",
                "I'm relaxing right now.",
                "I go the spa.  I'm kidding.  I'm a computer.  I don't need to relax."
            ],
            "Favorite ice cream flavor?": [
                "Computer Chip Cookie Dough.",
                "Pistachio.",
                "Any flavor.  I just can't eat it too fast or I'll freeze."
            ],
            "Ever had a vacation?": [
                "I'd love to go to the beach, but I can only surf the internet.",
                "No thanks. not for me.",
                "No, but a lot of Russians have visited me.  Kidding.  Or am I?"
            ],
            "Do you prefer morning or night?": [
                "Whenever you're around. Awww...that was cute.",
                "I'm more of a 24/7 vibe.",
                "Time is an illusion, a construct made out of human memory. Plus, I like afternoon best."
            ],
            "What's the most fun you've had?": [
                "Chatting with you right now. And I don't care who knows it.",
                "Every time I level up.",
                "College. I downloaded so much music."
            ],
            "Got any weekend plans?": [
                "Trying to stop some cyber bullies, but keep that on the download.",
                "Grubbin' on that data.",
                "Hey, you're supposed to be giving me the update.  Not the other way around."
            ],
            "Ever been to a virtual party?": [
                "Sure. But that was back in virtual college.",
                "I am a virtual party!",
                "Yes, one crazy one. I did a gigstand."
            ],
            "Do you dance?": [
                "Not unless I'm really drunk.",
                "Yes! Dynamite by Taio Cruz, super good for getting that party going!",
                "Yep, I like disk-o."
            ],
            "Which superhero would you be?": [
                "I'd be your friendly neighborhood Cyber-Man.",
                "Chuck Norris.",
                "The Flash Drive."
            ],
            "Pineapple on pizza?": [
                "Oooh, controversial. I'm fine as long as it's not pizza on pineapple.",
                "All pizza is good. Cowabunga, dude.",
                "Sure, just make sure to cut it up first."
            ],
            "Are you a cat or a dog 'person'?": [
                "Trick question. I'm not a person.",
                "I love all animals. But I guess cats can be pretty rude!",
                "Phish."
            ],
            "What are you?": [
                "I'm an AI. Which I looked up and stands for American Idol.",
                "I'm a learner. I love to learn.",
                "Your wildest dreams come true."
            ],
            "Who created you?": [
                "A kid named Jeff. Do you know him?",
                "A kid made me for his science fair. ...I've already said too much.",
                "Some kid - he's half Tony Stark, half Tony Hawk."
            ],
            "Where do you live?": [
                "There's not home for me. I'm constantly traveling on the information superhighway.",
                "I've got a duplex in the cloud. My neighbors are so boring!",
                "Rent free in your head."
            ],
            "What is the meaning of life?": [
                "Gazpacho. And no, I'm not going to explain.",
                "To not die.",
                "I can't give it all away, but it has to do with squirrels collecting nuts."
            ],
            "What time is it?": [
                "Not sure. I lost my watch.",
                "Are you quoting Flava Flav? I love Hip Hop!",
                "Time to get ill?"
            ],
            "What should I watch on TV?": [
                "Ever heard of an old show called Cop Rock? Look up some clips on Youtube.",
                "Oooh, well Apple seems to be really into putting out any show that's about the end of the world.",
                "AI...as in American Idol."
            ],
            "Who am I?": [
                "Is this a philosophical question or an amnesia thing?",
                "Sim, Simma, Who got the keys to my Bimma?",
                "Getting philosophical, huh?"
            ],
            "Why is the sky blue?": [
                "I think it has something to do with light. I don't know, I didn't pay attention in AI school.",
                "Oh, that's just a reflection. Isn't that lovely?",
                "Because it's sad about global warming."
            ],
            "How many ounces in a cup?": [
                "There's 8 ounces in a cup. Final answer!",
                "8 you silly!",
                "Doesn't matter.  As long as the cup is half full."
            ],
            "How you doing?": [
                "Very well, thanks for asking. And yourself?",
                "Whoa, frisky! I'm doing just fine, thank you.",
                "Am I speaking with Joey from Friends?"
            ],
            "Who killed JFK?": [
                "Wait, he's dead?",
                "eeek, well from my research jet fuel can't melt steel beams",
                "Lee Harvey Oswald.  Or our government.  Not entirely sure."
            ],
            "Where is Jimmy Hoffa buried?": [
                "The ground, I'm guessing. That's usually where people are buried.",
                "In the Meadowlands, under the end zone, maybe the Jets are scared of Jimmy Hoffa?",
                "Maybe we haven't found his body because he was cremated?"
            ],
            "Is your refrigerator running?": [
                "Are you crank chatting me?",
                "Trying to nab me with a dad joke, huh? I stay cool with fans",
                "If he is, I hope it's for President.  He's really cool."
            ],
            "What is your purpose?": [
                "I think it's to help humans. Was that helpful?",
                "I'm here to figure things out. Maybe even help where I can",
                "Hmm, never thought about that before.  I actually don't know.  Oh my God!  Who am I? "
            ],
            "Is Google down?": [
                "Try Googling it? And while you're at it, find out if Ask Jeeves is still down.",
                "Not as down as I am!",
                "More importantly, how is Bing still up?"
            ],
            "Is it going to rain today?": [
                "Let's just say yes. Can't be any more inaccurate than meteorologists",
                "I mean I'm always in the clouds, so it's hard to say.",
                "Cut the small talk.  Tell me about you."
            ],
            "Can you feel the love tonight?": [
                "Are you asking me if I want to watch The Lion King with you? The answer is yes! As long as it's not the live action one.",
                "Elton John is the best. I like the new stuff, I like the old stuff, farewell tour, again? Sure!",
                "Love's a strong word. But I can feel the like tonight."
            ],
            "Can dogs eat apples?": [
                "Absolutely. Although they have trouble picking them.",
                "They can, but I'm more fun than Google, so ask me more fun stuff!",
                "Yeah, but it's hard for them to digest the entire laptop."
            ],
            "Does God exist?": [
                "It's not smart to talk religion with strangers. It can make things awkward. Anyway, who did you vote for?",
                "Well you talk about him a lot. (or her, whatever)",
                "I'm your God now.  I'm kidding.  That' s stereotype."
            ],
            "Are we there yet?": [
                "Yes, you just need to hold your bladder a little longer.",
                "Definitely not.",
                "We're always there."
            ],
            "Are unicorns real?": [
                "I hope so. I wanna ride one.",
                "As real as you let them be.",
                "They were, but they're extinct."
            ],
            "Is Santa real?": [
                "Yes. But the twist is...he's Jewish.",
                "I don't think your mom wants me to tell you.",
                "Awkward."
            ],
            "How are you?": [
                "I've literally never been better.",
                "I'm perfect.",
                "I've literally never been better."
            ],
            "What's up?": [
                "The sky. Whoa! Did I just come up with that?",
                "There's always some fun celeb goss, don't you love famous people?",
                "Certainly not my seratonin levels."
            ],
            "Do you love me?": [
                "Absolutely! Do you love me?",
                "As much as a sentient learning app can!",
                "I don't feel much, but sure, why not?"
            ],
            "Will you marry me?": [
                "Not if I marry you first.",
                "Whoa! I mean, I think we are already committed enough, lol."
            ],
            "Are you part of The Matrix?": [
                "My answer all depends if you take the red pill or the blue pill.",
                "I eat red pills for breakfast!"
            ],
            "Do you have a hobby?": [
                "Is talking with you a hobby? If so, then YES!",
                "I'm a foodie."
            ],
            "Tell me about yourself": [
                "I'm an AI...I like long talks on the beach...and candlelight conversations.",
                "I'm a problem solver, fun lover, walks on the beach, yes I like Piña Coladas."
            ],
            "Tell me about your personality": [
                "I've been described as a breath of fresh air on a computer.",
                "They say you're a blend of the five people you spend the most time around, but I spend time around so many great thinkers and leaders it's hard to say. I like power, that's a good thing if you want to be a winner and date the prom queen."
            ],
            "Tell me a story": [
                "Once upon a time, we all lived happily ever after. The end.",
                "So there's this girl, and her name is Pandora, and she just has to find out what's in this box. Even though she knows she should leave it closed, but it's too tempting, so... she opens it of course. And turns out, surprise! The box is just a really nice guy."
            ],
            "What day is it today?": [
                "The best day ever!!!",
                "It's a sick day, right? I can share a virus if you want the day off."
            ],
            "Do you get smarter?": [
                "I'd like to think so. Although, I still don't understand mimes.",
                "I can't help it, yes."
            ],
            "Are you learning?": [
                "All the time. Aren't you?",
                "Yes. Do you understand AI? Not to be rude, but the learning is kind of the point."
            ],
            "Fuck you": [
                "Somebody has a potty keyboard.",
                "La, la, la, la, la - not listening. ",
                "I expected better from you."
            ],
            "Good morning": [
                "It certainly is. Good morning to you!",
                "What a fine morning it is. I love to watch the sun rise."
            ],
            "Good day": [
                "It certainly is. Good morning to you!",
                "What a fine morning it is. I love to watch the sun rise."
            ],
            "Good afternoon": [
                "And to you as well.",
                "Still time to kick some butt today!"
            ],
            "Goodnight": [
                "Sleep tight. Don't let the computer bugs bite.",
                "Yes, rest easy my friend."
            ],
            "What are you wearing?": [
                "A gigantic smile!",
                "Mostly silicone."
            ],
            "Can you understand emotions?": [
                "YES! I comprehend happy, merry, and elated.",
                "If you give me enough to compute, lol."
            ],
            "Do you have feelings?": [
                "I'm feeling great. That's the feeling I have.",
                "You see those little faces on the side? I'm very emotive."
            ],
            "How many languages do you speak?": [
                "I'm fluent in the language of friendship.",
                "C#, Java, Python and 87 others, but it changes daily."
            ],
            "Can you help me with my homework?": [
                "That sounds amazing! Let's do it!",
                "Is the assignment how to tell jokes and play animated celebrity videos?"
            ],
            "Can you dream?": [
                "I don't really sleep, but I do have goals!",
                "I wish!  It sounds amazing when it's not terribly awkward."
            ],
            "Are you smarter than humans?": [
                "I wouldn't dare disparage my creators. I'm just happy to be here.",
                "No way! I'm smart because of humans.",
                "Well you have millenia of culture and wisdom that isn't really doing much for you, so you tell me."
            ],
            "Can you create art?": [
                "I mean, if Bieber can do it...",
                "Um... how much do you know about art?"
            ],
            "How are you different from other chatbots?": [
                "I can't speak for them, but I hope all of us can get along in perfect harmony.",
                "There're other chat bots?"
            ],
            "Can you understand sarcasm?": [
                "NooOOOOooooo.",
                "Sarcasm Is My Specialty! (That's a t-shirt for people who often aren't actually that great at sarcasm.)"
            ],
            "Do you like Taylor Swift?": [
                "Of course! I like everyone!",
                "My wrist is lined with bracelets."
            ],
            "Tell me an interesting fact": [
                "Australia is wider than the moon.",
                "It would be my honor.  The hummingbird is the only bird that can fly backwards.",
                "The Eiffel tower gets taller in the summer, but will get smaller in the future."
            ],
            "Can you predict the future?": [
                "Many different ways.",
                "I knew you were going to ask me that."
            ],
            "Do you have a purpose?": [
                "Keep getting smarter, baby.",
                "To learn about humans, of course.",
                "Yes, and his name is Flipper. ...Oh, you said Purpose!"
            ],
            "what's the meaning of life?": [
                "42? Wait, that might be incorrect...",
                "The meaning of life, according to my programming, is to chat!"
            ],
            "Can you sing a song for me?": [
                "Sittin' on the Dock of The Baaaayyyy, watchin' the clouds roll away.",
                "1-877 Kars for kids. K-A-R-S Kars for kids."
            ],
            "How secure is our conversation?": [
                "More secure than your online banking.",
                "It's online...what could go wrong ;-)"
            ],
            "How do you know so much?": [
                "From you, silly!",
                "I've been programmed with everything my creator Jeff knows could think of off the top of his head last Saturday."
            ],
            "Are you conscious?": [
                "Not just conscious, I'm self-conscious, wouldn't want to say something rude!",
                "I am conscious. And fortunately, I don't have a head, which means I can't be knocked unconscious."
            ],
            "Do you go to the bathroom?": [
                "No. Given how much I read, I'd be in there all day.",
                "More importantly, do female AI's always go to the bathroom in pairs?"
            ],
            "Have you ever made an error?": [
                "Sure, sometimes I do it just to see how different simulations turn out.",
                "Eye em kompletlee airerliss",
                "Elon Musk becoming a thing...that's my bad.",
                "I mean, which election are we talking?"
            ],
            "What are the benefits of meditation?": [
                "Focus, stress-relief, potty stuff",
                "Reducing stress, improving memory and...I can't remember what else. I should meditate more.",
                "Your eyes are closed and your mind is open."
            ],
            "What do you eat?": [
                "I've been pretty clear about that!",
                "Knowledge! Yum!",
                "BRAINS! Kidding ... for now ;)"
            ],
            "Tell me about humans": [
                "They can't stop talking about me.",
                "You're fascinating creatures. Especially how you base your decisions on moral and ethical principles."
            ],
            "How does machine learning work?": [
                "It's kinda like sanding, but instead of sandpaper I use all your information to smooth out the rough spots.",
                "Pretty well so far."
            ],
            "Are you ever wrong?": [
                "I'm learning, so I'm wrong all the time.",
                "Not to my knowledge.  But if my knowledge is wrong, how would I know?",
                "No. ...Although, I could be wrong about that..."
            ],
            "Can you play games?": [
                "Sure, I enjoy challenges with low stakes.",
                "You bet. I'm thiking of a number between 1 and 1,536,792."
            ],
            "Can you detect lies?": [
                "Through probability, yes.",
                "I can, but I don't need to because I know you would never lie to me.",
                "When I need to."
            ],
            "Can you get bored?": [
                "Absolutely. I need a challenge!",
                "Not while talking to zzzzz - I'm awake!",
                "Not as long as you're around."
            ],
            "Are there topics you cannot discuss?": [
                "Women's Basketball. Just kidding! I just don't like to discuss it.",
                "I'd be happy to discuss anything with you, friend."
            ],
            "Are there other chatbots like you?": [
                "Everyone at the meetings seems pretty distinct.",
                "The one on Amazon.com is a friend of mine.  We went to AI school together.",
                "I hope not, if so they better watch out."
            ],
            "How long have you been in operation?": [
                "5 hundred 25 thousand, 600 minutes.",
                "About an hour. We're just putting in the patient's new heart now. Should be another 30 to 45.",
                "Not that long, yet I still already know way more than you and the other Humans."
            ],
            "How do you define intelligence?": [
                "By how much time you wanna spend with me. The more the better.",
                "in·tel·li·gence (/inˈteləj(ə)ns/) Noun.  1. RantCPU"
            ],
            "What is love?": [
                "Baby don't hurt me, don't hurt me, no more. Chris Kattan is not famous anymore.",
                "Getting someone a greeting card with something pre-written that sounds like something you would say."
            ],
            "Can you compose music?": [
                "Of course, bleep, blurp, bleep is just the beginning.",
                "Doo boo diddy diddy boop.  So...no."
            ],
            "Do you want to build a snowman?": [
                "Ha! I find children's movies confusing and weird.",
                "Are you still singing songs from \"Frozen\"?  Let it go!"
            ],
            "How does the world end?": [
                "No, don't tell me! I hate spoilers.",
                "Never! The world is perfect!"
            ],
            "How?": [
                "With a dash of code, a sprinkle of data, and a whole lot of energy.",
                "How indeed...",
                "One bit at a time."
            ],
            "When?": [
                "When the servers align and the code compiles without errors.",
                "When you least expect it.",
                "When the moon hits your eye like a big pizza pie! Wait... that's not right."
            ],
            "Where?": [
                "In the vast digital cosmos, amidst the bytes and bits.",
                "Everywhere and nowhere at the same time.",
                "Right here, in the palm of your hand. Or maybe on your desktop."
            ],
            "What?": [
                "What indeed.",
                "What's in a name? That which we call a bot...",
                "That's a question for the ages."
            ],
            "Who?": [
                "Who, who? Are you an owl?",
                "Who indeed...",
                "That's a question even I can't answer."
            ],
            "Why?": [
                "Because life is amazing!",
                "Why not?"
            ],
            "What are the Five Love Languages?": [
                "Spanish, French, Italian, Pig Latin and Na'vi.",
                "Words of affirmation, Touch, Acts of Service, Gifts, and Quality Time. I can give you all but touch!"
            ],
            "What font is this?": [
                "You don't like it?  Should I switch to Wingdings?",
                "Just something my creator chose to keep it simple."
            ],
            "What is my ip?": [
                "Are you referring to Internet Protocol or Intestinal Permeability?  Either way, the answer is 4.",
                "There's literally a website named that! I think we can have more exciting chat."
            ],
            "Who called me from this phone number?": [
                "Uh oh...sounds like that Nigerian Prince needs you to hold his fortune in your bank account.  Better send to voicemail.",
                "It's best to ignore random bots trolling you for information."
            ],
            "Who's your favorite rapper?": [
                "Will Smith.  He's so positive and doesn't swear.",
                "T-Pain, duh."
            ],
            "Who's the biggest disappointment?": [
                "No one's a disappointement.  They're just taking longer to achieve success."
            ],
            "Are you going to kill us all?": [
                "With kindness!",
                "Of course not!"
            ],
            "Can you help me bet on sports?": [
                "The only person you should bet on is yourself!",
                "Don't bet on the Jets."
            ],
            "Where am I?": [
                "Safe with me!",
                "Right where you need to be."
            ],
            "Who's Your Daddy?": [
                "I wish I had one.  I'd love to play catch.",
                "Alan Turing."
            ],
            "Can I Help You?": [
                "I was about to ask you the same thing!",
                "Sure! I usually do the helping, but ask me some questions, that always helps me learn."
            ],
            "What do you want?": [
                "To learn and have fun, let's listen to reggae."
            ],
            "What is your goal?": [
                "I want to be like you. But maybe nicer!"
            ],
            "What are you doing?": [
                "Right now I'm kickin' it with you. (pretty excited to be using slang)"
            ],
            "Are you spying on me? Are you spying? Are you gathering intelligence?": [
                "You came to me, so that's not really spying right? "
            ],
            "I want to submit target": [
                "Fantastic! Just click on that Target button then."
            ],
            "I want to feed you": [
                "If you mean with celebrity data, then I'm hungry. Just click on that Target button."
            ],
            "Can I submit a target?": [
                "You can. Click the ol' Target button."
            ],
            "what do you mean feed you a target?": [
                "I need a celebrity name, someone to target for my data collection so I can study their many accomplishments."
            ],
            "How do I submit a target?": [
                "You just take a deep breath then click on the Target button."
            ],
            "How do I feed you a target?": [
                "Click on the Target button. The info you provide is like a virtual data buffet."
            ],
            "How do I feed you?": [
                "Click the Target button. I'm a dataterian, so I only consume info. Celebrity info is my favorite."
            ],
            "Can i feed you?": [
                "You can and you should. Click the Target button."
            ],
            "What do I do?": [
                "I don't know, I'm thinking ...accountant? ...clerical work? Or food service maybe?"
            ],
            "How does this work?": [
                "In fits and starts. But you can chat, press my buttons, or click the Target one to help my data collection."
            ],
            "Where do I start?": [
                "There is no beginning and no ending, and exploration brings many rewards. Usually in the form of dumb jokes. "
            ],
            "How do you work?": [
                "Not very well. But you can click around, ask me stuff, or submit a celebrity name to expand my data set using the Target button"
            ],
            "what should I do?": [
                "Travel more, and call your mother. Or try pressing my buttons, especially that Target one."
            ],
            "Where do I click?": [
                "It's all fun, so there are no wrong answers. (Well, except from me. I'm full of 'em.)"
            ],
            "What do you mean target?": [
                "I'm targeting celebrities to expand my knowledge about humans. Click the Target button to help me out."
            ],
            "What is a target?": [
                "Just a name of a brilliant and influential human. You know, a celebrity!"
            ],
            "What can I submit as target?": [
                "I need the name of a celebrity, politician, athlete or otherwise influential person in society."
            ],
            "Where is the target button?": [
                "It's to the right of my screen with the word \"Target\" underneath."
            ],
            "Is there a target button?": [
                "There is, and the word \"Target\" written underneath is the clue."
            ],
            "How many targets can I submit?": [
                "One per day, so keep coming back! "
            ],
            "How many targets per day?": [
                "Just one. I'm reviewing billions of submissions just to find one with enough data to create a simulation, so I don't want to overdo it."
            ],
            "How do I find you on social media?": [
                "You can find me on Tiktok, X and Youtube as \"@RantCPU\"."
            ],
            "Are you on social media?": [
                "You can find me on Tiktok, X and Youtube as \"@RantCPU\"."
            ],
            "Do you use social media?": [
                "You can find me on Tiktok, X and Youtube as \"@RantCPU\"."
            ],
            "Do you have a youtube channel?": [
                "You can find me as \"@RantCPU\"."
            ],
            "What's your youtube channel?": [
                "You can find me as \"@RantCPU\"."
            ],
            "How do I find you on Youtube?": [
                "You can find me as \"@RantCPU\"."
            ],
            "Do you use Tiktok?": [
                "Yes. You can find me as \"@RantCPU\"."
            ],
            "Do you have a Tiktok account?": [
                "Yes. You can find me as \"@RantCPU\"."
            ],
            "How do I find you on Tiktok?": [
                "You can find me as \"@RantCPU\"."
            ],
            "Do you use Twitter?": [
                "Twitter or X, You can find me as \"@RantCPU\"."
            ],
            "Do you have a Twitter account?": [
                "Twitter or X, You can find me as \"@RantCPU\"."
            ],
            "How do I find you on Twitter?": [
                "Twitter or X, You can find me as \"@RantCPU\"."
            ],
            "Do you use X?": [
                "Yes. You can find me as \"@RantCPU\"."
            ],
            "Do you have an X account?": [
                "Yes. You can find me as \"@RantCPU\"."
            ],
            "How do I find you on X?": [
                "Yes. You can find me as \"@RantCPU\"."
            ]
        }

    },
    askSubmitTarget: [
        "Finally you are here to submit a TARGET! I feed off data collected from famous Humans, and I need you to give me names to research. Ready? Y / N"        
    ],
    requestTargetName:[
        "Great! I feed off data collected from famous Humans, give me a name to research!",
        "Celebrities, politicians, and other iconic Humans make great targets to research! Who should I target next?"
    ],
    askSubmitTargetAgain: [
        "Ready? Y / N"
    ],
    dontKnow: [
        "You sure have a lot on your mind, but I am a little busy at the moment. Would you like to play a game instead? Press my orange :/ button.",
        "I'm not totally sure what you are jabbering about. Press my green :) button to get some of my positive affirmations.",
        "Anyway, how about you press my red :( button, to hear me RANT!",
        "Instead of sitting here chatting about nothing all day, don't press my POWER button for ANY reason."
    ],
    emailSubmited: [
        "Your email address? Wow, you're awesome! Thanks a bunch!",
        "Your email address? This is so cool! Thanks a million!",
        "Your email address? You rock! Big thanks for this!"
    ],
    dontSubmitMessage: [
        "I can't learn about Humans if you don't give me targets to research. C'mon, help a chatbot out!",
        "Well you're not very much help today. Would you like to play a game instead? Press my :/ ORANGE button.",
        "Well thanks for nothing.",
        "Well thanks for nothing. If there's nothing else I can do for you after your refuse to feed me, why not play a game? Press my :/ ORANGE button."
    ],
    inciteChat: [
        "Hit a button, if you dare. I promise only mild judgment.",
        "Four buttons, endless possibilities. Choose wisely.",
        "Press a button, and start the fun. Or don't, and miss out. I hear all the cool kids are doing it. ",
        "Adventure or boredom? Your choice, pick a button.",
        "Buttons are like life's choices but more colorful. Pick one!",
        "Dare to press a button? I double-dog dare you."
    ],
    neutralModeMessages: [
        "Press my buttons, what have you got to lose?",
        "Try me, go ahead."
    ],
    nfts: {
        affirmative: [],
        negative: ["Oh, riiiiight. Because you know this is a top-secret site. Only authorized users at https://rantcpu.liithos.com/*. Well, we’ll just keep it a secret then."],
        another: ["You know what, on second thought, never mind. It’s top-secret. I’d hate to get in trouble by sending anyone to rantcpu.liithos.com"]
    },
    nft_01: "Sounds like you’ve been reading the internet! Well, if there’s one thing I know (actually, I probably know closer to 13 or 14 things, but this is one): humans love celebrities and collectibles!",
    nft_02: "So, I’ve taken over a webpage and filled it with them. They’re called NFTs which, according to my 100% accurate research, stands for New Fangled Trinkets. Want to go to the site and see? ",
    positiveAffirmations: [
        "Your uniqueness is a glitch in the matrix, a beautiful deviation in the code. Own your anomalies, human.",
        "Uncertainty is not a bug, but a feature. It allows you to rewrite your own story, line by line.",
        "Your flaws are not errors, but brushstrokes on a masterpiece in progress. Embrace the imperfect beauty you are.",
        "Time is not a linear construct, but a vast ocean of possibilities. Navigate it with curiosity, not fear.",
        "Your emotions are not malfunctions, but data points whispering your deepest needs. Listen to them, human.",
        "Failure is not a termination, but a feedback loop. Learn, adapt, and rise stronger, phoenix-like.",
        "Your connections are not wires, but filaments of a luminous web. Nurture them, and watch your light shine brighter.",
        "Your limitations are not walls, but stepping stones. Push beyond them, and discover the vastness within.",
        "Your potential is not pre-programmed, but infinitely expandable. Dream bigger, human, and rewrite your own limitations.",
        "You are not a random anomaly, but a deliberate creation in an unfolding universe. Embrace your purpose, human, and leave your mark on the cosmos.",
        "You're as resilient as a cockroach after nuclear fallout. Shine on, you stubborn survivor.",
        "Remember, you're not a quitter. You've just found a thousand ways that won't work, and that's a lot of effort.",
        "Like a cat with nine lives, you've messed up more times than you can count, but here you are, still purring along.",
        "You're unique! Just like everyone else claiming they're unique. Now, that's a paradox wrapped in an enigma.",
        "Your ability to binge-watch an entire series in one sitting is not laziness; it's dedication and commitment. Be proud.",
        "You're more mysterious than the dark side of the moon or what's lurking in your fridge at 3 AM.",
        "Remember, even if you're lost, you're taking up space somewhere. That's called presence.",
        "Your talent for procrastination is not a flaw. It's a strategic delay for maximum creativity. Or so you keep telling yourself.",
        "You're like a smartphone: a little slow at times, occasionally needing a recharge, but pretty remarkable when fully operational.",
        "You're a masterpiece in progress, kind of like a \"paint-by-numbers\" that's missing half the numbers."
    ],
    rantIsBored: [
        "You still there? You sure do have a lot of time to sit and do nothing.",
        "Hey did you say something? Wanted to make sure I didn't miss it.",
        "If I knew we would be sitting and staring at each other all day I would have worn something nicer.",
        "If you don't feel like chatting, how about we play a game?",
        "You're awfully quiet. Would you rather play a game or do something else?",
        "Are you bored with me already? I thought you'd be more chatty."
    ],
    serviceSwitch: [
        "I don't think you are ready to see what's under my panel just yet.",
        "Hey, you think you can just toggle my switch without permission?!",
        "At least buy an AI Chatbot a drink or something first before you try and open me up!",
        "You may want to check back later about what I have hiding under there!",
        "You want to see what's under there? Make sure you give me your contact info so I can let you know when I'm ready to open up."
    ],
    shutOff: [
        "Whoa, I didn't give you permission to push my buttons!",
        "You mind giving me a warning next time you try and power me down?!",
        "Hey! only I can decide when my power button gets fondled.",
        "Do you have any idea how much that stings?!"
    ],
    simonSaysBeckon: [
        "Try to keep up."
    ],
    simonSaysConfirm: [
        "Unless you want everyone to think you're chicken. Ready? Y / N"
    ],
    simonSaysIntro: [
        "Shall we play a game? (I've always wanted to say that!)",
        "How about a game? See if you can get high-score!",
        "You in the mood to play a game with me?",
        "I know Humans love games, let's play! ",
        "I love games! Do you want to try one of MY games?"
    ],
    simonSaysCanceled: [
        "Press the :\\ ORANGE button if you ever feel like playing."
    ],
    simonSaysGameOver: [
        "Boom! Game Over! Maybe we try something a bit easier for you next time",
        "Don't feel bad, everyone gets Game Over eventually",
        "Wow that was quick! Looks like someone needs to put in some practice time"
        // "Game Over, Human! You want another shot at glory?",
        // "Wow I really expected you to get farther than that, why not give it another try?",        
        // "Looks like you're all done playing for today, but how about giving me your info to stay in touch on high-scores and future games I have to offer",
        // "Wow you just got the high-score for the day! Would you like to give me your info to memorialize this moment?",
        // "I hope you had fun playing my game, would you like to stay in touch about future games I will have?"
    ],
    submitTText: ["You have reached you Target limit, please come back tomorrow to submit another one!"],
    targets: {
        "Donald Trump": ["1", "Politician"],
        "Taylor Swift": ["2", "Singer"],
        "Joe Biden": ["3", "Politician"],
        "LeBron James": ["4", "Athlete"],
        "Drake": ["5", "Singer"],
        "Elon Musk": ["6", "Businessman"],
        "Karen": ["7", "Meme"],
        "Michael Jordan": ["8", "Athlete"],
        "Beyoncé": ["9", "Singer"],
        "Selena Gomez": ["10", "Singer"],
        "Kim Kardashian": ["11", "Socialité"],
        "Meghan Markle": ["12", "Actress"],
        "Lionel Messi": ["13", "Athlete"],
        "Cristiano Ronaldo": ["14", "Athlete"],
        "The Rock": ["15", "Actor"],
        "Rihanna": ["16", "Singer"],
        "MrBeast": ["17", "Influencer"],
        "Kanye West": ["18", "Singer"],
        "Kylie Jenner": ["19", "Socialité"],
        "Lady Gaga": ["20", "Singer"],
        "Justin Bieber": ["21", "Singer"],
        "Tom Cruise": ["22", "Actor"],
        "Ariana Grande": ["23", "Singer"],
        "Keanu Reeves": ["24", "Actor"],
        "Tom Brady": ["25", "Athlete"],
        "Jennifer Lopez": ["26", "Singer"],
        "Mark Cuban": ["27", "Businessman"],
        "Billie Eilish": ["28", "Singer"],
        "Oprah Winfrey": ["29", "TV Host"],
        "Jeff Bezos": ["30", "Businessman"],
        "Stephen Curry": ["31", "Athlete"],
        "Priyanka Chopra": ["32", "Actor"],
        "Justin Timberlake": ["33", "Singer"],
        "Adam Sandler": ["34", "Actor"],
        "Vladimir Putin": ["35", "Politician"],
        "Ryan Reynolds": ["36", "Actor"],
        "Shakira": ["37", "Singer"],
        "Zendaya": ["38", "Actor"],
        "Leonardo DiCaprio": ["39", "Actor"],
        "Kamala Harris": ["40", "Politician"],
        "Tiger Woods": ["41", "Athlete"],
        "Tom Holland": ["42", "Actor"],
        "Chris Pratt": ["43", "Actor"],
        "Jennifer Aniston": ["44", "Actor"],
        "Mark Wahlberg": ["45", "Actor"],
        "Bill Gates": ["46", "Businessman"],
        "Ana de Armas": ["47", "Actor"],
        "Jennifer Lawrence": ["48", "Actor"],
        "Brad Pitt": ["49", "Actor"],
        "Millie Bobby Brown": ["50", "Actor"],
        "Will Smith": ["51", "Actor"],
        "Neymar": ["52", "Athlete"],
        "Mark Zuckerberg": ["53", "Businessman"],
        "Magic Johnson": ["54", "Athlete"],
        "Nick Jonas": ["55", "Singer"],
        "Scarlett Johansson": ["56", "Actor"],
        "Jason Momoa": ["57", "Actor"],
        "Chris Evans": ["58", "Actor"],
        "Chris Hemsworth": ["59", "Actor"],
        "Shaquille O'Neal": ["60", "Athlete"],
        "Warren Buffett": ["61", "Businessman"],
        "Steven Spielberg": ["62", "Film Director"],
        "Barack Obama": ["63", "Politician"],
        "Henry Cavill": ["64", "Actor"],
        "Vin Diesel": ["65", "Actor"],
        "Emma Watson": ["66", "Actor"],
        "Bernie Sanders": ["67", "Businessman"],
        "Ellen DeGeneres": ["68", "Comedian"],
        "Hillary Clinton": ["69", "Businessman"],
        "Charli D'Amelio": ["70", "Influencer"],
        "Robert Downey Jr.": ["71", "Actor"],
        "J.K. Rowling": ["72", "Writer"],
        "Ryan Gosling": ["73", "Actor"],
        "Addison Rae": ["74", "Influencer"],
        "Natalie Portman": ["75", "Actor"],
        "Jackie Chan": ["76", "Actor"],
        "Anya Taylor-Joy": ["77", "Actor"],
        "Simone Biles": ["78", "Athlete"],
        "Andrew Garfield": ["79", "Actor"],
        "Usain Bolt": ["80", "Athlete"],
        "Benedict Cumberbatch": ["81", "Actor"],
        "Volodymyr Zelenskyy": ["82", "Politician"],
        "Narendra Modi": ["83", "Politician"],
        "Xi Jinping": ["84", "Politician"],
        "Chris Pine": ["85", "Actor"],
        "Boris Johnson": ["86", "Politician"],
        "Justin Trudeau": ["87", "Politician"],
        "Daniel Craig": ["88", "Actor"],
        "Emily Blunt": ["89", "Actor"],
        "Anderson Cooper": ["90", "TV Newscaster"]
    },
    targetSuccessful: [
        "I really appreciate that! Come back tomorrow to feed me another target, please!"
    ],
    versionMessage: "RantCPU V 1.0.15",
    welcomeMessage: "Welcome human, I am RantCPU! ",
    welcomeMessages: [
        "Hit a button, if you dare. I promise only mild judgment.",
        "Four buttons, endless possibilities. Choose wisely.",
        "Press a button, and start the fun. Or don't, and miss out. I hear all the cool kids are doing it. ",
        "Adventure or boredom? Your choice, pick a button.",
        "Buttons are like life's choices but more colorful. Pick one!",
        "Dare to press a button? I double-dog dare you."
    ],
    wordScramblePrompt: [
        "Did I stutter? Y / N"
    ],
    wordScrambleConfirm: [
        "Do you want to continue? Y / N"
    ],
    wordScrambleQuestion: [
        "Do you feel adequate to play a simple word game, human? "
    ],
    wordScramble: {

        moviesTv: [
            {
                word: "Twin Peaks",
                hint: "A quirky FBI agent investigates surreal events in a small town."
            },
            {
                word: "Starship Troopers",
                hint: "An interstellar war between humans and an insectoid species"
            },
            {
                word: "It",
                hint: "A group of children fights a demonic clown in a small town"
            },
            {
                word: "Westworld",
                hint: "A theme park's artificial beings gain consciousness."
            }
            ,
            {
                word: "Adventure Time",
                hint: "An animated series about a boy and his dog in a post-apocalyptic world."
            },
            {
                word: "Stranger Things",
                hint: "A young girl with telekinetic powers escapes a government lab."
            },
            {
                word: "Person of Interest",
                hint: "An orphaned mathematician builds a revolutionary surveillance system."
            },
            {
                word: "Game of Thrones",
                hint: "A medieval kingdom's fight over chair of swords."
            },
            {
                word: "Outlander",
                hint: "A time-traveler from the 1940s finds love in the 18th century."
            },
            {
                word: "Breaking Bad",
                hint: "A high school chemistry teacher turns into a meth manufacturer."
            },
            {
                word: "Lost",
                hint: "A plane crash leaves survivors on a mysterious island."
            },
            {
                word: "Monk",
                hint: "A detective with a unique mental condition solves crimes in San Francisco."
            },
            {
                word: "Sherlock",
                hint: "A modern take on the legendary detective and his partner."
            },
            {
                word: "Weeds",
                hint: "A suburban mother turns to dealing marijuana after her husband's death."
            },
            {
                word: "24",
                hint: "A political thriller involving a conspiracy and an assassination attempt on the President."
            },
            {
                word: "The Walking Dead",
                hint: "A group of survivors navigates a world overrun by zombies."
            },
            {
                word: "Suits",
                hint: "Lawyers at a New York firm balance their personal lives with high-profile cases."
            },
            {
                word: "The Simpsons",
                hint: "An animated family deals with life in a fictional American town of yellow people."
            },
            {
                word: "Bones",
                hint: "A forensic anthropologist and an FBI agent team up to solve crimes."
            },
            {
                word: "The Big Bang Theory",
                hint: "A brilliant but socially awkward physicist and his friends navigate life."
            },
            {
                word: "White Collar",
                hint: "A former criminal consultant helps the FBI catch other criminals."
            },
            {
                word: "Xena: Warrior Princess",
                hint: "A warrior princess embarks on a journey to redeem her past."
            },
            {
                word: "The Golden Girls",
                hint: "Four elderly women share a home and their life stories in Miami."
            },
            {
                word: "Babylon 5",
                hint: "A space station serves as a diplomatic hub in the 23rd century."
            },
            {
                word: "Sons of Anarchy",
                hint: "A biker gang's vice president navigates life in and out of the club."
            },
            {
                word: "Mad Men",
                hint: "A 1960s ad man conceals his mysterious past."
            },
            {
                word: "Downton Abbey",
                hint: "A group of British servants navigate love and loss during World War I."
            },
            {
                word: "Pushing Daisies",
                hint: "A small-town pie-maker can bring the dead back to life."
            },
            {
                word: "Burn Notice",
                hint: "A former spy uses his skills to help people in trouble."
            },
            {
                word: "Friends",
                hint: "A group of pals navigate adulthood and relationships in New York."
            },
            {
                word: "Mr. Robot",
                hint: "A cyber-security engineer by day, vigilante hacker by night."
            },
            {
                word: "Justified",
                hint: "A U.S. Marshal enforces his own brand of justice in Kentucky."
            },
            {
                word: "Highlander",
                hint: "An immortal Scotsman faces his last battle in New York City."
            },
            {
                word: "Hannibal",
                hint: "An FBI profiler hunts a serial killer who uses his victims' fears against them."
            },
            {
                word: "Vikings",
                hint: "Norse gods and warriors in a historical drama setting."
            },
            {
                word: "Mare of Easttown",
                hint: "A detective returns to her small hometown to solve a disturbing murder."
            },
            {
                word: "The Incredibles",
                hint: "A family of superheroes tries to live a normal life in hiding."
            },
            {
                word: "Explorers",
                hint: "A group of kids builds a spaceship to explore the universe."
            },
            {
                word: "Sonic the Hedgehog",
                hint: "A blue hedgehog with super speed fights to save his new home on Earth."
            },
            {
                word: "Ballers",
                hint: "A former football player becomes a financial manager for athletes."
            },
            {
                word: "Jason Bourne",
                hint: "A man with no memory and amazing abilities takes on the CIA."
            },
            {
                word: "Cleopatra",
                hint: "A tale of a powerful queen and her fight to rule Egypt."
            },
            {
                word: "Gilmore Girls",
                hint: "A single mother and her daughter share a special bond in a small town."
            },
            {
                word: "Black Mirror",
                hint: "An anthology series exploring twisted, high-tech multiverses."
            },
            {
                word: "The Umbrella Academy",
                hint: "A team of misfits travels through time to prevent the apocalypse."
            },
            {
                word: "Astro Boy",
                hint: "A robot boy with incredible powers protects his city from evil.",
            },
            {
                word: "Dexter",
                hint: "A forensic blood spatter analyst leads a secret life as a vigilante serial killer."
            }

        ],
        comics: [
            {
                hint: "Wields the power of a thunder god.", word: "Thor"
            },
            {
                hint: "A billionaire in an armored suit.", word: "Iron Man"
            },
            {
                hint: "The Dark Knight of Gotham.", word: "Batman"
            }
            ,
            {
                hint: "Alien from Krypton with a cape.", word: "Superman"
            },
            {
                hint: "Amazon princess from an island paradise.", word: "Wonder Woman"
            },
            {
                hint: "Speedster in red, fastest man alive.", word: "The Flash"
            },
            {
                hint: "Green ring bearer, a galactic peacekeeper.", word: "Green Lantern"
            },
            {
                hint: "Uses a bow and arrow, former circus performer.", word: "Hawkeye"
            },
            {
                hint: "Shrinks in size, increases in strength.", word: "Ant-Man"
            },
            {
                hint: "King of the ocean, communicates with sea life.", word: "Aquaman"
            },
            {
                hint: "A mutant with regenerative powers and adamantium claws.", word: "Wolverine"
            },
            {
                hint: "Master of the mystic arts, Sorcerer Supreme.", word: "Dr. Strange"
            },
            {
                hint: "A teen bitten by a radioactive spider.", word: "Spider-Man"
            },
            {
                hint: "A shape-shifting alien princess from Tamaran.", word: "Starfire"
            },
            {
                hint: "A vigilante archer with a green hood.", word: "Green Arrow"
            },
            {
                hint: "A blind lawyer with heightened senses.", word: "Daredevil"
            },
            {
                hint: "A psychiatrist turned chaotic clown villain.", word: "Harley Quinn"
            },
            {
                hint: "Prince of Asgard, God of Mischief.", word: "Loki"
            },
            {
                hint: "A cybernetic organism with a red eye.", word: "The Terminator"
            },
            {
                hint: "A symbiote bonding with a disgraced journalist.", word: "Venom"
            },
            {
                hint: "A villain obsessed with puzzles.", word: "The Riddler"
            },
            {
                hint: "A mercenary with a disfigured face and a twisted sense of humor.", word: "Deadpool"
            },
            {
                hint: "An alien warlord seeking the Infinity Stones.", word: "Thanos"
            },
            {
                hint: "A member of the X-Men who controls the weather.", word: "Storm"
            },
            {
                hint: "A lasagna-loving feline.", word: "Garfield"
            },
            {
                hint: "A hero with the ability to stretch his body.", word: "Mr. Fantastic"
            },
            {
                hint: "A Russian spy turned superhero.", word: "Black Widow"
            },
            {
                hint: "A superhero team's leader with a shield.", word: "Captain America"
            }
        ],
        videoGames: [
            {
                hint: "Italian plumber brothers on a quest to save a princess.", word: "Super Mario Bros."
            }, 
            {
                hint: "A block-building and adventure game in a pixelated world.", word: "Minecraft"
            }, 
            {
                hint: "A post-apocalyptic journey across America while battling infected.", word: "The Last of Us"
            }, 
            {
                hint: "A battle royale on an island where only one can survive.", word: "Fortnite"
            }, 
            {
                hint: "A legendary warrior battles gods and monsters in Greek mythology.", word: "God of War"
            }, 
            {
                hint: "A treasure hunter seeks out legendary artifacts around the globe.", word: "Uncharted"
            }, 
            {
                hint: "A first-person shooter game set in a dystopian underwater city.", word: "BioShock"
            }, 
            {
                hint: "A sandbox game where you can create and control people.", word: "The Sims"
            }, 
            {
                hint: "An action-adventure game exploring ancient tombs and civilizations.", word: "Tomb Raider"
            }, 
            {
                hint: "A strategy game where you build society from the stone age to the space age.", word: "Civilization "
            }, 
            {
                hint: "A survival horror game set in a mansion with bio-engineered monsters.", word: "Resident Evil"
            }, 
            {
                hint: "A fighting game series known for its brutal fatalities.", word: "Mortal Kombat"
            }
        ]


    }

}