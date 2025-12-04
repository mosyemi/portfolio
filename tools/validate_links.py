#!/usr/bin/env python3
"""
Simple internal link validator for this static portfolio.
Scans all .html files in the current directory, extracts local hrefs, and checks that targets exist.
Skips external links (http(s):, mailto:, tel:), and fragment-only links.

Usage:
    python3 tools/validate_links.py

Exits with code 0 if all internal links exist, otherwise 1 and prints missing targets.
"""
import os
import re

ROOT = os.path.dirname(os.path.dirname(__file__)) if os.path.basename(__file__) == 'validate_links.py' else '.'
ROOT = os.path.abspath('.')

html_files = [f for f in os.listdir(ROOT) if f.lower().endswith('.html')]
link_pattern = re.compile(r'href\s*=\s*"([^"]+)"', re.IGNORECASE)

broken = []

for html in html_files:
    path = os.path.join(ROOT, html)
    with open(path, 'r', encoding='utf-8') as fh:
        content = fh.read()
    hrefs = link_pattern.findall(content)
    for href in hrefs:
        # skip external and special links
        if href.startswith('#') or href.startswith('mailto:') or href.startswith('tel:') or href.startswith('http://') or href.startswith('https://') or href.startswith('javascript:'):
            continue
        # remove fragment and query
        target = href.split('#')[0].split('?')[0]
        # if empty after removing fragment, skip
        if not target:
            continue
        # normalize relative paths
        target_path = os.path.join(ROOT, target)
        if not os.path.exists(target_path):
            broken.append((html, href))

if broken:
    print('Broken internal links found:')
    for src, href in broken:
        print(f'  In {src}: {href} -> MISSING')
    print('\nRun the server from project root and fix filenames or update links.')
    raise SystemExit(1)

print('All internal links point to existing files.')
raise SystemExit(0)
