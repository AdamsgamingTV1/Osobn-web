document.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById("app");
    const generateButton = document.getElementById("generateTable");
    const addRowButton = document.getElementById("addRow");
    const addColumnButton = document.getElementById("addColumn");
    const deleteRowButton = document.getElementById("deleteRow");
    const deleteColumnButton = document.getElementById("deleteColumn");
    let rowCount = 0;
    let columnCount = 0;

    function generateTable(rows, columns) {
        const table = document.getElementById("myTable");
        table.innerHTML = "";

        for (let i = 0; i < rows; i++) {
            const row = table.insertRow();
            for (let j = 0; j < columns; j++) {
                const cell = row.insertCell();
                cell.contentEditable = true;
                cell.textContent = "Buňka " + (i + 1) + "-" + (j + 1);
                cell.classList.add("editable-cell");
            }
        }
    }

    generateButton.addEventListener("click", () => {
        const rows = parseInt(prompt("Zadejte počet řádků:"));
        const columns = parseInt(prompt("Zadejte počet sloupců:"));

        if (!isNaN(rows) && !isNaN(columns) && rows > 0 && columns > 0) {
            rowCount = rows;
            columnCount = columns;
            generateTable(rowCount, columnCount);
        } else {
            alert("Zadejte platný počet řádků a sloupců.");
        }
    });

    addRowButton.addEventListener("click", () => {
        const table = document.getElementById("myTable");
        const row = table.insertRow();
        for (let j = 0; j < columnCount; j++) {
            const cell = row.insertCell();
            cell.contentEditable = true;
            cell.textContent = "";
            cell.classList.add("editable-cell");
        }
        rowCount++;
    });

    addColumnButton.addEventListener("click", () => {
        const table = document.getElementById("myTable");
        for (let i = 0; i < rowCount; i++) {
            const row = table.rows[i];
            const cell = row.insertCell();
            cell.contentEditable = true;
            cell.textContent = "";
            cell.classList.add("editable-cell");
        }
        columnCount++;
    });

    deleteRowButton.addEventListener("click", () => {
        if (rowCount > 0) {
            const table = document.getElementById("myTable");
            table.deleteRow(rowCount - 1);
            rowCount--;
        }
    });

    deleteColumnButton.addEventListener("click", () => {
        if (columnCount > 0) {
            const table = document.getElementById("myTable");
            for (let i = 0; i < rowCount; i++) {
                const row = table.rows[i];
                row.deleteCell(columnCount - 1);
            }
            columnCount--;
        }
    });
});
