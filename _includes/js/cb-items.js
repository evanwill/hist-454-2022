/* Load items from Sheets, store in sessionStorage, or load from sessionStorage */
var cb_items = [];
var config_metadata = "{{ site.metadata-csv | relative_url }}";

// function to process items from Sheets and store
function cb_items_init(metadata_url) {
  /* use papaparse to get metadata from configured CSV URL, then init page */
  Papa.parse(metadata_url, {
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
refreshButton.classList.add("dev-buttons");
refreshButton.innerHTML = `<div class="btn-group-vertical">
  <button class="btn btn-sm btn-secondary" onclick="resetStore()" id="refreshButton">Reset Metadata</button>
  <a class="btn btn-sm btn-info" href="{{ '/setup/' | relative_url }}">Configure Metadata</a>
  </div>`;
document.body.appendChild(refreshButton);
function resetStore () {
  // remove data
  sessionStorage.removeItem("cb_items_store");
  // reload
  location.reload();
}
{%- endif -%}
