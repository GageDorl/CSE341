async function renderCrags() {
    try {
        const response = await fetch('/api/crags');
        const crags = await response.json();
        const cragList = document.getElementById('crag-list');
        cragList.innerHTML = '';
        crags.forEach((crag) => {
            const li = document.createElement('li');
            li.innerHTML = `
            <h3>${crag.name}</h3>
            <p><b>Location:</b> ${crag.location}</p>
            <p><b>Grade Range:</b> ${crag.gradeRange}</p>
            <p><b>Rock Type:</b> ${crag.rockType}</p>
            <p><b>Description:</b> ${crag.description}</p>
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