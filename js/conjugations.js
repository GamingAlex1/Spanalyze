const conjugationsData = {
    present: {
        hablar: ["hablo", "hablas", "habla", "hablamos", "habláis", "hablan"],
        // Add more verbs...
    },
    preterite: {
        hablar: ["hablé", "hablaste", "habló", "hablamos", "hablasteis", "hablaron"],
        // Add more verbs...
    }
    // Add more tenses...
};

function loadConjugations() {
    const tense = document.getElementById('tense-select').value;
    const conjugations = conjugationsData[tense];
    let output = '';
    for (const verb in conjugations) {
        output += `<h2>${verb}</h2><ul>`;
        conjugations[verb].forEach(form => {
            output += `<li>${form}</li>`;
        });
        output += `</ul>`;
    }
    document.getElementById('conjugations').innerHTML = output;
}
