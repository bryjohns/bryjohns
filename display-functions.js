cheatsDisplay = {};
cheatsDisplay.table = function(headers, data, hasColumnHeaders = true) {

    var headersHtml = '';
    if (headers && headers.length) {
        headerItemsHtml = '';
        headers.forEach(item => {
            headerItemsHtml += `<th scope="col">${item}</td>`;
        });
        headersHtml = `
        <thead>
            <tr>
            ${headerItemsHtml}
            </tr>
        </thead>`;
    }

    var bodyHtml = '';
    if (data && data.length) {
        bodyHtml += `
        <tbody>
        `;
        data.forEach(row => {
            var isFirst = true;
            bodyHtml += '<tr>';
            row.forEach(col => {
                if (isFirst && hasColumnHeaders) {
                    isFirst = false;
                    bodyHtml += '<th>' + col + '</th>';
                }
                else {
                    bodyHtml += '<td>' + col + '</td>';
                }
            });
            bodyHtml += '</tr>\n';
        });
        bodyHtml += `
        </tbody>
        `;
    }

    return `
        <table class="table table-sm table-dark">
            ${headersHtml}
            ${bodyHtml}
        </table>
    `;
};