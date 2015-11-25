$("#download").submit(function(event){
	event.preventDefault();
	var url = document.getElementById("file_url").value
	var title = /([^\/]+)$/.exec(url)[1]
	var ext = /([^\.]+)$/.exec(url)[1]
	title = decodeURIComponent(title)
	url = url.replace("github.com","raw.githubusercontent.com")
	url = url.replace(/\/blob\/|\/tree\//,"/")
	$.ajax({
	    url: url,
	    type: 'GET',
	    success: function(data) {
		var uriContent = "data:application/"+ext+"," + encodeURIComponent(data);		
		var downloadLink = document.createElement("a");
		downloadLink.href = uriContent;
		downloadLink.download = title;
		document.body.appendChild(downloadLink);
		downloadLink.click();
		document.body.removeChild(downloadLink);
    		}
        });
})

