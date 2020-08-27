// const countdown = document.querySelector('.countdown');
const whiteText = '#fbfff4';

// Set launch dates [ms]
const premierLeagueLaunchDate = new Date('Sep 12, 2020 16:00:00 GMT+1').getTime();
const laLigaLaunchDate = new Date('Sep 12, 2020 20:00:00 GMT').getTime();
const bundesligaLaunchDate = new Date('Sep 18, 2020 20:30:00 GMT').getTime();

// Set league names
const premierLeagueName = 'premier-league';
const laLigaName = 'la-liga';
const bundesligaName = 'bundesliga';


function initCountdown(leagueName, launchDate) {
    // Get element by league name id
    const countdownDiv  = document.getElementById(`${leagueName}-countdown`);

    // Update countdown every second
    const interval = setInterval(() => {
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
        countdownDiv.innerHTML = `
        <div id="days">${days}<span>Days</span></div>
        <div id="hours">${hours}<span>Hours</span></div>
        <div id="minutes">${minutes}<span>Minutes</span></div>
        <div id="seconds">${seconds}<span>Seconds</span></div>
    `;

        // If launchdate passed
        if(distance < 0){
            // Stop countdown
            clearInterval(interval);

            // Style and output text
            countdownDiv.style.color = whiteText;
            countdownDiv.innerHTML = 'This league has started!'
        }
    }, 1000);
}

// Init countdowns for every league
initCountdown(premierLeagueName, premierLeagueLaunchDate);
initCountdown(laLigaName, laLigaLaunchDate);
initCountdown(bundesligaName, bundesligaLaunchDate);
