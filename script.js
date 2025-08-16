const items = [{
        title: "#1 Woramates",
        NamePlayer: "Woramates",
        NameObby: "Tower of Eternal Void",
        location: "EToH: The Eternal Abyss: [Pit of Misery]",
        link: "https://www.youtube.com/watch?v=U_L6khHRkes",
        linkgame: "https://www.roblox.com/games/15873244701/EToH-The-Eternal-Abyss",
        Problem: "None",
    },
    {
        title: "#2 Accelerate303",
        NamePlayer: "Accelerate303",
        NameObby: "Melancholy",
        location: "Melancholy",
        link: "https://www.youtube.com/watch?v=eUC1PxM_avA",
        linkgame: "https://www.roblox.com/games/8728172539/Melancholy",
        Problem: "None",
    },
    {
        title: "#3 OFFee2223",
        NamePlayer: "OFFee2223",
        NameObby: "Frostbite",
        location: "Frostbite",
        link: "https://www.youtube.com/watch?v=M_qEissN3DI",
        linkgame: "https://www.roblox.com/games/6549205615/Frostbite",
        Problem: "None",
    },
    {
        title: "#4 PRX_f0rsakeN",
        NamePlayer: "PRX_f0rsakeN",
        NameObby: "Tower of Vacant Hindrances",
        location: "EToH: The Eternal Abyss: [Pit of Misery]",
        link: "https://www.youtube.com/watch?v=EfNIXeyzTy0",
        linkgame: "https://www.roblox.com/games/15873244701/EToH-The-Eternal-Abyss",
        Problem: "None",
    },
    {
        title: "#5 Krozeq",
        NamePlayer: "Krozeq",
        NameObby: "Shinku no naraku",
        location: "Shinku no naraku",
        tiktoklink: "https://www.tiktok.com/@iammc.fish/video/7143165534140517633?_t=ZS-8yuLSenK2Gv&_r=1",
        linkgame: "https://www.roblox.com/games/5130666899/Shinku-no-naraku",
        Problem: "It can't Wacth on web, you can Wacth on TikTok",
    },
    {
        title: "#6 HackerNewXD",
        NamePlayer: "HackerNewXD",
        NameObby: "Shinku no naraku",
        location: "Shinku no naraku",
        link: "https://www.youtube.com/watch?v=XgpKJf_yWSU",
        linkgame: "https://www.roblox.com/games/5130666899/Shinku-no-naraku",
        Problem: "None",
    },
    {
        title: "#7 Tibet_Dev",
        NamePlayer: "Tibet_Dev",
        NameObby: "Aurora",
        location: "Aurora",
        link: "https://www.youtube.com/watch?v=yo8tsL3SvQw",
        linkgame: "https://www.roblox.com/games/8517938734/Aroura",
        Problem: "None",
    },

    {
        title: "#8 ImN0tPr0t0",
        NamePlayer: "ImN0tPr0t0",
        NameObby: "Tower of Empty Meaningless Patterns",
        location: "Eternal Towers of Hell: [Zone 9]",
        link: "None",
        Image: "image/Screenshot 2025-08-16 023304.png",
        linkgame: "https://www.roblox.com/games/8562822414/Eternal-Towers-of-Hell",
        Problem: "i'm can't find this video lol",
    },

    {
        title: "#9 Snow_o0z",
        NamePlayer: "Snow_o0z",
        NameObby: "Tower of Generation Failure",
        location: "Eternal Towers of Hell: [Ring 8]",
        link: "https://www.youtube.com/watch?v=vsvZ_Eet3ZQ",
        linkgame: "https://www.roblox.com/games/15873244701/EToH-The-Eternal-Abyss",
        Problem: "None",
    },

    {
        title: "#10 Not_xz",
        NamePlayer: "Not_xz",
        NameObby: "Tower of Generation Failure",
        location: "EToH: The Eternal Abyss: [Pit of Misery]",
        link: "https://www.youtube.com/watch?v=TiOQu_PbfWQ",
        linkgame: "https://www.roblox.com/games/15873244701/EToH-The-Eternal-Abyss",
        Problem: "None",
    },
    
];

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
