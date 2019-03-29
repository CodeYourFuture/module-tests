import os

def grab_section(name, q_num):
    lines = os.popen("awk '/* Question %d/,/Question %d/' submissions/%s | head -n-1" % ( q_num, q_num+1, name )).read()
    return lines

def grab_last_section(name):
    lines = os.popen("awk '/* Question 9/,/module/' submissions/%s | head -n-1" % name).read()
    return lines
    
data = {}
order = []

for q_num in [1,2,3,4,5,6,7,8,9]:
    for name in sorted(os.listdir('submissions/')):
        print("//\n// For %s Question %d\n//\n"% (name, q_num))
        print(grab_section(name, q_num))
