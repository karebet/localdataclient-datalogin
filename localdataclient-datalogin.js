$(document).ready(function() {
	if (localdataclient !== undefined) {
		if (localdataclient.savelogin==true && localdataclient.savelogin!== undefined) {
			savelogin();
		}

		if (localdataclient.autologin==true && localdataclient.autologin!== undefined) {
			autologin();
		}

		if (localdataclient.deletelogin==true && localdataclient.deletelogin!== undefined) {
			deletelogin();
		}
	}
});
function savelogin() {
	if (typeof(Storage) !== "undefined") {
		var takenTour = localStorage.getItem(sessionthispc);
		if (!takenTour) {
			if (typeof localdataclient !== undefined) {
				savedatauser =JSON.stringify(localdataclient.user);
				localStorage.setItem(sessionthispc, savedatauser);
			}
		}
	}
}
function autologin() {
	if (typeof(Storage) !== "undefined") {
		var takenTour = localStorage.getItem(sessionthispc);
		if (!takenTour) {
			
		}else{
			var ldcstpc = JSON.parse(localStorage.getItem(sessionthispc));
			$.post(CHANGETOURLLOGIN, {user: ldcstpc.user,password: ldcstpc.password}, function(data, textStatus, xhr) {
				if (data.status==true) {
					location.reload(); 
				}else{
					localStorage.removeItem(sessionthispc);
				}
			});
		}
	}
}
function deletelogin() {
	if (typeof(Storage) !== "undefined") {
		var takenTour = localStorage.getItem(sessionthispc);
		if (!takenTour) {
			localStorage.removeItem(sessionthispc);
		}else{
			localStorage.removeItem(sessionthispc);
		}
	}
}
