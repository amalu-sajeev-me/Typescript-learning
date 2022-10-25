import "jsdom-global/register";
import { log } from "../config/initialize";

const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;

log.silly(`canvas should be null`);
log.silly(myCanvas);
