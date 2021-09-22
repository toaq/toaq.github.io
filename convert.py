for i in range(1, 27):
    page = 'refgram/%02d/index.html' % i
    lines = []
    bad = set()
    for i, line in enumerate(open(page)):
        if 'left-btn' in line: bad |= {i,i+1,i+2,i+3,i+4,i+5}
        if i not in bad: lines.append(line)
    with open(page, 'w') as f:
        f.write(''.join(lines))
