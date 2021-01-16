#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;


int main(){
    int t;
    cin >> t;
    while (t--) {
    	int n;
    	cin>>n;
    	if (!n) {
    		cout<<"1"<<endl;
    		continue;
    	}
    	int h = 1;
    	for (int i=1;i<=n;i++)
    		if (i%2==0) h+=1;
    		else h*=2;
    	cout<<h<<endl;
    }
    return 0;
}
