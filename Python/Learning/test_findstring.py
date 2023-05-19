from curses.ascii import isdigit
import findstring
import pytest


def test_is_present():
    assert findstring.is_present("John")
