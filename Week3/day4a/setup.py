#!python3

from setuptools import setup

# read the contents of your README file
from os import path

this_directory = path.abspath(path.dirname(__file__))
with open(path.join(this_directory, 'README.md'), encoding='utf-8') as f:
    long_description = f.read()

setup(name='sorting_algorithms_byTP',
      version='0.3',
      description='Most popular sorting algorithms',
      long_description=long_description,
      long_description_content_type='text/markdown',
      url='http://github.com/storborg/funniest',
      author='Tatiana Pan',
      author_email='flyingcircus@example.com',
      license='MIT',
      packages=['sorting_algorithms'],
      scripts = ['./script.py'],
      test_suite='nose.collector',
      tests_require=['nose'],
      zip_safe=False)
