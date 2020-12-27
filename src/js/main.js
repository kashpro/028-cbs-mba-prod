/* App styles */
import "@/scss/main.scss";

/* Development stats */
import addWindowStatsElement from './modules/dev.js';
if (process.env.NODE_ENV === "development") {addWindowStatsElement();}

/* Project modules */
import programDetails from "./modules/programDetails.js";
programDetails();
import showMoreSpeakers from "./modules/showMoreSpeakers.js";
showMoreSpeakers();
import reasonsSlider from "./modules/reasonsSlider.js";
reasonsSlider();
import speakersSlider from "./modules/speakersSlider.js";
speakersSlider();
import feedbackSlider from "./modules/feedbackSlider.js";
feedbackSlider();
import countdown from "./modules/countdown.js";
countdown();
import fancybox from "./modules/fancybox.js";
fancybox();