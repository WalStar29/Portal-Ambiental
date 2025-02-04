import qrcode
from PIL import Image

# Datos que deseas codificar en el QR
data = "https://walstar29.github.io/Portal-Ambiental/"

# Crear un objeto QRCode
qr = qrcode.QRCode(
    version=1,  # Controla el tamaño del QR (1 es el más pequeño)
    error_correction=qrcode.constants.ERROR_CORRECT_H,  # Controla el nivel de corrección de errores
    box_size=10,  # Tamaño de cada caja del QR
    border=4,  # Tamaño del borde (en cajas)
)

# Agregar datos al objeto QRCode
qr.add_data(data)
qr.make(fit=True)

# Crear una imagen del QR
img_qr = qr.make_image(fill_color="black", back_color="white").convert('RGB')

# Abrir la imagen que deseas colocar en el medio del QR
logo = Image.open("Nueva Esparta.png")

# Calcular el tamaño del logo
logo_size = 60
logo = logo.resize((logo_size, logo_size))

# Calcular la posición para colocar el logo en el medio del QR
pos = ((img_qr.size[0] - logo_size) // 2, (img_qr.size[1] - logo_size) // 2)

# Pegar el logo en el medio del QR
img_qr.paste(logo, pos)

# Guardar la imagen en un archivo
img_qr.save("codigo_qr_con_logo.png")

print("Código QR con logo generado y guardado como 'codigo_qr_con_logo.png'")
