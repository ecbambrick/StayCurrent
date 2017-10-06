browser.contextMenus.create({
    id: "open-link-in-current-tab",
    title: "Open Link in Current Tab",
    contexts: ["link"],
});

browser.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId !== "open-link-in-current-tab") {
        return;
    }

    const code = "window.location.href = '" + info.linkUrl + "';";

    browser.tabs
        .executeScript(tab.id, { code })
        .catch(e => console.error("Failed to open link: " + e));
});
