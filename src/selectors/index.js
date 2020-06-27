import { createSelector } from "reselect";

const appSelector = (state) => state.appReducer;

export const itemsSelector = createSelector(appSelector, (app) => app.items);
export const errorSelector = createSelector(appSelector, (app) => app.error);
export const loadingSelector = createSelector(
  appSelector,
  (app) => app.loading
);
export const tabSelector = createSelector(appSelector, (app) => app.tab);
export const sortSelector = createSelector(appSelector, (app) => app.sort);
export const showModalSelector = createSelector(
  appSelector,
  (app) => app.showModal
);
export const currentIdSelecter = createSelector(
  appSelector,
  (app) => app.selectedId
);

export const getItemById = createSelector(
  [itemsSelector, currentIdSelecter],
  (items, id) => {
    return items.find((item) => item.nasa_id === id) || {
      nasa_id: "",
      title: "",
      description: ""
    };
  }
);

export const getTabItems = createSelector(
  [itemsSelector, tabSelector],
  (items, tab) => {
    switch (tab) {
      case "LIKED":
        return items.filter(
          (item) => item.like === true && item.remove === false
        );
      case "REMOVED":
        return items.filter((item) => item.remove === true);
      default:
        return items.filter((item) => item.remove === false);
    }
  }
);

export const getSortAndTabItems = createSelector(
  [getTabItems, sortSelector],
  (items, sort) => {
    switch (sort) {
      case "NEW":
        return [
          ...items.sort((a, b) => {
            const da = a.date_created;
            const bb = b.date_created;
            return -da.localeCompare(bb);
          }),
        ];
      case "OLD":
        return [
          ...items.sort((a, b) => {
            const da = a.date_created;
            const bb = b.date_created;
            return da.localeCompare(bb);
          }),
        ];
      case "AZ":
        return [
          ...items.sort((a, b) => {
            const ta = a.title;
            const tb = b.title;
            return ta.localeCompare(tb);
          }),
        ];
      case "ZA":
        return [
          ...items.sort((a, b) => {
            const ta = a.title;
            const tb = b.title;
            return -ta.localeCompare(tb);
          }),
        ];
      default:
        return items;
    }
  }
);
