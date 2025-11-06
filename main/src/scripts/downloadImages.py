import os
import requests
import json
from urllib.parse import urlparse, parse_qs

# GET file_attr.json from https://colab.research.google.com/drive/1LicffdHBGBONmrCThF4tU06Pxg9mW7xx?usp=sharing
# MAKE SRC FOLDER FILE NAMES THE AUTHORS BEFORE GOING THRU THIS
# TO BETTER CREDIT THEM
# Directory to save images
# Taken from where the terminal is run from
# I suggest running from root of project (the directory containing "main" folder)
OUTPUT_DIR = "./main/src/scripts/outputs/images"
os.makedirs(OUTPUT_DIR, exist_ok=True)

# open file_attr.json

try:
    with open("./main/src/scripts/scriptResources/file_attr.json", "r") as f:
        file_attrs = json.load(f)
except FileNotFoundError:
    raise FileNotFoundError("yo why is there not a file_attr.json matching this path: ./main/src/scripts/scriptResources/file_attr.json")

urls = [file["url"] for file in file_attrs.values()]
filenames = [filename for filename in file_attrs.keys()]

for i, url in enumerate(urls, start=0):
    try:
        filename = filenames[i]

        # Download the image
        response = requests.get(url, stream=True)
        response.raise_for_status()

        # Determine extension (if possible)
        content_type = response.headers.get("Content-Type", "")
        ext = ""
        if "jpeg" in content_type:
            ext = ".jpg"
        elif "png" in content_type:
            ext = ".png"
        elif "webp" in content_type:
            ext = ".webp"
        else:
            ext = ".jpg"  # default
        print(filename)
        filepath = os.path.join(OUTPUT_DIR, f"{filename}{ext}")
        with open(filepath, "wb") as f_out:
            for chunk in response.iter_content(chunk_size=8192):
                f_out.write(chunk)

        print(f"✅ Downloaded {filename}")
    except Exception as e:
        print(f"❌ Failed {url}: {e}")
