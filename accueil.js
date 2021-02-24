



// Skills:
const mHTML = document.getElementById('message'),
// A remplir =>
messages = [
  'HTML5.',
  'CSS3',
  'Javascript.',
  'Jquery',
  'PHP.',
  'MYSQL',
  'C#.',
  'Python',
  'Node.js'
];

let currentMessage = 0;
function typeMessage() {
  if (!messages[currentMessage]) {
    currentMessage = 0;
  }
  const currentStr = messages[currentMessage];
  currentStr.split();
  let part = '';
  let currentLetter = 0;
  let int1 = setInterval(()=>{
    if (!currentStr[currentLetter]) {
      currentMessage++;
      setTimeout(()=>{
        deleteMessage(part);
      }, 500);
      clearInterval(int1);
    } else {
      part += currentStr[currentLetter++];
      mHTML.innerHTML = part;
    }
  }, 100);
}
function deleteMessage(str) {
  let int = setInterval(()=>{
    if (str.length === 0) {
      setTimeout(()=>{
        typeMessage();
      }, 500);
      clearInterval(int);
    } else {
      str = str.split('');
      str.pop();
      str = str.join('');
      mHTML.innerHTML = str;
    }
  },50);
}
typeMessage();



// PORTFOLIO:

$(window).scroll(function(){
    parallax();
  });
  
  function parallax(){
    var scrolled = $(window).scrollTop();
    $('.bg').css('top',-(scrolled*0.1)+'px');
    $('header .content').css('top',50+(scrolled*0.1)+'%');
    $('header .content').css('opacity',1-(scrolled*0.01)/10);
    $('header .content').css('opacity',1-(scrolled*0.01)/10);
  };
  
  $('.IA_window .full_scr').on('click',function(){
    $(this).parents().toggleClass('f_scr');
    
    $("html, body").animate({ scrollTop: $(this).parents().offset().top }, 500);
  });