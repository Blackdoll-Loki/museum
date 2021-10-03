const progress = document.querySelector('.progress');
  
progress.addEventListener('input', function() {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%, #C4C4C4 100%)`
});

const volumeProgress = document.querySelector('.volume');

volumeProgress.addEventListener('input', function() {
  const volume = this.value;
  this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${volume}%, #C4C4C4 ${volume}%, #C4C4C4 100%)`
});