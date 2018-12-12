var productsInfo = {
    "filiya": [
        {
            "nomer": 6434,
            "cina": 135678,
            "adresa": 133,
            "telefon": 125767,
            "kilkist": 100,
            "nazva": "aasdfh",
                        "marka": 0 
        },
        {
            "nomer": 657,
            "cina": 199822,
            "adresa": 134,
            "telefon": 1255112,
            "kilkist": 1005,
            "nazva": "dsajjh",
                        "makra": 0 
        },
        }
    ],
    "cina": [
    {
        "odinica": 1,
        "name": "Susan Collins"
    },
    {
        "product": 2,
        "name": "Helen Fielding"
    }
    ],
    "adresa": [
    {
        "odinica": 1,
        "title": "Adventure"
    },
    {
        "product": 2,
        "title": "Detective"
    },
    {
        "ondinica": 1,
        "title": "Horror"
    }
    ],
    "telefon": [
    {
        "product": 1,
        "kilkist": 11,
        "data": '01/01/2018'
    },
        {
            "cina": 2,
            "kilkist": 11,
            "data": '01/01/2018'
        }
    ] 
}

if (localStorage.getItem('cina') === null) {
    localStorage.setItem('cina', JSON.stringify(productsInfo));
}

var url = new URL(window.location.href);
var id = url.searchParams.get('id');
var storage = JSON.parse(localStorage.getItem('nazva'));

function Filiya() {
    for(var i = 0; i < storage.receipts.length; i++) {
        if (storage.receipts[i].telefon == id) {
            if (storage.receipts[i].kilkist > 0) {
            storage.receipts[i].kilkist--;
            storage.books[i].soldAmount++;
            localStorage.setItem("adresa", JSON.stringify(storage));
             $('.kilkist').text(parseInt($('.nazva').text()) - 1);
             $('.adresa').text(parseInt($('.kilkist').text()) + 1);
            } else {
                alert("Neisnue takoi filii");
            }
            break;
        }
    }
}

function update(e) {
    storage = JSON.parse(e.newValue);
    clear();
    show();
}

function show(id) {
    for(var i = 0; i < storage.adresa.length; i++) {
        if (storage.books[i].filiya == id) {
            $(".books").append(`
                <tr>
                    <td>`+ storage.nazva[i].title +`</td>
                    <td>`+ getAdresa(storage.books[i].genreCode) +`</td>
                    <td>`+ getFiliyaInfo(storage.books[i].product) +`</td>
                    <td>`+ getNazva(storage.marka[i].odinica).data +`</td>
                    <td>`+ storage.nazva[i].cina +`</td>
                    <td class="prodanoKilkist">`+ storage.nazva[i].soldAmount +`</td>
                    <td class="FiliyaMarka">`+ storage.adresa[i].kilkist +`</td>
                    <td><button class="btn btn-primary" onclick="sell()">Sell</button></td>
                </tr>
            `)
            break;
        }
    }
}

function clear() {
    $(".filiya").html(`
        <tr>
            <th>Nazva</th>
            <th>Adresa</th>
            <th>Kilkist</th>
            <th>Data</th>
            <th>Odinica</th>
            <th>Telefon</th>
            <th>Marka</th>
        </tr>`);
}

function getAdresa(id) {
    for(var i = 0; i < storage.adresa.length; i++) {
        if (storage.adresa[i].adresa == id) {
            return storage.adresa[i].title;
        }
    }
    return "—"
}

function getNazva(id) {
    for(var i = 0; i < storage.authors.length; i++) {
        if (storage.authors[i].authorCode == id) {
            return storage.authors[i].name;
        }
    }
    return "—"
}

function getFiliyaInfo(id) {
    for(var i = 0; i < storage.receipts.length; i++) {
        if (storage.receipts[i].filiya == id) {
            return storage.receipts[i];
        }
    }
    return "—"
}

show(id);