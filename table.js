let tableData = [];
function addRow() {
    let nameInput = document.getElementById('nameInput');
    let roleInput = document.getElementById('roleInput');
    let name = nameInput.value.trim();
    let role = roleInput.value.trim();
    if (name === '' || role === '') {
        alert(' Fill All Fields !');
        return;
    }
    tableData.push({
        id: Date.now(),
        name: name,
        role: role
    });
    nameInput.value = '';
    roleInput.value = '';
    renderTable();
}
function renderTable() {
    let tbody = document.getElementById('tableBody');
    tbody.innerHTML = '';
    
    tableData.forEach(function(row, index) {
        let tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${index + 1}</td>
            <td>${row.name}</td>
            <td>${row.role}</td>
            <td><button onclick="deleteRow(${row.id})">Delet</button></td>`
        ;
        tbody.appendChild(tr);
    });
}
function deleteRow(id) {
    tableData = tableData.filter(function(row) {
        return row.id !== id;
    });
    renderTable();
}