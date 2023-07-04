function convertBase64() {
    var base64Input = document.getElementById("base64Input").value.trim();

    if (base64Input === "") {
        alert("Please enter a base64-encoded XML document.");
        return;
    }

    try {
        var xmlString = atob(base64Input);
        var parser = new DOMParser();
        var xmlDoc = parser.parseFromString(xmlString, "text/xml");
        var xmlOutput = document.getElementById("xmlOutput");
        xmlOutput.value = formatXml(xmlDoc);
    } catch (error) {
        alert("Error converting base64 to XML: " + error.message);
    }
}

function formatXml(xml) {
    var serializer = new XMLSerializer();
    var xmlString = serializer.serializeToString(xml);
    var formattedXml = '';
    var reg = /(>)(<)(\/*)/g;
    xmlString = xmlString.replace(reg, '$1\r\n$2$3');
    var pad = 0;
    xmlString.split('\r\n').forEach(function (node) {
        var indent = 0;
        if (node.match(/.+<\/\w[^>]*>$/)) {
            indent = 0;
        } else if (node.match(/^<\/\w/)) {
            if (pad !== 0) {
                pad -= 1;
            }
        } else if (node.match(/^<\w([^>]*[^\/])?>.*$/)) {
            indent = 1;
        } else {
            indent = 0;
        }

        var padding = '';
        for (var i = 0; i < pad; i++) {
            padding += '  ';
        }

        formattedXml += padding + node + '\r\n';
        pad += indent;
    });

    return formattedXml;
}