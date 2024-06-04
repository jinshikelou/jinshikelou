export default function initLoginBg() {
    let windowWidth = document.documentElement.clientWidth || document.body.clientWidth;
    let windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
    let canvas = document.getElementById('canvas') as HTMLCanvasElement,
        ctx = canvas.getContext('2d') as CanvasRenderingContext2D,
        w = canvas.width = windowWidth,
        h = canvas.height = windowHeight,

        hue = 217,
        stars: IntStart[] = [],
        count = 0,
        maxStars = 500;


    let canvas2 = document.createElement('canvas'),
        ctx2 = canvas2.getContext('2d') as CanvasRenderingContext2D;
    canvas2.width = 100;
    canvas2.height = 100;
    let half = canvas2.width / 2,
        gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half);
    gradient2.addColorStop(0.025, '#CCC');
    gradient2.addColorStop(0.1, 'hsl(' + hue + ',61%,33%)');
    gradient2.addColorStop(0.25, 'hsl(' + hue + ',64%,6%)');
    gradient2.addColorStop(1, 'transparent');

    ctx2.fillStyle = gradient2;
    ctx2.beginPath();
    ctx2.arc(half, half, half, 0, Math.PI * 2);
    ctx2.fill();

    //End cache

    function random(min: number, max = 0) {
        if (arguments.length < 2) {
            max = min;
            min = 0;
        }

        if (min > max) {
            let hold = max;
            max = min;
            min = hold;
        }

        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function maxOrbit(x: number, y: number) {
        let max = Math.max(x, y),
            diameter = Math.round(Math.sqrt(max * max + max * max));
        return diameter / 2;
        //星星移动范围， 值越大范围越小
    }

    interface IntStart {
        orbitRadius: number;
    }

}