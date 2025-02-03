import { Application } from 'pixi.js';
import { Stats } from 'pixi-stats';
import * as PIXI from 'pixi.js';

export function showPixiStats(app: Application) {
    const stats = new Stats(app.renderer);
    const ticker: PIXI.Ticker = PIXI.Ticker.shared;
    ticker.add(stats.update, stats, PIXI.UPDATE_PRIORITY.UTILITY);

    const styles: any = {
        position: 'fixed',
        left: `-50px`,
        top: `-42px`,
        opacity: '0.8',
        'user-select': ' none',
        scale: 0.5,
        userSelect: 'none',
    };

    for (const style in styles) {
        stats.domElement.style.setProperty(style, styles[style]);
    }
}
