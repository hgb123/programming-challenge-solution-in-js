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
    	int n,d=0;
    	cin>>n;
    	int temp=n;
    	while (n) {
    		int a = n%10;
    		if (a!=0&&temp%a==0) d++;
    		n/=10;
    	}
    	cout<<d<<endl;
    }
    return 0;
}
