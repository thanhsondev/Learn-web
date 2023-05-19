import addition
import pytest


def test_add():
    assert addition.add(2, 3) == 5


def test_sub():
    assert addition.sub(2, 3) == -1
