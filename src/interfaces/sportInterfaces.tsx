/* eslint-disable no-unused-vars */
export type Sport = {
  idSport: string;
  strSport: string;
  strSportThumb: string;
};

export type SportValuesType = {
  idSport: string;
  sportMatch: string;
  strSport: string;
  strSportThumb: string;
};

export type SportHistoryType = {
  sport: SportValuesType;
};

export type Match = {
  [key: string]: string;
};

export type ReadFiretoreType = {
  userId: string;
  setHistorySports: (array: SportValuesType[]) => void;
};

export type StoreFiretoreType = {
  userId: string;
  sportData: SportValuesType;
};
