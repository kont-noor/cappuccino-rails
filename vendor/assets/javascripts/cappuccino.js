OBJJ_MAIN_FILE = "assets/main.j";

var progressBar = null;

OBJJ_PROGRESS_CALLBACK = function(percent, appSize, path)
{
    percent = percent * 100;

    if (!progressBar)
        progressBar = document.getElementById("progress-bar");

    if (progressBar)
        progressBar.style.width = Math.min(percent, 100) + "%";
}

var loadingHTML =
        '<div id="loading">' +
        '    <div id="loading-text">Loading...</div>' +
        '    <div id="progress-indicator">' +
        '        <span id="progress-bar" style="width:0%"></span>' +
        '    </div>' +
        '</div>';
