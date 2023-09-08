document.addEventListener("DOMContentLoaded", () => {
    const erlaubenBtn = document.getElementById("erlaubenBtn");

    // Überprüfen, ob der Browser Benachrichtigungen unterstützt
    if ("Notification" in window) {
        erlaubenBtn.addEventListener("click", () => {
            Notification.requestPermission()
                .then((permission) => {
                    if (permission === "granted") {
                        console.log("Starting timer");
                        new Notification("Hallo");
                        new Notification("Hallo");
                        new Notification("Hallo");
                        new Notification("Hallo");
                        new Notification("Hallo");
                        setTimeout(() => {
                            const nachricht = new Notification("Hallo");
                        }, 10000); // 60000 Millisekunden = 1 Minute
                    }
                });
        });
    } else {
        alert("Ihr Browser unterstützt keine Benachrichtigungen.");
    }
});
