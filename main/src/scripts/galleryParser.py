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
    dir_path = "./main/public/farewell2025/"
    images = parse_gallery(dir_path, ".jpg")
    for index, img in enumerate(images):
        a = img.split("pic")
        a[-1] = str(index + 1) + ".jpg"
        a = a[0] + a[1]
        print(img, "->", a)