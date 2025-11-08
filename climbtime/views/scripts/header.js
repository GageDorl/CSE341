function setHeader() {
    document.title = "ClimbTime";
    const header =document.createElement('header');
    header.innerHTML = `
    <h1><a href="/">ClimbTime</a></h1>
    <nav>
        <ul>
            <li><a href="/view-crags">Crags</a></li>
            <li><a href="/view-routes">Routes</a></li>
            <li><a href="/add-crag">Add Crag</a></li>
            <li><a href="/add-route">Add Route</a></li>
        </ul>
    </nav>
    `;
    document.body.prepend(header);
}
document.addEventListener('DOMContentLoaded', () => {
    setHeader();
});