import { svg2png } from 'svg2png-wasm';
import { missing } from 'itty-router-extras';

import allSeries from '../series';
import quest_completed from '../templates/twitter_meta';

import PlayBold from '../assets/fonts/Play-Bold.ttf';

export default async ({ params }: any) => {
  const { series, quest } = params as any;

  const seriesData = allSeries[`series${series}`];

  if (!seriesData) return missing('Could not find series');

  const challenge = seriesData.challenges[parseInt(quest) - 1];

  if (!challenge) return missing('Could not find quest');

  const badgeImage = await fetch(
    `https://api.stellar.quest/badge/${challenge.badges.main}?v=3`
  )
    .then((res) => res.arrayBuffer())
    .then((buf) =>
      btoa(String.fromCharCode.apply(null, new Uint8Array(buf) as any))
    );

  const svg = quest_completed({
    title: seriesData.title,
    subtitle: challenge.context.title,
    level: `LEVEL 0${series}`,
    image: badgeImage,
  });

  const buffer = await svg2png(svg, {
    fonts: [new Uint8Array(PlayBold)],
    scale: 1,
  });

  return new Response(buffer, {
    headers: { 'content-type': 'image/png' },
  });
};
