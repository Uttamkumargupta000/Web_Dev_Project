// Home Page Search 

const /** {NodeElement} */  $searchField = document.querySelector("[data-search-field]");
const /** {NodeElement} */  $searchBtn = document.querySelector("[data-search-btn]");

$searchBtn.addEventListener("click", function(){
    if($searchField.value) window.location = `/recipes.html?q=${$searchField.value}`;
});


// Search submit when press Enter key 

$searchField.addEventListener("keydown", e =>{
    if(e.key === "Enter") $searchBtn.click();
});


// Tab panel Navigation

const /** {NodeElement} */  $tabBtns = document.querySelectorAll("[data-tab-btn]");
const /** {NodeElement} */  $tabPanels = document.querySelectorAll("[data-tab-panel]");

let /**{NodeElement} */ [$lastActiveTabPanel] = $tabPanels;
let /**{NodeElement} */ [$lastActiveTabBtn] = $tabBtns;

addEventOnElements($tabBtns, "click", function(){
    $lastActiveTabPanel.setAttribute("hidden", "");
    $lastActiveTabBtn.setAttribute("aria-selected", false);
    $lastActiveTabBtn.setAttribute("tabindex", -1);

    const /**{NodeElement} */ $currentTabPanel = document.querySelector(`#${this.getAttribute("aria-controls")}`);
    $currentTabPanel.removeAttribute("hidden");
    this.setAttribute("aria-selected", true);
    this.setAttribute("tabindex", 0);

    $lastActiveTabPanel = $currentTabPanel;
    $lastActiveTabBtn = this;
});

// Navigate tab with arrow key

addEventOnElements($tabBtns, "keydown", function(e){
    const /**{NodeList} */ $nextELement = this.nextELementSibling;
    const /**{NodeList} */ $previousELement = this.previousELementSibling;

    if(e.key === "ArrowRight" && $nextELement){
        this.setAttribute("tabindex", -1);
        $nextELement.setAttribute("tabindex", 0);
        $nextELement.focus();
    }
    else if(e.key === "ArrowLeft" && $previousELement){
        this.setAttribute("tabindex", -1);
        $previousELement.setAttribute("tabindex", 0);
        $previousELement.focus();
    }
    else if( e.key === "Tab"){
        this.setAttribute("tabindex", -1);
        $lastActiveTabBtn.setAttribute("tabindex", 0);
    }
});