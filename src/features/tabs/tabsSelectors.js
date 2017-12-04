import { createSelector } from "reselect";
import { selectTab } from "./tabsReducer";

export const selectTabs = state => state.tabs;

export const selectCurrentTab = createSelector(selectTabs, tabs => tabs.currentTab);
