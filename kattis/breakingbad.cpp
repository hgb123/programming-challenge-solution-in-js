/*
 * Graph
 * Bipartite check
 */

#include<bits/stdc++.h>
using namespace std;
const int MAX = 100000;
vector<int> g[MAX];
vector<int> side(MAX, -1);
bool isBipartite = true;

void checkBipartite(int u) {
    for (int i = 0; i < g[u].size(); ++i) {
        int v = g[u][i];
        if (side[v] == -1) {
            side[v] = 1 - side[u];
            checkBipartite(v);
        } else if (side[u] == side[v]) {
            isBipartite = false;
        }
    }
}

int main() {
    ios_base::sync_with_stdio(false);
    //freopen("inp.txt","r",stdin);
    
    int n, m;
    
    cin >> n;
    vector<string> ingredient(n);
    unordered_map<string, int> pos;
    for (int i = 0; i < n; ++i) {
        cin >> ingredient[i];
        pos[ingredient[i]] = i;
    }
    
    cin >> m;
    for (int i = 0; i < m; ++i) {
        string item1, item2;
        cin >> item1 >> item2;
        g[pos[item1]].push_back(pos[item2]);
        g[pos[item2]].push_back(pos[item1]);
    }
    
    for (int i = 0; i < n; ++i) {
        if (side[i] == -1) {
            side[i] = 0;
            checkBipartite(i);
        }
    }
    
    if (!isBipartite) {
        cout << "impossible" << endl;
        return 0;
    }
    
    vector<string> walter, jesse;
    
    for (int i = 0; i < n; ++i) {
        if (side[i] == 0) {
            walter.push_back(ingredient[i]);
        } else {
            jesse.push_back(ingredient[i]);
        }
    }
    
    for (string i : walter) {
        cout << i << " ";
    }
    cout << endl;
    for (string i : jesse) {
        cout << i << " ";
    }

    return 0;
}
