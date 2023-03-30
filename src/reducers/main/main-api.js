import { mainServer } from "./main-server";

export const GET_CATEGORY = "GET_CATEGORY";
export const GET_CATEGORY_PAGE =
  "GET_CATEGORY_PAGE";
export const GET_CATEGORY_PAGE_DETAIL =
  "GET_CATEGORY_PAGE_DETAIL";
export const PARTNERS = "PARTNERS";
export const PORTFOLIO = "PORTFOLIO";
export const PORTFOLIO_ITEM = "PORTFOLIO_ITEM";
export const SIMILAR = "SIMILAR";
export const WINDOW = "WINDOW";
export const CATALOG_ITEM_PRODUCT_IMAGE =
  "CATALOG_ITEM_PRODUCT_IMAGE";
export const CATALOG_ITEM_PRODUCT_TITLES =
  "CATALOG_ITEM_PRODUCT_TITLES";
export const GET_REVIEWS = "GET_REVIEWS";
export const GET_FILTER = "GET_FILTER";
export const BTN = "BTN";

let initialState = {
  categorys: [],
  filter: [],
  categoryPage: [],
  similar: [],
  categoryItem: [],
  categoryItemImage: [],
  categoryItemTitles: [],
  categoryItemWindow: [],
  partners: [],
  portfolio: [],
  portfolioItem: [],
  reviews: [],
  btn: "",
};

export const mainReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case GET_CATEGORY:
      return {
        ...state,
        categorys: action.payload,
      };
    case PARTNERS:
      return {
        ...state,
        partners: action.payload,
      };
    case GET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    case PORTFOLIO:
      return {
        ...state,
        portfolio: action.payload,
      };
    case GET_CATEGORY_PAGE:
      return {
        ...state,
        categoryPage: action.payload,
      };
    case GET_CATEGORY_PAGE_DETAIL:
      return {
        ...state,
        categoryItem: action.payload,
      };
    case PORTFOLIO_ITEM:
      return {
        ...state,
        portfolioItem: action.payload,
      };
    case CATALOG_ITEM_PRODUCT_IMAGE:
      return {
        ...state,
        categoryItemImage: action.payload,
      };
    case SIMILAR:
      return {
        ...state,
        similar: action.payload,
      };
    case BTN:
      return {
        ...state,
        btn: action.payload,
      };
    case GET_REVIEWS:
      return {
        ...state,
        reviews: action.payload,
      };
    case WINDOW:
      return {
        ...state,
        categoryItemWindow: action.payload,
      };
    case CATALOG_ITEM_PRODUCT_TITLES:
      return {
        ...state,
        categoryItemTitles: action.payload,
      };
    default:
      return state;
  }
};

export const mainActions = {
  getCategoryList: (data) => ({
    type: GET_CATEGORY,
    payload: data,
  }),
  getPartners: (data) => ({
    type: PARTNERS,
    payload: data,
  }),
  getPortfolio: (data) => ({
    type: PORTFOLIO,
    payload: data,
  }),
  btn: (data) => ({
    type: BTN,
    payload: data,
  }),
  getPortfolioItem: (data) => ({
    type: PORTFOLIO_ITEM,
    payload: data,
  }),
  getCategoryPage: (data) => ({
    type: GET_CATEGORY_PAGE,
    payload: data,
  }),
  getCategoryPageItem: (data) => ({
    type: GET_CATEGORY_PAGE_DETAIL,
    payload: data,
  }),
  similarGet: (data) => ({
    type: SIMILAR,
    payload: data,
  }),
  getWindowItem: (data) => ({
    type: WINDOW,
    payload: data,
  }),
  getCategoryItemImageProduct: (data) => ({
    type: CATALOG_ITEM_PRODUCT_IMAGE,
    payload: data,
  }),
  getCategoryItemTitleProduct: (data) => ({
    type: CATALOG_ITEM_PRODUCT_TITLES,
    payload: data,
  }),
  getReview: (data) => ({
    type: GET_REVIEWS,
    payload: data,
  }),
  getFilter: (data) => ({
    type: GET_FILTER,
    payload: data,
  }),
};

export const Category =
  () => async (dispatch) => {
    try {
      const response =
        await mainServer.getCategory();
      dispatch(
        mainActions.getCategoryList(response.data)
      );
    } catch (e) {
      // console.log(e.error)
    }
  };
export const GetCategoryList =
  (data, callback = () => {}) =>
  async (dispatch) => {
    try {
      await dispatch(
        mainActions.getCategoryPage([])
      );
      const response =
        await mainServer.getCategoryId(data);
      callback();
      dispatch(
        mainActions.getCategoryPage(
          response.data.results.product
        )
      );
      dispatch(
        mainActions.btn(
          response.data.results.product[0].title
        )
      );
    } catch (e) {
      callback();
    }
  };
export const Filter =
  (data) => async (dispatch) => {
    try {
      const response =
        await mainServer.getFilterPage(data);
      dispatch(
        mainActions.getFilter(
          response.data.product
        )
      );
    } catch (e) {
      // console.log(e.error)
    }
  };
export const getCategoryPageItem =
  (data) => async (dispatch) => {
    try {
      const response =
        await mainServer.getCategoryItem(data);
      dispatch(
        mainActions.getCategoryPageItem(
          response.data.product_detail[0]
        )
      );
      dispatch(
        mainActions.similarGet(
          response.data.product_detail[0].similar
        )
      );
      dispatch(
        mainActions.getWindowItem(
          response.data.product_detail[0]
            .window_models
        )
      );
      dispatch(
        mainActions.getCategoryItemImageProduct(
          response.data.product_detail[0]
            .image_product
        )
      );
      if (
        response.data.product_detail[0]
          .productdetail
      ) {
        dispatch(
          mainActions.getCategoryItemTitleProduct(
            response.data.product_detail[0]
              .productdetail
          )
        );
      } else {
        dispatch(
          mainActions.getCategoryItemTitleProduct(
            []
          )
        );
      }
    } catch (e) {
      // console.log(e.error)
    }
  };
export const Partner = () => async (dispatch) => {
  try {
    const response = await mainServer.getPart();
    dispatch(
      mainActions.getPartners(response.data)
    );
  } catch (e) {
    // console.log(e.error)
  }
};
export const PortfolioGET =
  () => async (dispatch) => {
    try {
      const response =
        await mainServer.getPortfolio();
      dispatch(
        mainActions.getPortfolio(
          response.data.results
        )
      );
    } catch (e) {
      // console.log(e.error)
    }
  };
export const PortfolioId =
  (id) => async (dispatch) => {
    try {
      const response =
        await mainServer.getPortfolioId(id);
      dispatch(
        mainActions.getPortfolioItem(
          response.data
        )
      );
    } catch (e) {
      // console.log(e.error)
    }
  };

export const getReviews =
  () => async (dispatch) => {
    try {
      const response =
        await mainServer.getReview();
      dispatch(
        mainActions.getReview(response.data)
      );
    } catch (e) {
      // console.log('review', e)
    }
  };
