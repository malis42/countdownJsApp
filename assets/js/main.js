const countdown = document.querySelector('.countdown');

// Set launch date [ms]
const launchDate = new Date('Sep 12, 2020 16:00:00 GMT+1').getTime();

// Update countdown every second
const PLinterval = setInterval(() => {
    // Get today's date and time in ms
    const now = new Date().getTime();

    // Get time difference from now to launch date
    const distance = launchDate - now;

    // Time calculations
    const days = Math.floor(distance / (1000*60*60*24));
    const hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
    const minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
    const seconds = Math.floor((distance % (1000*60)) / (1000));

    // console.log(days, hours, minutes, seconds)

    // Display the result
    countdown.innerHTML = `
        <div>${days}<span>Days</span></div>
        <div>${hours}<span>Hours</span></div>
        <div>${minutes}<span>Minutes</span></div>
        <div>${seconds}<span>Seconds</span></div>
    `;

    // If launchdate passed
    if(distance < 0){
        // Stop countdown
        clearInterval(PLinterval);

        // Style and output text
        countdown.style.color = '#17a2b8';
        countdown.innerHTML = 'Premier League has started!'
    }
}, 1000);