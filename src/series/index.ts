import { load } from 'js-yaml';

import series1 from './learn/1/main.yml';
import series2 from './learn/2/main.yml';
import series3 from './learn/3/main.yml';
import ssq from './ssq/main.yml';

interface Challenge {
  gist: string;
  badges: { main: string };
  context: { title: string; desc: string };
}

interface SeriesData {
  title: string;
  description: string;
  seriesPrize?: number;
  challenges: Challenge[];
}

const series = Object.fromEntries(
  Object.entries({ series1, series2, series3, ssq }).map(([key, value]) => [
    key,
    load(value) as SeriesData,
  ])
);

export default series;
