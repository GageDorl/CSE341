async function renderRoutes() {
    try {
        const response = await fetch('/api/routes');
        const routes = await response.json();
        const routeList = document.getElementById('route-list');
        routeList.innerHTML = '';
        routes.forEach((route) => {
            console.log(route);
            const li = document.createElement('li');
            li.innerHTML = `
            <h3>${route.name}</h3>
            <p>Crag ID: ${route.cragId}</p>
            <p>Grade: ${route.grade}</p>
            <p>Type: ${route.routeType}</p>
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