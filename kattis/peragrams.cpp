/*
 * Only one char has odd number of occurences in Palindrome 
 */
 
#include<bits/stdc++.h>
using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
//  freopen("inp.txt", "r", stdin);
    
    string s;
    int alphabetOccurence[26];
    memset(alphabetOccurence, 0, sizeof (alphabetOccurence));
    int res = 0;
    
    getline(cin, s);
    for (char ch : s) {
        alphabetOccurence[ch - 'a']++;
    }
    
    for (int i = 0; i < 26; i++) {
        if (alphabetOccurence[i] % 2 != 0) {
            res++;
        }
    }
    
    cout << (res == 0 ? 0 : res - 1);
    
    return 0;
}
