function readTextFile(file)
{
	var text = "";
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                text = rawFile.responseText;
            }
        }
    }
    rawFile.send(null);
    return text;
}

var languages = []
var text = readTextFile("/src/lang/locales.js");
text = text.replace("export default ", "");
text = text.replace(/(['"])?([a-zA-Z0-9]+)(['"])?:/g, '"$2":');
text = JSON.parse(text);

for(var key in text) {
	if(text.hasOwnProperty(key)) {
		languages.push(key)
	}
}

/** Store all Routes paths */

var allRoutesPath = []
text = readTextFile("/src/route/routes.js");
text = text.split("export default ").pop();
text = text.replace("/:", "");
text = text.replace(/'/g, '"');
text = text.replace(/(['"])?([a-zA-Z0-9-/]+)(['"])?/g, '"$2"');
text = JSON.parse(text);

for(var key in text[1].children) {
	if(text[1].children.hasOwnProperty(key)) {
		for(var i = 0; i < languages.length; i++)
			if(text[1].children[key].path !== "*")
				allRoutesPath.push('/' + languages[i] + '/' + text[1].children[key].path)
	}
}

export default JSON.stringify(allRoutesPath)