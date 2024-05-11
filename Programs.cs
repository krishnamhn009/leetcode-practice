using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp2
{
    static class Programs
    {

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
