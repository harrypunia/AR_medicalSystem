class Feed {
    init() {
        this.container = document.getElementsByClassName('feed')[0];
        this.content = document.getElementsByClassName('feed__content')[0];
    }
    display(text) {
        this.container.style.animation = 'feed-in 3s ease-in-out 1';
        setTimeout(() => this.container.style.animation = '', 3000)
        this.content.innerHTML = text;
    }
}