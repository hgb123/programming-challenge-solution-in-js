#include<bits/stdc++.h>
using namespace std;

int main() {
	ios_base::sync_with_stdio(false);
	// freopen("inp.txt","r",stdin);
	int n;
	cin >> n;
	int *a = new int[n+1];
	for (int i=0; i<n; ++i) {
		cin >> a[i];
	}

	set<int> st;
	set<int>::iterator it;
	st.clear();
	for (int i=0; i<n; i++) {
		it = st.lower_bound(a[i]);
		if (it != st.end()) {
			st.erase(it);
		}
		st.insert(a[i]);
	}

	cout << st.size() << endl;
	return 0;
}
