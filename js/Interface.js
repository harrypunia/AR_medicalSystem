class Interface {
    init() {
        this.container = document.getElementById('interface');
        this.progress = document.getElementsByClassName("waitTime__bar__progress")[0];
        this.progressStatus = 0;
        this.resetPoint = (Math.random() * 50) + 40;
    }
    update() {
        this.animateProgress();
        this.progress.style.width = this.progressStatus + '%';
    }
    animateProgress() {
        this.progressStatus < this.resetPoint ? this.progressStatus+= 0.1 : this.reset(); 
    }
    reset() {
        const randomReason = reason[Math.floor(Math.random() * reason.length)]
        const randomPerson = people[Math.floor(Math.random() * people.length)]
        feed.display(defaultText + " " + randomPerson + " for " + randomReason);
        this.resetProgress();
        this.updateResetPoint();
    }
    resetProgress() {
        this.progressStatus = Math.random() * 50;
    }
    updateResetPoint() {
        this.resetPoint = (Math.random() * 50) + 40;
    }
}