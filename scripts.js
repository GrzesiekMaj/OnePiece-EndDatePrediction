document.addEventListener('DOMContentLoaded', function () {
    // Dane odcinków One Piece
    const totalEpisodes = 1096;

    // Dane o oglądaniu
    let currentEpisode = 251;
    let startDate = new Date('2024-01-25');

    // Wybór elementów HTML
    const currentEpisodeElement = document.getElementById('current-episode');
    const totalEpisodesElement = document.getElementById('total-episodes');
    const remainingEpisodesElement = document.getElementById('remaining-episodes');
    const startDateElement = document.getElementById('start-date');
    const currentDateElement = document.getElementById('current-date');
    const endDateElement = document.getElementById('end-date');

    // Aktualizacja danych na stronie
    function updatePage() {
        // Obliczenia
        const remainingEpisodes = totalEpisodes - currentEpisode;
        const currentDate = new Date();
        const daysWatched = Math.ceil((currentDate - startDate) / (1000 * 60 * 60 * 24));
        const averageEpisodesPerDay = currentEpisode / daysWatched;
        const remainingDays = Math.ceil(remainingEpisodes / averageEpisodesPerDay);
        const endDate = new Date(currentDate.getTime() + remainingDays * (1000 * 60 * 60 * 24));

        // Aktualizacja elementów HTML
        currentEpisodeElement.textContent = currentEpisode;
        totalEpisodesElement.textContent = totalEpisodes;
        remainingEpisodesElement.textContent = remainingEpisodes;
        startDateElement.textContent = formatDate(startDate);
        currentDateElement.textContent = formatDate(currentDate);
        endDateElement.textContent = formatDate(endDate);
    }

    // Formatowanie daty do postaci YYYY-MM-DD
    function formatDate(date) {
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        return `${day}-${month}-${year}`;
    }

    // Inicjalizacja strony
    updatePage();
});
