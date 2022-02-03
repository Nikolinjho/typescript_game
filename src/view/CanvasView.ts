// types
import { Brick } from "../sprites/Brick";
import { Ball } from "../sprites/Ball";
import { Paddle } from "../sprites/Paddle";

export class CanvasView {

  public canvas: HTMLCanvasElement

  private context: CanvasRenderingContext2D | null
  private scoreDisplay: HTMLElement | null
  private startBtn: HTMLElement | null
  private info: HTMLElement | null

  constructor(canvasName: string){
    this.canvas = document.getElementById(canvasName) as HTMLCanvasElement
    this.context = this.canvas.getContext('2d')
    this.scoreDisplay = document.getElementById('score')
    this.startBtn = document.getElementById('start')
    this.info = document.getElementById('info')
    
  }

  clearCanvas() {
    this.context?.clearRect(0,0, this.canvas.width, this.canvas.height)
  }

  initStart(startFunction: (view: CanvasView) => void): void{
    this.startBtn?.addEventListener('click', () => startFunction(this))
  }

  drawScore(score: number): void{
    if (this.scoreDisplay) this.scoreDisplay.innerHTML = score.toString()
  }

  drawInfo(text: string): void {
    if (this.info) this.info.innerHTML = text
  }

  drawSprite(brick: Brick | Paddle | Ball): void {
    if (!brick) return

    this.context?.drawImage(
        brick.image,
    brick.pos.x,
    brick.pos.y,
    brick.width,
    brick.height
    )
  }

  drawBricks(bricks: Brick[]): void {
    bricks.forEach(brick => this.drawSprite(brick))
  }

}