const heartContainer =
    document.getElementById("heartContainer");

const sparkleContainer =
    document.getElementById("sparkleContainer");


/* ==========================
   HEART POSITIONS
========================== */

const hearts = [

    { x: 8,  y: 44, size: 62 },

    { x: 17, y: 27, size: 49 },

    { x: 24, y: 51, size: 53 },

    { x: 21, y: 10, size: 57 },

    { x: 33, y: 29, size: 40 },

    { x: 30, y: 61, size: 40 },

    { x: 13, y: 36, size: 35 },


    { x: 41, y: 20, size: 37 },

    { x: 48, y: 40, size: 35 },

    { x: 55, y: 17, size: 32 },

    { x: 58, y: 55, size: 47 },


    { x: 71, y: 29, size: 58 },

    { x: 80, y: 52, size: 62 },

    { x: 88, y: 17, size: 57 },

    { x: 83, y: 35, size: 35 },

    { x: 68, y: 46, size: 38 },

    { x: 62, y: 27, size: 42 }

];


const letters =
    ["M", "T"];


hearts.forEach(
    (data, index) => {

        const wrapper =
            document.createElement("div");


        wrapper.className =
            "heart-wrapper";


        wrapper.style.left =
            data.x + "%";


        wrapper.style.top =
            data.y + "%";


        wrapper.style.setProperty(
            "--heart-size",
            data.size + "px"
        );


        wrapper.style.setProperty(
            "--heart-speed",
            (4 + index % 4) + "s"
        );


        wrapper.style.setProperty(
            "--heart-delay",
            (-index * 0.35) + "s"
        );


        const letter =
            letters[index % 2];


        wrapper.innerHTML = `

            <div class="glass-heart"></div>

            <div class="heart-shine"></div>

            <div class="heart-letter">
                ${letter}
            </div>

        `;


        heartContainer.appendChild(
            wrapper
        );

    }
);


/* ==========================
   SPARKLES
========================== */

const sparkleCount = 42;


for (
    let i = 0;
    i < sparkleCount;
    i++
) {

    const sparkle =
        document.createElement("span");


    sparkle.className =
        "sparkle";


    sparkle.style.left =
        Math.random() * 100 + "%";


    sparkle.style.top =
        Math.random() * 66 + "%";


    sparkle.style.setProperty(
        "--spark-size",
        Math.random() * 2.3 + 1 + "px"
    );


    sparkle.style.setProperty(
        "--spark-speed",
        Math.random() * 2 + 2 + "s"
    );


    sparkle.style.setProperty(
        "--spark-delay",
        Math.random() * -4 + "s"
    );


    sparkleContainer.appendChild(
        sparkle
    );

}


/* ==========================
   ENTER
========================== */

const enterButton =
    document.getElementById(
        "enterButton"
    );


const transition =
    document.getElementById(
        "pageTransition"
    );


enterButton.addEventListener(
    "click",
    () => {

        transition.classList.add(
            "active"
        );


        setTimeout(
            () => {

                window.location.href =
                    "home.html";

            },

            800
        );

    }
);