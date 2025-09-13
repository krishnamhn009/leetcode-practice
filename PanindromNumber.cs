

namespace CodePractice
{
    public class PanindromNumber
    {
        public static bool IsPalindrome(int x)
        {
            if (x < 0) return false; // Negative numbers are not palindromes
            int original = x;
            int reversed = 0;
            while (x > 0)
            {
                int digit = x % 10;
                reversed = reversed * 10 + digit;
                x /= 10;
            }
            return original == reversed;
        }
        /// <summary>
        /// Get largest palindrom number canbe formed by combination of digits excluding 0
        /// </summary>
        /// <param name="number"></param>
        /// <returns></returns>
        public static int GetLargestPalindromeNumber(int number)
        {
            int[] largest = new int[10];
            int[] frequency = new int[10];
            int num = number;
            int front = 0;
            while (num > 0)
            {
                int digit = num % 10;
                num /= 10;
                frequency[digit]++;
            }
            for (int i = 9; i > 0; i--)
            {
                if ((frequency[i] & 1) == 1) //odd
                {
                    if (frequency[i] > largest[number.ToString().Length / 2]) // need only larger palindrome num formed
                        largest[number.ToString().Length / 2] = i;
                    frequency[i]--;
                }
                while (frequency[i] > 0)
                {
                    largest[front++] = i;
                    largest[number.ToString().Length - 1 - front] = i;
                    frequency[i] -= 2;
                }
            }
            string largestPalindrome = string.Join("", largest).Replace("0", "");//

            return Int32.Parse(largestPalindrome);
        }
    }
}
