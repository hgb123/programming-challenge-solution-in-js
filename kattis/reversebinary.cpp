/*
 * Use library
 */
#include<bits/stdc++.h>
using namespace std;
int main() {
    //freopen("inp.txt","r",stdin);
    unsigned long int n;
    cin >> n;
    
    bitset<32> tempN(n);
    string tempS(tempN.to_string());
    while (tempS[0] == '0') {
        tempS.erase(tempS.begin());
    }
    reverse(tempS.begin(),tempS.end());
    bitset<32> res(tempS);
    
    cout << res.to_ulong() << endl; 
    
    return 0;
}
