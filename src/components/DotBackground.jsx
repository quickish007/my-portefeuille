import React, { useRef, useEffect } from 'react'

export default function CanvasBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    function resizeCanvas() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const DOTS = 40
    const dots = []
    for (let i = 0; i < DOTS; i++) {
      dots.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: 0.5 + Math.random() * 0.2,
        speed: 0.5 + Math.random() * 1.2,
        alpha: 0.3 + Math.random() * 0.7,
        baseAlpha: 0.3 + Math.random() * 0.7,       // overall brightness
  twinkleSpeed: Math.random() * 0.005 + 0.002, // how fast it flickers
  twinklePhase: Math.random() * Math.PI * 2,  // starting offset in the sine wave
      })
    }

    let animationId
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (let dot of dots) {
        ctx.beginPath()
        ctx.arc(dot.x, dot.y, dot.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${dot.alpha})`
        ctx.fill()
        dot.y -= dot.speed
        if (dot.y < -dot.r) {
          dot.y = canvas.height + dot.r
          dot.x = Math.random() * canvas.width
          dot.r = 0.5 + Math.random() * 0.5
          dot.speed = 0.5 + Math.random() * 1.2
          dot.alpha = 0.3 + Math.random() * 0.7
        }
      }
      animationId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  )
}
