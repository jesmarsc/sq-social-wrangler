import { svg2png } from 'svg2png-wasm';
import { missing } from 'itty-router-extras';

import allSeries from '../series';
import quest_completed from '../templates/quest_completed';

import IBMPlexSansRegular from '../assets/fonts/IBMPlexSans-Regular.ttf';

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
    level: series,
    image: badgeImage,
  });

  const buffer = await svg2png(svg, {
    fonts: [new Uint8Array(IBMPlexSansRegular)],
    scale: 2,
  });

  return new Response(buffer, {
    headers: { 'content-type': 'image/png' },
  });
};
