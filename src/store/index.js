import generate from "../helpers/data";
const initialState = {
    appliedFilters: []
};
 
const SORT_BY_PRICE = "SORT_BY_PRICE";
const LOAD_DATA = "LOAD_DATA"; 

export const sortByPrice = payload => ({
    type: SORT_BY_PRICE,
    payload
});

export const loadData = (payload) => ({
    type: LOAD_DATA,
    payload
});

const filterStore = (state = initialState, action) => {
    switch (action.type) {
        case SORT_BY_PRICE:
            let sortByPriceState = Object.assign({}, state);
            let sortedPriceArr = action.payload.direction === "asc" ?
                sortAsc(state.filteredProducts, 'price') :
                sortDesc(state.filteredProducts, 'price');

            sortByPriceState.filteredProducts = sortedPriceArr; 
            sortByPriceState.appliedFilters = removeFilter(SORT_BY_PRICE, sortByPriceState.appliedFilters);

            return sortByPriceState; 
        case LOAD_DATA:
            let count = action.payload.count;
            let countPerPage = action.payload.countPerPage || 20; 
            let totalPages = Math.ceil(count / countPerPage); 
            let products = generate(count);

            return {
                ...state,
                products,
                filteredProducts: products.slice(0, countPerPage),
                    currentCount: countPerPage,
                    countPerPage,
                    totalCount: count,
                    currentPage: 1,
                    totalPages: totalPages,
                    filteredPages: totalPages
            }; 
        default:
            return state;
    }
};

export default filterStore;

function sortAsc(arr, field) {
    return arr.sort(function (a, b) {
        if (a[field] > b[field]) return 1;

        if (b[field] > a[field]) return -1;

        return 0;
    })
}

function sortDesc(arr, field) {
    return arr.sort(function (a, b) {
        if (a[field] > b[field]) return -1;

        if (b[field] > a[field]) return 1;

        return 0;
    })
}

function removeFilter(filter, appliedFilters) {
    let index = appliedFilters.indexOf(filter);
    appliedFilters.splice(index, 1);
    return appliedFilters;
}