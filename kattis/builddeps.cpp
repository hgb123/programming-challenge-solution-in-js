/*
 *  Graph
 *  Topological sort
 */

#include<bits/stdc++.h>
using namespace std;

unordered_map<string, vector<string>> file;
unordered_map<string, bool> visited;
vector<string> topo;
int n;

void dfs(string x) {
    visited[x] = true;
    
    for (string y : file[x]) {
        if (visited.find(y) == visited.end()) {
            dfs(y);
        }
    }
    
    topo.push_back(x);
}

int main() {
    ios_base::sync_with_stdio(false);
//  freopen("inp.txt","r",stdin);

    cin >> n;
    cin.ignore();
    
    for (int i=0; i<n; ++i) {
        string s;
        getline(cin,s);
        istringstream iss(s);
        
        string header;
        iss >> header;
        header.pop_back();
        
        string oya;
        while (iss >> oya) {
            file[oya].push_back(header);
        }
    }
    
    string changedFile;
    cin >> changedFile;
    dfs(changedFile);
    
    for (int i = topo.size() - 1; i >= 0; --i) {
        cout << topo[i] << "\n";
    }
    
    return 0;
}
