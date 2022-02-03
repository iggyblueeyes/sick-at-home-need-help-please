pageNames = ["index", "get-started", "tests", ""]

title = 'helloworld'

filename = title + '.html'

f = open(filename,'w')

message = """<html>
<head></head>
<body><p>Hello World!</p></body>
</html>"""

f.write(message)
f.close()
