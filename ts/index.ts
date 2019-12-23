/**
 *
 * Elijah Cobb
 * elijah@elijahcobb.com
 * https://elijahcobb.com
 *
 */

let imageUrls: string[] = [
	// "http://abadi.me.mtu.edu/wp-content/uploads/2017/12/photoshopped.jpg",
	// "http://abadi.me.mtu.edu/wp-content/uploads/2017/12/converted21-2.jpg",
	// "http://abadi.me.mtu.edu/wp-content/uploads/2019/08/IMG_5946.jpg",
	// "http://abadi.me.mtu.edu/wp-content/uploads/2017/12/converted21-1.jpg",
	// "https://unsplash.com/photos/lQGJCMY5qcM/download?force=true",
	// "https://unsplash.com/photos/pwcKF7L4-no/download?force=true",
	// "https://unsplash.com/photos/gKUC4TMhOiY/download?force=true"
	"back1.jpg",
	"back2.jpg",
	"back3.jpg",
	"back4.jpg",
	"home-afm-magazine.png",
	"pub2.jpg"
];

let titles: string[] = [
	"Our Members",
	"Cutting Edge Research",
	"K-12 Education",
	"Innovation",
	"Distinguished Publications",
	"Featured Publications"
];

let backgroundImage: HTMLDivElement | null = document.getElementById("header-image") as HTMLImageElement;
let titleLabel: HTMLElement | null = document.getElementById("header-label");
let arrow: HTMLElement | null = document.getElementById("arrow");

let imageIndex: number = Math.floor(Math.random() * imageUrls.length) - 1;
if (imageIndex < 0) imageIndex = 0;

function cycleBackgroundView(): void {

	const imageUrl = imageUrls[imageIndex];
	if (backgroundImage == null) return;
	backgroundImage.style.opacity = "0";

	if (titleLabel == null) return;
	titleLabel.style.opacity = "0";

	if (arrow != null) arrow.style.opacity = "0";

	setTimeout(() => {

		if (backgroundImage == null) return;
		backgroundImage.style.backgroundImage = `url('./img/${imageUrl}')`;

		if (titleLabel == null) return;
		titleLabel.innerText = titles[imageIndex];

		setTimeout(() => {

			if (backgroundImage == null) return;
			backgroundImage.style.opacity = "1";

			if (titleLabel == null) return;
			titleLabel.style.opacity = "1";

			if (arrow != null) arrow.style.opacity = "1";

			imageIndex++;

			if (imageIndex >= imageUrls.length) imageIndex = 0;

			setTimeout(cycleBackgroundView, 6000);

		}, 500);

	}, 500);



}

cycleBackgroundView();