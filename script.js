function scrollToElement(elementId) {
    let element = document.getElementById(elementId);
    element.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}
