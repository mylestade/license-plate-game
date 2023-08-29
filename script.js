function updateCount() {
    let count = 0;
    const checkboxes = document.querySelectorAll('.state-checkbox');
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) count++;
    });
    document.getElementById('count').innerText = `States Found: ${count}`;
}
