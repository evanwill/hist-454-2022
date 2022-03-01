/* Load items from Sheets, store in sessionStorage, or load from sessionStorage */
var cb_items = [];
var config_metadata = "{{ site.metadata-csv | relative_url }}";

{% if page.url == '/setup/' %}
// do the set up stuff

// add listener to file selector
var fileSelector = document.getElementById("selectFile");
fileSelector.addEventListener('change', (event) => {
  // give file to papa parse and init
  var selectedFile = event.target.files[0];
  cb_items_init(selectedFile);
  // reload
  location.reload();
});

{% endif %}
// function to process items from Sheets and store
function cb_items_init(config_metadata) {
  /* use papaparse to get metadata from configured CSV URL, then init page */
  Papa.parse(config_metadata, {
    download: true,
    header: true,
    complete: (results) => { 
      cb_items = results.data.filter(item => item["objectid"]);
      sessionStorage.setItem("cb_items_store", JSON.stringify(cb_items));
      pageInit(cb_items);
    }
  });
}
// check for sessionStored items
if (sessionStorage.getItem("cb_items_store")) {
  cb_items = JSON.parse(sessionStorage.getItem("cb_items_store"));
  pageInit(cb_items);

} else if (config_metadata != "") { 
  cb_items_init(config_metadata);
} else {
  // if no CSV is configured, redirect to the set up page
  window.location.href = "{{ '/setup/' | absolute_url }}";

}
{% if site.development-refresh == true %}
var refreshButton = document.createElement("div");
refreshButton.classList.add("fixed-top");
refreshButton.innerHTML = '<button class="btn btn-sm btn-secondary m-3" onclick="resetStore()" id="refreshButton">Refresh Metadata</button>';
document.body.appendChild(refreshButton);
function resetStore () {
  // remove data
  sessionStorage.removeItem("cb_items_store");
  // reload
  location.reload();
}
{%- endif -%}
