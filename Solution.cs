using System;
using System.Collections.Generic;

/// <summary>
/// Summary description for Class1
/// </summary>
public class Solution
{
    public string DecodeString(string s)
    {
        Stack<char> st = new Stack<char>();
        string result = "";
        for (int i = 0; i < s.Length; ++i)
        {
            st.Push(s[i]);
        }
        while (st.Count > 0)
        {
            string str = "";
            char ch = st.Pop();
            if (ch == ']')
            {
            }
            else if (ch == '[')
            {
                char charNum = st.Pop(); //2
                int no = (int)charNum;
                for (int k = 1; k <= no; ++k)
                {
                    str = str + str;  //bcbcbc
                }
                result = str + result;
                str = "";
            }
            else
            {
                str = ch.ToString() + str;//abcbcbc
            }
        }
        return result;
    }
}
