import turtle
import math
import time
import random

# Ekran ayarları
screen = turtle.Screen()
screen.bgcolor("#0f172a")
screen.title("Modern Website Loader")
screen.setup(width=800, height=600)
screen.tracer(0)

# Ana turtle
ring = turtle.Turtle()
ring.hideturtle()
ring.speed(0)
ring.width(6)

# Loading text turtle
txt = turtle.Turtle()
txt.hideturtle()
txt.penup()
txt.color("#38bdf8")

# Renk paleti (modern mavi tonları)
colors = ["#38bdf8", "#3b82f6", "#60a5fa", "#818cf8", "#a78bfa", "#c084fc"]

def draw_ring(radius, angle_offset):
    ring.clear()
    for i in range(60):
        ring.penup()
        angle = i * 6 + angle_offset
        x = radius * math.cos(math.radians(angle))
        y = radius * math.sin(math.radians(angle))
        ring.goto(x, y)
        ring.pendown()
        ring.pencolor(random.choice(colors))
        ring.forward(2)

def animate_loader():
    angle = 0
    pulse = 0
    direction = 1
    start = time.time()

    while True:
        screen.update()
        draw_ring(120, angle)
        txt.clear()
        txt.goto(0, -20)
        txt.write("LOADING...", align="center", font=("Arial", int(24 + pulse), "bold"))
        angle += 8
        pulse += 0.3 * direction
        if pulse > 6 or pulse < 0:
            direction *= -1

        # Yükleme süresi
        if time.time() - start > 7:
            break
        time.sleep(0.05)

    # Tamamlanınca efekt
    finish_effect()

def finish_effect():
    txt.clear()
    ring.clear()
    txt.color("#4ade80")
    for i in range(20):
        screen.bgcolor(random.choice(colors))
        screen.update()
        time.sleep(0.05)
    screen.bgcolor("#0f172a")
    txt.goto(0, 0)
    txt.write("✔ Website Loaded!", align="center", font=("Arial", 26, "bold"))

animate_loader()
turtle.done()
