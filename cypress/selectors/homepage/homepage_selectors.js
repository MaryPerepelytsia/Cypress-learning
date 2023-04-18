// Selectors for all pages

export default class SearchSelectors {
    headlessSearchBar = ".searchbar"
    ocpSearchBar = ".search-form"
    testId = "[data-testid=";
    searchTerm = "[data-cy=search-term]";
    mainSearchInput = "[data-cy=header-search-input]";
    facetSearchButton = "-facet-group-search] > .input-container > [data-cy=input-icon]";
  
    //Pagination
    pagination = "[data-testid^=pagination";
    paginationFrame = "[data-testid=results-list-pagination]";
    numberOfSearchResults = "[data-cy=results-header-total] > strong";

    // PLP breadcrumbs
    clearFacetsButton = "[data-cy=clear-facets-button]";
    clearFacetsLink = "[data-cy=clear-facets]";
  
    //stockindicator toggle
    stockIndicatorToggle = ".pill-";
  
  }
  
  
  