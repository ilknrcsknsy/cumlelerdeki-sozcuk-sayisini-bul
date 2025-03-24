function ExecuteScript(strId)
{
  switch (strId)
  {
      case "66dcVnznGf7":
        Script1();
        break;
      case "5uBOA4BRVOk":
        Script2();
        break;
      case "5XbEnzZiuM8":
        Script3();
        break;
      case "6VGg3LRd9Lf":
        Script4();
        break;
      case "6e3hWFw39Lt":
        Script5();
        break;
      case "6qanSPHVe6m":
        Script6();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  const target = object('5xwHIhf74gx');
const duration = 750;
const easing = 'ease-out';
const id = '61crIMilxQp';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  const target = object('6b2c4HFHLpa');
const duration = 750;
const easing = 'ease-out';
const id = '5Xsc4Mn6cVK';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  const target = object('5XHIqKZqva0');
const duration = 750;
const easing = 'ease-out';
const id = '6or7wFZL1EW';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script4 = function()
{
  const target = object('6US3Cw17Mt4');
const duration = 750;
const easing = 'ease-out';
const id = '61crIMilxQp';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script5 = function()
{
  const target = object('5puiUKo8TbX');
const duration = 750;
const easing = 'ease-out';
const id = '5Xsc4Mn6cVK';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script6 = function()
{
  const target = object('6LEM2JFHLs2');
const duration = 750;
const easing = 'ease-out';
const id = '6or7wFZL1EW';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

};
