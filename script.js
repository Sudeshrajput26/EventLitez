document.getElementById("eventForm").addEventListener("submit", function (event) {
    event.preventDefault();

    
    const eventName = document.getElementById("event_Name").value;
    const eventDate = document.getElementById("event_Date").value;
    const eventTime = document.getElementById("event_Time").value;
    const eventLocation = document.getElementById("event_Location").value;

    
    if (!eventName || !eventDate || !eventTime || !eventLocation) {
        alert("Please fill out all fields.");
        return;
    }

    
    const eventList = document.getElementById("eventList");
    const eventItem = document.createElement("li");
    eventItem.innerHTML = `<strong>${eventName}</strong> <br>  ${eventDate} |  ${eventTime} |  ${eventLocation}`;
    
    
    eventList.appendChild(eventItem);


    document.getElementById("eventForm").reset();
});