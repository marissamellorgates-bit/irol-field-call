window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  var player = GetPlayer();
var compliance = player.GetVar("ComplianceScore");
var trust = player.GetVar("ClientTrust");
var url = "https://docs.google.com/forms/d/e/1FAIpQLSc5GRjXluaZStq3gDdAw3sRGai0894NQuZsmYUZZXiEDmfXpg/viewform?usp=pp_url&entry.1318437539=Completed+Simulation&entry.679811049=Red&entry.1307888778=" + compliance + "&entry.2099425527=" + trust;
var a = document.createElement('a');
a.href = url;
a.target = '_blank';
a.rel = 'noopener noreferrer';
document.body.appendChild(a);
a.click();
document.body.removeChild(a);

}

window.Script2 = function()
{
  var player = GetPlayer();
var compliance = player.GetVar("ComplianceScore");
var trust = player.GetVar("ClientTrust");
var url = "https://docs.google.com/forms/d/e/1FAIpQLSc5GRjXluaZStq3gDdAw3sRGai0894NQuZsmYUZZXiEDmfXpg/viewform?usp=pp_url&entry.1318437539=Completed+Simulation&entry.679811049=Bronze&entry.1307888778=" + compliance + "&entry.2099425527=" + trust;
var a = document.createElement('a');
a.href = url;
a.target = '_blank';
a.rel = 'noopener noreferrer';
document.body.appendChild(a);
a.click();
document.body.removeChild(a);

}

window.Script3 = function()
{
  var player = GetPlayer();
var compliance = player.GetVar("ComplianceScore");
var trust = player.GetVar("ClientTrust");
var url = "https://docs.google.com/forms/d/e/1FAIpQLSc5GRjXluaZStq3gDdAw3sRGai0894NQuZsmYUZZXiEDmfXpg/viewform?usp=pp_url&entry.1318437539=Completed+Simulation&entry.679811049=Silver&entry.1307888778=" + compliance + "&entry.2099425527=" + trust;
var a = document.createElement('a');
a.href = url;
a.target = '_blank';
a.rel = 'noopener noreferrer';
document.body.appendChild(a);
a.click();
document.body.removeChild(a);

}

window.Script4 = function()
{
  var player = GetPlayer();
var compliance = player.GetVar("ComplianceScore");
var trust = player.GetVar("ClientTrust");
var url = "https://docs.google.com/forms/d/e/1FAIpQLSc5GRjXluaZStq3gDdAw3sRGai0894NQuZsmYUZZXiEDmfXpg/viewform?usp=pp_url&entry.1318437539=Completed+Simulation&entry.679811049=Gold&entry.1307888778=" + compliance + "&entry.2099425527=" + trust;
var a = document.createElement('a');
a.href = url;
a.target = '_blank';
a.rel = 'noopener noreferrer';
document.body.appendChild(a);
a.click();
document.body.removeChild(a);

}

};
