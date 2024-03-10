document.addEventListener('DOMContentLoaded', function () {
    const totalEpisodes = 1096;

    let currentEpisode = localStorage.getItem('currentEpisode');
    if (currentEpisode === null) {
        currentEpisode = 210; 
    } else {
        currentEpisode = parseInt(currentEpisode);
    }

    let startDate = new Date('2024-01-25');

    const currentEpisodeElement = document.getElementById('current-episode-display');
    const totalEpisodesElement = document.getElementById('total-episodes');
    const remainingEpisodesElement = document.getElementById('remaining-episodes');
    const startDateElement = document.getElementById('start-date');
    const currentDateElement = document.getElementById('current-date');
    const endDateElement = document.getElementById('end-date');

    function updatePage() {
        const remainingEpisodes = totalEpisodes - currentEpisode;
        const currentDate = new Date();
        const daysWatched = Math.ceil((currentDate - startDate) / (1000 * 60 * 60 * 24));
        const averageEpisodesPerDay = currentEpisode / daysWatched;
        const remainingDays = Math.ceil(remainingEpisodes / averageEpisodesPerDay);
        const endDate = new Date(currentDate.getTime() + remainingDays * (1000 * 60 * 60 * 24));

        currentEpisodeElement.textContent = currentEpisode;
        totalEpisodesElement.textContent = totalEpisodes;
        remainingEpisodesElement.textContent = remainingEpisodes;
        startDateElement.textContent = formatDate(startDate);
        currentDateElement.textContent = formatDate(currentDate);
        endDateElement.textContent = formatDate(endDate);
    }

    function formatDate(date) {
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        return `${day}-${month}-${year}`;
    }

    updatePage();

    window.updateCurrentEpisode = function () {
        const newEpisodeInput = document.getElementById('new-episode');
        const newEpisodeValue = Number(newEpisodeInput.value);

        const passwordInput = document.getElementById('password');
        const password = passwordInput.value;

        if (password === 'mugiwaranoluffy') {
            if (!isNaN(newEpisodeValue)) {
                currentEpisode = newEpisodeValue;

                localStorage.setItem('currentEpisode', currentEpisode);

                updatePage();
            } else {
                alert('Wprowadź poprawny numer odcinka.');
            }
        } else {
            alert('Arek... proszę nie kombinować.');
        }
    };
});
