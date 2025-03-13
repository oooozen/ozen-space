window.switchlanguage = function(targetlan) { 
    let currentpath = window.location.pathname;
    const lans = ["en", "zh-cn", "zh-hant"];

    // **只在语言切换时存储滚动位置**
    sessionStorage.setItem("lastScrollPosition", window.scrollY);
    sessionStorage.setItem("isLanguageSwitch", "true"); // 标记是语言切换

    let currentlan = lans.find(lan => currentpath.match(new RegExp(`/${lan}/`)));

    if (currentlan === targetlan) {
        console.log("当前已经是目标语言，无需跳转");
        return;
    }

    let newpath = currentlan
        ? currentpath.replace(`/${currentlan}/`, `/${targetlan}/`)
        : `/${targetlan}/index.html`;

    window.location.href = newpath;
};

// **页面加载后恢复滚动位置**
window.onload = function() {
    const lastScroll = sessionStorage.getItem("lastScrollPosition");
    const isLanguageSwitch = sessionStorage.getItem("isLanguageSwitch");

    if (isLanguageSwitch === "true" && lastScroll !== null) {
        setTimeout(() => {
            window.scrollTo(0, parseInt(lastScroll, 10));
            sessionStorage.removeItem("isLanguageSwitch"); // 清除标记，避免影响其他跳转
            document.body.classList.add("show-content"); // **恢复可见**
        }, 50);
    } else {
        document.body.classList.add("show-content"); // **确保无论如何都恢复**
    }
};

window.addEventListener("load", function () {
    const svgElement = document.querySelector(".text-grid a svg");
    const hoverBg = document.querySelector(".hover-bg");

    if (svgElement && hoverBg) {
        svgElement.addEventListener("mouseenter", () => {
            hoverBg.style.opacity = "1"; // **显示背景**
        });

        svgElement.addEventListener("mouseleave", () => {
            hoverBg.style.opacity = "0"; // **隐藏背景**
        });
    }
});