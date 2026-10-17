# -*- coding: utf-8 -*-
"""Generate PWA icons for the InfoLivres app.
هندسة وإخراج : حاج إسماعيل إبراهيم

Run:  python gen_icons.py
Outputs: icons/icon-192.png, icons/icon-512.png, icons/icon-maskable-512.png
"""
import os
from PIL import Image, ImageDraw

OUT_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "icons")

BG_TOP = (20, 82, 61)
BG_BOTTOM = (10, 42, 31)
GOLD = (201, 162, 39)
GOLD_LIGHT = (224, 187, 77)
CREAM_TOP = (255, 253, 247)
CREAM_BOTTOM = (239, 231, 212)
SPINE = (20, 82, 61)


def lerp(a, b, t):
    return int(round(a + (b - a) * t))


def vertical_gradient(size, top, bottom):
    grad = Image.new("RGB", (1, size), top)
    px = grad.load()
    for y in range(size):
        t = y / max(1, size - 1)
        px[0, y] = (lerp(top[0], bottom[0], t),
                    lerp(top[1], bottom[1], t),
                    lerp(top[2], bottom[2], t))
    return grad.resize((size, size), Image.BILINEAR)


def make_icon(size, maskable=False):
    s = size / 512.0
    base = Image.new("RGBA", (size, size), (0, 0, 0, 0))

    if maskable:
        # maskable icons must fill the full square (safe zone handled by design)
        bg = vertical_gradient(size, BG_TOP, BG_BOTTOM).convert("RGBA")
    else:
        bg = vertical_gradient(size, BG_TOP, BG_BOTTOM).convert("RGBA")
        mask = Image.new("L", (size, size), 0)
        ImageDraw.Draw(mask).rounded_rectangle(
            [0, 0, size - 1, size - 1], radius=int(112 * s), fill=255)
        bg.putalpha(mask)
    base = Image.alpha_composite(base, bg)

    d = ImageDraw.Draw(base)

    inset = int(26 * s)
    if not maskable:
        d.rounded_rectangle(
            [inset, inset, size - 1 - inset, size - 1 - inset],
            radius=int((112 - 20) * s), outline=GOLD, width=max(2, int(7 * s)))
    else:
        # keep artwork inside ~80% safe zone for maskable
        d.rounded_rectangle(
            [int(46 * s), int(46 * s), size - 1 - int(46 * s), size - 1 - int(46 * s)],
            radius=int(70 * s), outline=GOLD, width=max(2, int(6 * s)))

    page_fill = vertical_gradient(size, CREAM_TOP, CREAM_BOTTOM).convert("RGBA")
    page_mask = Image.new("L", (size, size), 0)
    pm = ImageDraw.Draw(page_mask)
    left = [(108, 196), (252, 160), (252, 368), (108, 404)]
    right = [(404, 196), (260, 160), (260, 368), (404, 404)]
    pm.polygon([(int(x * s), int(y * s)) for x, y in left], fill=255)
    pm.polygon([(int(x * s), int(y * s)) for x, y in right], fill=255)
    base = Image.alpha_composite(base, Image.composite(page_fill, Image.new("RGBA", (size, size), (0, 0, 0, 0)), page_mask))
    d = ImageDraw.Draw(base)

    lw = max(2, int(6 * s))
    d.line([(int(108 * s), int(196 * s)), (int(252 * s), int(160 * s))], fill=GOLD_LIGHT, width=lw)
    d.line([(int(252 * s), int(160 * s)), (int(252 * s), int(368 * s))], fill=GOLD_LIGHT, width=lw)
    d.line([(int(252 * s), int(368 * s)), (int(108 * s), int(404 * s))], fill=GOLD_LIGHT, width=lw)
    d.line([(int(404 * s), int(196 * s)), (int(260 * s), int(160 * s))], fill=GOLD_LIGHT, width=lw)
    d.line([(int(260 * s), int(160 * s)), (int(260 * s), int(368 * s))], fill=GOLD_LIGHT, width=lw)
    d.line([(int(260 * s), int(368 * s)), (int(404 * s), int(404 * s))], fill=GOLD_LIGHT, width=lw)

    d.line([(int(256 * s), int(170 * s)), (int(256 * s), int(364 * s))],
           fill=SPINE, width=max(2, int(8 * s)))

    text_gold = (201, 162, 39, 200)
    for y in (216, 250, 284, 318):
        w = 78 if y < 284 else 60
        d.line([(int(146 * s), int(y * s)), (int((146 + w) * s), int(y * s))],
               fill=text_gold, width=max(2, int(6 * s)))
        d.line([(int(288 * s), int(y * s)), (int((288 + w) * s), int(y * s))],
               fill=text_gold, width=max(2, int(6 * s)))

    # gold medallion with star
    cx, cy, r = 256, 118, 26
    d.ellipse([(int((cx - r) * s), int((cy - r) * s)),
               (int((cx + r) * s), int((cy + r) * s))], fill=GOLD_LIGHT)
    star = []
    import math
    for i in range(10):
        ang = -math.pi / 2 + i * math.pi / 5
        rad = (11 if i % 2 == 0 else 4.6)
        star.append((int((cx + rad * math.cos(ang)) * s), int((cy + rad * math.sin(ang)) * s)))
    d.polygon(star, fill=SPINE)

    return base


def main():
    os.makedirs(OUT_DIR, exist_ok=True)
    targets = [
        ("icon-192.png", 192, False),
        ("icon-512.png", 512, False),
        ("icon-maskable-512.png", 512, True),
    ]
    for name, size, maskable in targets:
        img = make_icon(size, maskable)
        path = os.path.join(OUT_DIR, name)
        img.save(path, "PNG")
        print("wrote", path, img.size)


if __name__ == "__main__":
    main()
