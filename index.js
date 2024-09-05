function updateClock() {
    const date = new Date();

    let hours = date.getHours();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12; 
    hours = hours ? hours : 12; 
    hours = hours.toString().padStart(2, '0');

    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds} ${ampm}`;

    const dateElement = document.getElementById('date');
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day = dayNames[date.getDay()];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    dateElement.textContent = `${day}, ${month} ${date.getDate()}, ${year}`;
    
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    document.getElementById('timezone').textContent = `Time Zone: ${timeZone}`;

    setTimeout(updateClock, 1000);
}

updateClock();