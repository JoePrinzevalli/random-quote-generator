/************************************************
Random Quote Generator
*************************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community

/*** 
 * `quotes` array:
 This array contains all of the quotes the random quote generator can pull from.
 Quotes are comprised from movies, inspirational quotes, comic strips and song lyrics.
***/

let quotes = [
  {
    quote: "Life is not about waiting for the storms to pass. It's about learning how to dance in the rain.",
    source:'Vivian Greene',
    citation: 'Motivational Speech',
    year: 2000,
    tags: 'Inspirational Quote'
  },
  {
    quote: "Van Gogh would’ve sold more than one painting if he’d put tigers in them.",
    source:'Bill Watterson',
    citation: 'Calvin and Hobbes Comic Strip',
    year: 1985,
    tags: 'Comic'
  },
  {
    quote: "It’s a magical world, Hobbes, ol’ buddy…Let’s go exploring!",
    source:'Bill Watterson',
    citation: 'Calvin and Hobbes Comic Strip',
    year: 1984,
    tags: 'Comic'
  },
  {
    quote: "You will give the people of Earth an ideal to strive towards... You will help them accomplish wonders."    ,
    source:'Jor El',
    citation: 'Man of Steel',
    year: 2013,
    tags: 'Movie'
  },
  {
    quote: "It's Okay To Lose To Opponent! Must Not Lose To Fear!",
    source:'Mr. Miyagi',
    citation: 'Karate Kid',
    year: 1984,
    tags: 'Moive'
  },
  {
    quote: "Dancin' in the moonlight",
    source:'Toploader',
    citation: 'Dancing in the Moonlight',
    year: 1999,
    tags: 'Music'
  },
  {
    quote: 'Never let the fear of striking out keep you from playing the game.',
    source:'Babe Ruth',
    tags: 'Inspirational Quote'
  },
  {
    quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    source: 'Ralph Waldo Emerson',
    tags: 'Inspirational Quote'
  }
];



/***
 * `getRandomQuote` function:
    This function provies a random quote from the 'quotes' array.
***/

 const getRandomQuote = () => {
  getRandomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[getRandomNumber];
};
 


/***
 * `printQuote` function:
 This function prints an html string, to display in the DOM.
 The 'if statements' provide a way for the html to dcepipher whether the quotes contain a 'year' and/or 'citaiton' portion.
 This function also displays a new background color, every time a new quote is presented.
***/

// Defining variables //
let html;
let red;
let green;
let blue;
let randomRGB;
 
let printQuote = () => {
  let randomQuote = getRandomQuote();
  let html = `<p class="quote"> ${randomQuote.quote } </p>
              <p class="source"> ${randomQuote.source}` 

      if ( randomQuote.year  ) {
        html+= `<span class="year"> ${randomQuote.year}</span>`
      }; 
      if ( randomQuote.citation ) {
        html+= `<span class="citation"> ${randomQuote.citation}</span>`
      }; 
      if ( randomQuote.tags ) {
        html+= `<span class="year"> <small>${randomQuote.tags}</small></span>`
      };
      if ( randomQuote ) {
        red = Math.floor(Math.random() * 256);
        green = Math.floor(Math.random() * 256);
        blue = Math.floor(Math.random() * 256);
        randomRGB = `rgb( ${red} ${green} ${blue} )`;
        html+= `<style>
          body {
          background-color: ${randomRGB}
          };
            </style>`
      };
      html +=`</p>`;
   
  
  return html;
 
};



/***
 * `setInterval()` 
 This will dispaly a new quote every 10 seconds automatically.
 
***/


setInterval(printQuote, 10000);








document.getElementById('quote-box').innerHTML = printQuote(); 




/***
 * click event listener for the print quote button
 
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);


