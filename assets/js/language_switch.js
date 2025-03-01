window.switchlanguage = function(targetlan) {
    let currentpath = window.location.pathname;
    const lans = ["en", "zh-cn", "zh-hant"];

    let currentlan = lans.find(lan => currentpath.match(new RegExp(`/${lan}/`)));

    if (currentlan === targetlan) {
        console.log("当前已经是目标语言，无需跳转");
        return;
    }

    let newpath = currentlan
    ? currentpath.replace(`/${currentlan}/`,`/${targetlan}/`)
    : `/${targetlan}/index.html`;

    window.location.href = newpath;
}