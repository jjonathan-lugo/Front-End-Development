"use script"
const sections = [
    { id: "#top-page", label: "TO TOP" },
    { id: "#section1", label: "SECTION 1" },
    { id: "#section2", label: "SECTION 2" },
    { id: "#section3", label: "SECTION 3" },
    { id: "#section4", label: "SECTION 4" },
    { id: "#section5", label: "SECTION 5" },
    { id: "#section6", label: "SECTION 6" },
    { id: "#section7", label: "SECTION 7" },
    { id: "#section8", label: "SECTION 8" },
    { id: "#section9", label: "SECTION 9" },
    { id: "#section10", label: "SECTION 10" },
    { id: "#section11", label: "REFERENCES" },
];

// Theme Toggle Logic
const mainTitle = document.getElementById('main-title');

mainTitle.addEventListener('click', () => {
    document.body.classList.toggle('white-theme');

});

//Random Fact Generator
const factButton = document.getElementById('factButton');
const showFacts = document.getElementById('showFacts');

const universeFacts = [
    "In a parallel world, <em>dinosaurs</em> might have never gone extinct.",
    "The <strong>'Many-Worlds'</strong> interpretation suggests every decision creates a new universe.",
    "Some physicists believe the <u>Big Bang</u> was actually a collision between two universes.",
    "There could be a version of <strong>you</strong> that is a famous astronaut right now.",
    "The 5th dimension may contain <em>every possible timeline</em> of your life."
];

factButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * universeFacts.length);
    showFacts.innerHTML = "<strong>MULTIVERSE FACT:</strong> " + universeFacts[randomIndex];
});

//Slider Part
let currentIndex = 0;

const allDisplays = document.querySelectorAll('.showSection');
const allPrevBtns = document.querySelectorAll('.previous');
const allNextBtns = document.querySelectorAll('.next');

function updateSlider(index) {
    currentIndex = index;
    const section = sections[currentIndex];
    
    allDisplays.forEach(display => {
        display.textContent = section.label;
        display.href = section.id;
    });
}

allPrevBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        if (currentIndex === 0) {
            currentIndex = sections.length - 1;
        } else {
            currentIndex = currentIndex - 1;
        }
        updateSlider(currentIndex);
    });
});

allNextBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        if (currentIndex === sections.length - 1) {
            currentIndex = 0;
        } else {
            currentIndex = currentIndex + 1;
        }
        updateSlider(currentIndex);
    });
});

allDisplays.forEach(display => {
    display.addEventListener('click', (e) => {
        e.preventDefault();
        
        const sectionId = display.getAttribute('href');
        const targetElement = document.querySelector(sectionId);
        
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});


// Dropdown Part
const allDropdowns = document.querySelectorAll('.section-dropdown');

allDropdowns.forEach(dropdown => {
    sections.forEach(section => {
        const option = document.createElement('option');
        option.value = section.id;
        option.textContent = section.label;
        dropdown.appendChild(option);
    });

    dropdown.addEventListener('change', (e) => {
        const targetId = e.target.value;
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Hover Text Appear
const navItems = document.querySelectorAll('nav ul li');

navItems.forEach((item, index) => {
    item.addEventListener('mouseenter', () => {
        const nextItem = navItems[index + 1];
        if (nextItem) {
            nextItem.classList.add('is-visible');
        }
    });
});

