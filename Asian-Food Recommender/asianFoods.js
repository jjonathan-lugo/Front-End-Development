"use strict";

(function () {
    /* --- 1) Slideshow Animation --- */
    const slideshow = document.getElementById("foodSlideshow");
    if (slideshow) {
        const slides = slideshow.querySelectorAll(".slide");
        const dotsContainer = document.querySelector(".slideshow-dots");
        if (slides.length && dotsContainer) {
            let current = 0;
            let intervalId = null;
            const intervalMs = 2000; //speed of next slide

            function show(index) {
                current = (index + slides.length) % slides.length;
                slides.forEach(function (slide, i) {
                    slide.classList.toggle("active", i == current);
                });
                const buttons = dotsContainer.querySelectorAll("button");
                buttons.forEach(function (button, i) {
                    const selected = i == current;
                    button.setAttribute("aria-selected", selected ? "true" : "false");
                });
            }

            //for the button section where if press inter resets
            slides.forEach(function (_, i) {
                const button = document.createElement("button");
                button.addEventListener("click", function () {
                    show(i);
                });
                dotsContainer.appendChild(button);
            });

            function next() {
                show(current + 1);
            }

            function resetTimer() {
                if (intervalId) clearInterval(intervalId);
                intervalId = setInterval(next, intervalMs);
            }

            show(0);
            resetTimer();
        }
    }

    /* --- Theme toggle Interaction --- */
    const root = document.documentElement;
    const themeButton = document.getElementById("toggleTheme");

    function applyTheme(light) {
        if (light) {
            root.classList.add("lightTheme");
        } else {
            root.classList.remove("lightTheme");
        }
    }

    if (themeButton) {
        themeButton.addEventListener("click", function () {
            applyTheme(!root.classList.contains("lightTheme"));
        });
    }

    /* --- Conveyor Belt Animation --- */
    const tipsClick = document.getElementById("kitchenTips");
    if (tipsClick) {
        tipsClick.addEventListener("click", function (e) {
            const trigger = e.target.closest(".tips-trigger-design");
            if (!trigger || !tipsClick.contains(trigger)) return;

            const expanded = trigger.getAttribute("aria-expanded") === "true";
            const panelId = trigger.getAttribute("aria-controls");
            const panel = panelId ? document.getElementById(panelId) : null;
            tipsClick.querySelectorAll(".tips-trigger-design").forEach(function (t) {
                const id = t.getAttribute("aria-controls");
                const p = id ? document.getElementById(id) : null;
                const isThis = t === trigger;
                t.setAttribute("aria-expanded", isThis && !expanded ? "true" : "false");
                if (p) {
                    if (isThis && !expanded) {
                        p.removeAttribute("hidden");
                    } else {
                        p.setAttribute("hidden", "");
                    }
                }
            });
        });
    }
})();
