window.onload = function(){
var customName = document.getElementById('customname'); //文本框
var randomize = document.querySelector('.randomize'); //按钮
var story = document.querySelector('.story'); //底部生成的故事

 /*
  函数功能： 函数需要一个数组作为参数，然后随机返回数组中的一个元素
  */
  function randomValueFromArray(array){
    var random = Math.floor(Math.random()*array.length);
    return array[random];
  }

/*
  一些字符串，会被输入进我们的项目
  1. 在 storyText 变量中保存第一个长长的字符串。
  2. 在 insertX 数组中保存第一组字符串（包含三个字符串）。
  3. 在 insertY 数组中保存第二组字符串（包含三个字符串）。
  4. 在 insertZ 数组中保存第三组字符串（包含三个字符串）。
  */

  var storyText = 'It was 94 farenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';

  var insertX = ['Willy the Goblin','Big Daddy','Father Christmas'];

  var insertY = ['the soup kitchen','Disneyland','the White House'];

  var insertZ = ['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away'];

  randomize.addEventListener('click', result);

//给randomize变量增加一个“点击”时间监听器

 /*
  函数功能： 每次按钮按下，就会产生一个新的随机笑话
  */
  function result() {
    var newStory = storyText;

    var xItem = randomValueFromArray(insertX);
    var yItem = randomValueFromArray(insertY);
    var zItem = randomValueFromArray(insertZ);

    newStory = newStory.replace(':insertx:',xItem);
    newStory = newStory.replace(':insertx:',xItem);
    newStory = newStory.replace(':inserty:',yItem);
    newStory = newStory.replace(':insertz:',zItem);

    var name = customName.value;
    if(name !== '') {
      newStory = newStory.replace('Bob',name);
    }

    if(document.getElementById("uk").checked) {
      var weight = Math.round(300*0.0714286) + ' stone';
      var temperature =  Math.round((94-32) * 5 / 9) + ' centigrade';
      newStory = newStory.replace('94 farenheit',temperature);
      newStory = newStory.replace('300 pounds',weight);
    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
  }
}
