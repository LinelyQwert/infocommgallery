import os

def parse_gallery(directory, extension=".tsx"):
    """
    Parses the given directory for tsx files and returns a list of their names.
    
    Args:
        directory (str): The path to the directory to parse.
        extension (str): The file extension to look for. Default is ".tsx".
    Returns:
        list: A list of file names.
    """
    if not os.path.isdir(directory):
        raise ValueError(f"The provided path '{directory}' is not a valid directory.")
    
    files = []
    for filename in os.listdir(directory):
        if filename.endswith(extension):
            files.append(filename)
    
    return files

if __name__ == "__main__":
    dir_path = "./main/src/pages/gallery"
    try:
        tsx_files = parse_gallery(dir_path)
        print(f"Found {len(tsx_files)} .tsx files:")
        for file in tsx_files:
            print(file)
        with open("./main/src/scripts/outputs/gallery_files.txt", "w") as f:
            for file in tsx_files:
                f.write(f"import {file.replace('.tsx', '')} from './pages/gallery/{file}';\n")
                # f.write(f"{file}\n")
    except ValueError as e:
        print(e)