#include<bits/stdc++.h>
#define N 100000
using namespace std;
typedef long long ll;
ll n, a[N], mem[N];

ll msa(int i) {
	if (i == 0) {
		return a[0];
	}

	if (mem[i] != -1) {
		return mem[i];
	}

	ll res = max(a[i], a[i]+msa(i-1));

	mem[i] = res;
	return res;
}

int main() {
	ios_base::sync_with_stdio(false);

	int t;
	cin >> t;
	while (t--) {
		cin >> n;
		for (int i=0; i<n; i++) {
			cin >> a[i];
		}

		memset(mem, -1, sizeof(mem));
		ll res = msa(0);
		for (int i=1; i<n; i++) {
			res = max(res, msa(i));
		}
		cout << res << " ";

        sort(a,a+n);
		memset(mem, -1, sizeof(mem));
		res = msa(0);
		for (int i=1; i<n; i++) {
			res = max(res, msa(i));
		}
		cout << res << "\n";
	}

	return 0;
}
