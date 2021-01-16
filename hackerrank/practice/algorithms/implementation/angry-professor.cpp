#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;

int main(){
    int t;
    cin >> t;
    while (t--){
        int n,k,d=0,a[1000];
        cin>>n>>k;
        for (int i=0;i<n;i++) {
            cin>>a[i];
            if (a[i]<=0) d++;

        }

        if (d<k) cout<<"YES"<<endl;
        else cout<<"NO"<<endl;
    }
    return 0;
}
