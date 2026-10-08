"""Rebuild public/photos and data/photos.json from the original photos.

Usage:  python3 scripts/build_photos.py "<path to iCloud AI/makihairmake.com/photos>"
Folders: graphic / product / mh  (files are ordered by file name)
"""
import json, os, shutil, sys
from PIL import Image, ImageOps

SRC = sys.argv[1] if len(sys.argv) > 1 else os.path.expanduser(
    "~/Library/Mobile Documents/com~apple~CloudDocs/AI/makihairmake.com/photos")
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "public", "photos")
EXT = (".jpg", ".jpeg", ".png", ".webp", ".tif", ".tiff", ".heic")

manifest = {}
for cat in ["graphic", "product", "mh"]:
    d = os.path.join(OUT, cat)
    shutil.rmtree(d, ignore_errors=True)
    os.makedirs(d)
    manifest[cat] = []
    files = sorted(f for f in os.listdir(os.path.join(SRC, cat)) if f.lower().endswith(EXT))
    for i, f in enumerate(files, 1):
        im = ImageOps.exif_transpose(Image.open(os.path.join(SRC, cat, f)))
        if im.mode in ("RGBA", "LA", "P"):
            im = im.convert("RGBA")
            bg = Image.new("RGB", im.size, "white")
            bg.paste(im, mask=im.split()[-1])
            im = bg
        else:
            im = im.convert("RGB")
        name = f"{cat}-{i:03d}"
        big = im.copy(); big.thumbnail((1800, 1800), Image.LANCZOS)
        big.save(os.path.join(d, name + ".jpg"), quality=80, optimize=True, progressive=True)
        small = im.copy(); small.thumbnail((720, 1100), Image.LANCZOS)
        small.save(os.path.join(d, name + "-s.jpg"), quality=76, optimize=True, progressive=True)
        manifest[cat].append({"src": f"/photos/{cat}/{name}.jpg", "thumb": f"/photos/{cat}/{name}-s.jpg",
                              "w": big.width, "h": big.height})
    print(cat, len(files))

with open(os.path.join(ROOT, "data", "photos.json"), "w") as fh:
    json.dump(manifest, fh, indent=1)
