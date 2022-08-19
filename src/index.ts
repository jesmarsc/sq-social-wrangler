import { initialize } from 'svg2png-wasm';
import { missing, ThrowableRouter } from 'itty-router-extras';

import wasm from '../node_modules/svg2png-wasm/svg2png_wasm_bg.wasm';
import image from './api/image';

const router = ThrowableRouter();

router.get('/image/series/:series/quest/:quest', image);
router.all('*', () => missing('Are you sure about that?'));

export interface Env {}

export default {
  async fetch(request: Request, ...args: any) {
    await initialize(wasm).catch(() => {});
    return router.handle(request, ...args);
  },
};
