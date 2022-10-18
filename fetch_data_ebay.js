async function loadToTable(url,table) {

    const tableHead = table.querySelector("thead");
    const tableBody = table.querySelector("tbody");
    const response = await fetch(url);
    const {search_results} = await response.json();
    console.log(ebay_data);
   tableHead.innerHTML = "<tr></tr>";
   tableBody.innerHTML = "";

   for (const search_res of search_results){
    const rowElement = document.createElement("tr");

    for (const celltext of search_res){
        const cellElement = document.createElement("td");
        cellElement.textContent = celltext;
        rowElement.appendChild(cellElement);

    }
    tableBody.appendChild(rowElement);
   }
}

loadToTable("https://api.countdownapi.com/request?api_key=DABDCCFDAF2446C5BEDBD4E7128B2157&ebay_domain=ebay.com&search_term=laptop&type=search&condition=new&listing_type=all",document.querySelector("table"));