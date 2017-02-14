import {
    SVG_NS
} from '../settings';
import Paddle from './Paddle';

export default class Ball2 {
    constructor(radius, boardWidth, boardHeight) {
        this.radius = radius;
        this.boardWidth = boardWidth;
        this.boardHeight = boardHeight;
        this.direction = 1;

        this.ball2();
    }

    ball2() {
        this.x = 10;
        this.y = this.boardHeight / 2;
        this.y = Paddle.y + (Paddle.height / 2);

        this.vy = 0;
        this.vx = this.direction * (6 - Math.abs(this.vy));
    }

    render(svg) {
        this.x += this.vx;
        this.y += this.vy;

        let circle = document.createElementNS(SVG_NS, 'circle');
        circle.setAttributeNS(null, 'r', this.radius);
        circle.setAttributeNS(null, 'stroke', 'white');
        circle.setAttributeNS(null, 'fill', 'white');
        circle.setAttributeNS(null, 'cx', this.x);
        circle.setAttributeNS(null, 'cy', this.y);

        svg.appendChild(circle);
    }
}
