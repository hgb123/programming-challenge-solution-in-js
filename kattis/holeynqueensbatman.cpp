/*
 * Backtracking by column
 */

#include<bits/stdc++.h>
#define N 12
using namespace std;
int board[N][N], n, m, res, queenLeft;
bool isHole[N][N];

inline bool validPos(int row, int col) {
    int i, j;

    for (i = 0; i < col; i++)
        if (board[row][i])
            return false;

    for (i=row, j=col; i>=0 && j>=0; i--, j--)
        if (board[i][j])
            return false;

    for (i=row, j=col; j>=0 && i<N; i++, j--)
        if (board[i][j])
            return false;

    return true;
}

inline void Try(int col) {
    if (col >= n) {
        res++;
        return;
    }
    for (int i = 0; i < n; i++) {
        if (!isHole[i][col] && validPos(i, col)) {
            board[i][col] = 1;
            Try(col + 1);
            board[i][col] = 0;
        }
    }
    return;
}

int main() {
    ios_base::sync_with_stdio(false);
//  freopen("inp.txt","r",stdin);

    while (cin >> n >> m) {
        if (n == 0 && m == 0) {
            break;
        }

        memset(board, 0, sizeof(board));
        memset(isHole, false, sizeof(isHole));

        for (int i = 0; i < m; i++) {
            int x, y;
            cin >> x >> y;
            isHole[x][y] = true;
        }

        res = 0;
        Try(0);

        cout << res << "\n";
    }

    return 0;
}
