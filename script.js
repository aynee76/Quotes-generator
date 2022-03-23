const quoteButton = document.getElementById("getQuotes")
const h1Element = document.getElementById("title")
const pElement = document.getElementById("author")

const quotes = [
    {
        title:"The purpose of our lives is to be happy.",
        author: "Dalai Lama"
    },
    {
        title:"Life is what happens when you're busy making other plans.",
        author:"John Lennon",
    },
    {
        title:"Get busy living or get busy dying.",
        author:"Stephen King",
    },
    {
        title:"You only live once, but if you do it right, once is enough.",
        author:"Mae West",
    },
    {
        title:"Many of life's failures are people who did not realize how close they were to success when they gave up.",
        author:"Thomas A. Edison",
    },
    {
        title:"If you want to live a happy life, tie it to a goal, not to people or things.",
        author:"Albert Einstein",   
    },
    {
        title:"Never let the fear of striking out keep you from playing the game.",
        author:" Babe Ruth",
    },
    {
        title:"Money and success don't change people; they merely amplify what is already there.",
        author:"Will Smith",
    },
    {
        title:"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma - which is living with the results of other people's thinking",
        author:"Steve Jobs",
    },
    {
        title:"Not how long, but how well you have lived is the main thing.",
        author:" Seneca",
    },
    {
        title:"If life were predictable it would cease to be life, and be without flavor.",
        author:"Eleanor Roosevelt",
    },
    {
        title:"The whole secret of a successful life is to find out what is one's destiny to do, and then do it.",
        author:"Henry Ford",
    },
    {
        title:"In order to write about life first you must live it.",
        author:"Ernest Hemingway",
    },
    {
        title:"The big lesson in life, baby, is never be scared of anyone or anything.",
        author:"Frank Sinatra",
    },
    {
        title:"Sing like no one,s listening, love like you've never been hurt, dance like nobody's watching, and live like it's heaven on earth.",
        author:"Anonymous",
    },
    {
        title:"Curiosity about life in all of its aspects, I think, is still the secret of great creative people.",
        author:"Leo Burnett",
    },
    {
        title:"Life is not a problem to be solved, but a reality to be experienced.",
        author:"Soren Kierkegaard",
    },
    {
        title:"The unexamined life is not worth living.",
        author:"Socrates",
    },
    {
        title:"Turn your wounds into wisdom.",
        author:"Oprah Winfrey",
    },
    {
        title:"The way I see it, if you want the rainbow, you gotta put up with the rain.",
        author:"Dolly Parton",
    }
];
h1Element.textContent = quotes[0].title;
pElement.textContent = quotes[0].author;



quoteButton.addEventListener("click", () => {
    const randomNumber = Math.floor(Math.random() * quotes.length);

    h1Element.textContent = quotes[randomNumber].title;
    pElement.textContent = quotes[randomNumber].author;
})