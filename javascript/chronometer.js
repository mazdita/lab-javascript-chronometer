class Chronometer {
 
  constructor() {
    this.currentTime='0';
    this.intervalId='0';
  }
  startClick(callback) {
    serInterval(()=>{
      this.currentTime++;
    },1000);
  }
  getMinutes() {
    return Math.floor(this.currentTime/60);
  }
  getSeconds() {
    return Math.floor(this.currentTime%60);
  }
  twoDigitsNumber() {
    // ... your code goes here
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    // ... your code goes here
  }
  splitClick() {
    // ... your code goes here
  }
}
