/*=========================================
LEOS WEAR GOLDEN LANDING
Production JavaScript
=========================================*/

/*=========================================
LEOS WEAR SETTINGS
EDIT ONLY THIS SECTION
=========================================*/

const SETTINGS = {

    badge: "👑 GOLDEN MEMBER",

    offerTitle: "Golden Member Exclusive",

    discount: "LKR 399 OFF",

    minimumPurchase: "LKR 1500",

    couponCode: "AWE678",

    expiry: "31 July 2026",
    description: "Enjoy your exclusive monthly reward specially prepared for our Golden Members.",

    whatsappNumber: "94766096668",
    offerEndDate: "2026-07-30T00:00:00"

};

/*=========================================
COUNTDOWN
=========================================*/

// Set next month's 1st day at midnight
const targetDate = new Date(SETTINGS.offerEndDate);

function updateCountdown() {

    const current = new Date();
    const diff = targetDate - current;

    if (diff <= 0) {

        document.getElementById("days").innerText = "00";
        document.getElementById("hours").innerText = "00";
        document.getElementById("minutes").innerText = "00";
        document.getElementById("seconds").innerText = "00";
const status = document.getElementById("offerStatus");
const copyBtn = document.getElementById("copyBtn");
const claimButton = document.getElementById("claimButton");
const stickyClaim = document.getElementById("stickyClaim");

if(status){

    status.textContent = "🔴 Offer Expired";
    status.classList.remove("active");
    status.classList.add("expired");

}

if(copyBtn){

    copyBtn.disabled = true;
    copyBtn.innerText = "Offer Expired";

}

if(claimButton){

    claimButton.style.pointerEvents = "none";
    claimButton.style.opacity = ".5";

}

if(stickyClaim){

    stickyClaim.style.pointerEvents = "none";
    stickyClaim.style.opacity = ".5";

}
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = String(days).padStart(2, "0");
    document.getElementById("hours").innerText = String(hours).padStart(2, "0");
    document.getElementById("minutes").innerText = String(minutes).padStart(2, "0");
    document.getElementById("seconds").innerText = String(seconds).padStart(2, "0");

}

updateCountdown();
setInterval(updateCountdown, 1000);

/*=========================================
COPY COUPON
=========================================*/
/*=========================================
AUTO FILL WEBSITE CONTENT
=========================================*/

const badge = document.getElementById("offerBadge");
const title = document.getElementById("offerTitle");
const discount = document.getElementById("offerDiscount");
const minimum = document.getElementById("minimumPurchase");
const expiry = document.getElementById("expiryDate");
const description = document.getElementById("offerDescription");
const coupon = document.getElementById("couponCode");

if (badge) badge.textContent = SETTINGS.badge;
if (title) title.textContent = SETTINGS.offerTitle;
if (discount) discount.textContent = SETTINGS.discount;
if (minimum) minimum.textContent = SETTINGS.minimumPurchase;
if (expiry) expiry.textContent = SETTINGS.expiry;
if (description) description.textContent = SETTINGS.description;
if (coupon) coupon.textContent = SETTINGS.couponCode;
const copyBtn = document.getElementById("copyBtn");

if (copyBtn) {

    copyBtn.addEventListener("click", async () => {

        try {

            await navigator.clipboard.writeText(SETTINGS.couponCode);
            copyBtn.innerText = "✅ Copied!";

            const toast = document.getElementById("toast");

            if (toast) {
                toast.classList.add("show");
            }

            if (navigator.vibrate) {
                navigator.vibrate(80);
            }

            setTimeout(() => {

                copyBtn.innerText = "Copy Coupon";

                if (toast) {
                    toast.classList.remove("show");
                }

            }, 2000);

        } catch {

            alert("Copy Failed");

        }

    });

}

/*=========================================
WHATSAPP FUNCTION
=========================================*/

function openWhatsApp() {

    const message =
`Hi Leos Wear 👋

I want to claim my Golden Member Discount.

Coupon Code: ${SETTINGS.couponCode}`;

    const url = `https://wa.me/${SETTINGS.whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");

}



/*=========================================
WHATSAPP BUTTONS
=========================================*/

const claimButton = document.getElementById("claimButton");

if (claimButton) {

    claimButton.addEventListener("click", function (e) {

        e.preventDefault();

        openWhatsApp();

    });

}

const stickyClaim = document.getElementById("stickyClaim");

if (stickyClaim) {

    stickyClaim.addEventListener("click", function (e) {

        e.preventDefault();

        openWhatsApp();

    });

}

/*=========================================
SCROLL REVEAL
=========================================*/

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll("section").forEach(sec => {
    /*=========================================
LOADER
=========================================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if(loader){

        setTimeout(() => {

            loader.classList.add("hide");

        },600);

    }

});

    sec.classList.add("hidden");

    observer.observe(sec);

});/*=========================================
FAQ ACCORDION
=========================================*/

document.querySelectorAll(".faq-question").forEach(question => {

    question.addEventListener("click", () => {

        const item = question.parentElement;

        item.classList.toggle("active");

    });

});
