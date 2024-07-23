using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CodePractice
{
    public class ArrayReduction
    {
        public static int GCD(int a, int b)
        {
            while (b != 0)
            {
                int temp = b;
                b = a % b;
                a = temp;
            }
            return a;
        }

        public static int ReduceArray(int[] arr)
        {
            List<int> list = arr.ToList();
            int totalCost = 0;

            while (list.Count > 1)
            {
                list.Sort(); // Sort the list to get the two smallest numbers
                int num1 = list[0];
                int num2 = list[1];

                int gcd = GCD(num1, num2);
                totalCost += gcd;

                int sum = num1 + num2;
                list.RemoveAt(0); // Remove the smallest element
                list.RemoveAt(0); // Remove the second smallest element
                list.Add(sum); // Add the sum of the two smallest elements
            }

            return totalCost;
        }
    }
}
