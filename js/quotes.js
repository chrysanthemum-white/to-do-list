const quotes = [
  {
    quote: 'If you would be loved, love and be lovable.',
    korean: '사랑 받고 싶다면 사랑하라, 그리고 사랑스럽게 행동하라.',
    author: 'Benjamin Franklin, 벤자민 프랭클린',
  },
  {
    quote: 'To love is to receive a glimpse of heaven.',
    korean: '사랑하는 것은 천국을 살짝 엿보는 것이다.',
    author: 'Karen Sunde, 카렌 선드',
  },
  {
    quote: 'Loving others brings love back to you.',
    korean: '남들을 사랑하는 만큼, 너도 사랑받을 것이다.',
    author: 'Catherine Pulsifer, 캐서린 펠시퍼',
  },
  {
    quote:
      'I saw that you were perfect, and so I loved you. Then I saw that you were not perfect and I loved you even more.',
    korean:
      '완벽한 당신을 보았을 때, 당신을 사랑하게 되었고, 완벽하지 않은 당신을 보았을 때, 당신을 더 사랑하게 되었다.',
    author: 'Angelita Lim, 안젤리타 림',
  },
  {
    quote: 'To me, you are perfect.',
    korean: '나에게, 너는 완벽해.',
    author: ' Love actually,러브 액츄얼리',
  },
  {
    quote: 'Love is like the wind, you can’t see it but you can feel it.',
    korean: '사랑은 바람과도 같다, 당신은 볼 수 없겠지만 느낄 수는 있다.',
    author: 'Nicholas Sparks, 니콜라스 스파크스',
  },
  {
    quote: '“I love you” begins by I, but it ends up by you.',
    korean:
      '“나는 너를 사랑해”는 “나”라는 단어로 시작하지만, “너”라는 단어로 끝난다.',
    author: 'Charles de Leusse, 샤를 드 루스',
  },
  {
    quote:
      'The most important thing in life is to learn how to give out love, and to let it come in.',
    korean:
      '인생에서 가장 중요한 것은 사랑을 주는 방법을 배우고 사랑을 받는 것이다.',
    author: 'Morrie Schwartz, 모리 슈워츠',
  },
  {
    quote: 'Where there is love there is life.',
    korean: '사랑이 있는 곳에 인생이 있다.',
    author: 'Mahatma Gandhi, 마하트마 간디',
  },
  {
    quote: 'Real love is a permanently self-enlarging experience.',
    korean: '진정한 사랑은 영원히 자신을 성장시키는 경험이다.',
    author: 'M. Scott Peck, M. 스캇 펙',
  },
];

const quotesBox = document.querySelector('#quotes-box');
const quoteText = document.querySelector('#quotes-box h3');
const koreanText = document.querySelector('#quotes-box p:first-of-type');
const authorText = document.querySelector('#quotes-box P:last-of-type');

function randomQuotes() {
  const random = Math.floor(Math.random() * quotes.length);
  const todayQuote = quotes[random];
  quoteText.innerText = todayQuote.quote;
  koreanText.innerText = todayQuote.korean;
  authorText.innerText = todayQuote.author;
}

randomQuotes();
