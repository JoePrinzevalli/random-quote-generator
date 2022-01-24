/************************************************
Treehouse Techdegree:
Project 4 - Random Quote Generator
*************************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community

/*** 
 * `quotes` array 
***/

let quotes = [
  {
    quote: "Life is not about waiting for the storms to pass. It's about learning how to dance in the rain.",
    source:'Vivian Greene',
    citation: 'Motivational Speech',
    year: 2000
  },
  {
    quote: "Van Gogh would’ve sold more than one painting if he’d put tigers in them.",
    source:'Bill Watterson',
    citation: 'Calvin and Hobbes Comic Strip',
    year: 1985
  },
  {
    quote: "It’s a magical world, Hobbes, ol’ buddy…Let’s go exploring!",
    source:'Bill Watterson',
    citation: 'Calvin and Hobbes Comic Strip',
    year: 1984
  },
  {
    quote: "You will give the people of Earth an ideal to strive towards... You will help them accomplish wonders."    ,
    source:'Jor El',
    citation: 'Man of Steel',
    year: 2013
  },
  {
    quote: "It's Okay To Lose To Opponent! Must Not Lose To Fear!",
    source:'Mr. Miyagi',
    citation: 'Karate Kid',
    year: 1984
  },
  {
    quote: "Dancin' in the moonlight",
    source:'Toploader',
    citation: 'Dancing in the Moonlight',
    year: 1999
  },
  {
    quote: 'Never let the fear of striking out keep you from playing the game.',
    source:'Babe Ruth'
  },
  {
    quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    source: 'Ralph Waldo Emerson'
  }
];



/***
 * `getRandomQuote` function
***/

let getRandomQuote = (prop) => {
  getRandomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[getRandomNumber];
};
 
console.log( getRandomQuote() );

/***
 * `printQuote` function
***/
let html;

const printQuote = () => {
  let randomQuote = getRandomQuote();
  let html = `<p class="quote"> ${randomQuote.quote } </p>
  <p class="source"> ${randomQuote.source} 
  
  if (  randomQuote.includes( quotes.citation ) ) {
    <span class="citation"> ${randomQuote.citation} </span>
  };
  if ( randomQuote.includes( quotes.year ) ) {
    <span class="year"> ${randomQuote.year} </span>
  };   
  </p>`
};
console.log( printQuote() );


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);