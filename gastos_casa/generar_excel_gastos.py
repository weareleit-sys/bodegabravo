import pandas as pd
import xlsxwriter

# Configuración de los habitantes
habitantes = ["Juano", "Alberto", "Mitchel"]
archivo_salida = "Gastos_Casa_Balanceado.xlsx"

# Creamos un Excel Writer
writer = pd.ExcelWriter(archivo_salida, engine='xlsxwriter')
workbook = writer.book

# --- FORMATOS ---
fmt_header = workbook.add_format({'bold': True, 'bg_color': '#D7E4BC', 'border': 1, 'align': 'center', 'valign': 'vcenter'})
fmt_currency = workbook.add_format({'num_format': '$ #,##0', 'border': 1})
fmt_number = workbook.add_format({'border': 1, 'align': 'center'})
fmt_total_neg = workbook.add_format({'bold': True, 'font_color': '#9C0006', 'bg_color': '#FFC7CE', 'num_format': '$ #,##0', 'border': 1}) # Rojo (Debe)
fmt_total_pos = workbook.add_format({'bold': True, 'font_color': '#006100', 'bg_color': '#C6EFCE', 'num_format': '$ #,##0', 'border': 1}) # Verde (A favor)
fmt_bold = workbook.add_format({'bold': True, 'border': 1})

# ==========================================
# HOJA 1: REGISTRO DE COMIDAS
# ==========================================
sheet_comidas = workbook.add_worksheet("Registro_Comidas")

# Encabezados actualizados
cols_comidas = [
    "Fecha", "Plato / Descripción", "Costo Total", "Pagado Por", 
    "Porciones Totales", "Costo x Porción", "¿Dividir Igualitario?",
    f"Porciones {habitantes[0]}", f"Porciones {habitantes[1]}", f"Porciones {habitantes[2]}",
    f"CONSUMO {habitantes[0]}", f"CONSUMO {habitantes[1]}", f"CONSUMO {habitantes[2]}"
]

for col_num, value in enumerate(cols_comidas):
    sheet_comidas.write(0, col_num, value, fmt_header)

# 50 filas de lógica
for row in range(1, 51):
    row_idx = row + 1 
    
    # Datos básicos
    sheet_comidas.write_blank(row, 0, None, fmt_number) # Fecha
    sheet_comidas.write_blank(row, 1, None, fmt_number) # Plato
    sheet_comidas.write_blank(row, 2, None, fmt_currency) # Costo
    sheet_comidas.write(row, 3, habitantes[0], fmt_number) # Pagado Por (Default Juano)
    
    sheet_comidas.write_blank(row, 4, None, fmt_number) # Porciones Totales
    
    # Costo x Porción
    formula_costo_porcion = f'=IF(E{row_idx}>0, C{row_idx}/E{row_idx}, 0)'
    sheet_comidas.write_formula(row, 5, formula_costo_porcion, fmt_currency)
    
    # Dividir igualitario
    sheet_comidas.write(row, 6, "No", fmt_number) 
    
    # Porciones consumidas
    sheet_comidas.write(row, 7, 0, fmt_number) # Juano
    sheet_comidas.write(row, 8, 0, fmt_number) # Alberto
    sheet_comidas.write(row, 9, 0, fmt_number) # Mitchel
    
    # --- CÁLCULO DE CONSUMO (DEUDA) ---
    # Col K (Juano), L (Alberto), M (Mitchel) -> Indices 10, 11, 12
    # Si G="Sí", Costo/3. Si no, CostoUnitario * SusPorciones
    
    # Juano
    formula_juano = f'=IF(G{row_idx}="Sí", C{row_idx}/3, F{row_idx}*H{row_idx})'
    sheet_comidas.write_formula(row, 10, formula_juano, fmt_currency)
    
    # Alberto
    formula_alberto = f'=IF(G{row_idx}="Sí", C{row_idx}/3, F{row_idx}*I{row_idx})'
    sheet_comidas.write_formula(row, 11, formula_alberto, fmt_currency)
    
    # Mitchel
    formula_mitchel = f'=IF(G{row_idx}="Sí", C{row_idx}/3, F{row_idx}*J{row_idx})'
    sheet_comidas.write_formula(row, 12, formula_mitchel, fmt_currency)

# Validaciones de Datos (Dropdowns)
sheet_comidas.data_validation(f'D2:D51', {'validate': 'list', 'source': habitantes}) # Quién pagó
sheet_comidas.data_validation(f'G2:G51', {'validate': 'list', 'source': ['Sí', 'No']}) # Dividir igual
sheet_comidas.set_column('B:B', 25)

# ==========================================
# HOJA 2: GASTOS GENERALES
# ==========================================
sheet_gastos = workbook.add_worksheet("Gastos_Generales")
cols_gastos = [
    "Fecha", "Concepto", "Monto Total", "Pagado Por",
    f"Consumo {habitantes[0]}", f"Consumo {habitantes[1]}", f"Consumo {habitantes[2]}"
]

for col_num, value in enumerate(cols_gastos):
    sheet_gastos.write(0, col_num, value, fmt_header)

for row in range(1, 51):
    row_idx = row + 1
    sheet_gastos.write_blank(row, 0, None, fmt_number)
    sheet_gastos.write_blank(row, 1, None, fmt_number)
    sheet_gastos.write_blank(row, 2, None, fmt_currency) # Monto
    sheet_gastos.write(row, 3, habitantes[1], fmt_number) # Pagado Por (Default Alberto)
    
    # División simple / 3
    formula_split = f'=IF(C{row_idx}>0, C{row_idx}/3, 0)'
    sheet_gastos.write_formula(row, 4, formula_split, fmt_currency)
    sheet_gastos.write_formula(row, 5, formula_split, fmt_currency)
    sheet_gastos.write_formula(row, 6, formula_split, fmt_currency)

sheet_gastos.data_validation(f'D2:D51', {'validate': 'list', 'source': habitantes})
sheet_gastos.set_column('B:B', 25)

# ==========================================
# HOJA 3: BALANCE FINAL
# ==========================================
sheet_resumen = workbook.add_worksheet("Resumen_Final")

headers_resumen = ["Persona", "Total Consumido\n(Lo que usó)", "Total Pagado\n(Lo que puso)", "BALANCE FINAL\n(A pagar / A recibir)"]
for col_num, value in enumerate(headers_resumen):
    sheet_resumen.write(2, col_num + 1, value, fmt_header)

for i, persona in enumerate(habitantes):
    row = 3 + i
    sheet_resumen.write(row, 1, persona, fmt_bold)
    
    # 1. TOTAL CONSUMIDO (Suma de columnas de consumo en ambas hojas)
    # Comidas: Juano(K), Alberto(L), Mitchel(M) -> K=10, L=11, M=12. Letras K, L, M
    col_letra_comida = chr(75 + i) 
    # Gastos: Juano(E), Alberto(F), Mitchel(G) -> Letras E, F, G
    col_letra_gasto = chr(69 + i)
    
    formula_consumo = f'=SUM(Registro_Comidas!{col_letra_comida}2:{col_letra_comida}51) + SUM(Gastos_Generales!{col_letra_gasto}2:{col_letra_gasto}51)'
    sheet_resumen.write_formula(row, 2, formula_consumo, fmt_currency)
    
    # 2. TOTAL PAGADO (SUMIF: Sumar si la columna "Pagado Por" es igual al nombre)
    # En Comidas, "Pagado Por" es Col D. Costo es Col C.
    # En Gastos, "Pagado Por" es Col D. Monto es Col C.
    
    formula_pagado = (
        f'=SUMIF(Registro_Comidas!$D$2:$D$51, "{persona}", Registro_Comidas!$C$2:$C$51) + '
        f'SUMIF(Gastos_Generales!$D$2:$D$51, "{persona}", Gastos_Generales!$C$2:$C$51)'
    )
    sheet_resumen.write_formula(row, 3, formula_pagado, fmt_currency)
    
    # 3. BALANCE (Pagado - Consumido)
    # Si es positivo, puso más de lo que consumió (le deben). Si es negativo, debe.
    formula_balance = f'=D{row+1}-C{row+1}'
    
    # Escribimos con formato condicional simple: si es >=0 verde, si no rojo. 
    # ExcelWriter permite conditional formatting, pero aquí aplicaremos el estilo a la celda 
    # y el usuario verá el color numérico (rojo para negativos es estándar en contabilidad).
    sheet_resumen.write_formula(row, 4, formula_balance, fmt_currency)

# Formato condicional visual para la columna Balance
sheet_resumen.conditional_format(f'E4:E6', {'type': 'cell', 'criteria': '<', 'value': 0, 'format': fmt_total_neg})
sheet_resumen.conditional_format(f'E4:E6', {'type': 'cell', 'criteria': '>=', 'value': 0, 'format': fmt_total_pos})

sheet_resumen.set_column('B:E', 22)
sheet_resumen.write(1, 1, "ESTADO DE CUENTA DE LA CASA", fmt_bold)

writer.close()
print(f"Excel actualizado generado: {archivo_salida}")
