import numpy as np
run = True
while run:
    try:
        print(" Calculador de Promedio Ponderado notas ".center(80,"="))
        cantidad= int(input("cuantas notas desea colocar: "))
        lista_notas = []
        lista_ponderacion= []
        for i in range(cantidad):
            nota = int(input(f"\nColocar la nota de el {i+1}° curso (ejem: 90): "))
            ponderacion = float(input(f"Ponderacion en porcentajes (ejem: 0.1) de el {i+1}°curso: "))
            lista_notas.append(nota)
            lista_ponderacion.append(ponderacion)
        array_notas = np.array(lista_notas)
        array_ponderaciones = np.array(lista_ponderacion)
        if np.sum(array_notas) != 100:
            print("\nError las notas deben sumar 100")
        else:
            Ponderado = np.average(array_notas, weights=array_ponderaciones)
            print("")
            print(f" El promedio de sus notas es {Ponderado} ".center(60,"="))
            run = False
    except Exception as Error:
        print(f"A ocurrido un Error {Error} ")
        print("Porfavor intentelo denuevo\n")