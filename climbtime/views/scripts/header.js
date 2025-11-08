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
            <span id="user-info"></span>
        </ul>
    </nav>
    `;
    document.body.prepend(header);
}

async function loadUser() {
  try {
    const res = await fetch('/me');
    if (res.status === 200) {
      const user = await res.json();
      document.getElementById('user-info').innerHTML = `
        Welcome, ${user.name || user.nickname || user.email}! 
        <a href="/logout">Logout</a>
      `;
    } else {
      document.getElementById('user-info').innerHTML = `
        <a href="/login">Login</a>
      `;
    }
  } catch (err) {
    console.error('Error loading user info', err);
  }
}

document.addEventListener('DOMContentLoaded', () => {
    setHeader();
    loadUser();
});