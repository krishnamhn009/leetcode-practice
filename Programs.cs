using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace ConsoleApp2
{
    static class Programs
    {
        public static int[] SmallerNumbersThanCurrent(int[] nums)
        {
            // return BruteForce(nums);
            int[] sortedArray = new int[nums.Length];
            int[] ans = new int[nums.Length];
            Array.Copy(nums, sortedArray, nums.Length);
            MergeSort(sortedArray, 0, nums.Length-1);
            for (int i = 0; i < nums.Length; ++i)
            {
                ans[i] = Array.IndexOf(sortedArray, nums[i]);
            }
            return ans;
        }

        static void MergeSort(int[] arr, int left, int right)
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


        public static  int[][] MatrixBlockSum(int[][] mat, int k)
        {
            int[][] ans = new int[mat.Length][];
            for (int i = 0; i < mat.Length; ++i)
            {
                ans[i] = new int[mat[i].Length];
            }

            //brute-force 
            for (int i = 0; i < mat.Length; ++i)
            {
                for (int j = 0; j < mat[i].Length; ++j)
                {
                    int r1 = Math.Max(i - k, 0);
                    int c1 = Math.Max(j - k, 0);

                    int r2 = Math.Min(i + k, mat.Length - 1);
                    int c2 = Math.Min(j + k, mat[i].Length - 1);

                    for (int r = r1; r <= r2; ++r)
                    {
                        for (int l = c1; l <= c2; ++l)
                        {
                            ans[i][j] = ans[i][j] + mat[r][l];
                        }
                    }
                }
            }
            return ans;
        }
        public static  int MinGroups(int[][] intervals)
        {
            int max = 0;//getting max range 
            foreach (var inter in intervals)
            {
                max = Math.Max(max, inter[1]);
            }

            int[] line = new int[max + 2];
            foreach (var inter in intervals)
            {
                line[inter[0]]++;
                line[inter[1] + 1]--;
            }
            int maxOverlap = 0;
            int currOverlap = 0;
            for (int i = 0; i < line.Length; i++)
            {
                currOverlap += line[i];
                maxOverlap = Math.Max(maxOverlap, currOverlap);
            }

            return maxOverlap;
        }
        public static string PredictPartyVictory(string senate) //DDR
        {
            Queue<char> senators = new Queue<char>(senate);
            int countR = senate.Count(x => x == 'R');
            int countD = senate.Length - countR;
            int scale = 0;
            while (countR > 0 && countD > 0)
            {
                char senator = senators.Dequeue();
                if (senator == 'R')
                {
                    if (scale >= 0)
                    {
                        countD--;
                        senators.Enqueue(senator);
                    }
                    scale++;
                }
                else
                {
                    if (scale <= 0)
                    {
                        countR--;
                        senators.Enqueue(senator);
                    }
                    scale--;
                }

            }
            return countR == 0 ? "Dire" : "Radiant";
        }
    }
}
