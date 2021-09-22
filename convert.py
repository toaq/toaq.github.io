for i in range(1, 27):
    page = 'refgram/%02d/index.html' % i
    html = open(page).read()
    a, b, c = html.partition('<div class="textbody">')
    html = "---\nlayout: default\n---\n" + b + c
    html = html.partition('<!-- Start Footer -->')[0]
    with open(page, 'w') as f:
        f.write(html)
