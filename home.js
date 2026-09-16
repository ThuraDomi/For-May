const envelope = document.getElementById("envelope");
const letterArea = document.getElementById("letterArea");
const letterPaper = document.getElementById("letterPaper");
const letterHeading = document.getElementById("letterHeading");
const letterText = document.getElementById("letterText");
const signature = document.getElementById("signature");
const tapMessage = document.getElementById("tapMessage");
const nextPageButton = document.getElementById("nextPageButton");

let opened = false;

const message =
    `We've met since July 25, I Fell into your beauty, your Bright and Shiny Eyes.

I hope you will be with me until the end of our lives.

I wish to build our future together.

Hehe, I know we are now in a situationship and I can't wait for the days until we are officially lovers.`;

function typeLetter() {
    let index = 0;
    letterText.innerHTML = "";

    const typing = setInterval(() => {
        const character = message[index];

        if (character === "\n") {
            letterText.innerHTML += "<br>";
        } else {
            letterText.innerHTML += character;
        }

        index++;

        letterPaper.scrollTop = letterPaper.scrollHeight;

        if (index >= message.length) {
            clearInterval(typing);

            setTimeout(() => {
                signature.classList.add("show");

                letterPaper.scrollTo({
                    top: letterPaper.scrollHeight,
                    behavior: "smooth"
                });

                setTimeout(() => {
                    nextPageButton.classList.add("show");
                }, 500);

            }, 400);
        }
    }, 38);
}

envelope.addEventListener("click", () => {
    if (opened) return;

    opened = true;

    envelope.classList.add("open");
    tapMessage.classList.add("hide");

    setTimeout(() => {
        letterArea.classList.add("opened");
    }, 550);

    setTimeout(() => {
        letterHeading.classList.add("show");
    }, 1100);

    setTimeout(() => {
        typeLetter();
    }, 1450);
});

nextPageButton.addEventListener("click", () => {
    window.location.href = "memories.html";
});

letterPaper.addEventListener("wheel", (event) => {
    if (!opened) return;
    event.stopPropagation();
}, { passive: true });