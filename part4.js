function generateFaces() {
    var numberOfFaces = 5;
    var theLeftSide = document.getElementById("leftSide");
    for (i = 0; i < numberOfFaces; ++ i) {
        squidward_dab = document.createElement("img");
        squidward_dab.src = "http://ih1.redbubble.net/image.195819531.9489/sticker,375x360.u2.png";
        squidward_dab.style.top = Math.floor(Math.random() * 401) + "px";
        squidward_dab.style.left = Math.floor(Math.random() * 401) + "px";
        theLeftSide.appendChild(squidward_dab);
    }
    var theRightSide = document.getElementById("rightSide");
    leftSideImages = theLeftSide.cloneNode(true);
    leftSideImages.removeChild(leftSideImages.lastChild);
    theRightSide.appendChild(leftSideImages);

    var theBody = document.getElementsByTagName("body")[0];
    theLeftSide.lastChild.onclick =
        function nextLevel(event) {
            event.stopPropagation();
            numberOfFaces += 5;
            generateFaces();
        };
    theBody.onclick = function gameOver() {
        alert("Game Over!");
        theBody.onclick = null;
        theLeftSide.lastChild.onclick = null;
    }
}