let statesFound = new Set();

function updateCount() {
    const selectedState = document.getElementById("stateDropdown").value;
    statesFound.add(selectedState);
    
    // Update count
    document.getElementById("count").innerText = `States Found: ${statesFound.size}`;

    // Update list of found states
    const foundStatesList = Array.from(statesFound).join(', ');
    document.getElementById("foundStatesList").innerText = `States Found: ${foundStatesList}`;
}



document.addEventListener('DOMContentLoaded', function() {
    const statesAndProvinces = [
        "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia",
        "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland",
        "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey",
        "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina",
        "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming",
        "Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland and Labrador", "Nova Scotia", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan",
        "Northwest Territories", "Nunavut", "Yukon"
    ];
    

    const dropdown = document.getElementById('stateDropdown');

    statesAndProvinces.forEach(state => {
        const option = document.createElement('option');
        option.value = state;
        option.text = state;
        dropdown.appendChild(option);
    });
});