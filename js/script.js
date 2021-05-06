class Player {
    constructor(album) {
        this._albums = [];
    }
    addAlbum = function(album) {
        this._albums.push(album);
    }
    albumPlayedMost = function() {
        let max = -1;
        let playedMost;

        for (let i = 0; i < this._albums.length; i++) {
            if (this._albums[i]._played > max) {
                max = this._albums[i]._played;
                playedMost = this._albums[i];
            }
        }
        return playedMost.display();
    }
}

class Album {
    constructor(artist, title) {
        this._artist = artist;
        this._title = title;
        this._played = 0;
    }
    play = function() {
        this._played++;
    }
    display = function() {
        return `${this._artist} : ${this._title} has been played the most. The album has been played ${this._played} times.`;
    }
}

const player = new Player();

const album1 = new Album('Green Day', 'Dookie');
const album2 = new Album('The Beatles', 'Sergeant Peppers');
const album3 = new Album('Metallica', 'Ride The Lightning');

player.addAlbum(album1);
player.addAlbum(album2);
player.addAlbum(album3);

album1.play();
album2.play();
album2.play();
album2.play();
album3.play();
album3.play();
album3.play();
album3.play();
album3.play();
album3.play();
album3.play();

console.log(`${player.albumPlayedMost()}`);