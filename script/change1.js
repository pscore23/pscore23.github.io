let changeStyle = path => {
    document.getElementById("dark").href = path;

    localStorage.setItem("darkmode", path)
};
