const p_links = [
    'https://github.com/kartiksainix/All_projects/tree/main/Bengaluru%20House%20Prediction',
    'https://github.com/kartiksainix/All_projects/tree/main/Notes%20app',
    'https://github.com/kartiksainix/All_projects/tree/main/University%20Website',
    'https://github.com/kartiksainix/All_projects/tree/main/countdown_timer',
    'https://github.com/kartiksainix/All_projects/tree/main/github_profile_app',
    'https://github.com/kartiksainix/All_projects/tree/main/login%20form',
    'https://github.com/kartiksainix/All_projects/tree/main/movie-search-app',
    'https://github.com/kartiksainix/All_projects/tree/main/quiz_app',
    'https://github.com/kartiksainix/All_projects/tree/main/random_password_generator',
    'https://github.com/kartiksainix/All_projects/tree/main/to_do%20list',
    'https://github.com/kartiksainix/All_projects/tree/main/weather_API',
    // Add more_links corresponding to the buttons
];

document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.project-card .card');

    cards.forEach((card, index) => {
        const button = card.querySelector('.p-btn');
        
        button.addEventListener('click', function () {
            // console.log(`Button in Card ${index + 1} clicked.`);
            
            if (index < p_links.length) {
                // window.location.href =_links[index];
                window.open(p_links[index], '_blank');
            }
        });
    });
});

const c_links = [
    'https://drive.google.com/file/d/12q-5cy2JxfdIrKx14rvIs8itHyFpU5OP/view?usp=sharing',
    'https://drive.google.com/file/d/1gY2xEKxlK0uEs7fMJOsSEwRvPYQwtLP6/view?usp=sharing',
    'https://drive.google.com/file/d/1TYzjJAKLNCUfMAAg3zTD38sA3C3ICLkw/view?usp=sharing',
    'https://drive.google.com/file/d/1wfGxz9c-612CMpCTeRoy0wXzM0Op9kIk/view?usp=sharing',
    'https://drive.google.com/file/d/1shZ5e_bTHfR1wk1_6LCMqJn5arZE9NP2/view?usp=sharing',
    'https://drive.google.com/file/d/1h5Vi5c7L4zn1xXJINH4Nj2cQPbhPUM_O/view?usp=sharing',
    'https://drive.google.com/file/d/1d4gBsbsB0UW6ixOn4QY_cMeO7uFRUldx/view?usp=sharing',
    'https://drive.google.com/file/d/10tHN5rKoCifFDU9t3ngVhrUVmHGh6Bx9/view?usp=sharing',
];

document.addEventListener('DOMContentLoaded', function () {
    const certificationItems = document.querySelectorAll('#certifications li');

    certificationItems.forEach((item, index) => {
        const button = item.querySelector('.c-btn');

        button.addEventListener('click', function () {
            // Check if the index is within the range of links
            if (index < c_links.length) {
                // Open the link in a new tab
                window.open(c_links[index], '_blank');
            }
        });
    });
});





