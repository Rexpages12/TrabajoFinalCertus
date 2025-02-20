import pandas as pd
run = True
while run:
    try:
        print(" Creador de DataFrames ".center(60, "="))
        filas = int(input("Cantidad de Filas: "))
        columnas = int(input("Cantidad de Columnas: "))
        diccionario_datos = {}
        for creador_columnas in range(columnas):
            lista_elementos = []
            print("")
            nombres = input(f"Nombre Columna numero {creador_columnas+1}: ")
            for elementos in range(filas):
                elemento = input(f"Nombre elemento numero {elementos+1} de la Columna {nombres}: ")
                lista_elementos.append(elemento)
            diccionario_datos[nombres] = lista_elementos
        print("")
        DataFrame = pd.DataFrame(diccionario_datos)
        print(DataFrame)
        run = False
    except Exception as e:
        print(f"Parece que ha ocurrido un Error: {e}")
        print("Intentelo denuevo")