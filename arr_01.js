/*********   Theorie **********/

// push() / pop()
// push --> Daten rein ... (+)


// pop() --> Daten raus ... (-)



/*
Aufgabe:
Erstellen Sie eine JS-Struktur, die Ihnen den folgenden String 
einer HTML-Seite ausgibt:
<html><head></head><body><h1></h1><p></p></body></html>
Verwenden Sie dafür die untenstehenden Arrays
*/

const ERR_STR   = "ERROR";
const COBJ      = {open_o:"<",close_o:"</",close:">"}
const CONTROLS  = ["<", "</", ">"];
const TAGS = [  "html",
				"head","head",
				"body",
                "h1","h1",
                "p","p",
                "ul","li","li","li","li","li","li","ul",
                "p","p",
                "ol","li","li","ol",
                "body",
				"html"
            ];

let stack = [];

// Modul: HTML-Synthese | Test
output(getHTML());
function getHTML() {
  
    let htmlStr = "";

    for (let i = 0; i < TAGS.length; i++) {
        if (condition) 
        // if(true)
        // if(false)
        {
            htmlStr += getElement(TAGS[i],"open");
        } else {
            htmlStr += getElement(TAGS[i],"close");
        }
    }

   return htmlStr;
}


// Modul: Zusammenbau der Elements: <tagStr> --> Tests:
// output(getElement(TAGS[1],"open"));
// output(getElement(TAGS[1],"close"));
// output(getElement(TAGS[1]));
function getElement(tag,op) {
    switch (op) {
        case "open":
            return COBJ.open_o + tag + COBJ.close;
        case "close":
            return COBJ.close_o + tag + COBJ.close;
        default:
            return ERR_STR;
    }
}






// Modul: Ausgabe | Test
//output("hi");
function output(outputData) {
    console.log(outputData);
}