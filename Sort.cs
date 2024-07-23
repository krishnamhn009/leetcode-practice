using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CodePractice
{
    public class Sort
    {
       public static void MergeSort(int[] arr, int left, int right)
        {
            if (left < right)
            {
                int middle = left + (right - left) / 2;
                MergeSort(arr, left, middle);
                MergeSort(arr, middle + 1, right);
                Merge(arr, left, middle, right);
            }
        }

       static void Merge(int[] array, int left, int middle, int right)
        {
            var leftArrayLength = middle - left + 1;
            var rightArrayLength = right - middle;
            var leftTempArray = new int[leftArrayLength];
            var rightTempArray = new int[rightArrayLength];
            int i, j;
            for (i = 0; i < leftArrayLength; ++i)
                leftTempArray[i] = array[left + i];
            for (j = 0; j < rightArrayLength; ++j)
                rightTempArray[j] = array[middle + 1 + j];
            i = 0;
            j = 0;
            int k = left;
            while (i < leftArrayLength && j < rightArrayLength)
            {
                if (leftTempArray[i] <= rightTempArray[j])
                {
                    array[k++] = leftTempArray[i++];
                }
                else
                {
                    array[k++] = rightTempArray[j++];
                }
            }
            while (i < leftArrayLength)
            {
                array[k++] = leftTempArray[i++];
            }
            while (j < rightArrayLength)
            {
                array[k++] = rightTempArray[j++];
            }
        }

       public static void QuickSort(int[] arr,int low,int high)
        {
            if (low < high)
            {
                int partition = Partition(arr, low, high);
                QuickSort(arr, low, partition-1);
                QuickSort(arr,partition+1,high);
            }
        }
      
        static int Partition(int[] arr,int low,int high)
        {
            int pivot = arr[high];
            int i = low - 1;
            for (int j = low;j<high;++j)
            {
                if (arr[j] < pivot)
                {
                    i++;
                    Swap(arr[i], arr[j]);
                }
            }
            Swap(arr[i+1], arr[high]);
            return i + 1;
        }
        static void Swap(int value1, int value2)
        {
            int temp = value1;
            value1 = value2;
            value2 = temp;
        }

    }
}
