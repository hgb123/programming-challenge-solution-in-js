/*
 * Ad-hoc
 */ 

#include<bits/stdc++.h>
using namespace std;

bool checkVowel(char c) {
	return c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u' ;
}

int main() {
	ios_base::sync_with_stdio(false);
	//freopen("inp.txt", "r", stdin);
	
	string s, res;
	getline(cin, s);
	for (int i = 0; i < s.size(); i++) {
		res += s[i];
		if (checkVowel(s[i])) {	
			i += 2;
		}
	}
	
	cout << res;

	return 0;
}
