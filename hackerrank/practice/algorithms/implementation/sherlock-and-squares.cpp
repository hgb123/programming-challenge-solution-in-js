#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;


int main() {
    int t;
    cin>>t;
    while(t--) {
    	long a,b;
    	cin>>a>>b;
    	cout<<floor(sqrt(b))-ceil(sqrt(a))+1<<endl;
    }

    return 0;
}
