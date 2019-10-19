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
let imageIndex = Math.floor(Math.random() * imageUrls.length) - 1;
if (imageIndex < 0)
    imageIndex = 0;
let titleIndex = Math.floor(Math.random() * titles.length) - 1;
if (titleIndex < 0)
    titleIndex = 0;
function cycleBackgroundView() {
    const imageUrl = imageUrls[imageIndex];
    if (backgroundImage == null)
        return;
    backgroundImage.style.opacity = "0";
    if (titleLabel == null)
        return;
    titleLabel.style.opacity = "0";
    setTimeout(() => {
        if (backgroundImage == null)
            return;
        backgroundImage.style.backgroundImage = `url("${imageUrl}")`;
        if (titleLabel == null)
            return;
        titleLabel.innerText = titles[titleIndex];
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