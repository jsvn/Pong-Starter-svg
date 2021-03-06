import {
    SVG_NS,
    KEYS
} from '../settings';

import Board from './Board';
import Paddle from './Paddle';
import Ball from './Ball';
import Score from './Score';
import Ball2 from './Ball2';

export default class Game {

    constructor(element, width, height) {
        this.element = element;
        this.width = width;
        this.height = height;
        this.gameElement = document.getElementById(this.element);
        this.board = new Board(this.width, this.height);
        this.boardGap = 10;
        this.paddleWidth = 8;
        this.paddleHeight = 56;
        this.pause = false;

        this.paddle1 = new Paddle(
            this.height,
            this.paddleWidth,
            this.paddleHeight,
            this.boardGap,
            ((this.height - this.paddleHeight) / 2),
            KEYS.a,
            KEYS.z,
        );

        this.paddle2 = new Paddle(
            this.height,
            this.paddleWidth,
            this.paddleHeight,
            (this.width - this.boardGap - this.paddleWidth),
            ((this.height - this.paddleHeight) / 2),
            KEYS.up,
            KEYS.down,
        );
        this.ball = new Ball(
            8,
            this.width,
            this.height
        );
        this.score1 = new Score(
            this.width / 2 - 50, 30, 30);

        this.score2 = new Score(
            this.width / 2 + 50, 30, 30);

        this.ball2 = new Ball(
            8,
            this.width,
            this.height,

        );


        document.addEventListener('keydown', event => {
            switch (event.keyCode) {
                case KEYS.spaceBar:
                    this.pause = !this.pause;
                    break;
                case KEYS.v:
                    this.ball2 = new Ball(BALL.radius, this.width, this.height,);
                    break;
            }
        });
        //id of a thing we want to append this game to and width and height is the size of vp and vb of our game
    }
    // space() {
    //   this.space = Math.max(0, this.y-this.);
    // }

    render() {

        if (this.pause) {
            return;
        }

        this.gameElement.innerHTML = '';

        let svg = document.createElementNS(SVG_NS, 'svg');
        svg.setAttributeNS(null, 'width', this.width);
        svg.setAttributeNS(null, 'height', this.height);
        svg.setAttributeNS(null, 'viewBox', `0 0 ${this.width} ${this.height}`);
        this.gameElement.appendChild(svg);

        this.board.render(svg);
        this.paddle1.render(svg);
        this.paddle2.render(svg);
        this.ball.render(svg, this.paddle1, this.paddle2);
        this.score1.render(svg, this.paddle1.score);
        this.score2.render(svg, this.paddle2.score);
        this.ball2.render(svg, this.paddle1, this.paddle2);

    }

}
