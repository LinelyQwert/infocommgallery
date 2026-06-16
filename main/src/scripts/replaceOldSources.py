"""
this script replaces the old src links in the JSON files with the new ones from jsDelivr, which are linked to the GitHub repository where the photos are now stored
this script is no longer needed after the src links have been updated, but it is kept here for reference
"""

import os
import json

# directory containing the json files
JSON_FOLDER = "./main/src/pages/gallery/galleryJSONs/2026"

json_file = "2025/defy2025.json" # CHANGE THIS: the path of the json file you want to update "year/event.json"
replace_all = True # CHANGE THIS: if true, it will replace all jsons in the folder specified, if false, it will only replace the one specified in json_file

if replace_all:
    json_files = [f for f in os.listdir(JSON_FOLDER) if f.endswith(".json")]
else:
    json_files = [json_file]

for json_file in json_files:
    try:
        with open(os.path.join(JSON_FOLDER, json_file), "r") as f:
            data = json.load(f)
            print(f"json file loaded successfully: {json_file}")
    except FileNotFoundError:
        raise FileNotFoundError(f"yo why is there not a json file matching this path: {json_file}")

    # update the src links
    for key in data.keys():
        old_src = data[key]["src"]

        if old_src.startswith("http"):
            print(f"skipping {key} because it already has the correct url: {old_src}")
            continue

        new_src = f"https://cdn.jsdelivr.net/gh/JJJwong/tjc-ifc-event-photos@main/public/{old_src}"

        data[key]["src"] = new_src
        
        print(f"updated {key}: {old_src} -> {new_src}")

    # save the updated json file
    with open(os.path.join(JSON_FOLDER, json_file), "w") as f: 
        json.dump(data, f, indent=4)
        print("json file updated successfully!")