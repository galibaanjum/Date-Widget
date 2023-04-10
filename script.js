var weekday = new Array(7);
weekday[0] = "𝒔𝒖𝒏𝒅𝒂𝒚";
weekday[1] = "𝒎𝒐𝒏𝒅𝒂𝒚";
weekday[2] = "𝒕𝒖𝒆𝒔𝒅𝒂𝒚";
weekday[3] = "𝒘𝒆𝒅𝒏𝒆𝒔𝒅𝒂𝒚";
weekday[4] = "𝒕𝒉𝒖𝒓𝒔𝒅𝒂𝒚";
weekday[5] = "𝒇𝒓𝒊𝒅𝒂𝒚";
weekday[6] = " 𝒔𝒂𝒕𝒖𝒓𝒅𝒂𝒚";

const monthNames = ["𝒋𝒂𝒏𝒖𝒂𝒓𝒚", "𝒇𝒆𝒃𝒓𝒖𝒂𝒓𝒚", "𝒎𝒂𝒓𝒄𝒉", "𝒂𝒑𝒓𝒊𝒍", "𝒎𝒂𝒚", "𝒋𝒖𝒏𝒆",
	"𝒋𝒖𝒍𝒚", "𝒂𝒖𝒈𝒖𝒔𝒕", "𝒔𝒆𝒑𝒕𝒆𝒎𝒃𝒆𝒓", "𝒐𝒄𝒕𝒐𝒃𝒆𝒓", "𝒏𝒐𝒗𝒆𝒎𝒃𝒆𝒓", "𝒅𝒆𝒄𝒆𝒎𝒃𝒆𝒓"
];

var today = new Date();
var hrs = today.getHours();
var dayOfWeek = weekday[today.getDay()];
var date = `${dayOfWeek}, ${monthNames[today.getMonth()]} ${today.getDate()}, ${today.getFullYear()}`;

var greet;


if (hrs >= 6  && hrs < 12) { 
	greet = '𝒈𝒐𝒐𝒅 𝒎𝒐𝒓𝒏𝒊𝒏𝒈, 𝒈𝒂𝒍𝒊𝒃𝒂 ⭑  ';
  widget.setAttribute('style', 'color: #C8E6E1 !important');
}
else if (hrs >= 12 && hrs < 17) { 
	greet = '𝒈𝒐𝒐𝒅 𝒂𝒇𝒕𝒆𝒓𝒏𝒐𝒐𝒏, 𝒈𝒂𝒍𝒊𝒃𝒂 ✿ ';
  widget.setAttribute('style', 'color: #C8DFE9 !important');
}
else if (hrs >= 17 && hrs < 21) { 
	greet = '𝒈𝒐𝒐𝒅 𝒆𝒗𝒆𝒏𝒊𝒏𝒈, 𝒈𝒂𝒍𝒊𝒃𝒂 ♡  ';
  widget.setAttribute('style', 'color: #FFDCDE !important');
  }
else if (hrs >= 21) { 
  greet = '𝒈𝒐𝒐𝒅 𝒏𝒊𝒈𝒉𝒕, 𝒈𝒂𝒍𝒊𝒃𝒂 ✧';
  widget.setAttribute('style', 'color: black !important');
}

document.getElementById('widget').innerHTML = `
        <div class="widgetContainer">
          <div id="date"> ${date}</div>
          <div class="greeting">${greet}</div>
        <div/>`;

