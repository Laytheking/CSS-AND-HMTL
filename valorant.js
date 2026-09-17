function createProfile() {

    let name = document.getElementById("playerName").value;

    let agent = document.getElementById("agent").value;

    document.getElementById("result").innerHTML =
        "Welcome " + name + "! Your agent is " + agent + " 🎯";
}
