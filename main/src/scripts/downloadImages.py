import os
import requests
import json
from urllib.parse import urlparse, parse_qs

# GET LINKS.txt LINKS AND ID_MATCH_NAME.json from https://colab.research.google.com/drive/1LicffdHBGBONmrCThF4tU06Pxg9mW7xx?usp=sharing
# TODO: MAKE SRC FOLDER FILE NAMES THE AUTHORS BEFORE GOING THRU THIS
# TO BETTER CREDIT THEM
# Directory to save images
OUTPUT_DIR = "./main/src/scripts/outputs/images"
os.makedirs(OUTPUT_DIR, exist_ok=True)

# Open JSON to match ids to filenames
errFlag = 0
try:
    with open("./main/src/scripts/scriptResources/id_match_name.json", "r") as f:
            match_ids = json.load(f)
except FileNotFoundError:
    print("No need to match filenames?")
    errFlag = 1

# Read links
with open("./main/src/scripts/scriptResources/links.txt", "r") as f:
    urls = [line.strip() for line in f if line.strip()]

for i, url in enumerate(urls, start=1):
    try:
        # Extract Google Drive ID for filename
        parsed = urlparse(url)
        query = parse_qs(parsed.query)
        file_id = query.get("id", [f"file_{i}"])[0]

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
        if errFlag == 0:
            print("Reached!")
            file_name = match_ids[file_id]
            filename = os.path.join(OUTPUT_DIR, f"{file_name}{ext}")
        else:
            filename = os.path.join(OUTPUT_DIR, f"{file_id}{ext}")
        with open(filename, "wb") as f_out:
            for chunk in response.iter_content(chunk_size=8192):
                f_out.write(chunk)

        print(f"✅ Downloaded {filename}")
    except Exception as e:
        print(f"❌ Failed {url}: {e}")
