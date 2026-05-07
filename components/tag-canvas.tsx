"use client"

import { useEffect, useRef } from "react"
import Script from "next/script"

export default function TagCanvas() {
  const containerRef = useRef<HTMLDivElement>(null)
  const scriptLoaded = useRef(false)
  const engineRef = useRef<any>(null)
  const renderRef = useRef<any>(null)

  useEffect(() => {
    // Only run once the script is loaded and the component is mounted
    if (scriptLoaded.current && containerRef.current) {
      initSimulation(containerRef.current)
    }

    // Cleanup function
    return () => {
      if (engineRef.current && renderRef.current) {
        const Matter = window.Matter
        Matter.Render.stop(renderRef.current)
        Matter.Engine.clear(engineRef.current)

        // Remove event listeners
        window.removeEventListener("resize", handleResize)
      }
    }
  }, [])

  const handleScriptLoad = () => {
    scriptLoaded.current = true
    if (containerRef.current) {
      initSimulation(containerRef.current)
    }
  }

  // Resize handler function (defined outside to be able to remove it)
  const handleResize = () => {
    if (!containerRef.current || !renderRef.current) return

    const containerWidth = containerRef.current.clientWidth
    const containerHeight = containerRef.current.clientHeight

    // Update canvas dimensions
    renderRef.current.canvas.width = containerWidth
    renderRef.current.canvas.height = containerHeight
    renderRef.current.options.width = containerWidth
    renderRef.current.options.height = containerHeight

    // Update boundaries
    updateBoundaries(containerWidth, containerHeight)
  }

  // Update boundaries function
  const updateBoundaries = (width: number, height: number) => {
    if (!engineRef.current) return

    const Matter = window.Matter
    const world = engineRef.current.world

    // Remove old boundaries
    const bodies = Matter.Composite.allBodies(world)
    bodies.forEach((body: any) => {
      if (body.isStatic && body.label !== "MouseConstraint") {
        Matter.World.remove(world, body)
      }
    })

    // Create new boundaries with increased thickness for better containment
    const thickness = 100 // Aumentado de 50 para 100

    const ground = Matter.Bodies.rectangle(width / 2, height + thickness / 2, width + thickness * 2, thickness, {
      isStatic: true,
      render: { fillStyle: "transparent" },
      label: "ground",
    })

    const wallLeft = Matter.Bodies.rectangle(-thickness / 2, height / 2, thickness, height + thickness * 2, {
      isStatic: true,
      render: { fillStyle: "transparent" },
      label: "wallLeft",
    })

    const wallRight = Matter.Bodies.rectangle(width + thickness / 2, height / 2, thickness, height + thickness * 2, {
      isStatic: true,
      render: { fillStyle: "transparent" },
      label: "wallRight",
    })

    const roof = Matter.Bodies.rectangle(width / 2, -thickness / 2, width + thickness * 2, thickness, {
      isStatic: true,
      render: { fillStyle: "transparent" },
      label: "roof",
    })

    Matter.World.add(world, [ground, wallLeft, wallRight, roof])
  }

  // Simulation initialization
  function initSimulation(containerElement: HTMLDivElement) {
    // Garantir que Matter está disponível
    if (typeof window === "undefined" || !window.Matter) return

    const Matter = window.Matter
    const Engine = Matter.Engine,
      Render = Matter.Render,
      World = Matter.World,
      Bodies = Matter.Bodies,
      MouseConstraint = Matter.MouseConstraint,
      Mouse = Matter.Mouse,
      Events = Matter.Events

    const engine = Engine.create()
    const world = engine.world

    // Ajustar configurações do motor para mais estabilidade
    engine.world.gravity.y = 0.6 // Reduzido de 0.8 para 0.6 (menos gravidade)
    engine.constraintIterations = 3 // Aumentar iterações para melhor estabilidade
    engine.positionIterations = 8 // Aumentar iterações de posição
    engine.velocityIterations = 6 // Aumentar iterações de velocidade

    // Store engine reference for cleanup
    engineRef.current = engine

    const containerWidth = containerElement.clientWidth
    const containerHeight = containerElement.clientHeight

    // Set up Matter.js renderer
    const render = Render.create({
      element: containerElement,
      engine: engine,
      options: {
        width: containerWidth,
        height: containerHeight,
        background: "transparent", // No default background
        wireframes: false,
        showBounds: false,
        showVelocity: false,
        showAngleIndicator: false,
        showDebug: false,
      },
    })

    // Store render reference for cleanup and resize
    renderRef.current = render

    // Remove canvas border
    if (render.canvas) {
      render.canvas.style.border = "none"
      render.canvas.style.outline = "none"
      render.canvas.style.position = "absolute"
      render.canvas.style.top = "0"
      render.canvas.style.left = "0"
      render.canvas.style.width = "100%"
      render.canvas.style.height = "100%"
    }

    Render.run(render)
    Engine.run(engine)

    // Create boundaries with increased thickness
    const thickness = 100 // Aumentado para melhor contenção

    const ground = Bodies.rectangle(
      containerWidth / 2,
      containerHeight + thickness / 2,
      containerWidth + thickness * 2,
      thickness,
      {
        isStatic: true,
        render: { fillStyle: "transparent" },
        label: "ground",
      },
    )

    const wallLeft = Bodies.rectangle(-thickness / 2, containerHeight / 2, thickness, containerHeight + thickness * 2, {
      isStatic: true,
      render: { fillStyle: "transparent" },
      label: "wallLeft",
    })

    const wallRight = Bodies.rectangle(
      containerWidth + thickness / 2,
      containerHeight / 2,
      thickness,
      containerHeight + thickness * 2,
      {
        isStatic: true,
        render: { fillStyle: "transparent" },
        label: "wallRight",
      },
    )

    const roof = Bodies.rectangle(containerWidth / 2, -thickness / 2, containerWidth + thickness * 2, thickness, {
      isStatic: true,
      render: { fillStyle: "transparent" },
      label: "roof",
    })

    World.add(world, [ground, wallLeft, wallRight, roof])

    // Sync Matter.js bodies with HTML elements
    const tags = containerElement.querySelectorAll<HTMLElement>(".tag")
    const tagBodies = Array.from(tags).map((tag) => {
      const width = tag.offsetWidth
      const height = tag.offsetHeight

      // Position tags based on container size with safe margins
      const margin = 60 // Margem maior para evitar spawn fora dos limites
      const x = Math.random() * (containerWidth - width - margin * 2) + width / 2 + margin
      const y = Math.random() * (containerHeight - height - margin * 2) + height / 2 + margin

      const body = Bodies.rectangle(x, y, width, height, {
        chamfer: { radius: height / 2 }, // Rounded corners
        density: 0.008, // Reduzido de 0.01 para 0.008 (mais leve)
        friction: 0.3, // Aumentado de 0.1 para 0.3 (mais atrito)
        frictionAir: 0.02, // Aumentado para mais resistência do ar
        restitution: 0.4, // Reduzido de 0.8 para 0.4 (menos elástico)
        render: {
          fillStyle: "transparent", // Disable Matter.js background rendering
        },
      })

      World.add(world, body)
      return { body, element: tag }
    })

    // Função para verificar e reposicionar tags que saem dos limites
    const checkBounds = () => {
      tagBodies.forEach(({ body }) => {
        const { x, y } = body.position
        const margin = 50

        // Se a tag sair muito dos limites, reposicionar
        if (x < -margin || x > containerWidth + margin || y < -margin || y > containerHeight + margin) {
          // Reposicionar no centro com velocidade zero
          Matter.Body.setPosition(body, {
            x: containerWidth / 2 + (Math.random() - 0.5) * 100,
            y: containerHeight / 4 + Math.random() * 100,
          })
          Matter.Body.setVelocity(body, { x: 0, y: 0 })
          Matter.Body.setAngularVelocity(body, 0)
        }

        // Limitar velocidade máxima para evitar movimentos muito bruscos
        const maxVelocity = 15
        if (body.velocity.x > maxVelocity) Matter.Body.setVelocity(body, { x: maxVelocity, y: body.velocity.y })
        if (body.velocity.x < -maxVelocity) Matter.Body.setVelocity(body, { x: -maxVelocity, y: body.velocity.y })
        if (body.velocity.y > maxVelocity) Matter.Body.setVelocity(body, { x: body.velocity.x, y: maxVelocity })
        if (body.velocity.y < -maxVelocity) Matter.Body.setVelocity(body, { x: body.velocity.x, y: -maxVelocity })

        // Limitar velocidade angular
        const maxAngularVelocity = 0.3
        if (body.angularVelocity > maxAngularVelocity) Matter.Body.setAngularVelocity(body, maxAngularVelocity)
        if (body.angularVelocity < -maxAngularVelocity) Matter.Body.setAngularVelocity(body, -maxAngularVelocity)
      })
    }

    // Sync positions and rotation with Matter.js
    Events.on(engine, "afterUpdate", () => {
      checkBounds() // Verificar limites a cada frame

      tagBodies.forEach(({ body, element }) => {
        const { x, y } = body.position
        const angle = body.angle

        // TypeScript cast
        const htmlElement = element as HTMLElement

        // Aplicar apenas transformação, sem sombras dinâmicas
        htmlElement.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${angle}rad)`
      })
    })

    // Add mouse interactivity with limited force
    const mouse = Mouse.create(render.canvas)
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.15, // Reduzido de 0.2 para 0.15 (menos força)
        render: {
          visible: false,
        },
      },
    })

    World.add(world, mouseConstraint)

    // Add resize event listener
    window.addEventListener("resize", handleResize)
  }

  return (
    <>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.19.0/matter.min.js"
        onLoad={handleScriptLoad}
        strategy="afterInteractive"
      />

      <div className="tag-canvas-wrapper">
        <div className="outer-frame">
          <div className="inner-frame">
            <div ref={containerRef} className="tag-canvas">
              <h2 className="title"> </h2>
              <div className="tag">Bubble.io</div>
              <div className="tag">Nocode</div>
              <div className="tag">Expression</div>
              <div className="tag">Option Set</div>
              <div className="tag">Interface</div>
              <div className="tag">Version</div>
              <div className="tag">Mobile</div>
              <div className="tag">Design</div>
              <div className="tag">UX/UI</div>
              <div className="tag">Element</div>
              <div className="tag">Repeating Group</div>
              <div className="tag">API Connector</div>
              <div className="tag">Custom State</div>
              <div className="tag">Conditional</div>
              <div className="tag">Dynamic Data</div>
              <div className="tag">Plugins</div>
              <div className="tag">Backend Workflow</div>
              <div className="tag">Privacy Rules</div>
              <div className="tag">Events</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

// Adicionar tipos para o Matter.js
declare global {
  interface Window {
    Matter: any
  }
}
