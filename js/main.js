const navToggle = document.querySelector(".hamburger-menu");
const links = document.querySelector(".links");

const dropdownToggle = document.querySelector("#dropdown-toggle");
const dropdownLinks = document.querySelector(".dropdown-links");
const dropdownToggleArrow = document.querySelector("#dropdown-toggle-arrow");

const navLink = document.querySelectorAll(".nav-link");
const dropdownLink = document.querySelectorAll(".dropdown-link");

const desktopDropdown = document.querySelector(".desktop-dropdown");
navToggle.addEventListener("click", () => {
	if (links.classList.contains("show-all-links")) {
		links.classList.remove("show-all-links");
		dropdownLinks.classList.remove("show-dropdown-links");
		dropdownToggleArrow.classList.remove("rotate-180");
		return false;
	}

	if (links.classList.contains("show-links")) {
		links.classList.remove("show-links");
	} else {
		links.classList.add("show-links");
	}
});

dropdownToggle.addEventListener("click", () => {
	// Check if dropdownLinks has the class "show-dropdown-links".
	// TThis means the dropdown is open.
	if (dropdownLinks.classList.contains("show-dropdown-links")) {
		// If it does, remove the class "show-dropdown-links" from dropdownLinks
		// This will close the dropdown
		dropdownLinks.classList.remove("show-dropdown-links");
		dropdownToggleArrow.classList.remove("rotate-180");
		// Remove the class "show-all-links" from links
		// Add the class "show-links" to links
		// This returns the menu back to its default height
		links.classList.remove("show-all-links");
		links.classList.add("show-links");
	}
	// If dropdownLinks does not have the class "show-dropdown-links".
	// This means the dropdown is closed.
	else {
		// If it doesn't, remove the class "show-dropdown-links" from dropdownLinks.
		// This will open the dropdown.
		dropdownLinks.classList.add("show-dropdown-links");
		dropdownToggleArrow.classList.add("rotate-180");
		// Remove the class "show-links" from links
		// Add the class "show-all-links" to links
		// This extends the height of the menu to accommodate the dropdown.
		links.classList.remove("show-links");
		links.classList.add("show-all-links");
	}

	// Desktop dropdown
	if (desktopDropdown.classList.contains("show-desktop-dropdown")) {
		desktopDropdown.classList.remove("show-desktop-dropdown");
	} else {
		desktopDropdown.classList.add("show-desktop-dropdown");
	}
});

navLink.forEach((link) =>
	link.addEventListener("click", () => navToggle.click())
);
dropdownLink.forEach((link) =>
	link.addEventListener("click", () => navToggle.click())
);
