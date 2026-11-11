import random
wizard_list =['Паучьи лапки', 'жабий палец', 'глаз тритона', 'крыло летучей мыши', 'жир слизня', 'перхоть змеи']
wizard_list.insert(2, 'медвежий коготь')
#print(*wizard_list, sep="\n")
wizard_instruments =['волшебная палка', 'мантия невидимка', 'волшебная шапка', 'часы', 'перо', 'коврик']
#wizard_instruments.insert(5, 'скороходы')
#print(*wizard_instruments, sep="\n")
print(wizard_instruments + wizard_list)
print(wizard_list[2]*3)
print (random.choice(wizard_list) + random.choice(wizard_instruments))