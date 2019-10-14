"use strict";
/**
 *
 * Elijah Cobb
 * elijah@elijahcobb.com
 * https://elijahcobb.com
 *
 */
let imageUrls = [
    "http://abadi.me.mtu.edu/wp-content/uploads/2017/12/photoshopped.jpg",
    "http://abadi.me.mtu.edu/wp-content/uploads/2017/12/converted21-2.jpg",
    "http://abadi.me.mtu.edu/wp-content/uploads/2019/08/IMG_5946.jpg",
    "http://abadi.me.mtu.edu/wp-content/uploads/2017/12/converted21-1.jpg",
    "https://unsplash.com/photos/lQGJCMY5qcM/download?force=true",
    "https://unsplash.com/photos/pwcKF7L4-no/download?force=true",
    "https://unsplash.com/photos/gKUC4TMhOiY/download?force=true"
];
let titles = [
    "Cutting Edge",
    "Research",
    "Discovery",
    "Innovation"
];
let backgroundImage = document.getElementById("backgroundImage");
let titleLabel = document.getElementById("subtitleLabel");
function getCSSForImageUrl(imageUrl) {
    return `radial-gradient(circle, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.75), black), url("${imageUrl}") no-repeat center`;
}
let imageIndex = Math.floor(Math.random() * imageUrls.length) - 1;
if (imageIndex < 0)
    imageIndex = 0;
let titleIndex = Math.floor(Math.random() * titles.length) - 1;
if (titleIndex < 0)
    titleIndex = 0;
function cycleBackgroundView() {
    const imageUrl = imageUrls[imageIndex];
    const imageCSS = getCSSForImageUrl(imageUrl);
    if (backgroundImage == null)
        return;
    backgroundImage.style.opacity = "0";
    if (titleLabel == null)
        return;
    titleLabel.style.opacity = "0";
    setTimeout(() => {
        if (backgroundImage == null)
            return;
        backgroundImage.style.background = imageCSS;
        if (titleLabel == null)
            return;
        titleLabel.innerHTML = titles[titleIndex];
        setTimeout(() => {
            if (backgroundImage == null)
                return;
            backgroundImage.style.opacity = "1";
            if (titleLabel == null)
                return;
            titleLabel.style.opacity = "1";
            imageIndex++;
            titleIndex++;
            if (imageIndex >= imageUrls.length)
                imageIndex = 0;
            if (titleIndex >= titles.length)
                titleIndex = 0;
            setTimeout(cycleBackgroundView, 4000);
        }, 500);
    }, 500);
}
cycleBackgroundView();
//# sourceMappingURL=index.js.map