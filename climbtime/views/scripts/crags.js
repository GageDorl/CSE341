async function renderCrags() {
    try {
        const response = await fetch('/api/crags');
        const crags = await response.json();
        const cragList = document.getElementById('crag-list');
        cragList.innerHTML = '';
        crags.forEach((crag) => {
            console.log(crag);
            const li = document.createElement('li');
            li.innerHTML = `
            <h3>${crag.name}</h3>
            <p>Location: ${crag.location}</p>
            <p>Grade Range: ${crag.gradeRange}</p>
            <p>Rock Type: ${crag.rockType}</p>
            <p>Description: ${crag.description}</p>
            `;
            li.id = crag._id;
            cragList.appendChild(li);
        });
    } catch (error) {
        console.error('Error fetching crags:', error);
    }
}
document.addEventListener('DOMContentLoaded', () => {
    renderCrags();
});