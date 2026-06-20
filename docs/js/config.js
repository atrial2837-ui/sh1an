export const SHEET_ID = 'SET_YOUR_SHEET_ID_HERE';

export const CHANNELS = {
  new: {
    id: 'new',
    label: 'Main',
    listGid: '0',
    setlistGid: '684306666',
  },
  old: {
    id: 'old',
    label: 'Archive',
    listGid: '959470167',
    setlistGid: '254288043',
  },
};

export const DEFAULT_CHANNEL = 'new';

// Legacy aliases (kept for backwards compatibility)
export const LIST_GID = CHANNELS.new.listGid;
export const SETLIST_GID = CHANNELS.new.setlistGid;

export const TIMELINE_INITIAL = 12;
export const TIMELINE_STEP = 12;
export const RANKING_LIST_LIMIT = 50;
export const TOP_ARTISTS_LIMIT = 20;
export const ACTIVITY_RECENT_LIMIT = 5;

export const DAYS_FRESH = 30;
export const DAYS_STALE = 180;

export const SOURCE_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/edit`;

export const gvizUrl = (gid) =>
  `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&gid=${gid}&_t=${Date.now()}`;
