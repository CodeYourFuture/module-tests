import urllib.request
import csv

output_dir = 'submissions'
print('assuming directory exists: %s' %output_dir)

with open('urls.csv', newline='') as csvfile:
    csv = csv.reader(csvfile, delimiter=',', quotechar='|')
    for [n,url] in csv:
        if len(url) > 2:
            print("saving %s" % n.lower())
            urllib.request.urlretrieve(url + "/raw", output_dir + '/' + n.lower()+".js")
    

