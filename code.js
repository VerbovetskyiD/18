'use strict';
//задание 1
function generateList(array) {
    const $ul = document.createElement("ul");

    return array.reduce(($ul, arrayElement) => {
        if (Array.isArray(arrayElement)) {
            $ul.append(generateList(arrayElement));
        } else {
            const $li = document.createElement("li");
            $li.textContent = arrayElement;
            $ul.append($li);
        }
        return $ul;
    }, $ul);
}

//проверка
document.body.append(generateList([1, 2, 3]));
document.body.append(generateList([1, 2, [1.1, 1.2, 1.3], 3]));

//задание 2
const $table = document.createElement("table");

for (let numberInTable = 1, tableRows = 10; tableRows > 0; tableRows--) {
    const $tr = document.createElement("tr");
    $table.append($tr);

    for (
        let tableColumns = 10;
        tableColumns > 0;
        numberInTable++, tableColumns--
    ) {
        const $td = document.createElement("td");
        $tr.append($td);
        $td.textContent = numberInTable;
    }
}

//проверка
document.body.append($table);