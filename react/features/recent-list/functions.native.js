"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isRecentListEnabled = exports.toDisplayableList = void 0;
const dateUtil_1 = require("../base/i18n/dateUtil");
const NavigateSectionList_1 = __importDefault(require("../base/react/components/native/NavigateSectionList"));
const uri_1 = require("../base/util/uri");
/**
 * Creates a displayable list item of a recent list entry.
 *
 * @private
 * @param {Object} item - The recent list entry.
 * @param {string} defaultServerURL - The default server URL.
 * @param {Function} t - The translate function.
 * @returns {Object}
 */
function toDisplayableItem(item, defaultServerURL, t) {
    const location = (0, uri_1.parseURIString)(item.conference);
    const baseURL = `${location.protocol}//${location.host}`;
    const serverName = baseURL === defaultServerURL ? null : location.host;
    return {
        colorBase: serverName,
        id: {
            date: item.date,
            url: item.conference
        },
        key: `key-${item.conference}-${item.date}`,
        lines: [
            _toDateString(item.date, t),
            _toDurationString(item.duration),
            serverName
        ],
        title: (0, uri_1.safeDecodeURIComponent)(location.room),
        url: item.conference
    };
}
/**
 * Generates a duration string for the item.
 *
 * @private
 * @param {number} duration - The item's duration.
 * @returns {string}
 */
function _toDurationString(duration) {
    if (duration) {
        return (0, dateUtil_1.getLocalizedDurationFormatter)(duration);
    }
    return null;
}
/**
 * Generates a date string for the item.
 *
 * @private
 * @param {number} itemDate - The item's timestamp.
 * @param {Function} t - The translate function.
 * @returns {string}
 */
function _toDateString(itemDate, t) {
    const m = (0, dateUtil_1.getLocalizedDateFormatter)(itemDate);
    const date = new Date(itemDate);
    const dateInMs = date.getTime();
    const now = new Date();
    const todayInMs = new Date().setHours(0, 0, 0, 0);
    const yesterdayInMs = todayInMs - 86400000; // 1 day = 86400000ms
    if (dateInMs >= todayInMs) {
        return m.fromNow();
    }
    else if (dateInMs >= yesterdayInMs) {
        return t('dateUtils.yesterday');
    }
    else if (date.getFullYear() !== now.getFullYear()) {
        // We only want to include the year in the date if its not the current
        // year.
        return m.format('ddd, MMMM DD h:mm A, gggg');
    }
    return m.format('ddd, MMMM DD h:mm A');
}
/**
 * Transforms the history list to a displayable list
 * with sections.
 *
 * @private
 * @param {Array<Object>} recentList - The recent list form the redux store.
 * @param {Function} t - The translate function.
 * @param {string} defaultServerURL - The default server URL.
 * @returns {Array<Object>}
 */
function toDisplayableList(recentList, t, defaultServerURL) {
    const { createSection } = NavigateSectionList_1.default;
    const todaySection = createSection(t('dateUtils.today'), 'today');
    const yesterdaySection = createSection(t('dateUtils.yesterday'), 'yesterday');
    const earlierSection = createSection(t('dateUtils.earlier'), 'earlier');
    const today = new Date();
    const todayString = today.toDateString();
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayString = yesterday.toDateString();
    for (const item of recentList) {
        const itemDateString = new Date(item.date).toDateString();
        const displayableItem = toDisplayableItem(item, defaultServerURL, t);
        if (itemDateString === todayString) {
            todaySection.data.push(displayableItem);
        }
        else if (itemDateString === yesterdayString) {
            yesterdaySection.data.push(displayableItem);
        }
        else {
            earlierSection.data.push(displayableItem);
        }
    }
    const displayableList = [];
    // the recent list in the redux store has the latest date in the last index
    // therefore all the sectionLists' data that was created by parsing through
    // the recent list is in reverse order and must be reversed for the most
    // item to show first
    if (todaySection.data.length) {
        todaySection.data.reverse();
        displayableList.push(todaySection);
    }
    if (yesterdaySection.data.length) {
        yesterdaySection.data.reverse();
        displayableList.push(yesterdaySection);
    }
    if (earlierSection.data.length) {
        earlierSection.data.reverse();
        displayableList.push(earlierSection);
    }
    return displayableList;
}
exports.toDisplayableList = toDisplayableList;
/**
 * Returns <tt>true</tt> if recent list is enabled and <tt>false</tt> otherwise.
 *
 * @returns {boolean} <tt>true</tt> if recent list is enabled and <tt>false</tt>
 * otherwise.
 */
function isRecentListEnabled() {
    return true;
}
exports.isRecentListEnabled = isRecentListEnabled;
