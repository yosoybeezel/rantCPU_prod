function lockPageToPortrait() {
    if (screen.orientation && screen.orientation.lock) {
        screen.orientation.lock("portrait")
            .then(() => {
                console.log("Page locked in portrait mode.");
            })
            .catch((error) => {
                console.error("Failed to lock page in portrait mode:", error);
            });
    } else {
        console.warn("Screen orientation API not supported. Unable to lock page orientation.");
    }
}
