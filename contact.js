window.onload = function() {
  var optList = document.getElementById('categoryList');
  var msgProb = document.getElementById('labelProblem');
  optList.onchange = function() {
	if (document.getElementById('myProblem').selected) {
		msgProb.hidden = false;
	}
	else {
		msgProb.hidden = true;
	}
  };
};