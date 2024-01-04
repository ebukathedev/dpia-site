const navToggle = document.querySelector(".hamburger-menu");
const links = document.querySelector(".links");

const dropdownToggle = document.querySelector("#dropdown-toggle");
const dropdownLinks = document.querySelector(".dropdown-links");

navToggle.addEventListener("click", () => {
	if (links.classList.contains("show-links")) {
		links.classList.remove("show-links");
	} else {
		links.classList.add("show-links");
	}
});

dropdownToggle.addEventListener("click", () => {
	if (dropdownLinks.classList.contains("show-dropdown-links")) {
		dropdownLinks.classList.remove("show-dropdown-links");
		links.classList.remove("show-all-links");
		links.classList.add("show-links");
	} else {
		dropdownLinks.classList.add("show-dropdown-links");
		links.classList.remove("show-links");
		links.classList.add("show-all-links");
	}
});
