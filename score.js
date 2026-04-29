function updScore(score) {
    const scoreElement = document.getElementById("score");
    scoreElement.textContent = `Score: ${score}`;
}

export { updScore };