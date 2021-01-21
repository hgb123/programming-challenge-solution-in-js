#include<bits/stdc++.h>
#define M 55
#define N 255
using namespace std;
int c[M], m, n;
long mem[N][M];

long coinChange(int amount, int i) {
	// Meaning: number of way to change amount money with first 1..i coin
	if (amount<0 || i<=0) {
		return 0;
	}

	if (amount==0) {
		return 1;
	}

	if (mem[amount][i] != -1) {
		return mem[amount][i];
	}

	long res = coinChange(amount, i-1) + coinChange(amount-c[i], i);
	// term 1: if not use c[i]
	// term 2: if use at least 1 c[i], note that this is not 0-1


	mem[amount][i] = res;
	return res;
}

int main() {
	ios_base::sync_with_stdio(false);

	cin >> n >> m;
	for (int i=1; i<=m; i++) {
		cin >> c[i];
	}

	memset(mem, -1, sizeof(mem));
	cout << coinChange(n,m);
	return 0;
}
