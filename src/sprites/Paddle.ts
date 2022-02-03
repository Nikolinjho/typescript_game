import { Vector } from '~/types';

export class Paddle {
  private paddleImage: HTMLImageElement = new Image();
  private moveLeft: boolean;
  private moveRight: boolean;

  constructor(
    private speed: number,
    private paddleWidth: number,
    private paddleHeight: number,
    private position: Vector,
    image: string,
  ) {
    this.speed = speed;
    this.paddleWidth = paddleWidth;
    this.paddleHeight = paddleHeight;
    this.position = position;
    this.moveLeft = false;
    this.moveRight = false;
    this.paddleImage.src = image;

    // event listeners
    document.addEventListener('keydown', this.handleKeyDown.bind(this));
    document.addEventListener('keyup', this.handleKeyUp.bind(this));
  }

  // getters
  get width(): number {
    return this.paddleWidth;
  }

  get height(): number {
    return this.paddleHeight;
  }

  get pos(): Vector {
    return this.position;
  }

  get image(): HTMLImageElement {
    return this.paddleImage;
  }

  get isMovingLeft(): boolean {
    return this.moveLeft;
  }

  get isMovingRight(): boolean {
    return this.moveRight;
  }

  movePaddle(): void {
    if (this.moveLeft) this.pos.x -= this.speed;
    if (this.moveRight) this.pos.x += this.speed;
  }

  handleKeyDown(e: KeyboardEvent) {
    if (e.code === 'KeyA' || e.key === 'a') this.moveLeft = true;
    if (e.code === 'KeyD' || e.key === 'd') this.moveRight = true
  }

  handleKeyUp(e: KeyboardEvent): void {
    if (e.code === 'KeyA' || e.key === 'a') this.moveLeft = false;
    if (e.code === 'KeyD' || e.key === 'd') this.moveRight = false;
  }
}
