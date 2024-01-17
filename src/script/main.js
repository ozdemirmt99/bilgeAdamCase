const cities = [
    "Adana",
    "Adıyaman",
    "Afyonkarahisar",
    "Ağrı",
    "Amasya",
    "Ankara",
    "Antalya",
    "Artvin",
    "Aydın",
    "Balıkesir",
    "Bilecik",
    "Bingöl",
    "Bitlis",
    "Bolu",
    "Burdur",
    "Bursa",
    "Çanakkale",
    "Çankırı",
    "Çorum",
    "Denizli",
    "Diyarbakır",
    "Edirne",
    "Elazığ",
    "Erzincan",
    "Erzurum",
    "Eskişehir",
    "Gaziantep",
    "Giresun",
    "Gümüşhane",
    "Hakkâri",
    "Hatay",
    "Isparta",
    "İçel (Mersin)",
    "İstanbul",
    "İzmir",
    "Kars",
    "Kastamonu",
    "Kayseri",
    "Kırklareli",
    "Kırşehir",
    "Kocaeli",
    "Konya",
    "Kütahya",
    "Malatya",
    "Manisa",
    "Kahramanmaraş",
    "Mardin",
    "Muğla",
    "Muş",
    "Nevşehir",
    "Niğde",
    "Ordu",
    "Rize",
    "Sakarya",
    "Samsun",
    "Siirt",
    "Sinop",
    "Sivas",
    "Tekirdağ",
    "Tokat",
    "Trabzon",
    "Tunceli",
    "Şanlıurfa",
    "Uşak",
    "Van",
    "Yozgat",
    "Zonguldak",
    "Aksaray",
    "Bayburt",
    "Karaman",
    "Kırıkkale",
    "Batman",
    "Şırnak",
    "Bartın",
    "Ardahan",
    "Iğdır",
    "Yalova",
    "Karabük",
    "Kilis",
    "Osmaniye",
    "Düzce",
];

function changed() {
    let datalist = document.getElementById("cities");
    let search = document.getElementById("city-search");

    if (search.value != "") {
        datalist.style.display = "block";
    } else {
        datalist.style.display = "none";
    }
}

function searchInput(value) {
    changed();
    let datalist = document.getElementById("cities");
    let inputLocaletedLower = value.toLocaleLowerCase("tr-TR");
    let filteredCities = "";

    cities.map((e) => {
        let localetededCurrentCity = e.toLocaleLowerCase("tr-TR");

        if (localetededCurrentCity.includes(inputLocaletedLower)) {
            filteredCities += optionReturner(localetededCurrentCity);
        }
    });

    datalist.innerHTML = filteredCities;
}

function optionReturner(option) {
    let fullString =
        option.charAt(0).toLocaleUpperCase("tr-TR") + option.substring(1);
    return `<option value="${fullString}">${fullString}</option>`;
}

function selectedCity() {
    let search = document.getElementById("city-search");
    let datalist = document.getElementById("cities");
    search.value = datalist.value;
}