let user = prompt("Enter S, W or G")
let cpuI = Math.floor(Math.random() * 3);
let cpu = ["S", "W", "G"][cpuI]
user = user.toUpperCase();
document.writeln('User ->' + user)
document.writeln('CPU ->' + cpu)

if (cpu === "S" && user === "W" || cpu === "G" && user === "S" || cpu === "W" && user === "G") {
    document.writeln('CPU Wins!!!')
}
else if (cpu === "W" && user === "S" || cpu === "G" && user === "W" || cpu === "S" && user === "G") {
    document.writeln('User Wins!!!')
}
else if (user !== 'S' && user !== 'W' && user !== 'G') {
    document.writeln('User input incorrect!! CPU Wins')
}
else {
    document.writeln('Match Tied')
}

