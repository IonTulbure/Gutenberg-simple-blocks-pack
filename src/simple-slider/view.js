/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * If you're not making any changes to this file because your project doesn't need any
 * JavaScript running in the front-end, then you should delete this file and remove
 * the `viewScript` property from `block.json`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */

/* eslint-disable no-console */

import Swiper from 'swiper';
import { Autoplay, Keyboard, Navigation, Pagination, Scrollbar } from 'swiper/modules';

// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

// import styles bundle
import 'swiper/css/bundle';

// import "./styles.css";

// This should only be output on the frontend of the site - NOT the editor

document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper', {

        // configure Swiper to use modules
        modules: [Navigation, Pagination, Autoplay, Keyboard, Scrollbar],

        // Optional parameters
        direction: 'horizontal',
        autoplay: {
            delay: 2000,
        },
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
})

console.log("Hello World! (from mcx-simple-slider blocks)");
/* eslint-enable no-console */
