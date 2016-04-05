var countriesWithInternetPercent = {};

_.each(gapminderData, function(datum) {
    var countryName = datum['Internet users (per 100 people)'];
    var internetPercent = datum['2011'];
    var countryNumber;

    //making a json object, making a key with "countryName" and assigning a value, "internetPercent"
    countriesWithInternetPercent[countryName] = internetPercent;

});

console.log(countriesWithInternetPercent);

    document.write('<svg class="chart" width=100% height="5600" id="graph">');
_.each(countriesWithInternetPercent, function(oneCountryWithInternetPercent, oneCountryName) {
    var bar = window.innerWidth * (Math.ceil(oneCountryWithInternetPercent) /110);
    var textLocation = bar + 5;
    var index = Object.keys(countriesWithInternetPercent).indexOf(oneCountryName);
    var x = index * 37;
    var transform = index * 30;
    var r = 150;
    var g = Math.ceil(oneCountryWithInternetPercent/100 * 255);
    var b = 120;

    document.write('  <g transform = "translate(0,' + transform + ')">');
    document.write('  <rect width="' + bar + '" height="29" style="fill:rgb(' + r +', ' + g +', ' + b + ')"></rect>');
    document.write('  <text x="' + textLocation + '" y="15" dy=".35em">' + oneCountryName + ' (' + Math.ceil(oneCountryWithInternetPercent) + '%)' +'</text>');
    document.write('  </g>');

    

});

    document.write('</svg>');
