var ifrm = document.getElementById('daframe') ; ifrm = ifrm.contentWindow || ifrm.contentDocument.document || ifrm.contentDocument;
ifrm.document.open();
ifrm.document.write('<p style="color:red">Hai</p>');
ifrm.document.close();

