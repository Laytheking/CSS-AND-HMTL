function countVotes(votes) {
    let counts = { A: 0, B: 0, C: 0 };

    for (let i = 0; i < votes.length; i++) {
        if (counts[votes[i]] !== undefined) {
            counts[votes[i]]++;
        }
    }

    let max = 0;
    for (let candidate in counts) {
        if (counts[candidate] > max) {
            max = counts[candidate];
        }
    }

    if (max === 0) {
        console.log("There is no vote yet");
        return;
    }

    let winners = [];
    for (let candidate in counts) {
        if (counts[candidate] === max) {
            winners.push(candidate);
        }
    }

    if (winners.length === 1) {
        console.log(winners[0] + " is the winner");
    } else {
        console.log(winners.join(" and ") + " are both winners");
    }
}

countVotes(["A", "B", "A", "C", "A"]);