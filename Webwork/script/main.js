let check = window.localStorage.getItem("check");
if(check != "visited"){
    window.location = "index.html";
}
localStorage.removeItem("check");
let img;
let text;
let author;
let quotes;
let toast;
let prev;
let y;
let images = [
            "images/IMG1.JPG","images/IMG2.JPG","images/IMG3.JPG","images/IMG4.JPG",
            "images/IMG5.JPG","images/IMG6.JPG","images/IMG7.JPG","images/IMG8.JPG",
            "images/IMG9.JPG","images/IMG10.JPG","images/IMG11.JPG","images/IMG12.JPG",
            "images/IMG13.JPG","images/IMG14.JPG","images/IMG15.JPG","images/IMG16.JPG",
            "images/IMG17.JPG","images/IMG18.JPG","images/IMG19.JPG","images/IMG20.JPG",
            "images/IMG21.JPG","images/IMG22.JPG","images/IMG23.JPG","images/IMG24.JPG",
            "images/IMG25.JPG","images/IMG26.JPG","images/IMG27.JPG","images/IMG28.JPG",
            "images/IMG29.JPG","images/IMG30.JPG","images/IMG31.JPG","images/IMG32.JPG",
            "images/IMG33.JPG","images/IMG34.JPG","images/IMG35.JPG","images/IMG36.JPG",
            "images/IMG37.JPG","images/IMG38.JPG","images/IMG39.JPG","images/IMG40.JPG",
            "images/IMG41.JPG","images/IMG42.JPG","images/IMG43.JPG"
            ]
window.onload = function(){
    img = document.querySelector(".img");
    text = document.querySelector(".quote");
    author = document.querySelector(".author");
    toast = document.querySelector(".toast");
    prevbtn = document.querySelector(".prevbtn");
    //Creating a constant variable for the quotes
    quotes = [
        {
            0: "Genius is one percent inspiration and ninety-nine percent perspiration.",
            1: "Thomas Edison",
        },
        {
            0: "You can observe a lot just by watching.",
            1: "Yogi Berra",
        },
        {
            0: "A house divided against itself cannot stand.",
            1: "Abraham Lincoln",
        },
        {
            0: "Difficulties increase the nearer we get to the goal.",
            1: "Johann Wolfgang von Goethe",
        },
        {
            0: "Fate is in your hands and no one elses",
            1: "Byron Pulsifer",
        },
        {
            0: "Be the chief but never the lord.",
            1: "Lao Tzu",
        },
        {
            0: "Nothing happens unless first we dream.",
            1: "Carl Sandburg",
        },
        {
            0: "Well begun is half done.",
            1: "Aristotle",
        },
        {
            0: "Life is a learning experience, only if you learn.",
            1: "Yogi Berra",
        },
        {
            0: "Self-complacency is fatal to progress.",
            1: "Margaret Sangster",
        },
        {
            0: "Peace comes from within. Do not seek it without.",
            1: "Buddha",
        },
        {
            0: "What you give is what you get.",
            1: "Byron Pulsifer",
        },
        {
            0: "We can only learn to love by loving.",
            1: "Iris Murdoch",
        },
        {
            0: "Life is change. Growth is optional. Choose wisely.",
            1: "Karen Clark",
        },
        {
            0: "You'll see it when you believe it.",
            1: "Wayne Dyer",
        },
        {
            0: "Today is the tomorrow we worried about yesterday.",
            1: "Unknown",
        },
        {
            0: "It's easier to see the mistakes on someone else's paper.",
            1: "Unknown",
        },
        {
            0: "Every man dies. Not every man really lives.",
            1: "Unknown",
        },
        {
            0: "To lead people walk behind them.",
            1: "Lao Tzu",
        },
        {
            0: "Having nothing, nothing can he lose.",
            1: "William Shakespeare",
        },
        {
            0: "Trouble is only opportunity in work clothes.",
            1: "Henry J. Kaiser",
        },
        {
            0: "A rolling stone gathers no moss.",
            1: "Publilius Syrus",
        },
        {
            0: "Ideas are the beginning points of all fortunes.",
            1: "Napoleon Hill",
        },
        {
            0: "Everything in life is luck.",
            1: "Donald Trump",
        },
        {
            0: "Doing nothing is better than being busy doing nothing.",
            1: "Lao Tzu",
        },
        {
            0: "Trust yourself. You know more than you think you do.",
            1: "Benjamin Spock",
        },
        {
            0: "Study the past, if you would divine the future.",
            1: "Confucius",
        },
        {
            0: "The day is already blessed, find peace within it.",
            1: "Unknown",
        },
        {
            0: "From error to error one discovers the entire truth.",
            1: "Sigmund Freud",
        },
        {
            0: "Well done is better than well said.",
            1: "Benjamin Franklin",
        },
        {
            0: "Bite off more than you can chew, then chew it.",
            1: "Ella Williams",
        },
        {
            0: "Work out your own salvation. Do not depend on others.",
            1: "Buddha",
        },
        {
            0: "One today is worth two tomorrows.",
            1: "Benjamin Franklin",
        },
        {
            0: "Once you choose hope, anythings possible.",
            1: "Christopher Reeve",
        },
        {
            0: "God always takes the simplest way.",
            1: "Albert Einstein",
        },
        {
            0: "One fails forward toward success.",
            1: "Charles Kettering",
        },
        {
            0: "From small beginnings come great things.",
            1: "Unknown",
        },
        {
            0: "Learning is a treasure that will follow its owner everywhere",
            1: "Chinese proverb",
        },
        {
            0: "Be as you wish to seem.",
            1: "Socrates",
        },
        {
            0: "The world is always in movement.",
            1: "V. Naipaul",
        },
        {
            0: "Never mistake activity for achievement.",
            1: "John Wooden",
        },
        {
            0: "What worries you masters you.",
            1: "Haddon Robinson",
        },
        {
            0: "One faces the future with ones past.",
            1: "Pearl Buck",
        },
        {
            0: "Goals are the fuel in the furnace of achievement.",
            1: "Brian Tracy",
        },
        {
            0: "Who sows virtue reaps honour.",
            1: "Leonardo da Vinci",
        },
        {
            0: "Be kind whenever possible. It is always possible.",
            1: "Dalai Lama",
        },
        {
            0: "Talk doesn't cook rice.",
            1: "Chinese proverb",
        },
        {
            0: "He is able who thinks he is able.",
            1: "Buddha",
        },
        {
            0: "A goal without a plan is just a wish.",
            1: "Larry Elder",
        },
        {
            0: "To succeed, we must first believe that we can.",
            1: "Michael Korda",
        },
        {
            0: "Learn from yesterday, live for today, hope for tomorrow.",
            1: "Albert Einstein",
        },
        {
            0: "A weed is no more than a flower in disguise.",
            1: "James Lowell",
        },
        {
            0: "Do, or do not. There is no try.",
            1: "Yoda",
        },
        {
            0: "All serious daring starts from within.",
            1: "Harriet Beecher Stowe",
        },
        {
            0: "The best teacher is experience learned from failures.",
            1: "Byron Pulsifer",
        },
        {
            0: "Think how hard physics would be if particles could think.",
            1: "Murray Gell-Mann",
        },
        {
            0: "Love is the flower you've got to let grow.",
            1: "John Lennon",
        },
        {
            0: "Don't wait. The time will never be just right.",
            1: "Napoleon Hill",
        },
        {
            0: "Time is the wisest counsellor of all.",
            1: "Pericles",
        },
        {
            0: "You give before you get.",
            1: "Napoleon Hill",
        },
        {
            0: "Wisdom begins in wonder.",
            1: "Socrates",
        },
        {
            0: "Without courage, wisdom bears no fruit.",
            1: "Baltasar Gracian",
        },
        {
            0: "Change in all things is sweet.",
            1: "Aristotle",
        },
        {
            0: "What you fear is that which requires action to overcome.",
            1: "Byron Pulsifer",
        },
        {
            0: "When performance exceeds ambition, the overlap is called success.",
            1: "Cullen Hightower",
        },
        {
            0: "When deeds speak, words are nothing.",
            1: "African proverb",
        },
        {
            0: "Real magic in relationships means an absence of judgement of others.",
            1: "Wayne Dyer",
        },
        {
            0: "I never think of the future. It comes soon enough.",
            1: "Albert Einstein",
        },
        {
            0: "Skill to do comes of doing.",
            1: "Ralph Emerson",
        },
        {
            0: "Wisdom is the supreme part of happiness.",
            1: "Sophocles",
        },
        {
            0: "I believe that every person is born with talent.",
            1: "Maya Angelou",
        },
        {
            0: "Important principles may, and must, be inflexible.",
            1: "Abraham Lincoln",
        },
        {
            0: "The undertaking of a new action brings new strength.",
            1: "Richard Evans",
        },
        {
            0: "The years teach much which the days never know.",
            1: "Ralph Emerson",
        },
        {
            0: "Our distrust is very expensive.",
            1: "Ralph Emerson",
        },
        {
            0: "All know the way; few actually walk it.",
            1: "Bodhidharma",
        },
        {
            0: "Great talent finds happiness in execution.",
            1: "Johann Wolfgang von Goethe",
        },
        {
            0: "Faith in oneself is the best and safest course.",
            1: "Michelangelo",
        },
        {
            0: "Courage is going from failure to failure without losing enthusiasm.",
            1: "Winston Churchill",
        },
        {
            0: "The two most powerful warriors are patience and time.",
            1: "Leo Tolstoy",
        },
        {
            0: "Anticipate the difficult by managing the easy.",
            1: "Lao Tzu",
        },
        {
            0: "Those who are free of resentful thoughts surely find peace.",
            1: "Buddha",
        },
        {
            0: "A short saying often contains much wisdom.",
            1: "Sophocles",
        },
        {
            0: "It takes both sunshine and rain to make a rainbow.",
            1: "Unknown",
        },
        {
            0: "A beautiful thing is never perfect.",
            1: "Unknown",
        },
        {
            0: "Only do what your heart tells you.",
            1: "Princess Diana",
        },
        {
            0: "Life is movement-we breathe, we eat, we walk, we move!",
            1: "John Pierrakos",
        },
        {
            0: "No one can make you feel inferior without your consent.",
            1: "Eleanor Roosevelt",
        },
        {
            0: "Argue for your limitations, and sure enough theyre yours.",
            1: "Richard Bach",
        },
        {
            0: "Luck is what happens when preparation meets opportunity.",
            1: "Seneca",
        },
        {
            0: "Victory belongs to the most persevering.",
            1: "Napoleon Bonaparte",
        },
        {
            0: "Love all, trust a few, do wrong to none.",
            1: "William Shakespeare",
        },
        {
            0: "In order to win, you must expect to win.",
            1: "Richard Bach",
        },
        {
            0: "A goal is a dream with a deadline.",
            1: "Napoleon Hill",
        },
        {
            0: "You can do it if you believe you can!",
            1: "Napoleon Hill",
        },
        {
            0: "Set your goals high, and don't stop till you get there.",
            1: "Bo Jackson",
        },
        {
            0: "Every new day is another chance to change your life.",
            1: "Unknown",
        },
        {
            0: "Smile, breathe, and go slowly.",
            1: "Thich Nhat Hanh",
        },
        {
            0: "Nobody will believe in you unless you believe in yourself.",
            1: "Liberace",
        },
        {
            0: "Do more than dream: work.",
            1: "William Arthur Ward",
        },
        {
            0: "No man was ever wise by chance.",
            1: "Seneca",
        },
        {
            0: "Some pursue happiness, others create it.",
            1: "Unknown",
        },
        {
            0: "He that is giddy thinks the world turns round.",
            1: "William Shakespeare",
        },
        {
            0: "Don't ruin the present with the ruined past.",
            1: "Ellen Gilchrist",
        },
        {
            0: "Do something wonderful, people may imitate it.",
            1: "Albert Schweitzer",
        },
        {
            0: "We do what we do because we believe.",
            1: "Unknown",
        },
        {
            0: "Do one thing every day that scares you.",
            1: "Eleanor Roosevelt",
        },
        {
            0: "If you cannot be silent be brilliant and thoughtful.",
            1: "Byron Pulsifer",
        },
        {
            0: "Who looks outside, dreams; who looks inside, awakes.",
            1: "Carl Jung",
        },
        {
            0: "What we think, we become.",
            1: "Buddha",
        },
        {
            0: "The shortest answer is doing.",
            1: "Lord Herbert",
        },
        {
            0: "All our knowledge has its origins in our perceptions.",
            1: "Leonardo da Vinci",
        },
        {
            0: "The harder you fall, the higher you bounce.",
            1: "Unknown",
        },
        {
            0: "Trusting our intuition often saves us from disaster.",
            1: "Anne Wilson Schaef",
        },
        {
            0: "Truth is powerful and it prevails.",
            1: "Sojourner Truth",
        },
        {
            0: "Light tomorrow with today!",
            1: "Elizabeth Browning",
        },
        {
            0: "Silence is a fence around wisdom.",
            1: "German proverb",
        },
        {
            0: "Society develops wit, but its contemplation alone forms genius.",
            1: "Madame de Stael",
        },
        {
            0: "The simplest things are often the truest.",
            1: "Richard Bach",
        },
        {
            0: "Everyone smiles in the same language.",
            1: "Unknown",
        },
        {
            0: "Yesterday I dared to struggle. Today I dare to win.",
            1: "Bernadette Devlin",
        },
        {
            0: "No alibi will save you from accepting the responsibility.",
            1: "Napoleon Hill",
        },
        {
            0: "If you can dream it, you can do it.",
            1: "Walt Disney",
        },
        {
            0: "It is better to travel well than to arrive.",
            1: "Buddha",
        },
        {
            0: "Life shrinks or expands in proportion to one's courage.",
            1: "Anais Nin",
        },
        {
            0: "You have to believe in yourself.",
            1: "Sun Tzu",
        },
        {
            0: "Our intention creates our reality.",
            1: "Wayne Dyer",
        },
        {
            0: "Silence is a true friend who never betrays.",
            1: "Confucius",
        },
        {
            0: "Character develops itself in the stream of life.",
            1: "Johann Wolfgang von Goethe",
        },
        {
            0: "From little acorns mighty oaks do grow.",
            1: "American proverb",
        },
        {
            0: "You can't stop the waves, but you can learn to surf.",
            1: "Jon Kabat-Zinn",
        },
        {
            0: "Reality does not conform to the ideal, but confirms it.",
            1: "Gustave Flaubert",
        },
        {
            0: "Speak low, if you speak love.",
            1: "William Shakespeare",
        },
        {
            0: "A really great talent finds its happiness in execution.",
            1: "Johann Wolfgang von Goethe",
        },
        {
            0: "Reality leaves a lot to the imagination.",
            1: "John Lennon",
        },
        {
            0: "The greatest remedy for anger is delay.",
            1: "Seneca",
        },
        {
            0: "Growth itself contains the germ of happiness.",
            1: "Pearl Buck",
        },
        {
            0: "You can do what's reasonable or you can decide what's possible.",
            1: "Unknown",
        },
        {
            0: "Nothing strengthens authority so much as silence.",
            1: "Leonardo da Vinci",
        },
        {
            0: "Wherever you go, go with all your heart.",
            1: "Confucius",
        },
        {
            0: "The only real valuable thing is intuition.",
            1: "Albert Einstein",
        },
        {
            0: "Good luck is another name for tenacity of purpose.",
            1: "Ralph Emerson",
        },
        {
            0: "Rainbows apologize for angry skies.",
            1: "Sylvia Voirol",
        },
        {
            0: "Friendship isn't a big thing. It's a million little things.",
            1: "Unknown",
        },
        {
            0: "Time is the most valuable thing a man can spend.",
            1: "Theophrastus",
        },
        {
            0: "Whatever happens, take responsibility.",
            1: "Tony Robbins",
        },
        {
            0: "Experience is simply the name we give our mistakes.",
            1: "Oscar Wilde",
        },
        {
            0: "I think and that is all that I am.",
            1: "Wayne Dyer",
        },
        {
            0: "A good plan today is better than a perfect plan tomorrow.",
            1: "Unknown",
        },
        {
            0: "If the shoe doesn't fit, must we change the foot?",
            1: "Gloria Steinem",
        },
        {
            0: "Each day provides its own gifts.",
            1: "Marcus Aurelius",
        },
        {
            0: "While we stop to think, we often miss our opportunity.",
            1: "Publilius Syrus",
        },
        {
            0: "Life isn't about finding yourself. Life is about creating yourself.",
            1: "Bernard Shaw",
        },
        {
            0: "To bring anything into your life, imagine that it's already there.",
            1: "Richard Bach",
        },
        {
            0: "Begin to weave and God will give you the thread.",
            1: "German proverb",
        },
        {
            0: "The more you know yourself, the more you forgive yourself.",
            1: "Confucius",
        },
        {
            0: "Someone remembers, someone cares; your name is whispered in someone's prayers.",
            1: "Unknown",
        },
        {
            0: "Without faith, nothing is possible. With it, nothing is impossible.",
            1: "Mary Bethune",
        },
        {
            0: "Once we accept our limits, we go beyond them.",
            1: "Albert Einstein",
        },
        {
            0: "Don't be pushed by your problems; be led by your dreams.",
            1: "Unknown",
        },
        {
            0: "Whatever we expect with confidence becomes our own self-fulfilling prophecy.",
            1: "Brian Tracy",
        },
        {
            0: "Everything you can imagine is real.",
            1: "Pablo Picasso",
        },
        {
            0: "Fear is a darkroom where negatives develop.",
            1: "Usman Asif",
        },
        {
            0: "The truest wisdom is a resolute determination.",
            1: "Napoleon Bonaparte",
        },
        {
            0: "Life is the flower for which love is the honey.",
            1: "Victor Hugo",
        },
        {
            0: "Freedom is the right to live as we wish.",
            1: "Epictetus",
        },
        {
            0: "Change your thoughts, change your life!",
            1: "Unknown",
        },
        {
            0: "Never ignore a gut feeling, but never believe that it's enough.",
            1: "Robert Heller",
        },
        {
            0: "Loss is nothing else but change,and change is Natures delight.",
            1: "Marcus Aurelius",
        },
        {
            0: "Someone is special only if you tell them.",
            1: "Byron Pulsifer",
        },
        {
            0: "Today is the tomorrow you worried about yesterday.",
            1: "Unknown",
        },
        {
            0: "There is no way to happiness, happiness is the way.",
            1: "Thich Nhat Hanh",
        },
        {
            0: "The day always looks brighter from behind a smile.",
            1: "Unknown",
        },
        {
            0: "A stumble may prevent a fall.",
            1: "Unknown",
        },
        {
            0: "He who talks more is sooner exhausted.",
            1: "Lao Tzu",
        },
        {
            0: "He who is contented is rich.",
            1: "Lao Tzu",
        },
        {
            0: "What we achieve inwardly will change outer reality.",
            1: "Plutarch",
        },
        {
            0: "Our strength grows out of our weaknesses.",
            1: "Ralph Waldo Emerson",
        },
        {
            0: "We must become the change we want to see.",
            1: "Mahatma Gandhi",
        },
        {
            0: "Happiness is found in doing, not merely possessing.",
            1: "Napoleon Hill",
        },
        {
            0: "Put your future in good hands your own.",
            1: "Unknown",
        },
        {
            0: "We choose our destiny in the way we treat others.",
            1: "Wit",
        },
        {
            0: "No snowflake in an avalanche ever feels responsible.",
            1: "Voltaire",
        },
        {
            0: "Fortune favours the brave.",
            1: "Virgil",
        },
        {
            0: "I believe in one thing only, the power of human will.",
            1: "Joseph Stalin",
        },
        {
            0: "The best way out is always through.",
            1: "Robert Frost",
        },
        {
            0: "The mind unlearns with difficulty what it has long learned.",
            1: "Seneca",
        },
        {
            0: "I destroy my enemies when I make them my friends.",
            1: "Abraham Lincoln",
        },
        {
            0: "No garden is without its weeds.",
            1: "Thomas Fuller",
        },
        {
            0: "There is no failure except in no longer trying.",
            1: "Elbert Hubbard",
        },
        {
            0: "Kind words will unlock an iron door.",
            1: "Turkish proverb",
        },
        {
            0: "Problems are only opportunities with thorns on them.",
            1: "Hugh Miller",
        },
        {
            0: "Life is just a chance to grow a soul.",
            1: "A. Powell Davies",
        },
        {
            0: "Mountains cannot be surmounted except by winding paths.",
            1: "Johann Wolfgang von Goethe",
        },
        {
            0: "May our hearts garden of awakening bloom with hundreds of flowers.",
            1: "Thich Nhat Hanh",
        },
        {
            0: "Fortune befriends the bold.",
            1: "John Dryden",
        },
        {
            0: "Keep true to the dreams of thy youth.",
            1: "Friedrich von Schiller",
        },
        {
            0: "You're never a loser until you quit trying.",
            1: "Mike Ditka",
        },
        {
            0: "Science is organized knowledge. Wisdom is organized life.",
            1: "Immanuel Kant",
        },
        {
            0: "Knowing is not enough; we must apply!",
            1: "Johann Wolfgang von Goethe",
        },
        {
            0: "Strong beliefs win strong men, and then make them stronger.",
            1: "Richard Bach",
        },
        {
            0: "Autumn is a second spring when every leaf is a flower.",
            1: "Albert Camus",
        },
        {
            0: "If you surrender to the wind, you can ride it.",
            1: "Toni Morrison",
        },
        {
            0: "Keep yourself to the sunshine and you cannot see the shadow.",
            1: "Helen Keller",
        },
        {
            0: "Write your plans in pencil and give God the eraser.",
            1: "Paulo Coelho",
        },
        {
            0: "Inspiration exists, but it has to find us working.",
            1: "Pablo Picasso",
        },
        {
            0: "Pick battles big enough to matter, small enough to win.",
            1: "Jonathan Kozol",
        },
        {
            0: "Don't compromise yourself. You are all you've got.",
            1: "Janis Joplin",
        },
        {
            0: "A short saying oft contains much wisdom.",
            1: "Sophocles",
        },
        {
            0: "Difficulties are things that show a person what they are.",
            1: "Epictetus",
        },
        {
            0: "When you doubt your power, you give power to your doubt.",
            1: "Honore de Balzac",
        },
        {
            0: "The cause is hidden. The effect is visible to all.",
            1: "Ovid",
        },
        {
            0: "A prudent question is one half of wisdom.",
            1: "Francis Bacon",
        },
        {
            0: "The path to success is to take massive, determined action.",
            1: "Tony Robbins",
        },
        {
            0: "I allow my intuition to lead my path.",
            1: "Manuel Puig",
        },
        {
            0: "Nature takes away any faculty that is not used.",
            1: "William R. Inge",
        },
        {
            0: "If you wish to be a writer, write.",
            1: "Epictetus",
        },
        {
            0: "There is no way to prosperity, prosperity is the way.",
            1: "Wayne Dyer",
        },
        {
            0: "Either you run the day or the day runs you.",
            1: "Jim Rohn",
        },
        {
            0: "Better be ignorant of a matter than half know it.",
            1: "Publilius Syrus",
        },
        {
            0: "Follow your instincts. That is where true wisdom manifests itself.",
            1: "Oprah Winfrey",
        },
        {
            0: "There never was a good knife made of bad steel.",
            1: "Benjamin Franklin",
        },
        {
            0: "To accomplish great things, we must dream as well as act.",
            1: "Anatole France",
        },
        {
            0: "Patience is the companion of wisdom.",
            1: "Saint Augustine",
        },
        {
            0: "The mind is everything. What you think you become.",
            1: "Buddha",
        },
        {
            0: "To enjoy life, we must touch much of it lightly.",
            1: "Voltaire",
        },
        {
            0: "To fly, we have to have resistance.",
            1: "Maya Lin",
        },
        {
            0: "What you see depends on what you're looking for.",
            1: "Unknown",
        },
        {
            0: "The heart has its reasons which reason knows not of.",
            1: "Blaise Pascal",
        },
        {
            0: "Be great in act, as you have been in thought.",
            1: "William Shakespeare",
        },
        {
            0: "Imagination rules the world.",
            1: "Napoleon Bonaparte",
        },
        {
            0: "Kind words do not cost much. Yet they accomplish much.",
            1: "Blaise Pascal",
        },
        {
            0: "There is no greater harm than that of time wasted.",
            1: "Michelangelo",
        },
        {
            0: "Intuition will tell the thinking mind where to look next.",
            1: "Jonas Salk",
        },
        {
            0: "Worry gives a small thing a big shadow.",
            1: "Unknown",
        },
        {
            0: "Fears are nothing more than a state of mind.",
            1: "Napoleon Hill",
        },
        {
            0: "The journey of a thousand miles begins with one step.",
            1: "Lao Tzu",
        },
        {
            0: "Efficiency is doing things right; effectiveness is doing the right things.",
            1: "Peter Drucker",
        },
        {
            0: "Blaze with the fire that is never extinguished.",
            1: "Luisa Sigea",
        },
        {
            0: "Don't cry because it's over. Smile because it happened.",
            1: "Dr. Seuss",
        },
        {
            0: "No is easier to do. Yes is easier to say.",
            1: "Jason Fried",
        },
        {
            0: "To be wrong is nothing unless you continue to remember it.",
            1: "Confucius",
        },
        {
            0: "Yesterdays home runs don't win today's games.",
            1: "Babe Ruth",
        },
        {
            0: "Silence is deep as Eternity, Speech is shallow as Time.",
            1: "Carlyle",
        },
        {
            0: "Don't smother each other. No one can grow in the shade.",
            1: "Leo F. Buscaglia",
        },
        {
            0: "An ant on the move does more than a dozing ox",
            1: "Lao Tzu",
        },
        {
            0: "You can't shake hands with a clenched fist.",
            1: "Indira Gandhi",
        },
        {
            0: "A good decision is based on knowledge and not on numbers.",
            1: "Plato",
        },
        {
            0: "The cautious seldom err.",
            1: "Confucius",
        },
        {
            0: "If there is no struggle, there is no progress.",
            1: "Frederick Douglass",
        },
        {
            0: "Where there is great love, there are always miracles.",
            1: "Willa Cather",
        },
        {
            0: "Time you enjoy wasting, was not wasted.",
            1: "John Lennon",
        },
        {
            0: "Every problem has a gift for you in its hands.",
            1: "Richard Bach",
        },
        {
            0: "Sadness flies away on the wings of time.",
            1: "Jean de la Fontaine",
        },
        {
            0: "I have often regretted my speech, never my silence.",
            1: "Publilius Syrus",
        },
        {
            0: "Never put off till tomorrow what you can do today.",
            1: "Thomas Jefferson",
        },
        {
            0: "Minds are like parachutes. They only function when open.",
            1: "Thomas Dewar",
        },
        {
            0: "If a man does his best, what else is there?",
            1: "George Patton",
        },
        {
            0: "The secret of success is constancy to purpose.",
            1: "Benjamin Disraeli",
        },
        {
            0: "Life is a progress, and not a station.",
            1: "Ralph Emerson",
        },
        {
            0: "All seasons are beautiful for the person who carries happiness within.",
            1: "Horace Friess",
        },
        {
            0: "To avoid criticism, do nothing, say nothing, be nothing.",
            1: "Elbert Hubbard",
        },
        {
            0: "All things change; nothing perishes.",
            1: "Ovid",
        },
        {
            0: "Absence makes the heart grow fonder.",
            1: "Haynes Bayly",
        },
        {
            0: "Imagination is the highest kite one can fly.",
            1: "Lauren Bacall",
        },
        {
            0: "The beginning of knowledge is the discovery of something we do not understand.",
            1: "Frank Herbert",
        },
        {
            0: "Love doesn't make the world go round, love is what makes the ride worthwhile.",
            1: "Elizabeth Browning",
        },
        {
            0: "Whenever you have eliminated the impossible, whatever remains, however improbable, must be the truth.",
            1: "Arthur Conan Doyle",
        },
        {
            0: "Good timber does not grow with ease; the stronger the wind, the stronger the trees.",
            1: "J. Willard Marriott",
        },
        {
            0: "I believe that we are fundamentally the same and have the same basic potential.",
            1: "Dalai Lama",
        },
        {
            0: "The winds and waves are always on the side of the ablest navigators.",
            1: "Edward Gibbon",
        },
        {
            0: "The future belongs to those who believe in the beauty of their dreams.",
            1: "Eleanor Roosevelt",
        },
        {
            0: "To get something you never had, you have to do something you never did.",
            1: "Unknown",
        },
        {
            0: "Be thankful when you don't know something for it gives you the opportunity to learn.",
            1: "Unknown",
        },
        {
            0: "Strength does not come from physical capacity. It comes from an indomitable will.",
            1: "Mahatma Gandhi",
        },
        {
            0: "Each misfortune you encounter will carry in it the seed of tomorrows good luck.",
            1: "Og Mandino",
        },
        {
            0: "To forgive is to set a prisoner free and realize that prisoner was you.",
            1: "Lewis B. Smedes",
        },
        {
            0: "In separateness lies the world's great misery, in compassion lies the world's true strength.",
            1: "Buddha",
        },
        {
            0: "By believing passionately in something that does not yet exist, we create it.",
            1: "Nikos Kazantzakis",
        },
        {
            0: "Letting go is not the end of the world; it is the beginning of a new life.",
            1: "Unknown",
        },
        {
            0: "All the great performers I have worked with are fuelled by a personal dream.",
            1: "John Eliot",
        },
        {
            0: "One of the advantages of being disorderly is that one is constantly making exciting discoveries.",
            1: "A. A. Milne",
        },
        {
            0: "I never see what has been done; I only see what remains to be done.",
            1: "Marie Curie",
        },
        {
            0: "Begin at once to live and count each separate day as a separate life.",
            1: "Seneca",
        },
        {
            0: "If you don't know where you are going, you will probably end up somewhere else.",
            1: "Lawrence Peter",
        },
        {
            0: "It is not so important to know everything as to appreciate what we learn.",
            1: "Hannah More",
        },
        {
            0: "The bird of paradise alights only upon the hand that does not grasp.",
            1: "John Berry",
        },
        {
            0: "Think as a wise man but communicate in the language of the people.",
            1: "William Yeats",
        },
        {
            0: "Practice yourself, for heavens sake in little things, and then proceed to greater.",
            1: "Epictetus",
        },
        {
            0: "If one does not know to which port is sailing, no wind is favorable.",
            1: "Seneca",
        },
        {
            0: "Our greatest glory is not in never failing but rising everytime we fall.",
            1: "Unknown",
        },
        {
            0: "Being right is highly overrated. Even a stopped clock is right twice a day.",
            1: "Unknown",
        },
        {
            0: "To be upset over what you don't have is to waste what you do have.",
            1: "Ken S. Keyes",
        },
        {
            0: "If we did the things we are capable of, we would astound ourselves.",
            1: "Thomas Edison",
        },
        {
            0: "Nothing in life is to be feared. It is only to be understood.",
            1: "Marie Curie",
        },
        {
            0: "Successful people ask better questions, and as a result, they get better answers.",
            1: "Tony Robbins",
        },
        {
            0: "Love is not blind; it simply enables one to see things others fail to see.",
            1: "Unknown",
        },
        {
            0: "Life is a process. We are a process. The universe is a process.",
            1: "Anne Schaef",
        },
        {
            0: "I think somehow we learn who we really are and then live with that decision.",
            1: "Eleanor Roosevelt",
        },
        {
            0: "We learn what we have said from those who listen to our speaking.",
            1: "Kenneth Patton",
        },
        {
            0: "A little knowledge that acts is worth infinitely more than much knowledge that is idle.",
            1: "Kahlil Gibran",
        },
        {
            0: "If you get up one more time than you fall, you will make it through.",
            1: "Unknown",
        },
        {
            0: "The doors we open and close each day decide the lives we live.",
            1: "Flora Whittemore",
        },
        {
            0: "The worst bankrupt in the world is the person who has lost his enthusiasm.",
            1: "H. W. Arnold",
        },
        {
            0: "Happiness comes when your work and words are of benefit to yourself and others.",
            1: "Buddha",
        },
        {
            0: "Don't focus on making the right decision, focus on making the decision the right one.",
            1: "Unknown",
        },
        {
            0: "Everything is perfect in the universe even your desire to improve it.",
            1: "Wayne Dyer",
        },
        {
            0: "The universe is full of magical things, patiently waiting for our wits to grow sharper.",
            1: "Eden Phillpotts",
        },
        {
            0: "Just as a candle cannot burn without fire, men cannot live without a spiritual life.",
            1: "Buddha",
        },
        {
            0: "A thing long expected takes the form of the unexpected when at last it comes.",
            1: "Mark Twain",
        },
        {
            0: "Action may not always bring happiness; but there is no happiness without action.",
            1: "Benjamin Disraeli",
        },
        {
            0: "I don't believe in failure. It is not failure if you enjoyed the process.",
            1: "Oprah Winfrey",
        },
        {
            0: "What you do not want done to yourself, do not do to others.",
            1: "Confucius",
        },
        {
            0: "Short words are best and the old words when short are best of all.",
            1: "Winston Churchill",
        },
        {
            0: "If you light a lamp for somebody, it will also brighten your path.",
            1: "Buddha",
        },
        {
            0: "I have done my best: that is about all the philosophy of living one needs.",
            1: "Lin-yutang",
        },
        {
            0: "Through perseverance many people win success out of what seemed destined to be certain failure.",
            1: "Benjamin Disraeli",
        },
        {
            0: "Give thanks for the rain of life that propels us to reach new horizons.",
            1: "Byron Pulsifer",
        },
        {
            0: "Love is just a word until someone comes along and gives it meaning.",
            1: "Unknown",
        },
        {
            0: "We all have problems. The way we solve them is what makes us different.",
            1: "Unknown",
        },
        {
            0: "The secret to a rich life is to have more beginnings than endings.",
            1: "Dave Weinbaum",
        },
        {
            0: "It is only when the mind and character slumber that the dress can be seen.",
            1: "Ralph Waldo Emerson",
        },
        {
            0: "If you don't like something, change it. If you can't change it, change your attitude.",
            1: "Maya Angelou",
        },
        {
            0: "Reviewing what you have learned and learning anew, you are fit to be a teacher.",
            1: "Confucius",
        },
        {
            0: "The world is a book, and those who do not travel read only a page.",
            1: "Augustinus Sanctus",
        },
        {
            0: "So long as a person is capable of self-renewal they are a living being.",
            1: "Henri-Frederic Amiel",
        },
        {
            0: "I'm not afraid of storms, for I'm learning how to sail my ship.",
            1: "Louisa Alcott",
        },
        {
            0: "Think for yourselves and let others enjoy the privilege to do so too.",
            1: "Voltaire",
        },
        {
            0: "How we spend our days is, of course, how we spend our lives.",
            1: "Annie Dillard",
        },
        {
            0: "It has never been my object to record my dreams, just to realize them.",
            1: "Man Ray",
        },
        {
            0: "The most complicated achievements of thought are possible without the assistance of consciousness.",
            1: "Sigmund Freud",
        },
        {
            0: "Be miserable. Or motivate yourself. Whatever has to be done, it's always your choice.",
            1: "Wayne Dyer",
        },
        {
            0: "Most great people have attained their greatest success just one step beyond their greatest failure.",
            1: "Napoleon Hill",
        },
        {
            0: "If you think you can, you can. And if you think you can't, you're right.",
            1: "Henry Ford",
        },
        {
            0: "Better to have loved and lost, than to have never loved at all.",
            1: "St. Augustine",
        },
        {
            0: "Everyone thinks of changing the world, but no one thinks of changing himself.",
            1: "Leo Tolstoy",
        },
        {
            0: "The best way to pay for a lovely moment is to enjoy it.",
            1: "Richard Bach",
        },
        {
            0: "You have enemies? Good. That means you've stood up for something, sometime in your life.",
            1: "Winston Churchill",
        },
        {
            0: "Slow down and everything you are chasing will come around and catch you.",
            1: "John De Paola",
        },
        {
            0: "Your worst enemy cannot harm you as much as your own unguarded thoughts.",
            1: "Buddha",
        },
        {
            0: "I always wanted to be somebody, but I should have been more specific.",
            1: "Lily Tomlin",
        },
        {
            0: "Yeah we all shine on, like the moon, and the stars, and the sun.",
            1: "John Lennon",
        },
        {
            0: "Knowledge is a process of piling up facts; wisdom lies in their simplification.",
            1: "Martin Fischer",
        },
        {
            0: "Life is like riding a bicycle. To keep your balance you must keep moving.",
            1: "Albert Einstein",
        },
        {
            0: "We should all be thankful for those people who rekindle the inner spirit.",
            1: "Albert Schweitzer",
        },
        {
            0: "Opportunity is missed by most because it is dressed in overalls and looks like work.",
            1: "Thomas Edison",
        },
        {
            0: "Feeling and longing are the motive forces behind all human endeavor and human creations.",
            1: "Albert Einstein",
        },
        {
            0: "In the end we retain from our studies only that which we practically apply.",
            1: "Johann Wolfgang von Goethe",
        },
        {
            0: "If you correct your mind, the rest of your life will fall into place.",
            1: "Lao Tzu",
        },
        {
            0: "The world makes way for the man who knows where he is going.",
            1: "Ralph Emerson",
        },
        {
            0: "When your desires are strong enough you will appear to possess superhuman powers to achieve.",
            1: "Napoleon Hill",
        },
        {
            0: "Patience and perseverance have a magical effect before which difficulties disappear and obstacles vanish.",
            1: "John Adams",
        },
        {
            0: "I cannot make my days longer so I strive to make them better.",
            1: "Henry David Thoreau",
        },
        {
            0: "Tension is who you think you should be. Relaxation is who you are.",
            1: "Chinese proverb",
        },
        {
            0: "Never bend your head. Always hold it high. Look the world right in the eye.",
            1: "Helen Keller",
        },
        {
            0: "One who gains strength by overcoming obstacles possesses the only strength which can overcome adversity.",
            1: "Albert Schweitzer",
        },
        {
            0: "We cannot do everything at once, but we can do something at once.",
            1: "Calvin Coolidge",
        },
        {
            0: "You have to do your own growing no matter how tall your grandfather was.",
            1: "Abraham Lincoln",
        },
        {
            0: "Invent your world. Surround yourself with people, color, sounds, and work that nourish you.",
            1: "Unknown",
        },
        {
            0: "It is fatal to enter any war without the will to win it.",
            1: "General Douglas MacArthur",
        },
        {
            0: "Be what you are. This is the first step toward becoming better than you are.",
            1: "Julius Charles Hare",
        },
        {
            0: "There is nothing in a caterpillar that tells you it's going to be a butterfly.",
            1: "Buckminster Fuller",
        },
        {
            0: "Love and compassion open our own inner life, reducing stress, distrust and loneliness.",
            1: "Dalai Lama",
        },
        {
            0: "Ideals are an imaginative understanding of that which is desirable in that which is possible.",
            1: "Walter Lippmann",
        },
        {
            0: "The superior man is satisfied and composed; the mean man is always full of distress.",
            1: "Confucius",
        },
        {
            0: "If you spend too much time thinking about a thing, you'll never get it done.",
            1: "Bruce Lee",
        },
        {
            0: "The way is not in the sky. The way is in the heart.",
            1: "Buddha",
        },
        {
            0: "Most people are about as happy as they make up their minds to be",
            1: "Abraham Lincoln",
        },
        {
            0: "Three things cannot be long hidden: the sun, the moon, and the truth.",
            1: "Buddha",
        },
        {
            0: "More often than not, anger is actually an indication of weakness rather than of strength.",
            1: "Dalai Lama",
        },
        {
            0: "Before you put on a frown, make absolutely sure there are no smiles available.",
            1: "Jim Beggs",
        },
        {
            0: "A man of ability and the desire to accomplish something can do anything.",
            1: "Donald Kircher",
        },
        {
            0: "You, yourself, as much as anybody in the entire universe, deserve your love and affection.",
            1: "Buddha",
        },
        {
            0: "It is not uncommon for people to spend their whole life waiting to start living.",
            1: "Eckhart Tolle",
        },
        {
            0: "Don't be afraid to go out on a limb. That's where the fruit is.",
            1: "H. Jackson Browne",
        },
        {
            0: "Wicked people are always surprised to find ability in those that are good.",
            1: "Marquis Vauvenargues",
        },
        {
            0: "Life is so constructed that an event does not, cannot, will not, match the expectation.",
            1: "Charlotte Bronte",
        },
        {
            0: "If you change the way you look at things, the things you look at change.",
            1: "Wayne Dyer",
        },
        {
            0: "No man can succeed in a line of endeavor which he does not like.",
            1: "Napoleon Hill",
        },
        {
            0: "You will not be punished for your anger, you will be punished by your anger.",
            1: "Buddha",
        },
        {
            0: "Don't judge each day by the harvest you reap but by the seeds you plant.",
            1: "Robert Stevenson",
        },
        {
            0: "They say that time changes things, but you actually have to change them yourself.",
            1: "Andy Warhol",
        },
        {
            0: "Never apologize for showing feelings. When you do so, you apologize for the truth.",
            1: "Benjamin Disraeli",
        },
        {
            0: "The truth you believe and cling to makes you unavailable to hear anything new.",
            1: "Pema Chodron",
        },
        {
            0: "Adversity has the effect of eliciting talents, which in prosperous circumstances would have lain dormant.",
            1: "Horace",
        },
        {
            0: "If you spend your whole life waiting for the storm, you'll never enjoy the sunshine.",
            1: "Morris West",
        },
        {
            0: "The only limit to our realization of tomorrow will be our doubts of today.",
            1: "Franklin Roosevelt",
        },
        {
            0: "Every action of our lives touches on some chord that will vibrate in eternity.",
            1: "Edwin Chapin",
        },
        {
            0: "Shoot for the moon. Even if you miss, you'll land among the stars.",
            1: "Les Brown",
        },
        {
            0: "It does not matter how slowly you go as long as you do not stop.",
            1: "Confucius",
        },
        {
            0: "Every day may not be good, but there's something good in every day.",
            1: "Unknown",
        },
        {
            0: "Most folks are about as happy as they make up their minds to be.",
            1: "Abraham Lincoln",
        },
        {
            0: "If you would take, you must first give, this is the beginning of intelligence.",
            1: "Lao Tzu",
        },
        {
            0: "Some people think it's holding that makes one strong sometimes it's letting go.",
            1: "Unknown",
        },
        {
            0: "It is on our failures that we base a new and different and better success.",
            1: "Havelock Ellis",
        },
        {
            0: "Quality is never an accident; it is always the result of intelligent effort.",
            1: "John Ruskin",
        },
        {
            0: "To study and not think is a waste. To think and not study is dangerous.",
            1: "Confucius",
        },
        {
            0: "Life is a succession of lessons, which must be lived to be understood.",
            1: "Ralph Emerson",
        },
        {
            0: "Time changes everything except something within us which is always surprised by change.",
            1: "Thomas Hardy",
        },
        {
            0: "You are important enough to ask and you are blessed enough to receive back.",
            1: "Wayne Dyer",
        },
        {
            0: "If you cannot do great things, do small things in a great way.",
            1: "Napoleon Hill",
        },
        {
            0: "If you want your life to be more rewarding, you have to change the way you think.",
            1: "Oprah Winfrey",
        },
        {
            0: "Transformation doesn't take place with a vacuum; instead, it occurs when we are indirectly and directly connected to all those around us.",
            1: "Byron Pulsifer",
        },
        {
            0: "The only difference between your abilities and others is the ability to put yourself in their shoes and actually try.",
            1: "Leonardo Ruiz",
        },
        {
            0: "The free man is he who does not fear to go to the end of his thought.",
            1: "Leon Blum",
        },
        {
            0: "Great are they who see that spiritual is stronger than any material force, that thoughts rule the world.",
            1: "Ralph Emerson",
        },
        {
            0: "A life spent making mistakes is not only more honourable but more useful than a life spent in doing nothing.",
            1: "Bernard Shaw",
        },
        {
            0: "The wise man does not lay up his own treasures. The more he gives to others, the more he has for his own.",
            1: "Lao Tzu",
        },
        {
            0: "Don't leave a stone unturned. It's always something, to know you have done the most you could.",
            1: "Charles Dickens",
        },
        {
            0: "By going beyond your own problems and taking care of others, you gain inner strength, self-confidence, courage, and a greater sense of calm.",
            1: "Dalai Lama",
        },
        {
            0: "We come to love not by finding a perfect person, but by learning to see an imperfect person perfectly.",
            1: "Sam Keen",
        },
        {
            0: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
            1: "Walt Emerson",
        },
        {
            0: "There are things so deep and complex that only intuition can reach it in our stage of development as human beings.",
            1: "John Astin",
        },
        {
            0: "A little more persistence, a little more effort, and what seemed hopeless failure may turn to glorious success.",
            1: "Elbert Hubbard",
        },
        {
            0: "There is no retirement for an artist, it's your way of living so there is no end to it.",
            1: "Henry Moore",
        },
        {
            0: "I will not be concerned at other men is not knowing me;I will be concerned at my own want of ability.",
            1: "Confucius",
        },
        {
            0: "Why worry about things you cannot control when you can keep yourself busy controlling the things that depend on you?",
            1: "Unknown",
        },
        {
            0: "When you are content to be simply yourself and don't compare or compete, everybody will respect you.",
            1: "Laozi",
        },
        {
            0: "Be not afraid of greatness: some are born great, some achieve greatness, and some have greatness thrust upon them.",
            1: "William Shakespeare",
        },
        {
            0: "Success means having the courage, the determination, and the will to become the person you believe you were meant to be.",
            1: "George Sheehan",
        },
        {
            0: "Do you want to know who you are? Don't ask. Act! Action will delineate and define you.",
            1: "Thomas Jefferson",
        },
        {
            0: "It is only with the heart that one can see rightly, what is essential is invisible to the eye.",
            1: "Antoine de Saint-Exupery",
        },
        {
            0: "Let us be grateful to people who make us happy; they are the charming gardeners who make our souls blossom.",
            1: "Marcel Proust",
        },
        {
            0: "Make the best use of what is in your power, and take the rest as it happens.",
            1: "Epictetus",
        },
        {
            0: "The thoughts we choose to think are the tools we use to paint the canvas of our lives.",
            1: "Louise Hay",
        },
        {
            0: "No matter how carefully you plan your goals they will never be more that pipe dreams unless you pursue them with gusto.",
            1: "W. Clement Stone",
        },
        {
            0: "The reason most goals are not achieved is that we spend our time doing second things first.",
            1: "Robert McKain",
        },
        {
            0: "If your actions inspire others to dream more, learn more, do more and become more, you are a leader.",
            1: "John Quincy Adams",
        },
        {
            0: "I'm a great believer in luck and I find the harder I work, the more I have of it.",
            1: "Thomas Jefferson",
        },
        {
            0: "Do not waste yourself in rejection, nor bark against the bad, but chant the beauty of the good.",
            1: "Ralph Emerson",
        },
        {
            0: "The person born with a talent they are meant to use will find their greatest happiness in using it.",
            1: "Johann Wolfgang von Goethe",
        },
        {
            0: "Good people are good because they've come to wisdom through failure. We get very little wisdom from success, you know.",
            1: "William Saroyan",
        },
        {
            0: "Your destiny isn't just fate; it is how you use your own developed abilities to get what you want.",
            1: "Byron Pulsifer",
        },
        {
            0: "Iron rusts from disuse; water loses its purity from stagnation... even so does inaction sap the vigour of the mind.",
            1: "Leonardo da Vinci",
        },
        {
            0: "A subtle thought that is in error may yet give rise to fruitful inquiry that can establish truths of great value.",
            1: "Isaac Asimov",
        },
        {
            0: "Be glad of life because it gives you the chance to love, to work, to play, and to look up at the stars.",
            1: "Henry Van Dyke",
        },
        {
            0: "You got to be careful if you don't know where you're going, because you might not get there.",
            1: "Yogi Berra",
        },
        {
            0: "You can tell whether a man is clever by his answers. You can tell whether a man is wise by his questions.",
            1: "Naguib Mahfouz",
        },
        {
            0: "Life is a gift, and it offers us the privilege, opportunity, and responsibility to give something back by becoming more",
            1: "Anthony Robbins",
        },
        {
            0: "You can't let praise or criticism get to you. It's a weakness to get caught up in either one.",
            1: "John Wooden",
        },
        {
            0: "I will love the light for it shows me the way, yet I will endure the darkness because it shows me the stars.",
            1: "Og Mandino",
        },
        {
            0: "Our doubts are traitors and make us lose the good we often might win, by fearing to attempt.",
            1: "Jane Addams",
        },
        {
            0: "By nature man hates change; seldom will he quit his old home till it has actually fallen around his ears.",
            1: "Thomas Carlyle",
        },
        {
            0: "Until you value yourself, you won't value your time. Until you value your time, you won't do anything with it.",
            1: "M. Scott Peck",
        },
        {
            0: "The minute you settle for less than you deserve, you get even less than you settled for.",
            1: "Maureen Dowd",
        },
        {
            0: "The highest stage in moral ure at which we can arrive is when we recognize that we ought to control our thoughts.",
            1: "Charles Darwin",
        },
        {
            0: "It is better to take many small steps in the right direction than to make a great leap forward only to stumble backward.",
            1: "Unknown",
        },
        {
            0: "If we have a positive mental attitude, then even when surrounded by hostility, we shall not lack inner peace.",
            1: "Dalai Lama",
        },
        {
            0: "There is only one success to be able to spend your life in your own way.",
            1: "Christopher Morley",
        },
        {
            0: "Promises are the uniquely human way of ordering the future, making it predictable and reliable to the extent that this is humanly possible.",
            1: "Hannah Arendt",
        },
        {
            0: "Appreciation is the highest form of prayer, for it acknowledges the presence of good wherever you shine the light of your thankful thoughts.",
            1: "Alan Cohen",
        },
        {
            0: "There is only one corner of the universe you can be certain of improving, and that's your own self.",
            1: "Aldous Huxley",
        },
        {
            0: "You're not obligated to win. You're obligated to keep trying to do the best you can every day.",
            1: "Marian Edelman",
        },
        {
            0: "Everyone can taste success when the going is easy, but few know how to taste victory when times get tough.",
            1: "Byron Pulsifer",
        },
        {
            0: "Deep listening is miraculous for both listener and speaker.When someone receives us with open-hearted, non-judging, intensely interested listening, our spirits expand.",
            1: "Sue Patton Thoele",
        },
        {
            0: "You may be deceived if you trust too much, but you will live in torment if you don't trust enough.",
            1: "Frank Crane",
        },
        {
            0: "Great indeed is the sublimity of the Creative, to which all beings owe their beginning and which permeates all heaven.",
            1: "Lao Tzu",
        },
        {
            0: "All that is necessary is to accept the impossible, do without the indispensable, and bear the intolerable.",
            1: "Kathleen Norris",
        },
        {
            0: "Choose a job you love, and you will never have to work a day in your life.",
            1: "Confucius",
        },
        {
            0: "You cannot find yourself by going into the past. You can find yourself by coming into the present.",
            1: "Eckhart Tolle",
        },
        {
            0: "All our talents increase in the using, and the every faculty, both good and bad, strengthen by exercise.",
            1: "Anne Bronte",
        },
        {
            0: "In order to live free and happily you must sacrifice boredom. It is not always an easy sacrifice.",
            1: "Richard Bach",
        },
        {
            0: "The fox has many tricks. The hedgehog has but one. But that is the best of all.",
            1: "Desiderius Erasmus",
        },
        {
            0: "Of course there is no formula for success except perhaps an unconditional acceptance of life and what it brings.",
            1: "Arthur Rubinstein",
        },
        {
            0: "Let me tell you the secret that has led me to my goal: my strength lies solely in my tenacity",
            1: "Louis Pasteur",
        },
        {
            0: "Something opens our wings. Something makes boredom and hurt disappear. Someone fills the cup in front of us: We taste only sacredness.",
            1: "Rumi",
        },
        {
            0: "We must never forget that it is through our actions, words, and thoughts that we have a choice.",
            1: "Sogyal Rinpoche",
        },
        {
            0: "We see things not as they are, but as we are. Our perception is shaped by our previous experiences.",
            1: "Dennis Kimbro",
        },
        {
            0: "True silence is the rest of the mind; it is to the spirit what sleep is to the body, nourishment and refreshment.",
            1: "William Penn",
        },
        {
            0: "All our knowledge begins with the senses, proceeds then to the understanding, and ends with reason. There is nothing higher than reason.",
            1: "Immanuel Kant",
        },
        {
            0: "The thought manifests as the word. The word manifests as the deed. The deed develops into habit. And the habit hardens into character.",
            1: "Buddha",
        },
        {
            0: "As the rest of the world is walking out the door, your best friends are the ones walking in.",
            1: "Unknown",
        },
        {
            0: "Patience is a virtue but you will never ever accomplish anything if you don't exercise action over patience.",
            1: "Byron Pulsifer",
        },
        {
            0: "Any of us can achieve virtue, if by virtue we merely mean the avoidance of the vices that do not attract us.",
            1: "Robert Lynd",
        },
        {
            0: "If the single man plant himself indomitably on his instincts, and there abide, the huge world will come round to him.",
            1: "Ralph Emerson",
        },
        {
            0: "Money was never a big motivation for me, except as a way to keep score. The real excitement is playing the game.",
            1: "Donald Trump",
        },
        {
            0: "Friendship with oneself is all important because without it one cannot be friends with anybody else in the world.",
            1: "Eleanor Roosevelt",
        },
        {
            0: "Peace is not something you wish for. It's something you make, something you do, something you are, and something you give away.",
            1: "Robert Fulghum",
        },
        {
            0: "A wise man can learn more from a foolish question than a fool can learn from a wise answer.",
            1: "Bruce Lee",
        },
        {
            0: "Every man takes the limits of his own field of vision for the limits of the world.",
            1: "Arthur Schopenhauer",
        },
        {
            0: "One does not discover new lands without consenting to lose sight of the shore for a very long time.",
            1: "Andre Gide",
        },
        {
            0: "What is new in the world? Nothing. What is old in the world? Nothing. Everything has always been and will always be.",
            1: "Sai Baba",
        },
        {
            0: "Genuine love should first be directed at oneself if we do not love ourselves, how can we love others?",
            1: "Dalai Lama",
        },
        {
            0: "Life is like a sewer. What you get out of it depends on what you put into it.",
            1: "Tom Lehrer",
        },
        {
            0: "Notice that the stiffest tree is most easily cracked, while the bamboo or willow survives by bending with the wind.",
            1: "Bruce Lee",
        },
        {
            0: "Learn all you can from the mistakes of others. You won't have time to make them all yourself.",
            1: "Alfred Sheinwold",
        },
        {
            0: "Judge nothing, you will be happy. Forgive everything, you will be happier. Love everything, you will be happiest.",
            1: "Sri Chinmoy",
        },
        {
            0: "People are so constituted that everybody would rather undertake what they see others do, whether they have an aptitude for it or not.",
            1: "Johann Wolfgang von Goethe",
        },
        {
            0: "We are either progressing or retrograding all the while. There is no such thing as remaining stationary in this life.",
            1: "James Freeman Clarke",
        },
        {
            0: "The possession of knowledge does not kill the sense of wonder and mystery. There is always more mystery.",
            1: "Anais Nin",
        },
        {
            0: "Everything that happens happens as it should, and if you observe carefully, you will find this to be so.",
            1: "Marcus Aurelius",
        },
        {
            0: "What we think determines what happens to us, so if we want to change our lives, we need to stretch our minds.",
            1: "Wayne Dyer",
        },
        {
            0: "In a controversy the instant we feel anger we have already ceased striving for the truth, and have begun striving for ourselves.",
            1: "Buddha",
        },
        {
            0: "It is the greatest of all mistakes to do nothing because you can only do little do what you can.",
            1: "Sydney Smith",
        },
        {
            0: "When you see a man of worth, think of how you may emulate him. When you see one who is unworthy, examine yourself.",
            1: "Confucius",
        },
        {
            0: "Aerodynamically the bumblebee shouldn't be able to fly, but the bumblebee doesn't know that so it goes on flying anyway.",
            1: "Mary Kay Ash",
        },
        {
            0: "Those who try to do something and fail are infinitely better than those who try nothing and succeed.",
            1: "Lloyd Jones",
        },
        {
            0: "Snowflakes are one of natures most fragile things, but just look what they can do when they stick together.",
            1: "Vista Kelly",
        },
        {
            0: "The first step to getting the things you want out of life is this: decide what you want.",
            1: "Ben Stein",
        },
        {
            0: "Why compare yourself with others? No one in the entire world can do a better job of being you than you.",
            1: "Unknown",
        },
        {
            0: "Experience is not what happens to a man. It is what a man does with what happens to him.",
            1: "Aldous Huxley",
        },
        {
            0: "A good teacher is like a candle it consumes itself to light the way for others.",
            1: "Unknown",
        },
        {
            0: "The only thing to do with good advice is to pass it on. It is never of any use to oneself.",
            1: "Oscar Wilde",
        },
        {
            0: "Life is not measured by the breaths we take, but by the moments that take our breath.",
            1: "Unknown",
        },
        {
            0: "The smallest flower is a thought, a life answering to some feature of the Great Whole, of whom they have a persistent intuition.",
            1: "Honore de Balzac",
        },
        {
            0: "Consider how hard it is to change yourself and you'll understand what little chance you have in trying to change others.",
            1: "Jacob Braude",
        },
        {
            0: "If you'll not settle for anything less than your best, you will be amazed at what you can accomplish in your lives.",
            1: "Vince Lombardi",
        },
        {
            0: "What lies behind us and what lies before us are small matters compared to what lies within us.",
            1: "Oliver Holmes",
        },
        {
            0: "With the realization of ones own potential and self-confidence in ones ability, one can build a better world.",
            1: "Dalai Lama",
        },
        {
            0: "There is nothing like returning to a place that remains unchanged to find the ways in which you yourself have altered.",
            1: "Nelson Mandela",
        },
        {
            0: "Forget about all the reasons why something may not work. You only need to find one good reason why it will.",
            1: "Robert Anthony",
        },
        {
            0: "It is the mark of an educated mind to be able to entertain a thought without accepting it.",
            1: "Aristotle",
        },
        {
            0: "Love is never lost. If not reciprocated, it will flow back and soften and purify the heart.",
            1: "Washington Irving",
        },
        {
            0: "We all live with the objective of being happy; our lives are all different and yet the same.",
            1: "Anne Frank",
        },
        {
            0: "Many people think of prosperity that concerns money only to forget that true prosperity is of the mind.",
            1: "Byron Pulsifer",
        },
        {
            0: "To be beautiful means to be yourself. You do not need to be accepted by others. You need to accept yourself.",
            1: "Thich Nhat Hanh",
        },
        {
            0: "Do not overrate what you have received, nor envy others. He who envies others does not obtain peace of mind.",
            1: "Buddha",
        },
        {
            0: "It is very easy to forgive others their mistakes; it takes more grit to forgive them for having witnessed your own.",
            1: "Jessamyn West",
        },
        {
            0: "Bodily exercise, when compulsory, does no harm to the body; but knowledge which is acquired under compulsion obtains no hold on the mind.",
            1: "Plato",
        },
        {
            0: "Always be yourself, express yourself, have faith in yourself, do not go out and look for a successful personality and duplicate it.",
            1: "Bruce Lee",
        },
        {
            0: "Let us revere, let us worship, but erect and open-eyed, the highest, not the lowest; the future, not the past!",
            1: "Charlotte Gilman",
        },
        {
            0: "Every time you smile at someone, it is an action of love, a gift to that person, a beautiful thing.",
            1: "Mother Teresa",
        },
        {
            0: "Silences make the real conversations between friends. Not the saying but the never needing to say is what counts.",
            1: "Margaret Runbeck",
        },
        {
            0: "The key to transforming our hearts and minds is to have an understanding of how our thoughts and emotions work.",
            1: "Dalai Lama",
        },
        {
            0: "If you must tell me your opinions, tell me what you believe in. I have plenty of douts of my own.",
            1: "Johann Wolfgang von Goethe",
        },
        {
            0: "Chance is always powerful. Let your hook be always cast; in the pool where you least expect it, there will be a fish.",
            1: "Ovid",
        },
        {
            0: "I seek constantly to improve my manners and graces, for they are the sugar to which all are attracted.",
            1: "Og Mandino",
        },
        {
            0: "We never understand how little we need in this world until we know the loss of it.",
            1: "James Barrie",
        },
        {
            0: "The real measure of your wealth is how much youd be worth if you lost all your money.",
            1: "Unknown",
        },
        {
            0: "To keep the body in good health is a duty... otherwise we shall not be able to keep our mind strong and clear.",
            1: "Buddha",
        },
        {
            0: "Take no thought of who is right or wrong or who is better than. Be not for or against.",
            1: "Bruce Lee",
        },
        {
            0: "I am a man of fixed and unbending principles, the first of which is to be flexible at all times.",
            1: "Everett Dirksen",
        },
        {
            0: "Today, give a stranger a smile without waiting for it may be the joy they need to have a great day.",
            1: "Byron Pulsifer",
        },
        {
            0: "The moment one gives close attention to anything, even a blade of grass, it becomes a mysterious, awesome, indescribably magnificent world in itself.",
            1: "Henry Miller",
        },
        {
            0: "At the center of your being you have the answer; you know who you are and you know what you want.",
            1: "Lao Tzu",
        },
        {
            0: "How wonderful that we have met with a paradox. Now we have some hope of making progress.",
            1: "Niels Bohr",
        },
        {
            0: "Everyone is a genius at least once a year. A real genius has his original ideas closer together.",
            1: "Georg Lichtenberg",
        },
        {
            0: "Dreams pass into the reality of action. From the actions stems the dream again; and this interdependence produces the highest form of living.",
            1: "Anais Nin",
        },
        {
            0: "Without leaps of imagination, or dreaming, we lose the excitement of possibilities. Dreaming, after all, is a form of planning.",
            1: "Gloria Steinem",
        },
        {
            0: "Sadness may be part of life but there is no need to let it dominate your entire life.",
            1: "Byron Pulsifer",
        },
        {
            0: "Keeping a little ahead of conditions is one of the secrets of business, the trailer seldom goes far.",
            1: "Charles Schwab",
        },
        {
            0: "Nature gave us one tongue and two ears so we could hear twice as much as we speak.",
            1: "Epictetus",
        },
        {
            0: "Don't wait for your feelings to change to take the action. Take the action and your feelings will change.",
            1: "Barbara Baron",
        },
        {
            0: "You are always free to change your mind and choose a different future, or a different past.",
            1: "Richard Bach",
        },
        {
            0: "You were not born a winner, and you were not born a loser. You are what you make yourself be.",
            1: "Lou Holtz",
        },
        {
            0: "Cherish your visions and your dreams as they are the children of your soul, the blueprints of your ultimate achievements.",
            1: "Napoleon Hill",
        },
        {
            0: "Cherish your visions and your dreams as they are the children of your soul; the blueprints of your ultimate achievements.",
            1: "Napoleon Hill",
        },
        {
            0: "To be what we are, and to become what we are capable of becoming, is the only end of life.",
            1: "Robert Stevenson",
        },
        {
            0: "The road leading to a goal does not separate you from the destination; it is essentially a part of it.",
            1: "Charles DeLint",
        },
        {
            0: "Take things as they are. Punch when you have to punch. Kick when you have to kick.",
            1: "Bruce Lee",
        },
        {
            0: "I believe that a simple and unassuming manner of life is best for everyone, best both for the body and the mind.",
            1: "Albert Einstein",
        },
        {
            0: "Though no one can go back and make a brand new start, anyone can start from now and make a brand new ending.",
            1: "Unknown",
        },
        {
            0: "Mind is everything: muscle, pieces of rubber. All that I am, I am because of my mind.",
            1: "Paavo Nurmi",
        },
        {
            0: "How wonderful it is that nobody need wait a single moment before starting to improve the world.",
            1: "Anne Frank",
        },
        {
            0: "A friend is someone who understands your past, believes in your future, and accepts you just the way you are.",
            1: "Unknown",
        },
        {
            0: "It is one of the blessings of old friends that you can afford to be stupid with them.",
            1: "Ralph Emerson",
        },
        {
            0: "He that never changes his opinions, never corrects his mistakes, and will never be wiser on the morrow than he is today.",
            1: "Tryon Edwards",
        },
        {
            0: "Give me six hours to chop down a tree and I will spend the first four sharpening the axe.",
            1: "Abraham Lincoln",
        },
        {
            0: "One must be fond of people and trust them if one is not to make a mess of life.",
            1: "E. M. Forster",
        },
        {
            0: "We cannot change our memories, but we can change their meaning and the power they have over us.",
            1: "David Seamans",
        },
        {
            0: "Being in humaneness is good. If we select other goodness and thus are far apart from humaneness, how can we be the wise?",
            1: "Confucius",
        },
        {
            0: "To give hope to someone occurs when you teach them how to use the tools to do it for themselves.",
            1: "Byron Pulsifer",
        },
        {
            0: "Id rather regret the things that I have done than the things that I have not done.",
            1: "Lucille Ball",
        },
        {
            0: "The past has no power to stop you from being present now. Only your grievance about the past can do that.",
            1: "Eckhart Tolle",
        },
        {
            0: "If the stars should appear but one night every thousand years how man would marvel and adore.",
            1: "Ralph Emerson",
        },
        {
            0: "There are two kinds of failures: those who thought and never did, and those who did and never thought.",
            1: "Laurence J. Peter",
        },
        {
            0: "I'm not interested in age. People who tell me their age are silly. You're as old as you feel.",
            1: "Elizabeth Arden",
        },
        {
            0: "I find hope in the darkest of days, and focus in the brightest. I do not judge the universe.",
            1: "Dalai Lama",
        },
        {
            0: "When it is obvious that the goals cannot be reached, don't adjust the goals, adjust the action steps.",
            1: "Confucius",
        },
        {
            0: "Our virtues and our failings are inseparable, like force and matter. When they separate, man is no more.",
            1: "Nikola Tesla",
        },
        {
            0: "Blessed is the person who is too busy to worry in the daytime, and too sleepy to worry at night.",
            1: "Leo Aikman",
        },
        {
            0: "He can who thinks he can, and he can't who thinks he can't. This is an inexorable, indisputable law.",
            1: "Pablo Picasso",
        },
        {
            0: "These days people seek knowledge, not wisdom. Knowledge is of the past, wisdom is of the future.",
            1: "Vernon Cooper",
        },
        {
            0: "One secret of success in life is for a man to be ready for his opportunity when it comes.",
            1: "Benjamin Disraeli",
        },
        {
            0: "People take different roads seeking fulfilment and happiness. Just because theyre not on your road doesn't mean they've gotten lost.",
            1: "Dalai Lama",
        },
        {
            0: "The shoe that fits one person pinches another; there is no recipe for living that suits all cases.",
            1: "Carl Jung",
        },
        {
            0: "There are only two mistakes one can make along the road to truth; not going all the way, and not starting.",
            1: "Buddha",
        },
        {
            0: "Very little is needed to make a happy life; it is all within yourself, in your way of thinking.",
            1: "Marcus Aurelius",
        },
        {
            0: "Giving up doesn't always mean you are weak. Sometimes it means that you are strong enough to let go.",
            1: "Unknown",
        },
        {
            0: "Treat people as if they were what they ought to be and you help them to become what they are capable of being.",
            1: "Johann Wolfgang von Goethe",
        },
        {
            0: "The most precious gift we can offer anyone is our attention. When mindfulness embraces those we love, they will bloom like flowers.",
            1: "Thich Nhat Hanh",
        },
        {
            0: "If you focus on results, you will never change. If you focus on change, you will get results.",
            1: "Jack Dixon",
        },
        {
            0: "I would maintain that thanks are the highest form of thought, and that gratitude is happiness doubled by wonder.",
            1: "G. K. Chesterton",
        },
        {
            0: "There are two primary choices in life: to accept conditions as they exist, or accept the responsibility for changing them.",
            1: "Denis Waitley",
        },
        {
            0: "All difficult things have their origin in that which is easy, and great things in that which is small.",
            1: "Lao-Tzu",
        },
        {
            0: "You can be what you want to be. You have the power within and we will help you always.",
            1: "Byron Pulsifer",
        },
        {
            0: "To speak gratitude is courteous and pleasant, to enact gratitude is generous and noble, but to live gratitude is to touch Heaven.",
            1: "Johannes Gaertner",
        },
        {
            0: "Wisdom is the reward you get for a lifetime of listening when you'd have preferred to talk.",
            1: "Doug Larson",
        },
        {
            0: "The greatest pleasure I know is to do a good action by stealth, and to have it found out by accident.",
            1: "Charles Lamb",
        },
        {
            0: "When one tugs at a single thing in nature, he finds it attached to the rest of the world.",
            1: "John Muir",
        },
        {
            0: "Courage is what it takes to stand up and speak; courage is also what it takes to sit down and listen.",
            1: "Winston Churchill",
        },
        {
            0: "The most beautiful things in the world cannot be seen or even touched. They must be felt with the heart.",
            1: "Helen Keller",
        },
        {
            0: "To live a pure unselfish life, one must count nothing as ones own in the midst of abundance.",
            1: "Buddha",
        },
        {
            0: "Many of life's failures are people who did not realize how close they were to success when they gave up.",
            1: "Thomas Edison",
        },
        {
            0: "When we seek to discover the best in others, we somehow bring out the best in ourselves.",
            1: "William Ward",
        },
        {
            0: "If you accept the expectations of others, especially negative ones, then you never will change the outcome.",
            1: "Michael Jordan",
        },
        {
            0: "A man may fulfil the object of his existence by asking a question he cannot answer, and attempting a task he cannot achieve.",
            1: "Oliver Holmes",
        },
        {
            0: "I am not bothered by the fact that I am unknown. I am bothered when I do not know others.",
            1: "Confucius",
        },
        {
            0: "He is a wise man who does not grieve for the things which he has not, but rejoices for those which he has.",
            1: "Epictetus",
        },
        {
            0: "I am always doing that which I cannot do, in order that I may learn how to do it.",
            1: "Pablo Picasso",
        },
        {
            0: "If you're walking down the right path and you're willing to keep walking, eventually you'll make progress.",
            1: "Barack Obama",
        },
        {
            0: "The world is round and the place which may seem like the end may also be the beginning.",
            1: "Ivy Baker Priest",
        },
        {
            0: "Never miss an opportunity to make others happy, even if you have to leave them alone in order to do it.",
            1: "Unknown",
        },
        {
            0: "Give it all you've got because you never know if there's going to be a next time.",
            1: "Danielle Ingrum",
        },
        {
            0: "You have to take it as it happens, but you should try to make it happen the way you want to take it.",
            1: "Old German proverb",
        },
        {
            0: "Nothing is predestined: The obstacles of your past can become the gateways that lead to new beginnings.",
            1: "Ralph Blum",
        },
        {
            0: "I'm not in this world to live up to your expectations and you're not in this world to live up to mine.",
            1: "Bruce Lee",
        },
        {
            0: "Sometimes your joy is the source of your smile, but sometimes your smile can be the source of your joy.",
            1: "Thich Nhat Hanh",
        },
        {
            0: "I can't imagine a person becoming a success who doesn't give this game of life everything hes got.",
            1: "Walter Cronkite",
        },
        {
            0: "The greatest way to live with honor in this world is to be what we pretend to be.",
            1: "Socrates",
        },
        {
            0: "The conditions of conquest are always easy. We have but to toil awhile, endure awhile, believe always, and never turn back.",
            1: "Seneca",
        },
        {
            0: "The grand essentials of happiness are: something to do, something to love, and something to hope for.",
            1: "Chalmers",
        },
        {
            0: "By living deeply in the present moment we can understand the past better and we can prepare for a better future.",
            1: "Thich Nhat Hanh",
        },
        {
            0: "Do not be too timid and squeamish about your reactions. All life is an experiment. The more experiments you make the better.",
            1: "Ralph Emerson",
        },
        {
            0: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
            1: "Ralph Emerson",
        },
        {
            0: "There is no duty we so underrate as the duty of being happy. By being happy we sow anonymous benefits upon the world.",
            1: "Robert Louis Stevenson",
        },
        {
            0: "Edison failed 10,000 times before he made the electric light. Do not be discouraged if you fail a few times.",
            1: "Napoleon Hill",
        },
        {
            0: "Yesterday is history. Tomorrow is a mystery. And today? Today is a gift that's why they call it the present.",
            1: "Unknown",
        },
        {
            0: "The only way to tell the truth is to speak with kindness. Only the words of a loving man can be heard.",
            1: "Henry Thoreau",
        },
        {
            0: "The greatest good you can do for another is not just to share your riches but to reveal to him his own.",
            1: "Benjamin Disraeli",
        },
        {
            0: "You can only grow if you're willing to feel awkward and uncomfortable when you try something new.",
            1: "Brian Tracy",
        },
        {
            0: "To free us from the expectations of others, to give us back to ourselves there lies the great, singular power of self-respect.",
            1: "Joan Didion",
        },
        {
            0: "It is more important to know where you are going than to get there quickly. Do not mistake activity for achievement.",
            1: "Mabel Newcomber",
        },
        {
            0: "When you don't know what you believe, everything becomes an argument. Everything is debatable. But when you stand for something, decisions are obvious.",
            1: "Unknown",
        },
        {
            0: "Intuition is the supra-logic that cuts out all the routine processes of thought and leaps straight from the problem to the answer.",
            1: "Robert Graves",
        },
        {
            0: "The thing always happens that you really believe in; and the belief in a thing makes it happen.",
            1: "Frank Wright",
        },
        {
            0: "A true friend is the most precious of all possessions and the one we take the least thought about acquiring.",
            1: "Francois de La Rochefoucauld",
        },
        {
            0: "There is only one way to happiness and that is to cease worrying about things which are beyond the power of our will.",
            1: "Epictetus",
        },
        {
            0: "Appreciation can make a day, even change a life. Your willingness to put it into words is all that is necessary.",
            1: "Margaret Cousins",
        },
        {
            0: "Every sixty seconds you spend angry, upset or mad, is a full minute of happiness you will never get back.",
            1: "Unknown",
        },
        {
            0: "This world, after all our science and sciences, is still a miracle; wonderful, inscrutable, magical and more, to whosoever will think of it.",
            1: "Thomas Carlyle",
        },
        {
            0: "Every great mistake has a halfway moment, a split second when it can be recalled and perhaps remedied.",
            1: "Pearl Buck",
        },
        {
            0: "You can adopt the attitude there is nothing you can do, or you can see the challenge as your call to action.",
            1: "Catherine Pulsifer",
        },
        {
            0: "The happiness of a man in this life does not consist in the absence but in the mastery of his passions.",
            1: "Alfred Tennyson",
        },
        {
            0: "Never doubt that a small group of thoughtful, committed people can change the world. Indeed. It is the only thing that ever has.",
            1: "Margaret Mead",
        },
        {
            0: "Let your hook always be cast; in the pool where you least expect it, there will be a fish.",
            1: "Ovid",
        },
        {
            0: "You get peace of mind not by thinking about it or imagining it, but by quietening and relaxing the restless mind.",
            1: "Remez Sasson",
        },
        {
            0: "Your friends will know you better in the first minute you meet than your acquaintances will know you in a thousand years.",
            1: "Richard Bach",
        },
        {
            0: "When you are content to be simply yourself and don't compare or compete, everybody will respect you.",
            1: "Lao Tzu",
        },
        {
            0: "When you begin to touch your heart or let your heart be touched, you begin to discover that it's bottomless.",
            1: "Pema Chodron",
        },
        {
            0: "If you love someone, set them free. If they come back they're yours; if they don't they never were.",
            1: "Richard Bach",
        },
        {
            0: "Wisdom is knowing what to do next; Skill is knowing how ot do it, and Virtue is doing it.",
            1: "David Jordan",
        },
        {
            0: "Bad things are not the worst things that can happen to us. Nothing is the worst thing that can happen to us!",
            1: "Richard Bach",
        },
        {
            0: "No valid plans for the future can be made by those who have no capacity for living now.",
            1: "Alan Watts",
        },
        {
            0: "The aim of life is self-development. To realize ones nature perfectly that is what each of us is here for.",
            1: "Oscar Wilde",
        },
        {
            0: "To accomplish great things, we must not only act, but also dream; not only plan, but also believe.",
            1: "Anatole France",
        },
        {
            0: "The first requisite for success is the ability to apply your physical and mental energies to one problem incessantly without growing weary.",
            1: "Thomas Edison",
        },
        {
            0: "If we could learn to like ourselves, even a little, maybe our cruelties and angers might melt away.",
            1: "John Steinbeck",
        },
        {
            0: "If we are facing in the right direction, all we have to do is keep on walking.",
            1: "Unknown",
        },
        {
            0: "Remember always that you not only have the right to be an individual, you have an obligation to be one.",
            1: "Eleanor Roosevelt",
        },
        {
            0: "There are two primary choices in life: to accept conditions as they exist, or accept responsibility for changing them.",
            1: "Denis Waitley",
        },
        {
            0: "If you seek truth you will not seek victory by dishonourable means, and if you find truth you will become invincible.",
            1: "Epictetus",
        },
        {
            0: "Through meditation and by giving full attention to one thing at a time, we can learn to direct attention where we choose.",
            1: "Eknath Easwaran",
        },
        {
            0: "We could never learn to be brave and patient if there were only joy in the world.",
            1: "Helen Keller",
        },
        {
            0: "If it is not right do not do it; if it is not true do not say it.",
            1: "Marcus Aurelius",
        },
        {
            0: "The truth of the matter is that you always know the right thing to do. The hard part is doing it.",
            1: "Norman Schwarzkopf",
        },
        {
            0: "Some people thrive on huge, dramatic change. Some people prefer the slow and steady route. Do what's right for you.",
            1: "Julie Morgenstern",
        },
        {
            0: "Man is equally incapable of seeing the nothingness from which he emerges and the infinity in which he is engulfed.",
            1: "Blaise Pascal",
        },
        {
            0: "Arrogance and rudeness are training wheels on the bicycle of life for weak people who cannot keep their balance without them.",
            1: "Laura Teresa Marquez",
        },
        {
            0: "If you are patient in one moment of anger, you will escape one hundred days of sorrow.",
            1: "Chinese proverb",
        },
        {
            0: "When you have got an elephant by the hind legs and he is trying to run away, it's best to let him run.",
            1: "Abraham Lincoln",
        },
        {
            0: "Courage is not about taking risks unknowingly, but putting your own being in front of challenges that others may not be able to.",
            1: "Byron Pulsifer",
        },
        {
            0: "Can miles truly separate you from friends... If you want to be with someone you love, aren't you already there?",
            1: "Richard Bach",
        },
        {
            0: "The poor man is not he who is without a cent, but he who is without a dream.",
            1: "Harry Kemp",
        },
        {
            0: "The greatest good you can do for another is not just share your riches, but reveal to them their own.",
            1: "Benjamin Disraeli",
        },
        {
            0: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
            1: "Buddha",
        },
        {
            0: "Peace of mind is not the absence of conflict from life, but the ability to cope with it.",
            1: "Unknown",
        },
        {
            0: "Face your deficiencies and acknowledge them; but do not let them master you. Let them teach you patience, sweetness, insight.",
            1: "Helen Keller",
        },
        {
            0: "Change is the law of life. And those who look only to the past or present are certain to miss the future.",
            1: "John Kennedy",
        },
        {
            0: "You have power over your mind not outside events. Realize this, and you will find strength.",
            1: "Marcus Aurelius",
        },
        {
            0: "Let me tell you the secret that has led me to my goal: my strength lies solely in my tenacity.",
            1: "Louis Pasteur",
        },
        {
            0: "We are what we think. All that we are arises with our thoughts. With our thoughts, we make the world.",
            1: "Buddha",
        },
        {
            0: "He that respects himself is safe from others; he wears a coat of mail that none can pierce.",
            1: "Henry Longfellow",
        },
        {
            0: "I cannot always control what goes on outside. But I can always control what goes on inside.",
            1: "Wayne Dyer",
        },
        {
            0: "What matters is the value we've created in our lives, the people we've made happy and how much we've grown as people.",
            1: "Daisaku Ikeda",
        },
        {
            0: "When you are offended at any man's fault, turn to yourself and study your own failings. Then you will forget your anger.",
            1: "Epictetus",
        },
        {
            0: "Everyone has been made for some particular work, and the desire for that work has been put in every heart.",
            1: "Rumi",
        },
        {
            0: "Take time to deliberate, but when the time for action has arrived, stop thinking and go in.",
            1: "Napoleon Bonaparte",
        },
        {
            0: "With realization of ones own potential and self-confidence in ones ability, one can build a better world.",
            1: "Dalai Lama",
        },
        {
            0: "Happiness is not in the mere possession of money; it lies in the joy of achievement, in the thrill of creative effort.",
            1: "Franklin Roosevelt",
        },
        {
            0: "You cannot make yourself feel something you do not feel, but you can make yourself do right in spite of your feelings.",
            1: "Pearl Buck",
        },
        {
            0: "Those who are blessed with the most talent don't necessarily outperform everyone else. It's the people with follow-through who excel.",
            1: "Mary Kay Ash",
        },
        {
            0: "Try not to become a man of success, but rather try to become a man of value.",
            1: "Albert Einstein",
        },
        {
            0: "All difficult things have their origin in that which is easy, and great things in that which is small.",
            1: "Lao Tzu",
        },
        {
            0: "Men of perverse opinion do not know the excellence of what is in their hands, till some one dash it from them.",
            1: "Sophocles",
        },
        {
            0: "It is not enough to have a good mind; the main thing is to use it well.",
            1: "Rene Descartes",
        },
        {
            0: "Responsibility is not inherited, it is a choice that everyone needs to make at some point in their life.",
            1: "Byron Pulsifer",
        },
        {
            0: "Never do things others can do and will do, if there are things others cannot do or will not do.",
            1: "Amelia Earhart",
        },
        {
            0: "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
            1: "Jimmy Dean",
        },
        {
            0: "People of mediocre ability sometimes achieve outstanding success because they don't know when to quit. Most men succeed because they are determined to.",
            1: "George Allen",
        },
        {
            0: "A fine quotation is a diamond on the finger of a man of wit, and a pebble in the hand of a fool.",
            1: "Joseph Roux",
        },
        {
            0: "Life's challenges are not supposed to paralyse you, they're supposed to help you discover who you are.",
            1: "Bernice Reagon",
        },
        {
            0: "The greatest way to live with honour in this world is to be what we pretend to be.",
            1: "Socrates",
        },
        {
            0: "To exist is to change, to change is to mature, to mature is to go on creating oneself endlessly.",
            1: "Henri Bergson",
        },
        {
            0: "Try not to become a man of success but rather try to become a man of value.",
            1: "Albert Einstein",
        },
        {
            0: "You can't create in a vacuum. Life gives you the material and dreams can propel new beginnings.",
            1: "Byron Pulsifer",
        },
        {
            0: "Your work is to discover your world and then with all your heart give yourself to it.",
            1: "Buddha",
        },
        {
            0: "The person who lives life fully, glowing with life's energy, is the person who lives a successful life.",
            1: "Daisaku Ikeda",
        },
        {
            0: "Don't turn away from possible futures before you're certain you don't have anything to learn from them.",
            1: "Richard Bach",
        },
        {
            0: "A successful person is one who can lay a firm foundation with the bricks that others throw at him or her.",
            1: "David Brinkley",
        },
        {
            0: "All that we are is the result of what we have thought. The mind is everything. What we think we become.",
            1: "Buddha",
        },
        {
            0: "Work while you have the light. You are responsible for the talent that has been entrusted to you.",
            1: "Henri-Frederic Amiel",
        },
        {
            0: "How far that little candle throws its beams! So shines a good deed in a naughty world.",
            1: "William Shakespeare",
        },
        {
            0: "Every adversity, every failure, every heartache carries with it the seed of an equal or greater benefit.",
            1: "Napoleon Hill",
        },
        {
            0: "It is in your moments of decision that your destiny is shaped.",
            1: "Tony Robbins",
        },
        {
            0: "An obstacle may be either a stepping stone or a stumbling block.",
            1: "Unknown",
        },
        {
            0: "The pain passes, but the beauty remains.",
            1: "Pierre Auguste Renoir",
        },
        {
            0: "All I can say about life is, Oh God, enjoy it!",
            1: "Bob Newhart",
        },
        {
            0: "Creativity comes from trust. Trust your instincts. And never hope more than you work.",
            1: "Rita Mae Brown",
        },
        {
            0: "Your outlook on life is a direct reflection on how much you like yourself.",
            1: "Lululemon",
        },
        {
            0: "I have just three things to teach: simplicity, patience, compassion. These three are your greatest treasures.",
            1: "Lao Tzu",
        },
        {
            0: "You won't skid if you stay in a rut.",
            1: "Kin Hubbard",
        },
        {
            0: "You block your dream when you allow your fear to grow bigger than your faith.",
            1: "Mary Morrissey",
        },
        {
            0: "Happiness depends upon ourselves.",
            1: "Aristotle",
        },
        {
            0: "Wherever a man turns he can find someone who needs him.",
            1: "Albert Schweitzer",
        },
        {
            0: "If one is lucky, a solitary fantasy can totally transform one million realities.",
            1: "Maya Angelou",
        },
        {
            0: "Never idealize others. They will never live up to your expectations.",
            1: "Leo Buscaglia",
        },
        {
            0: "When you realize there is nothing lacking, the whole world belongs to you.",
            1: "Lao Tzu",
        },
        {
            0: "Happiness is not something ready made. It comes from your own actions.",
            1: "Dalai Lama",
        },
        {
            0: "Meaning is not what you start with but what you end up with.",
            1: "Peter Elbow",
        },
        {
            0: "No one has ever become poor by giving.",
            1: "Anne Frank",
        },
        {
            0: "Be faithful in small things because it is in them that your strength lies.",
            1: "Mother Teresa",
        },
        {
            0: "All is flux; nothing stays still.",
            1: "Heraclitus",
        },
        {
            0: "He who is fixed to a star does not change his mind.",
            1: "Leonardo da Vinci",
        },
        {
            0: "He who lives in harmony with himself lives in harmony with the universe.",
            1: "Marcus Aurelius",
        },
        {
            0: "Ignorant men don't know what good they hold in their hands until they've flung it away.",
            1: "Sophocles",
        },
        {
            0: "When the solution is simple, God is answering.",
            1: "Albert Einstein",
        },
        {
            0: "All achievements, all earned riches, have their beginning in an idea.",
            1: "Napoleon Hill",
        },
        {
            0: "Do not turn back when you are just at the goal.",
            1: "Publilius Syrus",
        },
        {
            0: "You can't trust without risk but neither can you live in a cocoon.",
            1: "Byron Pulsifer",
        },
        {
            0: "All perceiving is also thinking, all reasoning is also intuition, all observation is also invention.",
            1: "Rudolf Arnheim",
        },
        {
            0: "Error is discipline through which we advance.",
            1: "Channing",
        },
        {
            0: "The truth is always exciting. Speak it, then. Life is dull without it.",
            1: "Pearl Buck",
        },
        {
            0: "The superior man is modest in his speech, but exceeds in his actions.",
            1: "Confucius",
        },
        {
            0: "The longer we dwell on our misfortunes, the greater is their power to harm us.",
            1: "Voltaire",
        },
        {
            0: "Those who will play with cats must expect to be scratched.",
            1: "Cervantes",
        },
        {
            0: "I've never seen a smiling face that was not beautiful.",
            1: "Unknown",
        },
        {
            0: "In all things of nature there is something of the marvellous.",
            1: "Aristotle",
        },
        {
            0: "The universe is transformation; our life is what our thoughts make it.",
            1: "Marcus Aurelius",
        },
        {
            0: "Memory is the mother of all wisdom.",
            1: "Samuel Johnson",
        },
        {
            0: "Silence is the true friend that never betrays.",
            1: "Confucius",
        },
        {
            0: "You might well remember that nothing can bring you success but yourself.",
            1: "Napoleon Hill",
        },
        {
            0: "Watch the little things; a small leak will sink a great ship.",
            1: "Benjamin Franklin",
        },
        {
            0: "God has given you one face, and you make yourself another.",
            1: "William Shakespeare",
        },
        {
            0: "To be wronged is nothing unless you continue to remember it.",
            1: "Confucius",
        },
        {
            0: "Kindness is the greatest wisdom.",
            1: "Unknown",
        },
        {
            0: "Action will remove the doubts that theory cannot solve.",
            1: "Tehyi Hsieh",
        },
        {
            0: "Don't miss all the beautiful colors of the rainbow looking for that pot of gold.",
            1: "Unknown",
        },
        {
            0: "Your big opportunity may be right where you are now.",
            1: "Napoleon Hill",
        },
        {
            0: "People who say it cannot be done should not interrupt those who are doing it.",
            1: "Chinese proverb",
        },
        {
            0: "The day you decide to do it is your lucky day.",
            1: "Japanese proverb",
        },
        {
            0: "We must not say every mistake is a foolish one.",
            1: "Cicero",
        },
        {
            0: "Accept challenges, so that you may feel the exhilaration of victory.",
            1: "George Patton",
        },
        {
            0: "It is better to understand a little than to misunderstand a lot.",
            1: "Anatole France",
        },
        {
            0: "You don't drown by falling in water. You drown by staying there.",
            1: "Unknown",
        },
        {
            0: "Never be afraid to try, remember... Amateurs built the ark, Professionals built the Titanic.",
            1: "Unknown",
        },
        {
            0: "Correction does much, but encouragement does more.",
            1: "Johann Wolfgang von Goethe",
        },
        {
            0: "Know, first, who you are, and then adorn yourself accordingly.",
            1: "Epictetus",
        },
        {
            0: "The biggest adventure you can ever take is to live the life of your dreams.",
            1: "Oprah Winfrey",
        },
        {
            0: "Life is 10% what happens to you and 90% how you react to it.",
            1: "Charles Swindoll",
        },
        {
            0: "To want to be what one can be is purpose in life.",
            1: "Cynthia Ozick",
        },
        {
            0: "Remember that sometimes not getting what you want is a wonderful stroke of luck.",
            1: "Dalai Lama",
        },
        {
            0: "History will be kind to me for I intend to write it.",
            1: "Winston Churchill",
        },
        {
            0: "Our lives are a sum total of the choices we have made.",
            1: "Wayne Dyer",
        },
        {
            0: "Time stays long enough for anyone who will use it.",
            1: "Leonardo da Vinci",
        },
        {
            0: "You must welcome change as the rule but not as your ruler.",
            1: "Denis Waitley",
        },
        {
            0: "Give whatever you are doing and whoever you are with the gift of your attention.",
            1: "Jim Rohn",
        },
        {
            0: "Always be smarter than the people who hire you.",
            1: "Lena Horne",
        },
        {
            0: "Formula for success: under promise and over deliver.",
            1: "Tom Peters",
        },
        {
            0: "The eye sees only what the mind is prepared to comprehend.",
            1: "Henri Bergson",
        },
        {
            0: "People seldom notice old clothes if you wear a big smile.",
            1: "Lee Mildon",
        },
        {
            0: "The more light you allow within you, the brighter the world you live in will be.",
            1: "Shakti Gawain",
        },
        {
            0: "Nothing diminishes anxiety faster than action.",
            1: "Walter Anderson",
        },
        {
            0: "Man cannot discover new oceans unless he has the courage to lose sight of the shore.",
            1: "Andre Gide",
        },
        {
            0: "Everything that irritates us about others can lead us to an understanding about ourselves.",
            1: "Carl Jung",
        },
        {
            0: "Can you imagine what I would do if I could do all I can?",
            1: "Sun Tzu",
        },
        {
            0: "Ignorance never settle a question.",
            1: "Benjamin Disraeli",
        },
        {
            0: "The awareness of our own strength makes us modest.",
            1: "Paul Cezanne",
        },
        {
            0: "They must often change, who would be constant in happiness or wisdom.",
            1: "Confucius",
        },
        {
            0: "There are no failures. Just experiences and your reactions to them.",
            1: "Tom Krause",
        },
        {
            0: "Your future depends on many things, but mostly on you.",
            1: "Frank Tyger",
        },
        {
            0: "Fear grows in darkness; if you think theres a bogeyman around, turn on the light.",
            1: "Dorothy Thompson",
        },
        {
            0: "The most important point is to accept yourself and stand on your two feet.",
            1: "Shunryu Suzuki",
        },
        {
            0: "Do not expect the world to look bright, if you habitually wear gray-brown glasses.",
            1: "Tomas Eliot",
        },
        {
            0: "As long as your going to be thinking anyway, think big.",
            1: "Donald Trump",
        },
        {
            0: "Without some goals and some efforts to reach it, no man can live.",
            1: "John Dewey",
        },
        {
            0: "He who obtains has little. He who scatters has much.",
            1: "Richard Braunstein",
        },
        {
            0: "Myths which are believed in tend to become true.",
            1: "George Orwell",
        },
        {
            0: "The foot feels the foot when it feels the ground.",
            1: "Buddha",
        },
        {
            0: "Not what we have but what we enjoy constitutes our abundance.",
            1: "John Petit-Senn",
        },
        {
            0: "It is never too late to be what you might have been.",
            1: "George Eliot",
        },
        {
            0: "The beginning is always today.",
            1: "Mary Wollstonecraft",
        },
        {
            0: "In the long run we get no more than we have been willing to risk giving.",
            1: "Sheldon Kopp",
        },
        {
            0: "Self-trust is the first secret of success.",
            1: "Ralph Emerson",
        },
        {
            0: "Don't look back. Something might be gaining on you.",
            1: "Satchel Paige",
        },
        {
            0: "Look back over the past, with its changing empires that rose and fell, and you can foresee the future, too.",
            1: "Marcus Aurelius",
        },
        {
            0: "A life spent making mistakes is not only more honourable, but more useful than a life spent doing nothing.",
            1: "George Bernard Shaw",
        },
        {
            0: "Men are disturbed not by things, but by the view which they take of them.",
            1: "Epictetus",
        },
        {
            0: "Imagination disposes of everything; it creates beauty, justice, and happiness, which are everything in this world.",
            1: "Blaise Pascal",
        },
        {
            0: "Happiness is a Swedish sunset it is there for all, but most of us look the other way and lose it.",
            1: "Mark Twain",
        },
        {
            0: "A smile is a light in the window of your face to show your heart is at home.",
            1: "Unknown",
        },
        {
            0: "Look forward to spring as a time when you can start to see what nature has to offer once again.",
            1: "Byron Pulsifer",
        },
        {
            0: "Trust your own instinct. Your mistakes might as well be your own, instead of someone elses.",
            1: "Billy Wilder",
        },
        {
            0: "The least movement is of importance to all nature. The entire ocean is affected by a pebble.",
            1: "Blaise Pascal",
        },
        {
            0: "I am always doing that which I can not do, in order that I may learn how to do it.",
            1: "Pablo Picasso",
        },
        {
            0: "Men in general judge more from appearances than from reality. All men have eyes, but few have the gift of penetration.",
            1: "Niccolo Machiavelli",
        },
        {
            0: "You may only be someone in the world, but to someone else, you may be the world.",
            1: "Unknown",
        },
        {
            0: "Every artist dips his brush in his own soul, and paints his own nature into his pictures.",
            1: "Henry Ward Beecher",
        },
        {
            0: "If you take each challenge one step at a time, with faith in every footstep, your strength and understanding will increase.",
            1: "James Faust",
        },
        {
            0: "Happiness cannot be travelled to, owned, earned, worn or consumed. Happiness is the spiritual experience of living every minute with love, grace and gratitude.",
            1: "Denis Waitley",
        },
        {
            0: "Everyone should carefully observe which way his heart draws him, and then choose that way with all his strength.",
            1: "Hasidic saying",
        },
        {
            0: "When we quit thinking primarily about ourselves and our own self-preservation, we undergo a truly heroic transformation of consciousness.",
            1: "Joseph Campbell",
        },
        {
            0: "Follow effective action with quiet reflection. From the quiet reflection will come even more effective action.",
            1: "Peter Drucker",
        },
        {
            0: "Life's challenges are not supposed to paralyze you, they're supposed to help you discover who you are.",
            1: "Bernice Reagon",
        },
        {
            0: "There is one thing you have got to learn about our movement. Three people are better than no people.",
            1: "Fannie Hamer",
        },
        {
            0: "Happiness is a perfume you cannot pour on others without getting a few drops on yourself.",
            1: "Ralph Waldo Emerson",
        },
        {
            0: "It is not the mistake that has the most power, instead, it is learning from the mistake to advance your own attributes.",
            1: "Byron Roberts",
        },
        {
            0: "The amount of happiness that you have depends on the amount of freedom you have in your heart.",
            1: "Thich Nhat Hanh",
        },
        {
            0: "Your vision will become clear only when you look into your heart. Who looks outside, dreams. Who looks inside, awakens.",
            1: "Carl Jung",
        },
        {
            0: "Yesterday is history. Tomorrow is a mystery. And today? Today is a gift. That is why we call it the present.",
            1: "Babatunde Olatunji",
        },
        {
            0: "The way we communicate with others and with ourselves ultimately determines the quality of our lives.",
            1: "Tony Robbins",
        },
        {
            0: "Sometimes it is better to lose and do the right thing than to win and do the wrong thing.",
            1: "Tony Blair",
        },
        {
            0: "Let us always meet each other with smile, for the smile is the beginning of love.",
            1: "Mother Teresa",
        },
        {
            0: "A bend in the road is not the end of the road...unless you fail to make the turn.",
            1: "Unknown",
        },
        {
            0: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
            1: "Aristotle",
        },
        {
            0: "Living at risk is jumping off the cliff and building your wings on the way down.",
            1: "Ray Bradbury",
        },
        {
            0: "In the depth of winter, I finally learned that there was within me an invincible summer.",
            1: "Albert Camus",
        },
        {
            0: "Wit lies in recognizing the resemblance among things which differ and the difference between things which are alike.",
            1: "Madame de Stael",
        },
        {
            0: "A failure is a man who has blundered but is not capable of cashing in on the experience.",
            1: "Elbert Hubbard",
        },
        {
            0: "I cannot give you the formula for success, but I can give you the formula for failure: which is: Try to please everybody.",
            1: "Herbert Swope",
        },
        {
            0: "One who asks a question is a fool for five minutes; one who does not ask a question remains a fool forever.",
            1: "Unknown",
        },
        {
            0: "The power of intuitive understanding will protect you from harm until the end of your days.",
            1: "Laozi",
        },
        {
            0: "The best thing about the future is that it only comes one day at a time.",
            1: "Abraham Lincoln",
        },
        {
            0: "We have two ears and one mouth so that we can listen twice as much as we speak.",
            1: "Epictetus",
        },
        {
            0: "Fear of failure is one attitude that will keep you at the same point in your life.",
            1: "Byron Pulsifer",
        },
        {
            0: "Friends are those rare people who ask how we are and then wait to hear the answer.",
            1: "Ed Cunningham",
        },
        {
            0: "If we learn to open our hearts, anyone, including the people who drive us crazy, can be our teacher.",
            1: "Pema Chodron",
        },
        {
            0: "People grow through experience if they meet life honestly and courageously. This is how character is built.",
            1: "Eleanor Roosevelt",
        },
        {
            0: "A hero is no braver than an ordinary man, but he is braver five minutes longer.",
            1: "Ralph Waldo Emerson",
        },
        {
            0: "While we try to teach our children all about life, our children teach us what life is all about.",
            1: "Angela Schwindt",
        },
        {
            0: "When you dance, your purpose is not to get to a certain place on the floor. It's to enjoy each step along the way.",
            1: "Wayne Dyer",
        },
        {
            0: "The Creator has not given you a longing to do that which you have no ability to do.",
            1: "Orison Marden",
        },
        {
            0: "It's so simple to be wise. Just think of something stupid to say and then don't say it.",
            1: "Sam Levenson",
        },
        {
            0: "Consider that not only do negative thoughts and emotions destroy our experience of peace, they also undermine our health.",
            1: "Dalai Lama",
        },
        {
            0: "Until you make peace with who you are, you will never be content with what you have.",
            1: "Doris Mortman",
        },
        {
            0: "No one saves us but ourselves. No one can and no one may. We ourselves must walk the path.",
            1: "Buddha",
        },
        {
            0: "The moment one gives close attention to anything, it becomes a mysterious, awesome, indescribably magnificent world in itself.",
            1: "Henry Miller",
        },
        {
            0: "Happiness is when what you think, what you say, and what you do are in harmony.",
            1: "Mohandas Gandhi",
        },
        {
            0: "The greatest antidote to insecurity and the sense of fear is compassion it brings one back to the basis of one's inner strength",
            1: "Dalai Lama",
        },
        {
            0: "Courage is the discovery that you may not win, and trying when you know you can lose.",
            1: "Unknown",
        },
        {
            0: "To be thoughtful and kind only takes a few seconds compared to the timeless hurt caused by one rude gesture.",
            1: "Byron Pulsifer",
        },
        {
            0: "The purpose of learning is growth, and our minds, unlike our bodies, can continue growing as we continue to live.",
            1: "Mortimer Adler",
        },
        {
            0: "When you realize how perfect everything is you will tilt your head back and laugh at the sky.",
            1: "Buddha",
        },
        {
            0: "For every failure, there's an alternative course of action. You just have to find it. When you come to a roadblock, take a detour.",
            1: "Mary Kay Ash",
        },
        {
            0: "It is surprising what a man can do when he has to, and how little most men will do when they don't have to.",
            1: "Walter Linn",
        },
        {
            0: "To be aware of a single shortcoming in oneself is more useful than to be aware of a thousand in someone else.",
            1: "Tenzin Gyatso",
        },
        {
            0: "Nobody made a greater mistake than he who did nothing because he could do only a little.",
            1: "Edmund Burke",
        },
        {
            0: "Constant kindness can accomplish much. As the sun makes ice melt, kindness causes misunderstanding, mistrust, and hostility to evaporate.",
            1: "Albert Schweitzer",
        },
        {
            0: "The greatest minds are capable of the greatest vices as well as of the greatest virtues.",
            1: "Rene Descartes",
        },
        {
            0: "A man should look for what is, and not for what he thinks should be.",
            1: "Albert Einstein",
        },
        {
            0: "Difficulties are meant to rouse, not discourage. The human spirit is to grow strong by conflict.",
            1: "William Channing",
        },
        {
            0: "If you have no respect for your own values how can you be worthy of respect from others.",
            1: "Byron Pulsifer",
        },
        {
            0: "Some people are always grumbling because roses have thorns; I am thankful that thorns have roses.",
            1: "Alphonse Karr",
        },
        {
            0: "To choose what is difficult all ones days, as if it were easy, that is faith.",
            1: "W. H. Auden",
        },
        {
            0: "Ability is what you're capable of doing. Motivation determines what you do.Attitude determines how well you do it.",
            1: "Lou Holtz",
        },
        {
            0: "Do not be embarrassed by your mistakes. Nothing can teach us better than our understanding of them. This is one of the best ways of self-education.",
            1: "Thomas Carlyle",
        },
        {
            0: "Thousands of candles can be lighted from a single candle, and the life of the candle will not be shortened. Happiness never decreases by being shared.",
            1: "Buddha",
        },
        {
            0: "I care not so much what I am to others as what I am to myself. I will be rich by myself, and not by borrowing.",
            1: "Michel de Montaigne",
        },
        {
            0: "Know that although in the eternal scheme of things you are small, you are also unique and irreplaceable, as are all your fellow humans everywhere in the world.",
            1: "Margaret Laurence",
        },
        {
            0: "To do all that one is able to do, is to be a man; to do all that one would like to do, is to be a god.",
            1: "Napoleon Bonaparte",
        },
        {
            0: "If you let go a little, you will have a little peace. If you let go a lot, you will have a lot of peace.",
            1: "Ajahn Chah",
        },
        {
            0: "There is no need for temples, no need for complicated philosophies. My brain and my heart are my temples; my philosophy is kindness.",
            1: "Dalai Lama",
        },
        {
            0: "The spirit, the will to win, and the will to excel, are the things that endure. These qualities are so much more important than the events that occur.",
            1: "Vincent Lombardi",
        },
        {
            0: "Man is not sum of what he has already, but rather the sum of what he does not yet have, of what he could have.",
            1: "Jean-Paul Sartre",
        },
        {
            0: "Don't believe what your eyes are telling you. All they show is limitation. Look with your understanding, find out what you already know, and you'll see the way to fly.",
            1: "Richard Bach",
        },
        {
            0: "I believe that we are solely responsible for our choices, and we have to accept the consequences of every deed, word, and thought throughout our lifetime.",
            1: "Elisabeth Kubler-Ross",
        },
        {
            0: "Wishes can be your best avenue of getting what you want when you turn wishes into action. Action moves your wish to the forefront from thought to reality.",
            1: "Byron Pulsifer",
        },
        {
            0: "To understand the heart and mind of a person, look not at what he has already achieved, but at what he aspires to do.",
            1: "Kahlil Gibran",
        },
        {
            0: "I am of the opinion that my life belongs to the community, and as long as I live it is my privilege to do for it whatever I can.",
            1: "Bernard Shaw",
        },
        {
            0: "Imagination is more important than knowledge. For while knowledge defines all we currently know and understand, imagination points to all we might yet discover and create.",
            1: "Albert Einstein",
        },
        {
            0: "When you see a good person, think of becoming like him. When you see someone not so good, reflect on your own weak points.",
            1: "Confucius",
        },
        {
            0: "If one is estranged from oneself, then one is estranged from others too. If one is out of touch with oneself, then one cannot touch others.",
            1: "Anne Lindbergh",
        },
        {
            0: "Most of the important things in the world have been accomplished by people who have kept on trying when there seemed to be no hope at all.",
            1: "Dale Carnegie",
        },
        {
            0: "You may say I'm a dreamer, but I'm not the only one, I hope someday you will join us, and the world will live as one.",
            1: "John Lennon",
        },
        {
            0: "Happiness is as a butterfly which, when pursued, is always beyond our grasp, but which if you will sit down quietly, may alight upon you.",
            1: "Nathaniel Hawthorne",
        },
        {
            0: "He who experiences the unity of life sees his own Self in all beings, and all beings in his own Self, and looks on everything with an impartial eye.",
            1: "Buddha",
        },
        {
            0: "In the sky, there is no distinction of east and west; people create distinctions out of their own minds and then believe them to be true.",
            1: "Buddha",
        },
        {
            0: "You cannot change anything in your life with intention alone, which can become a watered-down, occasional hope that you'll get to tomorrow. Intention without action is useless.",
            1: "Caroline Myss",
        },
        {
            0: "Before you can inspire with emotion, you must be swamped with it yourself. Before you can move their tears, your own must flow. To convince them, you must yourself believe.",
            1: "Winston Churchill",
        },
        {
            0: "The greatest discovery of our generation is that human beings can alter their lives by altering their attitudes of mind. As you think, so shall you be.",
            1: "William James",
        },
        {
            0: "If one advances confidently in the direction of his dream, and endeavours to live the life which he had imagines, he will meet with a success unexpected in common hours.",
            1: "Henry David Thoreau",
        },
        {
            0: "The secret of joy in work is contained in one word excellence. To know how to do something well is to enjoy it.",
            1: "Pearl Buck",
        },
        {
            0: "When you meet someone better than yourself, turn your thoughts to becoming his equal. When you meet someone not as good as you are, look within and examine your own self.",
            1: "Confucius",
        },
        {
            0: "We must overcome the notion that we must be regular. It robs you of the chance to be extraordinary and leads you to the mediocre.",
            1: "Uta Hagen",
        },
        {
            0: "Most of our obstacles would melt away if, instead of cowering before them, we should make up our minds to walk boldly through them.",
            1: "Orison Marden",
        },
        {
            0: "Everything can be taken from a man but ... the last of the human freedoms to choose ones attitude in any given set of circumstances, to choose ones own way.",
            1: "Victor Frankl",
        },
        {
            0: "It is better to have enough ideas for some of them to be wrong, than to be always right by having no ideas at all.",
            1: "Edward de Bono",
        },
        {
            0: "Character is like a tree and reputation like a shadow. The shadow is what we think of it; the tree is the real thing.",
            1: "Abraham Lincoln",
        },
        {
            0: "By letting it go it all gets done. The world is won by those who let it go. But when you try and try. The world is beyond the winning.",
            1: "Lao Tzu",
        },
        {
            0: "I am like a falling star who has finally found her place next to another in a lovely constellation, where we will sparkle in the heavens forever.",
            1: "Amy Tan",
        },
        {
            0: "Not every difficult and dangerous thing is suitable for training, but only that which is conducive to success in achieving the object of our effort.",
            1: "Epictetus",
        },
        {
            0: "We are not animals. We are not a product of what has happened to us in our past. We have the power of choice.",
            1: "Stephen Covey",
        },
        {
            0: "The most dangerous way to lose time is not to spend it having fun, but to spend it doing fake work. When you spend time having fun, you know you're being self-indulgent.",
            1: "Paul Graham",
        },
        {
            0: "Thousands of candles can be lit from a single, and the life of the candle will not be shortened. Happiness never decreases by being shared.",
            1: "Buddha",
        },
        {
            0: "A lot of times people look at the negative side of what they feel they can't do. I always look on the positive side of what I can do.",
            1: "Chuck Norris",
        },
        {
            0: "Without passion man is a mere latent force and possibility, like the flint which awaits the shock of the iron before it can give forth its spark.",
            1: "Amiel",
        },
        {
            0: "Love at first sight is easy to understand; its when two people have been looking at each other for a lifetime that it becomes a miracle.",
            1: "Amy Bloom",
        },
        {
            0: "With courage you will dare to take risks, have the strength to be compassionate, and the wisdom to be humble. Courage is the foundation of integrity.",
            1: "Keshavan Nair",
        },
        {
            0: "The right way is not always the popular and easy way. Standing for right when it is unpopular is a true test of moral character.",
            1: "Margaret Smith",
        },
        {
            0: "I prefer to be true to myself, even at the hazard of incurring the ridicule of others, rather than to be false, and to incur my own abhorrence.",
            1: "Frederick Douglass",
        },
        {
            0: "No pessimist ever discovered the secrets of the stars, or sailed to an uncharted land, or opened a new heaven to the human spirit.",
            1: "Helen Keller",
        },
        {
            0: "When you arise in the morning, think of what a precious privilege it is to be alive to breathe, to think, to enjoy, to love.",
            1: "Marcus Aurelius",
        },
        {
            0: "Character cannot be developed in ease and quiet. Only through experience of trial and suffering can the soul be strengthened, vision cleared, ambition inspired, and success achieved.",
            1: "Helen Keller",
        },
        {
            0: "Although there may be tragedy in your life, there's always a possibility to triumph. It doesn't matter who you are, where you come from. The ability to triumph begins with you. Always.",
            1: "Oprah Winfrey",
        },
        {
            0: "You must train your intuition you must trust the small voice inside you which tells you exactly what to say, what to decide.",
            1: "Ingrid Bergman",
        },
        {
            0: "Accept the things to which fate binds you, and love the people with whom fate brings you together, but do so with all your heart.",
            1: "Marcus Aurelius",
        },
        {
            0: "Let us resolve to be masters, not the victims, of our history, controlling our own destiny without giving way to blind suspicions and emotions.",
            1: "John Kennedy",
        },
        {
            0: "Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.",
            1: "Marie Curie",
        },
        {
            0: "Parents can only give good advice or put them on the right paths, but the final forming of a persons character lies in their own hands.",
            1: "Anne Frank",
        },
        {
            0: "Adversity isn't set against you to fail; adversity is a way to build your character so that you can succeed over and over again through perseverance.",
            1: "Byron Pulsifer",
        },
        {
            0: "If you break your neck, if you have nothing to eat, if your house is on fire, then you got a problem. Everything else is inconvenience.",
            1: "Robert Fulghum",
        },
        {
            0: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
            1: "Albert Schweitzer",
        },
        {
            0: "If A is success in life, then A equals x plus y plus z. Work is x; y is play; and z is keeping your mouth shut.",
            1: "Albert Einstein",
        },
        {
            0: "My advice to you is not to inquire why or whither, but just enjoy your ice cream while its on your plate that's my philosophy.",
            1: "Thornton Wilder",
        },
        {
            0: "Conflict is the gadfly of thought. It stirs us to observation and memory. It instigates to invention. It shocks us out of sheeplike passivity, and sets us at noting and contriving.",
            1: "John Dewey",
        },
        {
            0: "He who conquers others is strong; He who conquers himself is mighty.",
            1: "Lao Tzu",
        },
        {
            0: "Anything you really want, you can attain, if you really go after it.",
            1: "Wayne Dyer",
        },
        {
            0: "Arriving at one point is the starting point to another.",
            1: "John Dewey",
        },
        {
            0: "The foolish man seeks happiness in the distance, the wise grows it under his feet.",
            1: "James Oppenheim",
        },
        {
            0: "The greatest part of our happiness depends on our dispositions, not our circumstances.",
            1: "Martha Washington",
        },
        {
            0: "It is only possible to live happily ever after on a day to day basis.",
            1: "Margaret Bonnano",
        },
        {
            0: "A man sees in the world what he carries in his heart.",
            1: "Goethe",
        },
        {
            0: "Action may not always bring happiness, but there is no happiness without action.",
            1: "Benjamin Disraeli",
        },
        {
            0: "Believe deep down in your heart that you're destined to do great things.",
            1: "Joe Paterno",
        },
        {
            0: "Sooner or later, those who win are those who think they can.",
            1: "Richard Bach",
        },
        {
            0: "The only limit to your impact is your imagination and commitment.",
            1: "Tony Robbins",
        },
        {
            0: "You are special, you are unique, you are the best!",
            1: "Cathy Pulsifer",
        },
        {
            0: "Four steps to achievement: Plan purposefully. Prepare prayerfully. Proceed positively. Pursue persistently.",
            1: "William Arthur Ward",
        },
        {
            0: "To know oneself is to study oneself in action with another person.",
            1: "Bruce Lee",
        },
        {
            0: "We must not allow ourselves to become like the system we oppose.",
            1: "Bishop Desmond Tutu",
        },
        {
            0: "Smile, breathe and go slowly.",
            1: "Thich Nhat Hanh",
        },
        {
            0: "Reality is merely an illusion, albeit a very persistent one.",
            1: "Albert Einstein",
        },
        {
            0: "When you come to the end of your rope, tie a knot and hang on.",
            1: "Franklin Roosevelt",
        },
        {
            0: "Always be mindful of the kindness and not the faults of others.",
            1: "Buddha",
        },
        {
            0: "Everything that irritates us about others can lead us to an understanding of ourselves.",
            1: "Carl Jung",
        },
        {
            0: "When fate hands us a lemon, lets try to make lemonade.",
            1: "Dale Carnegie",
        },
        {
            0: "The weak can never forgive. Forgiveness is the attribute of the strong.",
            1: "Mohandas Gandhi",
        },
        {
            0: "A man is great by deeds, not by birth.",
            1: "Chanakya",
        },
        {
            0: "Success is getting what you want. Happiness is wanting what you get.",
            1: "Dale Carnegie",
        },
        {
            0: "Truth isn't all about what actually happens but more about how what has happened is interpreted.",
            1: "Byron Pulsifer",
        },
        {
            0: "A good rest is half the work.",
            1: "Unknown",
        },
        {
            0: "Don't judge each day by the harvest you reap but by the seeds that you plant.",
            1: "Robert Stevenson",
        },
        {
            0: "Small opportunities are often the beginning of great enterprises.",
            1: "Demosthenes",
        },
        {
            0: "To be tested is good. The challenged life may be the best therapist.",
            1: "Gail Sheehy",
        },
        {
            0: "Take heed: you do not find what you do not seek.",
            1: "English proverb",
        },
        {
            0: "Happiness is the reward we get for living to the highest right we know.",
            1: "Richard Bach",
        },
        {
            0: "Be slow of tongue and quick of eye.",
            1: "Cervantes",
        },
        {
            0: "Freedom is not worth having if it does not connote freedom to err.",
            1: "Mohandas Gandhi",
        },
        {
            0: "I have always thought the actions of men the best interpreters of their thoughts.",
            1: "John Locke",
        },
        {
            0: "He who obtains has little. He who scatters has much.",
            1: "Lao Tzu",
        },
        {
            0: "To dare is to lose ones footing momentarily. To not dare is to lose oneself.",
            1: "Soren Kierkegaard",
        },
        {
            0: "No day in which you learn something is a complete loss.",
            1: "David Eddings",
        },
        {
            0: "Peace cannot be kept by force. It can only be achieved by understanding.",
            1: "Albert Einstein",
        },
        {
            0: "Real success is finding your lifework in the work that you love.",
            1: "David McCullough",
        },
        {
            0: "Better than a thousand hollow words, is one word that brings peace.",
            1: "Buddha",
        },
        {
            0: "All the flowers of all the tomorrows are in the seeds of today.",
            1: "Unknown",
        },
        {
            0: "Your sacred space is where you can find yourself again and again.",
            1: "Joseph Campbell",
        },
        {
            0: "As you think, so shall you become.",
            1: "Bruce Lee",
        },
        {
            0: "In seed time learn, in harvest teach, in winter enjoy.",
            1: "William Blake",
        },
        {
            0: "Happiness does not come from having much, but from being attached to little.",
            1: "Cheng Yen",
        },
        {
            0: "Every gift from a friend is a wish for your happiness.",
            1: "Richard Bach",
        },
        {
            0: "Go put your creed into the deed. Nor speak with double tongue.",
            1: "Ralph Emerson",
        },
        {
            0: "The wisest men follow their own direction.",
            1: "Euripides",
        },
        {
            0: "Hope arouses, as nothing else can arouse, a passion for the possible.",
            1: "William Sloane Coffin",
        },
        {
            0: "Everything has beauty, but not everyone sees it.",
            1: "Confucius",
        },
        {
            0: "Nothing ever goes away until it has taught us what we need to know.",
            1: "Pema Chodron",
        },
        {
            0: "When you learn, teach. When you get, give.",
            1: "Maya Angelou",
        },
        {
            0: "Only when we are no longer afraid do we begin to live.",
            1: "Dorothy Thompson",
        },
        {
            0: "If you smile when no one else is around, you really mean it.",
            1: "Andy Rooney",
        },
        {
            0: "Love is the only force capable of transforming an enemy into friend.",
            1: "Martin Luther King, Jr.",
        },
        {
            0: "In all chaos there is a cosmos, in all disorder a secret order.",
            1: "Carl Jung",
        },
        {
            0: "A man is not where he lives but where he loves.",
            1: "Unknown",
        },
        {
            0: "The price of greatness is responsibility.",
            1: "Winston Churchill",
        },
        {
            0: "Decision is a risk rooted in the courage of being free.",
            1: "Paul Tillich",
        },
        {
            0: "Your mind will answer most questions if you learn to relax and wait for the answer.",
            1: "William Burroughs",
        },
        {
            0: "The world does not happen to you it happens from you.",
            1: "Unknown",
        },
        {
            0: "We cannot solve our problems with the same thinking we used when we created them.",
            1: "Albert Einstein",
        },
        {
            0: "More powerful than the will to win is the courage to begin.",
            1: "Unknown",
        },
        {
            0: "Learning is finding out what you already know.",
            1: "Richard Bach",
        },
        {
            0: "Saying thank you is more than good manners. It is good spirituality.",
            1: "Alfred Painter",
        },
        {
            0: "Silence is a source of great strength.",
            1: "Lao Tzu",
        },
        {
            0: "Joy is the best makeup.",
            1: "Anne Lamott",
        },
        {
            0: "There is no great genius without some touch of madness.",
            1: "Seneca",
        },
        {
            0: "A jug fills drop by drop.",
            1: "Buddha",
        },
        {
            0: "Until you make peace with who you are, you'll never be content with what you have.",
            1: "Doris Mortman",
        },
        {
            0: "We aim above the mark to hit the mark.",
            1: "Ralph Emerson",
        },
        {
            0: "Being angry never solves anything.",
            1: "Catherine Pulsifer",
        },
        {
            0: "All men who have achieved great things have been great dreamers.",
            1: "Orison Marden",
        },
        {
            0: "Mediocrity knows nothing higher than itself, but talent instantly recognizes genius.",
            1: "Arthur Conan Doyle",
        },
        {
            0: "Where all think alike, no one thinks very much.",
            1: "Walter Lippmann",
        },
        {
            0: "Everything that exists is in a manner the seed of that which will be.",
            1: "Marcus Aurelius",
        },
        {
            0: "Be less curious about people and more curious about ideas.",
            1: "Marie Curie",
        },
        {
            0: "The heart has eyes which the brain knows nothing of.",
            1: "Charles Perkhurst",
        },
        {
            0: "Only those who dare to fail greatly can ever achieve greatly.",
            1: "Robert Kennedy",
        },
        {
            0: "Lose an hour in the morning, and you will spend all day looking for it.",
            1: "Richard Whately",
        },
        {
            0: "Mistakes are always forgivable, if one has the courage to admit them.",
            1: "Bruce Lee",
        },
        {
            0: "Go to your bosom: Knock there, and ask your heart what it doth know.",
            1: "William Shakespeare",
        },
        {
            0: "Happiness mainly comes from our own attitude, rather than from external factors.",
            1: "Dalai Lama",
        },
        {
            0: "If you do not change direction, you may end up where you are heading.",
            1: "Lao Tzu",
        },
        {
            0: "What we see is mainly what we look for.",
            1: "Unknown",
        },
        {
            0: "Stay away from what might have been and look at what will be.",
            1: "Marsha Petrie Sue",
        },
        {
            0: "Act as if what you do makes a difference. It does.",
            1: "William James",
        },
        {
            0: "Passion creates the desire for more and action fuelled by passion creates a future.",
            1: "Byron Pulsifer",
        },
        {
            0: "Do good by stealth, and blush to find it fame.",
            1: "Alexander Pope",
        },
        {
            0: "Opportunity often comes disguised in the form of misfortune, or temporary defeat.",
            1: "Napoleon Hill",
        },
        {
            0: "Don't talk about what you have done or what you are going to do.",
            1: "Thomas Jefferson",
        },
        {
            0: "Most powerful is he who has himself in his own power.",
            1: "Seneca",
        },
        {
            0: "We don't stop playing because we grow old; we grow old because we stop playing.",
            1: "Bernard Shaw",
        },
        {
            0: "Experience can only be gained by doing not by thinking or dreaming.",
            1: "Byron Pulsifer",
        },
        {
            0: "Always tell the truth. That way, you don't have to remember what you said.",
            1: "Mark Twain",
        },
        {
            0: "From wonder into wonder existence opens.",
            1: "Lao Tzu",
        },
        {
            0: "He who fears being conquered is sure of defeat.",
            1: "Napoleon Bonaparte",
        },
        {
            0: "Life is what happens while you are making other plans.",
            1: "John Lennon",
        },
        {
            0: "Doing what you love is the cornerstone of having abundance in your life.",
            1: "Wayne Dyer",
        },
        {
            0: "Kindness is the golden chain by which society is bound together.",
            1: "Johann Wolfgang von Goethe",
        },
        {
            0: "You need chaos in your soul to give birth to a dancing star.",
            1: "Nietzsche",
        },
        {
            0: "It can't be spring if your heart is filled with past failures.",
            1: "Byron Pulsifer",
        },
        {
            0: "No yesterdays are ever wasted for those who give themselves to today.",
            1: "Brendan Francis",
        },
        {
            0: "There are no failures just experiences and your reactions to them.",
            1: "Tom Krause",
        },
        {
            0: "Action is the foundational key to all success.",
            1: "Pablo Picasso",
        },
        {
            0: "What is necessary to change a person is to change his awareness of himself.",
            1: "Abraham Maslow",
        },
        {
            0: "Positive thinking will let you do everything better than negative thinking will.",
            1: "Zig Ziglar",
        },
        {
            0: "We shall never know all the good that a simple smile can do.",
            1: "Mother Teresa",
        },
        {
            0: "Nothing is so strong as gentleness. Nothing is so gentle as real strength.",
            1: "Frances de Sales",
        },
        {
            0: "Imagination is not a talent of some men but is the health of every man.",
            1: "Ralph Waldo Emerson",
        },
        {
            0: "We must embrace pain and burn it as fuel for our journey.",
            1: "Kenji Miyazawa",
        },
        {
            0: "Don't wait for people to be friendly. Show them how.",
            1: "Unknown",
        },
        {
            0: "A gem cannot be polished without friction, nor a man perfected without trials.",
            1: "Chinese proverb",
        },
        {
            0: "Each day can be one of triumph if you keep up your interests.",
            1: "George Matthew Adams",
        },
        {
            0: "The place to improve the world is first in one's own heart and head and hands.",
            1: "Robert M. Pirsig",
        },
        {
            0: "The pessimist sees difficulty in every opportunity. The optimist sees the opportunity in every difficulty.",
            1: "Winston Churchill",
        },
        {
            0: "Winners have simply formed the habit of doing things losers don't like to do.",
            1: "Albert Gray",
        },
        {
            0: "Nature is a mutable cloud which is always and never the same.",
            1: "Ralph Emerson",
        },
        {
            0: "Life is what you make of it. Always has been, always will be.",
            1: "Grandma Moses",
        },
        {
            0: "Worry often gives a small thing a big shadow.",
            1: "Swedish proverb",
        },
        {
            0: "I want you to be everything that's you, deep at the center of your being.",
            1: "Confucius",
        },
        {
            0: "We know what we are, but know not what we may be.",
            1: "William Shakespeare",
        },
        {
            0: "Freedom is what you do with what's been done to you.",
            1: "Jean-Paul Sartre",
        },
        {
            0: "The truth which has made us free will in the end make us glad also.",
            1: "Felix Adler",
        },
        {
            0: "He who has imagination without learning has wings but no feet.",
            1: "Joseph Joubert",
        },
        {
            0: "Whoso loves, believes the impossible.",
            1: "Elizabeth Browning",
        },
        {
            0: "It isn't where you come from, it's where you're going that counts.",
            1: "Ella Fitzgerald",
        },
        {
            0: "The greatest obstacle to connecting with our joy is resentment.",
            1: "Pema Chodron",
        },
        {
            0: "When anger use your energy to do something productive.",
            1: "C. Pulsifer",
        },
        {
            0: "We are all something, but none of us are everything.",
            1: "Blaise Pascal",
        },
        {
            0: "If you can't explain it simply, you don't understand it well enough.",
            1: "Albert Einstein",
        },
        {
            0: "He who lives in harmony with himself lives in harmony with the world.",
            1: "Marcus Aurelius",
        },
        {
            0: "He who knows himself is enlightened.",
            1: "Lao Tzu",
        },
        {
            0: "Build a better mousetrap and the world will beat a path to your door.",
            1: "Ralph Emerson",
        },
        {
            0: "As our case is new, we must think and act anew.",
            1: "Abraham Lincoln",
        },
        {
            0: "If you can't feed a hundred people, then feed just one.",
            1: "Mother Teresa",
        },
        {
            0: "In three words I can sum up everything Ive learned about life: it goes on.",
            1: "Robert Frost",
        },
        {
            0: "Don't let today's disappointments cast a shadow on tomorrow's dreams.",
            1: "Unknown",
        },
        {
            0: "You always succeed in producing a result.",
            1: "Tony Robbins",
        },
        {
            0: "Everything you are against weakens you. Everything you are for empowers you.",
            1: "Wayne Dyer",
        },
        {
            0: "As we risk ourselves, we grow. Each new experience is a risk.",
            1: "Fran Watson",
        },
        {
            0: "Who we are never changes. Who we think we are does.",
            1: "Mary Almanac",
        },
        {
            0: "The final proof of greatness lies in being able to endure criticism without resentment.",
            1: "Elbert Hubbard",
        },
        {
            0: "An invasion of armies can be resisted, but not an idea whose time has come.",
            1: "Victor Hugo",
        },
        {
            0: "Never let lack of money interfere with having fun.",
            1: "Unknown",
        },
        {
            0: "Excellence is not a skill. It is an attitude.",
            1: "Ralph Marston",
        },
        {
            0: "People may doubt what you say, but they will believe what you do.",
            1: "Lewis Cass",
        },
        {
            0: "The most formidable weapon against errors of every kind is reason.",
            1: "Thomas Paine",
        },
        {
            0: "It's important to know that words don't move mountains. Work, exacting work moves mountains.",
            1: "Danilo Dolci",
        },
        {
            0: "Beware of missing chances; otherwise it may be altogether too late some day.",
            1: "Franz Liszt",
        },
        {
            0: "You only lose what you cling to.",
            1: "Buddha",
        },
        {
            0: "Life is a succession of moments. To live each one is to succeed.",
            1: "Corita Kent",
        },
        {
            0: "Most of the shadows of life are caused by standing in our own sunshine.",
            1: "Ralph Waldo Emerson",
        },
        {
            0: "Good actions give strength to ourselves and inspire good actions in others.",
            1: "Plato",
        },
        {
            0: "I know but one freedom and that is the freedom of the mind.",
            1: "Antoine de Saint-Exupery",
        },
        {
            0: "In the middle of every difficulty lies opportunity.",
            1: "Albert Einstein",
        },
        {
            0: "Every human being is the author of his own health or disease.",
            1: "Buddha",
        },
        {
            0: "When in doubt, tell the truth.",
            1: "Mark Twain",
        },
        {
            0: "Every great advance in science has issued from a new audacity of the imagination.",
            1: "John Dewey",
        },
        {
            0: "The path to success is to take massive, determined action.",
            1: "Anthony Robbins",
        },
        {
            0: "The ladder of success is never crowded at the top.",
            1: "Napoleon Hill",
        },
        {
            0: "He who has health has hope, and he who has hope has everything.",
            1: "Unknown",
        },
        {
            0: "All great achievements require time.",
            1: "Maya Angelou",
        },
        {
            0: "No person is your friend who demands your silence, or denies your right to grow.",
            1: "Alice Walker",
        },
        {
            0: "Impossibilities are merely things which we have not yet learned.",
            1: "Charles Chesnutt",
        },
        {
            0: "Vision without action is a daydream. Action without vision is a nightmare.",
            1: "Japanese proverb",
        },
        {
            0: "The Superior Man is aware of Righteousness, the inferior man is aware of advantage.",
            1: "Confucius",
        },
        {
            0: "He who angers you conquers you.",
            1: "Elizabeth Kenny",
        },
        {
            0: "I never worry about action, but only inaction.",
            1: "Winston Churchill",
        },
        {
            0: "No man is free who is not master of himself.",
            1: "Epictetus",
        },
        {
            0: "Those that know, do. Those that understand, teach.",
            1: "Aristotle",
        },
        {
            0: "If we are not fully ourselves, truly in the present moment, we miss everything.",
            1: "Thich Nhat Hanh",
        },
        {
            0: "No act of kindness, no matter how small, is ever wasted.",
            1: "Aesop",
        },
        {
            0: "Every man is a volume if you know how to read him.",
            1: "Channing",
        },
        {
            0: "The difficulties of life are intended to make us better, not bitter.",
            1: "Unknown",
        },
        {
            0: "Quality means doing it right when no one is looking.",
            1: "Henry Ford",
        },
        {
            0: "Change your words. Change your world.",
            1: "Unknown",
        },
        {
            0: "Great acts are made up of small deeds.",
            1: "Lao Tzu",
        },
        {
            0: "The odds of hitting your target go up dramatically when you aim at it.",
            1: "Mal Pancoast",
        },
        {
            0: "Open minds lead to open doors.",
            1: "Unknown",
        },
        {
            0: "They can do all because they think they can.",
            1: "Virgil",
        },
        {
            0: "You have to think anyway, so why not think big?",
            1: "Donald Trump",
        },
        {
            0: "On every thorn, delightful wisdom grows, In every rill a sweet instruction flows.",
            1: "Edward Young",
        },
        {
            0: "Your body is precious. It is our vehicle for awakening. Treat it with care.",
            1: "Buddha",
        },
        {
            0: "The one who always loses, is the only person who gets the reward.",
            1: "Claire Charmont",
        },
        {
            0: "The future is completely open, and we are writing it moment to moment.",
            1: "Pema Chodron",
        },
        {
            0: "Each time we face a fear, we gain strength, courage, and confidence in the doing.",
            1: "Unknown",
        },
        {
            0: "Ask yourself the secret of your success. Listen to your answer, and practice it.",
            1: "Richard Bach",
        },
        {
            0: "Don't frown because you never know who is falling in love with your smile.",
            1: "Sinvyest Tan",
        },
        {
            0: "Trust your hunches. They're usually based on facts filed away just below the conscious level.",
            1: "Joyce Brothers",
        },
        {
            0: "Nothing is at last sacred but the integrity of your own mind.",
            1: "Ralph Emerson",
        },
        {
            0: "Listen to your intuition. It will tell you everything you need to know.",
            1: "Anthony D'Angelo",
        },
        {
            0: "The personal life deeply lived always expands into truths beyond itself.",
            1: "Anais Nin",
        },
        {
            0: "Whenever something negative happens to you, there is a deep lesson concealed within it.",
            1: "Eckhart Tolle",
        },
        {
            0: "What is not started today is never finished tomorrow.",
            1: "Goethe",
        },
        {
            0: "Our kindness may be the most persuasive argument for that which we believe.",
            1: "Gordon Hinckley",
        },
        {
            0: "Chaos is inherent in all compounded things. Strive on with diligence.",
            1: "Buddha",
        },
        {
            0: "Be sure you put your feet in the right place, then stand firm.",
            1: "Abraham Lincoln",
        },
        {
            0: "Nothing great was ever achieved without enthusiasm.",
            1: "Ralph Emerson",
        },
        {
            0: "The meaning I picked, the one that changed my life: Overcome fear, behold wonder.",
            1: "Richard Bach",
        },
        {
            0: "Know how to listen, and you will profit even from those who talk badly.",
            1: "Plutarch",
        },
        {
            0: "A man is not old as long as he is seeking something.",
            1: "Edmond Rostand",
        },
        {
            0: "The time you think you're missing, misses you too.",
            1: "Ymber Delecto",
        },
        {
            0: "Life is not measured by the breaths you take, but by its breathtaking moments.",
            1: "Michael Vance",
        },
        {
            0: "Much wisdom often goes with fewer words.",
            1: "Sophocles",
        },
        {
            0: "If you love life, don't waste time, for time is what life is made up of.",
            1: "Bruce Lee",
        },
        {
            0: "Imagination is the living power and prime agent of all human perception.",
            1: "Samuel Taylor Coleridge",
        },
        {
            0: "It is impossible to feel grateful and depressed in the same moment.",
            1: "Naomi Williams",
        },
        {
            0: "Progress always involves risks. You can't steal second base and keep your foot on first.",
            1: "Frederick Wilcox",
        },
        {
            0: "Liberty, taking the word in its concrete sense, consists in the ability to choose.",
            1: "Simone Weil",
        },
        {
            0: "A thing well said will be wit in all languages.",
            1: "John Dryden",
        },
        {
            0: "Always do your best. What you plant now, you will harvest later.",
            1: "Og Mandino",
        },
        {
            0: "My mama always said: life's like a box of chocolate you never know what you gonna get.",
            1: "Forrest Gump",
        },
        {
            0: "We are the leaves of one branch, the drops of one sea, the flowers of one garden.",
            1: "Jean Lacordaire",
        },
        {
            0: "If you come to a fork in the road, take it.",
            1: "Unknown",
        },
        {
            0: "It is not only for what we do that we are held responsible, but also for what we do not do.",
            1: "Moliere",
        },
        {
            0: "Nobody can do everything, but everybody can do something.",
            1: "Unknown",
        },
        {
            0: "The world has the habit of making room for the man whose actions show that he knows where he is going.",
            1: "Napoleon Hill",
        },
        {
            0: "You cannot step twice into the same river, for other waters are continually flowing in.",
            1: "Heraclitus",
        },
        {
            0: "Excellence is to do a common thing in an uncommon way.",
            1: "Booker Washington",
        },
        {
            0: "No matter how hard the past, you can always begin again.",
            1: "Buddha",
        },
        {
            0: "I begin with an idea and then it becomes something else.",
            1: "Pablo Picasso",
        },
        {
            0: "Whoever is happy will make others happy, too.",
            1: "Mark Twain",
        },
        {
            0: "Your work is to discover your work and then with all your heart to give yourself to it.",
            1: "Buddha",
        },
        {
            0: "It's not what happens to you, but how you react to it that matters.",
            1: "Epictetus",
        },
        {
            0: "Take it easy, but take it.",
            1: "Woody Guthrie",
        },
        {
            0: "Never apologize for showing feeling. When you do so, you apologize for truth.",
            1: "Benjamin Disraeli",
        },
        {
            0: "Take rest; a field that has rested gives a bountiful crop.",
            1: "Ovid",
        },
        {
            0: "Age does not protect you from love. But love, to some extent, protects you from age.",
            1: "Anais Nin",
        },
        {
            0: "Do what you can. Want what you have. Be who you are.",
            1: "Forrest Church",
        },
        {
            0: "There are people who have money and people who are rich.",
            1: "Coco Chanel",
        },
        {
            0: "Why worry about tomorrow, when today is all we have?",
            1: "Unknown",
        },
        {
            0: "Speak when you are angry and you will make the best speech you will ever regret.",
            1: "Ambrose Bierce",
        },
        {
            0: "Things do not change, we change.",
            1: "Henry Thoreau",
        },
        {
            0: "The exercise of an extraordinary gift is the supremest pleasure in life.",
            1: "Mark Twain",
        },
        {
            0: "Sometimes the most important thing in a whole day is the rest we take between two deep breaths.",
            1: "Etty Hillesum",
        },
        {
            0: "Forgiveness is choosing to love. It is the first skill of self-giving love.",
            1: "Mohandas Gandhi",
        },
        {
            0: "To ensure good health: eat lightly, breathe deeply, live moderately, cultivate cheerfulness, and maintain an interest in life.",
            1: "William Londen",
        },
        {
            0: "Most smiles are started by another smile.",
            1: "Unknown",
        },
        {
            0: "Nothing is softer or more flexible than water, yet nothing can resist it.",
            1: "Lao Tzu",
        },
        {
            0: "It is difficult to achieve a spirit of genuine cooperation as long as people remain indifferent to the feelings and happiness of others.",
            1: "Dalai Lama",
        },
        {
            0: "Experience keeps a dear school, but fools will learn in no other.",
            1: "Benjamin Franklin",
        },
        {
            0: "We can only be said to be alive in those moments when our hearts are conscious of our treasures.",
            1: "Thornton Wilder",
        },
        {
            0: "Fine words and an insinuating appearance are seldom associated with true virtue",
            1: "Confucius",
        },
        {
            0: "We do not quit playing because we grow old, we grow old because we quit playing.",
            1: "Oliver Holmes",
        },
        {
            0: "You can't choose up sides on a round world.",
            1: "Wayne Dyer",
        },
        {
            0: "My advice to you is not to inquire why or whither, but just enjoy your ice cream while its on your plate, that's my philosophy.",
            1: "Thornton Wilder",
        },
        {
            0: "Kindness is the language which the deaf can hear and the blind can see.",
            1: "Mark Twain",
        },
        {
            0: "I may not know everything, but everything is not known yet anyway.",
            1: "Byron Pulsifer",
        },
        {
            0: "If we could see the miracle of a single flower clearly, our whole life would change.",
            1: "Buddha",
        },
        {
            0: "Without this playing with fantasy no creative work has ever yet come to birth. The debt we owe to the play of the imagination is incalculable.",
            1: "Carl Jung",
        },
        {
            0: "You cannot travel the path until you have become the path itself.",
            1: "Buddha",
        },
        {
            0: "Keep your eyes on the stars and your feet on the ground.",
            1: "Theodore Roosevelt",
        },
        {
            0: "I am not afraid of tomorrow, for I have seen yesterday and I love today.",
            1: "William White",
        },
        {
            0: "Limitations live only in our minds. But if we use our imaginations, our possibilities become limitless.",
            1: "Jamie Paolinetti",
        },
        {
            0: "When you lose, don't lose the lesson.",
            1: "Unknown",
        },
        {
            0: "If you want a thing done well, do it yourself.",
            1: "Napoleon Bonaparte",
        },
        {
            0: "The greatest barrier to success is the fear of failure.",
            1: "Eriksson",
        },
        {
            0: "Sunshine is delicious, rain is refreshing, wind braces us up, snow is exhilarating; there is really no such thing as bad weather, only different kinds of good weather.",
            1: "John Ruskin",
        },
        {
            0: "If you aren't going all the way, why go at all?",
            1: "Joe Namath",
        },
        {
            0: "Our greatest glory is not in never falling, but in rising every time we fall.",
            1: "Confucius",
        },
        {
            0: "The beginning of wisdom is found in doubting; by doubting we come to the question, and by seeking we may come upon the truth.",
            1: "Pierre Abelard",
        },
        {
            0: "If I could reach up and hold a star for every time you've made me smile, the entire evening sky would be in the palm of my hand.",
            1: "Unknown",
        },
        {
            0: "We are shaped by our thoughts; we become what we think. When the mind is pure, joy follows like a shadow that never leaves.",
            1: "Buddha",
        },
        {
            0: "Stay committed to your decisions, but stay flexible in your approach.",
            1: "Tony Robbins",
        },
        {
            0: "An optimist is a person who sees a green light everywhere, while the pessimist sees only the red spotlight... The truly wise person is colour-blind.",
            1: "Albert Schweitzer",
        },
        {
            0: "What separates the winners from the losers is how a person reacts to each new twist of fate.",
            1: "Donald Trump",
        },
        {
            0: "Each man has his own vocation; his talent is his call. There is one direction in which all space is open to him.",
            1: "Ralph Emerson",
        },
        {
            0: "To change ones life, start immediately, do it flamboyantly, no exceptions.",
            1: "William James",
        },
        {
            0: "As we express our gratitude, we must never forget that the highest appreciation is not to utter words, but to live by them.",
            1: "John F. Kennedy",
        },
        {
            0: "The world cares very little about what a man or woman knows; it is what a man or woman is able to do that counts.",
            1: "Booker Washington",
        },
        {
            0: "The steeper the mountain the harder the climb the better the view from the finishing line",
            1: "Unknown",
        },
        {
            0: "Aim for success, not perfection. Never give up your right to be wrong, because then you will lose the ability to learn new things and move forward with your life.",
            1: "Dr. David M. Burns",
        },
        {
            0: "When I let go of what I am, I become what I might be.",
            1: "Lao Tzu",
        },
        {
            0: "Transformation does not start with some one else changing you; transformation is an inner self reworking of what you are now to what you will be.",
            1: "Byron Pulsifer",
        },
        {
            0: "Time is not a measure the length of a day or month or year but more a measure of what you have accomplished.",
            1: "Byron Pulsifer",
        },
        {
            0: "Wherever a man may happen to turn, whatever a man may undertake, he will always end up by returning to the path which nature has marked out for him.",
            1: "Johann Wolfgang von Goethe",
        },
        {
            0: "Holding on to anger is like grasping a hot coal with the intent of throwing it at someone else; you are the one who gets burned.",
            1: "Buddha",
        },
        {
            0: "When there is no enemy within, the enemies outside cannot hurt you.",
            1: "African proverb",
        },
        {
            0: "He who controls others may be powerful, but he who has mastered himself is mightier still.",
            1: "Lao Tzu",
        },
        {
            0: "There is no scarcity of opportunity to make a living at what you love; theres only scarcity of resolve to make it happen.",
            1: "Wayne Dyer",
        },
        {
            0: "Neither a lofty degree of intelligence nor imagination nor both together go to the making of genius. Love, love, love, that is the soul of genius.",
            1: "Wolfgang Amadeus Mozart",
        },
        {
            0: "The happy and efficient people in this world are those who accept trouble as a normal detail of human life and resolve to capitalize it when it comes along.",
            1: "H. Bertram Lewis",
        },
        {
            0: "As an organizer I start from where the world is, as it is, not as I would like it to be.",
            1: "Saul Alinsky",
        },
        {
            0: "You are the only person on Earth who can use your ability.",
            1: "Zig Ziglar",
        },
        {
            0: "Don't let what you can't do stop you from doing what you can do.",
            1: "Unknown",
        },
        {
            0: "Complaining doesn't change a thing only taking action does.",
            1: "Byron Pulsifer",
        },
        {
            0: "Life a culmination of the past, an awareness of the present, an indication of the future beyond knowledge, the quality that gives a touch of divinity to matter.",
            1: "Charles A. Lindbergh",
        },
        {
            0: "Enjoy the little things, for one day you may look back and realize they were the big things.",
            1: "Robert Brault",
        },
        {
            0: "With every experience, you alone are painting your own canvas, thought by thought, choice by choice.",
            1: "Oprah Winfrey",
        },
        {
            0: "Let the beauty of what you love be what you do.",
            1: "Rumi",
        },
        {
            0: "The world turns aside to let any man pass who knows where he is going.",
            1: "Epictetus",
        },
        {
            0: "Beauty is not in the face; beauty is a light in the heart.",
            1: "Kahlil Gibran",
        },
        {
            0: "A day of worry is more exhausting than a day of work.",
            1: "John Lubbock",
        },
        {
            0: "Truth, and goodness, and beauty are but different faces of the same all.",
            1: "Ralph Emerson",
        },
        {
            0: "To be great is to be misunderstood.",
            1: "Ralph Emerson",
        },
        {
            0: "Trust only movement. Life happens at the level of events, not of words. Trust movement.",
            1: "Alfred Adler",
        },
        {
            0: "Never, never, never give up.",
            1: "Winston Churchill",
        },
        {
            0: "The most decisive actions of our life... are most often unconsidered actions.",
            1: "Andre Gide",
        },
        {
            0: "As we grow as unique persons, we learn to respect the uniqueness of others.",
            1: "Robert Schuller",
        },
        {
            0: "Failure doesn't mean you are a failure it just means you haven't succeeded yet.",
            1: "Robert Schuller",
        },
        {
            0: "It is the quality of our work which will please God, not the quantity.",
            1: "Mahatma Gandhi",
        },
        {
            0: "Try and fail, but don't fail to try.",
            1: "Stephen Kaggwa",
        },
        {
            0: "First say to yourself what you would be; and then do what you have to do.",
            1: "Epictetus",
        },
        {
            0: "Through pride we are ever deceiving ourselves. But deep down below the surface of the average conscience a still, small voice says to us, Something is out of tune.",
            1: "Carl Jung",
        },
        {
            0: "Keep silence for the most part, and speak only when you must, and then briefly.",
            1: "Epictetus",
        },
        {
            0: "Fear not for the future, weep not for the past.",
            1: "Percy Shelley",
        },
        {
            0: "We are Divine enough to ask and we are important enough to receive.",
            1: "Wayne Dyer",
        },
        {
            0: "If you kick a stone in anger, you'll hurt your own foot.",
            1: "Korean proverb",
        },
        {
            0: "To see things in the seed, that is genius.",
            1: "Lao Tzu",
        },
        {
            0: "The happiness that is genuinely satisfying is accompanied by the fullest exercise of our faculties and the fullest realization of the world in which we live.",
            1: "Bertrand Russell",
        },
        {
            0: "Human beings, who are almost unique in having the ability to learn from the experience of others, are also remarkable for their apparent disinclination to do so.",
            1: "Douglas Adams",
        },
        {
            0: "Make the most of yourself, for that is all there is of you.",
            1: "Ralph Emerson",
        },
        {
            0: "The universe is made of stories, not atoms.",
            1: "Muriel Rukeyser",
        },
        {
            0: "Respect should be earned by actions, and not acquired by years.",
            1: "Frank Wright",
        },
        {
            0: "I hear and I forget. I see and I remember. I do and I understand.",
            1: "Confucius",
        },
        {
            0: "The trouble with most people is that they think with their hopes or fears or wishes rather than with their minds.",
            1: "Will Durant",
        },
        {
            0: "A lot of people give up just before theyre about to make it. You know you never know when that next obstacle is going to be the last one.",
            1: "Chuck Norris",
        },
        {
            0: "Sometimes the biggest act of courage is a small one.",
            1: "Lauren Raffo",
        },
        {
            0: "People are not lazy. They simply have impotent goals that is, goals that do not inspire them.",
            1: "Tony Robbins",
        },
        {
            0: "You do not become good by trying to be good, but by finding the goodness that is already within you.",
            1: "Eckhart Tolle",
        },
        {
            0: "Waste no more time arguing about what a good man should be. Be one.",
            1: "Marcus Aurelius",
        },
        {
            0: "Happiness often sneaks in through a door you didn't know you left open.",
            1: "John Barrymore",
        },
        {
            0: "There are basically two types of people. People who accomplish things, and people who claim to have accomplished things. The first group is less crowded.",
            1: "Mark Twain",
        },
        {
            0: "The things that one most wants to do are the things that are probably most worth doing.",
            1: "Winifred Holtby",
        },
        {
            0: "Always bear in mind that your own resolution to succeed is more important than any one thing.",
            1: "Abraham Lincoln",
        },
        {
            0: "Setting an example is not the main means of influencing another, it is the only means.",
            1: "Albert Einstein",
        },
        {
            0: "Chaos and Order are not enemies, only opposites.",
            1: "Richard Garriott",
        },
        {
            0: "Perseverance is a great element of success. If you only knock long enough and loud enough at the gate, you are sure to wake up somebody.",
            1: "Henry Longfellow",
        },
        {
            0: "Only through our connectedness to others can we really know and enhance the self. And only through working on the self can we begin to enhance our connectedness to others.",
            1: "Harriet Lerner",
        },
        {
            0: "He who deliberates fully before taking a step will spend his entire life on one leg.",
            1: "Chinese proverb",
        },
        {
            0: "Peace begins with a smile.",
            1: "Mother Teresa",
        },
        {
            0: "Be your own hero, it's cheaper than a movie ticket.",
            1: "Doug Horton",
        },
        {
            0: "Turn your face toward the sun and the shadows will fall behind you.",
            1: "Maori proverb",
        },
        {
            0: "Things turn out best for those who make the best of the way things turn out.",
            1: "Jack Buck",
        },
        {
            0: "Were here for a reason. I believe a bit of the reason is to throw little torches out to lead people through the dark.",
            1: "Whoopi Goldberg",
        },
        {
            0: "To effectively communicate, we must realize that we are all different in the way we perceive the world and use this understanding as a guide to our communication with others.",
            1: "Anthony Robbins",
        },
        {
            0: "Ability will never catch up with the demand for it.",
            1: "Confucius",
        },
        {
            0: "Never say there is nothing beautiful in the world any more. There is always something to make you wonder in the shape of a tree, the trembling of a leaf.",
            1: "Albert Schweitzer",
        },
        {
            0: "Intuition is the very force or activity of the soul in its experience through whatever has been the experience of the soul itself.",
            1: "Henry Reed",
        },
        {
            0: "Setting goals is the first step in turning the invisible into the visible.",
            1: "Tony Robbins",
        },
        {
            0: "Courage is not the absence of fear, but simply moving on with dignity despite that fear.",
            1: "Pat Riley",
        },
        {
            0: "All truths are easy to understand once they are discovered; the point is to discover them.",
            1: "Galileo Galilei",
        },
        {
            0: "The smallest act of kindness is worth more than the grandest intention.",
            1: "Oscar Wilde",
        },
        {
            0: "We know from science that nothing in the universe exists as an isolated or independent entity.",
            1: "Margaret Wheatley",
        },
        {
            0: "Everything in the universe goes by indirection. There are no straight lines.",
            1: "Ralph Emerson",
        },
        {
            0: "What do we live for, if it is not to make life less difficult for each other?",
            1: "George Eliot",
        },
        {
            0: "When we feel love and kindness toward others, it not only makes others feel loved and cared for, but it helps us also to develop inner happiness and peace.",
            1: "Tenzin Gyatso",
        },
        {
            0: "We may encounter many defeats but we must not be defeated.",
            1: "Maya Angelou",
        },
        {
            0: "Every person, all the events of your life are there because you have drawn them there. What you choose to do with them is up to you.",
            1: "Richard Bach",
        },
        {
            0: "Logic will get you from A to B. Imagination will take you everywhere.",
            1: "Albert Einstein",
        },
        {
            0: "Our deepest wishes are whispers of our authentic selves. We must learn to respect them. We must learn to listen.",
            1: "Sarah Breathnach",
        },
        {
            0: "The world is but a canvas to the imagination.",
            1: "Henry Thoreau",
        },
        {
            0: "Thats the risk you take if you change: that people you've been involved with won't like the new you. But other people who do will come along.",
            1: "Lisa Alther",
        },
        {
            0: "To be happy is to be able to become aware of oneself without fright.",
            1: "Walter Benjamin",
        },
        {
            0: "Strength to carry on despite the odds means you have faith in your own abilities and know how.",
            1: "Byron Pulsifer",
        },
        {
            0: "Make the most of yourself for that is all there is of you.",
            1: "Ralph Emerson",
        },
        {
            0: "Be gentle first with yourself if you wish to be gentle with others.",
            1: "Lama Yeshe",
        },
        {
            0: "A man who doesn't trust himself can never really trust anyone else.",
            1: "Cardinal Retz",
        },
        {
            0: "We make our own fortunes and we call them fate.",
            1: "Benjamin Disraeli",
        },
        {
            0: "Leaders aren't born they are made. And they are made just like anything else, through hard work. And that's the price well have to pay to achieve that goal, or any goal.",
            1: "Vince Lombardi",
        },
        {
            0: "It takes courage to grow up and become who you really are.",
            1: "E. E. Cummings",
        },
        {
            0: "Always seek out the seed of triumph in every adversity.",
            1: "Og Mandino",
        },
        {
            0: "Rather than wishing for change, you first must be prepared to change.",
            1: "Catherine Pulsifer",
        },
        {
            0: "I do not believe in a fate that falls on men however they act; but I do believe in a fate that falls on them unless they act.",
            1: "Buddha",
        },
        {
            0: "Fame usually comes to those who are thinking about something else.",
            1: "Holmes",
        },
        {
            0: "First comes thought; then organization of that thought, into ideas and plans; then transformation of those plans into reality. The beginning, as you will observe, is in your imagination.",
            1: "Napoleon Hill",
        },
        {
            0: "The superior man acts before he speaks, and afterwards speaks according to his action.",
            1: "Confucius",
        },
        {
            0: "A single conversation across the table with a wise person is worth a months study of books.",
            1: "Chinese proverb",
        },
        {
            0: "The difference between what we do and what we are capable of doing would suffice to solve most of the worlds problems.",
            1: "Mohandas Gandhi",
        },
        {
            0: "You can never cross the ocean unless you have the courage to lose sight of the shore.",
            1: "Unknown",
        },
        {
            0: "Work for something because it is good, not just because it stands a chance to succeed.",
            1: "Vaclav Havel",
        },
        {
            0: "Knowledge rests not upon truth alone, but upon error also.",
            1: "Carl Jung",
        },
        {
            0: "Make it a rule of life never to regret and never to look back. Regret is an appalling waste of energy; you can't build on it; it's only for wallowing in.",
            1: "Katherine Mansfield",
        },
        {
            0: "Never regret. If it's good, it's wonderful. If it's bad, it's experience.",
            1: "Victoria Holt",
        },
        {
            0: "When deeds and words are in accord, the whole world is transformed.",
            1: "Chuang Tzu",
        },
        {
            0: "Kind words can be short and easy to speak but their echoes are truly endless.",
            1: "Mother Teresa",
        },
        {
            0: "For everything that lives is holy, life delights in life.",
            1: "William Blake",
        },
        {
            0: "The most important thing is transforming our minds, for a new way of thinking, a new outlook: we should strive to develop a new inner world.",
            1: "Dalai Lama",
        },
        {
            0: "Our passion is our strength.",
            1: "Billie Armstrong",
        },
        {
            0: "In rivers, the water that you touch is the last of what has passed and the first of that which comes; so with present time.",
            1: "Leonardo da Vinci",
        },
        {
            0: "Spring is a time for rebirth and the fulfilment of new life.",
            1: "Byron Pulsifer",
        },
        {
            0: "There is nothing happens to any person but what was in his power to go through with.",
            1: "Marcus Aurelius",
        },
        {
            0: "There are two ways to slide easily through life: to believe everything or to doubt everything; both ways save us from thinking.",
            1: "Alfred Korzybski",
        },
        {
            0: "The art of progress is to preserve order amid change, and to preserve change amid order.",
            1: "Alfred Whitehead",
        },
        {
            0: "We make a living by what we get, but we make a life by what we give.",
            1: "Winston Churchill",
        },
        {
            0: "If you want to study yourself look into the hearts of other people. If you want to study other people look into your own heart.",
            1: "Friedrich von Schiller",
        },
        {
            0: "Maxim for life: You get treated in life the way you teach people to treat you.",
            1: "Wayne Dyer",
        },
        {
            0: "The first duty of a human being is to assume the right functional relationship to society more briefly, to find your real job, and do it.",
            1: "Charlotte Perkins Gilman",
        },
        {
            0: "The key to growth is the introduction of higher dimensions of consciousness into our awareness.",
            1: "Lao Tzu",
        },
        {
            0: "Thought is the blossom; language the bud; action the fruit behind it.",
            1: "Ralph Emerson",
        },
        {
            0: "True happiness means forging a strong spirit that is undefeated, no matter how trying our circumstances.",
            1: "Daisaku Ikeda",
        },
        {
            0: "There is nothing so useless as doing efficiently that which should not be done at all.",
            1: "Peter Drucker",
        },
        {
            0: "I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.",
            1: "Leonardo da Vinci",
        },
        {
            0: "All the world is a stage, And all the men and women merely players.They have their exits and entrances; Each man in his time plays many parts.",
            1: "William Shakespeare",
        },
        {
            0: "As we are liberated from our own fear, our presence automatically liberates others.",
            1: "Nelson Mandela",
        },
        {
            0: "The most successful people are those who are good at plan B.",
            1: "James Yorke",
        },
        {
            0: "Criticism is something you can easily avoid by saying nothing, doing nothing, and being nothing.",
            1: "Aristotle",
        },
        {
            0: "To fly as fast as thought, you must begin by knowing that you have already arrived.",
            1: "Richard Bach",
        },
        {
            0: "Obstacles are those things you see when you take your eyes off the goal.",
            1: "Hannah More",
        },
        {
            0: "The greatest danger for most of us is not that our aim is too high and we miss it, but that it is too low and we reach it.",
            1: "Michelangelo",
        },
        {
            0: "Great ideas often receive violent opposition from mediocre minds.",
            1: "Albert Einstein",
        },
        {
            0: "We can change our lives. We can do, have, and be exactly what we wish.",
            1: "Tony Robbins",
        },
        {
            0: "You are the only person on earth who can use your ability.",
            1: "Zig Ziglar",
        },
        {
            0: "Neither genius, fame, nor love show the greatness of the soul. Only kindness can do that.",
            1: "Jean Lacordaire",
        },
        {
            0: "The least of things with a meaning is worth more in life than the greatest of things without it.",
            1: "Carl Jung",
        },
        {
            0: "The noblest worship is to make yourself as good and as just as you can.",
            1: "Isocrates",
        },
        {
            0: "Though no one can go back and make a brand new start, anyone can start from not and make a brand new ending.",
            1: "Carl Bard",
        },
        {
            0: "A dream is your creative vision for your life in the future. You must break out of your current comfort zone and become comfortable with the unfamiliar and the unknown.",
            1: "Denis Waitley",
        },
        {
            0: "Don't think of it as failure. Think of it as time-released success.",
            1: "Robert Orben",
        },
        {
            0: "We are what we repeatedly do. Excellence, then, is not an act but a habit.",
            1: "Aristotle",
        },
        {
            0: "I walk slowly, but I never walk backward.",
            1: "Abraham Lincoln",
        },
        {
            0: "Divide each difficulty into as many parts as is feasible and necessary to resolve it.",
            1: "Rene Descartes",
        },
        {
            0: "The best place to find a helping hand is at the end of your own arm.",
            1: "Unknown",
        },
        {
            0: "We know the truth, not only by the reason, but by the heart.",
            1: "Blaise Pascal",
        },
        {
            0: "We choose our joys and sorrows long before we experience them.",
            1: "Kahlil Gibran",
        },
        {
            0: "Anybody can make history. Only a great man can write it.",
            1: "Oscar Wilde",
        },
        {
            0: "If I know what love is, it is because of you.",
            1: "Hermann Hesse",
        },
        {
            0: "Allow the world to live as it chooses, and allow yourself to live as you choose.",
            1: "Richard Bach",
        },
        {
            0: "Focusing your life solely on making a buck shows a poverty of ambition. It asks too little of yourself. And it will leave you unfulfilled.",
            1: "Barack Obama",
        },
        {
            0: "Compassion and happiness are not a sign of weakness but a sign of strength.",
            1: "Dalai Lama",
        },
        {
            0: "It is common sense to take a method and try it. If it fails, admit it frankly and try another. But above all, try something.",
            1: "Franklin D. Roosevelt",
        },
        {
            0: "Be here now. Be someplace else later. Is that so complicated?",
            1: "David Bader",
        },
        {
            0: "To be able to give away riches is mandatory if you wish to possess them. This is the only way that you will be truly rich.",
            1: "Mahummad Ali",
        },
        {
            0: "Learning without reflection is a waste, reflection without learning is dangerous.",
            1: "Confucius",
        },
        {
            0: "Don't fear failure so much that you refuse to try new things. The saddest summary of life contains three descriptions: could have, might have, and should have.",
            1: "Unknown",
        },
        {
            0: "All fixed set patterns are incapable of adaptability or pliability. The truth is outside of all fixed patterns.",
            1: "Bruce Lee",
        },
        {
            0: "I don't believe in failure. It's not failure if you enjoyed the process.",
            1: "Oprah Winfrey",
        },
        {
            0: "The best and most beautiful things in the world cannot be seen, nor touched... but are felt in the heart.",
            1: "Helen Keller",
        },
        {
            0: "Success in business requires training and discipline and hard work. But if you're not frightened by these things, the opportunities are just as great today as they ever were.",
            1: "David Rockefeller",
        },
        {
            0: "The man who trusts men will make fewer mistakes than he who distrusts them.",
            1: "Cavour",
        },
        {
            0: "The less effort, the faster and more powerful you will be.",
            1: "Bruce Lee",
        },
        {
            0: "We must be as courteous to a man as we are to a picture, which we are willing to give the advantage of a good light.",
            1: "Ralph Emerson",
        },
        {
            0: "The dream was always running ahead of me. To catch up, to live for a moment in unison with it, that was the miracle.",
            1: "Anais Nin",
        },
        {
            0: "The cure for boredom is curiosity. There is no cure for curiosity.",
            1: "Ellen Parr",
        },
        {
            0: "We can do no great things, only small things with great love.",
            1: "Mother Teresa",
        },
        {
            0: "Be like the flower, turn your face to the sun.",
            1: "Kahlil Gibran",
        },
        {
            0: "Remembering a wrong is like carrying a burden on the mind.",
            1: "Buddha",
        },
        {
            0: "The foolish man seeks happiness in the distance; the wise grows it under his feet.",
            1: "James Openheim",
        },
        {
            0: "Gratitude is the fairest blossom which springs from the soul.",
            1: "Henry Beecher",
        },
        {
            0: "If you look into your own heart, and you find nothing wrong there, what is there to worry about? What is there to fear?",
            1: "Confucius",
        },
        {
            0: "You cannot have what you do not want.",
            1: "John Acosta",
        },
        {
            0: "Do not follow where the path may lead. Go, instead, where there is no path and leave a trail.",
            1: "Ralph Waldo Emerson",
        },
        {
            0: "It is not fair to ask of others what you are unwilling to do yourself.",
            1: "Eleanor Roosevelt",
        },
        {
            0: "Knowing your own darkness is the best method for dealing with the darknesses of other people.",
            1: "Carl Jung",
        },
        {
            0: "The best thing in every noble dream is the dreamer...",
            1: "Moncure Conway",
        },
        {
            0: "Weve got to have a dream if we are going to make a dream come true.",
            1: "Walt Disney",
        },
        {
            0: "If you want things to be different, perhaps the answer is to become different yourself.",
            1: "Norman Peale",
        },
        {
            0: "There is nothing impossible to him who will try.",
            1: "Alexander the Great",
        },
        {
            0: "Kindness is more important than wisdom, and the recognition of this is the beginning of wisdom.",
            1: "Theodore Rubin",
        },
        {
            0: "Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world.",
            1: "Harriet Tubman",
        },
        {
            0: "The only real failure in life is not to be true to the best one knows.",
            1: "Buddha",
        },
        {
            0: "Anyone who doesn't take truth seriously in small matters cannot be trusted in large ones either.",
            1: "Albert Einstein",
        },
        {
            0: "Change will not come if we wait for some other person or some other time. We are the ones weve been waiting for. We are the change that we seek.",
            1: "Barack Obama",
        },
        {
            0: "Those who cannot learn from history are doomed to repeat it.",
            1: "George Santayan",
        },
        {
            0: "The trick is in what one emphasizes. We either make ourselves miserable, or we make ourselves happy. The amount of work is the same.",
            1: "Carlos Castaneda",
        },
        {
            0: "Just as a flower, which seems beautiful has color but no perfume, so are the fruitless words of a man who speaks them but does them not.",
            1: "Dhammapada",
        },
        {
            0: "Things that were hard to bear are sweet to remember.",
            1: "Seneca",
        },
        {
            0: "Three things in human life are important. The first is to be kind. The second is to be kind. The third is to be kind.",
            1: "Henry James",
        },
        {
            0: "However many holy words you read, However many you speak, What good will they do you If you do not act on upon them?",
            1: "Buddha",
        },
        {
            0: "They can conquer who believe they can.",
            1: "Virgil",
        },
        {
            0: "Learn to listen. Opportunity could be knocking at your door very softly.",
            1: "Frank Tyger",
        },
        {
            0: "All action results from thought, so it is thoughts that matter.",
            1: "Sai Baba",
        },
        {
            0: "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",
            1: "Albert Einstein",
        },
        {
            0: "I love my past. I love my present. I'm not ashamed of what Ive had, and I'm not sad because I have it no longer.",
            1: "Colette",
        },
        {
            0: "Prejudice is a burden that confuses the past, threatens the future and renders the present inaccessible.",
            1: "Maya Angelou",
        },
        {
            0: "Just as much as we see in others we have in ourselves.",
            1: "William Hazlitt",
        },
        {
            0: "Prosperity depends more on wanting what you have than having what you want.",
            1: "Geoffrey F. Abert",
        },
        {
            0: "How many cares one loses when one decides not to be something but to be someone.",
            1: "Coco Chanel",
        },
        {
            0: "He who knows, does not speak. He who speaks, does not know.",
            1: "Lao Tzu",
        },
        {
            0: "We cannot direct the wind but we can adjust the sails.",
            1: "Unknown",
        },
        {
            0: "One may say the eternal mystery of the world is its comprehensibility.",
            1: "Albert Einstein",
        },
        {
            0: "The self is not something ready-made, but something in continuous formation through choice of action.",
            1: "John Dewey",
        },
        {
            0: "Our greatness lies not so much in being able to remake the world as being able to remake ourselves.",
            1: "Mahatma Gandhi",
        },
        {
            0: "Moments of complete apathy are the best for new creations.",
            1: "Philip Breedveld",
        },
        {
            0: "The only real mistake is the one from which we learn nothing.",
            1: "John Powell",
        },
        {
            0: "To dream of the person you would like to be is to waste the person you are.",
            1: "Tim Menchen",
        },
        {
            0: "The important thing is this: to be able at any moment to sacrifice what we are for what we could become.",
            1: "Charles Dubois",
        },
        {
            0: "Gratitude is not only the greatest of virtues, but the paren't of all the others.",
            1: "Cicero",
        },
        {
            0: "It is never too late. Even if you are going to die tomorrow, keep yourself straight and clear and be a happy human being today.",
            1: "Lama Yeshe",
        },
        {
            0: "Respect is not something that you can ask for, buy or borrow. Respect is what you earn from each person no matter their background or status.",
            1: "Byron Pulsifer",
        },
        {
            0: "Things do not change; we change.",
            1: "Henry Thoreau",
        },
        {
            0: "We must learn our limits. We are all something, but none of us are everything.",
            1: "Blaise Pascal",
        },
        {
            0: "Learn wisdom from the ways of a seedling. A seedling which is never hardened off through stressful situations will never become a strong productive plant.",
            1: "Stephen Sigmund",
        },
        {
            0: "We are all faced with a series of great opportunities brilliantly disguised as impossible situations.",
            1: "Charles R. Swindoll",
        },
        {
            0: "All men have a sweetness in their life. That is what helps them go on. It is towards that they turn when they feel too worn out.",
            1: "Albert Camus",
        },
        {
            0: "Be a good listener. Your ears will never get you in trouble.",
            1: "Frank Tyger",
        },
        {
            0: "Meditation brings wisdom; lack of mediation leaves ignorance. Know well what leads you forward and what hold you back, and choose the path that leads to wisdom.",
            1: "Buddha",
        },
        {
            0: "You learn to speak by speaking, to study by studying, to run by running, to work by working; in just the same way, you learn to love by loving.",
            1: "Anatole France",
        },
        {
            0: "To listen well is as powerful a means of communication and influence as to talk well.",
            1: "John Marshall",
        },
        {
            0: "There is only one happiness in life, to love and be loved.",
            1: "George Sand",
        },
        {
            0: "Live through feeling and you will live through love. For feeling is the language of the soul, and feeling is truth.",
            1: "Matt Zotti",
        },
        {
            0: "Kindness in words creates confidence. Kindness in thinking creates profoundness. Kindness in giving creates love.",
            1: "Lao Tzu",
        },
        {
            0: "Reason and free inquiry are the only effectual agents against error.",
            1: "Thomas Jefferson",
        },
        {
            0: "The best cure for the body is a quiet mind.",
            1: "Napoleon Bonaparte",
        },
        {
            0: "See the positive side, the potential, and make an effort.",
            1: "Dalai Lama",
        },
        {
            0: "By accepting yourself and being fully what you are, your presence can make others happy.",
            1: "Jane Roberts",
        },
        {
            0: "Never deny a diagnosis, but do deny the negative verdict that may go with it.",
            1: "Norman Cousins",
        },
        {
            0: "The really unhappy person is the one who leaves undone what they can do, and starts doing what they don't understand; no wonder they come to grief.",
            1: "Johann Wolfgang von Goethe",
        },
        {
            0: "You cannot be lonely if you like the person you're alone with.",
            1: "Wayne Dyer",
        },
        {
            0: "I do not believe in a fate that falls on men however they act; but I do believe in a fate that falls on man unless they act.",
            1: "G. K. Chesterton",
        },
        {
            0: "If you propose to speak, always ask yourself, is it true, is it necessary, is it kind.",
            1: "Buddha",
        },
        {
            0: "Risk more than others think is safe. Care more than others think is wise. Dream more than others think is practical.Expect more than others think is possible.",
            1: "Cadet Maxim",
        },
        {
            0: "Failure will never overtake me if my determination to succeed is strong enough.",
            1: "Og Mandino",
        },
        {
            0: "Let go of your attachment to being right, and suddenly your mind is more open. You're able to benefit from the unique viewpoints of others, without being crippled by your own judgement.",
            1: "Ralph Marston",
        },
        {
            0: "Wrinkles should merely indicate where smiles have been.",
            1: "Mark Twain",
        },
        {
            0: "Your attitude, not your aptitude, will determine your altitude.",
            1: "Zig Ziglar",
        },
        {
            0: "Let yourself be silently drawn by the stronger pull of what you really love.",
            1: "Rumi",
        },
        {
            0: "I gave my life to become the person I am right now. Was it worth it?",
            1: "Richard Bach",
        },
        {
            0: "Give thanks for a little and you will find a lot.",
            1: "Hausa",
        },
        {
            0: "Your ability to learn faster than your competition is your only sustainable competitive advantage.",
            1: "Arie de Gues",
        },
        {
            0: "Forgiveness does not change the past, but it does enlarge the future.",
            1: "Paul Boese",
        },
        {
            0: "Let the future tell the truth, and evaluate each one according to his work and accomplishments. The present is theirs; the future, for which I have really worked, is mine.",
            1: "Nikola Tesla",
        },
        {
            0: "Moral excellence comes about as a result of habit. We become just by doing just acts, temperate by doing temperate acts, brave by doing brave acts.",
            1: "Aristotle",
        },
        {
            0: "The deepest craving of human nature is the need to be appreciated.",
            1: "William James",
        },
        {
            0: "Love does not consist of gazing at each other, but in looking together in the same direction.",
            1: "Antoine de Saint-Exupery",
        },
        {
            0: "We have committed the Golden Rule to memory; let us now commit it to life.",
            1: "Edwin Markham",
        },
        {
            0: "It is with words as with sunbeams. The more they are condensed, the deeper they burn.",
            1: "Robert Southey",
        },
        {
            0: "When people are like each other they tend to like each other.",
            1: "Tony Robbins",
        },
        {
            0: "Sincerity is the way of Heaven. The attainment of sincerity is the way of men.",
            1: "Confucius",
        },
        {
            0: "Be the change that you want to see in the world.",
            1: "Mohandas Gandhi",
        },
        {
            0: "The more you care, the stronger you can be.",
            1: "Jim Rohn",
        },
        {
            0: "Lots of people want to ride with you in the limo, but what you want is someone who will take the bus with you when the limo breaks down.",
            1: "Oprah Winfrey",
        },
        {
            0: "Just trust yourself, then you will know how to live.",
            1: "Goethe",
        },
        {
            0: "To be fully alive, fully human, and completely awake is to be continually thrown out of the nest.",
            1: "Pema Chodron",
        },
        {
            0: "If you don't design your own life plan, chances are you'll fall into someone else's plan. And guess what they have planned for you? Not much.",
            1: "Jim Rohn",
        },
        {
            0: "It all depends on how we look at things, and not how they are in themselves.",
            1: "Carl Jung",
        },
        {
            0: "Giving up doesn't always mean you are weak; sometimes it means that you are strong enough to let go.",
            1: "Unknown",
        },
        {
            0: "To climb steep hills requires a slow pace at first.",
            1: "William Shakespeare",
        },
        {
            0: "An idea that is developed and put into action is more important than an idea that exists only as an idea.",
            1: "Buddha",
        },
        {
            0: "It is not the possession of truth, but the success which attends the seeking after it, that enriches the seeker and brings happiness to him.",
            1: "Max Planck",
        },
        {
            0: "Truth is generally the best vindication against slander.",
            1: "Abraham Lincoln",
        },
        {
            0: "To follow, without halt, one aim: There is the secret of success.",
            1: "Anna Pavlova",
        },
        {
            0: "And as we let our own light shine, we unconsciously give other people permission to do the same.",
            1: "Nelson Mandela",
        },
        {
            0: "What is a weed? A plant whose virtues have not yet been discovered.",
            1: "Ralph Emerson",
        },
        {
            0: "Belief consists in accepting the affirmations of the soul; Unbelief, in denying them.",
            1: "Ralph Emerson",
        },
        {
            0: "Many people have gone further than they thought they could because someone else thought they could.",
            1: "Unknown",
        },
        {
            0: "We read the world wrong and say that it deceives us.",
            1: "Rabindranath Tagore",
        },
        {
            0: "If only wed stop trying to be happy wed have a pretty good time.",
            1: "Edith Wharton",
        },
        {
            0: "You must do the things you think you cannot do.",
            1: "Eleanor Roosevelt",
        },
        {
            0: "Be yourself; everyone else is already taken.",
            1: "Oscar Wilde",
        },
        {
            0: "The mark of your ignorance is the depth of your belief in injustice and tragedy. What the caterpillar calls the end of the world, the Master calls the butterfly.",
            1: "Richard Bach",
        },
        {
            0: "I am glad that I paid so little attention to good advice; had I abided by it I might have been saved from some of my most valuable mistakes.",
            1: "Edna Millay",
        },
        {
            0: "Most folks are as happy as they make up their minds to be.",
            1: "Abraham Lincoln",
        },
        {
            0: "Love is the master key that opens the gates of happiness.",
            1: "Oliver Holmes",
        },
        {
            0: "The person who makes a success of living is the one who see his goal steadily and aims for it unswervingly. That is dedication.",
            1: "Cecil B. DeMille",
        },
        {
            0: "My reputation grows with every failure.",
            1: "George Shaw",
        },
        {
            0: "Good thoughts are no better than good dreams, unless they be executed.",
            1: "Ralph Emerson",
        },
        {
            0: "Happiness does not come about only due to external circumstances; it mainly derives from inner attitudes.",
            1: "Dalai Lama",
        },
        {
            0: "However many holy words you read, however many you speak, what good will they do you if you do not act on upon them?",
            1: "Buddha",
        },
        {
            0: "For success, attitude is equally as important as ability.",
            1: "Harry Banks",
        },
        {
            0: "If you are going to achieve excellence in big things, you develop the habit in little matters. Excellence is not an exception, it is a prevailing attitude.",
            1: "Colin Powell",
        },
        {
            0: "A person who never made a mistake never tried anything new.",
            1: "Albert Einstein",
        },
        {
            0: "Better than a thousand hollow words is one word that brings peace.",
            1: "Buddha",
        },
        {
            0: "The possibilities are numerous once we decide to act and not react.",
            1: "George Bernard Shaw",
        },
        {
            0: "Almost everything comes from nothing.",
            1: "Henri Amiel",
        },
        {
            0: "Sometimes by losing a battle you find a new way to win the war.",
            1: "Donald Trump",
        },
        {
            0: "Listen to what you know instead of what you fear.",
            1: "Richard Bach",
        },
        {
            0: "It is easier to live through someone else than to become complete yourself.",
            1: "Betty Friedan",
        },
        {
            0: "If you're in a bad situation, don't worry it'll change. If you're in a good situation, don't worry it'll change.",
            1: "John Simone",
        },
        {
            0: "Remember that failure is an event, not a person.",
            1: "Zig Ziglar",
        },
        {
            0: "Don't settle for a relationship that won't let you be yourself.",
            1: "Oprah Winfrey",
        },
        {
            0: "What the caterpillar calls the end of the world, the master calls a butterfly.",
            1: "Richard Bach",
        },
        {
            0: "Instead of saying that man is the creature of circumstance, it would be nearer the mark to say that man is the architect of circumstance.",
            1: "Thomas Carlyle",
        },
        {
            0: "If you do what you've always done, you'll get what youve always gotten.",
            1: "Tony Robbins",
        },
        {
            0: "Do not wait for leaders; do it alone, person to person.",
            1: "Mother Teresa",
        },
        {
            0: "Knowledge has three degrees opinion, science, illumination. The means or instrument of the first is sense; of the second, dialectic; of the third, intuition.",
            1: "Plotinus",
        },
        {
            0: "Love vanquishes time. To lovers, a moment can be eternity, eternity can be the tick of a clock.",
            1: "Mary Parrish",
        },
        {
            0: "We never live; we are always in the expectation of living.",
            1: "Voltaire",
        },
        {
            0: "Think like a man of action; act like a man of thought.",
            1: "Henri L. Bergson",
        },
        {
            0: "You can complain because roses have thorns, or you can rejoice because thorns have roses.",
            1: "Ziggy",
        },
        {
            0: "There is not one big cosmic meaning for all, there is only the meaning we each give to our life.",
            1: "Anais Nin",
        },
        {
            0: "A leader is best when people barely know he exists, when his work is done, his aim fulfilled, they will say: we did it ourselves.",
            1: "Lao Tzu",
        },
        {
            0: "Time you enjoyed wasting was not wasted.",
            1: "John Lennon",
        },
        {
            0: "You will never be happy if you continue to search for what happiness consists of. You will never live if you are looking for the meaning of life.",
            1: "Albert Camus",
        },
        {
            0: "Genuine sincerity opens people's hearts, while manipulation causes them to close.",
            1: "Daisaku Ikeda",
        },
        {
            0: "To give ones self earnestly to the duties due to men, and, while respecting spiritual beings, to keep aloof from them, may be called wisdom.",
            1: "Confucius",
        },
        {
            0: "A man's dreams are an index to his greatness.",
            1: "Zadok Rabinowitz",
        },
        {
            0: "This is the final test of a gentleman: his respect for those who can be of no possible value to him.",
            1: "William Lyon Phelps",
        },
        {
            0: "You teach best what you most need to learn.",
            1: "Richard Bach",
        },
        {
            0: "Continuous effort, not strength or intelligence is the key to unlocking our potential.",
            1: "Winston Churchill",
        },
        {
            0: "Obstacles are those frightful things you see when you take your eyes off your goal.",
            1: "Henry Ford",
        },
        {
            0: "Go for it now. The future is promised to no one.",
            1: "Wayne Dyer",
        },
        {
            0: "Never tell a young person that anything cannot be done. God may have been waiting centuries for someone ignorant enough of the impossible to do that very thing.",
            1: "John Holmes",
        },
        {
            0: "Bold is not the act of foolishness but the attribute and inner strength to act when others will not so as to move forward not backward.",
            1: "Byron Pulsifer",
        },
        {
            0: "If we look at the world with a love of life, the world will reveal its beauty to us.",
            1: "Daisaku Ikeda",
        },
        {
            0: "In skating over thin ice our safety is in our speed.",
            1: "Ralph Emerson",
        },
        {
            0: "When you discover your mission, you will feel its demand. It will fill you with enthusiasm and a burning desire to get to work on it.",
            1: "W. Clement Stone",
        },
        {
            0: "Never promise more than you can perform.",
            1: "Publilius Syrus",
        },
        {
            0: "If you don't go after what you want, you'll never have it. If you don't ask, the answer is always no. If you don't step forward, you're always in the same place.",
            1: "Nora Roberts",
        },
        {
            0: "I can't believe that God put us on this earth to be ordinary.",
            1: "Lou Holtz",
        },
        {
            0: "There are no limitations to the mind except those we acknowledge.",
            1: "Napoleon Hill",
        },
        {
            0: "It is through science that we prove, but through intuition that we discover.",
            1: "Jules Poincare",
        },
        {
            0: "Don't be dismayed by good-byes. A farewell is necessary before you can meet again. And meeting again, after moments or lifetimes, is certain for those who are friends.",
            1: "Richard Bach",
        },
        {
            0: "If someone in your life talked to you the way you talk to yourself, you would have left them long ago.",
            1: "Carla Gordon",
        },
        {
            0: "The cosmos is neither moral or immoral; only people are. He who would move the world must first move himself.",
            1: "Edward Ericson",
        },
        {
            0: "If you lose today, win tomorrow. In this never-ending spirit of challenge is the heart of a victor.",
            1: "Daisaku Ikeda",
        },
        {
            0: "There is a way that nature speaks, that land speaks. Most of the time we are simply not patient enough, quiet enough, to pay attention to the story.",
            1: "Linda Hogan",
        },
        {
            0: "Never tell me the sky is the limit when there are footprints on the moon.",
            1: "Unknown",
        },
        {
            0: "I cannot say whether things will get better if we change; what I can say is they must change if they are to get better.",
            1: "Georg Lichtenberg",
        },
        {
            0: "The greater part of human pain is unnecessary. It is self-created as long as the unobserved mind runs your life.",
            1: "Eckhart Tolle",
        },
        {
            0: "Take it easy but take it.",
            1: "Woody Guthrie",
        },
        {
            0: "Blessed is the man who expects nothing, for he shall never be disappointed.",
            1: "Alexander Pope",
        },
        {
            0: "He who knows others is wise. He who knows himself is enlightened.",
            1: "Lao Tzu",
        },
        {
            0: "The best way to predict your future is to create it.",
            1: "Peter Drucker",
        },
        {
            0: "A garden is always a series of losses set against a few triumphs, like life itself.",
            1: "May Sarton",
        },
        {
            0: "If facts are the seeds that later produce knowledge and wisdom, then the emotions and the impressions of the senses are the fertile soil in which the seeds must grow.",
            1: "Rachel Carson",
        },
        {
            0: "Never mistake motion for action.",
            1: "Ernest Hemingway",
        },
        {
            0: "One needs something to believe in, something for which one can have whole-hearted enthusiasm. One needs to feel that ones life has meaning, that one is needed in this world.",
            1: "Hannah Senesh",
        },
        {
            0: "One who is too insistent on his own views, finds few to agree with him.",
            1: "Lao Tzu",
        },
        {
            0: "Translation is the paradigm, the exemplar of all writing. It is translation that demonstrates most vividly the yearning for transformation that underlies every act involving speech, that supremely human gift.",
            1: "Harry Burchell Mathews",
        },
        {
            0: "Meditation is the dissolution of thoughts in eternal awareness or Pure consciousness without objectification, knowing without thinking, merging finitude in infinity.",
            1: "Voltaire",
        },
        {
            0: "The reasonable man adapts himself to the world; the unreasonable man persists in trying to adapt the world to himself. Therefore, all progress depends on the unreasonable man.",
            1: "George Shaw",
        },
        {
            0: "Good instincts usually tell you what to do long before your head has figured it out.",
            1: "Michael Burke",
        },
        {
            0: "It isn't what happens to us that causes us to suffer; it's what we say to ourselves about what happens.",
            1: "Pema Chodron",
        },
        {
            0: "Those who dream by day are cognizant of many things which escape those who dream only by night.",
            1: "Edgar Allan Poe",
        },
        {
            0: "We cannot hold a torch to light another's path without brightening our own.",
            1: "Ben Sweetland",
        },
        {
            0: "You are never given a wish without also being given the power to make it come true. You may have to work for it, however.",
            1: "Richard Bach",
        },
        {
            0: "Kind words can be short and easy to speak, but their echoes are truly endless.",
            1: "Mother Teresa",
        },
        {
            0: "Count your joys instead of your woes. Count your friends instead of your foes.",
            1: "Unknown",
        },
        {
            0: "Dreams come true. Without that possibility, nature would not incite us to have them.",
            1: "John Updike",
        },
        {
            0: "Staying in one place is the best path to be taken over and surpassed by many.",
            1: "Byron Pulsifer",
        },
        {
            0: "Imagination will often carry us to worlds that never were. But without it we go nowhere.",
            1: "Carl Sagan",
        },
        {
            0: "When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.",
            1: "Helen Keller",
        },
        {
            0: "A leader or a man of action in a crisis almost always acts subconsciously and then thinks of the reasons for his action.",
            1: "Jawaharlal Nehru",
        },
        {
            0: "I have no special talent. I am only passionately curious.",
            1: "Albert Einstein",
        },
        {
            0: "I endeavour to be wise when I cannot be merry, easy when I cannot be glad, content with what cannot be mended and patient when there is no redress.",
            1: "Elizabeth Montagu",
        },
        {
            0: "The height of your accomplishments will equal the depth of your convictions.",
            1: "William Scolavino",
        },
        {
            0: "If I am not for myself, who will be for me? If I am not for others, what am I? And if not now, when?",
            1: "Rabbi Hillel",
        },
        {
            0: "When I dare to be powerful, to use my strength in the service of my vision, then it becomes less and less important whether I am afraid.",
            1: "Audre Lorde",
        },
        {
            0: "All great men are gifted with intuition. They know without reasoning or analysis, what they need to know.",
            1: "Alexis Carrel",
        },
        {
            0: "To get the full value of joy you must have someone to divide it with.",
            1: "Mark Twain",
        },
        {
            0: "Sometimes our fate resembles a fruit tree in winter. Who would think that those branches would turn green again and blossom, but we hope it, we know it.",
            1: "Johann Wolfgang von Goethe",
        },
        {
            0: "We lost because we told ourselves we lost.",
            1: "Leo Tolstoy",
        },
        {
            0: "Success is determined by those whom prove the impossible, possible.",
            1: "James Pence",
        },
        {
            0: "Good advice is always certain to be ignored, but that's no reason not to give it.",
            1: "Agatha Christie",
        },
        {
            0: "The winner ain't the one with the fastest car it's the one who refuses to lose.",
            1: "Dale Earnhardt",
        },
        {
            0: "Spirituality can be severed from both vicious sectarianism and thoughtless banalities. Spirituality, I have come to see, is nothing less than the thoughtful love of life.",
            1: "Robert C. Solomon",
        },
        {
            0: "No one has a finer command of language than the person who keeps his mouth shut.",
            1: "Sam Rayburn",
        },
        {
            0: "The only person who never makes mistakes is the person who never does anything.",
            1: "Denis Waitley",
        },
        {
            0: "Life is what happens to you while you're busy making other plans.",
            1: "John Lennon",
        },
        {
            0: "Discovery consists of seeing what everybody has seen and thinking what nobody else has thought.",
            1: "Jonathan Swift",
        },
        {
            0: "If you have knowledge, let others light their candles in it.",
            1: "Margaret Fuller",
        },
        {
            0: "It is impossible for a man to learn what he thinks he already knows.",
            1: "Epictetus",
        },
        {
            0: "If you find yourself in a hole, the first thing to do is stop digging.",
            1: "Will Rogers",
        },
        {
            0: "To make no mistakes is not in the power of man; but from their errors and mistakes the wise and good learn wisdom for the future.",
            1: "Plutarch",
        },
        {
            0: "I think you can have moderate success by copying something else, but if you really want to knock it out of the park, you have to do something different and take chances.",
            1: "Lee Womack",
        },
        {
            0: "Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth.",
            1: "Marcus Aurelius",
        },
        {
            0: "Six essential qualities that are the key to success: Sincerity, personal integrity, humility, courtesy, wisdom, charity.",
            1: "William Menninger",
        },
        {
            0: "I have an everyday religion that works for me. Love yourself first, and everything else falls into line.",
            1: "Lucille Ball",
        },
        {
            0: "Flow with whatever is happening and let your mind be free. Stay centred by accepting whatever you are doing. This is the ultimate.",
            1: "Chuang Tzu",
        },
        {
            0: "Nothing could be worse than the fear that one had given up too soon, and left one unexpended effort that might have saved the world.",
            1: "Jane Addams",
        },
        {
            0: "The energy of the mind is the essence of life.",
            1: "Aristotle",
        },
        {
            0: "Begin, be bold, and venture to be wise.",
            1: "Horace",
        },
        {
            0: "Give a man a fish and you feed him for a day. Teach him how to fish and you feed him for a lifetime.",
            1: "Lao Tzu",
        },
        {
            0: "A wise man will make more opportunities than he finds.",
            1: "Francis Bacon",
        },
        {
            0: "Slow down and enjoy life. It's not only the scenery you miss by going too fast you also miss the sense of where you are going and why.",
            1: "Eddie Cantor",
        },
        {
            0: "Miracles come in moments. Be ready and willing.",
            1: "Wayne Dyer",
        },
        {
            0: "Numberless are the worlds wonders, but none more wonderful than man.",
            1: "Sophocles",
        },
        {
            0: "So is cheerfulness, or a good temper, the more it is spent, the more remains.",
            1: "Ralph Emerson",
        },
        {
            0: "The true way to render ourselves happy is to love our work and find in it our pleasure.",
            1: "Francoise de Motteville",
        },
        {
            0: "When you judge another, you do not define them, you define yourself.",
            1: "Wayne Dyer",
        },
        {
            0: "Argue for your limitations, and sure enough they're yours.",
            1: "Richard Bach",
        },
        {
            0: "He who wishes to secure the good of others, has already secured his own.",
            1: "Confucius",
        },
        {
            0: "Wise men talk because they have something to say; fools, because they have to say something.",
            1: "Plato",
        },
        {
            0: "Life is really simple, but we insist on making it complicated.",
            1: "Confucius",
        },
        {
            0: "The future is an opaque mirror. Anyone who tries to look into it sees nothing but the dim outlines of an old and worried face.",
            1: "Jim Bishop",
        },
        {
            0: "Everything that irritates us about others can lead us to a better understanding of ourselves.",
            1: "Carl Jung",
        },
        {
            0: "Beware of the half truth. You may have gotten hold of the wrong half.",
            1: "Unknown",
        },
        {
            0: "The greatest mistake you can make in life is to be continually fearing you will make one.",
            1: "Elbert Hubbard",
        },
        {
            0: "I have never been hurt by anything I didn't say.",
            1: "Calvin Coolidge",
        },
        {
            0: "Be not angry that you cannot make others as you wish them to be, since you cannot make yourself as you wish to be.",
            1: "Thomas Kempis",
        },
        {
            0: "Adversity causes some men to break, others to break records.",
            1: "William Ward",
        },
        {
            0: "An invincible determination can accomplish almost anything and in this lies the great distinction between great men and little men.",
            1: "Thomas Fuller",
        },
        {
            0: "The industrial landscape is already littered with remains of once successful companies that could not adapt their strategic vision to altered conditions of competition.",
            1: "Abernathy",
        },
        {
            0: "Example has more followers than reason.",
            1: "Christian Bovee",
        },
        {
            0: "One that desires to excel should endeavour in those things that are in themselves most excellent.",
            1: "Epictetus",
        },
        {
            0: "If you have made mistakes, there is always another chance for you. You may have a fresh start any moment you choose.",
            1: "Mary Pickford",
        },
        {
            0: "The only Zen you find on the tops of mountains is the Zen you bring up there.",
            1: "Robert Pirsig",
        },
        {
            0: "Gratitude is riches. Complaint is poverty.",
            1: "Doris Day",
        },
        {
            0: "Strong people make as many mistakes as weak people. Difference is that strong people admit their mistakes, laugh at them, learn from them. That is how they become strong.",
            1: "Richard Needham",
        },
        {
            0: "To know your purpose is to live a life of direction, and in that direction is found peace and tranquillity.",
            1: "Byron Pulsifer",
        },
        {
            0: "You can stand tall without standing on someone. You can be a victor without having victims.",
            1: "Harriet Woods",
        },
        {
            0: "Bad times have a scientific value. These are occasions a good learner would not miss.",
            1: "Ralph Emerson",
        },
        {
            0: "It's not who you are that holds you back, it's who you think you're not.",
            1: "Unknown",
        },
        {
            0: "All children are artists. The problem is how to remain an artist once he grows up.",
            1: "Pablo Picasso",
        },
        {
            0: "Either I will find a way, or I will make one.",
            1: "Philip Sidney",
        },
        {
            0: "He who knows that enough is enough will always have enough.",
            1: "Lao Tzu",
        },
        {
            0: "The only way to have a friend is to be one.",
            1: "Ralph Emerson",
        },
        {
            0: "If we had no winter, the spring would not be so pleasant; if we did not sometimes taste of adversity, prosperity would not be so welcome.",
            1: "Anne Bradstreet",
        },
        {
            0: "Joy is what happens to us when we allow ourselves to recognize how good things really are.",
            1: "Marianne Williamson",
        },
        {
            0: "Your vision will become clear only when you can look into your own heart. Who looks outside, dreams; who looks inside, awakes.",
            1: "Carl Jung",
        },
        {
            0: "There is never enough time to do everything, but there is always enough time to do the most important thing.",
            1: "Brian Tracy",
        },
        {
            0: "You really can change the world if you care enough.",
            1: "Marian Edelman",
        },
        {
            0: "What you are is what you have been. What you will be is what you do now.",
            1: "Buddha",
        },
        {
            0: "Our lives are the only meaningful expression of what we believe and in Whom we believe. And the only real wealth, for any of us, lies in our faith.",
            1: "Gordon Hinckley",
        },
        {
            0: "There surely is in human nature an inherent propensity to extract all the good out of all the evil.",
            1: "Benjamin Haydon",
        },
        {
            0: "Music in the soul can be heard by the universe.",
            1: "Lao Tzu",
        },
        {
            0: "What we see depends mainly on what we look for.",
            1: "John Lubbock",
        },
        {
            0: "To hell with circumstances; I create opportunities.",
            1: "Bruce Lee",
        },
        {
            0: "The truest greatness lies in being kind, the truest wisdom in a happy mind.",
            1: "Ella Wilcox",
        },
        {
            0: "An ounce of emotion is equal to a ton of facts.",
            1: "John Junor",
        },
        {
            0: "We need to find the courage to say NO to the things and people that are not serving us if we want to rediscover ourselves and live our lives with authenticity.",
            1: "Barbara De Angelis",
        },
        {
            0: "Great is the art of beginning, but greater is the art of ending.",
            1: "Lazurus Long",
        },
        {
            0: "Simply put, you believer that things or people make you unhappy, but this is not accurate. You make yourself unhappy.",
            1: "Wayne Dyer",
        },
        {
            0: "Nothing will work unless you do.",
            1: "Maya Angelou",
        },
        {
            0: "Our ability to achieve happiness and success depends on the strength of our wings.",
            1: "Catherine Pulsifer",
        },
        {
            0: "To go against the dominant thinking of your friends, of most of the people you see every day, is perhaps the most difficult act of heroism you can perform.",
            1: "Theodore H. White",
        },
        {
            0: "Gratitude makes sense of our past, brings peace for today, and creates a vision for tomorrow.",
            1: "Melody Beattie",
        },
        {
            0: "Into each life rain must fall but rain can be the giver of life and it is all in your attitude that makes rain produce sunshine.",
            1: "Byron Pulsifer",
        },
        {
            0: "We are all inclined to judge ourselves by our ideals; others, by their acts.",
            1: "Harold Nicolson",
        },
        {
            0: "Nothing is a waste of time if you use the experience wisely.",
            1: "Rodin",
        },
        {
            0: "If one way be better than another, that you may be sure is natures way.",
            1: "Aristotle",
        },
        {
            0: "Here is one quality that one must possess to win, and that is definiteness of purpose, the knowledge of what one wants, and a burning desire to possess it.",
            1: "Napoleon Hill",
        },
        {
            0: "It is not in the stars to hold our destiny but in ourselves.",
            1: "William Shakespeare",
        },
        {
            0: "Using the power of decision gives you the capacity to get past any excuse to change any and every part of your life in an instant.",
            1: "Tony Robbins",
        },
        {
            0: "I will prepare and some day my chance will come.",
            1: "Abraham Lincoln",
        },
        {
            0: "Sometimes the cards we are dealt are not always fair. However you must keep smiling and moving on.",
            1: "Tom Jackson",
        }
    ];
    y = Math.ceil(Math.random()*(quotes.length-1));
    prev = y;
    text.innerText = quotes[y][0];
    author.innerText = "- "+quotes[y][1];
    prevbtn.style.visibility = "hidden";
}
function next(){
    prevbtn.style.visibility = "visible";
    //Change the background image Randomly
    let x = Math.ceil(Math.random()*(images.length-1));
    img.src = images[x];
    prev = y;
    y = Math.ceil(Math.random()*(quotes.length-1));
    text.innerText = quotes[y][0];
    author.innerText = "- "+quotes[y][1];
}
function previous(){
    text.innerText = quotes[prev][0];
    author.innerText = "- "+quotes[prev][1];
    prevbtn.style.visibility = "hidden";
}
function copy(){
    navigator.clipboard.writeText(text.innerText+"\nby:"+author.innerText);
    toast.style.visibility = "visible";
    setTimeout(function () {
        toast.style.visibility = "hidden";
    }, 1500);
}