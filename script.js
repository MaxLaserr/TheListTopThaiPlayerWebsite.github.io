const itemList = document.getElementById('itemList');
const descTitle = document.getElementById('descTitle');
const descContent = document.getElementById('descContent');
const playerName = document.getElementById('playerName');
const obbyName = document.getElementById('obbyName');
const ProblemText = document.getElementById('ProblemText');
const locationText = document.getElementById('locationText');

const youtubeLink = document.getElementById('youtubeLink');
const tiktokLink = document.getElementById('tiktokLink');
const gameLink = document.getElementById('gameLink');

const videoPreview = document.getElementById('videoPreview');
const imagePreview = document.getElementById('imagePreview');

const liElements = itemList.getElementsByTagName('li');



function updateContent(index) {
    const item = items[index];
    descTitle.textContent = item.title;
    playerName.textContent = item.NamePlayer;
    obbyName.textContent = item.NameObby;
    
    if (item.link && item.link !== "None") {
        const videoId = item.link.split('v=')[1];
        videoPreview.src = `https://www.youtube.com/embed/${videoId}`;
        videoPreview.style.display = 'block';
        youtubeLink.href = item.link;
        youtubeLink.style.display = 'inline-block';
        youtubeLink.textContent = 'Wacth on Youtube';
    } else {
        videoPreview.style.display = 'none';
        youtubeLink.style.display = 'none';
        
    }

    if (item.tiktoklink && item.tiktoklink !== "None") {
        const videoId = item.tiktoklink.split('v=')[1];
        tiktokLink.href = item.tiktoklink;
        tiktokLink.style.display = 'inline-block';
        tiktokLink.textContent = 'Wacth on TikTok';
    } else {
        tiktokLink.style.display = 'none';
        
    }

    if (item.Image) {
        imagePreview.src = item.Image;
        imagePreview.style.display = 'block';
    } else {
        imagePreview.style.display = 'none';
    }
    
    if (item.linkgame) {
        gameLink.href = item.linkgame;
        gameLink.style.display = 'inline-block';
    } else {
        gameLink.style.display = 'none';
    }

    if (item.Problem && item.Problem !== "None") {
        ProblemText.textContent = item.Problem;
        ProblemText.style.display = 'block';
    } else {
        ProblemText.style.display = 'none';
    }

    if (item.location) {
        locationText.textContent = item.location;
        locationText.style.display = 'block';
    }
}

for (let i = 0; i < liElements.length; i++) {
    liElements[i].addEventListener('click', function() {
        for (let j = 0; j < liElements.length; j++) {
            liElements[j].classList.remove('selected');
        }
        this.classList.add('selected');
        updateContent(i);
    });
}

updateContent(0);