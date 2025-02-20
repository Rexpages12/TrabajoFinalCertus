import random
def CreadorContraseñas(caracteres, cantidad):
    indice = 1
    while indice < cantidad:
        indice +=1
        opciones = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+"
        contraseña = ""
        for generar in range(caracteres):
            generar += random.randint(1,500)
            indices_contraseña = (7*generar+3)%len(opciones)
            contraseña += opciones[indices_contraseña]
        return contraseña
run = True
while run:
    try:
        print(" Generador de contraseñas Aleatorias ".center(70,"="))
        contraseñas = int(input("¿Cuantas contraseñas desea que le haga?: "))
        caracteres= int(input(f"Cuantos caracteres desea que tenga la contraseña: "))
        print("")
        for i in range(contraseñas):
            print(f"{i+1}°contraseña: {CreadorContraseñas(caracteres, contraseñas)}")
        run = False
    except Exception as e:
        print(f"\nHa ocurrido un Error {e}")
        print("Porfavor intentelo denuevo\n")