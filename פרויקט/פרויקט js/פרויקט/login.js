window.onload = () => {
    // אם תרצי לשחזר משתמש מחובר אפשר להשתמש בזה
    const logUser = localStorage.getItem("loggedUser");
    if (logUser) {
        window.location.href = "project.html";
    }
};

const getUsers = () => {
    return JSON.parse(localStorage.getItem("users") || "[]");
};

const findUsers = (userName, passWord) => {
    const userArr = getUsers();
    return userArr.find(user => user.name === userName && user.password === passWord);
};

const log_in = () => {
    const name = document.getElementById("name").value;
    const password = document.getElementById("passWord").value;

    if (findUsers(name, password)) {
        localStorage.setItem("loggedUser", name); // שמירת משתמש מחובר
        window.location.href = "project.html";
    } else {
        alert("You need to register");
    }
};

const register = () => {
    const name = document.getElementById("name").value;
    const password = document.getElementById("passWord").value;

    if (!name || !password) {
        alert("Fields are required");
        return;
    }

    if (findUsers(name, password)) {
        alert("You already registered, please press login");
        return;
    }

    const user = { name, password };
    const userArr = getUsers();
    userArr.push(user);
    localStorage.setItem("users", JSON.stringify(userArr));
    alert("Registered successfully! Now you can log in.");
};
