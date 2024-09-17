const text =
  "HAPPY BIRTHDAY MI AMOR!!! Such a special day and I want to take this moment to remind you how much you mean to me. For me it feels like everyday is my birthday because having you is a daily gift! I am always and constantly in awe and admire your beauty and how amazing and pretty you are inside and out. You have this power of making my world much better, you take the world off my shoulders and I admire you. You are so full of warmth and I know everyone can agree with me on that. I am so grateful to be in your life and to even be your boyfriend! I am so proud of you, so proud that you are mine and so proud of everything you have accomplished and will accomplish. From the way you laugh and smile, to how you care so deeply and how kind, how brave and strong you are and thoughtful and considerate and how you are able to always be positive or you know how to get things done, you show me everyday what it means to be happy and feel loved and special. You are the person who fills my heart with joy, in every moment. We celebrate you today! I will always be here for you through thick and thin, forever and always and I am so honored to be able to walk this journey with you. May all your dreams come true my love, my everything, you are my moon, my world and I hope you have an amazing day <33 ⋆｡‧˚ʚ🌟🎈ɞ˚‧｡⋆";
const paragraph = text.split("");

let i = 0;

function dashOut(arr) {
  if (i < arr.length) {
    console.log(arr[i]);
    document.querySelector(".textCont").textContent += arr[i];

    i++;
    console.log("The i count: " + i);
    setTimeout(function () {
      dashOut(arr);
    }, interval(arr[i]));
  }
}

function interval(letter) {
  console.log(letter);
  if (letter == ";" || letter == "." || letter == ",") {
    return Math.floor(Math.random() * 250 + 250);
  } else {
    return Math.floor(Math.random() * 50 + 10);
  }
}

function startFromBegin() {
  i = 0;
  dashOut(paragraph);
}

startFromBegin();