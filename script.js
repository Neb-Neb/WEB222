function loadHomePage() {
  removePage();

  var mainBody = document.getElementById('body');

  var newImage1 = document.createElement('img');
  mainBody.appendChild(newImage1);
  newImage1.src = 'images/computer_intro.jpg';
  newImage1.className = 'intro_image1';

  var newImage2 = document.createElement('img');
  mainBody.appendChild(newImage2);
  newImage2.src = 'images/gpu_intro.jpg';
  newImage2.className = 'intro_image2';

  var newHeader = document.createElement('h2');
  mainBody.appendChild(newHeader);
  newHeader.className = 'header_content';
  var textHeader = document.createTextNode('INTRODUCTION');
  newHeader.appendChild(textHeader);

  var newDesc = document.createElement('h6');
  mainBody.appendChild(newDesc);
  newDesc.className = 'header_content';
  var breakLine1 = document.createElement('br');
  var breakLine2 = document.createElement('br');
  var textDesc0 = document.createTextNode('UNLIMITED, ENDLESS,');
  var textDesc1 = document.createTextNode("ONLY AT ETHEREAL'S WORKSHOP.");
  newDesc.appendChild(textDesc0);
  newDesc.appendChild(breakLine1);
  newDesc.appendChild(textDesc1);
  newDesc.appendChild(breakLine2);

  var newDiv0 = document.createElement('div');
  mainBody.appendChild(newDiv0);
  newDiv0.className = 'header_content';
  var divText = document.createTextNode(
    "Dive into one of Ontario's most prestigious computer shop, and find an endless amount of options to select from for your own collection."
  );
  newDiv0.appendChild(divText);

  var newLine = document.createElement('hr');
  mainBody.appendChild(newLine);

  var newDiv = document.createElement('div');
  mainBody.appendChild(newDiv);
  newDiv.id = 'items';

  for (var x = 0; x < items.length; x++) {
    if (items[x].Category === 'Accessories' || items[x].Category === 'Desktop/Monitor') {
      addItem(newDiv, items[x]);
    }
  }
}

function addItem(itemsContainer, item) {
  var newDiv = document.createElement('div');

  var newImg = document.createElement('img');
  var itemCode = item.Code;
  var itemSource = `images/${itemCode}.jpg`;
  newImg.src = itemSource;
  newImg.className = 'home_image';
  newImg.alt = item.Source;

  var newTitle = document.createElement('h2');
  var textTitle = document.createTextNode(`${item.Name} ($${item.Price}CAD)`);
  newTitle.appendChild(textTitle);
  newTitle.className = 'image_name';

  var newDesc = document.createElement('h6');
  var textDesc = document.createTextNode(item.Description);
  newDesc.appendChild(textDesc);
  newDesc.className = 'image_name';

  itemsContainer.appendChild(newDiv);
  newDiv.appendChild(newImg);
  newDiv.appendChild(newTitle);
  newDiv.appendChild(newDesc);
}

function changeHeader(newHeaderText, newDescriptionText) {
  removePage();

  var mainBody = document.getElementById('body');

  var newHeader = document.createElement('h2');
  mainBody.appendChild(newHeader);
  newHeader.className = 'header_content';
  var textHeader = document.createTextNode(newHeaderText);
  newHeader.appendChild(textHeader);

  var newDiv0 = document.createElement('div');
  mainBody.appendChild(newDiv0);
  newDiv0.className = 'header_content';
  var divText = document.createTextNode(newDescriptionText);
  newDiv0.appendChild(divText);

  var newLine = document.createElement('hr');
  mainBody.appendChild(newLine);

  var newDiv = document.createElement('div');
  mainBody.appendChild(newDiv);
  newDiv.id = 'items';

  for (var x = 0; x < items.length; x++) {
    if (newHeaderText === items[x].Category) {
      addItem(newDiv, items[x]);
    }
  }
}

function removePage() {
  var body = document.getElementById('body');
  while (body.firstChild) {
    body.removeChild(body.firstChild);
  }
}

window.onload = function() {
  loadHomePage();

  var menuZero = document.getElementById('menu_0');
  menuZero.onclick = function() {
    loadHomePage();
  };

  var menuOne = document.getElementById('menu_1');
  menuOne.onclick = function() {
    loadHomePage();
  };

  var menuTwoOne = document.getElementById('menu_21');
  menuTwoOne.onclick = function() {
    changeHeader('Desktop/Monitors', 'You are now browsing our desktop and monitor selection.');
  };

  var menuTwoTwo = document.getElementById('menu_22');
  menuTwoTwo.onclick = function() {
    changeHeader('Laptops', 'You are now browsing our laptop selection.');
  };

  var menuTwoThree = document.getElementById('menu_23');
  menuTwoThree.onclick = function() {
    changeHeader('Hardware', 'You are now browsing our hardware selection.');
  };

  var menuTwoFour = document.getElementById('menu_24');
  menuTwoFour.onclick = function() {
    changeHeader('Accessories', 'You are now browsing our accessory selection.');
  };
  
  var menuThreeOne = document.getElementByid('menu_31');
  menuThreeOne.onclick = function() {
	  changeHeader('Contact us', '');
  }
};
