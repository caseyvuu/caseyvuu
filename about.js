let image;

const getFriends = () => {
    document.getElementById("friends");
    image = document.getElementById("image");
    friends.onmouseover = () => {
        image.src = 'images/friends.png';
    }
    friends.onmouseout = () => {
        image.src = 'images/a.png';
    }
}

const getNature = () => {
    document.getElementById("nature");
    image = document.getElementById("image");
    nature.onmouseover = () => {
        image.src = 'images/nature.png';
    }
    nature.onmouseout = () => {
        image.src = 'images/a.png';
    }
}

const getBeach = () => {
    document.getElementById("beach");
    image = document.getElementById("image");
    beach.onmouseover = () => {
        image.src = 'images/beach.png';
    }
    beach.onmouseout = () => {
        image.src = 'images/a.png';
    }
}

const getSports = () => {
    document.getElementById("sports");
    image = document.getElementById("image");
    sports.onmouseover = () => {
        image.src = 'images/football.png';
        one.innerHTML = "'NFL(Bills)'";
        two.innerHTML = "'MLB'";
        three.innerHTML = "'NBA'";
        four.innerHTML = "'SEC FB'";
    }
    sports.onmouseout = () => {
        image.src = 'images/a.png';
        one.innerHTML = "'Java'";
        two.innerHTML = "'Javascript'";
        three.innerHTML = "'HTML'";
        four.innerHTML = "'CSS'";
    }
}

const getVideoGames = () => {
    document.getElementById("videogames");
    image = document.getElementById("image");
    videogames.onmouseover = () => {
        image.src = 'images/videogame.png';
        one.innerHTML = "'Valorant'";
        two.innerHTML = "'God of War'";
        three.innerHTML = "'Minecraft'";
        four.innerHTML = "'More...'";
    }
    videogames.onmouseout = () => {
        image.src = 'images/a.png';
        one.innerHTML = "'Java'";
        two.innerHTML = "'Javascript'";
        three.innerHTML = "'HTML'";
        four.innerHTML = "'CSS'";
    }
}

const getDC = () => {
    document.getElementById("dc");
    image = document.getElementById("image");
    dc.onmouseover = () => {
        image.src = 'images/batman.png';
    }
    dc.onmouseout = () => {
        image.src = 'images/a.png';
    }
}

const getTennis = () => {
    document.getElementById("tennis");
    image = document.getElementById("image");
    tennis.onmouseover = () => {
        image.src = 'images/tennis.png';
    }
    tennis.onmouseout = () => {
        image.src = 'images/a.png';
    }
}


window.onload = () => {
    getTennis();
    getFriends();
    getBeach();
    getSports();
    getNature();
    getVideoGames();
    getDC();
}