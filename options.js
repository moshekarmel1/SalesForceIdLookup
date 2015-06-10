(function(){
	function save() {
		var orgMap = {};
		orgMap['prod'] = document.getElementById('prod').value || '';
		orgMap['test'] = document.getElementById('test').value || '';
		//orgMap['searchBox'] = document.getElementById('searchBox').value || '';
		localStorage['orgMap'] = JSON.stringify(orgMap);
		return false;
	}
	document.getElementById('save').addEventListener('click', save);
	if(localStorage['orgMap']){
		var storage = JSON.parse(localStorage['orgMap']);
		document.getElementById('prod').value = storage["prod"] || '';
		document.getElementById('test').value = storage["test"] || '';
		//document.getElementById('searchBox').value = storage["searchBox"] || '';
	}
})();
