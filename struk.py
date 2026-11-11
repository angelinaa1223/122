import math
x = int(input('Шановний user1, вкажіть бажану величину геометричної фігури'))
print('Обрана фігура', x)
A = float(input('Шановний user1, вкажіть бажану величину сторони фігури'))
print('сторона фігури', A)
if x == 1:
    S=2*math.pi*A
    print('Площа кругa =', S)
elif x == 2:
    S = math.pow(A, 2)     
    print('Площа квадрата = ', S)
elif x == 3:
    S= (A*A)/2*math.sin(60) 
    print('Площа трикутника', S)
else: print("Такої фігури не існує")