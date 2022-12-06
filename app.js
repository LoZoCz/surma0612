var zapytanieXML = new XMLHttpRequest();

zapytanieXML.open('GET', 'ksiazki.xml', true);
zapytanieXML.send();

zapytanieXML.onreadystatechange = function() {
    if (zapytanieXML.readyState == 4 && zapytanieXML.status == 200) {
        var dokumentXML=zapytanieXML.responseXML;
        
        var x=dokumentXML.getElementsByTagName("ksiazka");

        for (i=0;   i<x.length; i++) {
            elementTR = document.createElement("tr");
            elementTR.id = "xmlTR"+[i];

            miejsceNaTR = document.getElementById("tbody-xml");
            miejsceNaTR.appendChild(elementTR);

            element1TD = document.createElement("td");
            element1TD.id = "xml1TD"+[i];
            element1TD.className = "xml1kolumna";

            miejsceNa1TD = document.getElementById("xmlTR"+[i]);
            miejsceNa1TD.appendChild(element1TD);

            wartosc1XML = dokumentXML.createTextNode(x[i].
            getElementsByTagName("autor")[0]. childNodes[0].nodeValue);

            miejsceNaWartosc1XML = document.getElementById("xml1TD"+[i]);
            miejsceNaWartosc1XML.appendChild(wartosc1XML);

            element2TD = document.createElement("td");
            element2TD.id = "xml2TD"+[i];
            element2TD.className = "xml2kolumna";

            miejsceNa2TD = document.getElementById("xmlTR"+[i]);
            miejsceNa2TD.appendChild(element2TD);

            wartosc2XML = dokumentXML.createTextNode(x[i].
            getElementsByTagName("tytul")[0].childNodes[0].nodeValue);

            miejsceNaWartosc2XML = document.getElementById("xml2TD"+[i]);
            miejsceNaWartosc2XML.appendChild(wartosc2XML);

            element3TD = document.createElement("td");
            element3TD.id = "xml3TD"+[i];
            element3TD.className = "xml3kolumna";

            miejsceNa3TD = document.getElementById("xmlTR"+[i]);
            miejsceNa3TD.appendChild(element3TD);

            wartosc3XML = dokumentXML.createTextNode(x[i].
            getElementsByTagName("cena")[0].childNodes[0].nodeValue);

            miejsceNaWartosc3XML = document.getElementById("xml3TD"+[i]);
            miejsceNaWartosc3XML.appendChild(wartosc3XML);

            element4TD = document.createElement("td");
            element4TD.id = "xml4TD"+[i];
            element4TD.className = "xml4kolumna";

            miejsceNa4TD = document.getElementById("xmlTR"+[i]);
            miejsceNa4TD.appendChild(element4TD);

            wartosc4XML = document.createElement("img");
            wartosc4XML.src = x[i].getElementsByTagName("okladka")
            [0].childNodes[0].nodeValue;
            wartosc4XML.setAttribute("width", "60");
            wartosc4XML.setAttribute("height", "auto");

            miejsceNaWartosc4XML = document.getElementById("xml4TD"+[i]);
            miejsceNaWartosc4XML.appendChild(wartosc4XML);
        }
    }
            
        else {

            }
}
