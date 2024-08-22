document.addEventListener('DOMContentLoaded', () => {
    const newsContainer = document.getElementById('news-container');

    const newsArticles = [
        {
            title: 'Breaking News: Major Event Happens',
            content: 'In India, a significant event today, August 21, 2024, is the nationwide Bharat Bandh called by the Reservation Bachao Sangharsh Samiti.'
        },
        {
            title: 'Technology Update: New Gadget Released',
            content: 'Today, UMIDIGI has launched two new smartphones, the Note 100 and G100, which are poised to redefine the market by bringing high-end features like large 120Hz displays to more affordable devices. '
        },
        {
            title: 'Sports: Team Wins Championship',
            content: "the United States men's basketball team won the gold medal at the 2024 Paris Olympics."
        }
    ];

    newsArticles.forEach(article => {
        const articleElement = document.createElement('div');
        articleElement.classList.add('news-article');

        const titleElement = document.createElement('h2');
        titleElement.textContent = article.title;

        const contentElement = document.createElement('p');
        contentElement.textContent = article.content;

        articleElement.appendChild(titleElement);
        articleElement.appendChild(contentElement);

        newsContainer.appendChild(articleElement);
    });
});