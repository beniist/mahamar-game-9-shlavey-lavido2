from PIL import Image
import os

def split_image(image_path, output_dir):
    # פתיחת התמונה
    img = Image.open(image_path)
    
    # קבלת מידות התמונה
    width, height = img.size
    
    # חישוב גודל כל חלק
    part_width = width // 3
    part_height = height // 3
    
    # יצירת תיקיית פלט אם לא קיימת
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
    
    # חיתוך התמונה ל-9 חלקים
    for i in range(3):
        for j in range(3):
            # חישוב קואורדינטות החיתוך
            left = j * part_width
            upper = i * part_height
            right = left + part_width
            lower = upper + part_height
            
            # חיתוך החלק
            part = img.crop((left, upper, right, lower))
            
            # שמירת החלק
            part.save(os.path.join(output_dir, f'part_{i*3 + j + 1}.png'))

# הפעלת הפונקציה
split_image('files/hani.png', 'files/puzzle_parts') 