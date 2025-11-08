async function renderRoutes() {
    try {
        const response = await fetch('/api/routes');
        const routes = await response.json();
        const routeList = document.getElementById('route-list');
        let routeArray = [];
        routeList.innerHTML = '';
        routes.forEach(async (route) => {
            const cragInfo = await getCragInfo(route.cragId);
            const li = document.createElement('li');
            li.innerHTML = `
            <h3>${route.name}</h3>
            <p><b>Crag:</b> ${cragInfo}</p>
            <p><b>Grade:</b> ${route.grade}</p>
            <p><b>Type:</b> ${route.routeType}</p>
            `;
            li.id = route._id;
            routeList.appendChild(li);
        });
    } catch (error) {
        console.error('Error fetching routes:', error);
    }
}
document.addEventListener('DOMContentLoaded', () => {
    renderRoutes();
});

async function getCragInfo(cragId) {
    try {
        const response = await fetch(`/api/crags/${cragId}`);
        const crag = await response.json();
        return crag ? crag.name : 'Unknown Crag';
    } catch (error) {
        console.error('Error fetching crag info:', error);
        return 'Unknown Crag';
    }
}