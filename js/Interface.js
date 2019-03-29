class Interface {
    init() {
        this.container = document.getElementById('interface');
        this.progress = document.getElementsByClassName("waitTime__bar__progress")[0];
        this.resetPoint = (Math.random() * 50) + 40;
        this.progressStatus = 0;
        this.feedContentIndex = 0;
        feed.display(reason[this.feedContentIndex]);
        this.feedContentIndex++;
    }
    update() {
        this.animateProgress();
        this.progress.style.width = this.progressStatus + '%';
    }
    animateProgress() {
        this.progressStatus < this.resetPoint ? this.progressStatus+= 0.1 : this.reset(); 
    }
    reset() {
        feed.display(reason[this.feedContentIndex]);
        this.feedContentIndex++;
        this.resetProgress();
        this.resetStartPoint();
        setTimeout(() => {
            audio.play();
            feed.display(reason[this.feedContentIndex]);
            this.feedContentIndex++;
        }, 3200);
        this.feedContentIndex == reason.length ? this.feedContentIndex = 0 : 0;
    }
    resetProgress() {
        this.progressStatus = Math.random() * 20;
    }
    resetStartPoint() {
        this.resetPoint = (Math.random() * 20) + 60;
    }
}