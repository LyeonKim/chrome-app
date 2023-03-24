
const quotes =[
    {   
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", 
        author: "Nelson Mandela"
    },
    {   
        quote: "The way to get started is to quit talking and begin doing.", 
        author: "Walt Disney"
    },
    {   
        quote: "If life were predictable it would cease to be life, and be without flavor.", 
        author: "Eleanor Rocosevelt"
    },
    {   
        quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.", 
        author: "James Cameron"
    },
    {   
        quote: "Life is what happens when you're busy making other plans.", 
        author: "John Lennon"
    },
    {   
        quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.", 
        author: "Mother Teresa"
    },
    {   
        quote: "ou will face many defeats in life, but never let yourself be defeated.", 
        author: "Maya Angelou" 
    },
    {   
        quote: "The most important decision you make is to be in a good mood.", 
        author: "Voltaire" 
    },
    {   
        quote: "The secret to living well and longer is; eat half, walk double, laugh triple, and love without measure. ", 
        author: "Tibetan proverb" 
    },
    {   
        quote: "If you want something said, ask a man; if you want something done, ask a woman.", 
        author: "Margaret Thatcher" 
    },
    {   
        quote: "We realise the importance of our voice only when we are silenced.", 
        author: "Malala Yousafzai" 
    },
    {   
        quote: "Do not live someone else's life and someone else's idea of what womanhood is. Womanhood is you.", 
        author: "Viola Davis" 
    },

]


const content = document.querySelector('#quote span.content')
const author = document.querySelector('#quote span.author')
// console.log(quotes[0]);
// console.log(quotes.length); // 10개 [0~8]

// Math.random(); = 0 이상 1 미만의 구간의 소숫점 난수를 반환하는 함수
// Math.floor(); == 반올림 & 반내림 해주는 함수

const idx = Math.floor(Math.random() * quotes.length);
// const idx = Math.random() * 10;
// console.log(quotes[idx]);

content.innerText = quotes[idx].quote;
author.innerText = `- ${quotes[idx].author}`;
