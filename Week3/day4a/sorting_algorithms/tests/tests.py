from unittest import TestCase

import sorting_algorithms

class Test(TestCase):

    def test_bubble_sort(self):
        alist = [54, 26, 93, 17, 77, 31, 44, 55, 20]
        sorted_list = [17, 20, 26, 31, 44, 54, 55, 77, 93]

        self.assertEqual(sorting_algorithms.bubble_sort(alist), sorted_list)

    def test_quick_sort(self):
        alist = [54, 26, 93, 17, 77, 31, 44, 55, 20]
        sorted_list = [17, 20, 26, 31, 44, 54, 55, 77, 93]

        self.assertEqual(sorting_algorithms.quick_sort(alist), sorted_list)

    def test_selection_sort(self):
        alist = [54, 26, 93, 17, 77, 31, 44, 55, 20]
        sorted_list = [17, 20, 26, 31, 44, 54, 55, 77, 93]

        self.assertEqual(sorting_algorithms.selection_sort(alist), sorted_list)

    def test_insertion_sort(self):
        alist = [54, 26, 93, 17, 77, 31, 44, 55, 20]
        sorted_list = [17, 20, 26, 31, 44, 54, 55, 77, 93]

        self.assertEqual(sorting_algorithms.insertion_sort(alist), sorted_list)


